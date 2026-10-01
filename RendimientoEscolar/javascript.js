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
        days: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
    }
};

let currentLang = 'es';

function updateLanguage(lang) {
    currentLang = lang;
    const dict = translations[lang];
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

function addTimeToCalendar() {
    if (currentMode === 'pomodoro') {
        const today = new Date().getDay();
        const studiedMinutes = isTdahMode ? 15 : 25;
        weeklyData[today] += studiedMinutes;
        localStorage.setItem('studyWeeklyData', JSON.stringify(weeklyData));
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
setTimeForMode();