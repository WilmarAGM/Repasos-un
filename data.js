const CALCULUS_DATA = [
  {
    "mission_id": "taller",
    "title": "Taller de Repaso 2",
    "exercises": [
      {
        "id": 1,
        "question": "Calcule los siguientes límites de funciones reales.\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Encuentre el valor de $A$:\n    \\[ A = \\lim_{x \\to -\\infty} \\frac{\\sqrt{9x^2 + 4}}{5x - 2} \\]\n    \\item Se sabe que $\\lim_{x \\to 0} \\frac{\\sin(7x)}{x \\cdot f(x)} = 21$. Encuentre el valor de $B = \\lim_{x \\to 0} f(x)$.\n    \\item Usando el Teorema del Emparedado, halle $C$:\n    \\[ C = \\lim_{x \\to 0} \\left| \\frac{x}{3} \\right| \\sin\\left(\\frac{50}{x}\\right) \\]\n    \\item Se recuerda que la función suelo $\\lfloor x \\rfloor$ denota el máximo entero menor o igual a $x$. Calcule $D$:\n    \\[ D = \\lim_{x \\to 20^+} \\left( 4 \\cdot \\left\\lfloor \\frac{x}{5} \\right\\rfloor - 7 \\right) \\]\n\\end{enumerate}",
        "solution": "Soluciones a los límites:\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Para $x \\to -\\infty$, sabemos que $x = -\\sqrt{x^2}$. Dividimos numerador y denominador entre $x$:\n    \\begin{align*}\n    A &= \\lim_{x \\to -\\infty} \\frac{\\frac{\\sqrt{9x^2 + 4}}{-\\sqrt{x^2}}}{\\frac{5x - 2}{x}} = \\lim_{x \\to -\\infty} \\frac{-\\sqrt{9 + \\frac{4}{x^2}}}{5 - \\frac{2}{x}} \\\\\n    &= \\frac{-\\sqrt{9}}{5} = -\\frac{3}{5}.\n    \\end{align*}\n    \n    \\item Manipulamos el límite para usar $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$:\n    \\begin{align*}\n    21 &= \\lim_{x \\to 0} \\left( \\frac{\\sin(7x)}{7x} \\cdot \\frac{7}{f(x)} \\right) = 1 \\cdot \\frac{7}{B}\n    \\end{align*}\n    Despejando, $B = \\frac{7}{21} = \\frac{1}{3}$.\n    \n    \\item Acotamos la función trigonométrica: $-1 \\leq \\sin(50/x) \\leq 1$. Multiplicamos por el valor absoluto:\n    \\[ -\\left| \\frac{x}{3} \\right| \\leq \\left| \\frac{x}{3} \\right| \\sin\\left(\\frac{50}{x}\\right) \\leq \\left| \\frac{x}{3} \\right| \\]\n    Como $\\lim_{x \\to 0} \\left| x/3 \\right| = 0$, por el Teorema del Emparedado, $C = 0$.\n    \n    \\item Cuando $x \\to 20^+$, $\\frac{x}{5}$ se acerca a $4$ por la derecha (ej. $4.01$), luego $\\lfloor x/5 \\rfloor = 4$.\n    \\[ D = 4(4) - 7 = 16 - 7 = 9. \\]\n\\end{enumerate}",
        "answers": {
          "A": "-3/5",
          "B": "1/3",
          "C": "0",
          "D": "9"
        },
        "graph_options": ""
      },
      {
        "id": 2,
        "question": "Se recuerda que la función indicatriz $\\mathbf{I}_J(x)$ vale 1 si $x \\in J$ y 0 si $x \\notin J$.\nConsidere la función a trozos:\n\\[ h(x) = \\begin{cases} \nx^2 + A x & \\text{si } x < -2 \\\\\nB x + 6 & \\text{si } -2 \\leq x \\leq 3 \\\\\nx^2 - x & \\text{si } x > 3 \n\\end{cases} \\]\nConsidere también $g(x) = 15 \\cdot \\mathbf{I}_{(-\\infty, 3]}(x) + 25 \\cdot \\mathbf{I}_{[8, \\infty)}(x)$.\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Encuentre el valor de $A$ para que la función $h(x)$ sea continua en $x=-2$.\n    \\item Encuentre el valor de $B$ para que la función $h(x)$ sea continua en $x=3$.\n    \\item La función $g(x)$ es discontinua en $x = 3$. Calcule $C = \\lim_{x \\to 3^-} g(x)$.\n    \\item La función compuesta $f(x) = 4x(x - D)$ se compone con $\\phi(x) = 10 \\cdot \\mathbf{I}_{(2, 10]}(x)$. Encuentre un valor entero $D$ para que la función $f(\\phi(x))$ sea continua en todo $\\mathbb{R}$.\n\\end{enumerate}",
        "solution": "Análisis de continuidad e indicatrices:\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Evaluamos los límites laterales en $x = -2$:\n    \\begin{align*}\n    \\lim_{x \\to -2^-} h(x) &= (-2)^2 + A(-2) = 4 - 2A \\\\\n    \\lim_{x \\to -2^+} h(x) &= B(-2) + 6\n    \\end{align*}\n    Dado que necesitamos el valor de $B$ del inciso siguiente, lo calculamos en conjunto. En el inciso (b) hallaremos $B=0$. Si $B=0$:\n    $4 - 2A = 6 \\implies -2A = 2 \\implies A = -1$.\n    \n    \\item Evaluamos los límites laterales en $x = 3$:\n    \\begin{align*}\n    \\lim_{x \\to 3^-} h(x) &= B(3) + 6 \\\\\n    \\lim_{x \\to 3^+} h(x) &= (3)^2 - 3 = 6\n    \\end{align*}\n    Igualando: $3B + 6 = 6 \\implies 3B = 0 \\implies B = 0$.\n    \n    \\item Para $x \\to 3^-$, $x \\in (-\\infty, 3]$, entonces $\\mathbf{I}_{(-\\infty, 3]}(x) = 1$ y las demás son 0.\n    \\[ C = 15(1) + 25(0) = 15. \\]\n    \n    \\item La función $\\phi(x)$ toma valores de $10$ (en el intervalo) y $0$ (fuera de él). Para que la composición $f(\\phi(x))$ sea continua y no presente saltos cuando $\\phi$ salta de 0 a 10, debe cumplirse que $f(10) = f(0)$.\n    \\begin{align*}\n    f(10) &= 40(10 - D) = 400 - 40D \\\\\n    f(0) &= 0\n    \\end{align*}\n    Igualando: $400 - 40D = 0 \\implies 40D = 400 \\implies D = 10$.\n\\end{enumerate}",
        "answers": {
          "A": "-1",
          "B": "0",
          "C": "15",
          "D": "10"
        },
        "graph_options": ""
      },
      {
        "id": 3,
        "question": "Aplicaciones del Teorema del Valor Intermedio (TVI).\nUn camión viaja del pueblo $P_1$ al pueblo $P_2$ un día y hace el viaje de retorno al día siguiente. Sean $f, g : [1, 5] \\to \\mathbb{R}$ las distancias en km del camión al pueblo $P_1$; $f$ en el viaje de ida, $g$ en el de vuelta.\n\\begin{center}\n\\begin{tabular}{|c|c|c|c|c|c|}\n\\hline\n$t$ & 1 & 2 & 3 & 4 & 5 \\\\\n\\hline\n$f(t)$ & 0 & 30 & 70 & 100 & 120 \\\\\n\\hline\n$g(t)$ & 120 & 80 & 50 & 20 & 0 \\\\\n\\hline\n\\end{tabular}\n\\end{center}\nSe sabe que existe un tiempo $t_0$ para el cual el camión está exactamente a la misma distancia de $P_1$ tanto en la ida como en la vuelta.\nSea una función continua $\\psi : [5, 10] \\to [2, 8]$ tal que $\\psi(5) = 2$ y $\\psi(10) = 8$. Existen constantes $C$ y $D$ para que la ecuación $C \\psi(x) + D = \\xi$ tenga al menos una solución para todo $\\xi \\in [20, 50]$.\n\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Encuentre el límite inferior $A$ del intervalo $(A, B)$ más corto, con extremos en la tabla, donde se garantiza por el TVI que está $t_0$.\n    \\item Encuentre el límite superior $B$ de dicho intervalo.\n    \\item Encuentre el valor positivo de $C$ para la ecuación abstracta.\n    \\item Encuentre el valor de $D$.\n\\end{enumerate}",
        "solution": "Soluciones TVI:\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Definimos $h(t) = f(t) - g(t)$. Buscamos un cambio de signo en los datos tabulares:\n    $h(1) = -120$, $h(2) = -50$, $h(3) = 20$, $h(4) = 80$.\n    El cambio de signo ocurre entre $t=2$ y $t=3$. Por el TVI, existe una raíz en $(2, 3)$. \n    El límite inferior del intervalo es $A = 2$.\n    \n    \\item El límite superior del intervalo es $B = 3$.\n    \n    \\item Sea $k(x) = C \\psi(x) + D$. Su rango cubrirá entre $k(5)$ y $k(10)$.\n    $k(5) = 2C + D = 20$.\n    $k(10) = 8C + D = 50$.\n    Restando las ecuaciones: $6C = 30 \\implies C = 5$.\n    \n    \\item Sustituyendo $C$ en la primera ecuación:\n    $2(5) + D = 20 \\implies 10 + D = 20 \\implies D = 10$.\n\\end{enumerate}",
        "answers": {
          "A": "2",
          "B": "3",
          "C": "5",
          "D": "10"
        },
        "graph_options": ""
      },
      {
        "id": 4,
        "question": "Considere la función $f : [0, 8] \\to \\mathbb{R}$ definida por segmentos de recta según la siguiente figura.\n<img src=\"assets/graph_static_0.svg\" class=\"math-graph\" style=\"width:300px; display:block; margin:auto;\">\nCalcule y esboce:\n\\begin{enumerate}[label=(\\alph*)]\n    \\item El valor de $A = \\lim_{x \\to 4^-} f(x)$.\n    \\item El valor de $B = \\lim_{x \\to 4^+} f(x)$.\n    \\item El valor de $C = \\lim_{x \\to 2} f(f(x))$.\n    \\item Una asíntota vertical es una recta $x = D$ hacia la cual la función tiende a infinito. Si definiéramos $h(x) = \\frac{1}{f(x) - 6}$ para el intervalo $(0, 4)$, ¿qué valor toma $D$?\n    \\item Dibuje en una hoja de respuesta una gráfica aproximada para $h(x)$ en el intervalo $(0, 4)$ marcando su asíntota. (Describa en una línea las características principales para este inciso en la calificación, llame $E$ al corte en el eje $y$).\n\\end{enumerate}",
        "solution": "Evaluación gráfica:\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Acercándonos a $x=4$ desde la izquierda sobre el segmento que baja, observamos que $y$ se acerca a $2$. $A = 2$.\n    \\item Acercándonos a $x=4$ desde la derecha sobre el segmento inferior, observamos que $y$ se acerca a $0$. $B = 0$.\n    \\item Primero evaluamos el límite interior: $u = \\lim_{x \\to 2} f(x)$. En el pico de la gráfica, cuando $x=2$, $y=6$.\n    Luego, evaluamos el exterior: $\\lim_{u \\to 6} f(u)$. La recta de $x=4$ a $x=8$ pasa por $(4,0)$ y $(8,4)$, con ecuación $y = x - 4$. Evaluando en $6$, obtenemos $2$. Luego $C = 2$.\n    \\item La función $h(x)$ tendrá una asíntota donde $f(x) - 6 = 0 \\implies f(x) = 6$. Esto ocurre en el pico en $x = 2$. Por lo tanto, $D = 2$.\n    \\item En $x=0$, $h(0) = \\frac{1}{f(0)-6} = \\frac{1}{2-6} = -\\frac{1}{4}$. Luego $E = -1/4$. La gráfica de $h(x)$ inicia en $(0, -1/4)$ y decrece hacia $-\\infty$ al acercarse a $x=2$ por la izquierda. Desde $x=2$ hasta $x=4$, crece desde $-\\infty$ hasta terminar en $\\frac{1}{f(4)-6} = \\frac{1}{2-6} = -1/4$.\n\\end{enumerate}",
        "answers": {
          "A": "2",
          "B": "0",
          "C": "2",
          "D": "2",
          "E": "-1/4"
        },
        "graph_options": ""
      },
      {
        "id": 5,
        "question": "Sean $f, g$ funciones diferenciables en $\\mathbb{R}$. Se conocen los siguientes valores de dichas funciones y sus derivadas en la tabla:\n\\begin{center}\n\\begin{tabular}{|c|c|c|c|c|}\n\\hline\n$x$ & $f(x)$ & $g(x)$ & $f'(x)$ & $g'(x)$ \\\\\n\\hline\n$3$ & $4$ & $5$ & $-2$ & $6$ \\\\\n\\hline\n$4$ & $10$ & $3$ & $8$ & $10$ \\\\\n\\hline\n\\end{tabular}\n\\end{center}\nCon base en la tabla, encuentre los valores exactos requeridos:\n\\begin{enumerate}[label=(\\alph*)]\n    \\item $A = (f \\cdot g)'(3)$.\n    \\item $B = \\left( \\frac{f}{g} \\right)'(3)$.\n    \\item $C = (g \\circ f)'(3)$.\n    \\item El límite $D = \\lim_{h \\to 0} \\frac{g(3+h) - g(3)}{h}$.\n\\end{enumerate}",
        "solution": "Aplicación de las reglas de derivación con tablas:\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Regla del producto:\n    $A = f'(3)g(3) + f(3)g'(3) = (-2)(5) + (4)(6) = -10 + 24 = 14$.\n    \n    \\item Regla del cociente:\n    $B = \\frac{f'(3)g(3) - f(3)g'(3)}{(g(3))^2} = \\frac{(-2)(5) - (4)(6)}{(5)^2} = \\frac{-10 - 24}{25} = -\\frac{34}{25}$.\n    \n    \\item Regla de la cadena:\n    $C = g'(f(3)) \\cdot f'(3) = g'(4) \\cdot (-2) = (10) \\cdot (-2) = -20$.\n    \n    \\item La expresión representa la definición de la derivada de $g$ en el punto $x=3$. \n    $D = g'(3) = 6$.\n\\end{enumerate}",
        "answers": {
          "A": "14",
          "B": "-34/25",
          "C": "-20",
          "D": "6"
        },
        "graph_options": ""
      },
      {
        "id": 6,
        "question": "Dada una parábola $f(x) = Ax^2 + Bx + C$ y una función abstracta $h(x) = \\exp(\\sqrt{x^2 + 1})$, resuelva las siguientes preguntas:\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Sabiendo que $f(0) = 12$, encuentre $C$.\n    \\item Sabiendo que $f'(0) = 5$, encuentre $B$.\n    \\item Sabiendo que $f'(4) = 29$, encuentre $A$.\n    \\item Calcule la derivada analítica $h'(x)$. \n    \\item Si denotamos a $h'(x)$ de la forma $h'(x) = \\frac{D \\cdot x \\cdot h(x)}{\\sqrt{x^2 + 1}}$, encuentre el valor de $D$.\n\\end{enumerate}",
        "solution": "Derivadas y coeficientes de polinomios:\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Evaluamos $f(0) = A(0)^2 + B(0) + C = 12 \\implies C = 12$.\n    \\item La derivada es $f'(x) = 2Ax + B$. Evaluamos $f'(0) = 2A(0) + B = 5 \\implies B = 5$.\n    \\item Usamos la última condición para la derivada:\n    $f'(4) = 2A(4) + B = 29 \\implies 8A + 5 = 29 \\implies 8A = 24 \\implies A = 3$.\n    \\item Aplicamos la regla de la cadena para derivar $h(x)$:\n    \\begin{align*}\n    h'(x) &= \\exp\\left(\\sqrt{x^2+1}\\right) \\cdot \\frac{d}{dx}\\left[(x^2+1)^{1/2}\\right] \\\\\n    &= h(x) \\cdot \\frac{1}{2}(x^2+1)^{-1/2} \\cdot (2x) \\\\\n    &= \\frac{x \\cdot h(x)}{\\sqrt{x^2+1}}.\n    \\end{align*}\n    \\item Al comparar la derivada analítica $\\frac{x \\cdot h(x)}{\\sqrt{x^2+1}}$ con la forma dada $\\frac{D \\cdot x \\cdot h(x)}{\\sqrt{x^2+1}}$, concluimos que el coeficiente multiplicativo es 1. Por lo tanto, $D = 1$.\n\\end{enumerate}",
        "answers": {
          "A": "3",
          "B": "5",
          "C": "12",
          "D": "1"
        },
        "graph_options": ""
      }
    ]
  },
  {
    "mission_id": "simulacro1",
    "title": "Simulacro Parcial 2 (V1)",
    "exercises": [
      {
        "id": 1,
        "question": "Sean $f, g : \\mathbb{R} \\to \\mathbb{R}$ dos funciones continuas. Se sabe que:\n\\[ \\lim_{x \\to 0} \\frac{48 \\cdot x}{\\sin(x \\cdot f(x))} = 12 \\]\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Encuentre el valor de $A = \\lim_{x \\to 0} f(x)$.\n\\end{enumerate}\nSe sabe además que:\n\\[ \\lim_{x \\to 0} \\frac{\\sin(5 \\cdot g(x) - 50)}{x} = 70 \\]\n\\begin{enumerate}[label=(\\alph*), resume]\n    \\item Encuentre el valor de $B = \\lim_{x \\to 0} g(x)$.\n    \\item Encuentre el valor de $C = \\lim_{x \\to 0} \\frac{g(x) - 10}{x}$.\n\\end{enumerate}",
        "solution": "Solución a los límites abstractos (Extraído de E5, Ejercicio 2):\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Manipulamos el límite para usar $\\lim_{u \\to 0} \\frac{u}{\\sin u} = 1$. Multiplicamos y dividimos por $f(x)$:\n    \\begin{align*}\n    12 &= \\lim_{x \\to 0} \\left( 48 \\cdot \\frac{x \\cdot f(x)}{\\sin(x \\cdot f(x))} \\cdot \\frac{1}{f(x)} \\right) \\\\\n    12 &= 48 \\cdot 1 \\cdot \\frac{1}{\\lim_{x \\to 0} f(x)} \\\\\n    12 &= \\frac{48}{A} \\implies A = \\frac{48}{12} = 4.\n    \\end{align*}\n    \\item Evaluamos el límite usando la continuidad de $g(x)$. Para que el límite exista y sea finito (70) mientras el denominador tiende a cero, el argumento del seno debe tender a cero.\n    \\[ \\lim_{x \\to 0} (5 \\cdot g(x) - 50) = 0 \\implies 5B - 50 = 0 \\implies 5B = 50 \\implies B = 10. \\]\n    \\item Usamos el límite conocido y la regla de la cadena para límites trigonométricos especiales. Sabiendo que $5g(x)-50 \\to 0$:\n    \\begin{align*}\n    70 &= \\lim_{x \\to 0} \\left( \\frac{\\sin(5(g(x) - 10))}{5(g(x) - 10)} \\cdot \\frac{5(g(x) - 10)}{x} \\right) \\\\\n    70 &= 1 \\cdot 5 \\cdot \\lim_{x \\to 0} \\frac{g(x) - 10}{x} \\\\\n    70 &= 5 \\cdot C \\implies C = \\frac{70}{5} = 14.\n    \\end{align*}\n\\end{enumerate}",
        "answers": {
          "A": "4",
          "B": "10",
          "C": "14"
        },
        "graph_options": ""
      },
      {
        "id": 2,
        "question": "Dado un conjunto $M \\subseteq \\mathbb{R}$ cualquiera, su función indicatriz se define como $\\mathbf{I}_M(x) = 1$ si $x \\in M$ y $0$ en otro caso.\nSea ahora la función $f : \\mathbb{R} \\to \\mathbb{R}$ definida por:\n\\[ f(x) = 68 \\cdot \\mathbf{I}_{(-7, 0]}(x) + 68 \\cdot \\mathbf{I}_{[0, 2]}(x) + 41 \\cdot \\mathbf{I}_{(2, 10)}(x) + 27 \\cdot \\mathbf{I}_{(2, \\infty)}(x) \\]\nLa función $f$ tiene varios puntos de discontinuidad.\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Encuentre el valor de $x = A$ en que $f$ es discontinua por derecha únicamente.\n    \\item Encuentre el valor de $x = B$ en que $f$ es discontinua por izquierda únicamente.\n    \\item Encuentre el valor de $x = C$ en que $f$ es discontinua por izquierda y derecha.\n\\end{enumerate}",
        "solution": "Solución a las discontinuidades indicatrices (Extraído de E6, Ejercicio 1):\nEvaluamos los valores de la función en las fronteras de los intervalos: $x=-7, 0, 2, 10$.\n\\begin{itemize}\n    \\item En $x=-7$: $f(-7) = 0$. $\\lim_{x \\to -7^+} f(x) = 68$. Es discontinua por derecha únicamente. Luego $A = -7$.\n    \\item En $x=0$: $f(0) = 68 + 68 = 136$. $\\lim_{x \\to 0^-} f(x) = 68$. $\\lim_{x \\to 0^+} f(x) = 68$. Aunque el límite existe y es 68, $f(0)=136 \\neq 68$. Es discontinua por ambos lados. Espera, el texto de E6 indica discontinuidad por izquierda/derecha refiriéndose a los saltos donde el límite lateral difiere del valor de la función.\n    Re-evaluemos cuidadosamente:\n    - En $x=-7$: $f(-7)=0$, lim izq = 0, lim der = 68. $\\implies$ discontinua por derecha (el límite derecho no coincide con $f(-7)$). $A = -7$.\n    - En $x=10$: $f(10) = 27$. lim izq = $41+27=68$. lim der = 27. $\\implies$ discontinua por izquierda (el límite izquierdo no coincide con $f(10)$). $B = 10$.\n    - En $x=2$: $f(2) = 68$. lim izq = 68. lim der = $41+27=68$. El límite existe y coincide con la función. ¡Es continua en $x=2$!\n    - En $x=0$: $f(0) = 136$ (pertenece a ambos intervalos cerrados). lim izq = 68. lim der = 68. Discontinua por ambos lados. $C = 0$.\n\\end{itemize}\nRespuestas: $A = -7$, $B = 10$, $C = 0$.",
        "answers": {
          "A": "-7",
          "B": "10",
          "C": "0"
        },
        "graph_options": ""
      },
      {
        "id": 3,
        "question": "Sea $f : \\mathbb{R} \\to \\mathbb{R}$ una parábola que cumple las siguientes condiciones:\n\\[ f(x) = A + Bx + Cx^2, \\quad f(0) = 15 \\]\n\\[ \\frac{df}{dx}(0) = f'(0) = 12, \\quad \\frac{df}{dx}(14) = f'(14) = 96 \\]\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Encuentre el valor de $A$.\n    \\item Encuentre el valor de $B$.\n    \\item Encuentre el valor de $C$.\n\\end{enumerate}",
        "solution": "Solución de la parábola (Extraído de E7, Ejercicio 1):\nEvaluamos $f(0) = 15$:\n\\[ A + B(0) + C(0)^2 = 15 \\implies A = 15. \\]\nCalculamos la derivada $f'(x) = B + 2Cx$.\nEvaluamos $f'(0) = 12$:\n\\[ B + 2C(0) = 12 \\implies B = 12. \\]\nEvaluamos $f'(14) = 96$:\n\\[ B + 2C(14) = 96 \\implies 12 + 28C = 96 \\implies 28C = 84 \\implies C = \\frac{84}{28} = 3. \\]\nRespuestas: $A = 15$, $B = 12$, $C = 3$.",
        "answers": {
          "A": "15",
          "B": "12",
          "C": "3"
        },
        "graph_options": ""
      },
      {
        "id": 4,
        "question": "Un camión viaja del pueblo $P_1$ al pueblo $P_2$ un día y hace el viaje de retorno al día siguiente. Sean $f, g : [1, 5] \\to \\mathbb{R}$ las distancias en km del camión al pueblo $P_1$; $f$ en el viaje de ida, $g$ en el de vuelta.\n\\begin{center}\n\\begin{tabular}{|c|c|c|c|c|c|}\n\\hline\n$t$ & 1 & 2 & 3 & 4 & 5 \\\\\n\\hline\n$f(t)$ & 10 & 40 & 80 & 110 & 150 \\\\\n\\hline\n$g(t)$ & 130 & 90 & 60 & 40 & 0 \\\\\n\\hline\n\\end{tabular}\n\\end{center}\nSe sabe que existe un tiempo $t_0$ para el cual el camión está exactamente a la misma distancia de $P_1$ tanto en la ida como en la vuelta. Sea $(A, B)$ el intervalo de tiempo de menor longitud, con extremos en la tabla, donde se garantiza por el Teorema del Valor Intermedio que está $t_0$.\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Encuentre el límite inferior $A$.\n    \\item Encuentre el límite superior $B$.\n\\end{enumerate}\nAdicionalmente, se tiene una función continua $\\psi : [2, 6] \\to [5, 20]$ tal que $\\psi(2) = 5$ y $\\psi(6) = 20$. \n\\begin{enumerate}[label=(\\alph*), resume]\n    \\item Encuentre el valor positivo de $C$ tal que la ecuación $C \\psi(x) + D = \\xi$ tenga solución garantizada para todo $\\xi \\in [40, 100]$.\n    \\item Encuentre el valor de $D$.\n\\end{enumerate}",
        "solution": "Solución del TVI (Problema Nuevo):\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Sea $h(t) = f(t) - g(t)$. Calculamos los valores:\n    $h(1) = 10 - 130 = -120$\n    $h(2) = 40 - 90 = -50$\n    $h(3) = 80 - 60 = 20$\n    $h(4) = 110 - 40 = 70$\n    $h(5) = 150 - 0 = 150$\n    El cambio de signo ocurre entre $t=2$ y $t=3$. Por el TVI, existe una raíz en el intervalo $(2, 3)$. Luego $A = 2$.\n    \\item El límite superior del intervalo es $B = 3$.\n    \\item Sea $k(x) = C \\psi(x) + D$. Para garantizar soluciones en $[40, 100]$, el rango de $k$ debe cubrir este intervalo. Evaluamos en los extremos:\n    $k(2) = C \\psi(2) + D = 5C + D = 40$\n    $k(6) = C \\psi(6) + D = 20C + D = 100$\n    Restando las ecuaciones: $15C = 60 \\implies C = 4$.\n    \\item Sustituimos en la primera: $5(4) + D = 40 \\implies 20 + D = 40 \\implies D = 20$.\n\\end{enumerate}",
        "answers": {
          "A": "2",
          "B": "3",
          "C": "4",
          "D": "20"
        },
        "graph_options": ""
      },
      {
        "id": 5,
        "question": "Sean $f$ y $g$ funciones diferenciables. Se conocen los siguientes valores de las funciones y sus derivadas:\n\\begin{center}\n\\begin{tabular}{|c|c|c|c|c|}\n\\hline\n$x$ & $f(x)$ & $g(x)$ & $f'(x)$ & $g'(x)$ \\\\\n\\hline\n$2$ & $3$ & $4$ & $-1$ & $5$ \\\\\n\\hline\n$5$ & $8$ & $2$ & $3$ & $-2$ \\\\\n\\hline\n\\end{tabular}\n\\end{center}\nCon base en la tabla, encuentre los valores exactos requeridos:\n\\begin{enumerate}[label=(\\alph*)]\n    \\item $A = (f \\cdot g)'(2)$.\n    \\item $B = \\left( \\frac{f}{g} \\right)'(2)$.\n    \\item $C = (f \\circ g)'(5)$.\n    \\item $D = \\lim_{h \\to 0} \\frac{g(2+h) - g(2)}{h}$.\n\\end{enumerate}",
        "solution": "Solución a derivadas con tablas (Problema Nuevo):\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Regla del producto:\n    $A = f'(2)g(2) + f(2)g'(2) = (-1)(4) + (3)(5) = -4 + 15 = 11$.\n    \\item Regla del cociente:\n    $B = \\frac{f'(2)g(2) - f(2)g'(2)}{(g(2))^2} = \\frac{(-1)(4) - (3)(5)}{4^2} = \\frac{-4 - 15}{16} = -\\frac{19}{16}$.\n    \\item Regla de la cadena:\n    $C = f'(g(5)) \\cdot g'(5) = f'(2) \\cdot (-2) = (-1) \\cdot (-2) = 2$.\n    \\item Definición de derivada:\n    El límite corresponde a la derivada de $g(x)$ evaluada en $x=2$.\n    $D = g'(2) = 5$.\n\\end{enumerate}",
        "answers": {
          "A": "11",
          "B": "-19/16",
          "C": "2",
          "D": "5"
        },
        "graph_options": ""
      },
      {
        "id": 6,
        "question": "Esboce en la hoja de respuestas la gráfica de una única función $h : [-5, 5] \\to \\mathbb{R}$ que cumpla todas las siguientes condiciones:\n\\begin{itemize}\n    \\item $h(0) = 3$\n    \\item $\\lim_{x \\to 0^-} h(x) = 3$\n    \\item $\\lim_{x \\to 0^+} h(x) = -2$\n    \\item $\\lim_{x \\to 3} h(x) = \\infty$\n    \\item $\\lim_{x \\to -5^+} h(x) = -\\infty$\n\\end{itemize}\nA partir de la gráfica, identifique:\n\\begin{enumerate}[label=(\\alph*)]\n    \\item El valor de $A = h(0)$.\n    \\item La ecuación de la asíntota vertical en la región positiva, $x = B$. Encuentre $B$.\n\\end{enumerate}",
        "solution": "Solución de la gráfica (Problema Nuevo):\nLa gráfica debe mostrar:\n- Un punto cerrado en $(0, 3)$, y la curva conectando por la izquierda para cumplir $\\lim_{x \\to 0^-} h(x) = 3$.\n- Un salto en $x=0$, con un punto abierto (hueco) en $(0, -2)$ por donde la curva continúa hacia la derecha.\n- Una asíntota vertical en $x=3$ donde ambas ramas (izquierda y derecha de 3) suben hacia $\\infty$.\n- Una asíntota vertical en $x=-5$ donde la curva baja hacia $-\\infty$ por la derecha.\n\n<div style=\"text-align:center; color:var(--success); font-size: 1.2rem; margin-bottom:1rem;\">Gráfica Correcta:</div><img src=\"assets/graph_m1_p5_0.svg\" class=\"math-graph\" style=\"width:300px; display:block; margin:auto;\">\n\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Evaluando la condición inicial, $A = h(0) = 3$.\n    \\item La asíntota vertical en la región positiva se da por el límite $\\lim_{x \\to 3} h(x) = \\infty$. Por lo tanto, es la recta $x=3$. Luego $B = 3$.\n\\end{enumerate}",
        "answers": {
          "A": "3",
          "B": "3",
          "graph": "C"
        },
        "graph_options": "<div class=\"graph-options\" style=\"display:flex; flex-wrap:wrap; gap: 1rem; justify-content:center; margin-top:1rem;\">\n<div class=\"graph-choice\" data-letter=\"A\" onclick=\"selectGraph('A')\" style=\"text-align:center; padding: 10px; border: 2px solid transparent; border-radius: 8px; cursor: pointer; transition: all 0.3s;\"><img src=\"assets/graph_m1_p5_3.svg\" alt=\"Opción A\" style=\"background:white; border-radius:8px; width:250px;\"><br><strong style=\"font-size:1.5rem;\">A</strong></div>\n<div class=\"graph-choice\" data-letter=\"B\" onclick=\"selectGraph('B')\" style=\"text-align:center; padding: 10px; border: 2px solid transparent; border-radius: 8px; cursor: pointer; transition: all 0.3s;\"><img src=\"assets/graph_m1_p5_1.svg\" alt=\"Opción B\" style=\"background:white; border-radius:8px; width:250px;\"><br><strong style=\"font-size:1.5rem;\">B</strong></div>\n<div class=\"graph-choice\" data-letter=\"C\" onclick=\"selectGraph('C')\" style=\"text-align:center; padding: 10px; border: 2px solid transparent; border-radius: 8px; cursor: pointer; transition: all 0.3s;\"><img src=\"assets/graph_m1_p5_0.svg\" alt=\"Opción C\" style=\"background:white; border-radius:8px; width:250px;\"><br><strong style=\"font-size:1.5rem;\">C</strong></div>\n<div class=\"graph-choice\" data-letter=\"D\" onclick=\"selectGraph('D')\" style=\"text-align:center; padding: 10px; border: 2px solid transparent; border-radius: 8px; cursor: pointer; transition: all 0.3s;\"><img src=\"assets/graph_m1_p5_2.svg\" alt=\"Opción D\" style=\"background:white; border-radius:8px; width:250px;\"><br><strong style=\"font-size:1.5rem;\">D</strong></div>\n</div>"
      }
    ]
  },
  {
    "mission_id": "simulacro2",
    "title": "Simulacro Parcial 2 (V2)",
    "exercises": [
      {
        "id": 1,
        "question": "Se recuerda que la función suelo se define como $\\lfloor x \\rfloor = \\max \\{n \\in \\mathbb{Z} : x \\geq n\\}$.\nDefina la función:\n\\[ f(x) = 3 \\cdot \\left\\lfloor \\frac{x}{6} \\right\\rfloor - 16 \\]\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Calcule $A = \\lim_{x \\to 30^+} f(x)$.\n    \\item Calcule $B = \\lim_{x \\to 54^-} f(x)$.\n    \\item Existe un número entero $C$ tal que $\\lim_{x \\to C^-} f(x) = -13$ y $\\lim_{x \\to C^+} f(x) = -10$. Encuentre el valor de $C$.\n\\end{enumerate}",
        "solution": "Solución (Extraído de E5, Ejercicio 3):\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Para $x \\to 30^+$, $x/6$ se aproxima a $5$ por la derecha (ej. $5.01$). $\\lfloor 5.01 \\rfloor = 5$. Luego $A = 3(5) - 16 = 15 - 16 = -1$.\n    \\item Para $x \\to 54^-$, $x/6$ se aproxima a $9$ por la izquierda (ej. $8.99$). $\\lfloor 8.99 \\rfloor = 8$. Luego $B = 3(8) - 16 = 24 - 16 = 8$.\n    \\item Si analizamos el salto, notamos que ocurre en un entero $C/6 = k$.\n    Por izquierda: $3(k-1) - 16 = -13 \\implies 3k - 19 = -13 \\implies 3k = 6 \\implies k = 2$.\n    Por derecha: $3k - 16 = -10 \\implies 3(2) - 16 = 6 - 16 = -10$ (coincide).\n    Como $k=2$, y el salto ocurre cuando $x/6 = k \\implies C/6 = 2 \\implies C = 12$.\n\\end{enumerate}",
        "answers": {
          "A": "-1",
          "B": "8",
          "C": "12"
        },
        "graph_options": ""
      },
      {
        "id": 2,
        "question": "Para que la función por tramos sea continua en todo su dominio, encuentre los parámetros solicitados.\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Sea $f(x) = \\begin{cases} 7x - 15 & x \\neq 13 \\\\ A & x = 13 \\end{cases}$. Encuentre $A$.\n    \\item Sea $g(x) = \\begin{cases} \\frac{x^2 - 16x + 48}{x - 12} & x \\neq 12 \\\\ B & x = 12 \\end{cases}$. Encuentre $B$.\n    \\item Sea $h(x) = \\begin{cases} \\frac{1}{5} \\frac{\\sin(40(x-2))}{x-2} & x \\neq 2 \\\\ C & x = 2 \\end{cases}$. Encuentre $C$.\n\\end{enumerate}",
        "solution": "Solución (Extraído de E6, Ejercicio 3):\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Para que $f$ sea continua, $A = \\lim_{x \\to 13} (7x - 15) = 7(13) - 15 = 91 - 15 = 76$.\n    \\item Para que $g$ sea continua, factorizamos el numerador: $x^2 - 16x + 48 = (x-12)(x-4)$.\n    $B = \\lim_{x \\to 12} \\frac{(x-12)(x-4)}{x-12} = \\lim_{x \\to 12} (x-4) = 12 - 4 = 8$.\n    \\item Para que $h$ sea continua, evaluamos el límite trigonométrico especial:\n    $C = \\lim_{x \\to 2} \\frac{1}{5} \\frac{\\sin(40(x-2))}{x-2} = \\frac{1}{5} (40) = 8$.\n\\end{enumerate}",
        "answers": {
          "A": "76",
          "B": "8",
          "C": "8"
        },
        "graph_options": ""
      },
      {
        "id": 3,
        "question": "Sea la función $f : \\mathbb{R} \\to \\mathbb{R}$, definida por:\n\\[ f(x) = \\exp(32x^3 + 33x^2 + 14x + 30) \\]\nLuego, se satisface la siguiente expresión para la derivada $f'$:\n\\[ \\frac{f'(x)}{f(x)} = Ax^2 + Bx + C \\]\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Encuentre el valor de $A$.\n    \\item Encuentre el valor de $B$.\n    \\item Encuentre el valor de $C$.\n\\end{enumerate}",
        "solution": "Solución (Extraído de E8, Ejercicio 4):\nAplicamos la regla de la cadena para derivar la función exponencial $f(x) = \\exp(u(x))$:\n\\[ f'(x) = \\exp(u(x)) \\cdot u'(x) = f(x) \\cdot u'(x) \\]\nPor lo tanto, al dividir entre $f(x)$ nos queda simplemente la derivada del exponente:\n\\[ \\frac{f'(x)}{f(x)} = u'(x) \\]\nEl exponente es $u(x) = 32x^3 + 33x^2 + 14x + 30$. Su derivada es:\n\\[ u'(x) = 3(32)x^2 + 2(33)x + 14 = 96x^2 + 66x + 14 \\]\nComparando con la forma dada $Ax^2 + Bx + C$, obtenemos los coeficientes:\n$A = 96$, $B = 66$, $C = 14$.",
        "answers": {
          "A": "96",
          "B": "66",
          "C": "14"
        },
        "graph_options": ""
      },
      {
        "id": 4,
        "question": "Aplicaciones del Teorema del Valor Intermedio (TVI).\nUn camión viaja del pueblo $P_1$ al pueblo $P_2$ un día y hace el viaje de retorno al día siguiente. Sean $f, g : [1, 5] \\to \\mathbb{R}$ las distancias en km del camión al pueblo $P_1$; $f$ en el viaje de ida, $g$ en el de vuelta.\n\\begin{center}\n\\begin{tabular}{|c|c|c|c|c|c|}\n\\hline\n$t$ & 1 & 2 & 3 & 4 & 5 \\\\\n\\hline\n$f(t)$ & 15 & 60 & 90 & 140 & 200 \\\\\n\\hline\n$g(t)$ & 180 & 110 & 95 & 40 & 10 \\\\\n\\hline\n\\end{tabular}\n\\end{center}\nSe sabe que existe un tiempo $t_0$ para el cual el camión está exactamente a la misma distancia de $P_1$ tanto en la ida como en la vuelta. Sea $(A, B)$ el intervalo de tiempo de menor longitud, con extremos en la tabla, donde se garantiza por el Teorema del Valor Intermedio que está $t_0$.\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Encuentre el límite inferior $A$ del intervalo.\n    \\item Encuentre el límite superior $B$ del intervalo.\n\\end{enumerate}",
        "solution": "Solución TVI (Problema Nuevo):\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Sea $h(t) = f(t) - g(t)$. Evaluamos los valores:\n    $h(1) = 15 - 180 = -165$\n    $h(2) = 60 - 110 = -50$\n    $h(3) = 90 - 95 = -5$\n    $h(4) = 140 - 40 = 100$\n    $h(5) = 200 - 10 = 190$\n    El cambio de signo ocurre entre $t=3$ ($h(3)=-5$) y $t=4$ ($h(4)=100$). Por el TVI, la raíz está en el intervalo $(3, 4)$. Luego $A = 3$.\n    \\item El límite superior del intervalo es $B = 4$.\n\\end{enumerate}",
        "answers": {
          "A": "3",
          "B": "4"
        },
        "graph_options": ""
      },
      {
        "id": 5,
        "question": "Sean $f$ y $g$ funciones diferenciables. Se conocen los siguientes valores de las funciones y sus derivadas:\n\\begin{center}\n\\begin{tabular}{|c|c|c|c|c|}\n\\hline\n$x$ & $f(x)$ & $g(x)$ & $f'(x)$ & $g'(x)$ \\\\\n\\hline\n$1$ & $2$ & $5$ & $4$ & $-3$ \\\\\n\\hline\n$5$ & $7$ & $4$ & $-2$ & $6$ \\\\\n\\hline\n\\end{tabular}\n\\end{center}\nCon base en la tabla, encuentre los valores exactos requeridos:\n\\begin{enumerate}[label=(\\alph*)]\n    \\item $A = (f \\cdot g)'(1)$.\n    \\item $B = \\left( \\frac{g}{f} \\right)'(5)$.\n    \\item $C = (f \\circ g)'(1)$.\n\\end{enumerate}",
        "solution": "Solución Derivadas por Tabla (Problema Nuevo):\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Regla del producto en $x=1$:\n    $A = f'(1)g(1) + f(1)g'(1) = (4)(5) + (2)(-3) = 20 - 6 = 14$.\n    \\item Regla del cociente en $x=5$:\n    Nótese que es $g/f$, por tanto el denominador es $f^2$.\n    $B = \\frac{g'(5)f(5) - g(5)f'(5)}{(f(5))^2} = \\frac{(6)(7) - (4)(-2)}{7^2} = \\frac{42 + 8}{49} = \\frac{50}{49}$.\n    \\item Regla de la cadena en $x=1$:\n    $C = g'(f(1)) \\cdot f'(1) = g'(2) \\cdot (4)$. Pero $g'(2)$ no está en la tabla (no es 1 ni 5).\n    Revisando la tabla, $f(1) = 2$, pero no tenemos $g'(2)$. Ah, la composición debe evaluarse en los puntos dados. Modificamos el problema asumiendo que el estudiante notará que los puntos no cuadran, sin embargo en este tipo de parciales las tablas siempre proveen el valor. Si $f(1)=2$, no tengo $g'(2)$. Corrigamos: calcularemos $C = (f \\circ g)'(1)$.\n    $C = f'(g(1)) \\cdot g'(1) = f'(5) \\cdot (-3) = (-2) \\cdot (-3) = 6$.\n\\end{enumerate}",
        "answers": {
          "A": "14",
          "B": "50/49",
          "C": "6"
        },
        "graph_options": ""
      },
      {
        "id": 6,
        "question": "Esboce en la hoja de respuestas la gráfica de una única función $h : [-3, 7] \\to \\mathbb{R}$ que cumpla todas las siguientes condiciones:\n\\begin{itemize}\n    \\item $h(2) = 1$\n    \\item $\\lim_{x \\to 2^-} h(x) = 4$\n    \\item $\\lim_{x \\to 2^+} h(x) = 1$\n    \\item $\\lim_{x \\to 5} h(x) = -\\infty$\n    \\item $h$ es continua y decreciente en el intervalo $(2, 5)$\n\\end{itemize}\nA partir de sus propiedades:\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Encuentre la asíntota vertical en la región positiva, $x = B$. Encuentre $B$.\n    \\item Describa en una palabra el tipo de discontinuidad que presenta la función en $x=2$ (ej. evitable, salto, infinita). \n\\end{enumerate}",
        "solution": "Solución de la gráfica (Problema Nuevo):\nLa gráfica debe mostrar un salto en $x=2$ desde un valor izquierdo de 4 (punto abierto) hacia el punto $(2,1)$ (punto cerrado). Desde el punto $(2,1)$ la gráfica debe decrecer continuamente hacia la asíntota vertical en $x=5$ descendiendo a $-\\infty$.\n\n<div style=\"text-align:center; color:var(--success); font-size: 1.2rem; margin-bottom:1rem;\">Gráfica Correcta:</div><img src=\"assets/graph_m2_p5_0.svg\" class=\"math-graph\" style=\"width:300px; display:block; margin:auto;\">\n\n\\begin{enumerate}[label=(\\alph*)]\n    \\item La asíntota vertical es donde el límite se va a infinito, que es $x=5$. Luego $B = 5$.\n    \\item El tipo de discontinuidad en $x=2$ presenta límites laterales finitos pero diferentes ($4 \\neq 1$), esto corresponde a una discontinuidad de \\textbf{salto}.\n\\end{enumerate}",
        "answers": {
          "B": "5",
          "discontinuidad": "salto",
          "graph": "D"
        },
        "graph_options": "<div class=\"graph-options\" style=\"display:flex; flex-wrap:wrap; gap: 1rem; justify-content:center; margin-top:1rem;\">\n<div class=\"graph-choice\" data-letter=\"A\" onclick=\"selectGraph('A')\" style=\"text-align:center; padding: 10px; border: 2px solid transparent; border-radius: 8px; cursor: pointer; transition: all 0.3s;\"><img src=\"assets/graph_m2_p5_3.svg\" alt=\"Opción A\" style=\"background:white; border-radius:8px; width:250px;\"><br><strong style=\"font-size:1.5rem;\">A</strong></div>\n<div class=\"graph-choice\" data-letter=\"B\" onclick=\"selectGraph('B')\" style=\"text-align:center; padding: 10px; border: 2px solid transparent; border-radius: 8px; cursor: pointer; transition: all 0.3s;\"><img src=\"assets/graph_m2_p5_2.svg\" alt=\"Opción B\" style=\"background:white; border-radius:8px; width:250px;\"><br><strong style=\"font-size:1.5rem;\">B</strong></div>\n<div class=\"graph-choice\" data-letter=\"C\" onclick=\"selectGraph('C')\" style=\"text-align:center; padding: 10px; border: 2px solid transparent; border-radius: 8px; cursor: pointer; transition: all 0.3s;\"><img src=\"assets/graph_m2_p5_1.svg\" alt=\"Opción C\" style=\"background:white; border-radius:8px; width:250px;\"><br><strong style=\"font-size:1.5rem;\">C</strong></div>\n<div class=\"graph-choice\" data-letter=\"D\" onclick=\"selectGraph('D')\" style=\"text-align:center; padding: 10px; border: 2px solid transparent; border-radius: 8px; cursor: pointer; transition: all 0.3s;\"><img src=\"assets/graph_m2_p5_0.svg\" alt=\"Opción D\" style=\"background:white; border-radius:8px; width:250px;\"><br><strong style=\"font-size:1.5rem;\">D</strong></div>\n</div>"
      }
    ]
  },
  {
    "mission_id": "simulacro3",
    "title": "Simulacro Parcial 2 (V3)",
    "exercises": [
      {
        "id": 1,
        "question": "Calcule los siguientes límites cuando $x \\to \\infty$:\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Calcule el límite de la función racional:\n    \\[ A = \\lim_{x \\to \\infty} \\frac{(5x^2 + 1)(10x + 1)}{2x^3 + 1} \\]\n    \\item Calcule el límite con radicales:\n    \\[ B = \\lim_{x \\to \\infty} \\left( \\sqrt{x^2 + 7x} - \\sqrt{x^2 + 11x} \\right) \\]\n\\end{enumerate}",
        "solution": "Solución (Extraído de E5, Ejercicio 1):\n\\begin{enumerate}[label=(\\alph*)]\n    \\item En el numerador, el término dominante (de mayor grado) al multiplicar es $(5x^2)(10x) = 50x^3$. El denominador tiene como término dominante $2x^3$.\n    Dado que ambos polinomios tienen el mismo grado (grado 3), el límite al infinito es el cociente de sus coeficientes principales.\n    \\[ A = \\frac{50}{2} = 25. \\]\n    \\item Multiplicamos y dividimos por el conjugado:\n    \\begin{align*}\n    B &= \\lim_{x \\to \\infty} \\frac{(\\sqrt{x^2 + 7x} - \\sqrt{x^2 + 11x})(\\sqrt{x^2 + 7x} + \\sqrt{x^2 + 11x})}{\\sqrt{x^2 + 7x} + \\sqrt{x^2 + 11x}} \\\\\n    &= \\lim_{x \\to \\infty} \\frac{(x^2 + 7x) - (x^2 + 11x)}{\\sqrt{x^2 + 7x} + \\sqrt{x^2 + 11x}} \\\\\n    &= \\lim_{x \\to \\infty} \\frac{-4x}{x\\sqrt{1 + \\frac{7}{x}} + x\\sqrt{1 + \\frac{11}{x}}} \\\\\n    &= \\lim_{x \\to \\infty} \\frac{-4}{\\sqrt{1 + \\frac{7}{x}} + \\sqrt{1 + \\frac{11}{x}}} \\\\\n    &= \\frac{-4}{\\sqrt{1} + \\sqrt{1}} = \\frac{-4}{2} = -2.\n    \\end{align*}\n\\end{enumerate}",
        "answers": {
          "A": "25",
          "B": "-2"
        },
        "graph_options": ""
      },
      {
        "id": 2,
        "question": "Se recuerda que la función indicatriz de un intervalo $J$, $\\mathbf{I}_J(x)$, vale 1 si $x \\in J$ y 0 si no.\nSean las funciones:\n\\[ \\phi(x) = 78 \\cdot \\mathbf{I}_{(A, \\infty)}(x), \\quad f(x) = x^2 - B x + 40^2 \\]\ndonde $A$ y $B$ son constantes positivas a ser determinadas. Se sabe que la función producto:\n\\[ g(x) = f(x) \\cdot \\phi(x) \\]\nes diferenciable en todo $x \\in \\mathbb{R}$.\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Encuentre el valor de $A$.\n    \\item Encuentre el valor de $B$.\n\\end{enumerate}",
        "solution": "Solución (Extraído de E7, Ejercicio 4):\n\\begin{enumerate}[label=(\\alph*)]\n    \\item La función $g(x)$ vale $78f(x)$ para $x > A$, y vale $0$ para $x \\leq A$.\n    Para que $g(x)$ sea diferenciable en el \"salto\" $x = A$, debe ser primero continua y luego tener derivadas laterales iguales.\n    Continuidad en $x=A$:\n    \\[ g(A^-) = 0 \\quad \\text{y} \\quad g(A^+) = 78(A^2 - BA + 40^2) \\]\n    Por tanto, $A^2 - BA + 40^2 = 0$. (Ecuación 1)\n    \\item Diferenciabilidad en $x=A$:\n    \\[ g'(A^-) = 0 \\quad \\text{y} \\quad g'(A^+) = 78(2A - B) \\]\n    Por tanto, $2A - B = 0 \\implies B = 2A$. (Ecuación 2)\n    Sustituimos $B=2A$ en la Ecuación 1:\n    \\[ A^2 - (2A)A + 40^2 = 0 \\implies A^2 - 2A^2 + 1600 = 0 \\implies -A^2 + 1600 = 0 \\implies A^2 = 1600. \\]\n    Como $A$ es positiva, $A = 40$.\n    Sabiendo que $A=40$, deducimos que $B = 2(40) = 80$.\n    Resultados: $A=40, B=80$.\n\\end{enumerate}",
        "answers": {
          "A": "40",
          "B": "80"
        },
        "graph_options": ""
      },
      {
        "id": 3,
        "question": "Sea la función $f(x) = 12 \\cdot x^7 + \\exp\\left( \\frac{3}{x^9} \\right)$. Su derivada se puede expresar en la siguiente forma:\n\\[ f'(x) = A x^B + \\frac{C \\cdot \\exp(3/x^9)}{x^D} \\]\ndonde $A, B, C, D$ son constantes a determinar.\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Encuentre el valor de $A$.\n    \\item Encuentre el valor de $B$.\n    \\item Encuentre el valor de $C$.\n    \\item Encuentre el valor de $D$.\n\\end{enumerate}",
        "solution": "Solución (Extraído de E8, Ejercicio 1):\nDerivamos la función término a término usando regla de potencia y regla de la cadena:\n\\begin{align*}\nf'(x) &= 12(7)x^{7-1} + \\exp\\left( 3x^{-9} \\right) \\cdot \\frac{d}{dx}[3x^{-9}] \\\\\n&= 84x^6 + \\exp\\left( 3/x^9 \\right) \\cdot (-27x^{-10}) \\\\\n&= 84x^6 - \\frac{27 \\cdot \\exp(3/x^9)}{x^{10}}\n\\end{align*}\nComparando con $Ax^B + \\frac{C \\cdot \\exp(3/x^9)}{x^D}$:\n$A = 84$, $B = 6$, $C = -27$, $D = 10$.",
        "answers": {
          "A": "84",
          "B": "6",
          "C": "-27",
          "D": "10"
        },
        "graph_options": ""
      },
      {
        "id": 4,
        "question": "Considere la función polinómica continua $f(x) = x^3 - 4x + 1$. \nSe desea garantizar que la ecuación $f(x) = \\xi$ tiene al menos una raíz en el intervalo cerrado $[0, 2]$.\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Evalúe $A = f(0)$.\n    \\item Evalúe $B = f(2)$.\n    \\item Con base en el Teorema del Valor Intermedio (TVI), si $\\xi = 0$, ¿garantiza el teorema que existe al menos una raíz en el intervalo $[0, 2]$? (Responda Sí o No).\n\\end{enumerate}",
        "solution": "Solución TVI (Problema Nuevo):\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Evaluamos la función en el extremo inferior:\n    $A = f(0) = (0)^3 - 4(0) + 1 = 1$.\n    \\item Evaluamos la función en el extremo superior:\n    $B = f(2) = (2)^3 - 4(2) + 1 = 8 - 8 + 1 = 1$.\n    \\item Para aplicar el Teorema del Valor Intermedio directamente y concluir que una función toma todos los valores intermedios entre $f(a)$ y $f(b)$, el valor a buscar debe estar estrictamente entre ellos. En este caso, $f(0)=1$ y $f(2)=1$. El intervalo cerrado de valores garantizados entre estos dos extremos es simplemente el punto $\\{1\\}$. \n    Como $0$ no se encuentra entre $1$ y $1$, el teorema de forma directa \\textbf{No} garantiza la existencia de una raíz para $f(x)=0$ basándose únicamente en los extremos $0$ y $2$. (Aunque la raíz pueda existir analizando otros puntos, el teorema con estos extremos no lo asegura).\n\\end{enumerate}",
        "answers": {
          "A": "1",
          "B": "1",
          "C": "no"
        },
        "graph_options": ""
      },
      {
        "id": 5,
        "question": "Considere que la derivada enésima de una función multiplicada por sí misma cumple ciertas propiedades. Dada una función $h(x) = x \\cdot e^{x}$, su $n$-ésima derivada evaluada en $x=0$ se denota $h^{(n)}(0)$.\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Calcule $A = h'(0)$.\n    \\item Calcule $B = h''(0)$.\n    \\item Deduzca el patrón y calcule el valor de $C = h^{(40)}(0)$.\n\\end{enumerate}",
        "solution": "Solución Derivadas (Problema Nuevo):\n\\begin{enumerate}[label=(\\alph*)]\n    \\item Derivamos $h(x)$ usando la regla del producto:\n    $h'(x) = 1 \\cdot e^x + x \\cdot e^x = (x+1)e^x$.\n    Evaluando en $x=0$: $A = (0+1)e^0 = 1$.\n    \\item Volvemos a derivar:\n    $h''(x) = \\frac{d}{dx}[(x+1)e^x] = 1 \\cdot e^x + (x+1)e^x = (x+2)e^x$.\n    Evaluando en $x=0$: $B = (0+2)e^0 = 2$.\n    \\item Observando el patrón:\n    $h^{(1)}(x) = (x+1)e^x$\n    $h^{(2)}(x) = (x+2)e^x$\n    $h^{(n)}(x) = (x+n)e^x$\n    Evaluando en $x=0$ para $n=40$:\n    $C = (0+40)e^0 = 40$.\n\\end{enumerate}",
        "answers": {
          "A": "1",
          "B": "2",
          "C": "40"
        },
        "graph_options": ""
      },
      {
        "id": 6,
        "question": "Esboce en la hoja de respuestas la gráfica de una única función $k : [-4, 4] \\to \\mathbb{R}$ que cumpla todas las siguientes condiciones:\n\\begin{itemize}\n    \\item $k(-2) = 0$\n    \\item $\\lim_{x \\to 1^-} k(x) = -\\infty$\n    \\item $\\lim_{x \\to 1^+} k(x) = \\infty$\n    \\item $k(0) = -2$ y es un mínimo local (la función decrece antes de 0 y crece después).\n\\end{itemize}\nA partir de la gráfica, identifique:\n\\begin{enumerate}[label=(\\alph*)]\n    \\item La asíntota vertical de la función, denotada como la recta $x = A$. Encuentre $A$.\n\\end{enumerate}",
        "solution": "Solución de la gráfica (Problema Nuevo):\nLa gráfica debe mostrar una curva que pasa por $(-2, 0)$, desciende hasta un mínimo suave en $(0,-2)$, y luego crece precipitadamente hacia el infinito positivo a medida que se acerca a $x=1$ por la izquierda. Ah, un momento, las condiciones dicen $\\lim_{x \\to 1^-} k(x) = -\\infty$. Pero pedimos que crezca después de 0. Si crece, no puede ir a $-\\infty$. Ajustemos la gráfica o el solucionario para reflejar el comportamiento real: la curva puede crecer de $0$ a $0.5$, tener un máximo, y luego bajar hacia $-\\infty$ en $x=1^-$.\nPor la derecha de $x=1$, desciende desde $+\\infty$.\n\n<div style=\"text-align:center; color:var(--success); font-size: 1.2rem; margin-bottom:1rem;\">Gráfica Correcta:</div><img src=\"assets/graph_m3_p5_0.svg\" class=\"math-graph\" style=\"width:300px; display:block; margin:auto;\">\n\n\\begin{enumerate}[label=(\\alph*)]\n    \\item La función posee una asíntota vertical donde los límites laterales tienden a infinito. Esto ocurre en $x=1$, por tanto $A=1$.\n\\end{enumerate}",
        "answers": {
          "A": "1",
          "graph": "A"
        },
        "graph_options": "<div class=\"graph-options\" style=\"display:flex; flex-wrap:wrap; gap: 1rem; justify-content:center; margin-top:1rem;\">\n<div class=\"graph-choice\" data-letter=\"A\" onclick=\"selectGraph('A')\" style=\"text-align:center; padding: 10px; border: 2px solid transparent; border-radius: 8px; cursor: pointer; transition: all 0.3s;\"><img src=\"assets/graph_m3_p5_0.svg\" alt=\"Opción A\" style=\"background:white; border-radius:8px; width:250px;\"><br><strong style=\"font-size:1.5rem;\">A</strong></div>\n<div class=\"graph-choice\" data-letter=\"B\" onclick=\"selectGraph('B')\" style=\"text-align:center; padding: 10px; border: 2px solid transparent; border-radius: 8px; cursor: pointer; transition: all 0.3s;\"><img src=\"assets/graph_m3_p5_2.svg\" alt=\"Opción B\" style=\"background:white; border-radius:8px; width:250px;\"><br><strong style=\"font-size:1.5rem;\">B</strong></div>\n<div class=\"graph-choice\" data-letter=\"C\" onclick=\"selectGraph('C')\" style=\"text-align:center; padding: 10px; border: 2px solid transparent; border-radius: 8px; cursor: pointer; transition: all 0.3s;\"><img src=\"assets/graph_m3_p5_1.svg\" alt=\"Opción C\" style=\"background:white; border-radius:8px; width:250px;\"><br><strong style=\"font-size:1.5rem;\">C</strong></div>\n<div class=\"graph-choice\" data-letter=\"D\" onclick=\"selectGraph('D')\" style=\"text-align:center; padding: 10px; border: 2px solid transparent; border-radius: 8px; cursor: pointer; transition: all 0.3s;\"><img src=\"assets/graph_m3_p5_3.svg\" alt=\"Opción D\" style=\"background:white; border-radius:8px; width:250px;\"><br><strong style=\"font-size:1.5rem;\">D</strong></div>\n</div>"
      }
    ]
  }
];