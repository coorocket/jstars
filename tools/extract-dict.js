// Evaluates the `translations` object literal in app.js and prints it as JSON.
const fs = require("fs");
const vm = require("vm");
const src = fs.readFileSync(process.argv[2] || "app.js", "utf8");
const start = src.indexOf("const translations = {");
if (start < 0) throw new Error("translations not found");
const end = src.indexOf("\n  };\n", start);
const code = src.slice(start, end + 5).replace("const translations =", "translations =");
const ctx = { translations: null };
vm.runInNewContext(code, ctx);
process.stdout.write(JSON.stringify(ctx.translations, null, 2));
