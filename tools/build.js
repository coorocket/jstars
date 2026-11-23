#!/usr/bin/env node
// Static page generator.
//   tools/template-b2b.html (ko) / tools/template-b2c.html (zh-CN, zh-TW, en)
//   + tools/partials/*.html + the `translations` dictionary in app.js
//   -> index.html (zh-CN), zh-tw/index.html, ko/index.html, en/index.html, sitemap.xml, llms.txt
//
// Usage: node tools/build.js
// The generated files are committed (GitHub Pages serves the repo as-is).
const fs = require("fs");
const path = require("path");
const vm = require("vm");

// ---- Settings: change these in one place ----
const CONFIG = {
  ORIGIN: "https://coorocket.github.io/jstars", // new domain: change only this value
  LASTMOD: "2026-11-23", // fixed string (date of the PR); never read the clock
  ASSET_VERSION: "20261123-1", // styles.css?v= / app.js?v=
  GA_ID: "", // empty: no gtag script is loaded
  INSTAGRAM_URL: "", // empty: no Instagram button; WeChat stays the zh-TW primary button
};

const ROOT = path.resolve(__dirname, "..");
const { ORIGIN } = CONFIG;

// primary: main contact button of the B2C template (zh-TW switches to Instagram when INSTAGRAM_URL is set)
const PAGES = [
  { lang: "zh-CN", dir: "", template: "b2c", primary: "wechat", ogLocale: "zh_CN", switchLabel: ["简体", "简体"], font: "Noto+Sans+SC:wght@500;600;700;800" },
  { lang: "zh-TW", dir: "zh-tw/", template: "b2c", primary: CONFIG.INSTAGRAM_URL ? "instagram" : "wechat", ogLocale: "zh_TW", switchLabel: ["繁體", "繁體"], font: "Noto+Sans+TC:wght@500;600;700;800" },
  { lang: "ko", dir: "ko/", template: "b2b", primary: "sms", ogLocale: "ko_KR", switchLabel: ["한국어", "한국어"], font: "Noto+Sans+KR:wght@400;500;600;700;800" },
  { lang: "en", dir: "en/", template: "b2c", primary: "email", ogLocale: "en_US", switchLabel: ["EN", "English"], font: "" }, // system fonts
];
const HREFLANG = [
  ["zh-CN", ""], ["zh-TW", "zh-tw/"], ["zh-HK", "zh-tw/"], ["ko", "ko/"], ["en", "en/"], ["x-default", "en/"],
  ["zh-Hans", ""], ["zh-Hant", "zh-tw/"],
];
const SERVICE_TYPES = [
  "Chinese–Korean consecutive interpretation",
  "Medical interpretation",
  "Beauty and personal colour interpretation",
  "Business meeting interpretation",
  "VIP escort interpretation",
  "Document translation",
];

const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const write = (p, s) => {
  fs.mkdirSync(path.dirname(path.join(ROOT, p)), { recursive: true });
  fs.writeFileSync(path.join(ROOT, p), s);
};

function loadDictionary() {
  const src = read("app.js");
  const start = src.indexOf("const translations = {");
  const end = src.indexOf("\n  };\n", start);
  const ctx = { translations: null };
  vm.runInNewContext(src.slice(start, end + 5).replace("const translations =", "translations ="), ctx);
  return ctx.translations;
}

const byPath = (obj, p) => p.split(".").reduce((v, k) => (v == null ? v : v[k]), obj);
const escText = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// {{> name}} -> tools/partials/name.html
function partials(html) {
  return html.replace(/\{\{> ([a-z-]+)\}\}\n?/g, (_, name) => read(`tools/partials/${name}.html`));
}

// <!--@if flag--> ... <!--@/if-->  (no nesting)
function conditionals(html, flags) {
  return html.replace(/<!--@if ([a-z-]+)-->\n?([\s\S]*?)<!--@\/if-->\n?/g, (_, flag, body) => (flags.has(flag) ? body : ""));
}

function pageFlags(page) {
  const flags = new Set([`primary-${page.primary}`]);
  if (page.lang === "en" && CONFIG.INSTAGRAM_URL) flags.add("extra-instagram");
  return flags;
}

function applyDictionary(html, dict, base) {
  // textContent / innerHTML replacements (elements without nested same-name tags)
  html = html.replace(/<([a-zA-Z0-9]+)((?:\s[^>]*?)?\sdata-i18n(-html)?="([^"]+)"[^>]*)>([\s\S]*?)<\/\1>/g,
    (m, tag, attrs, isHtml, key) => {
      const value = byPath(dict, key);
      if (typeof value !== "string") throw new Error(`missing dictionary key: ${key}`);
      return `<${tag}${attrs}>${isHtml ? value : escText(value)}</${tag}>`;
    });
  // attribute replacements
  const setAttr = (attrs, name, value) => {
    const re = new RegExp(`\\s${name}="[^"]*"`);
    return re.test(attrs) ? attrs.replace(re, ` ${name}="${escAttr(value)}"`) : `${attrs} ${name}="${escAttr(value)}"`;
  };
  html = html.replace(/<([a-zA-Z0-9]+)((?:\s[^>]*?)?\sdata-i18n-(alt|aria|href)="([^"]+)"[^>]*)>/g, (m, tag, attrs, kind, key) => {
    const value = byPath(dict, key);
    if (typeof value !== "string") throw new Error(`missing dictionary key: ${key}`);
    const name = kind === "aria" ? "aria-label" : kind;
    return `<${tag}${setAttr(attrs, name, kind === "href" ? base + value : value)}>`;
  });
  return html;
}

function langSwitch(current, base, mobile) {
  const items = PAGES.map((p) => {
    const href = (base || "./") + p.dir;
    const label = p.switchLabel[mobile ? 1 : 0];
    const active = p.lang === current;
    return `<a class="lang-button${active ? " is-active" : ""}" href="${href === "./" ? "./" : href}" hreflang="${p.lang}" lang="${p.lang}" data-lang="${p.lang}"${active ? ' aria-current="true"' : ""}>${label}</a>`;
  }).join("\n          ");
  const cls = mobile ? "mobile-language" : "language-switch";
  return `<div class="${cls}" role="group" aria-label="Language">\n          ${items}\n        </div>`;
}

// FAQ pairs q1/a1 ... in dictionary order; the same list feeds the page markup and the FAQPage JSON-LD.
function faqPairs(dict) {
  const pairs = [];
  for (let i = 1; typeof dict.faq[`q${i}`] === "string"; i += 1) pairs.push({ i, q: dict.faq[`q${i}`], a: dict.faq[`a${i}`] });
  return pairs;
}

function faqItems(dict) {
  return faqPairs(dict).map(({ i, q, a }) =>
    `          <details><summary><span data-i18n="faq.q${i}">${escText(q)}</span><i aria-hidden="true"></i></summary><p data-i18n="faq.a${i}">${escText(a)}</p></details>`).join("\n");
}

const ldScript = (obj) => {
  const text = JSON.stringify(obj, null, 2).replace(/</g, "\\u003c").split("\n").map((l) => "    " + l).join("\n");
  return `  <script type="application/ld+json">\n${text}\n  </script>`;
};

function headSeo(page, dict) {
  const url = `${ORIGIN}/${page.dir}`;
  const ogImage = `${ORIGIN}/assets/og/og-${page.lang}.jpg`;
  const { title, description, ogAlt } = dict.meta;
  const t = escAttr(title);
  const d = escAttr(description);
  const alternates = HREFLANG.map(([l, p]) => `  <link rel="alternate" hreflang="${l}" href="${ORIGIN}/${p}" />`).join("\n");
  const business = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: "Jstar",
    alternateName: ["제이스타", "Jstar Studio"],
    url,
    image: `${ORIGIN}/assets/translation.webp`,
    description,
    inLanguage: page.lang,
    email: "cmdlabkr@gmail.com",
    areaServed: ["Seoul", "South Korea"],
    knowsLanguage: ["ko", "zh-Hans", "zh-Hant"],
    priceRange: "₩30,000~ / hour",
    serviceType: SERVICE_TYPES,
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: page.lang,
    mainEntity: faqPairs(dict).map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  return `  <title>${escText(title)}</title>
  <meta name="description" content="${d}" />
  <link rel="canonical" href="${url}" />
${alternates}

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Jstar" />
  <meta property="og:locale" content="${page.ogLocale}" />
  <meta property="og:title" content="${t}" />
  <meta property="og:description" content="${d}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${ogImage}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${escAttr(ogAlt)}" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${t}" />
  <meta name="twitter:description" content="${d}" />
  <meta name="twitter:image" content="${ogImage}" />

${ldScript(business)}
${ldScript(faq)}`;
}

// One web font family per page (its own language); English uses system fonts.
function fontLinks(page) {
  if (!page.font) return "";
  return `  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=${page.font}&amp;display=swap" />
`;
}

function analytics() {
  const id = CONFIG.GA_ID;
  if (!id) return "";
  return `  <script async src="https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config",${JSON.stringify(id)});</script>`;
}

function buildSitemap() {
  const links = HREFLANG.map(([l, p]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${ORIGIN}/${p}" />`).join("\n");
  const urls = PAGES.map((p) => `  <url>
    <loc>${ORIGIN}/${p.dir}</loc>
    <lastmod>${CONFIG.LASTMOD}</lastmod>
${links}
    <changefreq>monthly</changefreq>
    <priority>${p.dir === "" ? "1.0" : "0.9"}</priority>
  </url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

function buildLlmsTxt() {
  return `# Jstar (제이스타)

> Mandarin–Korean interpreting in Seoul. On-site consecutive interpreting for clinics, beauty and personal colour appointments, business meetings and VIP escort. Working on site since 2007.

## Facts
- Service area: all of Seoul, South Korea (on-site)
- Languages: Korean, Chinese (Simplified and Traditional)
- Interpreting mode: consecutive only (no simultaneous interpreting)
- Price: from KRW 30,000 per hour. Long-term work by arrangement
- Team: a lead interpreter and three partner interpreters; up to five on the same day
- Reply hours: 08:30–20:30 Korea time
- Free pre-consultation before booking (video call available)
- Triple check: treatment or scope and cost are confirmed at consultation, before it starts and before payment
- Interpreters do not give medical advice and do not decide for the client

## Pages
- [简体中文](${ORIGIN}/): 面向来韩国的个人客人。医美·皮肤科·个人色彩·商务·VIP 陪同翻译
- [繁體中文](${ORIGIN}/zh-tw/): 給來韓國的個人客人。醫美·皮膚科·個人色彩·商務·VIP 隨行口譯
- [한국어](${ORIGIN}/ko/): 중국 손님을 받는 병원·뷰티샵·기업이 통역사를 부르는 안내
- [English](${ORIGIN}/en/): For visitors to Korea who need a Mandarin–Korean interpreter
`;
}

function main() {
  const dictionary = loadDictionary();
  for (const page of PAGES) {
    const dict = dictionary[page.lang];
    if (!dict) throw new Error(`missing dictionary: ${page.lang}`);
    const base = page.dir ? "../" : "";
    let html = partials(read(`tools/template-${page.template}.html`));
    html = conditionals(html, pageFlags(page));
    html = html.replace("{{FAQ_ITEMS}}", () => faqItems(dict));
    html = applyDictionary(html, dict, base);
    html = html
      .replace("{{HEAD_SEO}}", () => headSeo(page, dict))
      .replace("{{FONT_LINKS}}", () => fontLinks(page))
      .replace("{{ANALYTICS}}\n", () => (analytics() ? analytics() + "\n" : ""))
      .replace("{{LANG_SWITCH_MOBILE}}", () => langSwitch(page.lang, base, true))
      .replace("{{LANG_SWITCH_DESKTOP}}", () => langSwitch(page.lang, base, false))
      .replace(/\{\{INSTAGRAM_URL\}\}/g, () => escAttr(CONFIG.INSTAGRAM_URL))
      .replace(/\{\{ASSET_VERSION\}\}/g, CONFIG.ASSET_VERSION)
      .replace(/\{\{LANG\}\}/g, page.lang)
      .replace(/\{\{BASE\}\}/g, base);
    if (/\{\{[A-Z_> a-z-]+\}\}/.test(html) || /<!--@/.test(html)) throw new Error(`unresolved placeholder in ${page.lang}`);
    write(`${page.dir}index.html`, html);
    console.log(`wrote ${page.dir}index.html (${page.lang}, ${page.template})`);
  }
  write("sitemap.xml", buildSitemap());
  console.log("wrote sitemap.xml");
  write("llms.txt", buildLlmsTxt());
  console.log("wrote llms.txt");
}

main();
