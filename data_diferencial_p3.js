/* ==================================================================
   REPASOS PARCIAL 3 — Diferencial (modo guiado, sin XP)
   Contenido basado en Entrenamiento 9, 10, 11 (exámenes personalizados
   con número asignado 1191/1175) y un subconjunto curado del Taller
   Final. Cada ejercicio trae `context` (enunciado) y `steps`
   (secuencia de pasos con recordatorio + resultado revelado).
   ================================================================== */

const GUIDED_DIFERENCIAL_P3 = [
    {
        mission_id: "entrenamiento_9",
        title: "Entrenamiento 9",
        subtitle: "Función inversa, log-derivada y razón de cambio relacionada",
        exercises: [
            {
                id: 1,
                context: "Sea la función $f:\\mathbb{R}\\to\\mathbb{R}$, definida por $$f(x) = \\frac{1}{42\\cdot 2^2}(2x-32)^3 + 22.$$ (Observe que $f$ es invertible.) Sea $g:\\mathbb{R}\\to\\mathbb{R}$ la función inversa de $f$, es decir $g=f^{-1}$.\n\n(a) Calcule $A = g'\\big(f(17)\\big)$.\n(b) Existe un punto $x=B$ en el cual la función $g$ no es derivable/diferenciable. Encuentre el valor de $B$.",
                steps: [
                    {
                        label: "Paso 1: Derivar f(x)",
                        hint: "Simplifique primero el denominador: $42\\cdot 2^2 = 168$. Luego use la regla de la cadena sobre $f(x)=\\frac{1}{168}(2x-32)^3+22$.",
                        reveal: "$f'(x) = \\frac{3}{168}(2x-32)^2\\cdot 2 = \\frac{1}{28}(2x-32)^2$."
                    },
                    {
                        label: "Paso 2: Aplicar la fórmula de la derivada de la función inversa",
                        hint: "Recuerde: $(f^{-1})'\\big(f(a)\\big) = \\dfrac{1}{f'(a)}$. Aquí $a=17$.",
                        reveal: "$f'(17) = \\frac{1}{28}(2\\cdot17-32)^2 = \\frac{1}{28}(2)^2 = \\frac{4}{28}=\\frac{1}{7}$. Por lo tanto $A = g'\\big(f(17)\\big) = \\dfrac{1}{f'(17)} = 7$."
                    },
                    {
                        label: "Paso 3: Punto donde g no es diferenciable",
                        hint: "$g$ no es derivable donde la tangente de $f$ es horizontal, es decir, donde $f'(x)=0$.",
                        reveal: "$(2x-32)^2=0 \\Rightarrow x=16$. El punto correspondiente en el dominio de $g$ (el rango de $f$) es $f(16)=22$. Por lo tanto $B=22$."
                    }
                ]
            },
            {
                id: 2,
                context: "Sean $f,g:\\mathbb{R}\\to\\mathbb{R}$ dos funciones diferenciables. Se conocen los valores de $f$ y $g'$ en la tabla:\n\n$$\\begin{array}{c|cccccc} x & 14 & 36 & 66 & 82 & 83 & 84 \\\\ \\hline f(x) & 4 & 20 & 14 & 5 & 15 & 10 \\\\ g'(x) & 23 & 20 & 8 & 19 & -80 & 4 \\end{array}$$\n\nAdemás, $\\big[f(x)-20\\big]\\big[f(x)-15\\big] = g(x)$ para todo $x\\in\\mathbb{R}$.\n\n(a) Calcule $A=f'(36)$.\n(b) Calcule $B=f'(83)$.",
                steps: [
                    {
                        label: "Paso 1: Derivar la relación implícita",
                        hint: "Aplique la regla del producto sobre $[f(x)-20][f(x)-15]$.",
                        reveal: "$g'(x) = f'(x)\\big[f(x)-15\\big] + f'(x)\\big[f(x)-20\\big] = f'(x)\\big(2f(x)-35\\big)$."
                    },
                    {
                        label: "Paso 2: Calcular A = f'(36)",
                        hint: "Evalúe en $x=36$: de la tabla, $f(36)=20$ y $g'(36)=20$.",
                        reveal: "$20 = f'(36)(2\\cdot20-35) = f'(36)\\cdot 5 \\Rightarrow A = f'(36) = 4$."
                    },
                    {
                        label: "Paso 3: Calcular B = f'(83)",
                        hint: "Evalúe en $x=83$: de la tabla, $f(83)=15$ y $g'(83)=-80$.",
                        reveal: "$-80 = f'(83)(2\\cdot15-35) = f'(83)\\cdot(-5) \\Rightarrow B = f'(83) = 16$."
                    }
                ]
            },
            {
                id: 3,
                context: "Sea $f:\\mathbb{R}\\to\\mathbb{R}$ una función polinómica de grado 3 tal que $$\\frac{f'(x)}{f(x)} = \\frac{17}{17x-85}+\\frac{13}{13x-91}+\\frac{10}{10x-80}.$$ Sean $A,B,C$ las raíces de $f$, con $A<B<C$.\n\n(a) Encuentre $A$.\n(b) Encuentre $B$.\n(c) Encuentre $C$.",
                steps: [
                    {
                        label: "Paso 1: Simplificar cada fracción",
                        hint: "Factorice cada coeficiente: $17x-85=17(x-5)$, $13x-91=13(x-7)$, $10x-80=10(x-8)$.",
                        reveal: "$\\dfrac{f'(x)}{f(x)} = \\dfrac{1}{x-5}+\\dfrac{1}{x-7}+\\dfrac{1}{x-8}$."
                    },
                    {
                        label: "Paso 2: Reconocer la derivada logarítmica",
                        hint: "Recuerde que $\\frac{d}{dx}\\ln|x-r| = \\frac{1}{x-r}$, y que la suma de log-derivadas corresponde al logaritmo de un producto.",
                        reveal: "$\\dfrac{f'(x)}{f(x)} = \\dfrac{d}{dx}\\ln\\big|(x-5)(x-7)(x-8)\\big|$, por lo que $f(x) = k(x-5)(x-7)(x-8)$ para alguna constante $k\\neq0$."
                    },
                    {
                        label: "Paso 3: Identificar las raíces ordenadas",
                        hint: "Las raíces de $f$ son los valores que anulan cada factor.",
                        reveal: "Raíces: $5,7,8$. Como $A<B<C$: $A=5$, $B=7$, $C=8$."
                    }
                ]
            },
            {
                id: 4,
                context: "Un tanque cilíndrico tiene radio $33\\text{m}$, altura $8\\text{m}$ y está lleno de agua hasta el tope. En el fondo se presenta una fuga que hace que el nivel del agua baje a una tasa de $\\frac{1}{11}\\frac{\\text{m}}{\\text{h}}$.\n\n(a) La rapidez a la que se filtra el agua es $\\frac{dV}{dt}=\\pi A\\,\\frac{\\text{m}^3}{\\text{h}}$. Encuentre $A$.\n(b) El tanque se vacía, desde que inicia la fuga, en un tiempo total de $B$ horas. Encuentre $B$.",
                steps: [
                    {
                        label: "Paso 1: Plantear el volumen en función de la altura",
                        hint: "Volumen de un cilindro: $V=\\pi r^2 h$, con $r=33$ constante (solo cambia $h$).",
                        reveal: "$V(h) = \\pi (33)^2 h = 1089\\pi h$."
                    },
                    {
                        label: "Paso 2: Derivar respecto al tiempo (razones relacionadas)",
                        hint: "Derive ambos lados respecto a $t$: $\\frac{dV}{dt}=1089\\pi\\frac{dh}{dt}$. El nivel baja, así que $\\frac{dh}{dt}=-\\frac{1}{11}$.",
                        reveal: "$\\dfrac{dV}{dt} = 1089\\pi\\left(-\\dfrac{1}{11}\\right) = -99\\pi$. Por lo tanto $A=-99$."
                    },
                    {
                        label: "Paso 3: Tiempo total de vaciado",
                        hint: "El nivel baja a tasa constante $\\frac1{11}$ m/h, desde $h=8$ hasta $h=0$.",
                        reveal: "$B = \\dfrac{8}{1/11} = 88$ horas."
                    }
                ]
            }
        ]
    },
    {
        mission_id: "entrenamiento_10",
        title: "Entrenamiento 10",
        subtitle: "Linealización con tablas, puntos críticos, MAS y Teorema del Valor Medio",
        exercises: [
            {
                id: 1,
                context: "Sea $f:\\mathbb{R}\\to\\mathbb{R}$ diferenciable con la información de la tabla, y sea $g:\\mathbb{R}\\to\\mathbb{R}$, $g(x)=\\frac{x}{2}-23$.\n\n$$\\begin{array}{c|cccccccccc} x & 2 & 3 & 4 & 5 & 7 & 11 & 12 & 15 & 16 & 19 \\\\ \\hline f(x) & 3 & 7 & 9 & 11 & 15 & 16 & 17 & 21 & 22 & 24 \\\\ f'(x) & 2 & 3 & 5 & 7 & 9 & 10 & 11 & 16 & 17 & 22 \\end{array}$$\n\n(a) Use la recta tangente para aproximar $A\\simeq f(13)$.\n(b) Encuentre $B=(g\\circ f)'(19)$.\n(c) Use la recta tangente para aproximar $C\\simeq (g\\circ f)(18)$.",
                steps: [
                    {
                        label: "Paso 1: Elegir el punto tabulado más cercano a x=13",
                        hint: "Para $f(x)\\approx f(x_0)+f'(x_0)(x-x_0)$, conviene usar el $x_0$ tabulado más cercano al punto pedido, para minimizar el error de extrapolación.",
                        reveal: "El valor tabulado más cercano a $13$ es $x_0=12$ (distancia 1, frente a distancia 2 de $x_0=15$), con $f(12)=17$ y $f'(12)=11$."
                    },
                    {
                        label: "Paso 2: Construir la recta tangente y aproximar A",
                        hint: "Sustituya en $f(x)\\approx f(x_0)+f'(x_0)(x-x_0)$ con $x=13$.",
                        reveal: "$A \\approx f(12) + f'(12)(13-12) = 17 + 11(1) = 28$."
                    },
                    {
                        label: "Paso 3: Derivada de la compuesta (g∘f) en x=19",
                        hint: "Regla de la cadena: $(g\\circ f)'(x) = g'(f(x))\\cdot f'(x)$. Como $g(x)=\\frac{x}{2}-23$, $g'(x)=\\frac12$ (constante).",
                        reveal: "$B = (g\\circ f)'(19) = g'(f(19))\\cdot f'(19) = \\frac12 \\cdot 22 = 11$."
                    },
                    {
                        label: "Paso 4: Aproximar (g∘f)(18) con el punto tabulado más cercano",
                        hint: "El punto tabulado más cercano a $x=18$ es $x_0=19$ (distancia 1). Necesita $h(19)=g(f(19))$ y $h'(19)=(g\\circ f)'(19)$, con $h=g\\circ f$.",
                        reveal: "$f(19)=24 \\Rightarrow h(19)=g(24)=\\frac{24}{2}-23=-11$. Además $h'(19)=11$ (paso anterior). Entonces $C \\approx h(19) + h'(19)(18-19) = -11 + 11(-1) = -22$."
                    }
                ]
            },
            {
                id: 2,
                context: "Sea $f:\\mathbb{R}\\to\\mathbb{R}$ una función polinómica de grado 3, cuya derivada es $$f'(x) = x^2+Ax+B,$$ donde $A$ y $B$ son constantes a determinar. Los puntos críticos de $f$ están en $x=5$ y $x=9$.\n\n(a) Encuentre $A$.\n(b) Encuentre $B$.\n(c) La función tiene un máximo relativo en $x=C$. Encuentre $C$.\n(d) La función tiene un mínimo relativo en $x=D$. Encuentre $D$.",
                steps: [
                    {
                        label: "Paso 1: Relacionar los puntos críticos con las raíces de f'",
                        hint: "$f'(x)=0$ exactamente en los puntos críticos, así que $x^2+Ax+B$ debe factorizarse como $(x-5)(x-9)$.",
                        reveal: "$(x-5)(x-9) = x^2 - 14x + 45$."
                    },
                    {
                        label: "Paso 2: Leer A y B por comparación de coeficientes",
                        hint: "Compare término a término con $x^2+Ax+B$.",
                        reveal: "$A = -14$, $B = 45$."
                    },
                    {
                        label: "Paso 3: Clasificar los puntos críticos con el criterio de la primera derivada",
                        hint: "Analice el signo de $f'(x)=(x-5)(x-9)$ antes y después de cada raíz.",
                        reveal: "Para $x<5$: $f'>0$. Entre $5$ y $9$: $f'<0$. Para $x>9$: $f'>0$. El cambio de $+$ a $-$ en $x=5$ da un máximo relativo: $C=5$. El cambio de $-$ a $+$ en $x=9$ da un mínimo relativo: $D=9$."
                    }
                ]
            },
            {
                id: 3,
                context: "El Movimiento Armónico Simple (MAS) está descrito por $x = A\\sin(Bt+\\varphi)$, donde $A$ es la amplitud y $B$ la frecuencia natural. Una partícula tiene aceleración máxima $80\\cdot 10^2\\,\\frac{\\text{m}}{\\text{seg}^2}$ y velocidad máxima $20\\cdot 10\\,\\frac{\\text{m}}{\\text{seg}}$.\n\n(a) Encuentre la amplitud $A$.\n(b) Encuentre la frecuencia natural $B$.",
                steps: [
                    {
                        label: "Paso 1: Expresar velocidad y aceleración máximas en términos de A y B",
                        hint: "Derive $x=A\\sin(Bt+\\varphi)$: $v=AB\\cos(Bt+\\varphi)$, $a=-AB^2\\sin(Bt+\\varphi)$. Los máximos en valor absoluto son $|v|_{max}=AB$ y $|a|_{max}=AB^2$.",
                        reveal: "$AB = 20\\cdot 10 = 200$ y $AB^2 = 80\\cdot 10^2 = 8000$."
                    },
                    {
                        label: "Paso 2: Resolver el sistema para B",
                        hint: "Divida la segunda ecuación entre la primera: $\\frac{AB^2}{AB}=B$.",
                        reveal: "$B = \\dfrac{8000}{200} = 40$."
                    },
                    {
                        label: "Paso 3: Resolver para A",
                        hint: "Sustituya $B=40$ en $AB=200$.",
                        reveal: "$A = \\dfrac{200}{40} = 5$."
                    }
                ]
            },
            {
                id: 4,
                context: "Sea $f(x) = (x-13)(x-35)$. Sea $A>13$ y considere $J=[13,A]$. Aplicando el Teorema del Valor Medio para $f$ en $J$, existe $B\\in(13,A)$ tal que $f'(B)=10$.\n\n(a) Encuentre $A$.\n(b) Encuentre $B$.",
                steps: [
                    {
                        label: "Paso 1: Calcular la razón de cambio promedio en [13, A]",
                        hint: "$f(13)=0$ (raíz). La razón de cambio promedio es $\\frac{f(A)-f(13)}{A-13}=\\frac{(A-13)(A-35)}{A-13}$, válido para $A\\neq13$.",
                        reveal: "Razón de cambio promedio $= A-35$."
                    },
                    {
                        label: "Paso 2: Aplicar el Teorema del Valor Medio",
                        hint: "El TVM garantiza que $f'(B)$ es igual a la razón de cambio promedio, y aquí nos dicen que $f'(B)=10$.",
                        reveal: "$A - 35 = 10 \\Rightarrow A = 45$."
                    },
                    {
                        label: "Paso 3: Hallar B",
                        hint: "Derive $f(x)=(x-13)(x-35)=x^2-48x+455$: $f'(x)=2x-48$.",
                        reveal: "$f'(B) = 2B-48 = 10 \\Rightarrow B = 29$ (y en efecto $29\\in(13,45)$)."
                    }
                ]
            }
        ]
    },
    {
        mission_id: "entrenamiento_11",
        title: "Entrenamiento 11",
        subtitle: "Monotonía y concavidad con valor absoluto, funciones a trozos, gráficas y optimización trigonométrica",
        exercises: [
            {
                id: 1,
                context: "Sea $f(x) = |x-17|$, con $-75\\le x\\le 75$, y sea $g:[-75,75]\\to\\mathbb{R}$ con $g'(x)=f(x)-30$.\n\n$g$ es creciente en $[A,B]\\cup[C,D]$, con $A<B<C<D$.\n(a) Encuentre $A$. (b) Encuentre $B$. (c) Encuentre $C$. (d) Encuentre $D$.\n\nAdemás, $g$ es cóncava hacia abajo en $[E,F]$.\n(e) Encuentre $E$. (f) Encuentre $F$.",
                steps: [
                    {
                        label: "Paso 1: Plantear la desigualdad de crecimiento",
                        hint: "$g$ es creciente donde $g'(x)>0$, es decir $|x-17|-30>0 \\iff |x-17|>30$.",
                        reveal: "$|x-17|>30 \\iff x-17>30 \\text{ o } x-17<-30 \\iff x>47 \\text{ o } x<-13$."
                    },
                    {
                        label: "Paso 2: Intersectar con el dominio [-75, 75]",
                        hint: "Escriba los dos intervalos donde $g$ crece dentro de $[-75,75]$, ordenados de menor a mayor.",
                        reveal: "$g$ es creciente en $[-75,-13]\\cup[47,75]$. Entonces $A=-75$, $B=-13$, $C=47$, $D=75$."
                    },
                    {
                        label: "Paso 3: Analizar la concavidad",
                        hint: "$g''(x)$ es la derivada de $|x-17|-30$, que es $\\mathrm{sign}(x-17)$: $-1$ si $x<17$, $+1$ si $x>17$.",
                        reveal: "$g''(x)<0$ para todo $x<17$, así que $g$ es cóncava hacia abajo en todo $[-75,17]$: $E=-75$, $F=17$."
                    }
                ]
            },
            {
                id: 2,
                context: "Sean $f,g:\\mathbb{R}\\to\\mathbb{R}$ con $$f'(x)=\\begin{cases}22, & x<47\\\\-90,& 47<x<63\\\\24,& 63<x\\end{cases} \\qquad g'(x)=\\begin{cases}7,& x<57\\\\5,& 57<x<64\\\\-19,& 64<x\\end{cases}$$ ($f$ no es derivable en $x=47,63$; $g$ no es derivable en $x=57,64$).\n\n(a) $f$ tiene un máximo local en $x=A$. Encuentre $A$.\n(b) $g$ tiene un punto crítico en $x=B$ que no es máximo ni mínimo local. Encuentre $B$.\n(c) $g$ es decreciente en $\\{x: C<x<\\infty\\}$. Encuentre $C$.\n(d) Suponga $f(60)=g(60)=0$. Calcule $D=\\lim_{x\\to60}\\frac{f(x)}{g(x)}$.",
                steps: [
                    {
                        label: "Paso 1: Máximo local de f",
                        hint: "Busque dónde $f'$ cambia de positivo a negativo.",
                        reveal: "$f'$ pasa de $22$ (positivo) a $-90$ (negativo) en $x=47$: es un máximo local. $A=47$."
                    },
                    {
                        label: "Paso 2: Punto crítico de g que no es extremo",
                        hint: "Un punto crítico NO es extremo si $g'$ no cambia de signo alrededor de él.",
                        reveal: "En $x=57$, $g'$ pasa de $7$ a $5$: sigue positivo a ambos lados, sin cambio de signo. $B=57$."
                    },
                    {
                        label: "Paso 3: Intervalo donde g es decreciente",
                        hint: "Busque dónde $g'(x)<0$.",
                        reveal: "$g'(x)=-19<0$ para $x>64$. $C=64$."
                    },
                    {
                        label: "Paso 4: Límite por L'Hôpital en x=60",
                        hint: "Como $f(60)=g(60)=0$ (forma $\\frac00$) y $x=60$ no es un punto de quiebre (está entre $47$ y $63$ para $f$, y entre $57$ y $64$ para $g$), aplique L'Hôpital: $\\lim = \\frac{f'(60)}{g'(60)}$.",
                        reveal: "$f'(60)=-90$, $g'(60)=5$. $D=\\dfrac{-90}{5}=-18$."
                    }
                ]
            },
            {
                id: 3,
                context: "Sea $f:[-5,5]\\to\\mathbb{R}$ la función diferenciable dada por la curva de la figura:\n\n<img src=\"assets/Ejer3_E11.png\" class=\"math-graph\" style=\"width:380px; display:block; margin:auto;\">\n\nLa curva sube suavemente desde la izquierda, tiene un pico puntiagudo en el punto $(3,2)$ y luego baja hasta acercarse a $0$. En el dibujo, la línea punteada es la <strong>recta secante</strong> que une los puntos $(2,f(2))$ y $(4,f(4))$, y la línea a trazos (segmentada) que pasa por el pico es la <strong>recta tangente</strong> a $f$ en el punto $(3,2)$; observe que ambas rectas son paralelas (tienen la misma inclinación).\n\nDe la cuadrícula de la gráfica se leen los valores $f(2)=-1$, $f(3)=2$ y $f(4)=0$.\n\n(a) Sean $a=2$ y $b=4$. Existe un único punto $A\\in(2,4)$ que satisface $$f'(A) = \\frac{f(b)-f(a)}{b-a}.$$ Encuentre el valor de $A$.\n\n(b) Sea $x_0=3$. Se sabe que $$\\frac{1}{B} = \\lim_{x\\to x_0}\\frac{f(x)-f(x_0)}{x-x_0}.$$ Encuentre el valor de $B$.\n\n(c) Sea la función $g(x) = 4x^2+12$. Encuentre $$C = \\frac{d}{dx}\\big(g\\circ f\\big)(x)\\Big|_{x=3}.$$",
                steps: [
                    {
                        label: "Paso 1: ¿Qué es una recta secante? (repaso)",
                        hint: "Una <b>recta secante</b> a una curva es, sencillamente, la recta que une dos puntos cualquiera de esa curva (como si trazaras una línea recta con una regla entre dos puntos del dibujo). Si los dos puntos son $(a,f(a))$ y $(b,f(b))$, la <b>pendiente</b> de esa recta secante (qué tan inclinada está) se calcula igual que en cualquier recta: $$\\text{pendiente} = \\frac{\\text{cambio en }y}{\\text{cambio en }x} = \\frac{f(b)-f(a)}{b-a}.$$ En este ejercicio, la gráfica ya nos dibuja esa secante entre $a=2$ y $b=4$ (la línea punteada).",
                        reveal: "Entendido: para hallar la pendiente de la secante entre $x=2$ y $x=4$, necesitamos los valores $f(2)$ y $f(4)$, que ya nos da la gráfica."
                    },
                    {
                        label: "Paso 2: Leer los valores exactos en la gráfica",
                        hint: "Observe con cuidado la cuadrícula (cada casilla vale 1 unidad). Ubique el punto donde la curva cruza la vertical $x=2$ y lea su altura $y$; haga lo mismo en $x=4$.",
                        reveal: "Leyendo la cuadrícula: $f(2) = -1$ (la curva pasa un poco por debajo del eje $x$) y $f(4) = 0$ (la curva ya volvió a tocar el eje $x$)."
                    },
                    {
                        label: "Paso 3: Calcular la pendiente de la secante",
                        hint: "Sustituya $a=2$, $b=4$, $f(2)=-1$, $f(4)=0$ en la fórmula de la pendiente: $\\dfrac{f(b)-f(a)}{b-a}$.",
                        reveal: "$\\dfrac{f(4)-f(2)}{4-2} = \\dfrac{0-(-1)}{4-2} = \\dfrac{1}{2}$. Es decir, la secante sube $\\frac12$ unidad de $y$ por cada unidad de $x$."
                    },
                    {
                        label: "Paso 4: ¿Qué dice el Teorema del Valor Medio? (repaso)",
                        hint: "El <b>Teorema del Valor Medio (TVM)</b> dice, en palabras simples: si una función es \"suave\" (continua y diferenciable) en un intervalo $[a,b]$, entonces en <i>algún</i> punto $A$ dentro de ese intervalo, la recta <b>tangente</b> a la curva tiene exactamente la <b>misma inclinación</b> (la misma pendiente) que la recta <b>secante</b> que une los extremos $(a,f(a))$ y $(b,f(b))$. Dicho de otra forma: en algún momento, la curva va \"tan inclinada\" como el promedio de todo el tramo. Geométricamente, eso significa que la recta tangente en ese punto $A$ es <b>paralela</b> a la secante.",
                        reveal: "Ese es justo el dato que nos da el dibujo: la recta tangente dibujada en el pico $(3,2)$ es paralela a la secante punteada. Por el TVM, ese punto de tangencia paralela es precisamente el $A$ que buscamos."
                    },
                    {
                        label: "Paso 5: Identificar A",
                        hint: "Como la recta tangente paralela a la secante está dibujada exactamente en el punto $(3,2)$, ese es el punto $A$ que garantiza el TVM.",
                        reveal: "$A = 3$. Y además, como esa tangente es paralela a la secante del Paso 3, su pendiente es la misma: $f'(3) = \\frac12$. Este dato de $f'(3)=\\frac12$ lo usaremos también en los siguientes incisos."
                    },
                    {
                        label: "Paso 6: ¿Qué es la derivada como límite? (repaso)",
                        hint: "La <b>derivada</b> de $f$ en un punto $x_0$ se define formalmente como un límite: $$f'(x_0) = \\lim_{x\\to x_0}\\frac{f(x)-f(x_0)}{x-x_0}.$$ Esta fórmula es, en el fondo, la pendiente de una secante entre $x$ y $x_0$, pero \"acercando\" cada vez más el punto $x$ hacia $x_0$ (por eso el límite), hasta que la secante se convierte en la recta tangente. No es más que la misma idea del Paso 1, llevada al límite.",
                        reveal: "Comparando con la expresión del enunciado $\\frac1B=\\lim_{x\\to x_0}\\frac{f(x)-f(x_0)}{x-x_0}$, con $x_0=3$, vemos que el lado derecho es exactamente $f'(3)$ por definición."
                    },
                    {
                        label: "Paso 7: Despejar B",
                        hint: "Del paso anterior: $\\dfrac1B = f'(3)$. Y del Paso 5 ya sabemos cuánto vale $f'(3)$.",
                        reveal: "$\\dfrac1B = f'(3) = \\dfrac12$. Para que esta igualdad sea cierta, $B$ debe ser el recíproco: $B=2$."
                    },
                    {
                        label: "Paso 8: ¿Qué es la regla de la cadena? (repaso)",
                        hint: "Cuando tenemos una función \"compuesta\" $(g\\circ f)(x) = g\\big(f(x)\\big)$ (es decir, primero se aplica $f$ y al resultado se le aplica $g$), su derivada NO es simplemente $g'(x)\\cdot f'(x)$. La <b>regla de la cadena</b> dice que hay que derivar la función \"de afuera hacia adentro\": $$\\frac{d}{dx}\\big(g\\circ f\\big)(x) = g'\\big(f(x)\\big)\\cdot f'(x).$$ Es decir: derive $g$ pero evaluada en $f(x)$ (no en $x$), y luego multiplique por la derivada de $f$ en $x$.",
                        reveal: "Aquí $g(x)=4x^2+12$, así que primero necesitamos $g'(x)$."
                    },
                    {
                        label: "Paso 9: Calcular g'(x) y combinar todo para hallar C",
                        hint: "Derive $g(x)=4x^2+12$ con la regla de la potencia: $\\frac{d}{dx}(4x^2)=8x$, y la derivada de la constante $12$ es $0$. Luego use la regla de la cadena del paso anterior, evaluando en $x=3$: necesita $f(3)$ y $f'(3)$ (ya los conocemos).",
                        reveal: "$g'(x) = 8x$. Como $f(3)=2$ (dato de la gráfica), entonces $g'(f(3)) = g'(2) = 8(2) = 16$. Aplicando la regla de la cadena: $$C = g'(f(3))\\cdot f'(3) = 16\\cdot \\frac12 = 8.$$"
                    }
                ]
            },
            {
                id: 4,
                context: "Sea $f(\\theta) = \\sin(72\\theta) - (\\alpha+13)\\theta$, donde $\\alpha\\in\\mathbb{R}$ es una constante.\n\n(a) $f$ es estrictamente creciente para todo $\\theta$ cuando $\\alpha\\in(-\\infty,A)$. Encuentre $A$.\n(b) $f$ es estrictamente decreciente para todo $\\theta$ cuando $\\alpha\\in(B,\\infty)$. Encuentre $B$.\n\nPara $\\alpha=23$: $f(\\theta)=\\sin(72\\theta)-36\\theta$ tiene un mínimo relativo en $\\theta=\\frac{\\pi}{C}\\in\\left(0,\\frac{\\pi}{36}\\right)$.\n(c) Encuentre $C$.",
                steps: [
                    {
                        label: "Paso 1: Derivar f respecto a θ",
                        hint: "Derive término a término, tratando $\\alpha$ como constante.",
                        reveal: "$f'(\\theta) = 72\\cos(72\\theta) - (\\alpha+13)$."
                    },
                    {
                        label: "Paso 2: Condición para crecimiento estricto en todo ℝ",
                        hint: "$f$ es estrictamente creciente si $f'(\\theta)\\ge0$ para todo $\\theta$, lo que requiere que incluso el mínimo de $72\\cos(72\\theta)$ (que es $-72$) sea $\\ge \\alpha+13$.",
                        reveal: "$-72 \\ge \\alpha+13 \\Rightarrow \\alpha \\le -85$. Entonces $A=-85$."
                    },
                    {
                        label: "Paso 3: Condición para decrecimiento estricto en todo ℝ",
                        hint: "Análogamente, se requiere que el máximo de $72\\cos(72\\theta)$ (que es $72$) sea $\\le \\alpha+13$.",
                        reveal: "$72 \\le \\alpha+13 \\Rightarrow \\alpha \\ge 59$. Entonces $B=59$."
                    },
                    {
                        label: "Paso 4: Resolver f'(θ)=0 para α=23",
                        hint: "Con $\\alpha=23$: $f'(\\theta)=72\\cos(72\\theta)-36=0 \\Rightarrow \\cos(72\\theta)=\\frac12$.",
                        reveal: "En $(0,2\\pi)$, $\\cos(u)=\\frac12$ en $u=\\frac{\\pi}{3}$ o $u=\\frac{5\\pi}{3}$, con $u=72\\theta$."
                    },
                    {
                        label: "Paso 5: Distinguir cuál solución es el mínimo relativo",
                        hint: "Use el criterio de la segunda derivada: $f''(\\theta)=-72^2\\sin(72\\theta)$. Para un mínimo se requiere $f''(\\theta)>0$, es decir $\\sin(72\\theta)<0$.",
                        reveal: "$\\sin(\\pi/3)>0$ (sería máximo); $\\sin(5\\pi/3)<0$ (es mínimo). Entonces $72\\theta=\\frac{5\\pi}{3} \\Rightarrow \\theta=\\frac{5\\pi}{216}$. Como $\\theta=\\frac{\\pi}{C}$: $C=\\dfrac{216}{5}=43.2$."
                    }
                ]
            }
        ]
    },
    {
        mission_id: "tf_limites",
        title: "Taller Final — Diferenciales y Límites",
        subtitle: "Selección curada: diferenciales, linealización y regla de L'Hôpital (formas indeterminadas variadas)",
        exercises: [
            {
                id: 1,
                context: "Encuentre el diferencial $dy$ y utilícelo para aproximar el incremento de $y=\\exp\\left(\\dfrac{x}{10}\\right)$ en $x=10$, con $\\Delta x=0.1$.",
                steps: [
                    {
                        label: "Paso 1: Calcular f'(x)",
                        hint: "Regla de la cadena: si $y=e^{x/10}$, entonces $\\frac{dy}{dx}=\\frac{1}{10}e^{x/10}$.",
                        reveal: "$f'(x) = \\dfrac{1}{10}e^{x/10}$."
                    },
                    {
                        label: "Paso 2: Evaluar f'(10)",
                        hint: "Sustituya $x=10$: el exponente es $10/10=1$.",
                        reveal: "$f'(10) = \\dfrac{1}{10}e^{1} = \\dfrac{e}{10}$."
                    },
                    {
                        label: "Paso 3: Calcular el diferencial dy",
                        hint: "$dy = f'(x)\\,dx$, con $dx=\\Delta x=0.1$.",
                        reveal: "$dy = \\dfrac{e}{10}(0.1) = \\dfrac{e}{100} \\approx 0.0272$."
                    }
                ]
            },
            {
                id: 2,
                context: "Encuentre el diferencial $dy$ y utilícelo para aproximar el incremento de $y=\\sqrt{3+x^3}$ en $x=1$, con $\\Delta x=-0.1$.",
                steps: [
                    {
                        label: "Paso 1: Derivar y=(3+x³)^(1/2)",
                        hint: "Regla de la cadena: $\\frac{dy}{dx} = \\frac12(3+x^3)^{-1/2}\\cdot 3x^2$.",
                        reveal: "$f'(x) = \\dfrac{3x^2}{2\\sqrt{3+x^3}}$."
                    },
                    {
                        label: "Paso 2: Evaluar en x=1",
                        hint: "$3+1^3=4$, y $\\sqrt4=2$.",
                        reveal: "$f'(1) = \\dfrac{3(1)}{2(2)} = \\dfrac34 = 0.75$."
                    },
                    {
                        label: "Paso 3: Calcular dy con Δx=-0.1",
                        hint: "$dy = f'(1)\\cdot \\Delta x$.",
                        reveal: "$dy = 0.75\\times(-0.1) = -0.075$."
                    }
                ]
            },
            {
                id: 3,
                context: "Utilice linealización de funciones para estimar $1.99^4$.",
                steps: [
                    {
                        label: "Paso 1: Elegir f y el punto base",
                        hint: "Use $f(x)=x^4$ cerca de $x_0=2$ (valor fácil de evaluar), con $\\Delta x=-0.01$.",
                        reveal: "$f(2) = 16$."
                    },
                    {
                        label: "Paso 2: Calcular f'(x₀)",
                        hint: "$f'(x)=4x^3$.",
                        reveal: "$f'(2) = 4(8) = 32$."
                    },
                    {
                        label: "Paso 3: Linealizar",
                        hint: "$f(x_0+\\Delta x) \\approx f(x_0) + f'(x_0)\\Delta x$.",
                        reveal: "$1.99^4 \\approx 16 + 32(-0.01) = 16 - 0.32 = 15.68$."
                    }
                ]
            },
            {
                id: 4,
                context: "Utilice la regla de L'Hôpital cuando sea adecuado: $\\displaystyle\\lim_{x\\to1}\\frac{x^2-1}{x^3-x}$.",
                steps: [
                    {
                        label: "Paso 1: Verificar la forma indeterminada",
                        hint: "Evalúe numerador y denominador en $x=1$.",
                        reveal: "Numerador $\\to 0$, denominador $\\to 0$: forma $\\frac00$, válido aplicar L'Hôpital."
                    },
                    {
                        label: "Paso 2: Derivar numerador y denominador",
                        hint: "Derive cada uno por separado (no es la derivada del cociente).",
                        reveal: "$\\dfrac{2x}{3x^2-1}$."
                    },
                    {
                        label: "Paso 3: Evaluar el límite",
                        hint: "Sustituya $x=1$ en el cociente de derivadas.",
                        reveal: "$\\dfrac{2(1)}{3(1)-1} = \\dfrac{2}{2} = 1$."
                    }
                ]
            },
            {
                id: 5,
                context: "Utilice la regla de L'Hôpital cuando sea adecuado: $\\displaystyle\\lim_{x\\to0}\\frac{\\exp(2x)-1}{\\sin x}$.",
                steps: [
                    {
                        label: "Paso 1: Verificar la forma indeterminada",
                        hint: "En $x=0$: $e^0-1=0$, $\\sin0=0$.",
                        reveal: "Forma $\\frac00$."
                    },
                    {
                        label: "Paso 2: Aplicar L'Hôpital",
                        hint: "Derive numerador y denominador por separado.",
                        reveal: "$\\dfrac{2e^{2x}}{\\cos x}$."
                    },
                    {
                        label: "Paso 3: Evaluar",
                        hint: "Sustituya $x=0$.",
                        reveal: "$\\dfrac{2e^{0}}{\\cos 0} = \\dfrac{2}{1} = 2$."
                    }
                ]
            },
            {
                id: 6,
                context: "Utilice la regla de L'Hôpital cuando sea adecuado: $\\displaystyle\\lim_{x\\to0^+}\\frac{\\ln x}{1/x}$.",
                steps: [
                    {
                        label: "Paso 1: Identificar la forma indeterminada",
                        hint: "Cuando $x\\to0^+$: $\\ln x\\to-\\infty$ y $1/x\\to+\\infty$.",
                        reveal: "Forma $\\dfrac{-\\infty}{\\infty}$, aplicable L'Hôpital."
                    },
                    {
                        label: "Paso 2: Derivar numerador y denominador",
                        hint: "$\\frac{d}{dx}\\ln x = \\frac1x$; $\\frac{d}{dx}\\frac1x = -\\frac1{x^2}$.",
                        reveal: "$\\dfrac{1/x}{-1/x^2} = -x$."
                    },
                    {
                        label: "Paso 3: Evaluar el límite",
                        hint: "Tome el límite de $-x$ cuando $x\\to0^+$.",
                        reveal: "$\\lim_{x\\to0^+}(-x) = 0$."
                    }
                ]
            },
            {
                id: 7,
                context: "Utilice la regla de L'Hôpital cuando sea adecuado: $\\displaystyle\\lim_{x\\to0^+} x\\ln\\left(\\tan\\frac{\\pi x}{2}\\right)$.",
                steps: [
                    {
                        label: "Paso 1: Reescribir como cociente",
                        hint: "Escriba $x\\ln(\\tan(\\pi x/2)) = \\dfrac{\\ln(\\tan(\\pi x/2))}{1/x}$: forma $\\frac{-\\infty}{\\infty}$.",
                        reveal: "$\\dfrac{\\ln(\\tan(\\pi x/2))}{1/x}$."
                    },
                    {
                        label: "Paso 2: Derivar el numerador",
                        hint: "Con $u=\\pi x/2$: $\\frac{d}{dx}\\ln(\\tan u) = \\frac{\\sec^2 u}{\\tan u}\\cdot\\frac{\\pi}{2} = \\frac{\\pi}{2\\sin u\\cos u} = \\frac{\\pi}{\\sin(2u)} = \\frac{\\pi}{\\sin(\\pi x)}$.",
                        reveal: "Numerador derivado: $\\dfrac{\\pi}{\\sin(\\pi x)}$."
                    },
                    {
                        label: "Paso 3: Derivar el denominador y formar el cociente",
                        hint: "$\\frac{d}{dx}\\frac1x = -\\frac1{x^2}$.",
                        reveal: "$\\dfrac{\\pi/\\sin(\\pi x)}{-1/x^2} = -\\dfrac{\\pi x^2}{\\sin(\\pi x)}$."
                    },
                    {
                        label: "Paso 4: Evaluar usando sin(πx) ≈ πx cerca de 0",
                        hint: "Cuando $x\\to0$, $\\sin(\\pi x)\\approx \\pi x$.",
                        reveal: "$-\\dfrac{\\pi x^2}{\\pi x} = -x \\to 0$ cuando $x\\to0^+$. El límite es $0$."
                    }
                ]
            },
            {
                id: 8,
                context: "Utilice la regla de L'Hôpital cuando sea adecuado: $\\displaystyle\\lim_{x\\to0^+} (4x+1)^{\\cot x}$.",
                steps: [
                    {
                        label: "Paso 1: Identificar la forma indeterminada",
                        hint: "Cuando $x\\to0^+$: la base $\\to1$ y el exponente $\\cot x\\to+\\infty$: forma $1^\\infty$.",
                        reveal: "Forma $1^\\infty$: tome logaritmo natural para poder usar L'Hôpital."
                    },
                    {
                        label: "Paso 2: Tomar logaritmo y reescribir como cociente",
                        hint: "Sea $L=\\lim(4x+1)^{\\cot x}$. Entonces $\\ln L = \\lim \\cot x\\cdot\\ln(4x+1) = \\lim \\dfrac{\\ln(4x+1)}{\\tan x}$ (forma $\\frac00$).",
                        reveal: "$\\ln L = \\displaystyle\\lim_{x\\to0^+}\\dfrac{\\ln(4x+1)}{\\tan x}$."
                    },
                    {
                        label: "Paso 3: Aplicar L'Hôpital",
                        hint: "Derive: $\\frac{d}{dx}\\ln(4x+1)=\\frac{4}{4x+1}$, $\\frac{d}{dx}\\tan x=\\sec^2x$.",
                        reveal: "$\\ln L = \\lim \\dfrac{4/(4x+1)}{\\sec^2 x} = \\dfrac{4}{1\\cdot 1} = 4$."
                    },
                    {
                        label: "Paso 4: Deshacer el logaritmo",
                        hint: "$L = e^{\\ln L}$.",
                        reveal: "$L = e^4$."
                    }
                ]
            },
            {
                id: 9,
                context: "Utilice la regla de L'Hôpital cuando sea adecuado: $\\displaystyle\\lim_{x\\to0^+} (\\cos x)^{1/x^2}$.",
                steps: [
                    {
                        label: "Paso 1: Identificar la forma indeterminada",
                        hint: "Cuando $x\\to0^+$: la base $\\to1$ y el exponente $\\to+\\infty$: forma $1^\\infty$.",
                        reveal: "Tome logaritmo: $\\ln L = \\lim \\dfrac{\\ln(\\cos x)}{x^2}$ (forma $\\frac00$)."
                    },
                    {
                        label: "Paso 2: Aplicar L'Hôpital",
                        hint: "$\\frac{d}{dx}\\ln(\\cos x) = -\\tan x$; $\\frac{d}{dx}x^2 = 2x$.",
                        reveal: "$\\ln L = \\lim \\dfrac{-\\tan x}{2x}$."
                    },
                    {
                        label: "Paso 3: Usar el límite notable tan(x)/x → 1",
                        hint: "$\\lim_{x\\to0}\\dfrac{\\tan x}{x}=1$.",
                        reveal: "$\\ln L = -\\dfrac12\\lim\\dfrac{\\tan x}{x} = -\\dfrac12$."
                    },
                    {
                        label: "Paso 4: Deshacer el logaritmo",
                        hint: "$L = e^{\\ln L}$.",
                        reveal: "$L = e^{-1/2} = \\dfrac{1}{\\sqrt e}$."
                    }
                ]
            }
        ]
    },
    {
        mission_id: "tf_curvas_optimizacion",
        title: "Taller Final — Curvas y Optimización",
        subtitle: "Selección curada: trazado de curvas (monotonía, concavidad) y problemas clásicos de optimización aplicada",
        exercises: [
            {
                id: 1,
                context: "Para $f(x)=2x^3+3x^2-36x$: encuentre los intervalos de crecimiento/decrecimiento, los extremos locales, los intervalos de concavidad y los puntos de inflexión.",
                steps: [
                    {
                        label: "Paso 1: Derivar y factorizar f'",
                        hint: "$f'(x)=6x^2+6x-36=6(x^2+x-6)$. Factorice el trinomio.",
                        reveal: "$f'(x) = 6(x+3)(x-2)$, con puntos críticos en $x=-3$ y $x=2$."
                    },
                    {
                        label: "Paso 2: Estudiar el signo de f' e identificar extremos",
                        hint: "Evalúe el signo de $(x+3)(x-2)$ en cada subintervalo determinado por $-3$ y $2$.",
                        reveal: "$f'>0$ en $(-\\infty,-3)$, $f'<0$ en $(-3,2)$, $f'>0$ en $(2,\\infty)$. Creciente en $(-\\infty,-3]\\cup[2,\\infty)$, decreciente en $[-3,2]$. Máximo local en $x=-3$ ($f(-3)=81$); mínimo local en $x=2$ ($f(2)=-44$)."
                    },
                    {
                        label: "Paso 3: Derivar de nuevo para la concavidad",
                        hint: "$f''(x)=12x+6$.",
                        reveal: "$f''(x)=0$ en $x=-\\frac12$. $f''<0$ (cóncava hacia abajo) si $x<-\\frac12$; $f''>0$ (cóncava hacia arriba) si $x>-\\frac12$."
                    },
                    {
                        label: "Paso 4: Punto de inflexión",
                        hint: "Evalúe $f$ en $x=-\\frac12$.",
                        reveal: "$f(-\\tfrac12)=18.5$. Punto de inflexión: $\\left(-\\frac12, 18.5\\right)$."
                    }
                ]
            },
            {
                id: 2,
                context: "Para $f(x)=\\exp(2x)+\\exp(-x)$: encuentre los intervalos de crecimiento/decrecimiento, los extremos locales, los intervalos de concavidad y los puntos de inflexión.",
                steps: [
                    {
                        label: "Paso 1: Derivar f",
                        hint: "$\\frac{d}{dx}e^{2x}=2e^{2x}$, $\\frac{d}{dx}e^{-x}=-e^{-x}$.",
                        reveal: "$f'(x) = 2e^{2x} - e^{-x}$."
                    },
                    {
                        label: "Paso 2: Resolver f'(x)=0",
                        hint: "Iguale $2e^{2x}=e^{-x}$ y combine exponentes: $2e^{3x}=1$.",
                        reveal: "$x = -\\dfrac{\\ln 2}{3}$ (único punto crítico)."
                    },
                    {
                        label: "Paso 3: Determinar la concavidad global",
                        hint: "Derive de nuevo: $f''(x)=4e^{2x}+e^{-x}$.",
                        reveal: "$f''(x)>0$ para todo $x$ (suma de exponenciales positivas): $f$ es cóncava hacia arriba en todo $\\mathbb{R}$, sin puntos de inflexión."
                    },
                    {
                        label: "Paso 4: Clasificar el punto crítico",
                        hint: "Como $f$ es cóncava hacia arriba en todo su dominio, el único punto crítico es un mínimo global.",
                        reveal: "Mínimo global en $x_0=-\\frac{\\ln2}{3}\\approx-0.231$, con $f(x_0)=2^{-2/3}+2^{1/3}\\approx1.890$. $f$ es decreciente en $(-\\infty,x_0]$ y creciente en $[x_0,\\infty)$."
                    }
                ]
            },
            {
                id: 3,
                context: "Un agricultor tiene $2400\\text{ ft}$ de material para construir una valla y desea cercar un campo rectangular a la orilla de un río recto; no necesita valla a lo largo del río. ¿Cuáles son las dimensiones del campo con área más grande?",
                steps: [
                    {
                        label: "Paso 1: Plantear las variables y la restricción",
                        hint: "Sea $x$ el ancho (dos lados perpendiculares al río) y $y$ el largo (paralelo al río, un solo lado). El material total es $2x+y=2400$.",
                        reveal: "$y = 2400 - 2x$."
                    },
                    {
                        label: "Paso 2: Escribir el área en función de x",
                        hint: "$A = x\\cdot y$.",
                        reveal: "$A(x) = x(2400-2x) = 2400x - 2x^2$."
                    },
                    {
                        label: "Paso 3: Maximizar A",
                        hint: "Derive e iguale a cero: $A'(x)=2400-4x$.",
                        reveal: "$A'(x)=0 \\Rightarrow x=600$."
                    },
                    {
                        label: "Paso 4: Hallar las dimensiones y el área máxima",
                        hint: "Sustituya $x=600$ en $y=2400-2x$.",
                        reveal: "$y=1200$. Dimensiones óptimas: $600\\text{ ft} \\times 1200\\text{ ft}$, área máxima $=720{,}000\\text{ ft}^2$."
                    }
                ]
            },
            {
                id: 4,
                context: "Se va a construir una lata cilíndrica con tapa que contenga $1000\\text{ cm}^3$ de aceite. Encuentre las dimensiones que reducen al mínimo el costo del metal.",
                steps: [
                    {
                        label: "Paso 1: Plantear el volumen y despejar h",
                        hint: "$V=\\pi r^2 h = 1000$.",
                        reveal: "$h = \\dfrac{1000}{\\pi r^2}$."
                    },
                    {
                        label: "Paso 2: Escribir el área total de material",
                        hint: "Superficie total con tapa: $S=2\\pi r^2 + 2\\pi r h$ (dos tapas circulares + área lateral).",
                        reveal: "$S(r) = 2\\pi r^2 + \\dfrac{2000}{r}$."
                    },
                    {
                        label: "Paso 3: Minimizar S",
                        hint: "$S'(r)=4\\pi r - \\dfrac{2000}{r^2}$. Iguale a cero.",
                        reveal: "$4\\pi r^3 = 2000 \\Rightarrow r^3=\\dfrac{500}{\\pi} \\Rightarrow r=\\left(\\dfrac{500}{\\pi}\\right)^{1/3}\\approx 5.42\\text{ cm}$."
                    },
                    {
                        label: "Paso 4: Hallar h y verificar la relación clásica h=2r",
                        hint: "Sustituya $r$ en $h=1000/(\\pi r^2)$.",
                        reveal: "$h\\approx10.84\\text{ cm} = 2r$ (resultado clásico del cilindro óptimo con tapa: la altura es el doble del radio)."
                    }
                ]
            },
            {
                id: 5,
                context: "Una refinería debe conectarse con un pozo al otro lado de un río recto, $6\\text{ km}$ aguas abajo. El río tiene ancho $2\\text{ km}$. El oleoducto cuesta $400\\text{ USD/km}$ en tierra y $800\\text{ USD/km}$ bajo el lecho del río. Encuentre el trazo que minimiza el costo.",
                steps: [
                    {
                        label: "Paso 1: Plantear la función de costo",
                        hint: "Sea $x$ la distancia (km), desde el punto directamente opuesto a la refinería, hasta donde el tubo emerge en la orilla lejana. El tramo submarino mide $\\sqrt{x^2+4}$ km (ancho del río $=2$ km) y el tramo terrestre mide $6-x$ km.",
                        reveal: "$C(x) = 800\\sqrt{x^2+4} + 400(6-x)$."
                    },
                    {
                        label: "Paso 2: Derivar e igualar a cero",
                        hint: "$C'(x) = 800\\cdot\\dfrac{x}{\\sqrt{x^2+4}} - 400$.",
                        reveal: "$\\dfrac{800x}{\\sqrt{x^2+4}} = 400 \\Rightarrow 2x=\\sqrt{x^2+4}$."
                    },
                    {
                        label: "Paso 3: Resolver para x",
                        hint: "Eleve al cuadrado ambos lados: $4x^2=x^2+4$.",
                        reveal: "$3x^2=4 \\Rightarrow x=\\dfrac{2}{\\sqrt3}=\\dfrac{2\\sqrt3}{3}\\approx1.155\\text{ km}$."
                    },
                    {
                        label: "Paso 4: Calcular el costo mínimo",
                        hint: "Sustituya $x$ en $C(x)$ y simplifique.",
                        reveal: "$C_{min} = 2400 + 800\\sqrt3 \\approx \\$3785.64$ USD."
                    }
                ]
            }
        ]
    }
];

const SUBJECTS_P3 = [
    {
        id: "calculus_p3",
        title: "Repaso Cálculo Diferencial",
        description: "Modo guiado: tutor paso a paso basado en Entrenamiento 9, 10, 11 y una selección curada del Taller Final. Sin XP — práctica pura.",
        icon: "🧭",
        missions: GUIDED_DIFERENCIAL_P3
    },
    {
        id: "algebra_p3",
        title: "Repaso Álgebra Lineal",
        description: "Próximamente — estamos preparando el contenido guiado de Álgebra Lineal para el Parcial 3.",
        icon: "🧮",
        missions: []
    },
    {
        id: "metodos_p3",
        title: "Métodos Numéricos",
        description: "Modo guiado: tutor paso a paso basado en los talleres parciales 2016, 2017, 2018, 2019, 2025 y un simulacro de parcial. Sin XP — práctica pura.",
        icon: "🔢",
        missions: GUIDED_METODOS_P3
    }
];

const PARCIALES = [
    {
        id: "parcial2",
        title: "Repasos Parcial 2",
        description: "Cálculo Diferencial, Álgebra Lineal y Métodos Numéricos en formato misión clásica: responde, evalúa y revisa la solución detallada.",
        icon: "🎯",
        subjects: SUBJECTS_P2
    },
    {
        id: "parcial3",
        title: "Repasos Parcial 3",
        description: "Nuevo material de repaso. Diferencial estrena el modo guiado: un tutor paso a paso con recordatorios teóricos en cada etapa.",
        icon: "🚀",
        subjects: SUBJECTS_P3
    }
];
