// --- i18n (Internacionalización) ---
const translations = {
    es: {
        mode_tdah: "Modo TDAH",
        mode_sign: "Dactilológico",
        goal_title: "Mi Objetivo de Estudio",
        goal_placeholder: "Ej: Leer 2 capítulos...",
        picto_title: "O elige con pictogramas:",
        mode_pomodoro: "Pomodoro",
        mode_short_break: "Descanso",
        btn_start: "Empezar",
        btn_pause: "Pausar",
        btn_reset: "Reiniciar",
        calendar_title: " Mi Plan Semanal",
        streak_label: "Racha",
        days: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
    },
    en: {
        mode_tdah: "ADHD Mode",
        mode_sign: "Sign Language",
        goal_title: "My Study Goal",
        goal_placeholder: "Ex: Read 2 chapters...",
        picto_title: "Or choose with pictograms:",
        mode_pomodoro: "Pomodoro",
        mode_short_break: "Break",
        btn_start: "Start",
        btn_pause: "Pause",
        btn_reset: "Reset",
        calendar_title: " My Weekly Plan",
        streak_label: "Streak",
        days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    },
    fr: {
        mode_tdah: "Mode TDAH",
        mode_sign: "Langue des signes",
        goal_title: "Mon objectif",
        goal_placeholder: "Ex: Lire 2 chapitres...",
        picto_title: "Ou avec des pictogrammes:",
        mode_pomodoro: "Pomodoro",
        mode_short_break: "Pause",
        btn_start: "Commencer",
        btn_pause: "Pause",
        btn_reset: "Réinitialiser",
        calendar_title: " Mon plan hebdomadaire",
        streak_label: "Série",
        days: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
    },
    de: {
        mode_tdah: "ADHS-Modus",
        mode_sign: "Gebärdensprache",
        goal_title: "Mein Lernziel",
        goal_placeholder: "Z.B. 2 Kapitel lesen...",
        picto_title: "Oder mit Piktogrammen wählen:",
        mode_pomodoro: "Pomodoro",
        mode_short_break: "Pause",
        btn_start: "Starten",
        btn_pause: "Pause",
        btn_reset: "Zurücksetzen",
        calendar_title: " Mein Wochenplan",
        streak_label: "Serie",
        days: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"]
    },
    it: {
        mode_tdah: "Modalità ADHD",
        mode_sign: "Linguaggio dei segni",
        goal_title: "Il mio obiettivo di studio",
        goal_placeholder: "Es: leggere 2 capitoli...",
        picto_title: "Oppure scegli con pittogrammi:",
        mode_pomodoro: "Pomodoro",
        mode_short_break: "Pausa",
        btn_start: "Inizia",
        btn_pause: "Pausa",
        btn_reset: "Reimposta",
        calendar_title: " Il mio piano settimanale",
        streak_label: "Serie",
        days: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"]
    },
    pt: {
        mode_tdah: "Modo TDAH",
        mode_sign: "Libras",
        goal_title: "Meu objetivo de estudo",
        goal_placeholder: "Ex: Ler 2 capítulos...",
        picto_title: "Ou escolha com pictogramas:",
        mode_pomodoro: "Pomodoro",
        mode_short_break: "Descanso",
        btn_start: "Começar",
        btn_pause: "Pausar",
        btn_reset: "Reiniciar",
        calendar_title: " Meu plano semanal",
        streak_label: "Sequência",
        days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
    },
    ca: {
        mode_tdah: "Mode TDAH",
        mode_sign: "Llengua de signes",
        goal_title: "El meu objectiu d’estudi",
        goal_placeholder: "Ex: Llegir 2 capítols...",
        picto_title: "O tria amb pictogrames:",
        mode_pomodoro: "Pomodoro",
        mode_short_break: "Pausa",
        btn_start: "Començar",
        btn_pause: "Pausa",
        btn_reset: "Reiniciar",
        calendar_title: " El meu pla setmanal",
        streak_label: "Ratxa",
        days: ["Dg", "Dl", "Dm", "Dc", "Dj", "Dv", "Ds"]
    },
    gl: {
        mode_tdah: "Modo TDAH",
        mode_sign: "Lingua de signos",
        goal_title: "O meu obxectivo de estudo",
        goal_placeholder: "Ex: Ler 2 capítulos...",
        picto_title: "Ou elixe con pictogramas:",
        mode_pomodoro: "Pomodoro",
        mode_short_break: "Pausa",
        btn_start: "Comezar",
        btn_pause: "Pausar",
        btn_reset: "Reiniciar",
        calendar_title: " O meu plan semanal",
        streak_label: "Racha",
        days: ["Dom", "Lun", "Mar", "Mér", "Xov", "Ven", "Sáb"]
    },
    eu: {
        mode_tdah: "TDAH modua",
        mode_sign: "Seinale hizkuntza",
        goal_title: "Nire ikasketa helburua",
        goal_placeholder: "Adib.: 2 kapitulu irakurri...",
        picto_title: "Edo aukeratu piktogramekin:",
        mode_pomodoro: "Pomodoro",
        mode_short_break: "Pausa",
        btn_start: "Hasi",
        btn_pause: "Pausatu",
        btn_reset: "Berrezarri",
        calendar_title: " Nire asteko plana",
        streak_label: "Jarraipena",
        days: ["Ig", "Al", "Ar", "Az", "Og", "Or", "La"]
    },
    ar: {
        mode_tdah: "وضع TDAH",
        mode_sign: "لغة الإشارة",
        goal_title: "هدف الدراسة",
        goal_placeholder: "مثال: قراءة فصلين...",
        picto_title: "أو اختر بالرموز:",
        mode_pomodoro: "بومودورو",
        mode_short_break: "استراحة",
        btn_start: "ابدأ",
        btn_pause: "إيقاف",
        btn_reset: "إعادة",
        calendar_title: " خطتي الأسبوعية",
        streak_label: "السلسلة",
        days: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
    },
    zh: {
        mode_tdah: "多动模式",
        mode_sign: "手语",
        goal_title: "我的学习目标",
        goal_placeholder: "例如：阅读2章...",
        picto_title: "或从图标中选择：",
        mode_pomodoro: "番茄钟",
        mode_short_break: "休息",
        btn_start: "开始",
        btn_pause: "暂停",
        btn_reset: "重置",
        calendar_title: " 我的每周计划",
        streak_label: "连续记录",
        days: ["日", "一", "二", "三", "四", "五", "六"]
    },
    ja: {
        mode_tdah: "ADHDモード",
        mode_sign: "手話",
        goal_title: "学習目標",
        goal_placeholder: "例：2章を読む...",
        picto_title: "または絵で選ぶ：",
        mode_pomodoro: "ポモドーロ",
        mode_short_break: "休憩",
        btn_start: "開始",
        btn_pause: "一時停止",
        btn_reset: "リセット",
        calendar_title: " 週間計画",
        streak_label: "連続記録",
        days: ["日", "月", "火", "水", "木", "金", "土"]
    },
    ko: {
        mode_tdah: "ADHD 모드",
        mode_sign: "수어",
        goal_title: "내 학습 목표",
        goal_placeholder: "예: 2개 챕터 읽기...",
        picto_title: "또는 그림으로 선택:",
        mode_pomodoro: "포모도로",
        mode_short_break: "휴식",
        btn_start: "시작",
        btn_pause: "일시정지",
        btn_reset: "초기화",
        calendar_title: " 나의 주간 계획",
        streak_label: "연속",
        days: ["일", "월", "화", "수", "목", "금", "토"]
    },
    ru: {
        mode_tdah: "Режим ADHD",
        mode_sign: "Жестовый язык",
        goal_title: "Моя цель обучения",
        goal_placeholder: "Напр.: прочитать 2 главы...",
        picto_title: "Или выберите по пиктограммам:",
        mode_pomodoro: "Помодоро",
        mode_short_break: "Перерыв",
        btn_start: "Старт",
        btn_pause: "Пауза",
        btn_reset: "Сброс",
        calendar_title: " Мой еженедельный план",
        streak_label: "Серия",
        days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
    },
    nl: {
        mode_tdah: "ADHD-modus",
        mode_sign: "Gebarentaal",
        goal_title: "Mijn studie-doel",
        goal_placeholder: "Bijv.: 2 hoofdstukken lezen...",
        picto_title: "Of kies met pictogrammen:",
        mode_pomodoro: "Pomodoro",
        mode_short_break: "Pauze",
        btn_start: "Start",
        btn_pause: "Pauzeren",
        btn_reset: "Resetten",
        calendar_title: " Mijn weekplan",
        streak_label: "Reeks",
        days: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"]
    },
    sv: {
        mode_tdah: "ADHD-läge",
        mode_sign: "Teckenspråk",
        goal_title: "Mitt studie mål",
        goal_placeholder: "Ex: Läs 2 kapitel...",
        picto_title: "Eller välj med bilder:",
        mode_pomodoro: "Pomodoro",
        mode_short_break: "Paus",
        btn_start: "Starta",
        btn_pause: "Pausa",
        btn_reset: "Återställ",
        calendar_title: " Min veckoplan",
        streak_label: "Serie",
        days: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]
    },
    no: {
        mode_tdah: "ADHD-modus",
        mode_sign: "Teiknspråk",
        goal_title: "Mitt studie mål",
        goal_placeholder: "Eksempel: Les 2 kapitler...",
        picto_title: "Eller velg med piktogrammer:",
        mode_pomodoro: "Pomodoro",
        mode_short_break: "Pause",
        btn_start: "Start",
        btn_pause: "Pause",
        btn_reset: "Tilbakestill",
        calendar_title: " Min ukeplan",
        streak_label: "Serie",
        days: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"]
    },
    tr: {
        mode_tdah: "Dikkat Modu",
        mode_sign: "İşaret Dili",
        goal_title: "Çalışma hedefim",
        goal_placeholder: "Örn.: 2 bölüm oku...",
        picto_title: "Veya resimlerle seç:",
        mode_pomodoro: "Pomodoro",
        mode_short_break: "Kısa mola",
        btn_start: "Başlat",
        btn_pause: "Duraklat",
        btn_reset: "Sıfırla",
        calendar_title: " Haftalık planım",
        streak_label: "Seri",
        days: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"]
    },
    pl: {
        mode_tdah: "Tryb ADHD",
        mode_sign: "Język migowy",
        goal_title: "Mój cel nauki",
        goal_placeholder: "Np.: przeczytaj 2 rozdziały...",
        picto_title: "Lub wybierz za pomocą piktogramów:",
        mode_pomodoro: "Pomodoro",
        mode_short_break: "Przerwa",
        btn_start: "Start",
        btn_pause: "Pauza",
        btn_reset: "Reset",
        calendar_title: " Mój plan tygodnia",
        streak_label: "Seria",
        days: ["Ndz", "Pon", "Wto", "Śro", "Czw", "Pią", "Sob"]
    },
    el: {
        mode_tdah: "Λειτουργία ADHD",
        mode_sign: "Νυσματική γλώσσα",
        goal_title: "Ο στόχος μου",
        goal_placeholder: "Π.χ.: Διάβασε 2 κεφάλαια...",
        picto_title: "Ή επέλεξε με εικονίδια:",
        mode_pomodoro: "Pomodoro",
        mode_short_break: "Διάλειμμα",
        btn_start: "Έναρξη",
        btn_pause: "Παύση",
        btn_reset: "Επαναφορά",
        calendar_title: " Το εβδομαδιαίο σχέδιο μου",
        streak_label: "Σειρά",
        days: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"]
    },
    hi: {
        mode_tdah: "ADHD मोड",
        mode_sign: "सांकेतिक भाषा",
        goal_title: "मेरा अध्ययन लक्ष्य",
        goal_placeholder: "उदा: 2 अध्याय पढ़ें...",
        picto_title: "या चित्रों से चुनें:",
        mode_pomodoro: "पोमोडोरो",
        mode_short_break: "ब्रेक",
        btn_start: "शुरू",
        btn_pause: "रोकें",
        btn_reset: "रीसेट",
        calendar_title: " मेरा साप्ताहिक प्लान",
        streak_label: "श्रृंखला",
        days: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"]
    },
    he: {
        mode_tdah: "מצב ADHD",
        mode_sign: "שפת סימנים",
        goal_title: "המטרה שלי",
        goal_placeholder: "לדוגמה: לקרוא 2 פרקים...",
        picto_title: "או בחר באמצעות פיקטוגרמות:",
        mode_pomodoro: "פומודורו",
        mode_short_break: "הפסקה",
        btn_start: "התחל",
        btn_pause: "הפסק",
        btn_reset: "איפוס",
        calendar_title: " התוכנית השבועית שלי",
        streak_label: "רצף",
        days: ["א'", "ב'", "ג'", "ד'", "ה'", "ש'", "שבת"]
    },
    uk: {
        mode_tdah: "Режим ADHD",
        mode_sign: "Мова жестів",
        goal_title: "Моя мета навчання",
        goal_placeholder: "Напр.: прочитати 2 глави...",
        picto_title: "Або виберіть піктограми:",
        mode_pomodoro: "Помодоро",
        mode_short_break: "Перерва",
        btn_start: "Старт",
        btn_pause: "Пауза",
        btn_reset: "Скинути",
        calendar_title: " Мій тижневий план",
        streak_label: "Серія",
        days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
    },
    id: {
        mode_tdah: "Mode ADHD",
        mode_sign: "Bahasa isyarat",
        goal_title: "Tujuan belajarku",
        goal_placeholder: "Contoh: baca 2 bab...",
        picto_title: "Atau pilih dengan piktogram:",
        mode_pomodoro: "Pomodoro",
        mode_short_break: "Istirahat",
        btn_start: "Mulai",
        btn_pause: "Jeda",
        btn_reset: "Reset",
        calendar_title: " Rencana mingguan saya",
        streak_label: "Rangkaian",
        days: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"]
    },
    th: {
        mode_tdah: "โหมด ADHD",
        mode_sign: "ภาษามือ",
        goal_title: "เป้าหมายการเรียนของฉัน",
        goal_placeholder: "เช่น: อ่าน 2 บท...",
        picto_title: "หรือเลือกด้วยสัญลักษณ์:",
        mode_pomodoro: "โหมด pomodoro",
        mode_short_break: "พัก",
        btn_start: "เริ่ม",
        btn_pause: "หยุดชั่วคราว",
        btn_reset: "รีเซ็ต",
        calendar_title: " แผนการศึกษาในสัปดาห์",
        streak_label: "สตรีค",
        days: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"]
    }
};

let currentLang = 'es';

function updateLanguage(lang) {
    currentLang = lang;
    const dict = translations[lang] || translations.es;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) el.placeholder = dict[key];
    });
    renderCalendar();
}

document.getElementById('language-select').addEventListener('change', (e) => {
    updateLanguage(e.target.value);
});

// --- State Variables ---
let timerInterval;
let timeLeft = 25 * 60;
let isRunning = false;
let isTdahMode = false;
let currentMode = 'pomodoro'; // 'pomodoro' or 'break'

// --- Theme Customization ---
const rootStyles = document.documentElement;
const themeDefaults = {
    bg: '#0f172a',
    text: '#f8fafc',
    button: '#6366f1',
    fontSize: 16
};

const themeBgInput = document.getElementById('theme-bg-color');
const themeTextInput = document.getElementById('theme-text-color');
const themeButtonInput = document.getElementById('theme-button-color');
const themeFontSizeInput = document.getElementById('theme-font-size');
const themeResetButton = document.getElementById('theme-reset');

function applyTheme({ bg, text, button, fontSize }) {
    rootStyles.style.setProperty('--bg-base', bg);
    rootStyles.style.setProperty('--text-main', text);
    rootStyles.style.setProperty('--button-color', button);
    rootStyles.style.setProperty('--accent-primary', button);
    rootStyles.style.setProperty('--accent-secondary', button);
    rootStyles.style.setProperty('--font-size', `${fontSize}px`);
    document.body.style.backgroundColor = bg;
    document.body.style.color = text;

    document.querySelectorAll('.glass-btn').forEach((btn) => {
        btn.style.setProperty('background', button, 'important');
        btn.style.setProperty('border-color', button, 'important');
        btn.style.setProperty('color', text, 'important');
    });

    document.querySelectorAll('.glass-btn.active, .primary-btn').forEach((btn) => {
        btn.style.setProperty('background', button, 'important');
        btn.style.setProperty('border-color', button, 'important');
    });
}

function resetTheme() {
    applyTheme(themeDefaults);
    themeBgInput.value = themeDefaults.bg;
    themeTextInput.value = themeDefaults.text;
    themeButtonInput.value = themeDefaults.button;
    themeFontSizeInput.value = themeDefaults.fontSize;
}

function setupThemeControls() {
    themeBgInput.addEventListener('input', (e) => applyTheme({
        bg: e.target.value,
        text: themeTextInput.value,
        button: themeButtonInput.value,
        fontSize: Number(themeFontSizeInput.value)
    }));

    themeTextInput.addEventListener('input', (e) => applyTheme({
        bg: themeBgInput.value,
        text: e.target.value,
        button: themeButtonInput.value,
        fontSize: Number(themeFontSizeInput.value)
    }));

    themeButtonInput.addEventListener('input', (e) => applyTheme({
        bg: themeBgInput.value,
        text: themeTextInput.value,
        button: e.target.value,
        fontSize: Number(themeFontSizeInput.value)
    }));

    themeFontSizeInput.addEventListener('input', (e) => applyTheme({
        bg: themeBgInput.value,
        text: themeTextInput.value,
        button: themeButtonInput.value,
        fontSize: Number(e.target.value)
    }));

    themeResetButton.addEventListener('click', resetTheme);
}

// --- Elements ---
const timeDisplay = document.getElementById('time-left');
const timerDisplayContainer = document.querySelector('.timer-display');
const btnStart = document.getElementById('btn-start');
const btnPause = document.getElementById('btn-pause');
const btnReset = document.getElementById('btn-reset');
const modePomodoro = document.getElementById('mode-pomodoro');
const modeBreak = document.getElementById('mode-shortbreak');
const goalInput = document.getElementById('goal-input');

// --- Timer Logic ---
function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeDisplay.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function setTimeForMode() {
    if (currentMode === 'pomodoro') {
        timeLeft = isTdahMode ? 15 * 60 : 25 * 60;
    } else {
        timeLeft = 5 * 60;
    }
    updateDisplay();
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timerDisplayContainer.classList.add('running');
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            isRunning = false;
            timerDisplayContainer.classList.remove('running');
            celebrate();
            addTimeToCalendar();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    timerDisplayContainer.classList.remove('running');
}

function resetTimer() {
    pauseTimer();
    setTimeForMode();
}

btnStart.addEventListener('click', startTimer);
btnPause.addEventListener('click', pauseTimer);
btnReset.addEventListener('click', resetTimer);

modePomodoro.addEventListener('click', () => {
    currentMode = 'pomodoro';
    modePomodoro.classList.add('active');
    modeBreak.classList.remove('active');
    resetTimer();
});

modeBreak.addEventListener('click', () => {
    currentMode = 'break';
    modeBreak.classList.add('active');
    modePomodoro.classList.remove('active');
    resetTimer();
});

// --- Celebrations ---
function celebrate() {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    document.getElementById('applause-audio').play();
}

// --- Pictograms ---
window.setGoal = function(text, iconClass) {
    goalInput.value = `${text} `;
};

// --- Accessibility Features ---

// 1. TDAH Mode Toggle
document.getElementById('btn-tdah').addEventListener('click', () => {
    isTdahMode = !isTdahMode;
    document.body.classList.toggle('tdah-mode');
    const btn = document.getElementById('btn-tdah');
    isTdahMode ? btn.classList.add('active') : btn.classList.remove('active');
    if (currentMode === 'pomodoro') resetTimer();
});

// 2. Sign Language (Dactilológico) Mode Toggle
document.getElementById('btn-sign').addEventListener('click', () => {
    document.body.classList.toggle('sign-mode');
    const btn = document.getElementById('btn-sign');
    document.body.classList.contains('sign-mode') ? btn.classList.add('active') : btn.classList.remove('active');
});

// 3. Web Speech API (Voice Recognition)
const btnMic = document.getElementById('btn-mic');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    
    recognition.onstart = () => {
        btnMic.classList.add('active');
        goalInput.placeholder = "Escuchando...";
    };
    
    recognition.onresult = (event) => {
        goalInput.value = event.results[0][0].transcript;
    };
    
    recognition.onend = () => {
        btnMic.classList.remove('active');
        updateLanguage(currentLang);
    };
    
    btnMic.addEventListener('click', () => {
        recognition.lang = currentLang === 'en' ? 'en-US' : (currentLang === 'fr' ? 'fr-FR' : 'es-ES');
        recognition.start();
    });
} else {
    btnMic.style.display = 'none';
}

// 4. Text-To-Speech (Lectura en voz alta)
document.getElementById('btn-voice-read').addEventListener('click', () => {
    const synth = window.speechSynthesis;
    let textToRead = goalInput.value ? `Objetivo: ${goalInput.value}. ` : "";
    textToRead += `Tiempo restante: ${timeDisplay.innerText}.`;
    
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = currentLang === 'en' ? 'en-US' : (currentLang === 'fr' ? 'fr-FR' : 'es-ES');
    synth.speak(utterance);
});

// --- Calendar Logic ---
let weeklyData = JSON.parse(localStorage.getItem('studyWeeklyData')) || [0,0,0,0,0,0,0];

function formatLocalDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getStudyDates() {
    try {
        const stored = JSON.parse(localStorage.getItem('studyStreakHistory')) || [];
        return [...new Set(stored)];
    } catch (error) {
        return [];
    }
}

function saveStudyDates(dates) {
    localStorage.setItem('studyStreakHistory', JSON.stringify([...new Set(dates)]));
}

function getCurrentStreak() {
    const dates = getStudyDates().sort();
    if (!dates.length) return 0;

    let streak = 0;
    const today = new Date();

    for (let offset = 0; offset < 365; offset++) {
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() - offset);
        const key = formatLocalDateKey(currentDate);

        if (dates.includes(key)) {
            streak++;
        } else if (offset === 0) {
            return 0;
        } else {
            break;
        }
    }

    return streak;
}

function updateStreak() {
    const streakCount = document.getElementById('streak-count');
    if (!streakCount) return;

    const currentStreak = getCurrentStreak();
    streakCount.textContent = `${currentStreak} día${currentStreak === 1 ? '' : 's'}`;
}

function addStudyDayToStreak() {
    const dates = getStudyDates();
    const todayKey = formatLocalDateKey(new Date());

    if (!dates.includes(todayKey)) {
        dates.push(todayKey);
        saveStudyDates(dates);
    }

    updateStreak();
}

function addTimeToCalendar() {
    if (currentMode === 'pomodoro') {
        const today = new Date().getDay();
        const studiedMinutes = isTdahMode ? 15 : 25;
        weeklyData[today] += studiedMinutes;
        localStorage.setItem('studyWeeklyData', JSON.stringify(weeklyData));
        addStudyDayToStreak();
        renderCalendar();
    }
}

function renderCalendar() {
    const grid = document.getElementById('week-grid');
    grid.innerHTML = '';
    const today = new Date().getDay();
    const daysDict = translations[currentLang].days;

    for (let i = 0; i < 7; i++) {
        const minutes = weeklyData[i];
        const hours = (minutes / 60).toFixed(1);
        const card = document.createElement('div');
        card.className = `day-card ${i === today ? 'today' : ''}`;
        card.innerHTML = `
            <div class="day-name">${daysDict[i]}</div>
            <div class="day-time">${minutes > 0 ? hours + 'h' : '-'}</div>
        `;
        grid.appendChild(card);
    }
}

setupThemeControls();
resetTheme();
updateLanguage('es');
updateStreak();
setTimeForMode();