#!/usr/bin/env python3
"""Build the zh-TW dictionary from zh-CN (OpenCC s2twp + hand fixes) and splice it into app.js.

Usage: python3 tools/make-zh-tw.py   (needs: pip install opencc-python-reimplemented; node on PATH)
"""
import json, re, subprocess, sys
import opencc

conv = opencc.OpenCC("s2twp")
src = json.loads(subprocess.check_output(["node", "tools/extract-dict.js", "app.js"]))
zh = src["zh-CN"]

# Hand fixes applied after OpenCC (Taiwan usage in a medical-aesthetics / interpreting context).
HAND_FIXES = [
    ("專案", "療程"), ("檔案", "文件"), ("視窗", "窗口"), ("傳送郵件", "寄送郵件"),
    ("掃碼新增微信", "掃碼加入微信好友"), ("新增後傳送", "加入後傳送"), ("不新增", "不增添"),
    ("二維碼", "QR Code"), ("預訂", "預約"), ("文件型別", "文件類型"), ("覆蓋", "涵蓋"),
    ("匹配", "媒合"), ("科室", "科別"), ("按", "依"), ("提交需求", "提出需求"),
    ("可提交", "可提出"), ("先提交時間", "先提供時間"), ("記錄", "紀錄"),
]

def tw(s):
    out = conv.convert(s)
    for a, b in HAND_FIXES:
        out = out.replace(a, b)
    return out

def walk(o):
    return {k: walk(v) for k, v in o.items()} if isinstance(o, dict) else tw(o)

t = walk(zh)

# Confirmed copy (verbatim) for zh-TW.
t["meta"]["title"] = "韓國醫美翻譯·醫院中文陪同口譯 | 首爾江南 - Jstar Studio"
t["meta"]["description"] = "來韓國做醫美、看皮膚科或整形諮詢？首爾江南中文醫療陪同翻譯，從初診、術前術後溝通到診斷書翻譯全程協助。依科別與日期快速媒合，嚴格保密。"
t["hero"]["eyebrow"] = "首爾江南 · 韓國醫美中文陪同翻譯"
# Checklist PDF stays the Simplified edition.
t["hero"]["secondaryHref"] = "assets/checklist-zh.pdf"
t["contact"]["checklistHref"] = "assets/checklist-zh.pdf"

block = json.dumps(t, ensure_ascii=False, indent=2)
block = "\n".join(("    " + l if i else l) for i, l in enumerate(block.split("\n")))
entry = '    "zh-TW": ' + block + ",\n"

app = open("app.js", encoding="utf-8").read()
app = re.sub(r'    "zh-TW": \{.*?\n    \},\n', "", app, flags=re.S)   # idempotent
marker = "    ko: {"
assert marker in app
app = app.replace(marker, entry + marker, 1)
open("app.js", "w", encoding="utf-8").write(app)
json.dump({"hand_fixes": HAND_FIXES}, open("/tmp/hand_fixes.json", "w"), ensure_ascii=False)
print("zh-TW dictionary written")
