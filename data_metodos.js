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
/* ============================================================
   MÉTODOS NUMÉRICOS — Repaso Parcial 3 (modo guiado, sin XP)
   Contenido basado en los exámenes parciales 3 de la UNAL Sede
   Medellín (TP2016, TP2017, TP2018, TP2019, TP2025) y un simulacro
   de parcial. Cada ejercicio trae `context` (enunciado) y `steps`
   (secuencia de pasos con recordatorio + resultado revelado).
   ============================================================ */

const GUIDED_METODOS_P3 = [
    {
        mission_id: "tp_2016",
        title: "Taller Parcial 2016",
        subtitle: "Euler con término integral, sistemas de EDOs de orden superior, disparo lineal y diferencias finitas (elípticas y parabólicas)",
        exercises: [
            {
                id: 1,
                context: "Considere el problema con valores iniciales $$\\begin{cases} y'(t) = \\dfrac{t}{2}\\,y(t) + \\displaystyle\\int_0^t y(s)\\,ds, & 0\\le t\\le 0.4,\\\\ y(0) = 1. \\end{cases}$$ Use el método de Euler con tamaño de paso $h=0.2$ para aproximar el valor de $y$ en $x=0.4$. Tenga en cuenta que $y(0.2)=1.01$. Para evaluar la integral use la regla de trapecio simple: $$\\int_0^t y(s)\\,ds \\approx \\frac{t}{2}\\big(y(t)+y(0)\\big).$$ (Use 4 dígitos decimales.)",
                steps: [
                    {
                        label: "Paso 1: Identificar la estructura del problema",
                        hint: "Aquí $f(t,y)=\\dfrac t2 y(t) + I(t)$, donde $I(t)=\\int_0^t y(s)ds$ se aproxima con la regla de trapecio dada, usando el valor de $y$ ya conocido en ese instante $t$ (no es necesario resolver nada implícito).",
                        reveal: "El método de Euler es $y_{n+1}=y_n+h\\,f(t_n,y_n)$, con $f(t_n,y_n)=\\dfrac{t_n}{2}y_n + \\dfrac{t_n}{2}\\big(y_n+y(0)\\big)$ usando la fórmula de trapecio dada evaluada en $t=t_n$."
                    },
                    {
                        label: "Paso 2: Primer paso (de t=0 a t=0.2)",
                        hint: "En $t_0=0$: la integral $I(0)=\\frac{0}{2}(y(0)+y(0))=0$, y el término $\\frac{t_0}{2}y_0=0$. Por eso $f(0,1)=0$ y el primer paso de Euler daría $y(0.2)=1$; el enunciado ya le da el valor correcto $y(0.2)=1.01$ para que lo use directamente (evita repetir un cálculo trivial).",
                        reveal: "Se toma como dato: $y_0=y(0)=1$, $y_1=y(0.2)=1.01$."
                    },
                    {
                        label: "Paso 3: Evaluar la integral trapezoidal en t=0.2",
                        hint: "Sustituya $t=0.2$ en $I(t)\\approx\\frac{t}{2}(y(t)+y(0))$, usando $y(0.2)=1.01$ y $y(0)=1$.",
                        reveal: "$I(0.2) \\approx \\dfrac{0.2}{2}(1.01+1) = 0.1\\times 2.01 = 0.2010$."
                    },
                    {
                        label: "Paso 4: Evaluar f(t1,y1)",
                        hint: "$f(0.2,1.01) = \\dfrac{0.2}{2}(1.01) + I(0.2)$.",
                        reveal: "$f(0.2,1.01) = 0.1(1.01) + 0.2010 = 0.1010+0.2010 = 0.3020$."
                    },
                    {
                        label: "Paso 5: Segundo paso de Euler (de t=0.2 a t=0.4)",
                        hint: "$y_2 = y_1 + h\\,f(t_1,y_1)$, con $h=0.2$.",
                        reveal: "$y(0.4) \\approx 1.01 + 0.2(0.3020) = 1.01+0.0604 = \\boxed{1.0704}$."
                    }
                ]
            },
            {
                id: 2,
                context: "Considere el problema con valores iniciales (P.V.I.) de orden superior $$\\begin{cases} (t+1)y'''(t) - \\big(\\sin(y''(t))+e^t y'(t)\\big)^2 + \\cos(y(t)) = 1, & 0\\le t\\le 2,\\\\ y(0)=3,\\\\ y'(0)=4,\\\\ y''(0)=-2. \\end{cases}$$ (a) Introduzca las variables necesarias para escribir el P.V.I. como un sistema de primer orden con sus condiciones iniciales. (b) Defina la función vectorial $\\mathbb{U}$, el campo vectorial $\\mathbb{F}$ y el vector $\\alpha$ para representar el sistema como $\\mathbb{U}'(t)=\\mathbb{F}(t,\\mathbb{U}(t))$, $\\mathbb{U}(a)=\\alpha$.",
                steps: [
                    {
                        label: "Paso 1: Definir las variables de estado",
                        hint: "Para una EDO de orden 3, introduzca una variable por cada derivada hasta orden 2: $u_1=y$, $u_2=y'$, $u_3=y''$.",
                        reveal: "$u_1(t)=y(t)$, $u_2(t)=y'(t)$, $u_3(t)=y''(t)$, con $u_1(0)=3$, $u_2(0)=4$, $u_3(0)=-2$."
                    },
                    {
                        label: "Paso 2: Despejar y''' de la ecuación original",
                        hint: "De $(t+1)y''' - (\\sin(y'')+e^ty')^2+\\cos(y)=1$, despeje $y'''$ usando las nuevas variables.",
                        reveal: "$$u_3'(t) = y'''(t) = \\frac{1-\\cos(u_1)+\\big(\\sin(u_3)+e^tu_2\\big)^2}{t+1}.$$"
                    },
                    {
                        label: "Paso 3: Escribir el sistema de primer orden completo",
                        hint: "Reúna las tres ecuaciones con sus condiciones iniciales.",
                        reveal: "$$\\begin{cases} u_1'=u_2, & u_1(0)=3,\\\\ u_2'=u_3, & u_2(0)=4,\\\\ u_3' = \\dfrac{1-\\cos(u_1)+(\\sin(u_3)+e^tu_2)^2}{t+1}, & u_3(0)=-2. \\end{cases}$$"
                    },
                    {
                        label: "Paso 4: Definir U, F y α",
                        hint: "Agrupe las tres componentes en un vector $\\mathbb{U}$, el lado derecho en el campo vectorial $\\mathbb{F}$, y las condiciones iniciales en $\\alpha$.",
                        reveal: "$$\\mathbb{U}(t)=\\begin{pmatrix}u_1(t)\\\\u_2(t)\\\\u_3(t)\\end{pmatrix}, \\qquad \\mathbb{F}(t,\\mathbb{U})=\\begin{pmatrix}u_2\\\\u_3\\\\ \\dfrac{1-\\cos(u_1)+(\\sin(u_3)+e^tu_2)^2}{t+1}\\end{pmatrix}, \\qquad \\alpha=\\begin{pmatrix}3\\\\4\\\\-2\\end{pmatrix},$$ con $0\\le t\\le 2$."
                    }
                ]
            },
            {
                id: 3,
                context: "Considere el problema de valor en la frontera (P.V.F.) $$\\begin{cases} s(x)\\,y''(x) + 4x\\,y'(x) - 3x^2\\,y(x) = -\\dfrac13\\ln x, & 2<x<3,\\\\ y(2)=\\alpha,\\\\ y(3)=\\beta, \\end{cases}$$ donde $s$ es continua estrictamente positiva en $[2,3]$. (a) Demuestre que este P.V.F. tiene única solución. (b) Plantee los dos P.V.I. asociados al método del disparo, con variables $u,v$. (c) Con Runge-Kutta 4 y $h=\\frac15$, las soluciones aproximadas son: $$\\begin{array}{c|cccccc} & x_0 & x_1 & x_2 & x_3 & x_4 & x_5\\\\\\hline u(x) & 1.5 & 1.7694 & 2.2990 & 3.1144 & 4.3435 & 6.2154\\\\ v(x) & 0 & 0.0922 & 0.1492 & 0.2126 & 0.3010 & 0.4331 \\end{array}$$ y la aproximación al P.V.F. es: $$\\begin{array}{c|cccccc} & x_0 & x_1 & x_2 & x_3 & x_4 & x_5\\\\\\hline y(x) & \\alpha & 1.7661 & 2.2937 & 3.1068 & 4.3328 & \\beta \\end{array}$$ Halle $\\alpha$ y $\\beta$.",
                steps: [
                    {
                        label: "Paso 1: Llevar la ecuación a la forma estándar y'' = P y' + Q y + R",
                        hint: "Divida toda la ecuación entre $s(x)>0$ para despejar $y''$.",
                        reveal: "$$y'' = -\\frac{4x}{s(x)}y' + \\frac{3x^2}{s(x)}y - \\frac{\\ln x}{3s(x)}.$$ Así $P(x)=-\\frac{4x}{s(x)}$, $Q(x)=\\frac{3x^2}{s(x)}$, $R(x)=-\\frac{\\ln x}{3s(x)}$."
                    },
                    {
                        label: "Paso 2: Aplicar el teorema de existencia y unicidad para P.V.F. lineales",
                        hint: "El teorema exige que $P,Q,R$ sean continuas en $[2,3]$ y que $Q(x)>0$ en todo el intervalo.",
                        reveal: "Como $s$ es continua y estrictamente positiva en $[2,3]$, y $x^2>0$, $\\ln x$ continua (pues $x>0$): $P,Q,R$ son continuas en $[2,3]$, y $Q(x)=\\frac{3x^2}{s(x)}>0$ para todo $x\\in[2,3]$. Por el teorema, el P.V.F. tiene solución única."
                    },
                    {
                        label: "Paso 3: Plantear los dos P.V.I. del método del disparo",
                        hint: "$u$ resuelve la ecuación completa (no homogénea) partiendo de $u(2)=\\alpha$ conocido con pendiente auxiliar 0; $v$ resuelve la parte homogénea partiendo de $v(2)=0$, $v'(2)=1$.",
                        reveal: "$$u'' = Pu'+Qu+R,\\ \\ u(2)=\\alpha,\\ u'(2)=0; \\qquad v''=Pv'+Qv,\\ \\ v(2)=0,\\ v'(2)=1.$$"
                    },
                    {
                        label: "Paso 4: Leer α directamente de la tabla",
                        hint: "Como $v(x_0)=v(2)=0$, la combinación $y(x)=u(x)+c\\,v(x)$ da $y(x_0)=u(x_0)$, sin importar $c$.",
                        reveal: "$\\alpha = u(x_0) = 1.5$."
                    },
                    {
                        label: "Paso 5: Hallar la constante de combinación c",
                        hint: "Use un punto interior donde ya se conoce $y$: $c=\\dfrac{y(x_i)-u(x_i)}{v(x_i)}$. Por ejemplo con $x_1$.",
                        reveal: "$c = \\dfrac{1.7661-1.7694}{0.0922} \\approx -0.0358$ (valor consistente al verificar con $x_2,x_3,x_4$: se obtiene $c\\approx-0.0355$ a $-0.0358$, con pequeñas variaciones por el redondeo a 4 cifras de la tabla)."
                    },
                    {
                        label: "Paso 6: Calcular β",
                        hint: "$\\beta=y(x_5)=u(x_5)+c\\,v(x_5)$, con $c\\approx-0.0356$ (promedio de las estimaciones del paso anterior).",
                        reveal: "$\\beta \\approx 6.2154 + (-0.0356)(0.4331) \\approx 6.2154-0.0154 \\approx \\boxed{6.2000}$."
                    }
                ]
            },
            {
                id: 4,
                context: "Considere el problema elíptico $$\\begin{cases} u_{xx}(x,y)+u_{yy}(x,y) = \\dfrac{xy}{2x+y}, & 1<x<2,\\ 1<y<3,\\\\ u(1,y)=g(y), & 1\\le y\\le 3,\\\\ u(2,y)=\\dfrac{2y}{y+2}, & 1\\le y\\le 3,\\\\ u(x,1)=\\dfrac{3}{2x+1}, & 1\\le x\\le 2,\\\\ u(x,3)=\\dfrac{6}{2x+3}, & 1\\le x\\le 2. \\end{cases}$$ Utilice el método de diferencias finitas con $h=\\frac14$ y $k=\\frac23$ para completar las aproximaciones de $u$: $$\\begin{array}{c|ccccc} & x_0 & x_1 & x_2 & x_3 & x_4\\\\\\hline y_0 & 0.75 & A & 0.75 & 0.6667 & 0.6667\\\\ y_1 & 1.0714 & 0.9813 & B & 0.8891 & 0.9091\\\\ y_2 & 1.3125 & 1.1483 & 1.0535 & 1.0264 & D\\\\ y_3 & 1.5 & 1.0909 & 1 & C & 1.2 \\end{array}$$ Halle $A,B,C,D$.",
                steps: [
                    {
                        label: "Paso 1: Reconocer qué filas y columnas son frontera",
                        hint: "Con $h=1/4$: $x_0,\\ldots,x_4=1,1.25,1.5,1.75,2$. Con $k=2/3$: $y_0,\\ldots,y_3=1,\\frac53,\\frac73,3$. La fila $y_0$ (todo $x$) es la frontera $u(x,1)=\\frac3{2x+1}$; la fila $y_3$ es $u(x,3)=\\frac6{2x+3}$; la columna $x_0$ es $u(1,y)=g(y)$ (dada como números en la tabla); la columna $x_4$ es $u(2,y)=\\frac{2y}{y+2}$.",
                        reveal: "Por lo tanto, $A$ y $C$ (en las filas de frontera $y_0,y_3$) se obtienen sustituyendo directamente en la fórmula de esa frontera — NO requieren resolver el sistema de diferencias finitas. $D$ está en la columna de frontera $x_4$, tampoco requiere el sistema. Solo $B$ es un punto verdaderamente interior."
                    },
                    {
                        label: "Paso 2: Calcular A (frontera y=1)",
                        hint: "$A=u(x_1,1)$ con $x_1=1.25$: sustituya en $u(x,1)=\\frac{3}{2x+1}$.",
                        reveal: "$A = \\dfrac{3}{2(1.25)+1} = \\dfrac{3}{3.5} \\approx \\boxed{0.8571}$."
                    },
                    {
                        label: "Paso 3: Calcular C (frontera y=3)",
                        hint: "$C=u(x_3,3)$ con $x_3=1.75$: sustituya en $u(x,3)=\\frac{6}{2x+3}$.",
                        reveal: "$C = \\dfrac{6}{2(1.75)+3} = \\dfrac{6}{6.5} \\approx \\boxed{0.9231}$."
                    },
                    {
                        label: "Paso 4: Calcular D (frontera x=2)",
                        hint: "$D=u(2,y_2)$ con $y_2=\\frac73\\approx2.3333$: sustituya en $u(2,y)=\\frac{2y}{y+2}$.",
                        reveal: "$D = \\dfrac{2(7/3)}{7/3+2} = \\dfrac{14/3}{13/3} = \\dfrac{14}{13} \\approx \\boxed{1.0769}$."
                    },
                    {
                        label: "Paso 5: Plantear el stencil de 5 puntos para B (punto interior)",
                        hint: "Con $h\\neq k$, la fórmula estándar es $$2\\Big[1+\\Big(\\frac hk\\Big)^2\\Big]w_{i,j} - (w_{i+1,j}+w_{i-1,j}) - \\Big(\\frac hk\\Big)^2(w_{i,j+1}+w_{i,j-1}) = -h^2f(x_i,y_j).$$ Aquí $B=w_{2,1}$ (en $x_2=1.5,\\ y_1=5/3$), con $(h/k)^2=(0.375)^2=0.140625$.",
                        reveal: "Vecinos: $w_{3,1}=0.8891$ (derecha), $w_{1,1}=0.9813$ (izquierda), $w_{2,2}=1.0535$ (arriba), $w_{2,0}=0.75$ (abajo). $f(x_2,y_1)=\\dfrac{(1.5)(5/3)}{2(1.5)+5/3}=\\dfrac{2.5}{14/3}\\approx0.5357$."
                    },
                    {
                        label: "Paso 6: Sustituir y despejar B",
                        hint: "$2(1.140625)\\,B - (0.8891+0.9813) - 0.140625(1.0535+0.75) = -0.0625(0.5357)$.",
                        reveal: "$2.28125\\,B - 1.8704 - 0.253617 = -0.033482$ $$\\Rightarrow 2.28125\\,B = 2.090535 \\Rightarrow B \\approx \\boxed{0.9162}.$$"
                    }
                ]
            },
            {
                id: 5,
                context: "Considere el problema parabólico $$\\begin{cases} u_t(x,t) = \\pi^2 u_{xx}(x,t), & 0<x<\\dfrac{\\pi}{4},\\ t>0,\\\\ u(x,0)=f(x), & 0\\le x\\le \\dfrac{\\pi}{4},\\\\ u(0,t)=g_1(t), & t>0,\\\\ u\\!\\left(\\dfrac{\\pi}{4},t\\right)=g_2(t), & t>0. \\end{cases}$$ Plantee el sistema de ecuaciones lineales necesario para aproximar la solución $u$ en $t=0.05$ con el método implícito (regresivo), usando $h=\\dfrac{\\pi}{16}$ y $k=0.05$. Datos: $$\\begin{array}{c|cccc} & x_0 & x_1 & x_2 & x_3\\\\\\hline u(x,0) & 0 & 0.1951 & 0.3827 & 0.5556 \\end{array}$$ (con $u(\\pi/4,0)=0$ dado también), $u(0,0.05)=0.05$ y $u(\\pi/4,0.05)=0.025$.",
                steps: [
                    {
                        label: "Paso 1: Verificar la malla contra los datos dados",
                        hint: "Con dominio $[0,\\pi/4]$ dividido en 4 subintervalos de tamaño $h$ (para tener los 4 valores dados en $t=0$ más el extremo), se necesita $h=\\frac{\\pi/4}{4}=\\frac{\\pi}{16}$. Compruebe: los valores $0.1951,0.3827,0.5556$ coinciden con $\\sin(\\pi/16),\\sin(\\pi/8),\\sin(3\\pi/16)$, confirmando los nodos $x_k=k\\pi/16$.",
                        reveal: "Malla en $x$: $x_0=0,\\ x_1=\\pi/16,\\ x_2=\\pi/8,\\ x_3=3\\pi/16,\\ x_4=\\pi/4$, con $h=\\pi/16$. Los nodos interiores (incógnitas) son $x_1,x_2,x_3$; $x_0,x_4$ son frontera."
                    },
                    {
                        label: "Paso 2: Escribir el esquema implícito (regresivo)",
                        hint: "El método implícito usa diferencia progresiva en $t$ pero evalúa el laplaciano en el nivel de tiempo NUEVO $j+1$: $$\\frac{w_{i,j+1}-w_{i,j}}{k} = \\pi^2\\,\\frac{w_{i+1,j+1}-2w_{i,j+1}+w_{i-1,j+1}}{h^2}.$$",
                        reveal: "Reordenando con $\\lambda = \\dfrac{\\pi^2 k}{h^2}$: $$-\\lambda\\,w_{i-1,j+1} + (1+2\\lambda)\\,w_{i,j+1} - \\lambda\\,w_{i+1,j+1} = w_{i,j}.$$"
                    },
                    {
                        label: "Paso 3: Calcular λ numéricamente",
                        hint: "Sustituya $h=\\pi/16$ (así $h^2=\\pi^2/256$) y $k=0.05$.",
                        reveal: "$\\lambda = \\dfrac{\\pi^2(0.05)}{\\pi^2/256} = 0.05\\times256 = 12.8$, de modo que $1+2\\lambda = 26.6$."
                    },
                    {
                        label: "Paso 4: Escribir las tres ecuaciones (i=1,2,3) para pasar de t=0 a t=0.05",
                        hint: "Para cada nodo interior $i=1,2,3$, sustituya $w_{i,0}$ (dato inicial) a la derecha, y las fronteras conocidas $w_{0,1}=0.05$, $w_{4,1}=0.025$ donde correspondan.",
                        reveal: "$$\\begin{cases} 26.6\\,w_{1,1} - 12.8\\,w_{2,1} = 0.1951 + 12.8(0.05) = 0.8351,\\\\[2pt] -12.8\\,w_{1,1} + 26.6\\,w_{2,1} - 12.8\\,w_{3,1} = 0.3827,\\\\[2pt] -12.8\\,w_{2,1} + 26.6\\,w_{3,1} = 0.5556 + 12.8(0.025) = 0.8756. \\end{cases}$$ Este es el sistema $3\\times3$ (tridiagonal) que se debe resolver para obtener $w_{1,1},w_{2,1},w_{3,1}\\approx u(x_1,0.05), u(x_2,0.05), u(x_3,0.05)$."
                    }
                ]
            }
        ]
    },
{
    mission_id: "tp_2017",
    title: "Taller Parcial 2017",
    subtitle: "Lipschitz y Taylor de orden 2, diferencias finitas explícitas (parabólico con advección-difusión), disparo para P.V.F. lineal, sistema de primer orden y método de punto medio",
    exercises: [
        {
            id: 1,
            context: "Considere el problema con valores iniciales (P.V.I.) $$\\begin{cases} y'(t) = \\cos(ty(t)), & -3\\le t\\le 2.5,\\\\ y(-3)=-1. \\end{cases}$$\n\n(a) Demuestre que $f(t,y):=\\cos(ty)$ satisface una condición de Lipschitz en la variable $y$ en la región $D:=\\{(t,y)\\in\\mathbb{R}^2: -3\\le t\\le2.5,\\ -\\infty<y<\\infty\\}$. ¿Cuál es la constante de Lipschitz para esta función? ¿Este P.V.I. tiene única solución?\n\n(b) Para este P.V.I., escriba la fórmula en diferencias (fórmula de avance) del método de Taylor de orden 2.",
            steps: [
                {
                    label: "Paso 1: Calcular la derivada parcial respecto a y",
                    hint: "Una función satisface la condición de Lipschitz en $y$ con constante $L$ si $|f_y(t,y)|\\le L$ para todo $(t,y)\\in D$ (basta con acotar la derivada parcial, por el Teorema del Valor Medio). Derive $f(t,y)=\\cos(ty)$ respecto a $y$, tratando $t$ como constante.",
                    reveal: "$f_y(t,y) = \\dfrac{\\partial}{\\partial y}\\cos(ty) = -t\\,\\sin(ty)$."
                },
                {
                    label: "Paso 2: Acotar |f_y| en la región D",
                    hint: "Acote $|f_y(t,y)|=|t|\\,|\\sin(ty)|$. Como $|\\sin(\\cdot)|\\le1$ siempre, basta acotar $|t|$ usando el rango $t\\in[-3,2.5]$ dado en $D$.",
                    reveal: "$|f_y(t,y)| = |t|\\,|\\sin(ty)| \\le |t|\\cdot 1 \\le 3$, ya que $\\max\\{|-3|,|2.5|\\}=3$ para $t\\in[-3,2.5]$. Por lo tanto $L=3$ es una constante de Lipschitz para $f$ en la variable $y$ sobre $D$."
                },
                {
                    label: "Paso 3: Concluir existencia y unicidad",
                    hint: "Recuerde el Teorema de Existencia y Unicidad (Picard–Lindelöf): si $f$ es continua en $D$ y satisface una condición de Lipschitz en $y$, el P.V.I. tiene solución única en el intervalo dado.",
                    reveal: "$f(t,y)=\\cos(ty)$ es continua en todo $D$ y cumple la condición de Lipschitz con $L=3$. Por lo tanto, el P.V.I. tiene una única solución en $-3\\le t\\le 2.5$."
                },
                {
                    label: "Paso 4: Calcular la derivada total f'(t,y) para Taylor 2",
                    hint: "El método de Taylor de orden 2 requiere $f'(t,y)=f_t(t,y)+f_y(t,y)\\cdot f(t,y)$ (regla de la cadena, ya que $y=y(t)$). Ya tiene $f_y$ del Paso 1; ahora calcule $f_t$.",
                    reveal: "$f_t(t,y) = \\dfrac{\\partial}{\\partial t}\\cos(ty) = -y\\,\\sin(ty)$. Entonces $$f'(t,y) = -y\\sin(ty) + \\big(-t\\sin(ty)\\big)\\cos(ty) = -\\sin(ty)\\big[y+t\\cos(ty)\\big].$$"
                },
                {
                    label: "Paso 5: Escribir la fórmula de avance de Taylor 2",
                    hint: "La fórmula general es $w_{i+1}=w_i+hf(t_i,w_i)+\\frac{h^2}{2}f'(t_i,w_i)$. Sustituya $f$ y $f'$ ya calculados.",
                    reveal: "$$w_{i+1} = w_i + h\\cos(t_iw_i) - \\frac{h^2}{2}\\sin(t_iw_i)\\big[w_i+t_i\\cos(t_iw_i)\\big].$$"
                }
            ]
        },
        {
            id: 2,
            context: "Considere el problema parabólico $$\\begin{cases} u_t(x,t) = \\dfrac{1}{25}u_{xx}(x,t) + \\dfrac{1}{5}u_x(x,t), & 0<x<1.2,\\ 0<t<0.2,\\\\ u(x,0) = 1-\\left|x-\\dfrac35\\right|, & 0\\le x\\le1.2,\\\\ u(0,t) = \\dfrac25+t, & 0\\le t\\le0.2,\\\\ u(1.2,t) = 3t+\\dfrac25, & 0\\le t\\le0.2. \\end{cases}$$\n\nSe quiere aproximar la solución con diferencias finitas.\n\n(a) Discretice el dominio con $h=\\frac15$ y $k=0.04$; identifique en qué puntos $(x_i,t_j)$ se conoce $u$.\n\n(b) Escriba la fórmula de diferencias finitas (progresiva en $t$, centrada en $x$ para ambas derivadas espaciales) de la forma $w_{i,j+1}=\\beta w_{i-1,j}+\\gamma w_{i,j}+\\eta w_{i+1,j}$, identificando $\\beta,\\gamma,\\eta$ y el rango válido de $i,j$.\n\n(c) La aproximación obtenida con esta fórmula es:\n\n$$\\begin{array}{c|ccccccc} u & x_0 & x_1 & x_2 & x_3 & x_4 & x_5 & x_6\\\\\\hline t_0 & 0.40 & 0.6 & 0.8 & B & 0.8 & 0.6 & 0.40\\\\ t_1 & 0.44 & 0.6080 & 0.8080 & 0.9840 & 0.7920 & 0.5920 & 0.52\\\\ t_2 & 0.48 & 0.6166 & 0.8146 & D & 0.7838 & 0.5917 & 0.64\\\\ t_3 & A & 0.6258 & 0.8199 & 0.9548 & 0.7760 & 0.5984 & 0.76\\\\ t_4 & 0.56 & 0.6353 & 0.8241 & 0.9413 & 0.7689 & 0.6117 & C\\\\ t_5 & 0.60 & 0.6451 & 0.8273 & 0.9287 & 0.7629 & 0.6309 & 1 \\end{array}$$\n\nHalle $A$, $B$, $C$ y $D$.",
            steps: [
                {
                    label: "Paso 1: Discretizar el dominio",
                    hint: "Con $h=0.2$ sobre $[0,1.2]$ se tiene $x_i=0.2i$, $i=0,\\dots,6$. Con $k=0.04$ sobre $[0,0.2]$ se tiene $t_j=0.04j$, $j=0,\\dots,5$.",
                    reveal: "$x_i=0.2i$ ($i=0,\\dots,6$); $t_j=0.04j$ ($j=0,\\dots,5$). Se conoce $u$ en toda la fila $t_0$ (condición inicial) y en las columnas $x_0$ y $x_6$ para todo $j$ (condiciones de frontera). El resto ($i=1,\\dots,5$, $j=1,\\dots,5$) son las incógnitas a aproximar."
                },
                {
                    label: "Paso 2: Sustituir las diferencias finitas en la EDP",
                    hint: "Diferencia progresiva en $t$: $u_t\\approx\\frac{w_{i,j+1}-w_{i,j}}{k}$. Diferencia centrada en $x$: $u_{xx}\\approx\\frac{w_{i+1,j}-2w_{i,j}+w_{i-1,j}}{h^2}$, $u_x\\approx\\frac{w_{i+1,j}-w_{i-1,j}}{2h}$.",
                    reveal: "$$\\frac{w_{i,j+1}-w_{i,j}}{k} = \\frac{1}{25}\\cdot\\frac{w_{i+1,j}-2w_{i,j}+w_{i-1,j}}{h^2} + \\frac15\\cdot\\frac{w_{i+1,j}-w_{i-1,j}}{2h}.$$"
                },
                {
                    label: "Paso 3: Sustituir h=0.2, k=0.04 y despejar w_{i,j+1}",
                    hint: "Calcule los coeficientes numéricos: $\\frac{1/25}{h^2}=\\frac{0.04}{0.04}=1$ y $\\frac{1/5}{2h}=\\frac{0.2}{0.4}=0.5$. Agrupe términos según $w_{i-1,j}$, $w_{i,j}$, $w_{i+1,j}$ y despeje $w_{i,j+1}$ multiplicando por $k$.",
                    reveal: "$$w_{i,j+1}=w_{i,j}+k\\big[0.5\\,w_{i-1,j}-2w_{i,j}+1.5\\,w_{i+1,j}\\big] = \\underbrace{0.02}_{\\beta}\\,w_{i-1,j}+\\underbrace{0.92}_{\\gamma}\\,w_{i,j}+\\underbrace{0.06}_{\\eta}\\,w_{i+1,j}.$$ (Verificación de consistencia: $\\beta+\\gamma+\\eta=0.02+0.92+0.06=1$, como debe ser.)"
                },
                {
                    label: "Paso 4: Rango de validez de la fórmula",
                    hint: "La fórmula solo puede usarse en los nodos interiores (donde existen vecinos $i-1$ e $i+1$) y para avanzar de un tiempo conocido a uno por conocer.",
                    reveal: "Es válida para $i=1,2,3,4,5$ (nodos interiores en $x$) y $j=0,1,2,3,4$ (para obtener $j+1=1,\\dots,5$)."
                },
                {
                    label: "Paso 5: Hallar A (usa la condición de frontera en x=0)",
                    hint: "La columna $x_0$ es la frontera $u(0,t)=0.4+t$, dato conocido sin necesidad de iterar. $A$ está en $t_3=0.12$.",
                    reveal: "$A = u(0,0.12) = 0.4+0.12 = 0.52$."
                },
                {
                    label: "Paso 6: Hallar C (usa la condición de frontera en x=1.2)",
                    hint: "La columna $x_6$ es la frontera $u(1.2,t)=3t+0.4$. $C$ está en $t_4=0.16$.",
                    reveal: "$C = 3(0.16)+0.4 = 0.48+0.4 = 0.88$."
                },
                {
                    label: "Paso 7: Hallar B (usa la condición inicial)",
                    hint: "La fila $t_0$ es la condición inicial $u(x,0)=1-|x-0.6|$. $B$ está en $x_3=0.6$.",
                    reveal: "$B = 1-|0.6-0.6| = 1-0 = 1$."
                },
                {
                    label: "Paso 8: Hallar D (requiere aplicar la fórmula de avance)",
                    hint: "$D=w_{3,2}$ no es un dato de frontera ni inicial: debe calcularse desde la fila $t_1$ con la fórmula del Paso 3: $w_{3,2}=0.02\\,w_{2,1}+0.92\\,w_{3,1}+0.06\\,w_{4,1}$.",
                    reveal: "Con $w_{2,1}=0.8080$, $w_{3,1}=0.9840$, $w_{4,1}=0.7920$: $$D = 0.02(0.8080)+0.92(0.9840)+0.06(0.7920) = 0.01616+0.90528+0.04752 = 0.9690.$$"
                }
            ]
        },
        {
            id: 3,
            context: "Considere el problema de valor en la frontera (P.V.F.) $$\\begin{cases} y''(x) - 4x\\,y'(x) + 3\\sin(x)\\,y(x) = \\tan^{-1}(x), & 2<x<3,\\\\ y(2)=-1.4,\\\\ y(3)=2.4. \\end{cases}$$ Enuncie los dos P.V.I. que se deben resolver para utilizar el método del disparo para este P.V.F. (emplee las variables $u$ y $v$). ¿Cómo se obtiene la solución $y$ de este P.V.F. en términos de $u$ y $v$?",
            steps: [
                {
                    label: "Paso 1: Reconocer que la ecuación es lineal",
                    hint: "El método del disparo para un P.V.F. lineal $y''=p(x)y'+q(x)y+r(x)$ combina la solución de un P.V.I. no homogéneo (con la ecuación completa) y un P.V.I. homogéneo (sin el término $r(x)$ y sin la parte no forzada), usando condiciones iniciales auxiliares en $x=2$.",
                    reveal: "Aquí $p(x)=4x$, $q(x)=-3\\sin(x)$, $r(x)=\\tan^{-1}(x)$: la ecuación es lineal en $y,y',y''$, por lo que el disparo lineal (combinación de dos P.V.I.) es aplicable de forma exacta (sin iterar)."
                },
                {
                    label: "Paso 2: Plantear el primer P.V.I. (no homogéneo), variable u",
                    hint: "Use la ecuación completa con las condiciones iniciales $u(2)=y(2)$ conocido y $u'(2)=0$ (una elección estándar).",
                    reveal: "$$\\begin{cases} u''(x) - 4x\\,u'(x) + 3\\sin(x)\\,u(x) = \\tan^{-1}(x), & 2<x<3,\\\\ u(2) = -1.4,\\\\ u'(2) = 0. \\end{cases}$$"
                },
                {
                    label: "Paso 3: Plantear el segundo P.V.I. (homogéneo), variable v",
                    hint: "Use la ecuación sin el término independiente $\\tan^{-1}(x)$, con condiciones iniciales $v(2)=0$, $v'(2)=1$.",
                    reveal: "$$\\begin{cases} v''(x) - 4x\\,v'(x) + 3\\sin(x)\\,v(x) = 0, & 2<x<3,\\\\ v(2) = 0,\\\\ v'(2) = 1. \\end{cases}$$"
                },
                {
                    label: "Paso 4: Combinar u y v para obtener y",
                    hint: "Por linealidad, $y(x)=u(x)+c\\,v(x)$ satisface automáticamente la ecuación y $y(2)=-1.4$ para cualquier $c$. Elija $c$ para forzar $y(3)=2.4$.",
                    reveal: "$$y(x) = u(x) + \\frac{2.4-u(3)}{v(3)}\\,v(x).$$ Esta combinación garantiza $y(2)=u(2)+\\frac{2.4-u(3)}{v(3)}v(2) = -1.4+0=-1.4$ y $y(3)=u(3)+\\frac{2.4-u(3)}{v(3)}v(3)=u(3)+(2.4-u(3))=2.4$, cumpliendo ambas condiciones de frontera."
                }
            ]
        },
        {
            id: 4,
            context: "Considere el P.V.I. de orden superior $$\\begin{cases} y'''(t) - \\sin(y'(t)) + e^t y''(t) = 1, & 2\\le t\\le 3,\\\\ y(2)=\\alpha,\\\\ y'(2)=\\delta,\\\\ y''(2)=\\xi, \\end{cases}$$ donde $\\alpha,\\delta,\\xi\\in\\mathbb{R}$ son conocidos.\n\n(a) Introduzca las variables necesarias para escribir este P.V.I. como un sistema de primer orden. Defina $\\mathbb{U}$, $\\mathbb{F}$ y $\\mathbb{Z}_a$ tales que $\\mathbb{U}'(t)=\\mathbb{F}(t,\\mathbb{U}(t))$, $\\mathbb{U}(2)=\\mathbb{Z}_a$.\n\n(b) Use el método de punto medio, $w_{i+1}=w_i+hf\\!\\left(t_i+\\frac h2,\\ w_i+\\frac h2 f(t_i,w_i)\\right)$, con $h=0.2$ para aproximar $y$, $y'$, $y''$ en $t=2.8$, sabiendo que $y(2.6)=5.9364$, $y'(2.6)=4.9480$, $y''(2.6)=-0.5863$.",
            steps: [
                {
                    label: "Paso 1: Definir las variables de estado",
                    hint: "Para una EDO de orden 3, introduzca una variable por cada derivada hasta orden 2: $u_1=y$, $u_2=y'$, $u_3=y''$.",
                    reveal: "$u_1(t)=y(t)$, $u_2(t)=y'(t)$, $u_3(t)=y''(t)$."
                },
                {
                    label: "Paso 2: Escribir el sistema de primer orden",
                    hint: "Derive cada $u_i$: $u_1'=u_2$, $u_2'=u_3$, y despeje $y'''$ de la ecuación original para obtener $u_3'$.",
                    reveal: "$$u_1'=u_2,\\qquad u_2'=u_3,\\qquad u_3' = 1+\\sin(u_2)-e^t u_3,$$ con $u_1(2)=\\alpha$, $u_2(2)=\\delta$, $u_3(2)=\\xi$."
                },
                {
                    label: "Paso 3: Definir U, F y Za",
                    hint: "Agrupe las tres variables en un vector, el sistema de ecuaciones en un campo vectorial, y las condiciones iniciales en un vector.",
                    reveal: "$$\\mathbb{U}(t)=\\begin{pmatrix}u_1(t)\\\\u_2(t)\\\\u_3(t)\\end{pmatrix},\\quad \\mathbb{F}(t,\\mathbb{U})=\\begin{pmatrix}u_2\\\\u_3\\\\1+\\sin(u_2)-e^tu_3\\end{pmatrix},\\quad \\mathbb{Z}_a=\\begin{pmatrix}\\alpha\\\\\\delta\\\\\\xi\\end{pmatrix}.$$"
                },
                {
                    label: "Paso 4: Evaluar f en el punto conocido (k1)",
                    hint: "Con $t_i=2.6$, $w_i=(5.9364,\\,4.9480,\\,-0.5863)$, calcule $f(t_i,w_i)=(w_2,\\,w_3,\\,1+\\sin(w_2)-e^{t_i}w_3)$. Necesitará $\\sin(4.9480)\\approx-0.9724$ y $e^{2.6}\\approx13.4637$.",
                    reveal: "$$k_1 = f(2.6,w_i) = \\big(4.9480,\\ -0.5863,\\ 1-0.9724-13.4637(-0.5863)\\big) \\approx (4.9480,\\,-0.5863,\\,7.9214).$$"
                },
                {
                    label: "Paso 5: Calcular el punto medio del estado",
                    hint: "Calcule $w_i+\\frac h2 k_1$ con $h/2=0.1$, y evalúe en $t_i+\\frac h2=2.7$.",
                    reveal: "$$w_i+0.1\\,k_1 \\approx (6.4312,\\ 4.8894,\\ 0.2058)\\quad\\text{en } t=2.7.$$"
                },
                {
                    label: "Paso 6: Evaluar f en el punto medio (k2)",
                    hint: "Repita la evaluación de $f$ ahora en $t=2.7$ con el estado del paso anterior. Use $\\sin(4.8894)\\approx-0.9844$ y $e^{2.7}\\approx14.8797$.",
                    reveal: "$$k_2 = f(2.7,\\ 6.4312,\\,4.8894,\\,0.2058) \\approx \\big(4.8894,\\ 0.2058,\\ 1-0.9844-14.8797(0.2058)\\big) \\approx (4.8894,\\,0.2058,\\,-3.0473).$$"
                },
                {
                    label: "Paso 7: Avanzar con el método de punto medio",
                    hint: "Aplique $w_{i+1}=w_i+h\\,k_2$ con $h=0.2$.",
                    reveal: "$$w_{i+1} = (5.9364,\\,4.9480,\\,-0.5863) + 0.2\\,(4.8894,\\,0.2058,\\,-3.0473) \\approx (6.9143,\\ 4.9892,\\ -1.1958).$$ Por lo tanto $y(2.8)\\approx6.9143$, $y'(2.8)\\approx4.9892$, $y''(2.8)\\approx-1.1958$."
                }
            ]
        }
    ]
},
{
    mission_id: "tp_2018",
    title: "Taller Parcial 2018",
    subtitle: "Existencia/unicidad, Taylor de orden 3, sistemas de PVI, disparo lineal, Crank-Nicolson y diferencias finitas para ecuación de onda",
    exercises: [
        {
            id: 1,
            context: "Considere el problema con valores iniciales (P.V.I.) $$y'(t) = y\\,e^{-t}, \\quad 1\\le t\\le 2, \\qquad y(1)=0.$$\n\n(a) Demuestre que este P.V.I. tiene una única solución.\n\n(b) Escriba la fórmula en diferencias (de avance) del método de Taylor de orden 3 para este P.V.I.",
            steps: [
                {
                    label: "Paso 1: Verificar continuidad y condición de Lipschitz",
                    hint: "Para el teorema de existencia y unicidad de un P.V.I., basta con que $f(t,y)$ sea continua en la región y que $\\partial f/\\partial y$ sea continua y acotada allí (lo que implica Lipschitz en $y$).",
                    reveal: "Aquí $f(t,y)=y\\,e^{-t}$ es continua en $D=\\{(t,y): 1\\le t\\le 2,\\ y\\in\\mathbb{R}\\}$. Además $\\dfrac{\\partial f}{\\partial y}=e^{-t}$, que es continua y satisface $0<e^{-2}\\le e^{-t}\\le e^{-1}$ en $[1,2]$, luego está acotada."
                },
                {
                    label: "Paso 2: Concluir unicidad",
                    hint: "Con $f$ continua y Lipschitz en $y$ (constante $L=e^{-1}$), el Teorema de Existencia y Unicidad garantiza solución única.",
                    reveal: "Por lo tanto el P.V.I. tiene una única solución (de hecho, resolviendo directamente, $y(t)\\equiv 0$ es esa solución, pues satisface $y(1)=0$ y $y'=ye^{-t}=0$)."
                },
                {
                    label: "Paso 3: Calcular las derivadas totales necesarias para Taylor 3",
                    hint: "El método de Taylor de orden 3 requiere $y''$ y $y'''$ en términos de $y$ y $t$. Derive $y'=ye^{-t}$ sucesivamente usando la regla del producto, sustituyendo cada vez $y'=ye^{-t}$.",
                    reveal: "$y''(t) = y'e^{-t} - ye^{-t} = e^{-t}(y'-y) = y\\big(e^{-2t}-e^{-t}\\big)$.\n\n$y'''(t) = y'\\big(e^{-2t}-e^{-t}\\big) + y\\big(-2e^{-2t}+e^{-t}\\big) = y\\big(e^{-3t}-3e^{-2t}+e^{-t}\\big)$ (sustituyendo $y'=ye^{-t}$)."
                },
                {
                    label: "Paso 4: Ensamblar la fórmula de Taylor de orden 3",
                    hint: "$w_{i+1}=w_i + h f(t_i,w_i) + \\dfrac{h^2}{2}y''(t_i,w_i) + \\dfrac{h^3}{6}y'''(t_i,w_i)$.",
                    reveal: "$$w_{i+1} = w_i\\left[1 + he^{-t_i} + \\frac{h^2}{2}\\big(e^{-2t_i}-e^{-t_i}\\big) + \\frac{h^3}{6}\\big(e^{-3t_i}-3e^{-2t_i}+e^{-t_i}\\big)\\right].$$"
                }
            ]
        },
        {
            id: 2,
            context: "Considere el P.V.I. de orden superior $$y'''(t) + e^{y''(t)} - \\sin(t)\\,y'(t) = 2, \\quad 1\\le t\\le 2, \\qquad y(1)=\\mu,\\ y'(1)=\\gamma,\\ y''(1)=\\eta.$$\n\n(a) Introduzca las variables necesarias para escribir el P.V.I. como un sistema de primer orden. Defina $\\mathbb{U}$, $\\mathbb{F}$ y $\\mathbb{Z}_a$.\n\n(b) Use el método de Euler con $h=0.5$ para aproximar $y$, $y'$, $y''$ en $t=2$, sabiendo que $y(1.5)=-0.5$, $y'(1.5)=-2$, $y''(1.5)=-1.9567$.",
            steps: [
                {
                    label: "Paso 1: Introducir variables de estado",
                    hint: "Defina $u_1=y$, $u_2=y'$, $u_3=y''$; despeje $y'''$ de la ecuación original.",
                    reveal: "$u_1'=u_2$, $u_2'=u_3$, $u_3'=y'''=2-e^{u_3}+\\sin(t)u_2$, con $u_1(1)=\\mu$, $u_2(1)=\\gamma$, $u_3(1)=\\eta$."
                },
                {
                    label: "Paso 2: Escribir la forma vectorial",
                    hint: "Agrupe las tres ecuaciones en $\\mathbb{U}'=\\mathbb{F}(t,\\mathbb{U})$.",
                    reveal: "$$\\mathbb{U}(t)=\\begin{pmatrix}u_1\\\\u_2\\\\u_3\\end{pmatrix},\\quad \\mathbb{F}(t,\\mathbb{U})=\\begin{pmatrix}u_2\\\\u_3\\\\2-e^{u_3}+\\sin(t)u_2\\end{pmatrix},\\quad \\mathbb{Z}_a=\\begin{pmatrix}\\mu\\\\\\gamma\\\\\\eta\\end{pmatrix},\\ \\ 1\\le t\\le 2.$$"
                },
                {
                    label: "Paso 3: Evaluar F en t=1.5 con los valores dados",
                    hint: "Sustituya $t=1.5$, $u_2=-2$, $u_3=-1.9567$ en la tercera componente. Recuerde $\\sin(1.5\\text{ rad})\\approx0.9975$ y calcule $e^{-1.9567}$.",
                    reveal: "$e^{-1.9567}\\approx 0.1413$. $u_3'(1.5)=2-0.1413+0.9975(-2)=2-0.1413-1.9950=-0.1363$."
                },
                {
                    label: "Paso 4: Un paso de Euler (vectorial) de t=1.5 a t=2",
                    hint: "$\\mathbb{U}_{i+1}=\\mathbb{U}_i+h\\,\\mathbb{F}(t_i,\\mathbb{U}_i)$, componente a componente, con $h=0.5$.",
                    reveal: "$y(2)\\approx y(1.5)+h\\,y'(1.5) = -0.5+0.5(-2)=-1.5$.\n\n$y'(2)\\approx y'(1.5)+h\\,y''(1.5)=-2+0.5(-1.9567)=-2.9784$.\n\n$y''(2)\\approx y''(1.5)+h\\,u_3'(1.5)=-1.9567+0.5(-0.1363)=-2.0249$."
                }
            ]
        },
        {
            id: 3,
            context: "Considere el problema con valores en la frontera (P.V.F.) $$2y''(x)+\\cos(\\pi x)y'(x)=2e^x y(x)+s(x), \\quad 0\\le x\\le1, \\qquad y(0)=1,\\ y(1)=0,$$ con $s$ continua en $[0,1]$.\n\n(a) Demuestre que este P.V.F. tiene única solución.\n\n(b) Las aproximaciones (RK4, $h=1/5$) de los P.V.I. auxiliares $u$ (no homogéneo, $u(0)=1,u'(0)=0$) y $v$ (homogéneo, $v(0)=0,v'(0)=1$) son:\n\n$$\\begin{array}{c|cccccc} & x_0 & x_1 & x_2 & x_3 & x_4 & x_5\\\\\\hline u(x) & 1 & 1.0210 & 1.0909 & 1.2310 & 1.4843 & 1.9248\\\\ v(x) & 0 & 0.1920 & 0.3790 & 0.5835 & 0.8388 & 1.1948\\end{array}$$\n\nEncuentre la aproximación a la solución del P.V.F. en $x=2/5$.",
            steps: [
                {
                    label: "Paso 1: Reescribir en la forma estándar y'' = P y' + Q y + R",
                    hint: "Divida toda la ecuación entre 2.",
                    reveal: "$y'' = -\\dfrac{\\cos(\\pi x)}{2}y' + e^x y + \\dfrac{s(x)}{2}$. Así $P(x)=-\\frac{\\cos(\\pi x)}{2}$, $Q(x)=e^x$, $R(x)=\\frac{s(x)}{2}$, todas continuas en $[0,1]$."
                },
                {
                    label: "Paso 2: Aplicar el teorema de unicidad para P.V.F. lineales",
                    hint: "El teorema exige $P,Q,R$ continuas y $Q(x)>0$ en todo el intervalo.",
                    reveal: "Como $Q(x)=e^x>0$ para todo $x\\in[0,1]$, el teorema garantiza que el P.V.F. tiene solución única."
                },
                {
                    label: "Paso 3: Determinar la constante de combinación c",
                    hint: "La solución del disparo lineal es $y(x)=u(x)+c\\,v(x)$, con $c$ elegido para que se cumpla la condición de frontera derecha $y(1)=0$: $c=\\dfrac{0-u(x_5)}{v(x_5)}$.",
                    reveal: "$c = \\dfrac{-1.9248}{1.1948} \\approx -1.6110$."
                },
                {
                    label: "Paso 4: Evaluar y(2/5) combinando u, v y c",
                    hint: "$x=2/5=0.4$ corresponde a $x_2$ en la malla ($h=1/5=0.2$). Sustituya en $y(x_2)=u(x_2)+c\\,v(x_2)$.",
                    reveal: "$y(0.4) \\approx 1.0909 + (-1.6110)(0.3790) \\approx 1.0909 - 0.6106 = 0.4803$."
                }
            ]
        },
        {
            id: 4,
            context: "Considere el problema parabólico $$u_t(x,t)=16u_{xx}(x,t), \\quad 0<x<1,\\ 0<t<0.2, \\qquad u(x,0)=f(x),\\ u(0,t)=g(t),\\ u(1,t)=s(t).$$\n\n(a) Discretice con $h=1/4$, $k=0.1$ e identifique los puntos donde $u$ no se conoce.\n\n(b) Escriba la fórmula de Crank-Nicolson en la forma $\\beta w_{i-1,j+1}+\\gamma w_{i,j+1}+\\eta w_{i+1,j+1} = \\alpha w_{i-1,j}+\\delta w_{i,j}+\\tau w_{i+1,j}$.\n\n(c) Dada la tabla de aproximaciones:\n\n$$\\begin{array}{c|ccccc} u & x_0 & x_1 & x_2 & x_3 & x_4\\\\\\hline t_0 & 1 & 1.3201 & 1.6327 & 1.9306 & 2.2071\\\\ t_1 & 1 & 1.1962 & 1.3901 & B & 1.7635\\\\ t_2 & 1 & 1.1527 & 1.3041 & 1.4531 & 1.5982\\end{array}$$\n\nHalle B.",
            steps: [
                {
                    label: "Paso 1: Construir la malla",
                    hint: "Con $h=1/4$: $x_0=0,x_1=0.25,x_2=0.5,x_3=0.75,x_4=1$. Con $k=0.1$ y $0<t<0.2$: $t_0=0,t_1=0.1,t_2=0.2$.",
                    reveal: "Los puntos $x_0,x_4$ (frontera espacial) son conocidos para todo $t_j$ vía $g,s$; el nivel $t_0$ es conocido vía $f$. Los puntos desconocidos son los interiores $(x_i,t_j)$ con $i=1,2,3$ y $j=1,2$ (6 incógnitas en total, resueltas nivel por nivel)."
                },
                {
                    label: "Paso 2: Calcular λ y escribir la fórmula de Crank-Nicolson",
                    hint: "Crank-Nicolson: $-\\lambda w_{i-1,j+1}+2(1+\\lambda)w_{i,j+1}-\\lambda w_{i+1,j+1} = \\lambda w_{i-1,j}+2(1-\\lambda)w_{i,j}+\\lambda w_{i+1,j}$, con $\\lambda = \\dfrac{16k}{h^2}$.",
                    reveal: "$\\lambda = \\dfrac{16(0.1)}{(0.25)^2}=\\dfrac{1.6}{0.0625}=25.6$. Comparando con la forma pedida: $\\beta=-25.6$, $\\gamma=2(1+25.6)=53.2$, $\\eta=-25.6$, $\\alpha=25.6$, $\\delta=2(1-25.6)=-49.2$, $\\tau=25.6$. Válida para $i=1,2,3$ y $j=0,1$."
                },
                {
                    label: "Paso 3: Ubicar B y plantear la ecuación correspondiente",
                    hint: "$B=w_{3,1}$ (nodo interior $x_3$, tiempo $t_1$), obtenido al pasar de $t_0$ a $t_1$ ($j=0$), usando $i=3$: vecinos $w_{2,1}$ (conocido) y $w_{4,1}$ (frontera conocida).",
                    reveal: "$-25.6\\,w_{2,1}+53.2\\,B-25.6\\,w_{4,1} = 25.6\\,w_{2,0}-49.2\\,w_{3,0}+25.6\\,w_{4,0}$."
                },
                {
                    label: "Paso 4: Sustituir los valores conocidos y despejar B",
                    hint: "$w_{2,1}=1.3901$, $w_{4,1}=1.7635$, $w_{2,0}=1.6327$, $w_{3,0}=1.9306$, $w_{4,0}=2.2071$.",
                    reveal: "$-25.6(1.3901)+53.2B-25.6(1.7635) = 25.6(1.6327)-49.2(1.9306)+25.6(2.2071)$\n\n$-35.5866+53.2B-45.1456 = 41.7971-94.9855+56.5018=3.3134$\n\n$53.2B = 3.3134+35.5866+45.1456=84.0456 \\Rightarrow B\\approx 1.5798.$"
                }
            ]
        },
        {
            id: 5,
            context: "Considere el problema hiperbólico $$u_{tt}(x,t)=4u_{xx}(x,t)+2u_x(x,t)+f(x,t), \\quad 0<x<1.5,\\ 0<t<0.2,$$ $$u(x,0)=x,\\quad u_t(x,0)=g(x),\\quad u(0,t)=0,\\quad u(1.5,t)=1.5e^t.$$\n\nSe aproxima con diferencias centradas para las derivadas de orden 2, y regresiva para $u_x$.\n\n(a) Con $f(x,t)=(x-2)e^t$, $h=1/4$, $k=0.05$, escriba la fórmula en la forma $w_{i,j+1}=\\beta w_{i,j}+\\gamma w_{i+1,j}+\\eta w_{i-1,j}-w_{i,j-1}+\\epsilon f_{i,j}$.\n\n(b) Dada la tabla:\n\n$$\\begin{array}{c|ccccccc} u & x_0 & x_1 & x_2 & x_3 & x_4 & x_5 & x_6\\\\\\hline t_0 & 0 & 0.2500 & 0.5000 & 0.7500 & 1.0000 & 1.2500 & 1.5000\\\\ t_1 & 0 & 0.2625 & 0.5250 & 0.7875 & 1.0500 & 1.3125 & B\\\\ t_2 & 0 & 0.2761 & 0.5518 & 0.8275 & 1.1032 & 1.3792 & 1.6578\\\\ t_3 & 0 & 0.2908 & 0.5805 & 0.8701 & A & 1.4503 & 1.7428\\\\ t_4 & 0 & 0.3066 & 0.6111 & 0.9154 & 1.2200 & 1.5261 & 1.8321\\end{array}$$\n\nHalle A y B.",
            steps: [
                {
                    label: "Paso 1: Discretizar cada derivada",
                    hint: "$u_{tt}\\approx\\dfrac{w_{i,j+1}-2w_{i,j}+w_{i,j-1}}{k^2}$, $u_{xx}\\approx\\dfrac{w_{i+1,j}-2w_{i,j}+w_{i-1,j}}{h^2}$, $u_x\\approx\\dfrac{w_{i,j}-w_{i-1,j}}{h}$ (regresiva).",
                    reveal: "Sustituyendo en $u_{tt}=4u_{xx}+2u_x+f$ y multiplicando por $k^2$: $$w_{i,j+1}-2w_{i,j}+w_{i,j-1}=\\frac{4k^2}{h^2}(w_{i+1,j}-2w_{i,j}+w_{i-1,j})+\\frac{2k^2}{h}(w_{i,j}-w_{i-1,j})+k^2f_{i,j}.$$"
                },
                {
                    label: "Paso 2: Calcular las constantes numéricas",
                    hint: "$h=1/4$, $k=0.05$: calcule $4k^2/h^2$ y $2k^2/h$.",
                    reveal: "$\\dfrac{4k^2}{h^2}=\\dfrac{4(0.0025)}{0.0625}=0.16$, $\\dfrac{2k^2}{h}=\\dfrac{2(0.0025)}{0.25}=0.02$."
                },
                {
                    label: "Paso 3: Agrupar términos y despejar w_{i,j+1}",
                    hint: "Agrupe los coeficientes de $w_{i,j}$, $w_{i+1,j}$, $w_{i-1,j}$ tras expandir $-0.32w_{i,j}+0.16w_{i-1,j}+0.02w_{i,j}-0.02w_{i-1,j}$, sumando con el $2w_{i,j}$ inicial.",
                    reveal: "$w_{i,j+1} = 1.70\\,w_{i,j} + 0.16\\,w_{i+1,j} + 0.14\\,w_{i-1,j} - w_{i,j-1} + 0.0025\\,f_{i,j}$, es decir $\\beta=1.70,\\ \\gamma=0.16,\\ \\eta=0.14,\\ \\epsilon=k^2=0.0025$."
                },
                {
                    label: "Paso 4: Hallar B (nodo de frontera)",
                    hint: "$B=w_{6,1}$ está en $x_6=1.5$, que es la frontera derecha: allí $u$ se conoce exactamente por la condición de frontera dada $u(1.5,t)=1.5e^t$, sin necesidad de la recurrencia.",
                    reveal: "$B = 1.5\\,e^{0.05} \\approx 1.5\\,(1.05127) \\approx 1.5769$."
                },
                {
                    label: "Paso 5: Hallar A (nodo interior) usando la recurrencia",
                    hint: "$A=w_{4,3}$ (interior, $x_4=1.0$). Aplique la fórmula del Paso 3 con $j=2\\to j+1=3$: necesita $w_{4,2},w_{5,2},w_{3,2}$ (fila $t_2$) y $w_{4,1}$ (fila $t_1$), y $f_{4,2}=(x_4-2)e^{t_2}=(-1)e^{0.1}$.",
                    reveal: "$A = 1.70(1.1032)+0.16(1.3792)+0.14(0.8275)-1.0500+0.0025(-1.10517)$\n\n$= 1.87544+0.22067+0.11585-1.0500-0.00276 \\approx 1.1592.$"
                }
            ]
        }
    ]
},
{
    mission_id: "tp_2019",
    title: "Taller Parcial 2019",
    subtitle: "Condición de Lipschitz vectorial, estabilidad y esquemas parabólico/hiperbólico, sistemas de EDOs, Euler/Taylor-2, disparo lineal y diferencias finitas elípticas con derivadas cruzadas",
    exercises: [
        {
            id: 1,
            context: "Sea $f$ una función definida en la región $D:=\\{(t,y_1,y_2,y_3)\\in\\mathbb{R}^4 : t\\in[a,b], -\\infty<y_1,y_2,y_3<\\infty\\}$.\n\n(a) Complete: decimos que $f$ satisface una condición de Lipschitz en las variables $y_1,y_2,y_3$ en la región $D$ si $\\exists L>0$ tal que para todo $(t,y_1,y_2,y_3),(t,z_1,z_2,z_3)\\in D$ se cumple $\\ldots$\n\n(b) Considere el problema parabólico $$u_t(x,t)=\\frac{1}{49}u_{xx}(x,t),\\ 0<x<3,\\ t>0,\\qquad u(0,t)=u(3,t)=0,\\qquad u(x,0)=f(x).$$\ni. Con $h=\\frac37$, ¿para qué valores de $k$ es estable el método de diferencia finita \\textbf{progresiva} (explícito)?\nii. La fórmula \\textbf{regresiva} (implícita) con $h=\\frac37$, $k=\\frac12$ es $\\gamma(w_{i+1,j}+w_{i-1,j})+\\xi w_{i,j}=w_{i,j-1}$. Halle $\\gamma$ y $\\xi$.\n\n(c) Considere el problema hiperbólico $$u_{tt}(x,t)=4u_{xx}(x,t),\\ 0<x<2,\\ t>0,\\quad u(0,t)=0,\\ u(2,t)=t+2,\\quad u(x,0)=x,\\ u_t(x,0)=e^x.$$\ni. Con $h=\\frac25$, ¿para qué valores de $k$ es estable el método de diferencias \\textbf{centradas}?\nii. Halle $w_{i,1}$ (fórmula con error $O(h^2+k^2)$) con $h=\\frac25$, $k=\\frac1{10}$.",
            steps: [
                {
                    label: "Paso 1: Condición de Lipschitz vectorial (a)",
                    hint: "Generalice la definición escalar $|f(t,y)-f(t,z)|\\le L|y-z|$ a tres variables: la diferencia se acota por la suma de las diferencias de cada variable.",
                    reveal: "$f$ satisface una condición de Lipschitz en $y_1,y_2,y_3$ en $D$ si existe $L>0$ tal que $$|f(t,y_1,y_2,y_3)-f(t,z_1,z_2,z_3)|\\le L\\big(|y_1-z_1|+|y_2-z_2|+|y_3-z_3|\\big)$$ para todo $(t,y_1,y_2,y_3),(t,z_1,z_2,z_3)\\in D$."
                },
                {
                    label: "Paso 2: Estabilidad del método explícito (b.i)",
                    hint: "Para $u_t=\\alpha^2u_{xx}$, el método progresivo (explícito) es estable si $\\lambda=\\dfrac{\\alpha^2k}{h^2}\\le\\dfrac12$. Aquí $\\alpha^2=\\frac1{49}$ y $h=\\frac37\\Rightarrow h^2=\\frac9{49}$.",
                    reveal: "$\\lambda=\\dfrac{(1/49)k}{9/49}=\\dfrac{k}{9}\\le\\dfrac12 \\Rightarrow k\\le\\dfrac92=4.5$. Estable para $0<k\\le 4.5$."
                },
                {
                    label: "Paso 3: Coeficientes del esquema regresivo (b.ii)",
                    hint: "El esquema implícito estándar es $-\\lambda w_{i+1,j}-\\lambda w_{i-1,j}+(1+2\\lambda)w_{i,j}=w_{i,j-1}$, con $\\lambda=\\alpha^2k/h^2$. Compare con la forma dada para identificar $\\gamma=-\\lambda$, $\\xi=1+2\\lambda$.",
                    reveal: "Con $k=\\frac12$: $\\lambda=\\dfrac{(1/49)(1/2)}{9/49}=\\dfrac{1}{18}$. Entonces $\\gamma=-\\dfrac1{18}$ y $\\xi=1+\\dfrac{2}{18}=\\dfrac{10}{9}$."
                },
                {
                    label: "Paso 4: Estabilidad del método de diferencias centradas para la ecuación de onda (c.i)",
                    hint: "Para $u_{tt}=\\alpha^2u_{xx}$, el método de diferencias centradas es estable (condición de Courant) si $\\lambda=\\dfrac{\\alpha k}{h}\\le1$. Aquí $\\alpha^2=4\\Rightarrow\\alpha=2$, $h=\\frac25$.",
                    reveal: "$k\\le\\dfrac{h}{\\alpha}=\\dfrac{2/5}{2}=\\dfrac15=0.2$. Estable para $0<k\\le0.2$."
                },
                {
                    label: "Paso 5: Fórmula de arranque w_{i,1} (c.ii) — deducción general",
                    hint: "El esquema central es $w_{i,j+1}=2(1-\\lambda^2)w_{i,j}+\\lambda^2(w_{i+1,j}+w_{i-1,j})-w_{i,j-1}$. Para $j=0$ se necesita el punto ficticio $w_{i,-1}$; se elimina usando la diferencia centrada de $u_t(x,0)=g(x)$: $\\frac{w_{i,1}-w_{i,-1}}{2k}=g(x_i)$.",
                    reveal: "Despejando se obtiene la fórmula estándar $$w_{i,1}=(1-\\lambda^2)f(x_i)+\\frac{\\lambda^2}{2}\\big(f(x_{i+1})+f(x_{i-1})\\big)+k\\,g(x_i),$$ donde $f(x)=u(x,0)$ y $g(x)=u_t(x,0)$."
                },
                {
                    label: "Paso 6: Evaluar w_{i,1} con los datos del problema",
                    hint: "Sustituya $\\lambda=\\frac{\\alpha k}{h}=\\frac{2(1/10)}{2/5}=\\frac12$ (así $\\lambda^2=\\frac14$), $f(x)=x$, $g(x)=e^x$.",
                    reveal: "$w_{i,1}=\\dfrac34x_i+\\dfrac18(x_{i+1}+x_{i-1})+\\dfrac{1}{10}e^{x_i}$. Como $x_{i\\pm1}=x_i\\pm h$, se tiene $x_{i+1}+x_{i-1}=2x_i$, luego $$w_{i,1}=\\frac34x_i+\\frac14x_i+0.1e^{x_i}=x_i+0.1e^{x_i}.$$"
                }
            ]
        },
        {
            id: 2,
            context: "Sea el P.V.I. de orden superior $$y'''(t)-\\sin(y''(t))+t^2y'(t)-\\cos(y(t))=1,\\quad 1\\le t\\le3,\\qquad y(1)=\\gamma,\\ y'(1)=\\mu,\\ y''(1)=\\xi.$$ Introduzca las variables necesarias para escribirlo como un sistema de primer orden y defina $\\mathbb{U}$, $\\mathbb{F}$ y el vector inicial (el examen lo denota $\\mathbb{Z}_a$, aunque es el vector de condiciones iniciales $\\alpha$ usual) tales que $$\\mathbb{U}'(t)=\\mathbb{F}(t,\\mathbb{U}(t)),\\quad \\mathbb{U}(1)=\\mathbb{Z}_a.$$",
            steps: [
                {
                    label: "Paso 1: Definir las variables de estado",
                    hint: "Para un P.V.I. de orden 3, use $u_1=y$, $u_2=y'$, $u_3=y''$, de modo que $u_1'=u_2$ y $u_2'=u_3$ automáticamente.",
                    reveal: "$u_1(t)=y(t)$, $u_2(t)=y'(t)$, $u_3(t)=y''(t)$."
                },
                {
                    label: "Paso 2: Despejar y''' de la ecuación",
                    hint: "De $y'''-\\sin(y'')+t^2y'-\\cos(y)=1$, despeje $y'''$ en términos de $u_1,u_2,u_3$.",
                    reveal: "$u_3'=y'''=1+\\sin(u_3)-t^2u_2+\\cos(u_1)$."
                },
                {
                    label: "Paso 3: Escribir el sistema de primer orden",
                    hint: "Reúna las tres ecuaciones con sus condiciones iniciales.",
                    reveal: "$$\\begin{cases}u_1'=u_2, & u_1(1)=\\gamma\\\\ u_2'=u_3, & u_2(1)=\\mu\\\\ u_3'=1+\\sin(u_3)-t^2u_2+\\cos(u_1), & u_3(1)=\\xi\\end{cases}$$"
                },
                {
                    label: "Paso 4: Forma vectorial U, F y el vector inicial",
                    hint: "Agrupe las tres componentes en un vector $\\mathbb{U}=(u_1,u_2,u_3)^T$ y el lado derecho en $\\mathbb{F}$.",
                    reveal: "$$\\mathbb{U}(t)=\\begin{pmatrix}u_1\\\\u_2\\\\u_3\\end{pmatrix},\\quad \\mathbb{F}(t,\\mathbb{U})=\\begin{pmatrix}u_2\\\\u_3\\\\1+\\sin(u_3)-t^2u_2+\\cos(u_1)\\end{pmatrix},\\quad \\mathbb{U}(1)=\\begin{pmatrix}\\gamma\\\\\\mu\\\\\\xi\\end{pmatrix}.$$"
                }
            ]
        },
        {
            id: 3,
            context: "Considere el P.V.I. $$y'(t)=\\frac2t y(t)+\\cos(y(t)),\\quad 3\\le t\\le5,\\qquad y(3)=2.3.$$\n\n(a) Demuestre que este P.V.I. tiene única solución.\n(b) Escriba la fórmula de avance del método de Euler con $h=\\frac14$.\n(c) Escriba la fórmula de avance del método de Taylor de orden 2 con $h=\\frac14$.",
            steps: [
                {
                    label: "Paso 1: Verificar continuidad y acotar la derivada parcial en y",
                    hint: "El teorema de existencia y unicidad exige que $f(t,y)=\\frac2ty+\\cos(y)$ sea continua y satisfaga Lipschitz en $y$. Calcule $\\partial f/\\partial y$.",
                    reveal: "$f$ es continua en $[3,5]\\times\\mathbb{R}$ (cociente $2/t$ con $t\\ge3\\neq0$, y $\\cos(y)$ continua). $\\dfrac{\\partial f}{\\partial y}=\\dfrac2t-\\sin(y)$."
                },
                {
                    label: "Paso 2: Acotar y concluir Lipschitz",
                    hint: "Para $t\\in[3,5]$, $\\frac2t\\in[\\frac25,\\frac23]$, y $|\\sin(y)|\\le1$, así que $\\left|\\frac{\\partial f}{\\partial y}\\right|$ está acotada.",
                    reveal: "$\\left|\\dfrac{\\partial f}{\\partial y}\\right|\\le\\dfrac23+1=\\dfrac53=:L$ para todo $t\\in[3,5]$, $y\\in\\mathbb{R}$. Como $\\partial f/\\partial y$ es continua y acotada, $f$ satisface Lipschitz en $y$ con constante $L=\\frac53$. Por el teorema de existencia y unicidad, el P.V.I. tiene solución única en $[3,5]$."
                },
                {
                    label: "Paso 3: Fórmula de Euler (b)",
                    hint: "$w_{i+1}=w_i+h\\,f(t_i,w_i)$, con $t_i=3+ih$.",
                    reveal: "$w_0=2.3$, $\\quad w_{i+1}=w_i+\\dfrac14\\left(\\dfrac{2}{t_i}w_i+\\cos(w_i)\\right)$, $t_i=3+\\dfrac{i}{4}$, $i=0,\\ldots,7$."
                },
                {
                    label: "Paso 4: Derivada total f'(t,y) para Taylor de orden 2",
                    hint: "$f'(t,y)=\\dfrac{\\partial f}{\\partial t}+\\dfrac{\\partial f}{\\partial y}\\cdot f(t,y)$. Calcule $\\partial f/\\partial t=-\\dfrac{2y}{t^2}$.",
                    reveal: "$f'(t,y)=-\\dfrac{2y}{t^2}+\\left(\\dfrac2t-\\sin(y)\\right)\\left(\\dfrac2ty+\\cos(y)\\right)$."
                },
                {
                    label: "Paso 5: Fórmula de Taylor de orden 2 (c)",
                    hint: "$w_{i+1}=w_i+h\\,f(t_i,w_i)+\\dfrac{h^2}{2}f'(t_i,w_i)$.",
                    reveal: "$$w_{i+1}=w_i+\\frac14\\left(\\frac{2}{t_i}w_i+\\cos(w_i)\\right)+\\frac{1}{32}\\left[-\\frac{2w_i}{t_i^2}+\\left(\\frac{2}{t_i}-\\sin(w_i)\\right)\\left(\\frac{2}{t_i}w_i+\\cos(w_i)\\right)\\right],$$ con $t_i=3+\\frac{i}{4}$."
                }
            ]
        },
        {
            id: 4,
            context: "Considere el P.V.F. $$\\frac{1}{\\tan^{-1}(x)}y''(x)+4x^2y'(x)-3xs(x)y(x)=\\ln x,\\quad 3<x<5,\\qquad y(3)=1.3,\\ y(5)=\\beta.$$\n\n(a) Dé condiciones sobre $s$ para garantizar unicidad.\n(b) Plantee los dos P.V.I. asociados al método del disparo (variables $u,v$).\n(c) Con $h=\\frac23$, las aproximaciones RK4 son:\n$$\\begin{array}{c|cccc}x&x_0&x_1&x_2&x_3\\\\\\hline u(x)&1.3&1.85&2.37&3.15\\\\ v(x)&0&0.09&0.17&0.23\\end{array}$$\nSi $y(x_2)\\approx3.54$, halle $\\beta$.\n(d) ¿Cuál es el orden del error del método del disparo aquí?",
            steps: [
                {
                    label: "Paso 1: Llevar a la forma estándar y''=Py'+Qy+R",
                    hint: "Multiplique toda la ecuación por $\\tan^{-1}(x)$ (que es continua y positiva en $(3,5)$ pues $x>0$) para despejar $y''$.",
                    reveal: "$$y''=-4x^2\\tan^{-1}(x)\\,y'+3xs(x)\\tan^{-1}(x)\\,y+\\tan^{-1}(x)\\ln x.$$ Así $P(x)=-4x^2\\tan^{-1}(x)$, $Q(x)=3xs(x)\\tan^{-1}(x)$, $R(x)=\\tan^{-1}(x)\\ln x$."
                },
                {
                    label: "Paso 2: Condición sobre s (a)",
                    hint: "El teorema de unicidad para P.V.F. lineales requiere $Q(x)>0$ y continua en $[3,5]$. Como $x>0$ y $\\tan^{-1}(x)>0$ en $[3,5]$, ¿qué debe cumplir $s$?",
                    reveal: "Basta que $s$ sea continua y estrictamente positiva en $[3,5]$, pues entonces $Q(x)=3xs(x)\\tan^{-1}(x)>0$ y continua, garantizando solución única."
                },
                {
                    label: "Paso 3: Plantear los dos P.V.I. del disparo (b)",
                    hint: "El método del disparo usa $u$ (con la condición no homogénea) y $v$ (problema homogéneo asociado) ambos partiendo de $x=3$.",
                    reveal: "$$u''=Pu'+Qu+R,\\ \\ u(3)=1.3,\\ u'(3)=0; \\qquad v''=Pv'+Qv,\\ \\ v(3)=0,\\ v'(3)=1.$$"
                },
                {
                    label: "Paso 4: Determinar la constante c con el dato y(x2)=3.54",
                    hint: "La solución del disparo es $y(x)=u(x)+c\\,v(x)$. Use $x_2$ para despejar $c$: $c=\\dfrac{y(x_2)-u(x_2)}{v(x_2)}$.",
                    reveal: "$c=\\dfrac{3.54-2.37}{0.17}=\\dfrac{1.17}{0.17}\\approx6.8824$."
                },
                {
                    label: "Paso 5: Calcular β (c)",
                    hint: "$\\beta=y(x_3)=u(x_3)+c\\,v(x_3)$.",
                    reveal: "$\\beta\\approx3.15+6.8824(0.23)\\approx3.15+1.5829=4.7329$."
                },
                {
                    label: "Paso 6: Orden del error del método del disparo (d)",
                    hint: "El error del disparo hereda el orden del método usado para resolver los P.V.I., que aquí es Runge-Kutta de orden 4.",
                    reveal: "El error es $O(h^4)$."
                }
            ]
        },
        {
            id: 5,
            context: "Considere el problema elíptico \\textit{modificado} $$\\frac{3}{16}u_{xx}(x,y)+u_{yy}(x,y)+\\frac54u_x(x,y)+\\frac13u_y(x,y)=f(x,y),\\quad 1<x<2,\\ 2<y<3,$$ con $u(x,2)=g_1(x)$, $u(x,3)=g_2(x)$ para $1\\le x\\le2$, y $u(1,y)=s_1(y)$, $u(2,y)=s_2(y)$ para $2\\le y\\le3$.\n\n(a) Con $h=\\frac14$ (eje x) y $k=\\frac13$ (eje y), identifique los puntos donde u es desconocida.\n(b) Use diferencia centrada para las segundas derivadas, \\textbf{regresiva} para $u_x$ y \\textbf{progresiva} para $u_y$; halle $\\beta,\\gamma,\\eta,\\xi,\\delta$ en $$\\beta w_{i-1,j}+\\gamma w_{i+1,j}+\\eta w_{i,j+1}+\\xi w_{i,j-1}+\\delta w_{i,j}=f(x_i,y_j).$$\n(c) ¿Cuál es el orden del error?",
            steps: [
                {
                    label: "Paso 1: Construir la malla",
                    hint: "$x_i=1+ih$, $i=0,\\ldots,4$; $y_j=2+jk$, $j=0,\\ldots,3$.",
                    reveal: "$x_0,\\ldots,x_4=1,1.25,1.5,1.75,2$. $y_0,\\ldots,y_3=2,2.3333,2.6667,3$. Los puntos con u desconocida son los interiores: $i=1,2,3$ y $j=1,2$ (6 puntos: $(x_1,y_1),(x_2,y_1),(x_3,y_1),(x_1,y_2),(x_2,y_2),(x_3,y_2)$); todos los demás están en la frontera y son conocidos por $g_1,g_2,s_1,s_2$."
                },
                {
                    label: "Paso 2: Sustituir las diferencias finitas indicadas",
                    hint: "$u_{xx}\\approx\\frac{w_{i+1,j}-2w_{i,j}+w_{i-1,j}}{h^2}$, $u_{yy}\\approx\\frac{w_{i,j+1}-2w_{i,j}+w_{i,j-1}}{k^2}$, $u_x\\approx\\frac{w_{i,j}-w_{i-1,j}}{h}$ (regresiva), $u_y\\approx\\frac{w_{i,j+1}-w_{i,j}}{k}$ (progresiva).",
                    reveal: "$$\\frac{3}{16}\\cdot\\frac{w_{i+1,j}-2w_{i,j}+w_{i-1,j}}{h^2}+\\frac{w_{i,j+1}-2w_{i,j}+w_{i,j-1}}{k^2}+\\frac54\\cdot\\frac{w_{i,j}-w_{i-1,j}}{h}+\\frac13\\cdot\\frac{w_{i,j+1}-w_{i,j}}{k}=f(x_i,y_j).$$"
                },
                {
                    label: "Paso 3: Sustituir h=1/4, k=1/3 y agrupar coeficientes",
                    hint: "Con $h=\\frac14$: $1/h^2=16$, $1/h=4$. Con $k=\\frac13$: $1/k^2=9$, $1/k=3$. Multiplique cada término por su factor y agrupe por $w_{i-1,j},w_{i+1,j},w_{i,j+1},w_{i,j-1},w_{i,j}$.",
                    reveal: "$\\frac{3}{16}(16)(\\cdot)=3(\\cdot)$ da $3w_{i+1,j}-6w_{i,j}+3w_{i-1,j}$. La parte $u_{yy}$ da $9w_{i,j+1}-18w_{i,j}+9w_{i,j-1}$. La parte $u_x$: $\\frac54(4)(w_{i,j}-w_{i-1,j})=5w_{i,j}-5w_{i-1,j}$. La parte $u_y$: $\\frac13(3)(w_{i,j+1}-w_{i,j})=w_{i,j+1}-w_{i,j}$."
                },
                {
                    label: "Paso 4: Sumar y leer los coeficientes β,γ,η,ξ,δ",
                    hint: "Sume todas las contribuciones término a término.",
                    reveal: "$w_{i-1,j}$: $3-5=-2$. $w_{i+1,j}$: $3$. $w_{i,j+1}$: $9+1=10$. $w_{i,j-1}$: $9$. $w_{i,j}$: $-6-18+5-1=-20$. Entonces $$-2w_{i-1,j}+3w_{i+1,j}+10w_{i,j+1}+9w_{i,j-1}-20w_{i,j}=f(x_i,y_j),$$ es decir $\\beta=-2$, $\\gamma=3$, $\\eta=10$, $\\xi=9$, $\\delta=-20$. Válida para $i=1,2,3$, $j=1,2$."
                },
                {
                    label: "Paso 5: Orden del error (c)",
                    hint: "Las diferencias centradas de segundo orden dan error $O(h^2)$ y $O(k^2)$; pero las diferencias regresiva y progresiva de $u_x,u_y$ son de \\textbf{primer} orden, $O(h)$ y $O(k)$. El error total del esquema mixto está dominado por el término de menor orden.",
                    reveal: "El error es $O(h+k)$ (no $O(h^2+k^2)$, porque las derivadas de primer orden se aproximaron con fórmulas de un solo lado, de precisión $O(h)$ y $O(k)$)."
                }
            ]
        }
    ]
},
{
    mission_id: "tp_2025",
    title: "Taller Parcial 2025",
    subtitle: "Constante de Lipschitz y convexidad, disparo lineal, PVI de orden superior con Euler Modificado, diferencias finitas para EDP parabólica con esquema mixto",
    exercises: [
        {
            id: 1,
            context: "Sean $D=\\{(t,y): -5\\le t\\le 2,\\ 2<y<4\\}$ una región del plano y $f(t,y)=e^{-2t}\\tan^{-1}(3y)$.\n\n(a) Enuncie la definición de que una función $g(t,y)$ satisfaga una condición de Lipschitz con respecto a la variable $y$, en una región $R$ del plano.\n\n(b) ¿Es $D$ una región convexa? Justifique.\n\n(c) Halle el menor número que le sirve a $f$ como constante de Lipschitz con respecto a $y$ en $D$.",
            steps: [
                {
                    label: "Paso 1: Definición de condición de Lipschitz",
                    hint: "Recuerde: $g$ satisface una condición de Lipschitz en $R$ respecto a $y$ si existe $L>0$ tal que $|g(t,y_1)-g(t,y_2)|\\le L|y_1-y_2|$ para todo $(t,y_1),(t,y_2)\\in R$. $L$ se llama constante de Lipschitz.",
                    reveal: "Esa es exactamente la definición pedida: existencia de $L>0$ con $|g(t,y_1)-g(t,y_2)|\\le L|y_1-y_2|$ para todo par de puntos de $R$ con la misma primera coordenada."
                },
                {
                    label: "Paso 2: ¿Es D convexa?",
                    hint: "Una región es convexa si el segmento que une cualesquiera dos puntos de la región queda contenido en ella. $D$ es una \"banda\" $-5\\le t\\le2$, $2<y<4$.",
                    reveal: "Sí: para cualesquiera $(t_1,y_1),(t_2,y_2)\\in D$, el segmento que los une permanece dentro de la banda (ambas coordenadas siguen acotadas dentro de los mismos rangos). Por lo tanto $D$ es convexa."
                },
                {
                    label: "Paso 3: Criterio para hallar L cuando la región es convexa",
                    hint: "Si $R$ es convexa y $g$ es diferenciable, basta tomar $L=\\max_{(t,y)\\in R}\\left|\\dfrac{\\partial g}{\\partial y}(t,y)\\right|$ (Teorema del Valor Medio aplicado a la variable $y$).",
                    reveal: "Como $D$ es convexa (Paso 2), es suficiente hallar $L$ tal que $\\max_{(t,y)\\in D}\\left|\\dfrac{\\partial f}{\\partial y}(t,y)\\right|\\le L$."
                },
                {
                    label: "Paso 4: Calcular y acotar ∂f/∂y",
                    hint: "Derive $f(t,y)=e^{-2t}\\tan^{-1}(3y)$ respecto a $y$ (recuerde $\\frac{d}{dy}\\tan^{-1}(3y)=\\frac{3}{1+9y^2}$), y acote cada factor por separado: $e^{-2t}$ crece cuando $t$ decrece, y $\\frac{3}{1+9y^2}$ crece cuando $y$ decrece.",
                    reveal: "$\\dfrac{\\partial f}{\\partial y}(t,y)=\\dfrac{3e^{-2t}}{1+9y^2}$. Como $y>2$: $\\dfrac{3}{1+9y^2}\\le\\dfrac{3}{1+9(2)^2}=\\dfrac{3}{37}$. Como $t\\ge-5$: $e^{-2t}\\le e^{-2(-5)}=e^{10}$. Entonces $\\left|\\dfrac{\\partial f}{\\partial y}\\right|\\le\\dfrac{3e^{10}}{37}$. Por lo tanto $L=\\dfrac{3e^{10}}{37}$."
                }
            ]
        },
        {
            id: 2,
            context: "Considere el P.V.F. $$x^2y''-y+e^xy'=x^2-1,\\quad 1<x<2,\\qquad y(1)=\\alpha,\\ y(2)=1,$$ donde $\\alpha$ es una constante conocida.\n\n(a) ¿Se puede garantizar que este P.V.F. tiene única solución? Justifique.\n\n(b) Plantee los dos P.V.I. asociados al método del disparo, usando las variables $u$ y $v$.\n\n(c) Si las aproximaciones (con $h=\\frac13$) son:\n$$\\begin{array}{c|cccc} & x_0 & x_1 & x_2 & x_3\\\\\\hline u(x) & 0.5 & 0.5666 & 0.7254 & 0.9527\\\\ v(x) & 0 & 0.2648 & 0.4610 & 0.6328\\end{array}$$\ndetermine $\\alpha$ y $y(x_2)$.",
            steps: [
                {
                    label: "Paso 1: Llevar a la forma estándar y verificar el teorema de existencia y unicidad",
                    hint: "Despeje $y''$ y compare con $y''=p(x)y'+q(x)y+r(x)$. El teorema exige $p,q,r$ continuas en $[a,b]$ y $q(x)>0$ en todo el intervalo.",
                    reveal: "$y''=-\\dfrac{e^x}{x^2}y'+\\dfrac1{x^2}y+\\dfrac{x^2-1}{x^2}$, con $p(x)=-\\frac{e^x}{x^2}$, $q(x)=\\frac1{x^2}$, $r(x)=\\frac{x^2-1}{x^2}$, todas continuas en $[1,2]$ (cociente de funciones continuas con denominador no nulo). Además $q(x)=\\frac1{x^2}>0$ en $[1,2]$. Por el teorema de existencia y unicidad para P.V.F. lineales, el problema tiene única solución."
                },
                {
                    label: "Paso 2: Plantear el P.V.I. para u (no homogéneo)",
                    hint: "$u$ resuelve la misma ecuación que $y$, arrancando con el valor de frontera desconocido $\\alpha$ y derivada inicial 0.",
                    reveal: "$x^2u''-u+e^xu'=x^2-1,\\ 1<x<2,\\qquad u(1)=\\alpha,\\ u'(1)=0$."
                },
                {
                    label: "Paso 3: Plantear el P.V.I. para v (homogéneo)",
                    hint: "$v$ resuelve la parte homogénea (lado derecho $=0$) con condiciones iniciales $v(1)=0,\\ v'(1)=1$, para poder \"corregir\" la pendiente y llegar a $y(2)=1$.",
                    reveal: "$x^2v''-v+e^xv'=0,\\ 1<x<2,\\qquad v(1)=0,\\ v'(1)=1$."
                },
                {
                    label: "Paso 4: Leer α de la tabla",
                    hint: "Por construcción, $\\alpha=u(1)=u(x_0)$.",
                    reveal: "$\\alpha=u(x_0)=0.5$."
                },
                {
                    label: "Paso 5: Combinar u y v para aproximar y(x₂)",
                    hint: "La fórmula del disparo lineal es $y(x)=u(x)+\\dfrac{\\beta-u(2)}{v(2)}\\,v(x)$, donde $\\beta=y(2)=1$ es el dato de frontera derecho conocido. Aquí $u(2)=u(x_3)=0.9527$ y $v(2)=v(x_3)=0.6328$.",
                    reveal: "$y(x_2)=u(x_2)+\\dfrac{1-u(x_3)}{v(x_3)}v(x_2)=0.7254+\\dfrac{1-0.9527}{0.6328}(0.4610)=0.7254+\\dfrac{0.0473}{0.6328}(0.4610)\\approx0.7254+0.0345=0.7599$."
                }
            ]
        },
        {
            id: 3,
            context: "Considere el P.V.I. de orden superior $$(t+1)y''(t)+\\cos(\\pi t)y'(t)+2(y(t))^2=1,\\quad 0\\le t\\le1,\\qquad y(0)=0,\\ y'(0)=1.$$\n\n(a) Introduzca las variables necesarias para escribirlo como sistema de primer orden. Defina $\\mathbb U$, $\\mathbb F$ y el vector inicial $\\alpha$ tal que $\\mathbb U'(t)=\\mathbb F(t,\\mathbb U(t))$, $\\mathbb U(0)=\\alpha$.\n\n(b) Use el método de Euler Modificado con $h=1/4$ para aproximar $y(1/2)$ y $y'(1/2)$, sabiendo que $y(1/4)=0.25300$ y $y'(1/4)=1.0368$.",
            steps: [
                {
                    label: "Paso 1: Cambio de variable",
                    hint: "Para un P.V.I. de orden 2, introduzca $u_1=y$, $u_2=y'$.",
                    reveal: "$u_1(t)=y(t)$, $u_2(t)=y'(t)$."
                },
                {
                    label: "Paso 2: Escribir el sistema de primer orden",
                    hint: "Derive cada variable nueva: $u_1'=u_2$, y despeje $y''$ de la ecuación original para obtener $u_2'$.",
                    reveal: "$u_1'(t)=u_2(t)$; despejando $y''=\\dfrac{1-\\cos(\\pi t)y'-2y^2}{t+1}$, se obtiene $u_2'(t)=\\dfrac1{t+1}\\big(1-\\cos(\\pi t)u_2(t)-2(u_1(t))^2\\big)$."
                },
                {
                    label: "Paso 3: Forma vectorial",
                    hint: "Agrupe $u_1,u_2$ en un vector $\\mathbb U$, las dos ecuaciones en $\\mathbb F$, y las condiciones iniciales en $\\alpha$.",
                    reveal: "$\\mathbb U(t)=\\begin{pmatrix}u_1(t)\\\\u_2(t)\\end{pmatrix}$, $\\ \\alpha=\\mathbb U(0)=\\begin{pmatrix}0\\\\1\\end{pmatrix}$, $\\ \\mathbb F(t,\\mathbb U)=\\begin{pmatrix}u_2\\\\ \\frac1{t+1}\\big(1-\\cos(\\pi t)u_2-2u_1^2\\big)\\end{pmatrix}$."
                },
                {
                    label: "Paso 4: Euler Modificado — calcular K₁",
                    hint: "El método de Euler Modificado (Heun) usa $W_{n+1}=W_n+\\frac h2(K_1+K_2)$ con $K_1=\\mathbb F(t_n,W_n)$. Aquí $t_1=1/4$, $W_1=(0.25300,\\ 1.0368)$, y recuerde $\\cos(\\pi/4)=0.7071$.",
                    reveal: "$K_1=\\mathbb F\\!\\left(\\tfrac14,\\begin{pmatrix}0.25300\\\\1.0368\\end{pmatrix}\\right)=\\begin{pmatrix}1.0368\\\\ \\frac1{1.25}\\big(1-0.7071(1.0368)-2(0.25300)^2\\big)\\end{pmatrix}=\\begin{pmatrix}1.0368\\\\0.1111\\end{pmatrix}$."
                },
                {
                    label: "Paso 5: Calcular K₂",
                    hint: "$K_2=\\mathbb F(t_1+h,\\ W_1+hK_1)$. Primero calcule el punto de evaluación $W_1+hK_1$, luego evalúe $\\mathbb F$ ahí (note que $t_1+h=1/2$ y $\\cos(\\pi/2)=0$, lo que simplifica el cálculo).",
                    reveal: "$W_1+\\tfrac14K_1=\\begin{pmatrix}0.25300+0.25(1.0368)\\\\1.0368+0.25(0.1111)\\end{pmatrix}=\\begin{pmatrix}0.5122\\\\1.0646\\end{pmatrix}$. Entonces $K_2=\\mathbb F\\!\\left(\\tfrac12,\\begin{pmatrix}0.5122\\\\1.0646\\end{pmatrix}\\right)=\\begin{pmatrix}1.0646\\\\ \\frac1{1.5}\\big(1-0-2(0.5122)^2\\big)\\end{pmatrix}=\\begin{pmatrix}1.0646\\\\0.3169\\end{pmatrix}$."
                },
                {
                    label: "Paso 6: Combinar K₁ y K₂",
                    hint: "$W_2=W_1+\\dfrac h2(K_1+K_2)$, con $h/2=1/8$.",
                    reveal: "$W_2=\\begin{pmatrix}0.25300\\\\1.0368\\end{pmatrix}+\\tfrac18\\left[\\begin{pmatrix}1.0368\\\\0.1111\\end{pmatrix}+\\begin{pmatrix}1.0646\\\\0.3169\\end{pmatrix}\\right]=\\begin{pmatrix}0.5157\\\\1.0903\\end{pmatrix}\\approx\\begin{pmatrix}y(1/2)\\\\y'(1/2)\\end{pmatrix}$. Es decir, $y(1/2)\\approx0.5157$ y $y'(1/2)\\approx1.0903$."
                }
            ]
        },
        {
            id: 4,
            context: "Considere el problema parabólico modificado $$\\frac43u_t(x,t)+\\frac34u_x(x,t)=\\frac5{16}u_{xx}(x,t)+f(x,t),\\quad 1<x<2,\\ 0<t<1,$$ con $u(x,0)=g(x)$, $u(1,t)=s_1(t)$, $u(2,t)=s_2(t)$.\n\n(a) Discretice con $h=\\frac14$ (eje $x$) y $k=\\frac13$ (eje $t$). Identifique en qué puntos no se conoce $u$.\n\n(b) Use diferencia centrada para $u_{xx}$, progresiva (adelante) para $u_t$ y regresiva (atrás) para $u_x$. Encuentre $\\beta,\\gamma,\\eta,\\xi,\\delta$ tales que $$\\beta w_{i-1,j}+\\gamma w_{i+1,j}+\\eta w_{i,j+1}+\\xi w_{i,j-1}+\\delta w_{i,j}=f(x_i,t_j).$$\n\n(c) ¿Para qué valores de $i,j$ es válida esta fórmula?",
            steps: [
                {
                    label: "Paso 1: Construir la malla",
                    hint: "Con $h=1/4$ y $1\\le x\\le2$: $n=4$ subintervalos (5 puntos $x_0,\\dots,x_4$). Con $k=1/3$ y $0\\le t\\le1$: $m=3$ subintervalos (4 puntos $t_0,\\dots,t_3$). Los puntos con $u$ conocida son $t=t_0$ (condición inicial) y $x=x_0,x_4$ (fronteras espaciales); todo lo demás es incógnita.",
                    reveal: "Malla de $5\\times4$ puntos: $x_i=1+\\frac{i}{4}$ ($i=0,\\dots,4$), $t_j=\\frac{j}{3}$ ($j=0,\\dots,3$). Se desconoce $u$ en los 9 puntos interiores $i=1,2,3$, $j=1,2,3$ (los demás son frontera o condición inicial, dados)."
                },
                {
                    label: "Paso 2: Sustituir cada derivada por su diferencia finita",
                    hint: "Progresiva en $t$: $u_t\\approx\\frac{w_{i,j+1}-w_{i,j}}{k}$. Regresiva en $x$: $u_x\\approx\\frac{w_{i,j}-w_{i-1,j}}{h}$. Centrada: $u_{xx}\\approx\\frac{w_{i+1,j}-2w_{i,j}+w_{i-1,j}}{h^2}$.",
                    reveal: "$\\dfrac43\\dfrac{w_{i,j+1}-w_{i,j}}{k}+\\dfrac34\\dfrac{w_{i,j}-w_{i-1,j}}{h}=\\dfrac5{16}\\dfrac{w_{i+1,j}-2w_{i,j}+w_{i-1,j}}{h^2}+f(x_i,t_j)$."
                },
                {
                    label: "Paso 3: Sustituir h=1/4, k=1/3 y simplificar",
                    hint: "Note que $1/k=3$, $1/h=4$, $1/h^2=16$; multiplique cada término y agrupe coeficientes de cada $w$.",
                    reveal: "$4(w_{i,j+1}-w_{i,j})+3(w_{i,j}-w_{i-1,j})=5(w_{i+1,j}-2w_{i,j}+w_{i-1,j})+f(x_i,t_j)$, que al agrupar da $$-8w_{i-1,j}-5w_{i+1,j}+4w_{i,j+1}+9w_{i,j}=f(x_i,t_j).$$ Es decir $\\beta=-8$, $\\gamma=-5$, $\\eta=4$, $\\xi=0$ (no aparece $w_{i,j-1}$ porque la diferencia en $t$ es progresiva), $\\delta=9$."
                },
                {
                    label: "Paso 4: Rango de validez",
                    hint: "La fórmula solo aplica en los puntos interiores identificados en el Paso 1.",
                    reveal: "Es válida para $i=1,2,3$ y $j=1,2,3$."
                }
            ]
        }
    ]
},
{
    mission_id: "simulacro",
    title: "Simulacro de Parcial",
    subtitle: "Selección múltiple teórica + P.V.I. de orden superior, disparo lineal y diferencias finitas elípticas",
    exercises: [
        {
            id: 1,
            context: "Sea $D := \\{(t,y)\\in\\mathbb{R}^2 : 0\\le t\\le 1,\\ -\\infty<y<\\infty\\}$ y considere $$f(t,y) := t\\,\\mathrm{sen}(y) + e^{-t}.$$ El menor número que sirve como constante de Lipschitz para $f$ respecto a $y$ en $D$ es:\n\n(a) $L=0$ (b) $L=1$ (c) $L=e$ (d) $L=2$",
            steps: [
                {
                    label: "Paso 1: Recordar el criterio para hallar L",
                    hint: "Si $f$ es diferenciable en $y$, la menor constante de Lipschitz en una región convexa es $L=\\sup_{(t,y)\\in D}\\left|\\dfrac{\\partial f}{\\partial y}(t,y)\\right|$.",
                    reveal: "$\\dfrac{\\partial f}{\\partial y} = t\\cos(y)$."
                },
                {
                    label: "Paso 2: Acotar la derivada parcial en D",
                    hint: "En $D$: $0\\le t\\le1$ y $|\\cos(y)|\\le1$ para todo $y$.",
                    reveal: "$|t\\cos(y)| \\le t\\cdot 1 \\le 1$, con el valor $1$ alcanzado en $t=1$, $y=0$ (donde $\\cos(0)=1$)."
                },
                {
                    label: "Paso 3: Concluir",
                    hint: "La cota es alcanzada, así que es la menor constante posible.",
                    reveal: "$L=1$. Respuesta correcta: \\textbf{(b)}."
                }
            ]
        },
        {
            id: 2,
            context: "El método de Euler (explícito), $w_{i+1}=w_i+h f(t_i,w_i)$, se emplea en un intervalo $[a,b]$ fijo. Bajo hipótesis usuales, el error de truncamiento \\textbf{global} es de orden:\n\n(a) $\\mathcal{O}(h)$ (b) $\\mathcal{O}(h^2)$ (c) $\\mathcal{O}(h^3)$ (d) $\\mathcal{O}(1)$",
            steps: [
                {
                    label: "Paso 1: Distinguir error local vs. global",
                    hint: "El error de truncamiento \\textbf{local} de Euler es $\\mathcal{O}(h^2)$ por paso, pero el error \\textbf{global} (acumulado) es un orden menor porque el número de pasos en $[a,b]$ crece como $1/h$.",
                    reveal: "Error acumulado $\\approx \\dfrac{b-a}{h}\\cdot \\mathcal{O}(h^2) = \\mathcal{O}(h)$."
                },
                {
                    label: "Paso 2: Concluir",
                    hint: "Este es el resultado clásico: Euler es un método de orden 1 (global).",
                    reveal: "Respuesta correcta: \\textbf{(a)} $\\mathcal{O}(h)$."
                }
            ]
        },
        {
            id: 3,
            context: "Para el P.V.F. lineal $y''(x)=p(x)y'(x)+q(x)y(x)+r(x)$, $y(a)=\\alpha$, $y(b)=\\beta$, con $u(a)=\\alpha,u'(a)=0$ y $v(a)=0,v'(a)=1$, la solución aproximada del método del disparo es:\n\n(a) $y=u+v$ (b) $y=\\dfrac{u+v}{2}$ (c) $y(x)=u(x)+\\dfrac{\\beta-u(b)}{v(b)}v(x)$ (d) $y=\\beta\\dfrac{u}{v(b)}$",
            steps: [
                {
                    label: "Paso 1: Recordar la construcción del método del disparo lineal",
                    hint: "$u$ resuelve la EDO completa (con $r(x)$) partiendo de $u(a)=\\alpha$; $v$ resuelve la parte homogénea partiendo de $v(a)=0,v'(a)=1$. La combinación $y=u+c\\,v$ sigue siendo solución de la EDO y cumple $y(a)=\\alpha$ para cualquier $c$.",
                    reveal: "Falta imponer la condición del otro extremo: $y(b)=\\beta$."
                },
                {
                    label: "Paso 2: Despejar la constante c",
                    hint: "De $y(b)=u(b)+c\\,v(b)=\\beta$, despeje $c$.",
                    reveal: "$c = \\dfrac{\\beta-u(b)}{v(b)}$."
                },
                {
                    label: "Paso 3: Concluir",
                    hint: "Sustituya $c$ en $y(x)=u(x)+c\\,v(x)$.",
                    reveal: "Respuesta correcta: \\textbf{(c)} $y(x)=u(x)+\\dfrac{\\beta-u(b)}{v(b)}v(x)$."
                }
            ]
        },
        {
            id: 4,
            context: "Al aproximar $u_{xx}+u_{yy}=0$ con diferencias finitas centradas, $h=k$, la fórmula estándar de cinco puntos en $(x_i,y_j)$ es:\n\n(a) $w_{i-1,j}+w_{i+1,j}+w_{i,j-1}+w_{i,j+1}-4w_{i,j}=0$\n(b) $w_{i-1,j}+w_{i+1,j}+w_{i,j-1}+w_{i,j+1}+4w_{i,j}=0$\n(c) $w_{i-1,j}+w_{i+1,j}-2w_{i,j-1}-2w_{i,j+1}=0$\n(d) $2w_{i-1,j}+2w_{i+1,j}+w_{i,j-1}+w_{i,j+1}-4w_{i,j}=0$",
            steps: [
                {
                    label: "Paso 1: Escribir las diferencias centradas para cada segunda derivada",
                    hint: "$u_{xx}\\approx\\dfrac{w_{i-1,j}-2w_{i,j}+w_{i+1,j}}{h^2}$, $u_{yy}\\approx\\dfrac{w_{i,j-1}-2w_{i,j}+w_{i,j+1}}{k^2}$.",
                    reveal: "Sumando ambas e igualando a 0 (ecuación de Laplace): $\\dfrac{w_{i-1,j}-2w_{i,j}+w_{i+1,j}}{h^2}+\\dfrac{w_{i,j-1}-2w_{i,j}+w_{i,j+1}}{k^2}=0$."
                },
                {
                    label: "Paso 2: Usar h=k y simplificar",
                    hint: "Con $h=k$, multiplique toda la ecuación por $h^2$.",
                    reveal: "$w_{i-1,j}+w_{i+1,j}+w_{i,j-1}+w_{i,j+1}-4w_{i,j}=0$. Respuesta correcta: \\textbf{(a)}."
                }
            ]
        },
        {
            id: 5,
            context: "Sea el P.V.I. de orden superior $$\\begin{cases}y'''(t)-\\cos(y'(t))+t\\,y''(t)=0, & 0\\le t\\le 2,\\\\ y(0)=1,\\\\ y'(0)=0,\\\\ y''(0)=2.\\end{cases}$$\n\n(a) Escriba el sistema de primer orden equivalente, con $\\mathbb{U}$, $\\mathbb{F}$ y el vector inicial.\n\n(b) Use Euler con $h=0.5$ para aproximar $y,y',y''$ en $t=1$, sabiendo que $y(0.5)=1.05$, $y'(0.5)=0.42$, $y''(0.5)=1.7$. (Use $\\cos(0.42)\\approx0.9131$.)",
            steps: [
                {
                    label: "Paso 1: Introducir variables auxiliares",
                    hint: "Sea $u_1=y$, $u_2=y'$, $u_3=y''$. Despeje $y'''$ de la ecuación: $y'''=\\cos(y')-t\\,y''$.",
                    reveal: "$u_1'=u_2,\\quad u_2'=u_3,\\quad u_3'=\\cos(u_2)-t\\,u_3$."
                },
                {
                    label: "Paso 2: Escribir el sistema vectorial",
                    hint: "$\\mathbb{U}(t)=(u_1,u_2,u_3)^T$, $\\mathbb{F}(t,\\mathbb{U})=(u_2,\\,u_3,\\,\\cos(u_2)-t\\,u_3)^T$, y el vector inicial reúne las tres condiciones dadas (el enunciado lo llama '$\\mathbb{Z}a$', mismo papel que $\\alpha$ en la notación usual).",
                    reveal: "$\\mathbb{U}'(t)=\\mathbb{F}(t,\\mathbb{U}(t))$, $0\\le t\\le2$, con $\\mathbb{U}(0) = (1,0,2)^T$."
                },
                {
                    label: "Paso 3: Evaluar F en el punto conocido t=0.5",
                    hint: "Sustituya $u_2=0.42$, $u_3=1.7$, $t=0.5$ en $\\mathbb{F}$. Use el dato $\\cos(0.42)\\approx0.9131$.",
                    reveal: "$\\mathbb{F}(0.5,\\mathbb{U}(0.5)) = (0.42,\\ 1.7,\\ 0.9131-0.5\\times1.7) = (0.42,\\ 1.7,\\ 0.0631)$."
                },
                {
                    label: "Paso 4: Aplicar un paso de Euler vectorial",
                    hint: "$\\mathbb{U}(1)\\approx \\mathbb{U}(0.5)+h\\,\\mathbb{F}(0.5,\\mathbb{U}(0.5))$, con $h=0.5$.",
                    reveal: "$\\mathbb{U}(1)\\approx (1.05,0.42,1.7)+0.5\\,(0.42,1.7,0.0631) = (1.05+0.21,\\ 0.42+0.85,\\ 1.7+0.03155)$."
                },
                {
                    label: "Paso 5: Resultado final (4 cifras decimales)",
                    hint: "Sume componente a componente.",
                    reveal: "$y(1)\\approx 1.2600$, $y'(1)\\approx 1.2700$, $y''(1)\\approx 1.7316$."
                }
            ]
        },
        {
            id: 6,
            context: "Considere el P.V.F. $$\\begin{cases}y''(x)-x\\,y'(x)-2y(x)=e^{-x}, & 0<x<1,\\\\ y(0)=\\alpha,\\\\ y(1)=\\beta.\\end{cases}$$\n\n(a) Demuestre que tiene única solución.\n(b) Plantee los dos P.V.I. del método del disparo (use $u,v$).\n(c) Con RK4, $h=1/4$: $$\\begin{array}{c|ccccc} & x_0=0 & x_1=0.25 & x_2=0.5 & x_3=0.75 & x_4=1\\\\\\hline u(x) & 1.2000 & 1.3060 & 1.6425 & 2.2887 & 3.4236\\\\ v(x) & 0.0000 & 0.2579 & 0.5664 & 0.9932 & 1.6479\\end{array}$$ y la aproximación del disparo: $$\\begin{array}{c|ccccc} & x_0 & x_1 & x_2 & x_3 & x_4\\\\\\hline y(x) & \\alpha & 1.3180 & 1.6687 & 2.3347 & \\beta\\end{array}$$ Halle $\\alpha$ y $\\beta$.",
            steps: [
                {
                    label: "Paso 1: Reescribir en la forma estándar y verificar el criterio de unicidad",
                    hint: "Escriba $y''=p(x)y'+q(x)y+r(x)$. El teorema de existencia y unicidad para P.V.F. lineales exige $p,q,r$ continuas en $[0,1]$ y $q(x)>0$ en todo el intervalo.",
                    reveal: "$y''=x\\,y'+2y+e^{-x}$: aquí $p(x)=x$, $q(x)=2$, $r(x)=e^{-x}$, todas continuas en $[0,1]$, y $q(x)=2>0$ para todo $x$. Por el teorema, el P.V.F. tiene solución única."
                },
                {
                    label: "Paso 2: Plantear el P.V.I. no homogéneo (u)",
                    hint: "$u$ hereda la ecuación completa (con el término $r(x)$) y arranca en $u(0)=\\alpha$, con pendiente inicial arbitraria (convencionalmente 0).",
                    reveal: "$u''=x\\,u'+2u+e^{-x}$, $u(0)=\\alpha$, $u'(0)=0$."
                },
                {
                    label: "Paso 3: Plantear el P.V.I. homogéneo (v)",
                    hint: "$v$ resuelve la parte homogénea (sin $r(x)$), con $v(0)=0$, $v'(0)=1$, para poder ajustar la pendiente que falta.",
                    reveal: "$v''=x\\,v'+2v$, $v(0)=0$, $v'(0)=1$."
                },
                {
                    label: "Paso 4: Hallar α",
                    hint: "$\\alpha=y(x_0)=u(x_0)+c\\,v(x_0)$, y $v(x_0)=0$.",
                    reveal: "$\\alpha = u(0) = 1.2000$."
                },
                {
                    label: "Paso 5: Hallar la constante c del disparo",
                    hint: "Use $c=\\dfrac{y(x_i)-u(x_i)}{v(x_i)}$ en cualquier punto interior conocido, por ejemplo $x_1$.",
                    reveal: "$c=\\dfrac{1.3180-1.3060}{0.2579}=\\dfrac{0.0120}{0.2579}\\approx0.0465$ (verificable también con $x_2$ y $x_3$, dando $\\approx0.0463$–$0.0464$; la pequeña variación es por redondeo a 4 cifras en la tabla de RK4)."
                },
                {
                    label: "Paso 6: Hallar β",
                    hint: "$\\beta=y(x_4)=u(x_4)+c\\,v(x_4)$.",
                    reveal: "$\\beta \\approx 3.4236+0.0464\\times1.6479 \\approx 3.4236+0.0765 \\approx 3.5000$."
                }
            ]
        },
        {
            id: 7,
            context: "Problema elíptico $$\\begin{cases}u_{xx}+u_{yy}=2y, & 1<x<2,\\ 2<y<3,\\\\ u(1,y)=3y-1, & 2\\le y\\le3,\\\\ u(2,y)=6y-2, & 2\\le y\\le3,\\\\ u(x,2)=2x^2-x+4, & 1\\le x\\le2,\\\\ u(x,3)=3x^2-x+6, & 1\\le x\\le2.\\end{cases}$$\n\n(a) Discretice con $h=k=1/4$ e identifique los puntos donde $u$ es desconocida.\n(b) Encuentre la fórmula $w_{i,j}=\\beta w_{i-1,j}+\\gamma w_{i+1,j}+\\eta w_{i,j-1}+\\xi w_{i,j+1}+\\delta f(x_i,y_j)$.\n(c) Con la tabla de aproximaciones (algunos valores ya resueltos), halle $A,B,C,D$: $$\\begin{array}{c|ccccc} & x_0{=}1 & x_1{=}1.25 & x_2{=}1.5 & x_3{=}1.75 & x_4{=}2\\\\\\hline y_0{=}2 & 5.0000 & 5.8750 & 7.0000 & 8.3750 & 10.0000\\\\ y_1{=}2.25 & 5.7500 & A & 8.0625 & B & 11.5000\\\\ y_2{=}2.5 & 6.5000 & 7.6562 & 9.1250 & 10.9062 & 13.0000\\\\ y_3{=}2.75 & 7.2500 & C & 10.1875 & D & 14.5000\\\\ y_4{=}3 & 8.0000 & 9.4375 & 11.2500 & 13.4375 & 16.0000\\end{array}$$",
            steps: [
                {
                    label: "Paso 1: Construir la malla e identificar incógnitas",
                    hint: "Con $h=k=1/4$: $x_0,\\dots,x_4=1,1.25,1.5,1.75,2$ y $y_0,\\dots,y_4=2,2.25,2.5,2.75,3$. Los puntos con $u$ desconocida son los \\textbf{interiores}: $i,j\\in\\{1,2,3\\}$.",
                    reveal: "Hay $3\\times3=9$ nodos interiores desconocidos: $(x_i,y_j)$ para $i,j=1,2,3$. Los de los bordes ($i=0,4$ o $j=0,4$) ya están dados por las condiciones de frontera."
                },
                {
                    label: "Paso 2: Derivar la fórmula de diferencias finitas",
                    hint: "Diferencias centradas con $h=k$: $\\dfrac{w_{i-1,j}+w_{i+1,j}-2w_{i,j}}{h^2}+\\dfrac{w_{i,j-1}+w_{i,j+1}-2w_{i,j}}{h^2}=f(x_i,y_j)$. Despeje $w_{i,j}$.",
                    reveal: "$4w_{i,j}=w_{i-1,j}+w_{i+1,j}+w_{i,j-1}+w_{i,j+1}-h^2f(x_i,y_j)$, es decir $$w_{i,j}=\\tfrac14 w_{i-1,j}+\\tfrac14 w_{i+1,j}+\\tfrac14 w_{i,j-1}+\\tfrac14 w_{i,j+1}-\\tfrac{h^2}{4}f(x_i,y_j),$$ válida para $i=1,2,3$ y $j=1,2,3$ (nodos interiores). Aquí $\\beta=\\gamma=\\eta=\\xi=\\frac14$ y $\\delta=-\\frac{h^2}{4}=-\\frac1{16}$."
                },
                {
                    label: "Paso 3: Verificar los valores de frontera dados (chequeo de consistencia)",
                    hint: "Antes de usar los vecinos, confirme que las filas/columnas de borde coinciden con las fórmulas: p.ej. $u(1.75,2)=2(1.75)^2-1.75+4$.",
                    reveal: "$2(1.75)^2-1.75+4=6.125-1.75+4=8.375$ ✓ coincide con la tabla ($y_0,x_3$). De igual forma se verifica $u(1,2.25)=3(2.25)-1=5.75$ ✓, $u(2,2.25)=6(2.25)-2=11.5$ ✓, $u(1.25,3)=3(1.25)^2-1.25+6=9.4375$ ✓, $u(2,2.75)=6(2.75)-2=14.5$ ✓. Todos los bordes usados cuadran."
                },
                {
                    label: "Paso 4: Hallar A = w(x1,y1)",
                    hint: "Los 4 vecinos de $(x_1,y_1)$ ya son conocidos: izquierda $w(x_0,y_1)=5.7500$, derecha $w(x_2,y_1)=8.0625$, abajo $w(x_1,y_0)=5.8750$, arriba $w(x_1,y_2)=7.6562$. Calcule $f(x_1,y_1)=2y_1=2(2.25)=4.5$.",
                    reveal: "$A=\\dfrac{5.7500+8.0625+5.8750+7.6562-\\frac1{16}(4.5)}{4}=\\dfrac{27.3437-0.28125}{4}=\\dfrac{27.06245}{4}\\approx 6.7656$."
                },
                {
                    label: "Paso 5: Hallar B = w(x3,y1)",
                    hint: "Vecinos: izquierda $w(x_2,y_1)=8.0625$, derecha $w(x_4,y_1)=11.5000$, abajo $w(x_3,y_0)=8.3750$, arriba $w(x_3,y_2)=10.9062$. $f(x_3,y_1)=2(2.25)=4.5$ (mismo $y_1$).",
                    reveal: "$B=\\dfrac{8.0625+11.5000+8.3750+10.9062-0.28125}{4}=\\dfrac{38.56245}{4}\\approx 9.6406$."
                },
                {
                    label: "Paso 6: Hallar C = w(x1,y3)",
                    hint: "Vecinos: izquierda $w(x_0,y_3)=7.2500$, derecha $w(x_2,y_3)=10.1875$, abajo $w(x_1,y_2)=7.6562$, arriba $w(x_1,y_4)=9.4375$. $f(x_1,y_3)=2(2.75)=5.5$.",
                    reveal: "$C=\\dfrac{7.2500+10.1875+7.6562+9.4375-\\frac1{16}(5.5)}{4}=\\dfrac{34.5312-0.34375}{4}=\\dfrac{34.18745}{4}\\approx 8.5469$."
                },
                {
                    label: "Paso 7: Hallar D = w(x3,y3)",
                    hint: "Vecinos: izquierda $w(x_2,y_3)=10.1875$, derecha $w(x_4,y_3)=14.5000$, abajo $w(x_3,y_2)=10.9062$, arriba $w(x_3,y_4)=13.4375$. $f(x_3,y_3)=2(2.75)=5.5$.",
                    reveal: "$D=\\dfrac{10.1875+14.5000+10.9062+13.4375-0.34375}{4}=\\dfrac{48.68745}{4}\\approx 12.1719$."
                }
            ]
        }
    ]
}
];
