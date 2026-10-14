#!/usr/bin/env node
// Static page generator: tools/template.html + the `translations` dictionary in app.js
// -> index.html (zh-CN), zh-tw/index.html, ko/index.html, en/index.html, sitemap.xml
//
// Usage: node tools/build.js
// The generated files are committed (GitHub Pages serves the repo as-is).
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const ORIGIN = "https://coorocket.github.io/jstars";

const PAGES = [
  { lang: "zh-CN", dir: "", ogLocale: "zh_CN", switchLabel: ["简体", "简体"] },
  { lang: "zh-TW", dir: "zh-tw/", ogLocale: "zh_TW", switchLabel: ["繁體", "繁體"] },
  { lang: "ko", dir: "ko/", ogLocale: "ko_KR", switchLabel: ["한국어", "한국어"] },
  { lang: "en", dir: "en/", ogLocale: "en_US", switchLabel: ["EN", "English"] },
];
const OG_ALT = {
  "zh-CN": "韩国医美中文陪同翻译 · 首尔江南 Jstar Studio",
  "zh-TW": "韓國醫美中文陪同翻譯 · 首爾江南 Jstar Studio",
  ko: "중국어 의료통역 · 서울 강남 제이스타",
  en: "Mandarin medical interpreter in Seoul · Jstar Studio",
};
const HREFLANG = [
  ["zh-CN", ""], ["zh-TW", "zh-tw/"], ["zh-HK", "zh-tw/"], ["ko", "ko/"], ["en", "en/"], ["x-default", "en/"],
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

function conditionals(html, lang) {
  const isKo = lang === "ko";
  html = html.replace(/<!--@ko-->\n?([\s\S]*?)<!--@\/ko-->\n?/g, (_, body) => (isKo ? body : ""));
  html = html.replace(/<!--@!ko-->\n?([\s\S]*?)<!--@\/!ko-->\n?/g, (_, body) => (isKo ? "" : body));
  return html;
}

function applyDictionary(html, dict, base) {
  // textContent / innerHTML replacements (elements without nested same-name tags)
  html = html.replace(/<([a-zA-Z0-9]+)((?:\s[^>]*?)?\sdata-i18n(-html)?="([^"]+)"[^>]*)>([\s\S]*?)<\/\1>/g,
    (m, tag, attrs, isHtml, key, inner) => {
      const value = byPath(dict, key);
      if (typeof value !== "string") return m;
      return `<${tag}${attrs}>${isHtml ? value : escText(value)}</${tag}>`;
    });
  // attribute replacements
  const setAttr = (attrs, name, value) => {
    const re = new RegExp(`\\s${name}="[^"]*"`);
    return re.test(attrs) ? attrs.replace(re, ` ${name}="${escAttr(value)}"`) : `${attrs} ${name}="${escAttr(value)}"`;
  };
  html = html.replace(/<([a-zA-Z0-9]+)((?:\s[^>]*?)?\sdata-i18n-(alt|aria|href)="([^"]+)"[^>]*)>/g, (m, tag, attrs, kind, key) => {
    const value = byPath(dict, key);
    if (typeof value !== "string") return m;
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

function headSeo(page, dict) {
  const url = `${ORIGIN}/${page.dir}`;
  const ogImage = `${ORIGIN}/assets/og/og-${page.lang}.jpg`;
  const { title, description } = dict.meta;
  const t = escAttr(title);
  const d = escAttr(description);
  const alternates = HREFLANG.map(([l, p]) => `  <link rel="alternate" hreflang="${l}" href="${ORIGIN}/${p}" />`).join("\n");
  const ld = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: "Jstar Studio",
    url,
    image: `${ORIGIN}/assets/translation.webp`,
    description,
    inLanguage: page.lang,
    email: "cmdlabkr@gmail.com",
    areaServed: ["Seoul", "Gangnam-gu", "South Korea"],
    knowsLanguage: ["zh-CN", "ko"],
    serviceType: ["Chinese medical interpretation", "Medical escort interpretation", "Medical translation", "Clinic interpretation coordination"],
  };
  const ldText = JSON.stringify(ld, null, 2).split("\n").map((l) => "    " + l).join("\n");
  return `  <title>${escText(title)}</title>
  <meta name="description" content="${d}" />
  <link rel="canonical" href="${url}" />
${alternates}

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Jstar Studio" />
  <meta property="og:locale" content="${page.ogLocale}" />
  <meta property="og:title" content="${t}" />
  <meta property="og:description" content="${d}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${ogImage}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${escAttr(OG_ALT[page.lang])}" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${t}" />
  <meta name="twitter:description" content="${d}" />
  <meta name="twitter:image" content="${ogImage}" />

  <script type="application/ld+json">
${ldText}
  </script>`;
}

function buildSitemap() {
  const links = HREFLANG.map(([l, p]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${ORIGIN}/${p}" />`).join("\n");
  const urls = PAGES.map((p) => `  <url>
    <loc>${ORIGIN}/${p.dir}</loc>
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

function main() {
  const dictionary = loadDictionary();
  const template = read("tools/template.html");
  for (const page of PAGES) {
    const dict = dictionary[page.lang];
    if (!dict) throw new Error(`missing dictionary: ${page.lang}`);
    const base = page.dir ? "../" : "";
    let html = conditionals(template, page.lang);
    html = applyDictionary(html, dict, base);
    html = html
      .replace("{{HEAD_SEO}}", () => headSeo(page, dict))
      .replace("{{LANG_SWITCH_MOBILE}}", () => langSwitch(page.lang, base, true))
      .replace("{{LANG_SWITCH_DESKTOP}}", () => langSwitch(page.lang, base, false))
      .replace(/\{\{LANG\}\}/g, page.lang)
      .replace(/\{\{BASE\}\}/g, base);
    if (/\{\{[A-Z_]+\}\}/.test(html)) throw new Error(`unresolved placeholder in ${page.lang}`);
    write(`${page.dir}index.html`, html);
    console.log(`wrote ${page.dir}index.html (${page.lang})`);
  }
  write("sitemap.xml", buildSitemap());
  console.log("wrote sitemap.xml");
}

main();
