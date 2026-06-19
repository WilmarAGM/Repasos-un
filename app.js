const ranks = ["Novato", "Estudiante", "Asistente", "Matemático", "Maestro del Límite", "Leyenda de la Derivada", "Dios del Cálculo"];
const XP_PER_LEVEL = 100;
let xp = 0;
let level = 1;

let currentSubject = null;
let currentMission = null;
let currentExerciseIndex = 0;

const appContainer = document.getElementById('app-container');
const xpBar = document.getElementById('xp-bar');
const xpText = document.getElementById('xp-text');
const levelBadge = document.getElementById('level-badge');
const rankText = document.getElementById('rank-text');

function init() {
    // Load from local storage
    if (localStorage.getItem('cq_xp')) {
        xp = parseInt(localStorage.getItem('cq_xp'));
    }
    updateStats();
    renderSubjects();
}

function updateStats() {
    level = Math.floor(xp / XP_PER_LEVEL) + 1;
    let currentLevelXp = xp % XP_PER_LEVEL;
    
    let rankIndex = Math.min(level - 1, ranks.length - 1);
    
    xpBar.style.width = `${(currentLevelXp / XP_PER_LEVEL) * 100}%`;
    xpText.innerText = `${currentLevelXp} / ${XP_PER_LEVEL} XP`;
    levelBadge.innerText = `Lvl ${level}`;
    rankText.innerText = ranks[rankIndex];
    
    localStorage.setItem('cq_xp', xp);
}

function renderSubjects() {
    let html = `
        <div style="text-align:center; margin-bottom: 3rem; animation: fadeIn 1s ease;">
            <h1 style="font-size:3.5rem; color:var(--text-highlight); text-shadow: 0 0 20px rgba(102, 252, 241, 0.4); margin-bottom:1rem;">Bienvenido a Quest Academy</h1>
            <p style="font-size:1.3rem; max-width:800px; margin:auto; color:#fff; line-height:1.6;">Una plataforma interactiva diseñada para elevar tu nivel académico. Selecciona una rama del conocimiento, enfréntate a desafíos reales y domina las matemáticas a través de la práctica y retroalimentación instantánea.</p>
        </div>
        <div class="subjects-grid">
    `;
    SUBJECTS.forEach((subject, index) => {
        html += `
            <div class="subject-card" onclick="selectSubject(${index})">
                <div class="subject-icon">${subject.icon}</div>
                <div class="subject-title">${subject.title}</div>
                <div class="subject-desc">${subject.description}</div>
                <div class="subject-meta">${subject.missions.length} Misiones Disponibles</div>
            </div>
        `;
    });
    html += `</div>`;
    appContainer.innerHTML = html;
}

window.selectSubject = function(index) {
    currentSubject = SUBJECTS[index];
    renderMissions();
}

function renderMissions() {
    let html = `
        <div class="exercise-header">
            <h2 style="font-size:2.5rem; color: #fff;">${currentSubject.title} - Misiones</h2>
            <button class="btn" onclick="renderSubjects()">Volver al Inicio</button>
        </div>
        <div class="missions-grid">
    `;
    currentSubject.missions.forEach((mission, index) => {
        html += `
            <div class="mission-card" onclick="startMission(${index})">
                <div class="mission-title">${mission.title}</div>
                <div style="font-size: 1.1rem; color: var(--text-highlight);">${mission.exercises.length} Ejercicios</div>
            </div>
        `;
    });
    html += `</div>`;
    appContainer.innerHTML = html;
}

window.startMission = function(index) {
    currentMission = currentSubject.missions[index];
    currentExerciseIndex = 0;
    renderExercise();
}

window.renderSubjects = renderSubjects;
window.renderMissions = renderMissions;

function renderExercise() {
    if (currentExerciseIndex >= currentMission.exercises.length) {
        // Mission complete
        appContainer.innerHTML = `
            <div class="glass-card" style="text-align:center;">
                <h2 style="font-size:3rem; margin-bottom:1rem; color:var(--success);">Misión Completada</h2>
                <p style="font-size:1.2rem; margin-bottom:2rem;">¡Excelente trabajo completando ${currentMission.title}!</p>
                <button class="btn primary" onclick="renderMissions()">Volver al Mapa</button>
            </div>
        `;
        return;
    }

    const ex = currentMission.exercises[currentExerciseIndex];
    
    function parseLatexFormatting(text) {
        let html = text;
        // Quitar el \item inicial del ejercicio
        html = html.replace(/^\\item\s*/, '');
        
        // Listas
        html = html.replace(/\\begin\{enumerate\}[^\n]*/g, '<ol type="a" style="margin-left: 2rem; margin-top: 1rem;">');
        html = html.replace(/\\end\{enumerate\}/g, '</ol>');
        html = html.replace(/\\begin\{itemize\}[^\n]*/g, '<ul style="margin-left: 2rem; margin-top: 1rem;">');
        html = html.replace(/\\end\{itemize\}/g, '</ul>');
        html = html.replace(/\\item/g, '<li style="margin-bottom: 0.5rem; margin-top: 0.5rem;">');
        
        // Tablas (Convirtiendo tabular de texto a array matemático para MathJax)
        html = html.replace(/\\begin\{center\}/g, '<div style="text-align: center; margin: 1.5rem 0; overflow-x: auto;">');
        html = html.replace(/\\end\{center\}/g, '</div>');
        html = html.replace(/\\begin\{tabular\}\{([^}]+)\}/g, '$$$$ \\begin{array}{$1}');
        html = html.replace(/\\end\{tabular\}/g, '\\end{array} $$$$');

        // Estilos
        html = html.replace(/\\textbf\{([^}]+)\}/g, '<strong>$1</strong>');
        html = html.replace(/\\textit\{([^}]+)\}/g, '<em>$1</em>');
        
        // Reemplazar saltos de línea de texto por br (cuidando de no romper los align que usan \\)
        html = html.replace(/\n\n/g, '<br><br>');
        
        return html;
    }

    let qText = parseLatexFormatting(ex.question);
    let sText = parseLatexFormatting(ex.solution);

    let html = `
        <div class="glass-card" style="width:100%;">
            <div class="exercise-header">
                <h2>${currentMission.title} - Ejercicio ${currentExerciseIndex + 1} de ${currentMission.exercises.length}</h2>
                <div style="display:flex; gap: 10px;">
                    <button class="btn" onclick="renderMissions()">Volver a Misiones</button>
                    <button class="btn" onclick="renderSubjects()">Inicio</button>
                </div>
            </div>
            <div class="question-box" id="q-box">
                ${qText}
            </div>
    `;
    
    // Add multiple choice graphs if available
    if (ex.graph_options && ex.graph_options !== "") {
        html += `<div style="margin: 2rem 0;">${ex.graph_options}</div>`;
    }

    if (ex.answers !== null) {
        // Add dynamic inputs for parameters
        html += `<div class="inputs-container" style="display:flex; flex-wrap:wrap; gap:1.5rem; justify-content:center; margin-top:2rem;">`;
        for (let key in ex.answers) {
            if (key === 'graph') continue;
            html += `
                <div class="input-group" style="display:flex; align-items:center; gap:0.5rem;">
                    <label style="font-size:1.5rem; color:var(--text-highlight); font-weight:bold;">${key} =</label>
                    <input type="text" id="input-${key}" class="custom-input" placeholder="Ej: -3/5" autocomplete="off">
                    <span id="feedback-${key}" style="font-size:1.5rem;"></span>
                </div>
            `;
        }
        html += `</div>`;

        html += `
                <div style="text-align:center; margin: 3rem 0;" id="reveal-btn-container">
                    <button class="btn primary" id="eval-btn" onclick="evaluateInputs()">Evaluar Respuestas</button>
                </div>
        `;
    } else {
        // Procedure question (no answers)
        html += `
                <div style="text-align:center; margin: 3rem 0;" id="reveal-btn-container">
                    <p style="font-size:1.1rem; color:#fff; margin-bottom:1rem;"><em>Resuelve el ejercicio en tu cuaderno y presiona el botón para comparar.</em></p>
                    <button class="btn primary" id="eval-btn" onclick="revealProcedure()">Enseñar Solución</button>
                </div>
        `;
    }

    html += `
            <div class="solution-box" id="s-box" style="display:none;">
                <h3 style="color:var(--text-highlight); margin-bottom:1.5rem; border-bottom: 1px solid var(--card-border); padding-bottom: 0.5rem;">Solución Detallada:</h3>
                ${sText}
                <div style="text-align:center; margin-top: 3rem;">
                    <button class="btn primary" onclick="nextExercise()">Siguiente Ejercicio</button>
                </div>
            </div>
        </div>
    `;
    
    appContainer.innerHTML = html;

    // MathJax Typeset
    if (window.MathJax) {
        MathJax.typesetPromise([appContainer]).catch(function (err) {
            console.error('MathJax error: ', err.message);
        });
    }
}

let selectedGraph = null;
window.selectGraph = function(letter) {
    selectedGraph = letter;
    document.querySelectorAll('.graph-choice').forEach(el => {
        el.style.borderColor = 'transparent';
        el.style.background = 'transparent';
    });
    const choice = document.querySelector(`.graph-choice[data-letter="${letter}"]`);
    if(choice) {
        choice.style.borderColor = 'var(--text-highlight)';
        choice.style.background = 'rgba(102, 252, 241, 0.1)';
    }
}

window.evaluateInputs = function() {
    const ex = currentMission.exercises[currentExerciseIndex];
    if (ex.answers === null) return;
    
    let allCorrect = true;
    let xpEarned = 0;
    
    for (let key in ex.answers) {
        if (key === 'graph') {
            const feedbackEl = document.querySelector('.graph-options');
            if (selectedGraph === ex.answers[key]) {
                xpEarned += 20;
                feedbackEl.innerHTML += '<div style="color:var(--success); font-size:1.5rem; margin-top:1rem;">✓ Gráfica correcta (+20 XP)</div>';
            } else {
                feedbackEl.innerHTML += '<div style="color:var(--fail); font-size:1.5rem; margin-top:1rem;">✗ Gráfica incorrecta</div>';
                allCorrect = false;
            }
            continue;
        }
        
        const inputEl = document.getElementById(`input-${key}`);
        const feedbackEl = document.getElementById(`feedback-${key}`);
        const userVal = inputEl.value.trim().toLowerCase();
        const correctVal = String(ex.answers[key]).trim().toLowerCase();
        
        // Handle variations (e.g. -3/5 vs -0.6 can be added later, for now exact match)
        if (userVal === correctVal || userVal === correctVal.replace(' ', '')) {
            feedbackEl.innerHTML = '✅';
            inputEl.style.borderColor = 'var(--success)';
            xpEarned += 20;
        } else {
            feedbackEl.innerHTML = '❌';
            inputEl.style.borderColor = 'var(--fail)';
            allCorrect = false;
        }
        inputEl.disabled = true;
    }
    
    xp += xpEarned;
    updateStats();
    
    document.getElementById('reveal-btn-container').style.display = 'none';
    document.getElementById('s-box').style.display = 'block';
}

window.revealProcedure = function() {
    // Grant standard XP for self-evaluation procedure questions
    xp += 10;
    updateStats();
    document.getElementById('reveal-btn-container').style.display = 'none';
    document.getElementById('s-box').style.display = 'block';
}

window.nextExercise = function() {
    selectedGraph = null;
    currentExerciseIndex++;
    renderExercise();
}

// Start
document.addEventListener('DOMContentLoaded', () => {
    init();
});
