(() => {
  "use strict";

  // Dictionary for the four generated pages. Read by tools/build.js at build time and by this script at runtime.
  // zh-CN / zh-TW / en share tools/template-b2c.html; ko uses tools/template-b2b.html.
  // The zh-TW block is hand-written copy: do not regenerate it with tools/make-zh-tw.py.
  const translations = {
    "zh-CN": {
      meta: {
        title: "韩国医美翻译·中文陪同口译 | 皮肤科·个人色彩·商务 - Jstar",
        description: "来韩国做医美、个人色彩测试或谈生意？首尔中文陪同翻译，2007年起的口译现场经验。项目与费用三重确认（咨询时·进行前·付款前），每小时₩30,000起，可先免费事前咨询。",
        ogAlt: "韩国中文陪同翻译 · 首尔 Jstar"
      },
      a11y: { skip: "跳到主要内容", openMenu: "打开菜单", closeMenu: "关闭菜单", closeModal: "关闭微信二维码" },
      brand: { name: "Jstar", tagline: "韩国中文陪同翻译" },
      nav: { services: "服务", approach: "三个坚持", rates: "费用", faq: "FAQ", contact: "微信咨询" },
      hero: {
        eyebrow: "首尔 · 韩国医美中文陪同翻译｜个人色彩·商务·VIP 私人陪同",
        title: "在韩国，<br>不因为语言吃亏。",
        lead: "当下没听懂、没问清楚，回国才后悔，这种事不该发生。",
        step1: { label: "咨询时", text: "项目与费用，确认第一次" },
        step2: { label: "进行前", text: "开始之前，确认第二次" },
        step3: { label: "付款前", text: "按谈好的内容付款，确认第三次" },
        primary: "加微信・免费事前咨询",
        note: "委托之前，先申请免费事前咨询。回复时间 08:30~20:30（韩国时间）。",
        secondaryHref: "assets/checklist-zh.pdf",
        secondary: "下载「就诊前提问清单」",
        point1: "不加不减，照实转达",
        point2: "行程与就诊内容保密",
        imageAlt: "中文医疗口译员在诊室协助医生与患者沟通",
        availability: "可提交档期咨询",
        imageKicker: "ON-SITE SUPPORT",
        imageTitle: "现场口译，不遗漏关键细节"
      },
      trust: {
        c1: { big: "2007年起", small: "口译现场" },
        c2: { big: "3,000+", small: "累计服务场次（估算）" },
        c3: { big: "三重确认", small: "咨询・进行前・付款前" },
        c4: { big: "严格保密", small: "行程与就诊内容" }
      },
      stakes: {
        kicker: "WHAT'S AT STAKE", title: "沟通出现缺口，<br>往往回国后才发现。", lead: "在陌生的医疗环境里，下面这些情况都可能发生。",
        item1: { title: "没问完的问题", body: "诊疗时间有限，想问的事没问清，回国后才发现还有疑问。" },
        item2: { title: "没听懂的说明", body: "注意事项、禁忌与复诊时间若听错或漏听，可能影响术后护理。" },
        item3: { title: "没看懂的同意", body: "同意书、费用与方案没完全理解就签字，事后容易产生分歧。" }
      },
      services: {
        imageAlt: "在江南皮肤科诊室，医疗口译员为客户翻译医生的说明",
        kicker: "WHAT WE DO",
        title: "哪些场合<br>可以找我们？",
        lead: "告诉我们服务项目、日期与地点，安排合适的翻译。",
        item1: { title: "医美・皮肤科・整形", body: "从咨询、同意书到术后复诊，把医生的说明照实转达。", tag1: "项目与费用三重确认", tag2: "术前术后陪同" },
        item2: { title: "个人色彩・美发・拍摄", body: "色彩测试用语、头发长度与颜色、拍摄妆发需求，说清楚再开始。", tag1: "用语准确", tag2: "开始前再确认" },
        item3: { title: "观光・购物陪同翻译", body: "餐厅、购物、柜台沟通，行程中需要开口的地方由翻译协助。", tag1: "半天・全天", tag2: "按行程安排" },
        item4: { title: "商务・展会", body: "拜访公司、展会洽谈、工厂参观、签约场合的交替传译。", tag1: "事前阅读资料", tag2: "交替传译" },
        item5: { title: "VIP 私人随行", body: "全程由同一位翻译陪同，行程不对外公开。", tag1: "专任一人", tag2: "行程保密" }
      },
      approach: {
        kicker: "OUR APPROACH",
        title: "Jstar 的<br>三个坚持",
        lead: "翻译的目的，是让你听懂之后自己做决定。",
        point1: { title: "不捏造", body: "不存在的事实不会说，医生与对方的说明照实转达。" },
        point2: { title: "三重确认", body: "项目与费用在咨询时、进行前、付款前各确认一次，按谈好的内容付款。" },
        point3: { title: "责任口译", body: "结束后的简单追加提问，由了解现场的同一位翻译继续协助。" },
        quote: "一句话可以被翻译，但一次医疗决定需要被真正理解。",
        flow: { patient: "客户需求", interpreter: "专业口译", clinic: "医疗说明" }
      },
      interpreter: {
        title: "陪你去的人是谁？",
        body: "赴韩留学后定居韩国，2007年起从事中韩口译的现任医疗翻译。2015年曾在中国访问团拜会韩国地方政府时担任市长随行口译，如今往来于医院咨询室与商务会议现场。",
        body2: "代表翻译与 3 位协力翻译，同一天最多可安排 5 位。使用语言：韩语、中文（简体・繁体）。",
        imageAlt: "口译员在医院前台为客户说明预约行程"
      },
      process: {
        kicker: "HOW IT WORKS", title: "流程，三个步骤", lead: "先告诉我们服务项目、日期与地点，我们先确认可安排的翻译与费用。",
        step1: { title: "免费事前咨询", body: "服务项目・日期・地点・人数（可视频）" },
        step2: { title: "确认翻译与费用", body: "先说明范围与费用，确认后才开始" },
        step3: { title: "现场陪同与责任口译", body: "结束后的简单提问也继续协助" },
        privacy: { title: "隐私从第一次咨询开始", body: "个人资料、就诊信息与现场沟通内容均按保密原则处理，仅用于本次服务安排。" },
        promise: { title: "我们的承诺", p1: { title: "不夸大、不省略", body: "如实传达医生的说明，不添加、不美化。" }, p2: { title: "不替您做决定", body: "口译员不提供医疗建议，治疗与费用由您与医生决定。" }, p3: { title: "先说清，再开始", body: "范围与报价确认后才开始服务。" } }
      },
      rates: {
        title: "费用",
        r1: { name: "基本", price: "每小时 ₩30,000 起", note: "约 ¥150" },
        r2: { name: "长期・全程陪同", price: "另行协商", note: "多日行程、VIP 私人随行" },
        note: "换算为固定参考值，以韩元为准。付款：现金（可用各国货币）、微信支付等。提供交替传译，不提供同声传译。"
      },
      cases: {
        item1: { imageAlt: "皮肤科医生说明术后护理，口译员在旁传达" },
        item2: { imageAlt: "整形外科复诊时，医生说明恢复进度，口译员记录要点" },
        item3: { imageAlt: "口译员在医院大厅查看手机行程，引导两位客户" },
        kicker: "SELECTED SCENARIOS", title: "我们常陪同的场合", lead: "第一则为实际经验，医院与客人信息不公开。",
        case1: { title: "皮肤科咨询", body: "柜台把项目剂量写得比客人要的多。付款前发现并请院方更正，最后只结了客人要的项目与费用。", result: "重点：付款前再确认一次" },
        case2: { title: "整形外科术前与复诊", body: "术前与复诊最怕漏掉风险和护理要点。我们准确传达风险、预期与术后护理，并在结束前与您再次确认理解一致。", result: "重点：风险信息不遗漏" },
        case3: { title: "结束之后", body: "回到住处才想到的问题，由了解现场的同一位翻译继续协助。", result: "重点：责任口译" }
      },
      faq: {
        kicker: "FAQ", title: "咨询前，<br>您可能想知道", lead: "没有找到答案？可以先发送科室、日期和地点，我们会确认后回复。", action: "直接咨询",
        q1: "医疗陪同口译覆盖哪些环节？", a1: "可覆盖初诊、检查说明、项目或手术咨询、术前沟通、术后复诊与护理说明，按实际需要安排。",
        q2: "可以当天或紧急安排吗？", a2: "可以先提交时间、地点与科室，我们会优先确认可用口译员并尽快回复。是否可安排以当日档期为准。",
        q3: "费用怎么算？", a3: "每小时 ₩30,000 起，按时间、地点、难度与事前准备报价；长期或全程陪同另行协商。确认后才开始。",
        q4: "如何保护就诊信息？", a4: "口译员遵循保密原则，个人资料和诊疗内容仅用于服务安排与现场沟通，不对外公开。",
        q5: "用翻译 App 不行吗？", a5: "问路、点餐用 App 就够了。但项目、剂量、费用、同意书这类说错就有损失的内容，需要有人当场确认双方理解一致。",
        q6: "医疗文件也可以翻译吗？", a6: "支持诊断书、检查报告、同意书、术后指导等中韩翻译。请先发送文件类型与页数确认范围。",
        q7: "口译员会给我医疗建议吗？", a7: "不会。口译员只负责准确传达，不提供医疗建议，也不替医生或您做决定。治疗与费用由您与医生决定。",
        q8: "会不会省略或美化医生说的话？", a8: "不会。我们遵循不夸大、不省略的原则，保留医生说明的专业边界。",
        q9: "我不知道该问什么，怎么办？", a9: "可以先告诉我们就诊目的与顾虑，我们协助整理需要向医生确认的问题清单。",
        q10: "结束后还能再问吗？", a10: "可以。简单的追加提问由同一位翻译继续协助（责任口译）。",
        q11: "出发前可以先视频咨询吗？", a11: "可以。来韩国之前可先用视频做免费事前咨询。"
      },
      contact: {
        checklistHref: "assets/checklist-zh.pdf", checklist: "免费下载《就诊前问题清单》（PDF）",
        kicker: "START A CONVERSATION", title: "委托之前，<br>先申请免费事前咨询。", lead: "发来「服务项目／日期／地点／人数」，先确认可安排的翻译与费用。回复时间 08:30~20:30（韩国时间）。",
        templateLabel: "可直接复制这段咨询模板", template: "服务项目：<br>日期・时间：<br>地点：<br>人数：<br>需要的范围：", templateText: "服务项目：\n日期・时间：\n地点：\n人数：\n需要的范围：",
        copy: "复制", wechat: "打开微信二维码", email: "发送邮件", qrAlt: "Jstar 微信二维码", qrTitle: "微信扫码咨询", qrBody: "添加后发送科室、时间与地点"
      },
      footer: { summary: "首尔 · 韩国中文陪同翻译" },
      mobile: { email: "邮件", wechat: "微信咨询" },
      modal: { kicker: "WECHAT CONSULTATION", title: "扫码添加微信", lead: "发送科室、日期与地点，我们会确认档期与服务范围。", tip: "委托之前，先申请免费事前咨询。", download: "保存二维码" },
      toast: { copied: "咨询模板已复制" }
    },
    "zh-TW": {
      meta: {
        title: "韓國醫美翻譯·中文隨行口譯 | 皮膚科·個人色彩·商務 - Jstar",
        description: "來韓國做醫美、個人色彩鑑定或談生意？首爾中文隨行口譯，2007年起的口譯現場經驗。項目與費用三重確認（諮詢時·進行前·付款前），每小時₩30,000起，可先免費事前諮詢。",
        ogAlt: "韓國中文隨行口譯 · 首爾 Jstar"
      },
      a11y: { skip: "跳到主要內容", openMenu: "開啟選單", closeMenu: "關閉選單", closeModal: "關閉微信QR Code" },
      brand: { name: "Jstar", tagline: "韓國中文隨行口譯" },
      nav: { services: "服務", approach: "三個堅持", rates: "費用", faq: "FAQ", contact: "微信諮詢" },
      hero: {
        eyebrow: "首爾 · 韓國醫美中文隨行口譯｜個人色彩·商務·VIP 私人陪同",
        title: "在韓國，<br>不因為語言而吃虧。",
        lead: "當下沒聽懂、沒問清楚，回國才後悔，這種事不該發生。",
        step1: { label: "諮詢時", text: "項目與費用，確認第一次" },
        step2: { label: "進行前", text: "開始之前，確認第二次" },
        step3: { label: "付款前", text: "照談好的內容付款，確認第三次" },
        primary: "加微信・免費事前諮詢",
        instagram: "IG 私訊・免費事前諮詢",
        note: "委託之前，先申請免費事前諮詢。回覆時間 08:30~20:30（韓國時間）。",
        secondaryHref: "assets/checklist-zh.pdf",
        secondary: "下載「看診前提問清單」",
        point1: "不加不減，照實轉達",
        point2: "行程與看診內容保密",
        imageAlt: "中文醫療口譯員在診室協助醫生與患者溝通",
        availability: "可提出檔期諮詢",
        imageKicker: "ON-SITE SUPPORT",
        imageTitle: "現場口譯，不遺漏關鍵細節"
      },
      trust: {
        c1: { big: "2007年起", small: "口譯現場" },
        c2: { big: "3,000+", small: "累計服務場次（估算）" },
        c3: { big: "三重確認", small: "諮詢・進行前・付款前" },
        c4: { big: "嚴格保密", small: "行程與看診內容" }
      },
      stakes: {
        kicker: "WHAT'S AT STAKE", title: "溝通出現缺口，<br>往往回國後才發現。", lead: "在陌生的醫療環境裡，下面這些情況都可能發生。",
        item1: { title: "沒問完的問題", body: "診療時間有限，想問的事沒問清，回國後才發現還有疑問。" },
        item2: { title: "沒聽懂的說明", body: "注意事項、禁忌與複診時間若聽錯或漏聽，可能影響術後護理。" },
        item3: { title: "沒看懂的同意", body: "同意書、費用與方案沒完全理解就簽字，事後容易產生分歧。" }
      },
      services: {
        imageAlt: "在江南皮膚科診間，醫療口譯員為客戶翻譯醫師的說明",
        kicker: "WHAT WE DO",
        title: "哪些場合<br>可以找我們？",
        lead: "告訴我們服務項目、日期與地點，安排合適的口譯員。",
        item1: { title: "醫美・皮膚科・整形", body: "從諮詢、同意書到術後回診，把醫師的說明照實轉達。", tag1: "項目與費用三重確認", tag2: "術前術後陪同" },
        item2: { title: "個人色彩・美髮・拍攝", body: "色彩鑑定用語、頭髮長度與顏色、拍攝妝髮需求，說清楚再開始。", tag1: "用語準確", tag2: "開始前再確認" },
        item3: { title: "觀光・購物陪同口譯", body: "餐廳、購物、櫃檯溝通，行程中需要開口的地方由口譯員協助。", tag1: "半天・全天", tag2: "依行程安排" },
        item4: { title: "商務・展會", body: "拜訪公司、展會洽談、工廠參觀、簽約場合的逐步口譯。", tag1: "事前閱讀資料", tag2: "逐步口譯" },
        item5: { title: "VIP 私人隨行", body: "全程由同一位口譯員陪同，行程不對外公開。", tag1: "專任一人", tag2: "行程保密" }
      },
      approach: {
        kicker: "OUR APPROACH",
        title: "Jstar 的<br>三個堅持",
        lead: "口譯的目的，是讓你聽懂之後自己做決定。",
        point1: { title: "不捏造", body: "不存在的事實不會說，醫師與對方的說明照實轉達。" },
        point2: { title: "三重確認", body: "項目與費用在諮詢時、進行前、付款前各確認一次，照談好的內容付款。" },
        point3: { title: "責任口譯", body: "結束後的簡單追加提問，由了解現場的同一位口譯員繼續協助。" },
        quote: "一句話可以被翻譯，但一次醫療決定需要被真正理解。",
        flow: { patient: "客戶需求", interpreter: "專業口譯", clinic: "醫療說明" }
      },
      interpreter: {
        title: "陪你去的人是誰？",
        body: "赴韓留學後定居韓國，2007年起從事中韓口譯的現任醫療口譯員。2015年曾在中國訪問團拜會韓國地方政府時擔任市長隨行口譯，如今往來於醫院諮詢室與商務會議現場。",
        body2: "代表口譯員與 3 位協力口譯員，同一天最多可安排 5 位。使用語言：韓語、中文（繁體・簡體，熟悉台灣用語）。",
        imageAlt: "口譯員在醫院櫃檯為客戶說明預約行程"
      },
      process: {
        kicker: "HOW IT WORKS", title: "流程，三個步驟", lead: "先告訴我們服務項目、日期與地點，我們先確認可安排的口譯員與費用。",
        step1: { title: "免費事前諮詢", body: "服務項目・日期・地點・人數（可視訊）" },
        step2: { title: "確認口譯員與費用", body: "先說明範圍與費用，確認後才開始" },
        step3: { title: "現場陪同與責任口譯", body: "結束後的簡單提問也繼續協助" },
        privacy: { title: "隱私從第一次諮詢開始", body: "個人資料、就診資訊與現場溝通內容均依保密原則處理，僅用於本次服務安排。" },
        promise: { title: "我們的承諾", p1: { title: "不誇大、不省略", body: "如實傳達醫生的說明，不增添、不美化。" }, p2: { title: "不替您做決定", body: "口譯員不提供醫療建議，治療與費用由您與醫生決定。" }, p3: { title: "先說清，再開始", body: "範圍與報價確認後才開始服務。" } }
      },
      rates: {
        title: "費用",
        r1: { name: "基本", price: "每小時 ₩30,000 起", note: "約 NT$750・HK$180" },
        r2: { name: "長期・全程陪同", price: "另行協議", note: "多日行程、VIP 私人隨行" },
        note: "換算為固定參考值，以韓元為準。付款：現金（可用各國貨幣）、微信支付等。提供逐步口譯，不提供同步口譯。"
      },
      cases: {
        item1: { imageAlt: "皮膚科醫師說明術後護理，口譯員在旁傳達" },
        item2: { imageAlt: "整形外科回診時，醫師說明恢復進度，口譯員記錄重點" },
        item3: { imageAlt: "口譯員在醫院大廳查看手機行程，引導兩位客戶" },
        kicker: "SELECTED SCENARIOS", title: "我們常陪同的場合", lead: "第一則為實際經驗，醫院與客人資訊不公開。",
        case1: { title: "皮膚科諮詢", body: "櫃檯把項目劑量寫得比客人要的多。付款前發現並請院方更正，最後只結了客人要的項目與費用。", result: "重點：付款前再確認一次" },
        case2: { title: "整形外科術前與複診", body: "術前與複診最怕漏掉風險和護理要點。我們準確傳達風險、預期與術後護理，並在結束前與您再次確認理解一致。", result: "重點：風險資訊不遺漏" },
        case3: { title: "結束之後", body: "回到住處才想到的問題，由了解現場的同一位口譯員繼續協助。", result: "重點：責任口譯" }
      },
      faq: {
        kicker: "FAQ", title: "諮詢前，<br>您可能想知道", lead: "沒有找到答案？可以先傳送科別、日期和地點，我們會確認後回覆。", action: "直接諮詢",
        q1: "醫療陪同口譯涵蓋哪些環節？", a1: "可涵蓋初診、檢查說明、療程或手術諮詢、術前溝通、術後複診與護理說明，依實際需要安排。",
        q2: "可以當天或緊急安排嗎？", a2: "可以先提供時間、地點與科別，我們會優先確認可用口譯員並儘快回覆。是否可安排以當日檔期為準。",
        q3: "費用怎麼算？", a3: "每小時 ₩30,000 起，依時間、地點、難度與事前準備報價；長期或全程陪同另行協議。確認後才開始。",
        q4: "如何保護就診資訊？", a4: "口譯員遵循保密原則，個人資料和診療內容僅用於服務安排與現場溝通，不對外公開。",
        q5: "用翻譯 App 不行嗎？", a5: "問路、點餐用 App 就夠了。但項目、劑量、費用、同意書這類說錯就有損失的內容，需要有人當場確認雙方理解一致。",
        q6: "醫療文件也可以翻譯嗎？", a6: "支援診斷書、檢查報告、同意書、術後指導等中韓翻譯。請先傳送文件類型與頁數確認範圍。",
        q7: "口譯員會給我醫療建議嗎？", a7: "不會。口譯員只負責準確傳達，不提供醫療建議，也不替醫生或您做決定。治療與費用由您與醫生決定。",
        q8: "會不會省略或美化醫生說的話？", a8: "不會。我們遵循不誇大、不省略的原則，保留醫生說明的專業邊界。",
        q9: "我不知道該問什麼，怎麼辦？", a9: "可以先告訴我們就診目的與顧慮，我們協助整理需要向醫生確認的問題清單。",
        q10: "結束後還能再問嗎？", a10: "可以。簡單的追加提問由同一位口譯員繼續協助（責任口譯）。",
        q11: "出發前可以先視訊諮詢嗎？", a11: "可以。來韓國之前可先用視訊做免費事前諮詢。"
      },
      contact: {
        checklistHref: "assets/checklist-zh.pdf", checklist: "免費下載《就診前問題清單》（PDF）",
        kicker: "START A CONVERSATION", title: "委託之前，<br>先申請免費事前諮詢。", lead: "傳來「服務項目／日期／地點／人數」，先確認可安排的口譯員與費用。回覆時間 08:30~20:30（韓國時間）。",
        templateLabel: "可直接複製這段諮詢模板", template: "服務項目：<br>日期・時間：<br>地點：<br>人數：<br>需要的範圍：", templateText: "服務項目：\n日期・時間：\n地點：\n人數：\n需要的範圍：",
        copy: "複製", wechat: "開啟微信QR Code", email: "寄送郵件", qrAlt: "Jstar 微信QR Code", qrTitle: "微信掃碼諮詢", qrBody: "加入後傳送科別、時間與地點"
      },
      footer: { summary: "首爾 · 韓國中文隨行口譯" },
      mobile: { email: "郵件", wechat: "微信諮詢" },
      modal: { kicker: "WECHAT CONSULTATION", title: "掃碼加入微信好友", lead: "傳送科別、日期與地點，我們會確認檔期與服務範圍。", tip: "委託之前，先申請免費事前諮詢。", download: "儲存QR Code" },
      toast: { copied: "諮詢模板已複製" }
    },
    ko: {
      meta: {
        title: "중국어 통역 전문, 병원·의료통역 | 뷰티·기업 현장 통역사 호출 - 제이스타",
        description: "중국 손님 상담이 있는 날, 중국어 전문 통역사를 불러 주세요. 병원·뷰티샵·기업 현장 순차 통역, 시간당 3만원부터. 상담·진행 전·결제 전 세 번 확인합니다. 서울 전역 출장.",
        ogAlt: "중국어 통역사 호출 · 서울 제이스타"
      },
      a11y: { skip: "주요 콘텐츠로 이동", openMenu: "메뉴 열기", closeMenu: "메뉴 닫기", closeModal: "위챗 QR 닫기" },
      brand: { name: "제이스타", tagline: "중국어 통역" },
      nav: { services: "업종별 통역", process: "부르는 법", rates: "요금", interpreter: "통역사", faq: "FAQ", contact: "위챗 상담" },
      hero: {
        eyebrow: "서울 중국어 통역사 호출 · 병원 의료통역·뷰티샵·기업 현장",
        title: "중국 손님이 오는 날,<br>목적을 돕는 통역사를<br>불러 주세요.",
        lead: "번역 앱으로 상담하다가 손님이 그냥 돌아간 적, 있으시죠?",
        step1: { label: "필요한 날, 필요한 시간만", text: "중국어 직원을 따로 뽑지 않아도 됩니다." },
        step2: { label: "자료를 미리 읽고 갑니다", text: "가격표·동의서를 먼저 받아 현장에서 말이 막히지 않습니다." },
        step3: { label: "쓰리 필터링, 세 번 확인합니다", text: "상담 때, 진행 전, 결제 전. 합의한 내용 그대로 결제됩니다." },
        primary: "무료 사전 상담 (문자)",
        note: "의뢰 전 무료 사전 상담을 신청해 보세요. 답장 08:30~20:30",
        point1: "없는 사실을 지어내지 않습니다",
        point2: "상담 내용 비밀 유지",
        imageAlt: "의료 상담실에서 의사와 환자의 대화를 돕는 중국어 의료 통역사",
        availability: "일정 문의 가능",
        imageKicker: "ON-SITE SUPPORT",
        imageTitle: "중요한 내용을 놓치지 않는 현장 통역"
      },
      trust: {
        c1: { big: "2007년부터", small: "통역 현업" },
        c2: { big: "3,000건+", small: "누적 상담·통역 (추산)" },
        c3: { big: "간체·번체", small: "중국·대만·홍콩 손님 대응" },
        c4: { big: "서울 전역", small: "현장 출장" }
      },
      stakes: {
        kicker: "WHAT'S AT STAKE", title: "번역 앱으로 상담하면<br>생기는 일", lead: "말이 반만 통하면 아래와 같은 일이 생길 수 있습니다.",
        item1: { title: "가격 오해", body: "포함·불포함이 다르게 전달되어 결제 자리에서 말이 달라집니다." },
        item2: { title: "주의사항 누락", body: "시술 후 관리, 환불 규정처럼 꼭 전해야 할 말이 빠집니다." },
        item3: { title: "\"그런 말 못 들었다\"", body: "귀국한 뒤 항의와 나쁜 후기로 돌아옵니다." }
      },
      services: {
        imageAlt: "강남 피부과 상담실에서 의사의 설명을 중국어로 통역하는 의료 통역사",
        kicker: "WHAT WE DO",
        title: "어떤 현장에<br>부르시나요?",
        lead: "업종과 날짜, 장소를 알려 주시면 맞는 통역사를 배정합니다.",
        item1: { title: "병원·의원", body: "상담, 동의서 설명, 수술 전후 안내, 재진까지 의료진의 설명을 그대로 옮깁니다.", tag1: "피부과·성형외과", tag2: "진단서·동의서 번역" },
        item2: { title: "뷰티샵", body: "퍼스널컬러 진단 용어, 헤어 길이와 색, 메이크업·촬영 요청을 정확히 전합니다.", tag1: "퍼스널컬러·헤어", tag2: "촬영 스튜디오" },
        item3: { title: "기업·전시", body: "바이어 미팅, 수출상담회, 공장 방문, 계약 자리의 순차 통역.", tag1: "자료 사전 숙지", tag2: "세금계산서 발행" },
        item4: { title: "여행·호텔·의전", body: "VIP 손님의 전 일정을 한 명의 통역사가 수행합니다.", tag1: "전담 1인", tag2: "일정 비공개" }
      },
      compare: {
        title: "직원 채용, 번역 앱,<br>통역사 호출",
        col1: "중국어 직원 채용", col2: "번역 앱", col3: "통역사 호출",
        row1: { label: "비용", a: "매달 고정", b: "거의 없음", c: "부른 시간만큼" },
        row2: { label: "맞는 경우", a: "중국 손님이 매일 올 때", b: "길 안내, 간단한 인사", c: "상담·동의·계약처럼 틀리면 안 될 때" },
        row3: { label: "준비", a: "채용·교육 기간", b: "없음", c: "자료를 미리 보내면 읽고 감" },
        row4: { label: "확인", a: "직원 역량에 따라", b: "확인하기 어려움", c: "상담 때·진행 전·결제 전 세 번" }
      },
      approach: {
        kicker: "OUR APPROACH",
        title: "제이스타가 지키는<br>세 가지",
        lead: "통역은 양쪽이 충분히 이해하고, 원하는 목적을 이루게 하는 일입니다.",
        point1: { title: "없는 사실을 지어내지 않습니다", body: "의뢰인의 목적을 돕되, 양쪽의 말을 사실 그대로 옮깁니다." },
        point2: { title: "쓰리 필터링", body: "내용과 비용을 상담 때, 진행 전, 결제 전 세 번 확인해 합의한 그대로 결제되게 합니다." },
        point3: { title: "책임통역", body: "끝난 뒤 생기는 간단한 추가 문의는 현장을 아는 담당 통역사가 이어서 돕습니다." },
        quote: "통역은 사람의 언어입니다. 양쪽이 충분히 이해해야 목적을 이룹니다.",
        flow: { patient: "손님의 요구", interpreter: "전문 통역", clinic: "업체의 설명" }
      },
      process: {
        kicker: "HOW IT WORKS", title: "부르는 법, 3단계", lead: "업종, 날짜, 장소만 먼저 알려 주세요. 가능한 통역사와 비용을 먼저 확인해 드립니다.",
        step1: { title: "무료 사전 상담", body: "업종 · 날짜 · 장소 · 손님 인원" },
        step2: { title: "통역사·견적 확인", body: "범위와 비용을 먼저 안내" },
        step3: { title: "현장 통역과 책임통역", body: "끝난 뒤 간단한 추가 문의까지" },
        privacy: { title: "첫 문의부터 지키는 개인정보", body: "개인정보, 진료 정보와 현장 대화는 비밀유지 원칙에 따라 이번 서비스 진행 목적으로만 처리합니다." },
        promise: { title: "우리의 약속", p1: { title: "부풀리지 않고, 빼지 않습니다", body: "의료진의 설명을 있는 그대로 전하며 더하거나 미화하지 않습니다." }, p2: { title: "대신 결정하지 않습니다", body: "통역사는 의료 조언을 하지 않으며, 결정은 손님과 업체가 합니다." }, p3: { title: "먼저 설명하고, 그다음 시작합니다", body: "범위와 견적을 확인한 뒤 서비스를 시작합니다." } }
      },
      rates: {
        title: "이용 방식과 요금",
        r1: { name: "건별 호출", price: "시간당 3만원부터", note: "최소 3시간" },
        r2: { name: "장기 계약", price: "별도 협의", note: "요일·시간을 정해 두고 부르는 방식" },
        r3: { name: "행사·프로젝트", price: "견적", note: "전시회, 상담회, 촬영, VIP 수행" },
        note: "세금계산서 발행 가능 · 순차 통역 전문(동시통역은 하지 않습니다) · 서울 전역"
      },
      interpreter: {
        title: "누가 가나요?",
        body: "한국 유학 뒤 정착해 2007년부터 통역 현장을 지켜 온 현업 의료통역사입니다. 2015년 중국 방문단의 지방정부 방문 때 시장 수행 통역을 맡았고, 병원 상담실과 기업 미팅 현장을 오가고 있습니다.",
        body2: "대표 통역사와 협력 통역사 3명이 함께하며, 같은 날 최대 5명까지 배정할 수 있습니다.",
        imageAlt: "병원 코디네이터와 통역사가 태블릿으로 당일 진료 일정을 확인하는 모습"
      },
      cases: {
        item1: { imageAlt: "피부과 의사가 시술 후 관리 방법을 설명하고 통역사가 옆에서 전달하는 장면" },
        item2: { imageAlt: "성형외과 재진 상담에서 회복 일정을 설명하는 의사와 메모하는 통역사" },
        item3: { imageAlt: "병원 로비에서 휴대폰으로 일정을 확인하며 고객 두 명을 안내하는 통역사" },
        kicker: "SELECTED SCENARIOS", title: "이런 상황에 부릅니다", lead: "현장에서 자주 맡는 상황입니다.",
        case1: { title: "내용과 비용을 확정할 때", body: "접수 과정에서 시술 항목이 손님이 원한 것보다 많은 용량으로 잘못 적힌 것을, 결제 전에 찾아 바로잡은 일이 있습니다. 세 번 확인하는 이유입니다.", result: "핵심: 결제 전 재확인" },
        case2: { title: "상담이 길어지고 손님이 망설일 때", body: "손님이 충분히 이해하고 스스로 결정하도록 양쪽의 말을 정리해 드립니다.", result: "핵심: 이해한 뒤 결정" },
        case3: { title: "끝난 뒤 추가 문의가 올 때", body: "현장을 아는 담당 통역사가 간단한 문의는 이어서 돕습니다.", result: "핵심: 책임통역" }
      },
      next: {
        title: "통역으로 온 손님을,<br>다음 손님으로.",
        body: "샤오홍슈 체험단, 왕홍, 도우인까지. 중국 마케팅은 시엠디랩이 함께합니다.",
        cta: "중국 마케팅 알아보기"
      },
      faq: {
        kicker: "FAQ", title: "문의 전에<br>궁금할 수 있는 내용", lead: "원하는 답이 없다면 업종, 날짜와 장소를 먼저 보내 주세요.", action: "무료 사전 상담",
        q1: "어떤 현장에 부를 수 있나요?", a1: "병원·의원 상담과 동의서 설명, 뷰티샵 상담, 바이어 미팅과 전시회, VIP 수행까지 순차 통역으로 지원합니다.",
        q2: "당일 또는 긴급 요청도 가능한가요?", a2: "시간, 장소와 진료과를 먼저 보내주시면 가능한 통역사를 우선 확인합니다. 실제 배정 여부는 당일 일정에 따라 달라질 수 있습니다.",
        q3: "비용은 어떻게 정해지나요?", a3: "시간당 3만원부터이며 최소 3시간입니다. 시간, 장소, 난이도, 사전 자료 준비에 따라 견적을 안내하고 확인 후 진행합니다. 장기 계약은 별도로 협의합니다.",
        q4: "중국어 직원을 뽑는 게 낫지 않나요?", a4: "중국 손님이 매일 온다면 채용이 맞습니다. 손님이 오는 날이 정해져 있거나 들쭉날쭉하다면 필요한 날만 부르는 편이 부담이 적습니다.",
        q5: "번역 앱으로도 되던데요?", a5: "길 안내나 인사는 앱으로 충분합니다. 가격, 용량, 동의, 계약처럼 틀리면 손해가 생기는 내용은 양쪽이 같은 뜻으로 이해했는지 현장에서 확인할 사람이 필요합니다.",
        q6: "상담 내용은 어떻게 보호하나요?", a6: "통역사는 비밀유지 원칙을 준수하며 개인정보와 진료 내용은 서비스 배정과 현장 소통 목적으로만 사용합니다.",
        q7: "통역사가 의료 조언도 해주나요?", a7: "아니요. 통역사는 정확한 전달만 담당하며 의료 조언을 하거나 의료진·고객을 대신해 결정하지 않습니다. 치료와 비용은 고객과 의료진이 결정합니다.",
        q8: "문서 번역도 가능한가요?", a8: "진단서, 검사 결과, 동의서, 수술 후 안내 등의 중한 번역을 지원합니다. 문서 종류와 페이지 수를 먼저 보내주세요.",
        q9: "세금계산서 발행이 되나요?", a9: "발행 가능합니다.",
        q10: "끝난 뒤 추가 문의가 생기면요?", a10: "간단한 추가 문의는 현장을 아는 담당 통역사가 이어서 돕습니다(책임통역)."
      },
      contact: {
        checklistHref: "assets/checklist-ko.pdf", checklist: "손님께 드리는 「진료 전 질문 체크리스트」(PDF)", ps: "추신. 중국 마케팅 상담도 함께 원하시면 문자에 적어 주세요.",
        kicker: "START A CONVERSATION", title: "의뢰 전, 무료 사전 상담을<br>신청해 보세요.", lead: "업종 / 날짜 / 장소를 문자로 보내 주시면 가능한 통역사와 비용을 먼저 확인해 드립니다. 답장 08:30~20:30.",
        templateLabel: "아래 문의 양식을 바로 복사하세요", template: "업종：<br>날짜 / 시간：<br>장소：<br>손님 인원：<br>필요한 범위：", templateText: "업종：\n날짜 / 시간：\n장소：\n손님 인원：\n필요한 범위：",
        copy: "복사", wechat: "위챗 QR 열기", email: "이메일 보내기", qrAlt: "제이스타 위챗 QR 코드", qrTitle: "위챗 QR 상담", qrBody: "추가 후 진료과, 시간과 장소를 보내주세요"
      },
      footer: { summary: "서울 · 중국어(간체·번체) 통역사 호출" },
      mobile: { email: "이메일", wechat: "위챗 상담" },
      modal: { kicker: "WECHAT CONSULTATION", title: "위챗 QR로 추가", lead: "진료과, 날짜와 장소를 보내주시면 일정과 서비스 범위를 확인합니다.", tip: "의뢰 전 무료 사전 상담을 신청해 보세요.", download: "QR 이미지 저장" },
      phone: { call: "전화 상담", sms: "문자 상담", note: "휴대폰에서 누르면 바로 연결됩니다.", smsBody: "[제이스타 통역 문의] 병원명/진료과, 날짜·시간, 장소를 적어 주세요." },
      toast: { copied: "문의 양식을 복사했습니다" }
    },
    en: {
      meta: {
        title: "Medical Interpreter in Seoul (Mandarin–Korean) | Clinics, Beauty, Business - Jstar",
        description: "Mandarin–Korean interpreter in Seoul for clinic visits, personal colour and beauty appointments, business meetings and VIP escort. On-site since 2007. Treatment and cost are checked three times: at consultation, before it starts and before you pay. From ₩30,000 per hour.",
        ogAlt: "Mandarin–Korean interpreter in Seoul · Jstar"
      },
      a11y: { skip: "Skip to main content", openMenu: "Open menu", closeMenu: "Close menu", closeModal: "Close WeChat QR code" },
      brand: { name: "Jstar", tagline: "MANDARIN–KOREAN INTERPRETING" },
      nav: { services: "Services", approach: "Our promise", rates: "Rates", faq: "FAQ", contact: "WeChat" },
      hero: {
        eyebrow: "Mandarin Medical Interpreter in Seoul · Clinics, Beauty, Business & VIP",
        title: "In Korea, never lose out<br>because of language.",
        lead: "Not catching it in the moment and regretting it back home should not happen.",
        step1: { label: "At consultation", text: "Treatment and cost, confirmed once" },
        step2: { label: "Before it starts", text: "Confirmed a second time" },
        step3: { label: "Before you pay", text: "You pay exactly what was agreed" },
        primary: "Free pre-consultation by email",
        instagram: "Message us on Instagram",
        note: "Ask for a free pre-consultation before you book. Replies 08:30–20:30 (Korea time).",
        secondaryHref: "assets/checklist-en.pdf",
        secondary: "Download the pre-visit question checklist",
        point1: "Nothing added, nothing left out",
        point2: "Your schedule and visit stay private",
        imageAlt: "A Chinese medical interpreter supporting communication between a doctor and patient",
        availability: "Availability inquiries open",
        imageKicker: "ON-SITE SUPPORT",
        imageTitle: "On-site interpretation without missing vital details"
      },
      trust: {
        c1: { big: "Since 2007", small: "On-site interpreting" },
        c2: { big: "3,000+", small: "Sessions to date (estimate)" },
        c3: { big: "Triple check", small: "Consultation, start, payment" },
        c4: { big: "Confidential", small: "Schedule and visit details" }
      },
      stakes: {
        kicker: "WHAT'S AT STAKE", title: "Communication gaps often<br>surface only after you’re home.", lead: "In an unfamiliar medical setting, situations like these can happen.",
        item1: { title: "Questions left unasked", body: "Appointments are short. You may only realize what you forgot to ask after returning home." },
        item2: { title: "Instructions missed", body: "Misheard or missed precautions, restrictions, or follow-up dates can affect your aftercare." },
        item3: { title: "Consent not fully understood", body: "Signing consent forms, costs, or plans you did not fully understand can lead to disagreements later." }
      },
      services: {
        imageAlt: "Medical interpreter translating a dermatologist's explanation into Mandarin at a Gangnam clinic",
        kicker: "WHAT WE DO",
        title: "When to<br>bring us along",
        lead: "Tell us the service, date and place, and we will match the right interpreter.",
        item1: { title: "Clinics: dermatology and plastic surgery", body: "From consultation and consent forms to follow-up visits, the doctor's explanation is conveyed as it is.", tag1: "Triple check on treatment and cost", tag2: "Before and after the procedure" },
        item2: { title: "Personal colour, hair and photo shoots", body: "Colour terms, hair length and shade, styling requests: made clear before anything starts.", tag1: "Accurate terms", tag2: "Confirmed before starting" },
        item3: { title: "Sightseeing and shopping", body: "Restaurants, shops and service counters: we speak for you wherever your day needs it.", tag1: "Half day or full day", tag2: "Fitted to your plan" },
        item4: { title: "Business and trade shows", body: "Consecutive interpreting for company visits, trade show talks, factory tours and contract meetings.", tag1: "Materials read in advance", tag2: "Consecutive interpreting" },
        item5: { title: "VIP private escort", body: "One interpreter stays with you throughout, and your schedule is kept private.", tag1: "One dedicated interpreter", tag2: "Private schedule" }
      },
      approach: {
        kicker: "OUR APPROACH",
        title: "Three things<br>we hold to",
        lead: "Interpreting exists so that you understand first and then decide for yourself.",
        point1: { title: "Nothing invented", body: "We do not say what was not said. Explanations are conveyed as they are." },
        point2: { title: "Triple check", body: "Treatment and cost are confirmed at consultation, before it starts and before you pay." },
        point3: { title: "We stay responsible", body: "Simple follow-up questions are handled by the same interpreter who was there." },
        quote: "Words can be translated, but a medical decision must be truly understood.",
        flow: { patient: "Patient needs", interpreter: "Professional interpretation", clinic: "Medical guidance" }
      },
      interpreter: {
        title: "Who comes with you?",
        body: "After studying in Korea and settling here, our lead interpreter has worked on site since 2007 and is a practising medical interpreter. In 2015 that work included interpreting for a mayor during a Chinese delegation's visit to a Korean local government; today it moves between clinic consultation rooms and business meetings.",
        body2: "A lead interpreter and three partner interpreters; up to five can be assigned on the same day. Languages: Korean and Chinese (Simplified and Traditional).",
        imageAlt: "Interpreter explaining the appointment schedule to a visitor at the clinic reception"
      },
      process: {
        kicker: "HOW IT WORKS", title: "How it works, in three steps", lead: "Send the service, date and place first. We check who is available and what it costs.",
        step1: { title: "Free pre-consultation", body: "Service, date, place, number of people (video call available)" },
        step2: { title: "Interpreter and quote", body: "Scope and cost explained before anything starts" },
        step3: { title: "On site, and after", body: "Simple follow-up questions are still answered" },
        privacy: { title: "Privacy starts with your first inquiry", body: "Personal details, medical information, and on-site conversations are handled confidentially and used only to arrange the requested service." },
        promise: { title: "Our commitments", p1: { title: "No exaggeration, no omission", body: "We convey the doctor’s explanations as they are—nothing added, nothing softened." }, p2: { title: "We don’t decide for you", body: "Interpreters do not give medical advice. Treatment and costs are decided by you and your doctor." }, p3: { title: "Clarity first, then we begin", body: "Service starts only after the scope and quote are confirmed." } }
      },
      rates: {
        title: "Rates",
        r1: { name: "Standard", price: "From ₩30,000 per hour", note: "approx. HK$180 · NT$750 · CN¥150" },
        r2: { name: "Long-term or full itinerary", price: "By arrangement", note: "Multi-day schedules, VIP escort" },
        note: "Converted amounts are fixed reference values; the Korean won price applies. Payment: cash (major currencies accepted), WeChat Pay and similar. Consecutive interpreting only."
      },
      cases: {
        item1: { imageAlt: "Dermatologist explaining aftercare while the interpreter relays it beside the patient" },
        item2: { imageAlt: "Plastic surgery follow-up: the doctor explains the recovery timeline as the interpreter takes notes" },
        item3: { imageAlt: "Interpreter checking the schedule on her phone while guiding two clients through the clinic lobby" },
        kicker: "SELECTED SCENARIOS", title: "Where we are often needed", lead: "The first is a real experience. The clinic and client are not named.",
        case1: { title: "Dermatology consultation", body: "The front desk had entered a larger dose than the client asked for. It was caught before payment and corrected, and the client paid only for what was wanted.", result: "Key: check once more before paying" },
        case2: { title: "Plastic surgery consultation and follow-up", body: "Before surgery and at follow-ups, risks and aftercare points are easy to miss. We convey risks, expectations, and aftercare accurately and reconfirm that you understand before the visit ends.", result: "Focus: no missing risk information" },
        case3: { title: "After the visit", body: "Questions that come up back at your hotel are handled by the same interpreter.", result: "Key: we stay responsible" }
      },
      faq: {
        kicker: "FAQ", title: "What you may want to know<br>before contacting us", lead: "If your question is not covered, send us the specialty, date, and location. We will review and reply.", action: "Contact us",
        q1: "What stages can medical escort interpretation cover?", a1: "Support can include initial appointments, examination explanations, treatment or surgery consultations, pre-procedure communication, follow-ups, and aftercare guidance, depending on your needs.",
        q2: "Can you arrange same-day or urgent support?", a2: "Send the time, location, and specialty first. We will prioritize checking available interpreters, although same-day arrangements depend on current availability.",
        q3: "How is the fee worked out?", a3: "From ₩30,000 per hour, quoted by time, place, difficulty and preparation. Long-term or full-itinerary work is arranged separately. Nothing starts until you confirm.",
        q4: "How do you protect medical information?", a4: "Interpreters follow strict confidentiality principles. Personal and medical information is used only for service coordination and on-site communication.",
        q5: "Isn't a translation app enough?", a5: "For directions and ordering food, yes. For treatment, dose, cost and consent, where a mistake costs you, someone needs to confirm on the spot that both sides mean the same thing.",
        q6: "Do you translate medical documents?", a6: "Yes. We translate medical certificates, test results, consent forms, and aftercare guides between Chinese and Korean. Send the document type and page count to confirm the scope.",
        q7: "Will the interpreter give me medical advice?", a7: "No. Interpreters only convey information accurately. They do not give medical advice or decide for you or your doctor. Treatment and costs are decided by you and your doctor.",
        q8: "Do you ever shorten or soften what the doctor says?", a8: "No. We follow a no-exaggeration, no-omission principle and keep the professional limits of the doctor’s explanation.",
        q9: "I don’t know what to ask. What should I do?", a9: "Tell us the purpose of your visit and your concerns first. We will help you organize a list of questions to confirm with the doctor.",
        q10: "Can I still ask questions afterwards?", a10: "Yes. Simple follow-up questions are handled by the same interpreter.",
        q11: "Can we talk by video before I travel?", a11: "Yes. A free pre-consultation by video call is available before you come to Korea."
      },
      contact: {
        checklistHref: "assets/checklist-en.pdf", checklist: "Free download: Before-Your-Visit Question Checklist (PDF)",
        kicker: "START A CONVERSATION", title: "Before you book,<br>ask for a free pre-consultation.", lead: "Send the service, date, place and number of people. We confirm who is available and the cost first. Replies 08:30–20:30 (Korea time).",
        templateLabel: "Copy this inquiry template", template: "Service:<br>Date and time:<br>Place:<br>Number of people:<br>What you need:", templateText: "Service:\nDate and time:\nPlace:\nNumber of people:\nWhat you need:",
        copy: "Copy", wechat: "Open WeChat QR", email: "Send email", qrAlt: "Jstar WeChat QR code", qrTitle: "Scan to contact us on WeChat", qrBody: "Send the specialty, time, and location after adding us"
      },
      footer: { summary: "Seoul · Mandarin–Korean interpreting" },
      mobile: { email: "Email", wechat: "WeChat" },
      modal: { kicker: "WECHAT CONSULTATION", title: "Add us on WeChat", lead: "Send the specialty, date, and location, and we will confirm availability and the service scope.", tip: "Ask for a free pre-consultation before you book.", download: "Save QR code" },
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

  // CTA tracking: every contact button / download link carries data-track="<position>".
  // Nothing is sent unless gtag has been loaded (tools/build.js only adds it when GA_ID is set).
  const trackChannel = (element) => {
    if (element.dataset.channel) return element.dataset.channel;
    if (element.dataset.contact) return element.dataset.contact;
    if (element.hasAttribute("data-open-wechat")) return "wechat";
    if (element.hasAttribute("download")) return "download";
    if ((element.getAttribute("href") || "").startsWith("mailto:")) return "email";
    return "link";
  };
  document.addEventListener("click", (event) => {
    const element = event.target instanceof Element ? event.target.closest("[data-track]") : null;
    if (!element || typeof window.gtag !== "function") return;
    window.gtag("event", "cta_click", {
      cta_position: element.dataset.track,
      cta_channel: trackChannel(element),
      page_lang: document.documentElement.lang
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
