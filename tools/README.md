# Static i18n build

Each language lives on its own URL (`/`, `/zh-tw/`, `/ko/`, `/en/`). The pages are generated, then committed.

- `tools/template.html` – page template (`{{...}}` placeholders, `<!--@ko-->` / `<!--@!ko-->` conditional blocks)
- `app.js` – holds the `translations` dictionary (zh-CN, zh-TW, ko, en); the browser script only wires UI behaviour
- `node tools/build.js` – writes `index.html`, `zh-tw/index.html`, `ko/index.html`, `en/index.html`, `sitemap.xml`
- `python3 tools/make-zh-tw.py` – regenerates the zh-TW dictionary from zh-CN (OpenCC `s2twp` + hand fixes listed in the script). Needs `pip install opencc-python-reimplemented`.

After changing copy in `app.js` or markup in `template.html`, run the build and commit the generated files.
