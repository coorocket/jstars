(() => {
  "use strict";

  const translations = {
    "zh-CN": {
      meta: {
        title: "韩国医美翻译·医院中文陪同口译 | 首尔江南 - Jstar Studio",
        description: "来韩国做医美、看皮肤科或整形咨询？首尔江南中文医疗陪同翻译，从初诊、术前术后沟通到诊断书翻译全程支持。按科室和日期快速匹配，严格保密。",
        socialTitle: "让每一次医疗沟通，都清楚而安心",
        socialDescription: "首尔·江南中文医疗陪同口译｜按科室与行程快速匹配，严格保密。"
      },
      a11y: { skip: "跳到主要内容", openMenu: "打开菜单", closeMenu: "关闭菜单", closeModal: "关闭微信二维码" },
      nav: { services: "服务", approach: "专业方式", process: "流程", faq: "问答", contact: "微信咨询" },
      hero: {
        secondaryHref: "assets/checklist-zh.pdf",
        step1: { label: "就诊前", text: "一起整理要问的问题" }, step2: { label: "就诊中", text: "准确传达医生的说明" }, step3: { label: "结束前", text: "再次确认您的理解" },
        eyebrow: "首尔江南 · 韩国医美中文陪同翻译",
        title: "<span class=\"hero-title-line\">没问清、没听清，</span><em class=\"hero-title-line\">不必带着担心回国。</em>",
        lead: "想问的没问完，听到的说明拿不准——有过这样的经历吧？",
        primary: "确认口译档期",
        secondary: "下载就诊前问题清单",
        point1: "不夸大、不省略",
        point2: "就诊信息严格保密",
        imageAlt: "中文医疗口译员在诊室协助医生与患者沟通",
        availability: "可提交档期咨询",
        imageKicker: "ON-SITE SUPPORT",
        imageTitle: "现场口译，不遗漏关键细节"
      },
      trust: { years: "年综合经验", sessions: "场服务记录", area: "首尔 · 江南现场支持", private: "保密流程" },
      stakes: {
        kicker: "WHAT'S AT STAKE", title: "沟通出现缺口，<br>往往回国后才发现。", lead: "在陌生的医疗环境里，下面这些情况都可能发生。",
        item1: { title: "没问完的问题", body: "诊疗时间有限，想问的事没问清，回国后才发现还有疑问。" },
        item2: { title: "没听懂的说明", body: "注意事项、禁忌与复诊时间若听错或漏听，可能影响术后护理。" },
        item3: { title: "没看懂的同意", body: "同意书、费用与方案没完全理解就签字，事后容易产生分歧。" }
      },
      services: {
        imageAlt: "在江南皮肤科诊室，医疗口译员为客户翻译医生的说明",
        kicker: "WHAT WE DO",
        title: "不只是翻译语言，<br>更要读懂医疗现场。",
        lead: "根据科室、沟通难度、时间与地点匹配合适的口译员，让客户、医生与协调方始终在同一页。",
        item1: { title: "医疗陪同口译", body: "门诊、检查、方案说明、术前沟通与术后复诊，全流程现场陪同。", tag1: "重点信息复述确认", tag2: "疑问整理与沟通辅助" },
        item2: { title: "皮肤科 · 整形外科", body: "清楚传达项目差异、风险、预期、禁忌与护理重点。", tag1: "专业术语准确表达", tag2: "方案与费用沟通" },
        item3: { title: "诊所 · 机构协作", body: "支持多门店、多客户与多时段安排，减少排班和沟通断点。", tag1: "按需快速匹配", tag2: "固定窗口统一沟通" },
        item4: { title: "医疗文件翻译", body: "诊断书、检查报告、同意书、术后指导及机构资料翻译。", tag1: "中韩双向翻译", tag2: "术语与格式校对" }
      },
      approach: {
        kicker: "OUR APPROACH",
        title: "好的医疗口译，<br>让三方都更有把握。",
        lead: "在陌生的国家面对医疗决定，紧张是很正常的。我们先理解就诊目的与您的顾虑，再准确传达、确认重点、减少误解。",
        point1: { title: "听懂语境", body: "结合科室、项目与客户顾虑理解真正意图。" },
        point2: { title: "准确传达", body: "不夸大、不省略，保留医生说明的专业边界。" },
        point3: { title: "双向确认", body: "整理关键问题，帮助双方确认理解一致。" },
        quote: "一句话可以被翻译，但一次医疗决定需要被真正理解。",
        flow: { patient: "客户需求", interpreter: "专业口译", clinic: "医疗说明" }
      },
      audience: {
        patientImageAlt: "口译员在医院前台为客户说明预约行程",
        clinicImageAlt: "诊所协调员与口译员用平板确认当天的就诊日程",
        kicker: "WHO WE SUPPORT",
        title: "<span class=\"audience-title-line\">两种需求，</span><span class=\"audience-title-line\">一套清晰标准</span>",
        patient: { label: "FOR PATIENTS", title: "来韩就医客户", body: "不熟悉韩国医疗流程，也能有条理地完成咨询、检查与复诊。", li1: "初诊与项目咨询", li2: "手术前后沟通", li3: "检查与护理说明", li4: "VIP医疗行程陪同" },
        business: { label: "FOR CLINICS & AGENCIES", title: "诊所与医疗服务机构", body: "按客群、科室与排班需求协调合适口译员，稳定客户沟通体验。", li1: "多门店 · 多日程排班", li2: "中国客户现场接待", li3: "资料与术语标准化", li4: "长期协作窗口" }
      },
      process: {
        kicker: "HOW IT WORKS", title: "Jstar 四步安心流程", lead: "只需先提供科室、时间与地点。我们会确认需求后再匹配，不需要立即决定。",
        step1: { title: "提交需求", body: "科室 · 日期 · 地点 · 所需范围" },
        step2: { title: "确认与报价", body: "核对难度、时长与行程细节" },
        step3: { title: "匹配口译员", body: "按经验、科室与时间安排" },
        step4: { title: "现场与跟进", body: "陪同沟通，必要时整理后续重点" },
        privacy: { title: "隐私从第一次咨询开始", body: "个人资料、就诊信息与现场沟通内容均按保密原则处理，仅用于本次服务安排。" },
        promise: { title: "我们的承诺", p1: { title: "不夸大、不省略", body: "如实传达医生的说明，不添加、不美化。" }, p2: { title: "不替您做决定", body: "口译员不提供医疗建议，治疗与费用由您与医生决定。" }, p3: { title: "先说清，再开始", body: "范围与报价确认后才开始服务，可先咨询，无需立即决定。" } }
      },
      cases: {
        item1: { imageAlt: "皮肤科医生说明术后护理，口译员在旁传达" },
        item2: { imageAlt: "整形外科复诊时，医生说明恢复进度，口译员记录要点" },
        item3: { imageAlt: "口译员在医院大厅查看手机行程，引导两位客户" },
        kicker: "SELECTED SCENARIOS", title: "常见服务场景", lead: "以下为示例场景，并非真实个案，仅用于说明我们如何提供支持。",
        case1: { title: "江南皮肤科项目咨询", body: "第一次在韩国做皮肤项目咨询，担心听不懂项目差异和恢复期。我们逐项传达医生的说明，并把您想问的问题提前列好，当场确认。", result: "重点：选择依据清晰" },
        case2: { title: "整形外科术前与复诊", body: "术前与复诊最怕漏掉风险和护理要点。我们准确传达风险、预期与术后护理，并在结束前与您再次确认理解一致。", result: "重点：风险信息不遗漏" },
        case3: { title: "多客户多时段排班", body: "为诊所或服务机构协调多名口译员，统一变更与现场沟通窗口。", result: "重点：减少排班断点" }
      },
      faq: {
        kicker: "FAQ", title: "咨询前，<br>您可能想知道", lead: "没有找到答案？可以先发送科室、日期和地点，我们会确认后回复。", action: "直接咨询",
        q1: "医疗陪同口译覆盖哪些环节？", a1: "可覆盖初诊、检查说明、项目或手术咨询、术前沟通、术后复诊与护理说明，按实际需要安排。",
        q2: "可以当天或紧急安排吗？", a2: "可以先提交时间、地点与科室，我们会优先确认可用口译员并尽快回复。是否可安排以当日档期为准。",
        q3: "费用如何计算？", a3: "根据时长、地点、科室难度、是否需要多日程排班及文件准备等因素报价，确认后再开始服务。",
        q4: "如何保护就诊信息？", a4: "口译员遵循保密原则，个人资料和诊疗内容仅用于服务安排与现场沟通，不对外公开。",
        q5: "诊所可以长期合作吗？", a5: "可以。支持按门店、科室、客群和时段建立长期协作流程，也可先从单次服务开始。",
        q6: "医疗文件也可以翻译吗？", a6: "支持诊断书、检查报告、同意书、术后指导等中韩翻译。请先发送文件类型与页数确认范围。",
        q7: "口译员会给我医疗建议吗？", a7: "不会。口译员只负责准确传达，不提供医疗建议，也不替医生或您做决定。治疗与费用由您与医生决定。",
        q8: "会不会省略或美化医生说的话？", a8: "不会。我们遵循不夸大、不省略的原则，保留医生说明的专业边界。",
        q9: "我不知道该问什么，怎么办？", a9: "可以先告诉我们就诊目的与顾虑，我们协助整理需要向医生确认的问题清单。",
        q10: "咨询后一定要预订吗？", a10: "不需要。可以先发送科室、日期与地点了解情况，确认后再决定是否开始。"
      },
      contact: {
        checklistHref: "assets/checklist-zh.pdf", checklist: "免费下载《就诊前问题清单》（PDF）", ps: "P.S. 还没决定也没关系。先下载清单，带着问题去就诊，会更安心。",
        kicker: "START A CONVERSATION", title: "<span class=\"contact-title-line\">先确认档期，</span><span class=\"contact-title-line\">再决定下一步。</span>", lead: "通过微信发送“科室 / 日期 / 地点”，我们会根据情况确认可安排范围。",
        templateLabel: "可直接复制这段咨询模板", template: "科室：<br>日期 / 时间：<br>地点：<br>需要范围：", templateText: "科室：\n日期 / 时间：\n地点：\n需要范围：",
        copy: "复制", wechat: "打开微信二维码", email: "发送邮件", qrAlt: "Jstar Studio 微信二维码", qrTitle: "微信扫码咨询", qrBody: "添加后发送科室、时间与地点"
      },
      footer: { summary: "首尔 · 江南中文医疗口译与专业翻译" },
      mobile: { email: "邮件", wechat: "微信咨询" },
      modal: { kicker: "WECHAT CONSULTATION", title: "扫码添加微信", lead: "发送科室、日期与地点，我们会确认档期与服务范围。", tip: "可先咨询，无需立即决定", download: "保存二维码" },
      toast: { copied: "咨询模板已复制" }
    },
    "zh-TW": {
      "meta": {
        "title": "韓國醫美翻譯·醫院中文陪同口譯 | 首爾江南 - Jstar Studio",
        "description": "來韓國做醫美、看皮膚科或整形諮詢？首爾江南中文醫療陪同翻譯，從初診、術前術後溝通到診斷書翻譯全程協助。依科別與日期快速媒合，嚴格保密。",
        "socialTitle": "讓每一次醫療溝通，都清楚而安心",
        "socialDescription": "首爾·江南中文醫療陪同口譯｜依科別與行程快速媒合，嚴格保密。"
      },
      "a11y": {
        "skip": "跳到主要內容",
        "openMenu": "開啟選單",
        "closeMenu": "關閉選單",
        "closeModal": "關閉微信QR Code"
      },
      "nav": {
        "services": "服務",
        "approach": "專業方式",
        "process": "流程",
        "faq": "問答",
        "contact": "微信諮詢"
      },
      "hero": {
        "secondaryHref": "assets/checklist-zh.pdf",
        "step1": {
          "label": "就診前",
          "text": "一起整理要問的問題"
        },
        "step2": {
          "label": "就診中",
          "text": "準確傳達醫生的說明"
        },
        "step3": {
          "label": "結束前",
          "text": "再次確認您的理解"
        },
        "eyebrow": "首爾江南 · 韓國醫美中文陪同翻譯",
        "title": "<span class=\"hero-title-line\">沒問清、沒聽清，</span><em class=\"hero-title-line\">不必帶著擔心回國。</em>",
        "lead": "想問的沒問完，聽到的說明拿不準——有過這樣的經歷吧？",
        "primary": "確認口譯檔期",
        "secondary": "下載就診前問題清單",
        "point1": "不誇大、不省略",
        "point2": "就診資訊嚴格保密",
        "imageAlt": "中文醫療口譯員在診室協助醫生與患者溝通",
        "availability": "可提出檔期諮詢",
        "imageKicker": "ON-SITE SUPPORT",
        "imageTitle": "現場口譯，不遺漏關鍵細節"
      },
      "trust": {
        "years": "年綜合經驗",
        "sessions": "場服務紀錄",
        "area": "首爾 · 江南現場支援",
        "private": "保密流程"
      },
      "stakes": {
        "kicker": "WHAT'S AT STAKE",
        "title": "溝通出現缺口，<br>往往回國後才發現。",
        "lead": "在陌生的醫療環境裡，下面這些情況都可能發生。",
        "item1": {
          "title": "沒問完的問題",
          "body": "診療時間有限，想問的事沒問清，回國後才發現還有疑問。"
        },
        "item2": {
          "title": "沒聽懂的說明",
          "body": "注意事項、禁忌與複診時間若聽錯或漏聽，可能影響術後護理。"
        },
        "item3": {
          "title": "沒看懂的同意",
          "body": "同意書、費用與方案沒完全理解就簽字，事後容易產生分歧。"
        }
      },
      "services": {
        "imageAlt": "在江南皮膚科診間，醫療口譯員為客戶翻譯醫師的說明",
        "kicker": "WHAT WE DO",
        "title": "不只是翻譯語言，<br>更要讀懂醫療現場。",
        "lead": "根據科別、溝通難度、時間與地點媒合合適的口譯員，讓客戶、醫生與協調方始終在同一頁。",
        "item1": {
          "title": "醫療陪同口譯",
          "body": "門診、檢查、方案說明、術前溝通與術後複診，全流程現場陪同。",
          "tag1": "重點資訊複述確認",
          "tag2": "疑問整理與溝通輔助"
        },
        "item2": {
          "title": "皮膚科 · 整形外科",
          "body": "清楚傳達療程差異、風險、預期、禁忌與護理重點。",
          "tag1": "專業術語準確表達",
          "tag2": "方案與費用溝通"
        },
        "item3": {
          "title": "診所 · 機構協作",
          "body": "支援多門店、多客戶與多時段安排，減少排班和溝通斷點。",
          "tag1": "依需快速媒合",
          "tag2": "固定窗口統一溝通"
        },
        "item4": {
          "title": "醫療文件翻譯",
          "body": "診斷書、檢查報告、同意書、術後指導及機構資料翻譯。",
          "tag1": "中韓雙向翻譯",
          "tag2": "術語與格式校對"
        }
      },
      "approach": {
        "kicker": "OUR APPROACH",
        "title": "好的醫療口譯，<br>讓三方都更有把握。",
        "lead": "在陌生的國家面對醫療決定，緊張是很正常的。我們先理解就診目的與您的顧慮，再準確傳達、確認重點、減少誤解。",
        "point1": {
          "title": "聽懂語境",
          "body": "結合科別、療程與客戶顧慮理解真正意圖。"
        },
        "point2": {
          "title": "準確傳達",
          "body": "不誇大、不省略，保留醫生說明的專業邊界。"
        },
        "point3": {
          "title": "雙向確認",
          "body": "整理關鍵問題，幫助雙方確認理解一致。"
        },
        "quote": "一句話可以被翻譯，但一次醫療決定需要被真正理解。",
        "flow": {
          "patient": "客戶需求",
          "interpreter": "專業口譯",
          "clinic": "醫療說明"
        }
      },
      "audience": {
        "patientImageAlt": "口譯員在醫院櫃檯為客戶說明預約行程",
        "clinicImageAlt": "診所協調人員與口譯員以平板確認當天的看診行程",
        "kicker": "WHO WE SUPPORT",
        "title": "<span class=\"audience-title-line\">兩種需求，</span><span class=\"audience-title-line\">一套清晰標準</span>",
        "patient": {
          "label": "FOR PATIENTS",
          "title": "來韓就醫客戶",
          "body": "不熟悉韓國醫療流程，也能有條理地完成諮詢、檢查與複診。",
          "li1": "初診與療程諮詢",
          "li2": "手術前後溝通",
          "li3": "檢查與護理說明",
          "li4": "VIP醫療行程陪同"
        },
        "business": {
          "label": "FOR CLINICS & AGENCIES",
          "title": "診所與醫療服務機構",
          "body": "依客群、科別與排班需求協調合適口譯員，穩定客戶溝通體驗。",
          "li1": "多門店 · 多日程排班",
          "li2": "中國客戶現場接待",
          "li3": "資料與術語標準化",
          "li4": "長期協作窗口"
        }
      },
      "process": {
        "kicker": "HOW IT WORKS",
        "title": "Jstar 四步安心流程",
        "lead": "只需先提供科別、時間與地點。我們會確認需求後再媒合，不需要立即決定。",
        "step1": {
          "title": "提出需求",
          "body": "科別 · 日期 · 地點 · 所需範圍"
        },
        "step2": {
          "title": "確認與報價",
          "body": "核對難度、時長與行程細節"
        },
        "step3": {
          "title": "媒合口譯員",
          "body": "依經驗、科別與時間安排"
        },
        "step4": {
          "title": "現場與跟進",
          "body": "陪同溝通，必要時整理後續重點"
        },
        "privacy": {
          "title": "隱私從第一次諮詢開始",
          "body": "個人資料、就診資訊與現場溝通內容均依保密原則處理，僅用於本次服務安排。"
        },
        "promise": {
          "title": "我們的承諾",
          "p1": {
            "title": "不誇大、不省略",
            "body": "如實傳達醫生的說明，不增添、不美化。"
          },
          "p2": {
            "title": "不替您做決定",
            "body": "口譯員不提供醫療建議，治療與費用由您與醫生決定。"
          },
          "p3": {
            "title": "先說清，再開始",
            "body": "範圍與報價確認後才開始服務，可先諮詢，無需立即決定。"
          }
        }
      },
      "cases": {
        "item1": { "imageAlt": "皮膚科醫師說明術後護理，口譯員在旁傳達" },
        "item2": { "imageAlt": "整形外科回診時，醫師說明恢復進度，口譯員記錄重點" },
        "item3": { "imageAlt": "口譯員在醫院大廳查看手機行程，引導兩位客戶" },
        "kicker": "SELECTED SCENARIOS",
        "title": "常見服務場景",
        "lead": "以下為示例場景，並非真實個案，僅用於說明我們如何提供支援。",
        "case1": {
          "title": "江南皮膚科療程諮詢",
          "body": "第一次在韓國做皮膚療程諮詢，擔心聽不懂療程差異和恢復期。我們逐項傳達醫生的說明，並把您想問的問題提前列好，當場確認。",
          "result": "重點：選擇依據清晰"
        },
        "case2": {
          "title": "整形外科術前與複診",
          "body": "術前與複診最怕漏掉風險和護理要點。我們準確傳達風險、預期與術後護理，並在結束前與您再次確認理解一致。",
          "result": "重點：風險資訊不遺漏"
        },
        "case3": {
          "title": "多客戶多時段排班",
          "body": "為診所或服務機構協調多名口譯員，統一變更與現場溝通窗口。",
          "result": "重點：減少排班斷點"
        }
      },
      "faq": {
        "kicker": "FAQ",
        "title": "諮詢前，<br>您可能想知道",
        "lead": "沒有找到答案？可以先傳送科別、日期和地點，我們會確認後回覆。",
        "action": "直接諮詢",
        "q1": "醫療陪同口譯涵蓋哪些環節？",
        "a1": "可涵蓋初診、檢查說明、療程或手術諮詢、術前溝通、術後複診與護理說明，依實際需要安排。",
        "q2": "可以當天或緊急安排嗎？",
        "a2": "可以先提供時間、地點與科別，我們會優先確認可用口譯員並儘快回覆。是否可安排以當日檔期為準。",
        "q3": "費用如何計算？",
        "a3": "根據時長、地點、科別難度、是否需要多日程排班及文件準備等因素報價，確認後再開始服務。",
        "q4": "如何保護就診資訊？",
        "a4": "口譯員遵循保密原則，個人資料和診療內容僅用於服務安排與現場溝通，不對外公開。",
        "q5": "診所可以長期合作嗎？",
        "a5": "可以。支援依門店、科別、客群和時段建立長期協作流程，也可先從單次服務開始。",
        "q6": "醫療文件也可以翻譯嗎？",
        "a6": "支援診斷書、檢查報告、同意書、術後指導等中韓翻譯。請先傳送文件類型與頁數確認範圍。",
        "q7": "口譯員會給我醫療建議嗎？",
        "a7": "不會。口譯員只負責準確傳達，不提供醫療建議，也不替醫生或您做決定。治療與費用由您與醫生決定。",
        "q8": "會不會省略或美化醫生說的話？",
        "a8": "不會。我們遵循不誇大、不省略的原則，保留醫生說明的專業邊界。",
        "q9": "我不知道該問什麼，怎麼辦？",
        "a9": "可以先告訴我們就診目的與顧慮，我們協助整理需要向醫生確認的問題清單。",
        "q10": "諮詢後一定要預約嗎？",
        "a10": "不需要。可以先傳送科別、日期與地點了解情況，確認後再決定是否開始。"
      },
      "contact": {
        "checklistHref": "assets/checklist-zh.pdf",
        "checklist": "免費下載《就診前問題清單》（PDF）",
        "ps": "P.S. 還沒決定也沒關係。先下載清單，帶著問題去就診，會更安心。",
        "kicker": "START A CONVERSATION",
        "title": "<span class=\"contact-title-line\">先確認檔期，</span><span class=\"contact-title-line\">再決定下一步。</span>",
        "lead": "透過微信傳送“科別 / 日期 / 地點”，我們會根據情況確認可安排範圍。",
        "templateLabel": "可直接複製這段諮詢模板",
        "template": "科別：<br>日期 / 時間：<br>地點：<br>需要範圍：",
        "templateText": "科別：\n日期 / 時間：\n地點：\n需要範圍：",
        "copy": "複製",
        "wechat": "開啟微信QR Code",
        "email": "寄送郵件",
        "qrAlt": "Jstar Studio 微信QR Code",
        "qrTitle": "微信掃碼諮詢",
        "qrBody": "加入後傳送科別、時間與地點"
      },
      "footer": {
        "summary": "首爾 · 江南中文醫療口譯與專業翻譯"
      },
      "mobile": {
        "email": "郵件",
        "wechat": "微信諮詢"
      },
      "modal": {
        "kicker": "WECHAT CONSULTATION",
        "title": "掃碼加入微信好友",
        "lead": "傳送科別、日期與地點，我們會確認檔期與服務範圍。",
        "tip": "可先諮詢，無需立即決定",
        "download": "儲存QR Code"
      },
      "toast": {
        "copied": "諮詢模板已複製"
      }
    },
    ko: {
      meta: {
        title: "중국어 통역 전문, 병원·의료통역 | 서울 강남 - 제이스타",
        description: "병원 상담, 피부과·성형외과 시술 설명, 수술 전후 동행까지 중국어 의료통역 전문. 진단서·동의서 중한 번역, 당일 일정 문의 가능. 비밀유지 원칙으로 진행합니다.",
        socialTitle: "모든 의료 커뮤니케이션을 명확하고 안심되게",
        socialDescription: "서울·강남 중국어 의료 동행 통역｜진료과와 일정에 맞춘 빠른 매칭, 철저한 비밀유지."
      },
      a11y: { skip: "주요 콘텐츠로 이동", openMenu: "메뉴 열기", closeMenu: "메뉴 닫기", closeModal: "위챗 QR 닫기" },
      nav: { services: "서비스", approach: "통역 원칙", process: "진행 절차", faq: "FAQ", contact: "위챗 상담" },
      hero: {
        secondaryHref: "assets/checklist-ko.pdf",
        step1: { label: "진료 전", text: "궁금한 점을 함께 정리" }, step2: { label: "진료 중", text: "의료진의 설명을 정확히 통역" }, step3: { label: "끝나기 전", text: "이해한 내용을 다시 확인" },
        eyebrow: "서울 강남 중국어 통역 · 병원·의료통역 전문",
        title: "<span class=\"hero-title-line\">진료실에서 놓친 말이</span><em class=\"hero-title-line\">걱정이 되지 않게.</em>",
        lead: "묻고 싶은 걸 다 못 묻고 돌아온 적, 있으시죠?",
        primary: "통역 일정 먼저 확인",
        secondary: "진료 전 질문 체크리스트 받기",
        point1: "부풀리지 않고, 빼지 않습니다",
        point2: "진료 정보 비밀 유지",
        imageAlt: "의료 상담실에서 의사와 환자의 대화를 돕는 중국어 의료 통역사",
        availability: "일정 문의 가능",
        imageKicker: "ON-SITE SUPPORT",
        imageTitle: "중요한 내용을 놓치지 않는 현장 통역"
      },
      trust: { years: "년 종합 경력", sessions: "건 이상 통역 기록", area: "서울 · 강남 현장 지원", private: "비밀유지 프로세스" },
      stakes: {
        kicker: "WHAT'S AT STAKE", title: "소통의 빈틈은<br>귀국 후에야 드러나곤 합니다.", lead: "낯선 의료 환경에서는 아래와 같은 일이 생길 수 있습니다.",
        item1: { title: "묻지 못한 질문", body: "진료 시간은 한정적이라, 묻고 싶은 것을 다 묻지 못하고 귀국한 뒤에야 궁금증이 남아 있음을 알게 됩니다." },
        item2: { title: "놓친 설명", body: "주의사항, 금기와 재진 일정을 잘못 듣거나 놓치면 수술 후 관리에 영향을 줄 수 있습니다." },
        item3: { title: "이해하지 못한 동의", body: "동의서, 비용과 진행 방식을 충분히 이해하지 못한 채 서명하면 나중에 이견이 생기기 쉽습니다." }
      },
      services: {
        imageAlt: "강남 피부과 상담실에서 의사의 설명을 중국어로 통역하는 의료 통역사",
        kicker: "WHAT WE DO",
        title: "언어만 번역하는 것이 아니라,<br>의료 현장을 이해합니다.",
        lead: "진료과, 커뮤니케이션 난이도, 시간과 장소에 맞는 통역사를 배정해 고객·의료진·코디네이터의 이해를 일치시킵니다.",
        item1: { title: "의료 동행 통역", body: "외래, 검사, 시술 설명, 수술 전 상담부터 수술 후 재진까지 현장에서 함께합니다.", tag1: "핵심 정보 재확인", tag2: "질문 정리와 소통 지원" },
        item2: { title: "피부과 · 성형외과", body: "시술 차이, 위험, 기대 결과, 금기 사항과 관리 방법을 명확히 전달합니다.", tag1: "전문 용어 정확성", tag2: "시술안과 비용 소통" },
        item3: { title: "병원 · 기관 협업", body: "다지점·다수 고객·다중 시간대 운영을 지원해 일정과 소통의 빈틈을 줄입니다.", tag1: "수요 기반 빠른 매칭", tag2: "일원화된 커뮤니케이션" },
        item4: { title: "의료 문서 번역", body: "진단서, 검사 결과, 동의서, 수술 후 안내와 기관 자료를 번역합니다.", tag1: "중한 양방향 번역", tag2: "용어와 형식 검수" }
      },
      approach: {
        kicker: "OUR APPROACH",
        title: "좋은 의료 통역은<br>세 주체 모두에게 확신을 줍니다.",
        lead: "낯선 나라에서 의료 결정을 앞두면 긴장되는 것이 당연합니다. 진료 목적과 걱정되는 점을 먼저 이해한 뒤 내용을 정확히 전달하고, 핵심을 재확인해 오해를 줄입니다.",
        point1: { title: "맥락 이해", body: "진료과, 시술과 고객의 우려를 함께 보고 의도를 파악합니다." },
        point2: { title: "정확한 전달", body: "과장하거나 생략하지 않고 의료진 설명의 전문적 경계를 지킵니다." },
        point3: { title: "양방향 확인", body: "핵심 질문을 정리하고 양측의 이해가 일치하는지 확인합니다." },
        quote: "문장은 번역할 수 있지만, 의료 결정은 제대로 이해되어야 합니다.",
        flow: { patient: "고객의 요구", interpreter: "전문 통역", clinic: "의료진 설명" }
      },
      audience: {
        patientImageAlt: "병원 접수 데스크에서 방문 고객에게 예약 일정을 안내하는 통역사",
        clinicImageAlt: "병원 코디네이터와 통역사가 태블릿으로 당일 진료 일정을 확인하는 모습",
        kicker: "WHO WE SUPPORT",
        title: "<span class=\"audience-title-line\">두 가지 요구,</span><span class=\"audience-title-line\">하나의 명확한 기준</span>",
        patient: { label: "FOR PATIENTS", title: "한국 방문 의료 고객", body: "한국 의료 절차가 낯설어도 상담, 검사와 재진을 체계적으로 진행할 수 있습니다.", li1: "초진 및 시술 상담", li2: "수술 전후 커뮤니케이션", li3: "검사와 관리 안내", li4: "VIP 의료 일정 동행" },
        business: { label: "FOR CLINICS & AGENCIES", title: "병원 및 의료 서비스 기관", body: "고객군, 진료과와 일정에 맞는 통역사를 조율해 일관된 고객 소통 경험을 만듭니다.", li1: "다지점 · 다중 일정 배치", li2: "중국 고객 현장 응대", li3: "자료와 용어 표준화", li4: "장기 협업 창구" }
      },
      process: {
        kicker: "HOW IT WORKS", title: "Jstar 4단계 안심 절차", lead: "진료과, 시간과 장소만 먼저 알려주세요. 요청을 확인한 뒤 매칭하므로 바로 결정하지 않아도 됩니다.",
        step1: { title: "요청 전달", body: "진료과 · 날짜 · 장소 · 필요 범위" },
        step2: { title: "확인 및 견적", body: "난이도, 시간과 동선 세부 확인" },
        step3: { title: "통역사 매칭", body: "경험, 진료과와 일정에 맞춰 배정" },
        step4: { title: "현장 및 후속", body: "동행 통역과 필요 시 후속 내용 정리" },
        privacy: { title: "첫 문의부터 지키는 개인정보", body: "개인정보, 진료 정보와 현장 대화는 비밀유지 원칙에 따라 이번 서비스 진행 목적으로만 처리합니다." },
        promise: { title: "우리의 약속", p1: { title: "부풀리지 않고, 빼지 않습니다", body: "의료진의 설명을 있는 그대로 전하며 더하거나 미화하지 않습니다." }, p2: { title: "대신 결정하지 않습니다", body: "통역사는 의료 조언을 하지 않으며, 치료와 비용은 고객과 의료진이 결정합니다." }, p3: { title: "먼저 설명하고, 그다음 시작합니다", body: "범위와 견적을 확인한 뒤 서비스를 시작하며, 먼저 문의만 해도 됩니다." } }
      },
      cases: {
        item1: { imageAlt: "피부과 의사가 시술 후 관리 방법을 설명하고 통역사가 옆에서 전달하는 장면" },
        item2: { imageAlt: "성형외과 재진 상담에서 회복 일정을 설명하는 의사와 메모하는 통역사" },
        item3: { imageAlt: "병원 로비에서 휴대폰으로 일정을 확인하며 고객 두 명을 안내하는 통역사" },
        kicker: "SELECTED SCENARIOS", title: "주요 서비스 장면", lead: "아래는 서비스 방식을 설명하기 위한 예시 상황이며, 실제 사례가 아닙니다.",
        case1: { title: "강남 피부과 시술 상담", body: "한국에서 처음 피부과 시술 상담을 받아 시술 차이와 회복 기간이 이해될지 걱정되는 경우입니다. 의료진의 설명을 항목별로 전하고, 묻고 싶은 질문을 미리 정리해 현장에서 확인합니다.", result: "핵심: 선택 기준 명확화" },
        case2: { title: "성형외과 수술 전·재진", body: "수술 전·재진에서는 위험과 관리 사항을 놓치기 쉽습니다. 위험, 기대 결과와 수술 후 관리를 정확히 전하고 마무리 전에 이해가 일치하는지 다시 확인합니다.", result: "핵심: 위험 정보 누락 방지" },
        case3: { title: "다수 고객 다중 일정", body: "병원 또는 기관을 위해 여러 통역사를 조율하고 일정 변경과 현장 소통 창구를 일원화합니다.", result: "핵심: 일정 공백 최소화" }
      },
      faq: {
        kicker: "FAQ", title: "문의 전에<br>궁금할 수 있는 내용", lead: "원하는 답이 없다면 진료과, 날짜와 장소를 먼저 보내주세요. 확인 후 안내드립니다.", action: "바로 문의하기",
        q1: "의료 동행 통역은 어디까지 지원하나요?", a1: "초진, 검사 설명, 시술 또는 수술 상담, 수술 전 커뮤니케이션, 수술 후 재진과 관리 안내를 필요 범위에 맞춰 지원합니다.",
        q2: "당일 또는 긴급 요청도 가능한가요?", a2: "시간, 장소와 진료과를 먼저 보내주시면 가능한 통역사를 우선 확인합니다. 실제 배정 여부는 당일 일정에 따라 달라질 수 있습니다.",
        q3: "비용은 어떻게 산정하나요?", a3: "시간, 장소, 진료과 난이도, 다중 일정 배치와 사전 문서 준비 여부 등을 기준으로 견적을 안내하고 확인 후 진행합니다.",
        q4: "진료 정보는 어떻게 보호하나요?", a4: "통역사는 비밀유지 원칙을 준수하며 개인정보와 진료 내용은 서비스 배정과 현장 소통 목적으로만 사용합니다.",
        q5: "병원과 장기 협업도 가능한가요?", a5: "가능합니다. 지점, 진료과, 고객군과 시간대에 맞춘 협업 프로세스를 만들 수 있으며 단건으로 먼저 시작할 수도 있습니다.",
        q6: "의료 문서 번역도 가능한가요?", a6: "진단서, 검사 결과, 동의서, 수술 후 안내 등의 중한 번역을 지원합니다. 문서 종류와 페이지 수를 먼저 보내주세요.",
        q7: "통역사가 의료 조언도 해주나요?", a7: "아니요. 통역사는 정확한 전달만 담당하며 의료 조언을 하거나 의료진·고객을 대신해 결정하지 않습니다. 치료와 비용은 고객과 의료진이 결정합니다.",
        q8: "의료진의 말을 줄이거나 좋게 포장하지는 않나요?", a8: "그렇지 않습니다. 부풀리지 않고 빼지 않는 원칙으로 의료진 설명의 전문적 경계를 지킵니다.",
        q9: "무엇을 물어봐야 할지 모르겠어요.", a9: "진료 목적과 걱정되는 점을 먼저 알려주세요. 의료진에게 확인할 질문 목록을 함께 정리해 드립니다.",
        q10: "문의하면 꼭 예약해야 하나요?", a10: "아니요. 진료과, 날짜와 장소를 먼저 보내 상황을 확인하고, 그 뒤에 진행 여부를 결정하셔도 됩니다."
      },
      contact: {
        checklistHref: "assets/checklist-ko.pdf", checklist: "무료 다운로드 「진료 전 질문 체크리스트」(PDF)", ps: "추신. 아직 정하지 않으셨어도 괜찮습니다. 체크리스트를 내려받아 질문을 챙겨 진료에 가시면 한결 마음이 놓입니다.",
        kicker: "START A CONVERSATION", title: "<span class=\"contact-title-line\">일정을 먼저 확인하고,</span><span class=\"contact-title-line\">다음 단계를 결정하세요.</span>", lead: "위챗으로 ‘진료과 / 날짜 / 장소’를 보내주시면 가능한 서비스 범위를 확인합니다.",
        templateLabel: "아래 문의 양식을 바로 복사하세요", template: "진료과：<br>날짜 / 시간：<br>장소：<br>필요 범위：", templateText: "진료과：\n날짜 / 시간：\n장소：\n필요 범위：",
        copy: "복사", wechat: "위챗 QR 열기", email: "이메일 보내기", qrAlt: "Jstar Studio 위챗 QR 코드", qrTitle: "위챗 QR 상담", qrBody: "추가 후 진료과, 시간과 장소를 보내주세요"
      },
      footer: { summary: "서울 · 강남 중국어 의료 통역 및 전문 번역" },
      mobile: { email: "이메일", wechat: "위챗 상담" },
      modal: { kicker: "WECHAT CONSULTATION", title: "위챗 QR로 추가", lead: "진료과, 날짜와 장소를 보내주시면 일정과 서비스 범위를 확인합니다.", tip: "먼저 문의하고 나중에 결정해도 됩니다", download: "QR 이미지 저장" },
      phone: { call: "전화 상담", sms: "문자 상담", note: "휴대폰에서 누르면 바로 연결됩니다.", smsBody: "[제이스타 통역 문의] 병원명/진료과, 날짜·시간, 장소를 적어 주세요." },
      toast: { copied: "문의 양식을 복사했습니다" }
    },
    en: {
      meta: {
        title: "Medical Interpreter in Seoul (Mandarin–Korean) | Gangnam Clinics - Jstar",
        description: "Mandarin–Korean medical interpreter and translator for plastic surgery, dermatology and hospital visits in Gangnam, Seoul. For patients from Singapore, Malaysia, Taiwan and Hong Kong. Pre/post-op escort, document translation, strict confidentiality.",
        socialTitle: "Clear communication. Confident care.",
        socialDescription: "Chinese medical interpretation in Seoul and Gangnam, with fast matching by specialty and schedule and strict confidentiality."
      },
      a11y: { skip: "Skip to main content", openMenu: "Open menu", closeMenu: "Close menu", closeModal: "Close WeChat QR code" },
      nav: { services: "Services", approach: "Our approach", process: "Process", faq: "FAQ", contact: "WeChat" },
      hero: {
        secondaryHref: "assets/checklist-en.pdf",
        step1: { label: "Before", text: "We organize your questions with you" }, step2: { label: "During", text: "We convey the doctor’s explanation accurately" }, step3: { label: "Before you leave", text: "We reconfirm what you understood" },
        eyebrow: "Mandarin Medical Interpreter in Seoul · Gangnam",
        title: "<span class=\"hero-title-line\">What you miss in the room</span><em class=\"hero-title-line\">shouldn’t follow you home.</em>",
        lead: "Ever left an appointment without asking everything you wanted?",
        primary: "Check interpreter availability",
        secondary: "Get the pre-visit question checklist",
        point1: "No exaggeration, no omission",
        point2: "Strict confidentiality",
        imageAlt: "A Chinese medical interpreter supporting communication between a doctor and patient",
        availability: "Availability inquiries open",
        imageKicker: "ON-SITE SUPPORT",
        imageTitle: "On-site interpretation without missing vital details"
      },
      trust: { years: "years’ combined experience", sessions: "service sessions", area: "on-site support in Seoul · Gangnam", private: "confidential process" },
      stakes: {
        kicker: "WHAT'S AT STAKE", title: "Communication gaps often<br>surface only after you’re home.", lead: "In an unfamiliar medical setting, situations like these can happen.",
        item1: { title: "Questions left unasked", body: "Appointments are short. You may only realize what you forgot to ask after returning home." },
        item2: { title: "Instructions missed", body: "Misheard or missed precautions, restrictions, or follow-up dates can affect your aftercare." },
        item3: { title: "Consent not fully understood", body: "Signing consent forms, costs, or plans you did not fully understand can lead to disagreements later." }
      },
      services: {
        imageAlt: "Medical interpreter translating a dermatologist's explanation into Mandarin at a Gangnam clinic",
        kicker: "WHAT WE DO",
        title: "More than translating words—<br>we understand the medical setting.",
        lead: "We match the right interpreter to the specialty, communication needs, time, and location so patients, clinicians, and coordinators stay aligned.",
        item1: { title: "Medical escort interpretation", body: "On-site support for appointments, examinations, treatment explanations, pre-procedure consultations, and follow-ups.", tag1: "Key information confirmation", tag2: "Question and communication support" },
        item2: { title: "Dermatology · Plastic surgery", body: "Clear communication of treatment differences, risks, expectations, contraindications, and aftercare.", tag1: "Accurate medical terminology", tag2: "Treatment and cost communication" },
        item3: { title: "Clinic · Agency coordination", body: "Support for multiple locations, clients, and time slots to reduce scheduling and communication gaps.", tag1: "Fast needs-based matching", tag2: "One communication channel" },
        item4: { title: "Medical document translation", body: "Translation of medical certificates, test results, consent forms, aftercare guides, and provider materials.", tag1: "Chinese–Korean translation", tag2: "Terminology and format review" }
      },
      approach: {
        kicker: "OUR APPROACH",
        title: "Good medical interpretation<br>gives everyone confidence.",
        lead: "Facing a medical decision in an unfamiliar country is stressful. We first understand the purpose of your visit and your concerns, then communicate accurately, confirm key points, and reduce misunderstandings.",
        point1: { title: "Understand the context", body: "We consider the specialty, treatment, and patient concerns to understand the real intent." },
        point2: { title: "Communicate accurately", body: "We neither exaggerate nor omit, preserving the professional boundaries of the clinician’s explanation." },
        point3: { title: "Confirm both ways", body: "We organize key questions and help everyone confirm a shared understanding." },
        quote: "Words can be translated, but a medical decision must be truly understood.",
        flow: { patient: "Patient needs", interpreter: "Professional interpretation", clinic: "Medical guidance" }
      },
      audience: {
        patientImageAlt: "Interpreter explaining the appointment schedule to a visitor at the clinic reception",
        clinicImageAlt: "Clinic coordinator and interpreter reviewing the day's appointments on a tablet",
        kicker: "WHO WE SUPPORT",
        title: "<span class=\"audience-title-line\">Two types of needs,</span><span class=\"audience-title-line\">one clear standard</span>",
        patient: { label: "FOR PATIENTS", title: "International patients in Korea", body: "Navigate consultations, examinations, and follow-ups with confidence, even when Korea’s medical process is unfamiliar.", li1: "Initial and treatment consultations", li2: "Pre- and post-procedure communication", li3: "Examination and aftercare guidance", li4: "VIP medical itinerary support" },
        business: { label: "FOR CLINICS & AGENCIES", title: "Clinics and medical service providers", body: "Coordinate interpreters by patient group, specialty, and schedule for a consistent communication experience.", li1: "Multi-location · multi-day scheduling", li2: "On-site support for Chinese clients", li3: "Standardized materials and terminology", li4: "Long-term coordination partner" }
      },
      process: {
        kicker: "HOW IT WORKS", title: "The Jstar four-step process", lead: "Start with the specialty, time, and location. We review the request before matching, so there is no need to decide immediately.",
        step1: { title: "Send your request", body: "Specialty · date · location · support needed" },
        step2: { title: "Confirm and quote", body: "Review complexity, duration, and itinerary details" },
        step3: { title: "Match an interpreter", body: "Assign by experience, specialty, and availability" },
        step4: { title: "On-site and follow-up", body: "Interpret on site and summarize next steps when needed" },
        privacy: { title: "Privacy starts with your first inquiry", body: "Personal details, medical information, and on-site conversations are handled confidentially and used only to arrange the requested service." },
        promise: { title: "Our commitments", p1: { title: "No exaggeration, no omission", body: "We convey the doctor’s explanations as they are—nothing added, nothing softened." }, p2: { title: "We don’t decide for you", body: "Interpreters do not give medical advice. Treatment and costs are decided by you and your doctor." }, p3: { title: "Clarity first, then we begin", body: "Service starts only after the scope and quote are confirmed. You can simply ask first." } }
      },
      cases: {
        item1: { imageAlt: "Dermatologist explaining aftercare while the interpreter relays it beside the patient" },
        item2: { imageAlt: "Plastic surgery follow-up: the doctor explains the recovery timeline as the interpreter takes notes" },
        item3: { imageAlt: "Interpreter checking the schedule on her phone while guiding two clients through the clinic lobby" },
        kicker: "SELECTED SCENARIOS", title: "Common service scenarios", lead: "These are illustrative scenarios to explain how we support you, not real client cases.",
        case1: { title: "Dermatology consultation in Gangnam", body: "A first dermatology consultation in Korea, with worries about understanding the treatment differences and recovery time. We relay the doctor’s explanation point by point and confirm the questions you prepared in advance.", result: "Focus: clear decision criteria" },
        case2: { title: "Plastic surgery consultation and follow-up", body: "Before surgery and at follow-ups, risks and aftercare points are easy to miss. We convey risks, expectations, and aftercare accurately and reconfirm that you understand before the visit ends.", result: "Focus: no missing risk information" },
        case3: { title: "Multiple patients and time slots", body: "Coordinate multiple interpreters for clinics or agencies through one channel for schedule changes and on-site communication.", result: "Focus: fewer scheduling gaps" }
      },
      faq: {
        kicker: "FAQ", title: "What you may want to know<br>before contacting us", lead: "If your question is not covered, send us the specialty, date, and location. We will review and reply.", action: "Contact us",
        q1: "What stages can medical escort interpretation cover?", a1: "Support can include initial appointments, examination explanations, treatment or surgery consultations, pre-procedure communication, follow-ups, and aftercare guidance, depending on your needs.",
        q2: "Can you arrange same-day or urgent support?", a2: "Send the time, location, and specialty first. We will prioritize checking available interpreters, although same-day arrangements depend on current availability.",
        q3: "How is the fee calculated?", a3: "Quotes are based on duration, location, specialty complexity, multi-day scheduling, and any advance document preparation. Service begins only after confirmation.",
        q4: "How do you protect medical information?", a4: "Interpreters follow strict confidentiality principles. Personal and medical information is used only for service coordination and on-site communication.",
        q5: "Can clinics work with you long term?", a5: "Yes. We can build a long-term workflow by location, specialty, patient group, and time slot, or begin with a single assignment.",
        q6: "Do you translate medical documents?", a6: "Yes. We translate medical certificates, test results, consent forms, and aftercare guides between Chinese and Korean. Send the document type and page count to confirm the scope.",
        q7: "Will the interpreter give me medical advice?", a7: "No. Interpreters only convey information accurately. They do not give medical advice or decide for you or your doctor. Treatment and costs are decided by you and your doctor.",
        q8: "Do you ever shorten or soften what the doctor says?", a8: "No. We follow a no-exaggeration, no-omission principle and keep the professional limits of the doctor’s explanation.",
        q9: "I don’t know what to ask. What should I do?", a9: "Tell us the purpose of your visit and your concerns first. We will help you organize a list of questions to confirm with the doctor.",
        q10: "Do I have to book after asking?", a10: "No. You can send the specialty, date, and location to learn about your options, then decide whether to proceed."
      },
      contact: {
        checklistHref: "assets/checklist-en.pdf", checklist: "Free download: Before-Your-Visit Question Checklist (PDF)", ps: "P.S. No need to decide yet. Download the checklist and bring your questions to the appointment for more peace of mind.",
        kicker: "START A CONVERSATION", title: "<span class=\"contact-title-line\">Check availability first,</span><span class=\"contact-title-line\">then decide your next step.</span>", lead: "Send the specialty, date, and location on WeChat, and we will confirm the available service options.",
        templateLabel: "Copy this inquiry template", template: "Specialty:<br>Date / time:<br>Location:<br>Support needed:", templateText: "Specialty:\nDate / time:\nLocation:\nSupport needed:",
        copy: "Copy", wechat: "Open WeChat QR", email: "Send email", qrAlt: "Jstar Studio WeChat QR code", qrTitle: "Scan to contact us on WeChat", qrBody: "Send the specialty, time, and location after adding us"
      },
      footer: { summary: "Chinese medical interpretation and professional translation in Seoul · Gangnam" },
      mobile: { email: "Email", wechat: "WeChat" },
      modal: { kicker: "WECHAT CONSULTATION", title: "Add us on WeChat", lead: "Send the specialty, date, and location, and we will confirm availability and the service scope.", tip: "Ask first—there is no need to decide immediately", download: "Save QR code" },
      toast: { copied: "Inquiry template copied" }
    }
  };

  const byPath = (object, path) => path.split(".").reduce((value, part) => value?.[part], object);
  // Each language lives on its own URL; the page language comes from <html lang>.
  const pageBase = document.documentElement.dataset.base || "";
  const menuToggle = document.getElementById("menuToggle");
  const primaryNav = document.getElementById("primaryNav");
  const siteHeader = document.getElementById("siteHeader");
  const modal = document.getElementById("wechatModal");
  const modalDialog = modal?.querySelector(".modal-dialog");
  const toast = document.getElementById("toast");
  let activeLanguage = "zh-CN";
  let lastFocusedElement = null;
  let toastTimer = null;

  const applyLanguage = (language) => {
    const dictionary = translations[language] || translations["zh-CN"];
    activeLanguage = translations[language] ? language : "zh-CN";
    document.documentElement.lang = activeLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = byPath(dictionary, element.dataset.i18n);
      if (typeof value === "string") element.textContent = value;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = byPath(dictionary, element.dataset.i18nHtml);
      if (typeof value === "string") element.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-href]").forEach((element) => {
      const value = byPath(dictionary, element.dataset.i18nHref);
      if (typeof value === "string") element.setAttribute("href", pageBase + value);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const value = byPath(dictionary, element.dataset.i18nAlt);
      if (typeof value === "string") element.setAttribute("alt", value);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const key = element.dataset.i18nAria;
      let value = byPath(dictionary, key);
      if (element === menuToggle && menuToggle.getAttribute("aria-expanded") === "true") value = dictionary.a11y.closeMenu;
      if (typeof value === "string") element.setAttribute("aria-label", value);
    });
  };

  const closeMenu = () => {
    primaryNav?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", translations[activeLanguage].a11y.openMenu);
  };

  const toggleMenu = () => {
    const isOpen = menuToggle?.getAttribute("aria-expanded") === "true";
    primaryNav?.classList.toggle("is-open", !isOpen);
    menuToggle?.setAttribute("aria-expanded", String(!isOpen));
    menuToggle?.setAttribute("aria-label", translations[activeLanguage].a11y[isOpen ? "openMenu" : "closeMenu"]);
  };

  const openModal = (trigger) => {
    if (!modal || !modalDialog) return;
    lastFocusedElement = trigger || document.activeElement;
    closeMenu();
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    window.setTimeout(() => modal.querySelector(".modal-close")?.focus(), 30);
  };

  const closeModal = () => {
    if (!modal) return;
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
    if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
  };

  const showToast = () => {
    if (!toast) return;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 1800);
  };

  const copyInquiryTemplate = async () => {
    const text = translations[activeLanguage].contact.templateText;
    let copied = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        copied = true;
      }
    } catch (_) { copied = false; }

    if (!copied) {
      const helper = document.createElement("textarea");
      helper.value = text;
      helper.setAttribute("readonly", "");
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.appendChild(helper);
      helper.select();
      copied = document.execCommand("copy");
      helper.remove();
    }
    if (copied) showToast();
  };

  menuToggle?.addEventListener("click", toggleMenu);
  primaryNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.querySelectorAll("[data-open-wechat]").forEach((button) => button.addEventListener("click", () => openModal(button)));
  document.querySelectorAll("[data-close-wechat]").forEach((button) => button.addEventListener("click", closeModal));
  document.getElementById("copyTemplate")?.addEventListener("click", copyInquiryTemplate);

  // Korean page: tel:/sms: links are built on click so the number is never present in the page source.
  const contactNumber = () => ["010", "57", "755", "855"].join("");
  document.querySelectorAll("[data-contact]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      closeMenu();
      const body = translations[activeLanguage]?.phone?.smsBody || "";
      const url = link.dataset.contact === "sms"
        ? "sms:" + contactNumber() + "?&body=" + encodeURIComponent(body)
        : "tel:" + contactNumber();
      link.setAttribute("href", url);
      try { window.location.href = url; } catch (_) { /* desktop without a handler: the on-page note explains */ }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (modal?.getAttribute("aria-hidden") === "false") closeModal();
      else closeMenu();
    }

    if (event.key === "Tab" && modal?.getAttribute("aria-hidden") === "false" && modalDialog) {
      const focusable = [...modalDialog.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])')].filter((element) => !element.hasAttribute("disabled"));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });

  const updateHeader = () => siteHeader?.classList.toggle("is-scrolled", window.scrollY > 18);
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          instance.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
    document.documentElement.classList.add("js-reveal");
    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  applyLanguage(document.documentElement.lang);
  document.getElementById("year").textContent = new Date().getFullYear();
})();
