/* ==========================================================
   Тіл ауыстырғыш: ҚАЗ / РУС / ENG
   Как работает: элементы с data-i18n="ключ" получают текст из словаря T.
   Выбор языка сохраняется в localStorage и действует на всех страницах.
   Чтобы перевести другую страницу, добавьте ей data-i18n-атрибуты
   и новые ключи в словарь T (для всех трёх языков).
   ========================================================== */
(function () {
    "use strict";

    var STORAGE_KEY = "zhandosov-lang";
    var DEFAULT_LANG = "kk";

    var T = {
        kk: {
            "meta.title": "Ораз Жандосов — Ғылыми-зерттеу жобасы",
            "nav.label": "Негізгі мәзір",
            "nav.home": "Кіріспе",
            "nav.bio": "І. Өмірбаян мен Хронология",
            "nav.map": "ІІ. Алашпен байланыс",
            "nav.research": "ІІІ. Тәжірибелік бөлім (ЖИ)",

            "badge": "Ғылыми жоба, 2026",
            "hero.title": "Ораз Жандосовтың қоғамдық-саяси мұрасы",
            "hero.subtitle": "Жасанды интеллект негізінде жүйелеу және визуализациялау",

            "sheet.top": "ҚР Президенті мұрағаты",
            "stamp": "ҚҰПИЯ",
            "stamp.note": "«Құпия» белгісі алынды",
            "sheet.l1": "Ораз Қиқымұлы Жандосов",
            "sheet.l2": "Қоғамдық-саяси мұра",
            "sheet.l3": "Мұрағат құжаттары",
            "sheet.l4": "Жүйелеу және визуализациялау",

            "intro.title": "Жобаның өзектілігі мен мақсаты",
            "intro.lead": "Ораз Қиқымұлы Жандосов туралы тарихи деректі, көркем фильмнің жоқтығы, ғаламтордағы бейнематериалдардағы қаралымның аздығы және тұлғаның тарихи маңызының заманауи құралдармен визуализацияланбауы осы жобаға негіз болды.",
            "intro.p2": "Біз ҚР Президенті мұрағатынан алынған <strong>«Құпия» белгісі енді ғана алынған тың деректерге</strong> сүйене отырып, тұлға мұрасын жасанды интеллект көмегімен жүйелеудің алғашқы үлгісін жасадық.",

            "press.title": "БАҚ-та жариялануы",
            "press.lead": "Жоба нәтижелері кеңінен жарық көрді:",
            "press.l1": "«Егемен Қазақстан» газеті",
            "press.l2": "«Астана Ақшамы» газеті",
            "press.l3": "Астана қаласы әкимиятінің ресми сайттары",
            "press.l4": "Әлеуметтік желілер",
            "press.quote": "«Алаш рухы — жаңа ұрпақпен жаңғырып келеді»",
            "press.cite": "мақаласы",

            "pass.title": "Жоба паспорты",
            "authors.label": "Жоба авторлары",
            "authors.n1": "Сенғазы Жансері Қасымханұлы",
            "authors.n2": "Ертай Естай Нұржанұлы",
            "authors.grade": "10 сынып",
            "school.label": "Мектеп",
            "school.name": "«№73 мектеп-лицей» ШЖҚ МКК, Астана қаласы",
            "sup.label": "Жоба жетекшісі",
            "sup.name": "Жомартқызы Гаури Ботакановна",
            "sup.role": "педагог-зерттеуші",
            "sci.label": "Ғылыми жетекші",
            "sci.name": "Дүкенбаева Задаш Оразғалықызы",
            "sci.role": "т.ғ.д., профессор, Л.Н. Гумилев атындағы ЕҰУ",
            "field.label": "Бағыты",
            "field.value": "Тарих",

            "parts.title": "Жоба бөлімдері",
            "p1.num": "І",
            "p1.title": "Өмірбаян мен Хронология",
            "p1.desc": "Өмір жолы мен негізгі оқиғалар",
            "p2.num": "ІІ",
            "p2.title": "Алашпен байланыс",
            "p2.desc": "Тұлға мен Алаш арасындағы байланыс картасы",
            "p3.num": "ІІІ",
            "p3.title": "Тәжірибелік бөлім (ЖИ)",
            "p3.desc": "Жасанды интеллектпен жүйелеу және визуализациялау",

            "footer": "© 2026 Ғылыми-зерттеу жобасы. «№73 мектеп-лицей», Астана қаласы."
        },

        ru: {
            "meta.title": "Ораз Жандосов — Научно-исследовательский проект",
            "nav.label": "Главное меню",
            "nav.home": "Введение",
            "nav.bio": "I. Биография и хронология",
            "nav.map": "II. Связь с Алаш",
            "nav.research": "III. Практическая часть (ИИ)",

            "badge": "Научный проект, 2026",
            "hero.title": "Общественно-политическое наследие Ораза Жандосова",
            "hero.subtitle": "Систематизация и визуализация на основе искусственного интеллекта",

            "sheet.top": "Архив Президента РК",
            "stamp": "СЕКРЕТНО",
            "stamp.note": "Гриф «Секретно» снят",
            "sheet.l1": "Ораз Кикымович Жандосов",
            "sheet.l2": "Общественно-политическое наследие",
            "sheet.l3": "Архивные документы",
            "sheet.l4": "Систематизация и визуализация",

            "intro.title": "Актуальность и цель проекта",
            "intro.lead": "Основанием для проекта стали отсутствие исторического документального и художественного фильма об Оразе Кикымовиче Жандосове, малое число просмотров видеоматериалов в интернете и то, что историческое значение личности не визуализировано современными средствами.",
            "intro.p2": "Опираясь на полученные из архива Президента РК <strong>свежие данные, с которых только что снят гриф «Секретно»</strong>, мы создали первый образец систематизации наследия личности с помощью искусственного интеллекта.",

            "press.title": "Публикации в СМИ",
            "press.lead": "Результаты проекта получили широкое освещение:",
            "press.l1": "Газета «Егемен Қазақстан»",
            "press.l2": "Газета «Астана Ақшамы»",
            "press.l3": "Официальные сайты акимата города Астаны",
            "press.l4": "Социальные сети",
            "press.quote": "«Дух Алаш возрождается вместе с новым поколением»",
            "press.cite": "статья",

            "pass.title": "Паспорт проекта",
            "authors.label": "Авторы проекта",
            "authors.n1": "Сенгазы Жансеря Касымханович",
            "authors.n2": "Ертай Естай Нуржанович",
            "authors.grade": "10 класс",
            "school.label": "Школа",
            "school.name": "«Школа-лицей № 73» КГКП на ПХВ, город Астана",
            "sup.label": "Руководитель проекта",
            "sup.name": "Жомартқызы Гаури Ботакановна",
            "sup.role": "педагог-исследователь",
            "sci.label": "Научный руководитель",
            "sci.name": "Дукенбаева Задаш Оразгалиевна",
            "sci.role": "д.и.н., профессор, ЕНУ им. Л.Н. Гумилева",
            "field.label": "Направление",
            "field.value": "История",

            "parts.title": "Разделы проекта",
            "p1.num": "I",
            "p1.title": "Биография и хронология",
            "p1.desc": "Жизненный путь и основные события",
            "p2.num": "II",
            "p2.title": "Связь с Алаш",
            "p2.desc": "Карта связей личности и движения Алаш",
            "p3.num": "III",
            "p3.title": "Практическая часть (ИИ)",
            "p3.desc": "Систематизация и визуализация с помощью ИИ",

            "footer": "© 2026 Научно-исследовательский проект. «Школа-лицей № 73», город Астана."
        },

        en: {
            "meta.title": "Oraz Zhandosov — Research Project",
            "nav.label": "Main menu",
            "nav.home": "Introduction",
            "nav.bio": "I. Biography and Chronology",
            "nav.map": "II. Connection with Alash",
            "nav.research": "III. Practical Part (AI)",

            "badge": "Research project, 2026",
            "hero.title": "The Socio-Political Legacy of Oraz Zhandosov",
            "hero.subtitle": "Systematization and visualization powered by artificial intelligence",

            "sheet.top": "Archive of the President of Kazakhstan",
            "stamp": "CLASSIFIED",
            "stamp.note": "“Classified” marking removed",
            "sheet.l1": "Oraz Kikymuly Zhandosov",
            "sheet.l2": "Socio-political legacy",
            "sheet.l3": "Archival documents",
            "sheet.l4": "Systematization and visualization",

            "intro.title": "Relevance and Aim of the Project",
            "intro.lead": "This project grew out of several gaps: there is no historical documentary or feature film about Oraz Kikymuly Zhandosov, his video materials online have very few views, and the historical significance of the figure has not been visualized with modern tools.",
            "intro.p2": "Drawing on <strong>fresh data from the Archive of the President of Kazakhstan whose “Classified” marking has only just been lifted</strong>, we created the first prototype for systematizing his legacy with the help of artificial intelligence.",

            "press.title": "Media coverage",
            "press.lead": "The project’s results have been widely covered:",
            "press.l1": "Egemen Qazaqstan newspaper",
            "press.l2": "Astana Akshamy newspaper",
            "press.l3": "Official websites of the Astana city administration",
            "press.l4": "Social media",
            "press.quote": "“The Spirit of Alash Is Reborn with a New Generation”",
            "press.cite": "article",

            "pass.title": "Project passport",
            "authors.label": "Project authors",
            "authors.n1": "Sengazy Zhanseri Kasymkhanuly",
            "authors.n2": "Yertai Yestai Nurzhanuly",
            "authors.grade": "Grade 10",
            "school.label": "School",
            "school.name": "School-Lyceum No. 73, Astana",
            "sup.label": "Project supervisor",
            "sup.name": "Zhomartkyzy Gauri Botakanovna",
            "sup.role": "teacher-researcher",
            "sci.label": "Academic supervisor",
            "sci.name": "Dukenbayeva Zadash Orazgalikyzy",
            "sci.role": "Doctor of Historical Sciences, Professor, L.N. Gumilyov Eurasian National University",
            "field.label": "Field",
            "field.value": "History",

            "parts.title": "Project sections",
            "p1.num": "I",
            "p1.title": "Biography and Chronology",
            "p1.desc": "Life path and key events",
            "p2.num": "II",
            "p2.title": "Connection with Alash",
            "p2.desc": "Map of connections between the figure and Alash",
            "p3.num": "III",
            "p3.title": "Practical Part (AI)",
            "p3.desc": "Systematization and visualization with AI",

            "footer": "© 2026 Research project. School-Lyceum No. 73, Astana."
        }
    };

    /* ---------- Хранилище (в try/catch: в приватном режиме может быть недоступно) ---------- */

    function readLang() {
        try {
            var saved = localStorage.getItem(STORAGE_KEY);
            if (saved && T[saved]) return saved;
        } catch (e) { /* игнорируем */ }
        return DEFAULT_LANG;
    }

    function saveLang(lang) {
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* игнорируем */ }
    }

    /* ---------- Подготовка страницы ---------- */

    // Внутренние страницы: меню и подвал переводятся автоматически, без правки их HTML
    function tag(selector, key) {
        document.querySelectorAll(selector).forEach(function (el) {
            if (!el.hasAttribute("data-i18n") && !el.hasAttribute("data-i18n-html")) {
                el.setAttribute("data-i18n", key);
            }
        });
    }

    function prepareShared() {
        tag('.main-nav a[href="index.html"]', "nav.home");
        tag('.main-nav a[href="biography.html"]', "nav.bio");
        tag('.main-nav a[href="mindmap.html"]', "nav.map");
        tag('.main-nav a[href="research.html"]', "nav.research");
        tag(".site-footer p", "footer");

        document.querySelectorAll(".main-nav").forEach(function (nav) {
            if (!nav.hasAttribute("data-i18n-label")) nav.setAttribute("data-i18n-label", "nav.label");
        });
    }

    var LANG_BY_TEXT = { "ҚАЗ": "kk", "РУС": "ru", "ENG": "en" };

    function prepareButtons() {
        document.querySelectorAll(".lang-btn").forEach(function (btn) {
            var lang = btn.getAttribute("data-lang") || LANG_BY_TEXT[btn.textContent.trim()];

            if (!lang) {
                btn.hidden = true; // например «中文» — перевода нет, кнопка скрыта
                return;
            }

            btn.setAttribute("data-lang", lang);

            if (btn.tagName !== "BUTTON") {
                btn.setAttribute("role", "button");
                btn.setAttribute("tabindex", "0");
                btn.addEventListener("keydown", function (e) {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setLang(lang);
                    }
                });
            }

            btn.addEventListener("click", function () { setLang(lang); });
        });
    }

    /* ---------- Применение перевода ---------- */

    function apply(lang) {
        var dict = T[lang];
        if (!dict) return;

        document.documentElement.lang = lang;

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var value = dict[el.getAttribute("data-i18n")];
            if (value !== undefined) el.textContent = value;
        });

        // Только для наших собственных строк со <strong> внутри
        document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
            var value = dict[el.getAttribute("data-i18n-html")];
            if (value !== undefined) el.innerHTML = value;
        });

        document.querySelectorAll("[data-i18n-label]").forEach(function (el) {
            var value = dict[el.getAttribute("data-i18n-label")];
            if (value !== undefined) el.setAttribute("aria-label", value);
        });

        document.querySelectorAll(".lang-btn[data-lang]").forEach(function (btn) {
            var active = btn.getAttribute("data-lang") === lang;
            btn.classList.toggle("active", active);
            btn.setAttribute("aria-pressed", active ? "true" : "false");
        });
    }

    function setLang(lang) {
        saveLang(lang);
        apply(lang);
    }

    function init() {
        prepareShared();
        prepareButtons();
        apply(readLang());
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
