(() => {
  "use strict";

  const translations = {
    "zh-CN": {
      meta: {
        title: "Jstar Studio | 首尔·江南中文医疗陪同口译",
        description: "为来韩就医客户、江南诊所与医疗服务机构提供中文医疗陪同口译、术前术后沟通、文件翻译与多日程协调。快速匹配，严格保密。",
        socialTitle: "让每一次医疗沟通，都清楚而安心",
        socialDescription: "首尔·江南中文医疗陪同口译｜按科室与行程快速匹配，严格保密。"
      },
      a11y: { skip: "跳到主要内容", openMenu: "打开菜单", closeMenu: "关闭菜单", closeModal: "关闭微信二维码" },
      nav: { services: "服务", approach: "专业方式", process: "流程", faq: "问答", contact: "微信咨询" },
      hero: {
        eyebrow: "SEOUL · GANGNAM MEDICAL SUPPORT",
        title: "让每一次医疗沟通，<br><em>都清楚而安心。</em>",
        lead: "从初诊咨询到术后复诊，准确传达医生说明，也替您整理真正需要确认的问题。",
        primary: "确认口译档期",
        secondary: "查看服务范围",
        point1: "中文 · 韩文现场支持",
        point2: "就诊信息严格保密",
        imageAlt: "中文医疗口译员在诊室协助医生与患者沟通",
        availability: "可提交档期咨询",
        imageKicker: "ON-SITE SUPPORT",
        imageTitle: "现场口译，不遗漏关键细节"
      },
      trust: { years: "年综合经验", sessions: "场服务记录", area: "首尔 · 江南现场支持", private: "保密流程" },
      services: {
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
        lead: "我们先理解就诊目的与现场角色，再准确传达内容、确认重点、减少误解。",
        point1: { title: "听懂语境", body: "结合科室、项目与客户顾虑理解真正意图。" },
        point2: { title: "准确传达", body: "不夸大、不省略，保留医生说明的专业边界。" },
        point3: { title: "双向确认", body: "整理关键问题，帮助双方确认理解一致。" },
        quote: "一句话可以被翻译，但一次医疗决定需要被真正理解。",
        flow: { patient: "客户需求", interpreter: "专业口译", clinic: "医疗说明" }
      },
      audience: {
        kicker: "WHO WE SUPPORT",
        title: "两种需求，一套清晰标准",
        patient: { label: "FOR PATIENTS", title: "来韩就医客户", body: "不熟悉韩国医疗流程，也能有条理地完成咨询、检查与复诊。", li1: "初诊与项目咨询", li2: "手术前后沟通", li3: "检查与护理说明", li4: "VIP医疗行程陪同" },
        business: { label: "FOR CLINICS & AGENCIES", title: "诊所与医疗服务机构", body: "按客群、科室与排班需求协调合适口译员，稳定客户沟通体验。", li1: "多门店 · 多日程排班", li2: "中国客户现场接待", li3: "资料与术语标准化", li4: "长期协作窗口" }
      },
      process: {
        kicker: "HOW IT WORKS", title: "从咨询到现场，四步完成", lead: "只需先提供科室、时间与地点。我们会确认需求后再匹配，不需要立即决定。",
        step1: { title: "提交需求", body: "科室 · 日期 · 地点 · 所需范围" },
        step2: { title: "确认与报价", body: "核对难度、时长与行程细节" },
        step3: { title: "匹配口译员", body: "按经验、科室与时间安排" },
        step4: { title: "现场与跟进", body: "陪同沟通，必要时整理后续重点" },
        privacy: { title: "隐私从第一次咨询开始", body: "个人资料、就诊信息与现场沟通内容均按保密原则处理，仅用于本次服务安排。" }
      },
      cases: {
        kicker: "SELECTED SCENARIOS", title: "常见服务场景", lead: "以下内容均为匿名化场景说明，用来帮助您判断需要哪种支持。",
        case1: { title: "江南皮肤科项目咨询", body: "协助比较项目差异、注意事项与恢复期，并现场确认客户关心的问题。", result: "重点：选择依据清晰" },
        case2: { title: "整形外科术前与复诊", body: "准确传达风险、预期与术后护理，帮助双方再次确认理解一致。", result: "重点：风险信息不遗漏" },
        case3: { title: "多客户多时段排班", body: "为诊所或服务机构协调多名口译员，统一变更与现场沟通窗口。", result: "重点：减少排班断点" }
      },
      faq: {
        kicker: "FAQ", title: "咨询前，<br>您可能想知道", lead: "没有找到答案？可以先发送科室、日期和地点，我们会确认后回复。", action: "直接咨询",
        q1: "医疗陪同口译覆盖哪些环节？", a1: "可覆盖初诊、检查说明、项目或手术咨询、术前沟通、术后复诊与护理说明，按实际需要安排。",
        q2: "可以当天或紧急安排吗？", a2: "可以先提交时间、地点与科室，我们会优先确认可用口译员并尽快回复。是否可安排以当日档期为准。",
        q3: "费用如何计算？", a3: "根据时长、地点、科室难度、是否需要多日程排班及文件准备等因素报价，确认后再开始服务。",
        q4: "如何保护就诊信息？", a4: "口译员遵循保密原则，个人资料和诊疗内容仅用于服务安排与现场沟通，不对外公开。",
        q5: "诊所可以长期合作吗？", a5: "可以。支持按门店、科室、客群和时段建立长期协作流程，也可先从单次服务开始。",
        q6: "医疗文件也可以翻译吗？", a6: "支持诊断书、检查报告、同意书、术后指导等中韩翻译。请先发送文件类型与页数确认范围。"
      },
      contact: {
        kicker: "START A CONVERSATION", title: "先确认档期，<br>再决定下一步。", lead: "通过微信发送“科室 / 日期 / 地点”，我们会根据情况确认可安排范围。",
        templateLabel: "可直接复制这段咨询模板", template: "科室：<br>日期 / 时间：<br>地点：<br>需要范围：", templateText: "科室：\n日期 / 时间：\n地点：\n需要范围：",
        copy: "复制", wechat: "打开微信二维码", email: "发送邮件", qrAlt: "Jstar Studio 微信二维码", qrTitle: "微信扫码咨询", qrBody: "添加后发送科室、时间与地点"
      },
      footer: { summary: "首尔 · 江南中文医疗口译与专业翻译" },
      mobile: { email: "邮件", wechat: "微信咨询" },
      modal: { kicker: "WECHAT CONSULTATION", title: "扫码添加微信", lead: "发送科室、日期与地点，我们会确认档期与服务范围。", tip: "可先咨询，无需立即决定", download: "保存二维码" },
      toast: { copied: "咨询模板已复制" }
    },
    ko: {
      meta: {
        title: "Jstar Studio | 서울·강남 중국어 의료 통역",
        description: "한국을 방문한 중국어권 의료 고객과 강남 의료기관을 위한 중국어 의료 동행 통역, 수술 전후 커뮤니케이션, 문서 번역 및 일정 조율 서비스입니다.",
        socialTitle: "모든 의료 커뮤니케이션을 명확하고 안심되게",
        socialDescription: "서울·강남 중국어 의료 동행 통역｜진료과와 일정에 맞춘 빠른 매칭, 철저한 비밀유지."
      },
      a11y: { skip: "주요 콘텐츠로 이동", openMenu: "메뉴 열기", closeMenu: "메뉴 닫기", closeModal: "위챗 QR 닫기" },
      nav: { services: "서비스", approach: "통역 원칙", process: "진행 절차", faq: "FAQ", contact: "위챗 상담" },
      hero: {
        eyebrow: "SEOUL · GANGNAM MEDICAL SUPPORT",
        title: "의료 커뮤니케이션을<br><em>명확하고 안심되게.</em>",
        lead: "초진 상담부터 수술 후 재진까지, 의료진의 설명을 정확히 전달하고 꼭 확인해야 할 질문을 정리합니다.",
        primary: "통역 일정 확인",
        secondary: "서비스 범위 보기",
        point1: "중국어 · 한국어 현장 지원",
        point2: "진료 정보 비밀유지",
        imageAlt: "의료 상담실에서 의사와 환자의 대화를 돕는 중국어 의료 통역사",
        availability: "일정 문의 가능",
        imageKicker: "ON-SITE SUPPORT",
        imageTitle: "중요한 내용을 놓치지 않는 현장 통역"
      },
      trust: { years: "년 종합 경력", sessions: "건 이상 통역 기록", area: "서울 · 강남 현장 지원", private: "비밀유지 프로세스" },
      services: {
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
        lead: "진료 목적과 현장 역할을 먼저 이해한 뒤 내용을 정확히 전달하고, 핵심을 재확인해 오해를 줄입니다.",
        point1: { title: "맥락 이해", body: "진료과, 시술과 고객의 우려를 함께 보고 의도를 파악합니다." },
        point2: { title: "정확한 전달", body: "과장하거나 생략하지 않고 의료진 설명의 전문적 경계를 지킵니다." },
        point3: { title: "양방향 확인", body: "핵심 질문을 정리하고 양측의 이해가 일치하는지 확인합니다." },
        quote: "문장은 번역할 수 있지만, 의료 결정은 제대로 이해되어야 합니다.",
        flow: { patient: "고객의 요구", interpreter: "전문 통역", clinic: "의료진 설명" }
      },
      audience: {
        kicker: "WHO WE SUPPORT",
        title: "두 가지 요구, 하나의 명확한 기준",
        patient: { label: "FOR PATIENTS", title: "한국 방문 의료 고객", body: "한국 의료 절차가 낯설어도 상담, 검사와 재진을 체계적으로 진행할 수 있습니다.", li1: "초진 및 시술 상담", li2: "수술 전후 커뮤니케이션", li3: "검사와 관리 안내", li4: "VIP 의료 일정 동행" },
        business: { label: "FOR CLINICS & AGENCIES", title: "병원 및 의료 서비스 기관", body: "고객군, 진료과와 일정에 맞는 통역사를 조율해 일관된 고객 소통 경험을 만듭니다.", li1: "다지점 · 다중 일정 배치", li2: "중국 고객 현장 응대", li3: "자료와 용어 표준화", li4: "장기 협업 창구" }
      },
      process: {
        kicker: "HOW IT WORKS", title: "문의부터 현장까지, 네 단계", lead: "진료과, 시간과 장소만 먼저 알려주세요. 요청을 확인한 뒤 매칭하므로 바로 결정하지 않아도 됩니다.",
        step1: { title: "요청 전달", body: "진료과 · 날짜 · 장소 · 필요 범위" },
        step2: { title: "확인 및 견적", body: "난이도, 시간과 동선 세부 확인" },
        step3: { title: "통역사 매칭", body: "경험, 진료과와 일정에 맞춰 배정" },
        step4: { title: "현장 및 후속", body: "동행 통역과 필요 시 후속 내용 정리" },
        privacy: { title: "첫 문의부터 지키는 개인정보", body: "개인정보, 진료 정보와 현장 대화는 비밀유지 원칙에 따라 이번 서비스 진행 목적으로만 처리합니다." }
      },
      cases: {
        kicker: "SELECTED SCENARIOS", title: "주요 서비스 장면", lead: "아래 내용은 필요한 지원 범위를 판단할 수 있도록 익명화한 상황 예시입니다.",
        case1: { title: "강남 피부과 시술 상담", body: "시술 차이, 주의사항과 회복 기간을 비교하고 고객이 궁금한 점을 현장에서 확인합니다.", result: "핵심: 선택 기준 명확화" },
        case2: { title: "성형외과 수술 전·재진", body: "위험, 기대 결과와 수술 후 관리 사항을 정확히 전달하고 양측의 이해를 재확인합니다.", result: "핵심: 위험 정보 누락 방지" },
        case3: { title: "다수 고객 다중 일정", body: "병원 또는 기관을 위해 여러 통역사를 조율하고 일정 변경과 현장 소통 창구를 일원화합니다.", result: "핵심: 일정 공백 최소화" }
      },
      faq: {
        kicker: "FAQ", title: "문의 전에<br>궁금할 수 있는 내용", lead: "원하는 답이 없다면 진료과, 날짜와 장소를 먼저 보내주세요. 확인 후 안내드립니다.", action: "바로 문의하기",
        q1: "의료 동행 통역은 어디까지 지원하나요?", a1: "초진, 검사 설명, 시술 또는 수술 상담, 수술 전 커뮤니케이션, 수술 후 재진과 관리 안내를 필요 범위에 맞춰 지원합니다.",
        q2: "당일 또는 긴급 요청도 가능한가요?", a2: "시간, 장소와 진료과를 먼저 보내주시면 가능한 통역사를 우선 확인합니다. 실제 배정 여부는 당일 일정에 따라 달라질 수 있습니다.",
        q3: "비용은 어떻게 산정하나요?", a3: "시간, 장소, 진료과 난이도, 다중 일정 배치와 사전 문서 준비 여부 등을 기준으로 견적을 안내하고 확인 후 진행합니다.",
        q4: "진료 정보는 어떻게 보호하나요?", a4: "통역사는 비밀유지 원칙을 준수하며 개인정보와 진료 내용은 서비스 배정과 현장 소통 목적으로만 사용합니다.",
        q5: "병원과 장기 협업도 가능한가요?", a5: "가능합니다. 지점, 진료과, 고객군과 시간대에 맞춘 협업 프로세스를 만들 수 있으며 단건으로 먼저 시작할 수도 있습니다.",
        q6: "의료 문서 번역도 가능한가요?", a6: "진단서, 검사 결과, 동의서, 수술 후 안내 등의 중한 번역을 지원합니다. 문서 종류와 페이지 수를 먼저 보내주세요."
      },
      contact: {
        kicker: "START A CONVERSATION", title: "일정을 먼저 확인하고,<br>다음 단계를 결정하세요.", lead: "위챗으로 ‘진료과 / 날짜 / 장소’를 보내주시면 가능한 서비스 범위를 확인합니다.",
        templateLabel: "아래 문의 양식을 바로 복사하세요", template: "진료과：<br>날짜 / 시간：<br>장소：<br>필요 범위：", templateText: "진료과：\n날짜 / 시간：\n장소：\n필요 범위：",
        copy: "복사", wechat: "위챗 QR 열기", email: "이메일 보내기", qrAlt: "Jstar Studio 위챗 QR 코드", qrTitle: "위챗 QR 상담", qrBody: "추가 후 진료과, 시간과 장소를 보내주세요"
      },
      footer: { summary: "서울 · 강남 중국어 의료 통역 및 전문 번역" },
      mobile: { email: "이메일", wechat: "위챗 상담" },
      modal: { kicker: "WECHAT CONSULTATION", title: "위챗 QR로 추가", lead: "진료과, 날짜와 장소를 보내주시면 일정과 서비스 범위를 확인합니다.", tip: "먼저 문의하고 나중에 결정해도 됩니다", download: "QR 이미지 저장" },
      toast: { copied: "문의 양식을 복사했습니다" }
    }
  };

  const byPath = (object, path) => path.split(".").reduce((value, part) => value?.[part], object);
  const languageButtons = [...document.querySelectorAll("[data-lang]")];
  const menuToggle = document.getElementById("menuToggle");
  const primaryNav = document.getElementById("primaryNav");
  const siteHeader = document.getElementById("siteHeader");
  const modal = document.getElementById("wechatModal");
  const modalDialog = modal?.querySelector(".modal-dialog");
  const toast = document.getElementById("toast");
  let activeLanguage = "zh-CN";
  let lastFocusedElement = null;
  let toastTimer = null;

  const updateMeta = (language) => {
    const meta = translations[language].meta;
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.socialTitle);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.socialDescription);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", meta.socialTitle);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", meta.socialDescription);
  };

  const applyLanguage = (language, persist = true) => {
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

    languageButtons.forEach((button) => {
      const selected = button.dataset.lang === activeLanguage;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });

    updateMeta(activeLanguage);
    if (persist) {
      try { localStorage.setItem("jstar-language", activeLanguage); } catch (_) { /* no-op */ }
    }
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

  languageButtons.forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.lang)));
  menuToggle?.addEventListener("click", toggleMenu);
  primaryNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.querySelectorAll("[data-open-wechat]").forEach((button) => button.addEventListener("click", () => openModal(button)));
  document.querySelectorAll("[data-close-wechat]").forEach((button) => button.addEventListener("click", closeModal));
  document.getElementById("copyTemplate")?.addEventListener("click", copyInquiryTemplate);

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
    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  let savedLanguage = "zh-CN";
  try { savedLanguage = localStorage.getItem("jstar-language") || "zh-CN"; } catch (_) { /* no-op */ }
  applyLanguage(savedLanguage, false);
  document.getElementById("year").textContent = new Date().getFullYear();
})();
