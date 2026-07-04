const ranks = ["Novato", "Estudiante", "Asistente", "Matemático", "Maestro del Límite", "Leyenda de la Derivada", "Dios del Cálculo"];
const XP_PER_LEVEL = 100;
const XP_PER_EXERCISE_WEIGHTED = 40; // XP máximo para ejercicios con rúbrica ponderada (p.ej. Métodos Numéricos)
let xp = 0;
let level = 1;

let currentSubject = null;
let currentMission = null;
let currentExerciseIndex = 0;

// Estado de autoevaluación ponderada (ejercicios con "rubric"/"answers pesados")
let autoGradedWeight = 0;
let totalWeight = 0;
let weightedSaved = false;

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
        <div class="home-container">
            <div class="glass-hero">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Escudo_de_la_Universidad_Nacional_de_Colombia_%282016%29.svg" alt="UNAL Logo" class="unal-logo">
                <h1 class="home-title">Misiones de Repaso</h1>
                <p class="home-subtitle">Universidad Nacional de Colombia - Departamento de Matemáticas</p>
                <p class="home-desc">Plataforma interactiva diseñada para elevar tu nivel académico. Selecciona una rama del conocimiento, enfréntate a desafíos reales y domina las matemáticas.</p>
            </div>

            <div class="home-subjects-grid">
    `;
    SUBJECTS.forEach((subject, index) => {
        html += `
                <div class="home-subject-card" onclick="selectSubject(${index})">
                    <div class="subject-icon-glow"></div>
                    <div class="subject-icon" style="position: relative; z-index: 2;">${subject.icon}</div>
                    <h2 class="subject-title" style="position: relative; z-index: 2;">${subject.title}</h2>
                    <p class="subject-desc" style="position: relative; z-index: 2;">${subject.description}</p>
                    <div class="subject-meta" style="position: relative; z-index: 2;">${subject.missions.length} Misiones Disponibles</div>
                </div>
        `;
    });
    html += `
            </div>
        </div>
    `;
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
                ${mission.subtitle ? `<div class="mission-sub">${mission.subtitle}</div>` : ''}
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

function parseLatexFormatting(text) {
    let html = text;
    // Quitar el \item inicial del ejercicio
    html = html.replace(/^\\item\s*/, '');

    // Listas
    html = html.replace(/\\begin\{enumerate\}[^\n]*/g, '<ol type="a" style="margin-left: 2rem; margin-top: 1rem;">');
    html = html.replace(/\\end\{enumerate\}/g, '</ol>');
    html = html.replace(/\\begin\{itemize\}[^\n]*/g, '<ul style="margin-left: 2rem; margin-top: 1rem;">');
    html = html.replace(/\\end\{itemize\}/g, '</ul>');
    html = html.replace(/\\item(?:\[[^\]]*\])?/g, '<li style="margin-bottom: 0.5rem; margin-top: 0.5rem;">');

    // Tablas (Convirtiendo tabular de texto a array matemático para MathJax y quitando $ internos)
    html = html.replace(/\\begin\{center\}/g, '<div style="text-align: center; margin: 1.5rem 0; overflow-x: auto;">');
    html = html.replace(/\\end\{center\}/g, '</div>');
    html = html.replace(/\\begin\{tabular\}\{([^}]+)\}([\s\S]*?)\\end\{tabular\}/g, function(match, format, content) {
        let cleanFormat = format.replace(/\|/g, '');
        let cleanContent = content.replace(/\\hline/g, '').replace(/\$/g, '');
        return '$$$$ \\begin{array}{' + cleanFormat + '}' + cleanContent + '\\end{array} $$$$';
    });

    // Estilos
    html = html.replace(/\\textbf\{([^}]+)\}/g, '<strong>$1</strong>');
    html = html.replace(/\\textit\{([^}]+)\}/g, '<em>$1</em>');
    html = html.replace(/\\emph\{([^}]+)\}/g, '<em>$1</em>');

    // Reemplazar saltos de línea de texto por br (cuidando de no romper los align que usan \\)
    html = html.replace(/\n\n/g, '<br><br>');

    return html;
}

function weightTag(w) {
    return `<span class="weight-tag">${w}%</span>`;
}

// Un ejercicio usa el motor "ponderado" (respuestas con peso + rúbrica de autoevaluación)
// si trae un arreglo `rubric`, o si sus `answers` están en formato {value, weight}.
function isWeightedExercise(ex) {
    if (ex.rubric && ex.rubric.length > 0) return true;
    if (ex.answers) {
        for (let key in ex.answers) {
            const a = ex.answers[key];
            if (a && typeof a === 'object' && 'value' in a) return true;
        }
    }
    return false;
}

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

    if (isWeightedExercise(ex)) {
        renderExerciseWeighted(ex);
    } else {
        renderExerciseLegacy(ex);
    }
}

/* ==================================================================
   MOTOR LEGACY: usado por Cálculo y Álgebra Lineal (answers planos,
   graph_options, revealProcedure). Se deja intacto tal cual estaba.
   ================================================================== */
function renderExerciseLegacy(ex) {
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

/* ==================================================================
   MOTOR PONDERADO: usado por Métodos Numéricos (y cualquier misión
   futura que traiga `rubric` y/o `answers` con {value, weight}).
   Combina respuestas numéricas auto-calificadas con una rúbrica de
   autoevaluación del procedimiento, replicando el peso porcentual
   real del examen.
   ================================================================== */
function renderExerciseWeighted(ex) {
    weightedSaved = false;
    autoGradedWeight = 0;

    let qText = parseLatexFormatting(ex.question);
    let sText = parseLatexFormatting(ex.solution);

    const hasAnswers = ex.answers && Object.keys(ex.answers).length > 0;
    const hasRubric = ex.rubric && ex.rubric.length > 0;

    totalWeight = 0;
    if (hasAnswers) for (let k in ex.answers) totalWeight += ex.answers[k].weight;
    if (hasRubric) ex.rubric.forEach(r => totalWeight += r.weight);

    let html = `
        <div class="glass-card" style="width:100%;">
            <div class="problem-tag">${currentMission.title} — Problema ${currentExerciseIndex + 1} de ${currentMission.exercises.length}${ex.points ? ' · ' + ex.points : ''}</div>
            <div class="exercise-header" style="max-width:none;">
                <h2 style="font-size:1.4rem;">${ex.title || ''}</h2>
                <div style="display:flex; gap: 10px;">
                    <button class="btn" onclick="renderMissions()">Volver a Misiones</button>
                    <button class="btn" onclick="renderSubjects()">Inicio</button>
                </div>
            </div>
            <div class="question-box" id="q-box">
                ${qText}
            </div>
    `;

    if (hasAnswers) {
        html += `<div class="answers-panel"><div class="answers-panel-title">Respuestas numéricas rápidas</div>`;
        html += `<div class="inputs-container">`;
        for (let key in ex.answers) {
            const a = ex.answers[key];
            html += `
                <div class="input-group">
                    <label style="font-size:1.3rem; color:var(--text-highlight); font-weight:bold;">${key} =</label>
                    <input type="text" id="w-input-${key}" class="custom-input" placeholder="Ej: -3/5" autocomplete="off">
                    <span id="w-feedback-${key}" style="font-size:1.3rem;"></span>
                    ${weightTag(a.weight)}
                </div>
            `;
        }
        html += `</div></div>`;
    }

    html += `
            <div style="text-align:center; margin: 2.5rem 0;" id="w-reveal-btn-container">
                <p style="font-size:1rem; color:#fff; margin-bottom:1rem;"><em>${hasAnswers ? 'Completa tus respuestas y luego revisa la solución detallada para autoevaluar tu procedimiento.' : 'Resuelve el ejercicio completo en tu cuaderno y luego compara con la solución detallada.'}</em></p>
                <button class="btn primary" id="w-eval-btn" onclick="revealWeightedSolution()">${hasAnswers ? 'Evaluar y ver solución' : 'Ver solución y autoevaluar'}</button>
            </div>
    `;

    html += `
            <div class="solution-box" id="w-s-box">
                <h3 style="color:var(--text-highlight); margin-bottom:1.5rem; border-bottom: 1px solid var(--card-border); padding-bottom: 0.5rem;">Solución Detallada</h3>
                ${sText}
    `;

    if (hasRubric) {
        html += `
                <div class="rubric-panel" id="rubric-panel">
                    <div class="rubric-title">Autoevaluación del procedimiento</div>
                    <div class="rubric-hint">Marca honestamente cada criterio SOLO si tu procedimiento (en papel) lo cumplió antes de ver la solución. Los pesos coinciden con el porcentaje real del examen.</div>
        `;
        ex.rubric.forEach((r, i) => {
            html += `
                    <label class="rubric-item">
                        <input type="checkbox" id="rubric-${i}" onchange="recomputeWeightedScore()">
                        <span class="rubric-item-text">${r.text}</span>
                        ${weightTag(r.weight)}
                    </label>
            `;
        });
        html += `</div>`;
    }

    html += `
                <div class="score-panel" id="score-panel" style="display:none;">
                    <div class="score-label">Tu autoevaluación</div>
                    <div class="score-value" id="score-value">0%</div>
                    <div class="score-bar-bg"><div class="score-bar-fill" id="score-bar-fill" style="width:0%; background:var(--fail);"></div></div>
                    <div class="score-feedback" id="score-feedback"></div>
                    <div style="margin-top:1.5rem; display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
                        <button class="btn primary" id="w-save-btn" onclick="saveWeightedScore()">Guardar autoevaluación (+XP)</button>
                        <button class="btn" id="w-next-btn" onclick="nextExercise()" style="display:none;">Siguiente Ejercicio</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    appContainer.innerHTML = html;

    if (window.MathJax) {
        MathJax.typesetPromise([appContainer]).catch(function (err) {
            console.error('MathJax error: ', err.message);
        });
    }
}

window.revealWeightedSolution = function() {
    const ex = currentMission.exercises[currentExerciseIndex];
    autoGradedWeight = 0;

    if (ex.answers) {
        for (let key in ex.answers) {
            const a = ex.answers[key];
            const inputEl = document.getElementById(`w-input-${key}`);
            const feedbackEl = document.getElementById(`w-feedback-${key}`);
            const userVal = inputEl.value.trim().toLowerCase().replace(/\s+/g, '');
            const correctVal = String(a.value).trim().toLowerCase().replace(/\s+/g, '');

            if (userVal !== '' && (userVal === correctVal || valuesMatchNumerically(userVal, correctVal))) {
                feedbackEl.innerHTML = '✅';
                inputEl.style.borderColor = 'var(--success)';
                autoGradedWeight += a.weight;
            } else {
                feedbackEl.innerHTML = '❌';
                inputEl.style.borderColor = 'var(--fail)';
            }
            inputEl.disabled = true;
        }
    }

    document.getElementById('w-reveal-btn-container').style.display = 'none';
    document.getElementById('w-s-box').style.display = 'block';
    document.getElementById('score-panel').style.display = 'block';
    recomputeWeightedScore();

    if (window.MathJax) {
        MathJax.typesetPromise([document.getElementById('w-s-box')]).catch(function (err) {
            console.error('MathJax error: ', err.message);
        });
    }
}

// Intenta comparar fracciones/decimales simples ("2/3" vs "0.6667", etc.)
function valuesMatchNumerically(a, b) {
    function toNumber(s) {
        s = s.replace(',', '.');
        if (s.includes('/')) {
            const parts = s.split('/');
            if (parts.length === 2) {
                const num = parseFloat(parts[0]);
                const den = parseFloat(parts[1]);
                if (!isNaN(num) && !isNaN(den) && den !== 0) return num / den;
            }
            return NaN;
        }
        const n = parseFloat(s);
        return n;
    }
    const na = toNumber(a);
    const nb = toNumber(b);
    if (isNaN(na) || isNaN(nb)) return false;
    return Math.abs(na - nb) < 0.01 * Math.max(1, Math.abs(nb));
}

window.recomputeWeightedScore = function() {
    if (weightedSaved) return;
    const ex = currentMission.exercises[currentExerciseIndex];
    let rubricWeight = 0;
    if (ex.rubric) {
        ex.rubric.forEach((r, i) => {
            const cb = document.getElementById(`rubric-${i}`);
            if (cb && cb.checked) rubricWeight += r.weight;
        });
    }
    const earned = autoGradedWeight + rubricWeight;
    const pct = totalWeight > 0 ? Math.round((earned / totalWeight) * 100) : 0;

    const scoreValue = document.getElementById('score-value');
    const scoreBar = document.getElementById('score-bar-fill');
    const scoreFeedback = document.getElementById('score-feedback');

    let color, msg;
    if (pct >= 80) {
        color = 'var(--success)';
        msg = '¡Muy sólido! Dominas este procedimiento. Repásalo rápido antes del parcial y sigue.';
    } else if (pct >= 60) {
        color = 'var(--warn, #f1c40f)';
        msg = 'Vas bien, pero revisa con cuidado los pasos que no marcaste: probablemente ahí está tu error más frecuente.';
    } else if (pct >= 30) {
        color = 'var(--fail)';
        msg = 'Hay huecos importantes en el procedimiento. Vuelve a leer la solución paso a paso y repite el ejercicio sin mirar.';
    } else {
        color = 'var(--fail)';
        msg = 'Este tema necesita repaso a fondo. No pases al siguiente ejercicio del mismo tipo sin volver a estudiar la teoría.';
    }

    scoreValue.innerText = `${pct}%`;
    scoreValue.style.color = color;
    scoreBar.style.width = `${pct}%`;
    scoreBar.style.background = color;
    scoreFeedback.innerHTML = msg;
}

window.saveWeightedScore = function() {
    if (weightedSaved) return;
    weightedSaved = true;
    const ex = currentMission.exercises[currentExerciseIndex];
    let rubricWeight = 0;
    if (ex.rubric) {
        ex.rubric.forEach((r, i) => {
            const cb = document.getElementById(`rubric-${i}`);
            if (cb) cb.disabled = true;
            if (cb && cb.checked) rubricWeight += r.weight;
        });
    }
    const earned = autoGradedWeight + rubricWeight;
    const pct = totalWeight > 0 ? Math.round((earned / totalWeight) * 100) : 0;

    const rubricPanel = document.getElementById('rubric-panel');
    if (rubricPanel) rubricPanel.classList.add('disabled-checklist');

    xp += Math.round((pct / 100) * XP_PER_EXERCISE_WEIGHTED);
    updateStats();

    document.getElementById('w-save-btn').style.display = 'none';
    document.getElementById('w-next-btn').style.display = 'inline-block';
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
