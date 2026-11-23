# Static i18n build

Each language lives on its own URL (`/`, `/zh-tw/`, `/ko/`, `/en/`). The pages are generated, then committed.

## Files

- `tools/template-b2b.html` – Korean home (`/ko/`): businesses that call an interpreter (phone / SMS buttons, comparison table, cmdlab section)
- `tools/template-b2c.html` – Simplified Chinese (`/`), Traditional Chinese (`/zh-tw/`), English (`/en/`): individual visitors (WeChat / email / Instagram buttons)
- `tools/partials/head.html`, `tools/partials/foot.html` – shared `<head>` and the WeChat modal + toast + script tag. Included with `{{> head}}` / `{{> foot}}`
- `app.js` – holds the `translations` dictionary (zh-CN, zh-TW, ko, en) and the browser behaviour (menu, modal, copy, tel/sms links, `data-track` click events)
- `node tools/build.js` – writes `index.html`, `zh-tw/index.html`, `ko/index.html`, `en/index.html`, `sitemap.xml`, `llms.txt`

After changing copy in `app.js` or markup in a template/partial, run the build and commit the generated files. Running it twice must give the same output.

## Settings (`CONFIG` at the top of `tools/build.js`)

| Key | Meaning |
|---|---|
| `ORIGIN` | Site origin used for canonical, hreflang, og, sitemap and llms.txt. When the domain changes, change only this. |
| `LASTMOD` | Fixed `YYYY-MM-DD` string written to `sitemap.xml`. Never read from the clock. |
| `ASSET_VERSION` | `?v=` value for `styles.css` and `app.js`. |
| `GA_ID` | Empty = no gtag script at all. `data-track` clicks are only sent when gtag is loaded. |
| `INSTAGRAM_URL` | Empty = no Instagram button, WeChat is the zh-TW primary button. With a value, zh-TW's primary button becomes Instagram and `/en/` gets an extra Instagram button. |

## Template syntax

- `{{BASE}}`, `{{LANG}}`, `{{HEAD_SEO}}`, `{{FAQ_ITEMS}}` … are filled by the build. All asset paths are relative (`{{BASE}}`); do not write absolute `/jstars/...` paths.
- `data-i18n="key"` (text), `data-i18n-html="key"` (may contain `<br>`), `data-i18n-alt|aria|href="key"` (attributes). A missing key stops the build.
- `<!--@if flag-->` … `<!--@/if-->` blocks (no nesting). Flags: `primary-wechat`, `primary-instagram`, `primary-email`, `primary-sms`, `extra-instagram`.
- FAQ: `faq.q1/a1 … qN/aN` in the dictionary produce both the on-page accordion and the FAQPage JSON-LD, so the two always match.
- Fonts: one web font per page (ko: Noto Sans KR, zh-CN: Noto Sans SC, zh-TW: Noto Sans TC). English uses system fonts.

## zh-TW is hand-written

The zh-TW dictionary is now confirmed, hand-written copy. **Do not run `tools/make-zh-tw.py`**: it regenerates zh-TW from zh-CN and would overwrite that copy. The script is kept only for reference.

## WeChat QR

`assets/jstarstudio-wechat-qr.png` is the original and is used only by the "save QR image" button. Pages display `assets/wechat-qr-640.png` (640px copy, lazy-loaded).
