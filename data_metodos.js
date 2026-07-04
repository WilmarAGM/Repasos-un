/* ============================================================
   MÉTODOS NUMÉRICOS QUEST — Banco de ejercicios
   Segundo Parcial (3006907) — UNAL Sede Medellín
   Cada ejercicio combina:
     - answers: {clave: {value, weight}}  -> auto-calificadas
     - rubric:  [{text, weight}, ...]      -> autoevaluación del procedimiento
   Los pesos de cada problema replican el porcentaje real del examen.
   ============================================================ */

/* ---------------- MISIÓN 1: Noviembre 2025 (1.pdf) ---------------- */
const MN_EXAM_2025 = [
  {
    id: 1,
    title: "Cuadratura con derivada",
    points: "25%",
    question: `Considere la siguiente regla de cuadratura
\\[ \\int_0^1 f(x)dx \\approx Af(0) + Bf(1) + Cf'(0). \\]
\\begin{enumerate}
\\item[a.] (15\\%) Halle los valores de $A, B$ y $C$ de tal forma que la regla de cuadratura tenga el mayor grado de precisión o exactitud posible (ojo: tenga muy en cuenta la presencia de la derivada).
\\item[b.] (10\\%) Aproxime el valor de la integral
\\[ \\int_0^2 e^{y^2}dy \\]
usando la regla obtenida en el literal anterior.
\\end{enumerate}`,
    solution: `Se busca $A,B,C$ imponiendo exactitud para $f(x)=1,x,x^2,\\dots$

\\textbf{Para $f(x)=1$}: $f'\\equiv 0$, $\\int_0^1 1\\,dx=1$. La fórmula da $A+B$. $\\Rightarrow A+B=1$ (1)

\\textbf{Para $f(x)=x$}: $f'(x)=1$, $\\int_0^1 x\\,dx=\\tfrac12$. La fórmula da $B(1)+C(1)=B+C$. $\\Rightarrow B+C=\\tfrac12$ (2)

\\textbf{Para $f(x)=x^2$}: $f'(x)=2x\\Rightarrow f'(0)=0$, $\\int_0^1 x^2\\,dx=\\tfrac13$. La fórmula da $B$. $\\Rightarrow B=\\tfrac13$ (3)

De (3): $B=\\tfrac13$. De (2): $C=\\tfrac12-\\tfrac13=\\tfrac16$. De (1): $A=1-\\tfrac13=\\tfrac23$.

\\textbf{Verificación del grado}: para $f(x)=x^3$ ($f'(0)=0$): exacto $=\\tfrac14$; fórmula $=B=\\tfrac13\\neq\\tfrac14$. El grado de precisión es exactamente \\textbf{2}.
\\[ \\boxed{A=\\tfrac23,\\ B=\\tfrac13,\\ C=\\tfrac16} \\]

\\textbf{b)} Cambio de variable $y=2x$, $dy=2dx$, $x\\in[0,1]$:
\\[ \\int_0^2 e^{y^2}dy = 2\\int_0^1 e^{4x^2}dx, \\qquad f(x)=e^{4x^2}. \\]
Con $f(0)=1$, $f(1)=e^4$, $f'(x)=8xe^{4x^2}\\Rightarrow f'(0)=0$:
\\[ \\int_0^1 f(x)dx \\approx \\tfrac23(1)+\\tfrac13(e^4)+\\tfrac16(0) = \\tfrac23+\\tfrac{e^4}{3}. \\]
Por lo tanto
\\[ \\int_0^2 e^{y^2}dy \\approx 2\\left(\\tfrac23+\\tfrac{e^4}{3}\\right) = \\boxed{\\tfrac43+\\tfrac{2e^4}{3} \\approx 37.7321}. \\]`,
    answers: {
      "A": { value: "2/3", weight: 3 },
      "B": { value: "1/3", weight: 3 },
      "C": { value: "1/6", weight: 3 },
      "Integral": { value: "37.7321", weight: 4 }
    },
    rubric: [
      { text: "Planteé las tres ecuaciones de exactitud usando $f=1,x,x^2$ y evalué correctamente $f'(0)$ en cada caso.", weight: 3 },
      { text: "Verifiqué con $f=x^3$ que la fórmula falla y concluí que el grado de precisión es exactamente 2.", weight: 3 },
      { text: "Hice el cambio de variable $y=2x$ (con su jacobiano $dy=2dx$) de forma correcta.", weight: 3 },
      { text: "Evalué $f(0)$, $f(1)$ y $f'(0)$ de $e^{4x^2}$ correctamente en la fórmula de cuadratura.", weight: 3 }
    ]
  },
  {
    id: 2,
    title: "Linealización: Ley de Arrhenius",
    points: "20%",
    question: `La Ley de Arrhenius describe cómo varía la constante de velocidad ($k$) de una reacción química con la temperatura absoluta ($T$):
\\[ k = A e^{-\\frac{E_a}{RT}} \\]
donde $A$ es el factor de frecuencia, $E_a$ la energía de activación y $R$ la constante de los gases. Datos:
\\begin{center}
\\begin{tabular}{c|c|c|c|c|c}
$T$ & 300 & 320 & 340 & 360 & 380 \\\\
\\hline
$k$ & 0.012 & 0.021 & 0.041 & 0.077 & 0.150
\\end{tabular}
\\end{center}
\\begin{enumerate}
\\item[a.] (5\\%) Si $R=8.314$, indique el cambio de variables apropiado para obtener la ecuación linealizada $Y=AX+B$. Indique claramente qué son $Y,X,A,B$.
\\item[b.] (10\\%) Plantee el sistema de ecuaciones normales a resolver para determinar $A$ y $B$.
\\item[c.] (5\\%) Indique cómo se recupera el valor de $E_a$.
\\end{enumerate}`,
    solution: `\\textbf{a)} Aplicando logaritmo natural: $\\ln k = \\ln A - \\dfrac{E_a}{R}\\cdot\\dfrac1T$.
\\[ \\boxed{Y=\\ln k,\\quad X=\\frac1T}, \\qquad \\boxed{\\mathbf{A}=-\\frac{E_a}{R}},\\quad \\boxed{\\mathbf{B}=\\ln A_{\\text{frec}}}. \\]

\\textbf{b)} Con $X_i=1/T_i$, $Y_i=\\ln k_i$: $\\sum X_i\\approx0.014809$, $\\sum X_i^2\\approx4.4169\\times10^{-5}$, $\\sum Y_i\\approx-15.9413$, $\\sum X_iY_i\\approx-0.048325$.
\\[ \\boxed{\\begin{cases} 4.4169\\times10^{-5}\\,\\mathbf{A}+0.014809\\,\\mathbf{B}=-0.048325\\\\ 0.014809\\,\\mathbf{A}+5\\,\\mathbf{B}=-15.9413 \\end{cases}} \\]
(Resolviendo: $\\mathbf{A}\\approx-3603.73$, $\\mathbf{B}\\approx7.4852$.)

\\textbf{c)} Como $\\mathbf{A}=-E_a/R$:
\\[ \\boxed{E_a = -\\mathbf{A}\\cdot R \\approx 29961.4} \\]`,
    answers: null,
    rubric: [
      { text: "Apliqué logaritmo natural a ambos lados y obtuve $\\ln k = \\ln A - (E_a/R)(1/T)$.", weight: 3 },
      { text: "Identifiqué correctamente $Y=\\ln k$, $X=1/T$, con pendiente $\\mathbf{A}=-E_a/R$ e intercepto $\\mathbf{B}=\\ln A$.", weight: 2 },
      { text: "Calculé correctamente los valores $X_i=1/T_i$ e $Y_i=\\ln k_i$ para los 5 datos.", weight: 4 },
      { text: "Planteé el sistema 2x2 de ecuaciones normales con las sumas $\\sum X_i,\\sum X_i^2,\\sum Y_i,\\sum X_iY_i$ correctas.", weight: 6 },
      { text: "Indiqué que $E_a=-\\mathbf{A}\\cdot R$, usando la pendiente hallada en el literal anterior.", weight: 5 }
    ]
  },
  {
    id: 3,
    title: "Interpolación de $f(x)=\\cos(x)/x^2$",
    points: "30%",
    question: `Considere la función $f(x)=\\dfrac{\\cos(x)}{x^2}$.
\\begin{enumerate}
\\item[a.] (5\\%) Si interpolamos $f$ con un polinomio de Lagrange en $[1,3]$, en los nodos $x_0=1,x_1=2,x_2=3$, obtenemos un único polinomio de grado menor o igual que ___, de la forma $p(x)=\\_\\_L_0(x)+\\_\\_L_1(x)+\\_\\_L_2(x)$ (complete con valores numéricos).
\\item[b.] (8\\%) Usando el método de Newton, el valor de la diferencia dividida $f[1,2,3]$ es: (i) 0.5403 (ii) -0.3644 (iii) 0.3192 (iv) Ninguna de las anteriores.
\\item[c.] (7\\%) Si interpolamos con un polinomio de grado 3 que minimice el error, el valor de uno de los nodos es: (i) 2.8660254 (ii) 2 (iii) 1.61731657 (iv) Ninguno de las anteriores.
\\item[d.] (10\\%) Para aproximar $\\int_1^\\infty f(x)dx$, primero se hace el cambio de variable $x=\\_\\_$ y luego se usa la regla abierta de 4 puntos $\\int_a^b f(x)dx\\approx \\frac{b-a}{2}\\left[f\\left(\\frac{2a+b}{3}\\right)+f\\left(\\frac{a+2b}{3}\\right)\\right]$ para obtener: (i) -0.4596 (ii) 0.4596 (iii) -0.1613 (iv) 0.1613 (v) Ninguna de las anteriores.
\\end{enumerate}`,
    solution: `Evaluamos: $f(1)=\\cos(1)=0.5403$, $f(2)=\\cos(2)/4=-0.1040$, $f(3)=\\cos(3)/9=-0.1100$.

\\textbf{a)} Grado $\\le \\mathbf{2}$: $p(x)=\\mathbf{0.5403}\\,L_0(x)+\\mathbf{-0.1040}\\,L_1(x)+\\mathbf{-0.1100}\\,L_2(x)$.

\\textbf{b)} $f[1,2]=\\dfrac{f(2)-f(1)}{1}=-0.6443$, $f[2,3]=\\dfrac{f(3)-f(2)}{1}=-0.0060$.
\\[ f[1,2,3]=\\frac{f[2,3]-f[1,2]}{2}=\\frac{-0.0060+0.6443}{2}=0.3192. \\]
\\textbf{Respuesta correcta: iii) 0.3192.}

\\textbf{c)} Para grado 3 se requieren 4 nodos de Chebyshev: $z_k=\\cos\\left(\\frac{(2k+1)\\pi}{8}\\right)$. Mapeados a $[1,3]$ vía $x_k=2+z_k$: $x_0=2.9239,x_1=2.3827,x_2=1.6173,x_3=1.0761$.
\\textbf{Respuesta correcta: iii) 1.61731657.}

\\textbf{d)} Cambio de variable $\\boxed{x=1/t}$, que transforma $\\int_1^\\infty \\frac{\\cos x}{x^2}dx$ en $\\int_0^1 \\cos(1/t)\\,dt$.
Con la regla abierta de 4 puntos en $[0,1]$: nodos $1/3,2/3$.
\\[ \\int_0^1\\cos(1/t)dt \\approx \\frac12[\\cos(3)+\\cos(1.5)] = \\frac12[-0.9900+0.0707]=-0.4596. \\]
\\textbf{Respuesta correcta: i) -0.4596.}`,
    answers: {
      "grado": { value: "2", weight: 1 },
      "f1": { value: "0.5403", weight: 1.33 },
      "f2": { value: "-0.1040", weight: 1.33 },
      "f3": { value: "-0.1100", weight: 1.34 },
      "fdd_123": { value: "0.3192", weight: 8 },
      "nodo_c": { value: "1.61731657", weight: 7 },
      "aprox_d": { value: "-0.4596", weight: 7 }
    },
    rubric: [
      { text: "Identifiqué el cambio de variable $x=1/t$ para transformar la integral impropia en $\\int_0^1\\cos(1/t)dt$.", weight: 3 }
    ]
  },
  {
    id: 4,
    title: "Spline cúbico natural",
    points: "25%",
    question: `Considere $S(x)$ definida por:
\\[ S(x) = \\begin{cases} 1+a(x-1)+b(x-1)^3 & 1\\le x\\le 2 \\\\ 1+c(x-2)-\\frac34(x-2)^2+d(x-2)^3 & 2\\le x\\le 3 \\end{cases} \\]
\\begin{enumerate}
\\item[a.] (20\\%) Determine los valores de $a,b,c,d$ que hacen que $S(x)$ sea un spline cúbico \\textbf{natural} para el conjunto de puntos:
\\begin{center}
\\begin{tabular}{c|c|c}
$x$ & 1 & 2 \\\\ \\hline
\\end{tabular}
\\end{center}
con datos $(1,1),(2,1),(3,0)$.
\\item[b.] (5\\%) Obtenga el valor aproximado de $f(3/2)$.
\\end{enumerate}`,
    solution: `\\textbf{Continuidad $C^0$ en $x=2$}: $S_0(2)=1+a+b=1\\Rightarrow a+b=0$ (i)

\\textbf{Continuidad $C^0$ en $x=3$}: $S_1(3)=1+c-\\frac34+d=0\\Rightarrow c+d=-\\frac14$ (ii)

\\textbf{Continuidad $C^1$ en $x=2$}: $S_0'(2)=a+3b$; $S_1'(2)=c \\Rightarrow a+3b=c$ (iii)

\\textbf{Continuidad $C^2$ en $x=2$}: $S_0''(2)=6b$; $S_1''(2)=-\\frac32 \\Rightarrow 6b=-\\frac32 \\Rightarrow \\boxed{b=-\\frac14}$

\\textbf{Natural en $x=1$}: $S_0''(1)=6b(0)=0$ automáticamente.

\\textbf{Natural en $x=3$}: $S_1''(3)=-\\frac32+6d=0 \\Rightarrow \\boxed{d=\\frac14}$

De (ii): $c=-\\frac14-\\frac14=-\\frac12$. De (iii): $a=c-3b=-\\frac12+\\frac34=\\frac14$. Se verifica (i): $a+b=0$. ✓

\\[ \\boxed{a=\\frac14,\\ b=-\\frac14,\\ c=-\\frac12,\\ d=\\frac14} \\]

\\textbf{b)} $x=3/2\\in[1,2]$, se usa $S_0$:
\\[ f(3/2)\\approx S_0(3/2)=1+\\frac14\\left(\\frac12\\right)-\\frac14\\left(\\frac12\\right)^3=1+\\frac18-\\frac1{32}=\\boxed{\\frac{35}{32}=1.09375} \\]`,
    answers: {
      "a": { value: "1/4", weight: 3 },
      "b": { value: "-1/4", weight: 3 },
      "c": { value: "-1/2", weight: 3 },
      "d": { value: "1/4", weight: 3 },
      "f32": { value: "1.09375", weight: 5 }
    },
    rubric: [
      { text: "Planteé correctamente las condiciones de continuidad $C^0$, $C^1$ y $C^2$ en el nodo interior $x=2$.", weight: 4 },
      { text: "Apliqué correctamente las DOS condiciones naturales ($S''=0$ en ambos extremos $x=1$ y $x=3$).", weight: 4 }
    ]
  }
];

/* ---------------- MISIÓN 2: Supletorio Semestre 2016-2 ---------------- */
const MN_SP2016 = [
  {
    id: 1,
    title: "Mínimos cuadrados: ajuste $y=B/(A+x)$",
    points: "15%",
    question: `Encuentre el ajuste para una curva de la forma $y=\\dfrac{B}{A+x}$ para los siguientes datos, mediante la teoría de mínimos cuadrados.
\\begin{center}
\\begin{tabular}{c|c|c|c|c|c}
$x_i$ & -1 & 0 & 1 & 2 & 5 \\\\
\\hline
$y_i$ & $-\\frac12$ & $\\frac14$ & $\\frac15$ & $\\frac27$ & $\\frac53$
\\end{tabular}
\\end{center}`,
    solution: `Tomando el recíproco: $\\dfrac1y=\\dfrac{A+x}{B}=\\dfrac1B x+\\dfrac{A}{B}$.
\\[ \\boxed{Y=\\frac1y,\\ X=x}, \\qquad \\text{pendiente}=\\frac1B,\\ \\text{intercepto}=\\frac{A}{B}. \\]
Calculando $Y_i=1/y_i$: $-2,4,5,3.5,0.6$. Con $n=5$: $\\sum X_i=7$, $\\sum X_i^2=31$, $\\sum Y_i=11.1$, $\\sum X_iY_i=17$.
\\[ \\begin{pmatrix}31 & 7\\\\ 7 & 5\\end{pmatrix}\\begin{pmatrix}m\\\\b\\end{pmatrix}=\\begin{pmatrix}17\\\\11.1\\end{pmatrix} \\Rightarrow m=\\frac{73}{1060}\\approx0.0689,\\ b=\\frac{2251}{1060}\\approx2.1236. \\]
Recuperando: $B=1/m\\approx14.5205$, $A=b\\cdot B\\approx30.8356$.
\\[ \\boxed{y\\approx \\frac{14.5205}{30.8356+x}} \\]`,
    answers: {
      "A": { value: "30.8356", weight: 4 },
      "B": { value: "14.5205", weight: 4 }
    },
    rubric: [
      { text: "Linealicé correctamente tomando $Y=1/y$, $X=x$, obteniendo $Y=(1/B)X+(A/B)$.", weight: 4 },
      { text: "Calculé correctamente las sumas $\\sum X_i,\\sum X_i^2,\\sum Y_i,\\sum X_iY_i$ y resolví el sistema 2x2.", weight: 3 }
    ]
  },
  {
    id: 2,
    title: "Diferencias divididas",
    points: "15%",
    question: `Considere la siguiente tabla de diferencias divididas:
\\begin{center}
\\begin{tabular}{c|c|c|c}
$x_k$ & $f[x_k]$ & $f[x_{k-1},x_k]$ & $f[x_{k-2},x_{k-1},x_k]$ \\\\
\\hline
$x_0=-1$ & $\\gamma$ & & \\\\
$x_1=1$ & $\\alpha$ & $-3$ & \\\\
$x_2=2.5$ & $4$ & $\\beta$ & $4$
\\end{tabular}
\\end{center}
Encuentre el valor de $\\alpha=f(1)$.`,
    solution: `\\[ f[x_0,x_1]=\\frac{\\alpha-\\gamma}{2}=-3 \\Rightarrow \\alpha-\\gamma=-6 \\quad (1) \\]
\\[ f[x_1,x_2]=\\frac{4-\\alpha}{1.5}=\\beta \\quad (2) \\]
\\[ f[x_0,x_1,x_2]=\\frac{\\beta+3}{3.5}=4 \\Rightarrow \\beta=11 \\quad (3) \\]
Sustituyendo (3) en (2): $\\dfrac{4-\\alpha}{1.5}=11 \\Rightarrow 4-\\alpha=16.5 \\Rightarrow \\boxed{\\alpha=-12.5}$.
(De paso, de (1): $\\gamma=\\alpha+6=-6.5$.)
\\[ \\boxed{\\alpha=f(1)=-\\frac{25}{2}=-12.5} \\]`,
    answers: {
      "alpha": { value: "-12.5", weight: 7 }
    },
    rubric: [
      { text: "Trabajé la tabla de atrás hacia adelante (de la diferencia de mayor orden hacia las de menor orden) en el orden correcto.", weight: 8 }
    ]
  },
  {
    id: 3,
    title: "Spline cúbico natural",
    points: "25%",
    question: `Considere $S(x)$ definida por:
\\[ S(x) = \\begin{cases} 1+a(x-1)+b(x-1)^3 & 1\\le x\\le 2 \\\\ 1+c(x-2)-\\frac34(x-2)^2+d(x-2)^3 & 2\\le x\\le 3 \\end{cases} \\]
\\begin{enumerate}
\\item[a.] (20\\%) Determine los valores de $a,b,c,d$ que hacen que $S(x)$ sea un spline cúbico natural para $(1,1),(2,1),(3,0)$.
\\item[b.] (5\\%) Obtenga el valor aproximado de $f(3/2)$.
\\end{enumerate}`,
    solution: `\\textbf{Continuidad $C^0$ en $x=2$}: $a+b=0$. \\textbf{En $x=3$}: $c+d=-\\frac14$.

\\textbf{Continuidad $C^1$ en $x=2$}: $a+3b=c$.

\\textbf{Continuidad $C^2$ en $x=2$}: $6b=-\\frac32 \\Rightarrow \\boxed{b=-\\frac14}$.

\\textbf{Natural en $x=1$}: se cumple automáticamente. \\textbf{Natural en $x=3$}: $-\\frac32+6d=0\\Rightarrow \\boxed{d=\\frac14}$.

De $c+d=-\\frac14$: $c=-\\frac12$. De $a+3b=c$: $a=\\frac14$. Se verifica $a+b=0$. ✓

\\[ \\boxed{a=\\frac14,\\ b=-\\frac14,\\ c=-\\frac12,\\ d=\\frac14} \\]

\\textbf{b)} $f(3/2)\\approx S_0(3/2)=1+\\frac14(\\frac12)-\\frac14(\\frac12)^3=\\boxed{\\frac{35}{32}=1.09375}$`,
    answers: {
      "a": { value: "1/4", weight: 3 },
      "b": { value: "-1/4", weight: 3 },
      "c": { value: "-1/2", weight: 3 },
      "d": { value: "1/4", weight: 3 },
      "f32": { value: "1.09375", weight: 5 }
    },
    rubric: [
      { text: "Planteé correctamente las condiciones de continuidad $C^0$, $C^1$ y $C^2$ en el nodo interior $x=2$.", weight: 4 },
      { text: "Apliqué correctamente las DOS condiciones naturales ($S''=0$ en ambos extremos $x=1$ y $x=3$).", weight: 4 }
    ]
  },
  {
    id: 4,
    title: "Cuadratura de dos puntos y aplicación",
    points: "25%",
    question: `Considere la fórmula de cuadratura $\\displaystyle\\int_0^1 f(x)dx \\approx Af(0)+Bf(z)$.
\\begin{enumerate}
\\item[i.] (15\\%) Calcule los coeficientes $A$ y $B$ y el nodo $z$ de tal manera que la fórmula sea exacta para todos los polinomios de grado tan alto como sea posible. ¿Cuál es el grado de precisión?
\\item[ii.] (10\\%) Use la fórmula anterior para dar un valor aproximado de $\\displaystyle\\int_{\\pi/4}^{\\pi/3}\\cos(x^2)dx$.
\\end{enumerate}`,
    solution: `Imponiendo exactitud para $f=1,x,x^2$: $A+B=1$; $Bz=\\frac12$; $Bz^2=\\frac13$.
Dividiendo: $z=\\frac{1/3}{1/2}=\\frac23$. Luego $B=\\frac{1/2}{2/3}=\\frac34$, $A=1-\\frac34=\\frac14$.
Para $f=x^3$: exacto $\\frac14$; fórmula $Bz^3=\\frac29\\neq\\frac14$. \\textbf{Grado de precisión $=2$}.
\\[ \\boxed{A=\\frac14,\\ B=\\frac34,\\ z=\\frac23,\\ \\text{grado}=2} \\]

\\textbf{ii)} Con $a=\\pi/4,b=\\pi/3,h=b-a\\approx0.2618$, cambio de variable $x=a+ht$:
\\[ \\int_a^b g(x)dx \\approx h\\left[A\\,g(a)+B\\,g(a+hz)\\right], \\qquad g(x)=\\cos(x^2). \\]
El segundo nodo es $a+hz\\approx0.9599$.
\\[ \\int_{\\pi/4}^{\\pi/3}\\cos(x^2)dx \\approx 0.2618\\left[\\frac14\\cos(a^2)+\\frac34\\cos(0.9599^2)\\right] \\approx \\boxed{0.1721} \\]`,
    answers: {
      "A": { value: "1/4", weight: 3 },
      "B": { value: "3/4", weight: 3 },
      "z": { value: "2/3", weight: 3 },
      "aprox_ii": { value: "0.1721", weight: 7 }
    },
    rubric: [
      { text: "Verifiqué con $f=x^3$ que la fórmula falla, concluyendo que el grado de precisión es exactamente 2.", weight: 6 },
      { text: "Hice correctamente el cambio de variable $x=a+ht$ (con $a=\\pi/4$, $b=\\pi/3$) para aplicar la fórmula al intervalo del literal (ii).", weight: 3 }
    ]
  },
  {
    id: 5,
    title: "Regla del punto medio compuesta (deducción)",
    points: "20%",
    question: `Las fórmulas de Newton-Cotes abiertas no incluyen los extremos de $[a,b]$. Usan nodos $x_j=a+(j+1)h$, $j=-1,0,\\dots,n,n+1$, con $h=\\frac{b-a}{n+2}$. La regla del punto medio simple (2 subintervalos, $h=\\frac{b-a}{2}$) es
\\[ \\int_a^b f(x)dx=\\int_{x_{-1}}^{x_1}f(x)dx\\approx 2h\\,f(x_0). \\]
Deduzca la \\textbf{regla del punto medio compuesta} que se obtiene al tomar $h=\\frac{b-a}{n+2}$, nodos $x_j=a+(j+1)h$, para $n$ entero par mayor o igual a 2.`,
    solution: `Como $n$ es par, $n+2$ también, por lo que $[a,b]$ se divide en $n+2$ subintervalos de ancho $h$ agrupables en $\\frac{n+2}{2}$ bloques consecutivos de ancho $2h$:
\\[ [x_{-1},x_1],\\ [x_1,x_3],\\ \\dots,\\ [x_{n-1},x_{n+1}]. \\]
El bloque $i$-ésimo ($i=0,\\dots,n/2$) es $[x_{2i-1},x_{2i+1}]$, con punto medio $x_{2i}$:
\\[ \\int_{x_{2i-1}}^{x_{2i+1}} f(x)dx \\approx 2h\\,f(x_{2i}). \\]
Sumando sobre todos los bloques:
\\[ \\boxed{\\int_a^b f(x)dx \\approx 2h\\sum_{i=0}^{n/2}f(x_{2i}) = 2h\\left[f(x_0)+f(x_2)+\\cdots+f(x_n)\\right]} \\]`,
    answers: null,
    rubric: [
      { text: "Identifiqué que, al ser $n$ par, $[a,b]$ se puede dividir en $(n+2)/2$ bloques consecutivos de ancho $2h$.", weight: 7 },
      { text: "Apliqué la regla simple en cada bloque, usando como punto medio el nodo $x_{2i}$ correcto.", weight: 7 },
      { text: "Sumé correctamente sobre todos los bloques para obtener $2h\\sum_{i=0}^{n/2}f(x_{2i})$.", weight: 6 }
    ]
  }
];

/* ---------------- MISIÓN 3: Semestre 2017-1, Tema A ---------------- */
const MN_SP2017 = [
  {
    id: 1,
    title: "Determinación de coeficientes en un spline",
    points: "20%",
    question: `Determine (si existen) coeficientes $a,b,c$ de tal forma que la función
\\[ S(x)=\\begin{cases} 4+ax-\\frac{41}{5}x^2+\\frac{21}{5}x^3, & x\\in[0,1) \\\\ 1-\\frac{14}{5}(x-1)+b(x-1)^2-\\frac85(x-1)^3, & x\\in[1,2] \\\\ 1+c(x-2)-\\frac25(x-2)^2+\\frac15(x-2)^3, & x\\in(2,3] \\end{cases} \\]
sea un spline en $[0,3]$. ¿Es un spline cúbico natural?`,
    solution: `\\textbf{$C^0$ en $x=1$}: $S_0(1)=4+a-\\frac{41}5+\\frac{21}5=a\\Rightarrow$ comparando con $S_1(1)=1$: $\\boxed{a=1}$.

\\textbf{$C^1$ en $x=1$}: $S_0'(1)=a-\\frac{19}5$; $S_1'(1)=-\\frac{14}5$. Igualando: $a=1$ (consistente).

\\textbf{$C^2$ en $x=1$}: $S_0''(1)=\\frac{44}5$; $S_1''(1)=2b \\Rightarrow \\boxed{b=\\frac{22}5}$.

\\textbf{$C^0$ en $x=2$}: se cumple automáticamente. \\textbf{$C^1$ en $x=2$}: $S_1'(2)=\\frac65=S_2'(2)=c\\Rightarrow \\boxed{c=\\frac65}$.

\\textbf{$C^2$ en $x=2$}: se cumple automáticamente ($-\\frac45=-\\frac45$).

Con estos valores $S(x)$ \\textbf{sí es un spline cúbico} ($C^2$ en todo $[0,3]$).

\\textbf{¿Es natural?} $S_0''(0)=-\\frac{82}5\\neq0$ y $S_2''(3)=\\frac25\\neq0$. Como ninguna condición natural se cumple, \\textbf{NO es un spline cúbico natural}.`,
    answers: {
      "a": { value: "1", weight: 4 },
      "b": { value: "22/5", weight: 4 },
      "c": { value: "6/5", weight: 4 }
    },
    rubric: [
      { text: "Verifiqué correctamente la continuidad $C^0$, $C^1$ y $C^2$ en $x=1$ y $x=2$ (incluyendo el chequeo de consistencia).", weight: 4 },
      { text: "Evalué las dos condiciones naturales ($S_0''(0)$ y $S_2''(3)$) y concluí correctamente que NO es un spline natural.", weight: 4 }
    ]
  },
  {
    id: 2,
    title: "Diferencias divididas, Lagrange y Newton",
    points: "30%",
    question: `Considere $\\{(x_k,y_k)\\}_{k=0}^4$: $x_k=-2,-1,0,1,2$; $y_k=-39,1,1,\\alpha,23$.
\\begin{enumerate}
\\item[a.] (7\\%) El polinomio de Lagrange $P_4(x)=\\sum y_iL_i(x)$. Escriba el coeficiente $L_3(x)$ (asociado a $x_3=1$).
\\item[b.i] (15\\%) Complete la tabla de diferencias divididas: halle $\\alpha,\\beta,\\gamma$ (dados $f[x_0,x_1]=40$, $f[x_1,x_2]=0$, $f[x_2,x_3]=2$, $f[x_3,x_4]=20$, y las diferencias de orden superior consistentes).
\\item[b.ii] (8\\%) Halle el polinomio de interpolación de Newton en los nodos $-1,0,1,2$.
\\end{enumerate}`,
    solution: `\\textbf{a)} $L_3(x)=\\dfrac{(x+2)(x+1)(x-2)}{(1+2)(1+1)(1-2)}=\\boxed{\\dfrac{x(x+1)(x+2)(x-2)}{-6}}$.

\\textbf{b.i)} De $f[x_2,x_3]=\\frac{\\alpha-1}{1}=2\\Rightarrow \\boxed{\\alpha=3}$ (se verifica $f[x_3,x_4]=23-3=20$ ✓).

$\\beta=f[x_{-2},x_{-1},x_0]=\\dfrac{0-40}{2}=\\boxed{-20}$ (se verifica $f[x_{-1},x_0,x_1]=1$ y $f[x_{-2},\\dots,x_1]=7$, ambos consistentes con la tabla).

$\\gamma=f[x_{-2},\\dots,x_2]=\\dfrac{8/3-7}{4}=\\boxed{-\\dfrac{13}{12}}$.

\\textbf{b.ii)} Con $f[-1]=1,f[-1,0]=0,f[-1,0,1]=1,f[-1,0,1,2]=8/3$:
\\[ P_3(x)=1+0(x+1)+1(x+1)x+\\frac83(x+1)x(x-1) = \\boxed{\\frac83x^3+x^2-\\frac53x+1} \\]`,
    answers: {
      "alpha": { value: "3", weight: 5 },
      "beta": { value: "-20", weight: 5 },
      "gamma": { value: "-13/12", weight: 5 },
      "c3": { value: "8/3", weight: 2 },
      "c2": { value: "1", weight: 2 },
      "c1": { value: "-5/3", weight: 2 },
      "c0": { value: "1", weight: 2 }
    },
    rubric: [
      { text: "Escribí correctamente $L_3(x)$ como cociente de productos con el denominador evaluado en los nodos restantes.", weight: 7 }
    ]
  },
  {
    id: 3,
    title: "Newton-Cotes abierta compuesta ($n=3m+1$)",
    points: "15%",
    question: `La fórmula simple con $n=1$ (3 subintervalos) es $\\int_{x_{-1}}^{x_2}f(x)dx\\approx\\frac{3h}{2}[f(x_0)+f(x_1)]$. Deduzca la fórmula de Newton-Cotes abierta \\textbf{compuesta} que se obtiene al tomar $h=\\frac{b-a}{n+2}$, para $n$ entero de la forma $n=3m+1$ ($m\\in\\mathbb{N}, m\\ge1$).`,
    solution: `Con $n=3m+1$: $n+2=3(m+1)$, múltiplo de 3, por lo que $[a,b]$ se subdivide en $3(m+1)$ subintervalos agrupables en $m+1$ bloques de ancho $3h$:
\\[ [x_{-1},x_2],\\ [x_2,x_5],\\ \\dots,\\ [x_{n-2},x_{n+1}]. \\]
El bloque $k$-ésimo ($k=0,\\dots,m$) es $[x_{3k-1},x_{3k+2}]$, con nodos interiores $x_{3k},x_{3k+1}$:
\\[ \\int_{x_{3k-1}}^{x_{3k+2}} f(x)dx \\approx \\frac{3h}{2}[f(x_{3k})+f(x_{3k+1})]. \\]
Sumando sobre $k=0,\\dots,m$:
\\[ \\boxed{\\int_a^b f(x)dx \\approx \\frac{3h}{2}\\sum_{k=0}^{m}\\left[f(x_{3k})+f(x_{3k+1})\\right], \\qquad h=\\frac{b-a}{3(m+1)}} \\]`,
    answers: null,
    rubric: [
      { text: "Identifiqué que $n+2=3(m+1)$ es múltiplo de 3, dando $m+1$ bloques consecutivos de ancho $3h$.", weight: 5 },
      { text: "Apliqué la fórmula simple en cada bloque, usando los nodos interiores correctos $x_{3k}$ y $x_{3k+1}$.", weight: 5 },
      { text: "Sumé correctamente sobre los $m+1$ bloques para obtener la fórmula compuesta final.", weight: 5 }
    ]
  },
  {
    id: 4,
    title: "Integral impropia con cuadratura Gaussiana",
    points: "20%",
    question: `Calcule la integral impropia $\\displaystyle I=\\int_{5/2}^{\\infty} \\frac{2}{y^2}\\tan^{-1}\\!\\left(\\frac1y\\right)dy$ empleando la fórmula de cuadratura Gaussiana con 2 nodos.`,
    solution: `Cambio de variable $t=1/y$ ($dy/y^2=-dt$): cuando $y=\\frac52\\Rightarrow t=\\frac25$; $y\\to\\infty\\Rightarrow t\\to0$.
\\[ I = \\int_0^{2/5} 2\\tan^{-1}(t)\\,dt. \\]
Llevando $t\\in[0,\\frac25]$ a $u\\in[-1,1]$ con $t=\\frac15(u+1)$:
\\[ I = \\frac25\\int_{-1}^1 \\tan^{-1}\\!\\left(\\frac{u+1}{5}\\right)du \\approx \\frac25\\left[\\tan^{-1}(0.0845)+\\tan^{-1}(0.3155)\\right] \\approx \\frac25(0.3899) \\approx \\boxed{0.1560} \\]`,
    answers: {
      "I": { value: "0.1560", weight: 8 }
    },
    rubric: [
      { text: "Hice correctamente el cambio de variable $t=1/y$ obteniendo $I=\\int_0^{2/5}2\\tan^{-1}(t)dt$.", weight: 6 },
      { text: "Mapeé correctamente $[0,2/5]$ al intervalo estándar $[-1,1]$ y apliqué los 2 nodos de Gauss $u=\\pm1/\\sqrt3$.", weight: 6 }
    ]
  },
  {
    id: 5,
    title: "Mínimos cuadrados no lineales",
    points: "15%",
    question: `Se desea ajustar $y=\\dfrac{1}{(Cx+D)^2}$ a los datos:
\\begin{center}
\\begin{tabular}{c|c|c|c|c}
$x_k$ & -3 & -1 & 0 & 2 \\\\ \\hline $y_k$ & 14 & 5 & 4 & 2
\\end{tabular}
\\end{center}
\\begin{enumerate}
\\item[a.] (5\\%) Indique el cambio de variables apropiado para obtener $Y=AX+B$.
\\item[b.] (10\\%) Plantee el sistema de ecuaciones normales a resolver para determinar $A$ y $B$.
\\end{enumerate}`,
    solution: `\\textbf{a)} Como $y_i>0$: $\\dfrac{1}{\\sqrt y}=|Cx+D|$. Suponiendo $Cx+D>0$:
\\[ \\boxed{Y=\\frac1{\\sqrt y},\\ X=x}, \\qquad A=C,\\ B=D. \\]

\\textbf{b)} $Y_i=1/\\sqrt{y_i}$: $0.2673,0.4472,0.5,0.7071$. Con $n=4$: $\\sum X_i=-2$, $\\sum X_i^2=14$, $\\sum Y_i\\approx1.9216$, $\\sum X_iY_i\\approx0.1652$.
\\[ \\boxed{\\begin{cases}14A-2B=0.1652\\\\-2A+4B=1.9216\\end{cases}} \\]`,
    answers: {
      "sumX": { value: "-2", weight: 2.5 },
      "sumX2": { value: "14", weight: 2.5 },
      "sumY": { value: "1.9216", weight: 2.5 },
      "sumXY": { value: "0.1652", weight: 2.5 }
    },
    rubric: [
      { text: "Identifiqué correctamente la linealización $Y=1/\\sqrt y$, $X=x$ con $A=C$, $B=D$.", weight: 5 }
    ]
  }
];

/* ---------------- MISIÓN 4: Semestre 2018-2, Tema A ---------------- */
const MN_SP2018 = [
  {
    id: 1,
    title: "Selección múltiple y completación",
    points: "20%",
    question: `\\begin{enumerate}
\\item[a.] (5\\%) Con $x_k=-1,1,2,3$ y $y_k=1,0,-2,-1$, el coeficiente $L_2(x)$ es: (i) $\\frac{(x+1)(x-1)(x-3)}{(2+1)(2-1)(2-3)}$ (ii) $\\frac{(x+1)(x-1)(x-1)}{(-2-1)(-2-0)(-2+1)}$ (iii) $\\frac{(x-1)(x-0)(x+1)}{(-2-1)(-2-0)(-2+1)}$ (iv) $\\frac{(x-1)(x-0)(x+1)}{(2+1)(2-1)(2-3)}$ (v) Ninguno.
\\item[b.] (5\\%) La fórmula $\\int_0^4 f(x)dx\\approx\\frac23f(0)+\\frac83f(2)+\\frac23f(4)$ tiene grado de precisión: (i) 1 (ii) 2 (iii) 3 (iv) Ninguna.
\\item[c.] (5\\%) Las raíces de Chebyshev grado 3 en $[-1,1]$ son $\\pm\\frac{\\sqrt3}{2},0$. Para grado $\\le3$ en $[0,2]$ minimizando el error, los nodos $x_0,x_1,x_2$ (más el cuarto nodo) son:
\\item[d.] (5\\%) Para $y=\\dfrac{5}{Cx+D}$, un cambio de variable para linealizar es $X=\\_\\_$, $Y=\\_\\_$.
\\end{enumerate}`,
    solution: `\\textbf{a)} $L_2(x)=\\dfrac{(x-x_0)(x-x_1)(x-x_3)}{(x_2-x_0)(x_2-x_1)(x_2-x_3)}=\\dfrac{(x+1)(x-1)(x-3)}{(2+1)(2-1)(2-3)}$. \\textbf{Respuesta: i.}

\\textbf{b)} Es la regla de Simpson simple ($h=2$): $\\frac{h}{3}[f(0)+4f(2)+f(4)]$, exacta para cúbicos. \\textbf{Respuesta: iii) 3.}

\\textbf{c)} El cambio de variable lineal de $[-1,1]$ a $[0,2]$ es $x_k=1+z_k$:
\\[ x_0=1+\\tfrac{\\sqrt3}{2}\\approx1.8660,\\quad x_1=1,\\quad x_2=1-\\tfrac{\\sqrt3}{2}\\approx0.1340 \\]

\\textbf{d)} Tomando el recíproco de $y=\\frac{5}{Cx+D}$: $\\frac1y=\\frac{C}{5}x+\\frac{D}{5}$.
\\[ \\boxed{X=x,\\quad Y=\\frac1y} \\]`,
    answers: {
      "a_resp": { value: "i", weight: 5 },
      "b_resp": { value: "iii", weight: 5 },
      "x0_c": { value: "1.8660", weight: 1.67 },
      "x1_c": { value: "1", weight: 1.66 },
      "x2_c": { value: "0.1340", weight: 1.67 },
      "X_d": { value: "x", weight: 2.5 },
      "Y_d": { value: "1/y", weight: 2.5 }
    },
    rubric: []
  },
  {
    id: 2,
    title: "Spline cúbico sujeto",
    points: "25%",
    question: `Considere $S(x)=\\begin{cases}1+ax+2x^2-2x^3 & 0\\le x\\le1\\\\ 1+b(x-1)-4(x-1)^2+7(x-1)^3 & 1\\le x\\le2\\end{cases}$
\\begin{enumerate}
\\item[a.] (20\\%) Determine, si es posible, $a,b$ que hacen que $S$ sea un spline cúbico sujeto para una función $f$.
\\item[b.] (5\\%) Obtenga $f'(0)$ y $f'(2)$, si existen.
\\end{enumerate}`,
    solution: `\\textbf{$C^0$ en $x=1$}: $S_0(1)=1+a\\Rightarrow \\boxed{a=0}$.

\\textbf{$C^1$ en $x=1$}: $S_0'(1)=a-2$; $S_1'(1)=b\\Rightarrow \\boxed{b=-2}$.

\\textbf{$C^2$ en $x=1$}: $S_0''(1)=-8=S_1''(1)=-8$. Se cumple automáticamente, sin restricción adicional.

Por lo tanto \\textbf{sí es posible}, con $\\boxed{a=0,\\ b=-2}$.

\\textbf{b)} $f'(0)=S_0'(0)=a=\\boxed{0}$. $f'(2)=S_1'(2)=b-8+21=b+13=\\boxed{11}$.`,
    answers: {
      "a": { value: "0", weight: 6 },
      "b": { value: "-2", weight: 6 },
      "fp0": { value: "0", weight: 2.5 },
      "fp2": { value: "11", weight: 2.5 }
    },
    rubric: [
      { text: "Verifiqué las tres condiciones ($C^0$, $C^1$, $C^2$) en $x=1$, notando que $C^2$ se cumple automáticamente sin imponer restricción adicional.", weight: 8 }
    ]
  },
  {
    id: 3,
    title: "Cuadratura y aplicación (sin evaluar)",
    points: "30%",
    question: `\\begin{enumerate}
\\item[a.] (15\\%) Considere $\\int_0^1 f(x)dx\\approx Af(0)+Bf(z)$. Calcule $A,B,z$ de máxima precisión. ¿Grado de precisión?
\\item[b.] (15\\%) Use cuadratura Gaussiana de 2 puntos para encontrar una expresión (sin evaluar numéricamente) que aproxime
\\[ \\int_1^\\infty \\frac{\\log(1+1/x)}{x(x+2)}dx. \\]
\\end{enumerate}`,
    solution: `\\textbf{a)} Imponiendo exactitud para $f=1,x,x^2$: $A+B=1$, $Bz=\\frac12$, $Bz^2=\\frac13 \\Rightarrow z=\\frac23,B=\\frac34,A=\\frac14$.
Para $f=x^3$: fórmula $=\\frac29\\neq\\frac14$. \\textbf{Grado de precisión $=2$}.
\\[ \\boxed{A=\\frac14,B=\\frac34,z=\\frac23,\\ \\text{grado}=2} \\]

\\textbf{b)} Con $t=1/x$: $x(x+2)=\\frac{1+2t}{t^2}$, $\\log(1+1/x)=\\log(1+t)$.
\\[ \\int_1^\\infty \\frac{\\log(1+1/x)}{x(x+2)}dx = \\int_0^1 \\frac{\\log(1+t)}{1+2t}dt. \\]
Con $t=\\frac{1+u}{2}$: $= \\frac12\\int_{-1}^1 g\\left(\\frac{1+u}2\\right)du$, $g(t)=\\frac{\\log(1+t)}{1+2t}$.
\\[ \\boxed{\\approx \\frac12\\left[g(t_1)+g(t_2)\\right],\\quad t_1=\\frac{1-1/\\sqrt3}{2}\\approx0.2113,\\ t_2=\\frac{1+1/\\sqrt3}{2}\\approx0.7887} \\]
(No se evalúa numéricamente, tal como pide el enunciado.)`,
    answers: {
      "A": { value: "1/4", weight: 3 },
      "B": { value: "3/4", weight: 3 },
      "z": { value: "2/3", weight: 3 }
    },
    rubric: [
      { text: "Verifiqué con $f=x^3$ que la fórmula falla, concluyendo grado de precisión exactamente 2.", weight: 6 },
      { text: "Hice correctamente el cambio de variable $t=1/x$ obteniendo $\\int_0^1 \\log(1+t)/(1+2t)\\,dt$.", weight: 8 },
      { text: "Mapeé correctamente $[0,1]$ a $[-1,1]$ e indiqué los dos puntos $t_1,t_2$ correctos (sin evaluar), tal como pedía el enunciado.", weight: 7 }
    ]
  },
  {
    id: 4,
    title: "Diferencias divididas y polinomio de Newton",
    points: "25%",
    question: `Con $x_k=-2,-1,1,3,4$; $y_k=-8,2,-2,\\alpha,-2$ y parte de la tabla de diferencias divididas conocida ($f[x_0,x_1]=10$, $f[x_1,x_2]=-2$, $f[x_2,x_3]=6$, $f[x_3,x_4]=-12$, etc.):
\\begin{enumerate}
\\item[a.] (15\\%) Complete la tabla: halle $\\alpha,\\beta,\\gamma$.
\\item[b.] (10\\%) Halle el polinomio de interpolación de Newton en los nodos $-1,1,3,4$.
\\end{enumerate}`,
    solution: `\\textbf{a)} $f[x_2,x_3]=\\frac{\\alpha+2}{2}=6\\Rightarrow\\boxed{\\alpha=10}$ (se verifica $f[x_3,x_4]=-12$ ✓).

$\\beta=f[x_1,x_2,x_3]=\\frac{6+2}{4}=\\boxed{2}$ (se verifica con $f[x_0,\\dots,x_3]=6/5$ y $f[x_1,\\dots,x_4]=-8/5$, ambos consistentes).

$\\gamma=f[x_0,\\dots,x_4]=\\dfrac{-8/5-6/5}{6}=\\boxed{-\\dfrac{7}{15}}$.

\\textbf{b)} Con $f[-1]=2,f[-1,1]=-2,f[-1,1,3]=2,f[-1,1,3,4]=-8/5$:
\\[ P_3(x)=2-2(x+1)+2(x+1)(x-1)-\\frac85(x+1)(x-1)(x-3) = \\boxed{-\\frac85x^3+\\frac{34}5x^2-\\frac25x-\\frac{34}5} \\]`,
    answers: {
      "alpha": { value: "10", weight: 5 },
      "beta": { value: "2", weight: 5 },
      "gamma": { value: "-7/15", weight: 5 },
      "c3": { value: "-8/5", weight: 2.5 },
      "c2": { value: "34/5", weight: 2.5 },
      "c1": { value: "-2/5", weight: 2.5 },
      "c0": { value: "-34/5", weight: 2.5 }
    },
    rubric: []
  }
];

/* ---------------- MISIÓN 5: Julio 2019, Tema A ---------------- */
const MN_SP2019_1 = [
  {
    id: 1,
    title: "Preguntas cortas de teoría",
    points: "20%",
    question: `Sean $f$ en $[-3,3]$ y $g$ en $[-1,1]$, infinitamente diferenciables. Complete:
\\begin{enumerate}
\\item[a.] Trapecio compuesta con 9 subintervalos en $\\int_{-3}^3 f(x)dx$: el error es $O(\\_\\_)$.
\\item[b.] Grado de precisión de cuadratura Gaussiana con 6 nodos: $\\_\\_$.
\\item[c.] Si $f$ es impar, Simpson compuesta con 4 subintervalos da $\\int_{-3}^3 f(x)dx\\approx\\_\\_$.
\\item[d.] Si $Q$ es el polinomio de grado $\\le5$ que mejor aproxima a $g$ en $[-1,1]$, con $\\max|g^{(4)}|\\le8.2$, $\\max|g^{(5)}|\\le3.4$, $\\max|g^{(6)}|\\le1.75$, la cota de error es $\\_\\_$.
\\end{enumerate}`,
    solution: `\\textbf{a)} Trapecio compuesta tiene error $O(h^2)$ independiente de $n$. $\\boxed{O(h^2)}$.

\\textbf{b)} Cuadratura Gaussiana con $n$ nodos: grado $2n-1$. Con $n=6$: $\\boxed{11}$.

\\textbf{c)} Nodos simétricos $-3,-1.5,0,1.5,3$. Con $f$ impar: $f(-3)+f(3)=0$, $4f(-1.5)+4f(1.5)=0$, $2f(0)=0$. $\\boxed{\\approx 0}$.

\\textbf{d)} Con $n=5$ (grado $\\le5$, 6 nodos de Chebyshev), se necesita la derivada de orden $n+1=6$:
\\[ |g(x)-Q(x)| \\le \\frac{\\max|g^{(6)}|}{2^5\\cdot 6!} = \\frac{1.75}{23040} \\approx \\boxed{7.60\\times10^{-5}} \\]
(Los datos de $g^{(4)}$ y $g^{(5)}$ son distractores: la cota de Chebyshev usa siempre la derivada de orden $n+1$.)`,
    answers: {
      "a": { value: "h^2", weight: 5 },
      "b": { value: "11", weight: 5 },
      "c": { value: "0", weight: 5 },
      "d": { value: "7.60e-5", weight: 3 }
    },
    rubric: [
      { text: "Identifiqué que la cota de Chebyshev exige la derivada de orden $n+1=6$ (no las de orden 4 o 5, que son distractores).", weight: 2 }
    ]
  },
  {
    id: 2,
    title: "Mínimos cuadrados: ajuste $y=Ce^{Dx}$",
    points: "15%",
    question: `Ajuste $y=Ce^{Dx}$ a $\\{(-2,3.1),(1,4.5),(3,5.78),(6,11.3)\\}$.
\\begin{enumerate}
\\item[a.] (7\\%) Cambio de variables para $Y=AX+B$.
\\item[b.] (8\\%) Plantee el sistema de ecuaciones normales.
\\end{enumerate}`,
    solution: `\\textbf{a)} $\\ln y=\\ln C+Dx$. $\\boxed{Y=\\ln y,\\ X=x}$, con $A=D$, $B=\\ln C$.

\\textbf{b)} $Y_i=\\ln y_i$: $1.1314,1.5041,1.7544,2.4248$. Con $n=4$: $\\sum X_i=8$, $\\sum X_i^2=50$, $\\sum Y_i\\approx6.8147$, $\\sum X_iY_i\\approx19.0533$.
\\[ \\boxed{\\begin{cases}50A+8B=19.0533\\\\8A+4B=6.8147\\end{cases}} \\]`,
    answers: {
      "sumX": { value: "8", weight: 2 },
      "sumX2": { value: "50", weight: 2 },
      "sumY": { value: "6.8147", weight: 2 },
      "sumXY": { value: "19.0533", weight: 2 }
    },
    rubric: [
      { text: "Apliqué logaritmo natural correctamente e identifiqué $Y=\\ln y$, $X=x$, con $A=D$, $B=\\ln C$.", weight: 7 }
    ]
  },
  {
    id: 3,
    title: "Interpolación de $g(x)=\\frac{100\\tan^{-1}(5x)}{8x^2+3}$",
    points: "30%",
    question: `En $I=[-4,2]$:
\\begin{enumerate}
\\item[a.] (12\\%) Halle el polinomio que interpola a $g$ en $x_0=-4,x_1=-3,x_2=-1,x_3=2$.
\\item[b.] (6\\%) Error relativo al aproximar $g(1.3)$ con dicho polinomio.
\\item[c.] (4\\%) Halle $L_2(x)$.
\\item[d.] (8\\%) Halle los nodos de Chebyshev para el polinomio de grado $\\le3$ que mejor aproxima a $g$ en $I$.
\\end{enumerate}`,
    solution: `$g(-4)=-1.1609,\\ g(-3)=-2.0056,\\ g(-1)=-12.4855,\\ g(2)=4.2032$.

\\textbf{a)} Tabla de diferencias divididas da $P_3(x) \\approx 0.6043x^3+3.3691x^2+0.3810x-14.8693$.

\\textbf{b)} $P_3(1.3)\\approx-7.3527$, $g(1.3)\\approx8.5844$.
\\[ E_r = \\left|\\frac{8.5844-(-7.3527)}{8.5844}\\right| \\approx \\boxed{1.8565\\ (185.65\\%)} \\]
(Error enorme: $\\tan^{-1}(5x)$ cambia muy rápido cerca de $x=0$ y $x=1.3$ cae en el vacío entre los nodos $-1$ y $2$.)

\\textbf{c)} $L_2(x)=\\dfrac{(x+4)(x+3)(x-2)}{-18} = \\boxed{-\\dfrac{x^3}{18}-\\dfrac{5x^2}{18}+\\dfrac{x}{9}+\\dfrac43}$.

\\textbf{d)} Con $z_k=\\cos\\left(\\frac{(2k+1)\\pi}{8}\\right)$ y $x_k=-1+3z_k$:
\\[ x_0\\approx1.7716,\\ x_1\\approx0.1481,\\ x_2\\approx-2.1481,\\ x_3\\approx-3.7716 \\]`,
    answers: {
      "c3": { value: "0.6043", weight: 3 },
      "c2": { value: "3.3691", weight: 3 },
      "c1": { value: "0.3810", weight: 3 },
      "c0": { value: "-14.8693", weight: 3 },
      "error_rel": { value: "1.8565", weight: 6 },
      "x0": { value: "1.7716", weight: 2 },
      "x1": { value: "0.1481", weight: 2 },
      "x2": { value: "-2.1481", weight: 2 },
      "x3": { value: "-3.7716", weight: 2 }
    },
    rubric: [
      { text: "Escribí correctamente $L_2(x)$ como cociente de productos, con el denominador evaluado en los nodos restantes.", weight: 4 }
    ]
  },
  {
    id: 4,
    title: "Cuadratura simétrica de 3 puntos e integral impropia",
    points: "22%",
    question: `\\begin{enumerate}
\\item[a.] (12\\%) Halle $A,B,C$ en $\\int_{-1}^1 f(x)dx\\approx Af(-\\frac12)+Bf(0)+Cf(\\frac12)$ de máxima precisión.
\\item[b.] (10\\%) Aproxime $\\displaystyle\\int_1^\\infty \\frac{1}{x^2}\\cos\\left(\\frac1x\\right)\\sqrt{1-\\frac1x}\\,dx$ con la fórmula anterior.
\\end{enumerate}`,
    solution: `\\textbf{a)} Con $f=1,x,x^2$: $A+B+C=2$; $C=A$ (simetría); $A=\\frac43$. Luego $C=\\frac43$, $B=2-\\frac83=-\\frac23$.
Para $f=x^3$: se anula por simetría. Para $f=x^4$: fórmula da $\\frac16\\neq\\frac25$. \\textbf{Grado de precisión $=3$}.
\\[ \\boxed{A=\\frac43,\\ B=-\\frac23,\\ C=\\frac43} \\]

\\textbf{b)} Con $t=1/x$: $\\int_1^\\infty \\frac{1}{x^2}\\cos(1/x)\\sqrt{1-1/x}\\,dx = \\int_0^1 \\cos(t)\\sqrt{1-t}\\,dt$.
Con $t=\\frac{1+u}2$: $=\\frac12\\int_{-1}^1 g(u)du$, $g(u)=\\cos\\left(\\frac{1+u}2\\right)\\sqrt{\\frac{1-u}2}$.
\\[ \\approx \\frac12\\left[\\frac43g(-\\tfrac12)-\\frac23g(0)+\\frac43g(\\tfrac12)\\right] \\approx \\frac12(1.1929) \\approx \\boxed{0.5964} \\]`,
    answers: {
      "A": { value: "4/3", weight: 3 },
      "B": { value: "-2/3", weight: 3 },
      "C": { value: "4/3", weight: 3 },
      "aprox_b": { value: "0.5964", weight: 4 }
    },
    rubric: [
      { text: "Verifiqué que la fórmula es exacta para $f=x^3$ por simetría y que falla para $f=x^4$, confirmando grado de precisión 3.", weight: 3 },
      { text: "Hice correctamente el cambio de variable $t=1/x$ obteniendo $\\int_0^1\\cos(t)\\sqrt{1-t}\\,dt$.", weight: 3 },
      { text: "Mapeé correctamente $[0,1]$ a $[-1,1]$ y apliqué la fórmula del literal (a) con los 3 nodos correctos.", weight: 3 }
    ]
  },
  {
    id: 5,
    title: "Sistemas para el spline cúbico (condiciones de frontera)",
    points: "13%",
    question: `Con $x_k=-3,0,1,3,7$, $h_0=3,h_1=1,h_2=2,h_3=4$, el sistema de continuidad de $S'$ es:
\\[ 3c_0+8c_1+c_2=8,\\quad c_1+6c_2+2c_3=-6,\\quad 2c_2+12c_3+4c_4=3. \\]
\\begin{enumerate}
\\item[a.] (4\\%) Sistema para el spline con terminación \\textbf{parabólica}.
\\item[b.] (9\\%) Sistema para el spline \\textbf{extrapolado}.
\\end{enumerate}`,
    solution: `\\textbf{a)} Terminación parabólica: $d_0=0,d_3=0 \\Rightarrow c_1=c_0,\\ c_4=c_3$. Sustituyendo:
\\[ \\boxed{\\begin{cases}11c_1+c_2=8\\\\c_1+6c_2+2c_3=-6\\\\2c_2+16c_3=3\\end{cases}} \\]

\\textbf{b)} Extrapolado: $c_0=c_1+\\frac{h_0}{h_1}(c_1-c_2)=4c_1-3c_2$; $c_4=c_3+\\frac{h_3}{h_2}(c_3-c_2)=3c_3-2c_2$. Sustituyendo:
\\[ \\boxed{\\begin{cases}20c_1-8c_2=8\\\\c_1+6c_2+2c_3=-6\\\\-6c_2+24c_3=3\\end{cases}} \\]`,
    answers: null,
    rubric: [
      { text: "Identifiqué que la terminación parabólica exige $d_0=0$ y $d_3=0$, y de ahí obtuve $c_1=c_0$ y $c_4=c_3$, sustituyendo correctamente.", weight: 4 },
      { text: "Usé la fórmula de extrapolación lineal $c_0=c_1+\\frac{h_0}{h_1}(c_1-c_2)$ (y análoga para $c_4$), sustituyendo correctamente en el sistema.", weight: 9 }
    ]
  },
  {
    id: 6,
    title: "★ Extra: spline cúbico natural explícito",
    points: "10% (bonus)",
    question: `Si $S$ es el spline cúbico \\textbf{natural} para la nube de puntos del problema anterior, halle $S(x)$ para $x\\in[0,1]$, sabiendo que $S''(1)=-2.71$.`,
    solution: `Con $c_0=0,c_4=0$, el sistema se reduce a $8c_1+c_2=8$, $c_1+6c_2+2c_3=-6$, $2c_2+12c_3=3$.
\\[ c_1=\\frac{311}{266}\\approx1.1692,\\quad c_2=-\\frac{180}{133}\\approx-1.3534,\\quad c_3=\\frac{253}{532}\\approx0.4756. \\]
Verificación: $S''(1)=2c_2\\approx-2.7068\\approx-2.71$ ¡coincide con el dato! Confirma la solución.

Para $x\\in[0,1]$ (tramo con $x_1=0$, $a_1=-3$):
\\[ b_1=\\frac{1066}{399}\\approx2.6717, \\qquad d_1=\\frac{c_2-c_1}{3}\\approx-0.8409 \\]
\\[ \\boxed{S(x) = -3 + 2.6717x + 1.1692x^2 - 0.8409x^3, \\qquad x\\in[0,1]} \\]`,
    answers: {
      "b1": { value: "2.6717", weight: 3.33 },
      "c1": { value: "1.1692", weight: 3.33 },
      "d1": { value: "-0.8409", weight: 3.34 }
    },
    rubric: []
  }
];

/* ---------------- MISIÓN 6: Marzo 2020, Tema A ---------------- */
const MN_SP2019_2 = [
  {
    id: 1,
    title: "Polinomio interpolante de Newton (tabla incompleta)",
    points: "20%",
    question: `La tabla de diferencias divididas para $f$ en $[0,0.7]$:
\\begin{center}
\\begin{tabular}{c|c|c|c}
$x_0=0$ & $f[x_0]$ & & \\\\
$x_1=0.4$ & $f[x_1]$ & $f[x_0,x_1]$ & \\\\
$x_2=0.7$ & $6$ & $10$ & $50/7$
\\end{tabular}
\\end{center}
Encuentre el polinomio interpolante de Newton para $f$.`,
    solution: `De $f[x_1,x_2]=\\frac{6-f[x_1]}{0.3}=10 \\Rightarrow \\boxed{f[x_1]=3}$.

De $f[x_0,x_1,x_2]=\\frac{10-f[x_0,x_1]}{0.7}=\\frac{50}7 \\Rightarrow \\boxed{f[x_0,x_1]=5}$.

De $f[x_0,x_1]=\\frac{3-f[x_0]}{0.4}=5 \\Rightarrow \\boxed{f[x_0]=1}$.

\\[ P_2(x)=1+5x+\\frac{50}7x(x-0.4) = \\boxed{\\frac{50}7x^2+\\frac{15}7x+1} \\]
(Se verifica $P_2(0)=1,P_2(0.4)=3,P_2(0.7)=6$.)`,
    answers: {
      "f0": { value: "1", weight: 4 },
      "f1": { value: "3", weight: 4 },
      "c2": { value: "50/7", weight: 4 },
      "c1": { value: "15/7", weight: 4 },
      "c0": { value: "1", weight: 4 }
    },
    rubric: []
  },
  {
    id: 2,
    title: "Nodos de Chebyshev en $[-4,2]$",
    points: "12%",
    question: `Para un polinomio de grado $\\le3$ que mejor aproxime a una función $g$ en $I=[-4,2]$, halle los nodos necesarios.`,
    solution: `Con $z_k=\\cos\\left(\\frac{(2k+1)\\pi}8\\right)$ y el mapeo lineal $x_k=-1+3z_k$ (pues $\\frac{-4+2}2=-1$, $\\frac{2-(-4)}2=3$):
\\[ \\boxed{x_0\\approx1.7716,\\ x_1\\approx0.1481,\\ x_2\\approx-2.1481,\\ x_3\\approx-3.7716} \\]`,
    answers: {
      "x0": { value: "1.7716", weight: 3 },
      "x1": { value: "0.1481", weight: 3 },
      "x2": { value: "-2.1481", weight: 3 },
      "x3": { value: "-3.7716", weight: 3 }
    },
    rubric: []
  },
  {
    id: 3,
    title: "Curva logística: linealización",
    points: "18%",
    question: `$P(t)=\\dfrac{L}{1+Ce^{Dt}}$, $L=5200$. Datos: $t=0,1,2,3$; $y=500,1000,1800,2800$.
\\begin{enumerate}
\\item[a.] (8\\%) Cambio de variables para $Y=AT+B$.
\\item[b.] (10\\%) Plantee el sistema de ecuaciones normales.
\\end{enumerate}`,
    solution: `\\textbf{a)} $\\dfrac{L}{P}-1=Ce^{Dt} \\Rightarrow \\ln\\left(\\dfrac{L}{P}-1\\right)=\\ln C+Dt$.
\\[ \\boxed{Y=\\ln\\left(\\frac{L}{P(t)}-1\\right),\\ X=T=t}, \\qquad A=D,\\ B=\\ln C. \\]

\\textbf{b)} $Y_i$: $2.2407,1.4351,0.6360,-0.1542$. Con $n=4$: $\\sum T_i=6$, $\\sum T_i^2=14$, $\\sum Y_i\\approx4.1576$, $\\sum T_iY_i\\approx2.2446$.
\\[ \\boxed{\\begin{cases}14A+6B=2.2446\\\\6A+4B=4.1576\\end{cases}} \\]`,
    answers: {
      "sumT": { value: "6", weight: 2.5 },
      "sumT2": { value: "14", weight: 2.5 },
      "sumY": { value: "4.1576", weight: 2.5 },
      "sumTY": { value: "2.2446", weight: 2.5 }
    },
    rubric: [
      { text: "Despejé correctamente $L/P-1=Ce^{Dt}$ y apliqué logaritmo natural, identificando $Y=\\ln(L/P-1)$, $X=t$, $A=D$, $B=\\ln C$.", weight: 8 }
    ]
  },
  {
    id: 4,
    title: "Integral impropia con cuadratura Gaussiana",
    points: "16%",
    question: `Calcule $\\displaystyle I=\\int_{1/6}^{\\infty} \\frac{2}{y^2}\\tan^{-1}\\!\\left(\\frac1y\\right)dy$ empleando cuadratura Gaussiana con 2 nodos.`,
    solution: `Con $t=1/y$: cuando $y=\\frac16\\Rightarrow t=6$; $y\\to\\infty\\Rightarrow t\\to0$.
\\[ I = \\int_0^6 2\\tan^{-1}(t)\\,dt. \\]
Con $t=3(u+1)$: $I=6\\int_{-1}^1 \\tan^{-1}(3(u+1))du \\approx 6\\left[\\tan^{-1}(1.2679)+\\tan^{-1}(4.7321)\\right] \\approx 6(2.2653) \\approx \\boxed{13.5932}$.`,
    answers: {
      "I": { value: "13.5932", weight: 8 }
    },
    rubric: [
      { text: "Hice correctamente el cambio de variable $t=1/y$ obteniendo $I=\\int_0^6 2\\tan^{-1}(t)dt$ (un intervalo finito, ya no impropio).", weight: 4 },
      { text: "Mapeé correctamente $[0,6]$ a $[-1,1]$ y apliqué los 2 nodos de Gauss $u=\\pm1/\\sqrt3$.", weight: 4 }
    ]
  },
  {
    id: 5,
    title: "Spline cúbico y verificación de extrapolación",
    points: "20%",
    question: `\\[ S(x)=\\begin{cases}1+a(x-1)-\\frac53(x-1)^2+\\frac13(x-1)^3 & 1\\le x\\le2\\\\ 4+2(x-2)+b(x-2)^2+\\frac13(x-2)^3 & 2\\le x\\le4\\\\ 8+c(x-4)+\\frac43(x-4)^2+\\frac13(x-4)^3 & 4\\le x\\le5\\end{cases} \\]
\\begin{enumerate}
\\item[a.] (14\\%) Determine (si existen) $a,b,c$ que hacen que $S(x)$ sea un spline cúbico en $[1,5]$.
\\item[b.] (6\\%) ¿Es un spline cúbico extrapolado?
\\end{enumerate}`,
    solution: `\\textbf{$C^0$ en $x=2$}: $a-\\frac13=4\\Rightarrow \\boxed{a=\\frac{13}3}$.

\\textbf{$C^1$ en $x=2$}: $S_0'(2)=a-\\frac73=2$ (consistente). \\textbf{$C^2$ en $x=2$}: $-\\frac43=2b\\Rightarrow \\boxed{b=-\\frac23}$.

\\textbf{$C^0,C^1$ en $x=4$}: se cumple $C^0$ automáticamente; $C^1$ da $\\boxed{c=\\frac{10}3}$. $C^2$ en $x=4$ se cumple automáticamente.

\\[ \\boxed{a=\\frac{13}3,\\ b=-\\frac23,\\ c=\\frac{10}3} \\]

\\textbf{b)} Con $c_0=-\\frac53,c_1=-\\frac23,c_2=\\frac43,c_3=\\frac73$ (mitad de $S''$ en cada nodo), $h_0=1,h_1=2,h_2=1$:
\\[ c_1+\\tfrac{h_0}{h_1}(c_1-c_2) = -\\tfrac53 = c_0 \\ \\checkmark, \\qquad c_2+\\tfrac{h_2}{h_1}(c_2-c_1)=\\tfrac73=c_3\\ \\checkmark \\]
Ambas identidades se cumplen exactamente. \\boxed{\\text{Sí, es un spline cúbico extrapolado.}}`,
    answers: {
      "a": { value: "13/3", weight: 3 },
      "b": { value: "-2/3", weight: 3 },
      "c": { value: "10/3", weight: 3 }
    },
    rubric: [
      { text: "Verifiqué correctamente $C^0$, $C^1$, $C^2$ en $x=2$ y $x=4$, notando qué condiciones se cumplen automáticamente sin aportar restricción nueva.", weight: 5 },
      { text: "Calculé los valores $c_j=S''(x_j)/2$ en los 4 nodos y verifiqué las DOS identidades de extrapolación, concluyendo correctamente que SÍ es un spline extrapolado.", weight: 6 }
    ]
  },
  {
    id: 6,
    title: "Cuadratura con nodos fijos $0,h,3h$",
    points: "14%",
    question: `Determine $\\alpha,\\beta,\\delta$ que hacen que $\\displaystyle\\int_0^{3h}f(x)dx\\approx\\alpha f(0)+\\beta f(h)+\\delta f(3h)$ sea exacta al menos para polinomios de grado $\\le2$ ($h>0$ constante).`,
    solution: `Imponiendo exactitud para $f=1,x,x^2$:
\\[ \\alpha+\\beta+\\delta=3h; \\qquad \\beta+3\\delta=\\tfrac{9h}2; \\qquad \\beta+9\\delta=9h. \\]
Restando: $6\\delta=\\tfrac{9h}2\\Rightarrow \\boxed{\\delta=\\tfrac{3h}4}$. Luego $\\beta=\\tfrac{9h}2-3\\delta=\\boxed{\\tfrac{9h}4}$. Y $\\alpha=3h-\\beta-\\delta=\\boxed{0}$.`,
    answers: {
      "alpha": { value: "0", weight: 4.67 },
      "beta": { value: "9h/4", weight: 4.67 },
      "delta": { value: "3h/4", weight: 4.66 }
    },
    rubric: []
  }
];

/* ---------------- MISIÓN 7: Simulacro (parcial + solucionario propio) ---------------- */
const MN_SIMULACRO = [
  {
    id: 1,
    title: "Diferencias divididas y polinomio de Newton",
    points: "20%",
    question: `Considere la siguiente tabla de diferencias divididas incompleta, asociada a una función $f$:
\\begin{center}
\\begin{tabular}{c|c|c|c|c}
$x_i$ & $f[x_i]$ & $f[x_i,x_{i+1}]$ & $f[x_i,x_{i+1},x_{i+2}]$ & $f[x_i,\\dots,x_{i+3}]$ \\\\
\\hline
$-2$ & $-27$ & & & \\\\
$-1$ & $\\alpha$ & $20$ & & \\\\
$0$ & $-1$ & $\\beta$ & $\\gamma$ & \\\\
$1$ & $3$ & $4$ & $-1$ & $2$
\\end{tabular}
\\end{center}
\\begin{enumerate}
\\item[a.] (12\\%) Determine, justificadamente, $\\alpha,\\beta,\\gamma$.
\\item[b.] (8\\%) Construya el polinomio interpolante de Newton $P_3(x)$ asociado a la tabla completa.
\\end{enumerate}`,
    solution: `\\textbf{a)} $f[x_0,x_1]=\\dfrac{\\alpha-(-27)}{-1-(-2)}=\\alpha+27=20 \\Rightarrow \\boxed{\\alpha=-7}$.

$f[x_1,x_2]=\\dfrac{-1-\\alpha}{0-(-1)}=-1-(-7)=6 \\Rightarrow \\boxed{\\beta=6}$.

$f[x_0,x_1,x_2]=\\dfrac{\\beta-20}{0-(-2)}=\\dfrac{6-20}2=-7 \\Rightarrow \\boxed{\\gamma=-7}$.

\\textit{Verificación de consistencia}: con $f[x_2,x_3]=4$, $f[x_1,x_2,x_3]=\\frac{4-6}{2}=-1$ (coincide con la tabla), y $f[x_0,x_1,x_2,x_3]=\\frac{-1-\\gamma}{3}=\\frac{-1+7}3=2$ (coincide). La tabla es consistente.

\\textbf{b)} $P_3(x)=-27+20(x+2)-7(x+2)(x+1)+2(x+2)(x+1)x$. Expandiendo:
\\[ \\boxed{P_3(x)=2x^3-x^2+3x-1} \\]`,
    answers: {
      "alpha": { value: "-7", weight: 4 },
      "beta": { value: "6", weight: 4 },
      "gamma": { value: "-7", weight: 4 },
      "c3": { value: "2", weight: 2 },
      "c2": { value: "-1", weight: 2 },
      "c1": { value: "3", weight: 2 },
      "c0": { value: "-1", weight: 2 }
    },
    rubric: []
  },
  {
    id: 2,
    title: "Spline cúbico natural",
    points: "20%",
    question: `Considere $S(x)=\\begin{cases}2+ax+bx^3 & 0\\le x\\le1\\\\ 3+c(x-1)+d(x-1)^2+\\frac34(x-1)^3 & 1\\le x\\le2\\end{cases}$
\\begin{enumerate}
\\item[a.] (15\\%) Determine $a,b,c,d$ que hacen que $S(x)$ sea el spline cúbico \\textbf{natural} para $(0,2),(1,3),(2,1)$.
\\item[b.] (5\\%) Obtenga el valor aproximado de $f(1/2)$.
\\end{enumerate}`,
    solution: `\\textbf{$C^0$ en $x=1$}: $S_0(1)=2+a+b=3\\Rightarrow a+b=1$ (i).

\\textbf{$C^1$ en $x=1$}: $S_0'(x)=a+3bx^2\\Rightarrow S_0'(1)=a+3b$; $S_1'(1)=c \\Rightarrow a+3b=c$ (ii).

\\textbf{$C^2$ en $x=1$}: $S_0''(x)=6bx\\Rightarrow S_0''(1)=6b$; $S_1''(1)=2d \\Rightarrow 6b=2d\\Rightarrow d=3b$ (iii).

\\textbf{Natural en $x=0$}: $S_0''(0)=0$ automáticamente (no hay término cuadrático en $S_0$).

\\textbf{Natural en $x=2$}: $S_1''(2)=2d+\\frac92=0 \\Rightarrow \\boxed{d=-\\frac94}$.

De (iii): $b=d/3=\\boxed{-\\frac34}$. De (i): $a=1-b=\\boxed{\\frac74}$. De (ii): $c=a+3b=\\frac74-\\frac94=\\boxed{-\\frac12}$.

\\[ \\boxed{a=\\frac74,\\ b=-\\frac34,\\ c=-\\frac12,\\ d=-\\frac94} \\]

\\textbf{b)} $S_0(1/2)=2+\\frac74\\cdot\\frac12-\\frac34\\cdot\\frac18 = 2+\\frac78-\\frac3{32} = \\boxed{\\frac{89}{32}=2.78125}$`,
    answers: {
      "a": { value: "7/4", weight: 3.75 },
      "b": { value: "-3/4", weight: 3.75 },
      "c": { value: "-1/2", weight: 3.75 },
      "d": { value: "-9/4", weight: 3.75 },
      "f_half": { value: "2.78125", weight: 5 }
    },
    rubric: []
  },
  {
    id: 3,
    title: "Nodos óptimos (Chebyshev)",
    points: "10%",
    question: `Las raíces del polinomio de Chebyshev de grado 4 en $[-1,1]$ son $z_k=\\cos\\left(\\frac{(2k+1)\\pi}8\\right)$, $k=0,1,2,3$. Halle los nodos $x_0,x_1,x_2,x_3$ para el polinomio interpolante de grado $\\le3$ de mínimo error en $[2,5]$.`,
    solution: `El cambio de variable lineal de $[-1,1]$ a $[2,5]$ es $x_k=\\frac{7}2+\\frac32z_k$.
\\[ \\boxed{x_0=\\frac72+\\frac32\\cos\\left(\\frac{\\pi}8\\right)},\\quad \\boxed{x_1=\\frac72+\\frac32\\cos\\left(\\frac{3\\pi}8\\right)} \\]
\\[ \\boxed{x_2=\\frac72+\\frac32\\cos\\left(\\frac{5\\pi}8\\right)},\\quad \\boxed{x_3=\\frac72+\\frac32\\cos\\left(\\frac{7\\pi}8\\right)} \\]
Numéricamente: $x_0\\approx4.8858$, $x_1\\approx4.0740$, $x_2\\approx2.9260$, $x_3\\approx2.1142$.`,
    answers: {
      "x0": { value: "4.8858", weight: 2.5 },
      "x1": { value: "4.0740", weight: 2.5 },
      "x2": { value: "2.9260", weight: 2.5 },
      "x3": { value: "2.1142", weight: 2.5 }
    },
    rubric: []
  },
  {
    id: 4,
    title: "Cuadratura con derivada en $x=1$",
    points: "20%",
    question: `Considere $\\int_0^1 f(x)dx\\approx Af(0)+Bf(1)+Cf'(1)$.
\\begin{enumerate}
\\item[a.] (12\\%) Calcule $A,B,C$ de máxima precisión. Verifique el grado de precisión exacto.
\\item[b.] (8\\%) Use la fórmula anterior para aproximar $\\int_0^1 e^{x^2}dx$.
\\end{enumerate}`,
    solution: `\\textbf{a)} Con $f=1$: $A+B=1$. Con $f=x$ ($f'(1)=1$): $B+C=\\frac12$. Con $f=x^2$ ($f'(1)=2$): $B+2C=\\frac13$.
Restando: $C=\\frac13-\\frac12=-\\frac16$. Luego $B=\\frac12+\\frac16=\\frac23$. Luego $A=\\frac13$.
Para $f=x^3$ ($f'(1)=3$): fórmula $=\\frac23-\\frac12=\\frac16\\neq\\frac14$. \\textbf{Grado de precisión $=2$}.
\\[ \\boxed{A=\\frac13,\\ B=\\frac23,\\ C=-\\frac16} \\]

\\textbf{b)} $f(0)=1,f(1)=e,f'(1)=2e$:
\\[ \\int_0^1 e^{x^2}dx \\approx \\frac13(1)+\\frac23(e)-\\frac16(2e)=\\frac13+\\frac{e}3=\\boxed{\\frac{1+e}3\\approx1.2394} \\]`,
    answers: {
      "A": { value: "1/3", weight: 4 },
      "B": { value: "2/3", weight: 4 },
      "C": { value: "-1/6", weight: 4 },
      "aprox_b": { value: "1.2394", weight: 8 }
    },
    rubric: []
  },
  {
    id: 5,
    title: "Integral impropia con cuadratura Gaussiana",
    points: "15%",
    question: `Sea $I=\\displaystyle\\int_3^\\infty \\frac{\\ln(1+4/x)}{x^2}dx$. Mediante $t=1/x$, transforme $I$ a $[-1,1]$ y aplique cuadratura Gaussiana de 2 nodos (redondeo a 4 decimales).`,
    solution: `Con $t=1/x$: $\\frac{1}{x^2}dx=-dt$; $x=3\\Rightarrow t=\\frac13$; $x\\to\\infty\\Rightarrow t\\to0$.
\\[ I = \\int_0^{1/3} \\ln(1+4t)\\,dt. \\]
Con $t=\\frac16(u+1)$: $I=\\frac16\\int_{-1}^1 \\ln\\left(1+\\frac23(u+1)\\right)du$.
Con nodos $u=\\pm1/\\sqrt3$: argumentos $\\approx1.2818,2.0516$, logaritmos $\\approx0.2481,0.7186$.
\\[ I \\approx \\frac16(0.2481+0.7186) \\approx \\boxed{0.1611} \\]`,
    answers: {
      "I": { value: "0.1611", weight: 7 }
    },
    rubric: [
      { text: "Hice correctamente el cambio de variable $t=1/x$ obteniendo $I=\\int_0^{1/3}\\ln(1+4t)\\,dt$.", weight: 4 },
      { text: "Mapeé correctamente $[0,1/3]$ a $[-1,1]$ y apliqué los 2 nodos de Gauss $u=\\pm1/\\sqrt3$.", weight: 4 }
    ]
  },
  {
    id: 6,
    title: "Mínimos cuadrados no lineales: $y=Cxe^{Dx}$",
    points: "15%",
    question: `Ajuste $y=Cxe^{Dx}$ a $\\{(1,3),(2,9),(3,30),(4,110)\\}$.
\\begin{enumerate}
\\item[a.] (7\\%) Cambio de variables para $Y=AX+B$; recupere $C,D$.
\\item[b.] (8\\%) Plantee el sistema de ecuaciones normales (redondeo a 4 decimales).
\\end{enumerate}`,
    solution: `\\textbf{a)} Dividiendo por $x>0$ y tomando logaritmo: $\\ln(y/x)=\\ln C+Dx$.
\\[ \\boxed{Y=\\ln(y/x),\\ X=x}, \\qquad A=D,\\ B=\\ln C \\Rightarrow C=e^B. \\]

\\textbf{b)} $Y_k=\\ln(y_k/x_k)$: $\\ln3\\approx1.0986,\\ln4.5\\approx1.5041,\\ln10\\approx2.3026,\\ln27.5\\approx3.3142$.
Con $n=4$: $\\sum X_k=10$, $\\sum X_k^2=30$, $\\sum Y_k\\approx8.2195$, $\\sum X_kY_k\\approx24.2714$.
\\[ \\boxed{\\begin{cases}30A+10B=24.2714\\\\10A+4B=8.2195\\end{cases}} \\]
(Resolviendo: $A\\approx0.7445$, $B\\approx0.1936$, de donde $D\\approx0.7445$, $C\\approx1.2136$.)`,
    answers: {
      "sumX": { value: "10", weight: 2 },
      "sumX2": { value: "30", weight: 2 },
      "sumY": { value: "8.2195", weight: 2 },
      "sumXY": { value: "24.2714", weight: 2 }
    },
    rubric: [
      { text: "Dividí por $x$ y apliqué logaritmo natural correctamente, identificando $Y=\\ln(y/x)$, $X=x$, con $A=D$ y $C=e^B$.", weight: 7 }
    ]
  }
];

/* ---------------- Ensamble de misiones para el botón "Métodos Numéricos" ---------------- */
const METODOS_DATA = [
  { mission_id: "exam2025",  title: "Noviembre 2025",       subtitle: "Segundo parcial teórico · Grupo 2", exercises: MN_EXAM_2025 },
  { mission_id: "sp2016",    title: "Supletorio 2016-2",    subtitle: "31 de octubre de 2016",              exercises: MN_SP2016 },
  { mission_id: "sp2017",    title: "Semestre 2017-1",      subtitle: "17 de abril de 2017 · Tema A",        exercises: MN_SP2017 },
  { mission_id: "sp2018",    title: "Semestre 2018-2",      subtitle: "4 de marzo de 2019 · Tema A",         exercises: MN_SP2018 },
  { mission_id: "sp2019_1",  title: "Julio 2019",           subtitle: "22 de julio de 2019 · Tema A",        exercises: MN_SP2019_1 },
  { mission_id: "sp2019_2",  title: "Marzo 2020",           subtitle: "7 de marzo de 2020 · Tema A",         exercises: MN_SP2019_2 },
  { mission_id: "simulacro", title: "Simulacro Propio",     subtitle: "Parcial + solucionario de práctica",  exercises: MN_SIMULACRO },
];
