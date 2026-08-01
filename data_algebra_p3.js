/* ==================================================================
   REPASOS PARCIAL 3 — Álgebra Lineal (modo guiado, sin XP)
   Contenido basado en el Supletorio 2024-II, el examen 2025-II y el
   Simulacro de Parcial 3 (con su solucionario). Cada ejercicio trae
   `context` (enunciado, incluyendo las opciones cuando es de selección
   múltiple) y `steps` (secuencia de pasos con recordatorio + resultado
   revelado), replicando la dinámica del tutor de Cálculo Diferencial.
   ================================================================== */

const GUIDED_ALGEBRA_P3 = [
    {
        mission_id: "p3_2024_2",
        title: "Supletorio 2024-II",
        subtitle: "Espacio fila/columna y núcleo, proyecciones ortogonales, cónicas, transformaciones lineales, subespacios de polinomios y teorema espectral (rango 1)",
        exercises: [
            {
                id: 1,
                context: "Considere los vectores $\\vec v_1=\\begin{bmatrix}1\\\\-2\\\\1\\end{bmatrix}$, $\\vec v_2=\\begin{bmatrix}1\\\\1\\\\1\\end{bmatrix}$ y $\\vec v_3=\\begin{bmatrix}1\\\\0\\\\-1\\end{bmatrix}$, y sea $A$ la matriz $3\\times3$ cuyas columnas son $\\vec v_1,\\vec v_2,\\vec v_3$. ¿Cuál de las siguientes afirmaciones es correcta?\n\n(i) La base canónica es una base ortonormal para el espacio columna de $A$.\n(ii) El espacio ortogonal al espacio fila de $A$ tiene dimensión 1.\n(iii) El espacio ortogonal al espacio fila de $A$ tiene dimensión 2.\n(iv) Ninguna de las otras opciones.",
                steps: [
                    {
                        label: "Paso 1: Determinar el rango de A",
                        hint: "Calcule $\\det(A)$ armando la matriz con $\\vec v_1,\\vec v_2,\\vec v_3$ como columnas. Si el determinante es distinto de cero, las columnas son linealmente independientes.",
                        reveal: "$\\det(A)=\\det\\begin{bmatrix}1&1&1\\\\-2&1&0\\\\1&1&-1\\end{bmatrix}=1(-1-0)-1(2-0)+1(-2-1)=-1-2-3=-6\\neq0$. Por lo tanto $\\text{rango}(A)=3$."
                    },
                    {
                        label: "Paso 2: Identificar el espacio columna de A",
                        hint: "Si el rango de una matriz $3\\times3$ es 3, ¿qué subespacio de $\\mathbb{R}^3$ es exactamente su espacio columna?",
                        reveal: "Como $\\text{rango}(A)=3$, el espacio columna $\\text{Col}(A)$ es todo $\\mathbb{R}^3$."
                    },
                    {
                        label: "Paso 3: Evaluar la opción (i)",
                        hint: "¿Es la base canónica $\\{e_1,e_2,e_3\\}$ una base ortonormal de $\\mathbb{R}^3$? No importa que las columnas de $A$ no sean ortogonales entre sí — lo relevante es qué subespacio generan.",
                        reveal: "Como $\\text{Col}(A)=\\mathbb{R}^3$, cualquier base ortonormal de $\\mathbb{R}^3$ —incluida la base canónica— es una base ortonormal de $\\text{Col}(A)$. La opción (i) es verdadera."
                    },
                    {
                        label: "Paso 4: Descartar (ii) y (iii)",
                        hint: "El espacio fila de $A$ también tiene dimensión igual al rango (por ser $A$ cuadrada). ¿Cuál es entonces la dimensión de su complemento ortogonal en $\\mathbb{R}^3$?",
                        reveal: "$\\dim(\\text{Fil}(A))=\\text{rango}(A)=3\\Rightarrow\\dim(\\text{Fil}(A)^\\perp)=3-3=0$. Las opciones (ii) y (iii) son falsas. <strong>Respuesta correcta: (i).</strong>"
                    }
                ]
            },
            {
                id: 2,
                context: "Considere la matriz $$A=\\begin{bmatrix}3&3&3&3\\\\5&5&5&5\\\\4&4&4&4\\end{bmatrix}$$ y sea $W$ un subespacio de $\\mathbb{R}^4$ tal que $\\dim(W^\\perp)=1$. ¿Cuál de las siguientes posibilidades es correcta?\n\n(i) $W=\\text{Ren}(A)$.\n(ii) $W=\\text{Col}(A)$.\n(iii) $W=\\text{Nul}(A)$.\n(iv) Ninguna de las anteriores.",
                steps: [
                    {
                        label: "Paso 1: Calcular el rango de A",
                        hint: "Observe que las filas de $A$ son múltiplos entre sí.",
                        reveal: "Fila 2 $=\\frac{5}{3}$Fila 1 y Fila 3 $=\\frac{4}{3}$Fila 1. Solo hay un pivote: $\\text{rango}(A)=1$."
                    },
                    {
                        label: "Paso 2: Determinar dim(W)",
                        hint: "Use $\\dim(W)+\\dim(W^\\perp)=4$, ya que $W\\subset\\mathbb{R}^4$.",
                        reveal: "$\\dim(W)=4-\\dim(W^\\perp)=4-1=3$."
                    },
                    {
                        label: "Paso 3: Comparar con Ren(A), Col(A) y Nul(A)",
                        hint: "Recuerde: $\\dim(\\text{Ren}(A))=\\text{rango}(A)$; $\\text{Col}(A)$ vive en $\\mathbb{R}^3$ (número de filas), no en $\\mathbb{R}^4$; $\\dim(\\text{Nul}(A))=n-\\text{rango}(A)$ con $n=4$ columnas.",
                        reveal: "$\\dim(\\text{Ren}(A))=1\\neq3$. $\\text{Col}(A)\\subset\\mathbb{R}^3$, no puede ser subespacio de $\\mathbb{R}^4$. $\\dim(\\text{Nul}(A))=4-1=3$, que coincide exactamente con $\\dim(W)$. <strong>Respuesta correcta: (iii) $W=\\text{Nul}(A)$.</strong>"
                    }
                ]
            },
            {
                id: 3,
                context: "Considere $W=\\left\\{\\begin{bmatrix}x\\\\y\\\\z\\\\w\\end{bmatrix}\\in\\mathbb{R}^4 : x+y+z+w=0\\right\\}$ y $\\vec v=\\begin{bmatrix}4\\\\0\\\\2\\\\2\\end{bmatrix}$. Calcule $\\text{Proy}_W(\\vec v)$.",
                steps: [
                    {
                        label: "Paso 1: Identificar el vector normal a W",
                        hint: "$W$ es un hiperplano; su vector normal son los coeficientes de la ecuación implícita.",
                        reveal: "$\\vec n=\\begin{bmatrix}1\\\\1\\\\1\\\\1\\end{bmatrix}$."
                    },
                    {
                        label: "Paso 2: Proyectar v sobre W⊥ = gen{n}",
                        hint: "Use $\\text{Proy}_{W^\\perp}(\\vec v)=\\dfrac{\\vec v\\cdot\\vec n}{\\|\\vec n\\|^2}\\vec n$.",
                        reveal: "$\\vec v\\cdot\\vec n=4+0+2+2=8$, $\\|\\vec n\\|^2=4$. $\\text{Proy}_{W^\\perp}(\\vec v)=\\frac{8}{4}\\vec n=\\begin{bmatrix}2\\\\2\\\\2\\\\2\\end{bmatrix}$."
                    },
                    {
                        label: "Paso 3: Obtener la proyección sobre W",
                        hint: "$\\text{Proy}_W(\\vec v)=\\vec v-\\text{Proy}_{W^\\perp}(\\vec v)$.",
                        reveal: "$\\text{Proy}_W(\\vec v)=\\begin{bmatrix}4\\\\0\\\\2\\\\2\\end{bmatrix}-\\begin{bmatrix}2\\\\2\\\\2\\\\2\\end{bmatrix}=\\begin{bmatrix}2\\\\-2\\\\0\\\\0\\end{bmatrix}$. Verificación: $2-2+0+0=0\\in W$. <strong>Respuesta correcta: opción (iv).</strong>"
                    }
                ]
            },
            {
                id: 4,
                context: "Clasifique la curva $-7x^2+8xy-9y^2=-1$.\n\n(i) Parábola. (ii) Elipse. (iii) Círculo. (iv) Hipérbola.",
                steps: [
                    {
                        label: "Paso 1: Escribir la matriz simétrica asociada",
                        hint: "Para $Ax^2+Bxy+Cy^2$, la matriz simétrica es $\\begin{bmatrix}A&B/2\\\\B/2&C\\end{bmatrix}$.",
                        reveal: "$M=\\begin{bmatrix}-7&4\\\\4&-9\\end{bmatrix}$."
                    },
                    {
                        label: "Paso 2: Analizar el signo de los valores propios sin calcularlos",
                        hint: "Use $\\text{tr}(M)$ y $\\det(M)$: si $\\det(M)>0$ ambos valores propios comparten signo; ese signo lo indica la traza.",
                        reveal: "$\\text{tr}(M)=-16$, $\\det(M)=63-16=47>0$. Como el determinante es positivo, ambos valores propios tienen el mismo signo, y como la traza es negativa, ambos son negativos."
                    },
                    {
                        label: "Paso 3: Clasificar la cónica",
                        hint: "Si $\\lambda_1,\\lambda_2<0$ y la ecuación en ejes principales es $\\lambda_1(x')^2+\\lambda_2(y')^2=-1$, multiplique ambos lados por $-1$: ¿qué forma toma?",
                        reveal: "$|\\lambda_1|(x')^2+|\\lambda_2|(y')^2=1$ con ambos coeficientes positivos: es la ecuación canónica de una <strong>elipse</strong>. <strong>Respuesta correcta: (ii).</strong>"
                    }
                ]
            },
            {
                id: 5,
                context: "Sean $\\mathcal I:\\mathcal P_2\\to\\mathcal P_3$ y $\\mathcal D:\\mathcal P_3\\to\\mathcal P_2$ dadas por $$\\mathcal I(a_0+a_1x+a_2x^2)=a_0x+a_1\\frac{x^2}{2}+a_2\\frac{x^3}{3}, \\qquad \\mathcal D(a_0+a_1x+a_2x^2+a_3x^3)=a_1+2a_2x+3a_3x^2.$$ ¿Cuál de las siguientes es correcta?\n\n(i) $\\mathcal I\\circ\\mathcal D$ es invertible. (ii) $\\mathcal I$ es invertible. (iii) $\\mathcal D\\circ\\mathcal I$ es invertible. (iv) $\\mathcal D$ es invertible.",
                steps: [
                    {
                        label: "Paso 1: Evaluar I∘D",
                        hint: "Calcule $(\\mathcal I\\circ\\mathcal D)(a_0+a_1x+a_2x^2+a_3x^3)$ y observe qué ocurre con el término constante $a_0$.",
                        reveal: "$\\mathcal D(a_0+a_1x+a_2x^2+a_3x^3)=a_1+2a_2x+3a_3x^2$. Aplicando $\\mathcal I$: resultado $=a_1x+a_2x^2+a_3x^3$. El coeficiente $a_0$ desaparece, así que $\\mathcal I\\circ\\mathcal D$ <strong>no</strong> es inyectiva: no es invertible."
                    },
                    {
                        label: "Paso 2: Descartar I y D individualmente por dimensión",
                        hint: "Compare $\\dim(\\mathcal P_2)=3$ con $\\dim(\\mathcal P_3)=4$. Una transformación entre espacios de dimensión distinta nunca es biyectiva.",
                        reveal: "$\\mathcal I:\\mathcal P_2(\\dim3)\\to\\mathcal P_3(\\dim4)$ no puede ser sobreyectiva. $\\mathcal D:\\mathcal P_3(\\dim4)\\to\\mathcal P_2(\\dim3)$ no puede ser inyectiva (su núcleo contiene, entre otros, a los polinomios constantes)."
                    },
                    {
                        label: "Paso 3: Evaluar D∘I",
                        hint: "Calcule $(\\mathcal D\\circ\\mathcal I)(a_0+a_1x+a_2x^2)$.",
                        reveal: "$\\mathcal I(a_0+a_1x+a_2x^2)=a_0x+\\frac{a_1}{2}x^2+\\frac{a_2}{3}x^3$. Aplicando $\\mathcal D$ (coeficientes $b_0=0,b_1=a_0,b_2=a_1/2,b_3=a_2/3$): resultado $=b_1+2b_2x+3b_3x^2=a_0+a_1x+a_2x^2$. ¡Es la identidad en $\\mathcal P_2$! Por lo tanto $\\mathcal D\\circ\\mathcal I=\\text{Id}_{\\mathcal P_2}$, que es invertible. <strong>Respuesta correcta: (iii).</strong>"
                    }
                ]
            },
            {
                id: 6,
                context: "Sea $\\mathcal P_4$ el espacio de polinomios de grado a lo sumo 4. Considere $$W_1=\\{p\\in\\mathcal P_4 : p(0)=0\\}, \\quad W_2=\\{p\\in\\mathcal P_4 : p'(1)+3p(0)=0\\}, \\quad W_3=\\{p\\in\\mathcal P_4 : p(x)=(x-2)q(x) \\text{ para algún } q(x)\\}.$$ ¿Cuántos de $W_1,W_2,W_3$ son subespacios vectoriales de $\\mathcal P_4$?",
                steps: [
                    {
                        label: "Paso 1: Analizar W1",
                        hint: "¿La condición $p(0)=0$ es una ecuación lineal y homogénea en los coeficientes de $p$?",
                        reveal: "$p(0)=a_0$. La condición $a_0=0$ es lineal y homogénea $\\Rightarrow W_1$ es subespacio (contiene al polinomio nulo y es cerrado bajo suma y escalar)."
                    },
                    {
                        label: "Paso 2: Analizar W2",
                        hint: "Exprese $p'(1)+3p(0)$ en términos de los coeficientes $a_0,\\dots,a_4$ y verifique linealidad.",
                        reveal: "Tanto $p'(1)$ como $p(0)$ son combinaciones lineales de los coeficientes de $p$; su suma también lo es, y la condición $=0$ es homogénea $\\Rightarrow W_2$ es subespacio."
                    },
                    {
                        label: "Paso 3: Analizar W3",
                        hint: "La condición \"$p(x)=(x-2)q(x)$ para algún $q$\" equivale, por el Teorema del Factor, a una condición de evaluación puntual.",
                        reveal: "$p(x)$ es divisible por $(x-2)$ si y solo si $p(2)=0$. Es de nuevo una condición lineal homogénea en los coeficientes $\\Rightarrow W_3$ es subespacio."
                    },
                    {
                        label: "Paso 4: Concluir",
                        hint: "Los tres conjuntos son núcleos de funcionales lineales (evaluaciones o combinaciones de evaluaciones) igualados a cero.",
                        reveal: "$W_1,W_2,W_3$ son subespacios vectoriales de $\\mathcal P_4$. <strong>Respuesta correcta: (i) Todos son subespacios.</strong>"
                    }
                ]
            },
            {
                id: 7,
                context: "Sea $W=\\{p(x)\\in\\mathcal P_3 : p'(0)=0\\}$. Considere $\\mathcal C=\\{1,\\;2+x^2,\\;x^2-x^3\\}$ y $q(x)=x^3$. Determine si $\\mathcal C$ es base de $W$ y, de serlo, halle $[q(x)]_{\\mathcal C}$.",
                steps: [
                    {
                        label: "Paso 1: Determinar dim(W)",
                        hint: "$p'(0)=a_1$ es una condición lineal homogénea no trivial sobre $\\mathcal P_3$ (dimensión 4).",
                        reveal: "$\\dim(W)=\\dim(\\mathcal P_3)-1=4-1=3$."
                    },
                    {
                        label: "Paso 2: Verificar que los elementos de C están en W",
                        hint: "Calcule $p'(0)$ para cada elemento de $\\mathcal C$.",
                        reveal: "$1'=0\\Rightarrow p'(0)=0$. $(2+x^2)'=2x\\Rightarrow p'(0)=0$. $(x^2-x^3)'=2x-3x^2\\Rightarrow p'(0)=0$. Los tres están en $W$."
                    },
                    {
                        label: "Paso 3: Verificar independencia lineal",
                        hint: "Escriba las coordenadas en la base monomial $\\{1,x,x^2,x^3\\}$ y reduzca por filas.",
                        reveal: "Coordenadas: $(1,0,0,0)$, $(2,0,1,0)$, $(0,0,1,-1)$. Al escalonar se obtienen 3 pivotes $\\Rightarrow$ son linealmente independientes. Como $\\dim(W)=3$ y hay 3 vectores independientes en $W$, $\\mathcal C$ <strong>es base de $W$</strong>."
                    },
                    {
                        label: "Paso 4: Hallar [q(x)]_C",
                        hint: "Plantee $c_1(1)+c_2(2+x^2)+c_3(x^2-x^3)=x^3$ e iguale coeficientes grado a grado.",
                        reveal: "Coef. $x^3$: $-c_3=1\\Rightarrow c_3=-1$. Coef. $x^2$: $c_2+c_3=0\\Rightarrow c_2=1$. Coef. constante: $c_1+2c_2=0\\Rightarrow c_1=-2$. $[q(x)]_{\\mathcal C}=\\begin{bmatrix}-2\\\\1\\\\-1\\end{bmatrix}$. <strong>Respuesta correcta: (iii).</strong>"
                    }
                ]
            },
            {
                id: 8,
                context: "Sea $A$ una matriz simétrica $3\\times3$ con $\\text{rango}(A)=1$. Se sabe que $$A\\begin{bmatrix}3\\\\0\\\\4\\end{bmatrix}=\\begin{bmatrix}-6\\\\0\\\\-8\\end{bmatrix}.$$\n\n(i) [5pt] Halle los valores propios de $A$ y sus multiplicidades algebraicas.\n(ii) [5pt] Encuentre el polinomio característico de $A$.\n(iii) [10pt] Para cada valor propio, encuentre una base ortonormal de su espacio propio.\n(iv) [10pt] Encuentre la matriz $A$.",
                steps: [
                    {
                        label: "Paso 1 (i): Identificar el primer valor propio",
                        hint: "Observe que $A(3,0,4)^T$ resulta ser un múltiplo escalar de $(3,0,4)^T$: esa es precisamente la definición de vector/valor propio.",
                        reveal: "$A\\begin{bmatrix}3\\\\0\\\\4\\end{bmatrix}=\\begin{bmatrix}-6\\\\0\\\\-8\\end{bmatrix}=-2\\begin{bmatrix}3\\\\0\\\\4\\end{bmatrix}$, así que $\\lambda_1=-2$ es valor propio con vector propio $(3,0,4)^T$."
                    },
                    {
                        label: "Paso 2 (i): Usar el rango para hallar el resto del espectro",
                        hint: "Si $\\text{rango}(A)=1$, ¿cuál es $\\dim(\\text{Nul}(A))$ por el Teorema de Rango-Nulidad? Recuerde que $\\text{Nul}(A)=E_0$.",
                        reveal: "$\\dim(\\text{Nul}(A))=3-\\text{rango}(A)=3-1=2$. Como $A$ es simétrica, multiplicidad geométrica = multiplicidad algebraica, así $\\lambda_2=0$ tiene multiplicidad algebraica <strong>2</strong> y $\\lambda_1=-2$ tiene multiplicidad algebraica <strong>1</strong> (suman 3, correcto para una matriz $3\\times3$)."
                    },
                    {
                        label: "Paso 3 (ii): Polinomio característico",
                        hint: "Use $P_A(\\lambda)=(\\lambda-\\lambda_1)^{m_1}(\\lambda-\\lambda_2)^{m_2}$ con las multiplicidades del paso anterior.",
                        reveal: "$P_A(\\lambda)=(\\lambda+2)(\\lambda-0)^2=(\\lambda+2)\\lambda^2=\\lambda^3+2\\lambda^2$."
                    },
                    {
                        label: "Paso 4 (iii): Base ortonormal de E₋₂",
                        hint: "Normalice el vector propio ya conocido.",
                        reveal: "$\\|(3,0,4)\\|=5$. $\\mathcal B_{E_{-2}}=\\left\\{\\dfrac{1}{5}\\begin{bmatrix}3\\\\0\\\\4\\end{bmatrix}\\right\\}$."
                    },
                    {
                        label: "Paso 5 (iii): Base ortonormal de E₀",
                        hint: "Como $A$ es simétrica, $E_0=E_{-2}^\\perp=\\{(x,y,z):3x+4z=0\\}$. Busque dos vectores ortogonales entre sí dentro de ese plano (uno simple, y el otro vía producto cruz con el vector propio de $E_{-2}$).",
                        reveal: "Un primer vector simple en el plano: $(0,1,0)$ (ya unitario). El segundo, ortogonal a ambos anteriores: $\\vec u_1\\times(0,1,0)=\\left(-\\frac{4}{5},0,\\frac{3}{5}\\right)$ (norma 1 al verificarlo). $\\mathcal B_{E_0}=\\left\\{\\begin{bmatrix}0\\\\1\\\\0\\end{bmatrix},\\begin{bmatrix}-4/5\\\\0\\\\3/5\\end{bmatrix}\\right\\}$."
                    },
                    {
                        label: "Paso 6 (iv): Reconstruir A",
                        hint: "Use la descomposición espectral $A=\\sum\\lambda_i\\vec u_i\\vec u_i^T$; los términos con $\\lambda=0$ se anulan automáticamente.",
                        reveal: "$A=-2\\,\\vec u_1\\vec u_1^T=-2\\begin{bmatrix}3/5\\\\0\\\\4/5\\end{bmatrix}\\begin{bmatrix}3/5&0&4/5\\end{bmatrix}=\\begin{bmatrix}-18/25&0&-24/25\\\\0&0&0\\\\-24/25&0&-32/25\\end{bmatrix}$. Verificación: $A(3,0,4)^T=(-6,0,-8)^T$ ✓, $A$ simétrica ✓, $\\text{rango}(A)=1$ ✓."
                    }
                ]
            }
        ]
    },
    {
        mission_id: "p3_2025_2",
        title: "Examen 2025-II",
        subtitle: "Matrices ortogonales, proyecciones, Gram-Schmidt, diagonalización simétrica, cónicas, bases de P2 y M2×2, transformaciones lineales",
        exercises: [
            {
                id: 1,
                context: "Considere las matrices $$A=\\begin{bmatrix}1/2&-1/2\\\\-1/2&1/2\\end{bmatrix},\\quad B=\\begin{bmatrix}-1/2&-\\sqrt3/2\\\\-\\sqrt3/2&1/2\\end{bmatrix},\\quad C=\\begin{bmatrix}-\\sqrt2&\\sqrt2\\\\-\\sqrt2&-\\sqrt2\\end{bmatrix}.$$ ¿Cuál de ellas es ortogonal?\n\n(A) Solo A. (B) Solo B. (C) Solo C. (D) Las tres. (E) Ninguna.",
                steps: [
                    {
                        label: "Paso 1: Recordar el criterio de ortogonalidad",
                        hint: "Una matriz es ortogonal si y solo si sus columnas forman un conjunto ortonormal: norma 1 cada una, y ortogonales entre sí.",
                        reveal: "Verificaremos norma y ortogonalidad de las columnas de cada matriz."
                    },
                    {
                        label: "Paso 2: Analizar A",
                        hint: "Calcule la norma al cuadrado de la primera columna de $A$.",
                        reveal: "Columna 1 de $A$: $(1/2,-1/2)$, norma² $=1/4+1/4=1/2\\neq1$. <strong>A no es ortogonal</strong> (sus columnas no son unitarias)."
                    },
                    {
                        label: "Paso 3: Analizar B",
                        hint: "Calcule las normas de ambas columnas de $B$ y su producto punto.",
                        reveal: "Columna 1 $(-1/2,-\\sqrt3/2)$: norma² $=1/4+3/4=1$. Columna 2 $(-\\sqrt3/2,1/2)$: norma² $=3/4+1/4=1$. Producto punto: $(-1/2)(-\\sqrt3/2)+(-\\sqrt3/2)(1/2)=\\sqrt3/4-\\sqrt3/4=0$. <strong>B es ortogonal.</strong>"
                    },
                    {
                        label: "Paso 4: Analizar C y concluir",
                        hint: "Calcule la norma al cuadrado de una columna de $C$.",
                        reveal: "Columna 1 de $C$: $(-\\sqrt2,-\\sqrt2)$, norma² $=2+2=4\\neq1$. <strong>C no es ortogonal.</strong> <strong>Respuesta correcta: (B) Solo la matriz B es ortogonal.</strong>"
                    }
                ]
            },
            {
                id: 2,
                context: "Se sabe que $W$ es subespacio de $\\mathbb{R}^3$ y que $$W^\\perp=\\text{gen}\\left\\{\\begin{bmatrix}2\\\\0\\\\-3\\end{bmatrix}\\right\\}.$$ ¿Cuál es la dimensión de $W$?\n\n(A) No tiene dimensión. (B) 2. (C) No hay información suficiente. (D) 1. (E) 3.",
                steps: [
                    {
                        label: "Paso 1: Determinar dim(W⊥)",
                        hint: "$W^\\perp$ está generado por un único vector no nulo.",
                        reveal: "$\\dim(W^\\perp)=1$."
                    },
                    {
                        label: "Paso 2: Usar la fórmula de dimensiones complementarias",
                        hint: "En $\\mathbb{R}^n$ siempre se cumple $\\dim(W)+\\dim(W^\\perp)=n$.",
                        reveal: "$\\dim(W)=3-1=2$. <strong>Respuesta correcta: (B) La dimensión de W es 2.</strong>"
                    }
                ]
            },
            {
                id: 3,
                context: "Sea $W=\\{(x,y,z)\\in\\mathbb{R}^3 : -2x+y+2z=0\\}$. Se sabe que para cierto $\\vec u\\in\\mathbb{R}^3$: $$\\text{Proy}_W(\\vec u)=\\begin{bmatrix}1\\\\0\\\\1\\end{bmatrix}, \\qquad \\text{Proy}_{W^\\perp}(\\vec u)=\\begin{bmatrix}-4\\\\2\\\\4\\end{bmatrix}.$$ Determine $\\vec u$.\n\n(A) $(-4,2,4)$. (B) $(-3,2,5)$. (C) $\\vec u=W$. (D) No hay información suficiente. (E) $(1,0,1)$.",
                steps: [
                    {
                        label: "Paso 1: Recordar el Teorema de Descomposición Ortogonal",
                        hint: "Todo vector se recupera sumando sus dos proyecciones: $\\vec u=\\text{Proy}_W(\\vec u)+\\text{Proy}_{W^\\perp}(\\vec u)$.",
                        reveal: "$\\vec u=\\begin{bmatrix}1\\\\0\\\\1\\end{bmatrix}+\\begin{bmatrix}-4\\\\2\\\\4\\end{bmatrix}=\\begin{bmatrix}-3\\\\2\\\\5\\end{bmatrix}$."
                    },
                    {
                        label: "Paso 2: Verificar consistencia",
                        hint: "$\\text{Proy}_W(\\vec u)$ debe satisfacer la ecuación de $W$, y $\\text{Proy}_{W^\\perp}(\\vec u)$ debe ser paralelo al vector normal $(-2,1,2)$.",
                        reveal: "$-2(1)+0+2(1)=0$ ✓ está en $W$. $(-4,2,4)=2\\cdot(-2,1,2)$ ✓ paralelo a la normal. Todo consistente. <strong>Respuesta correcta: (B) $\\vec u=(-3,2,5)$.</strong>"
                    }
                ]
            },
            {
                id: 4,
                context: "Sea $\\mathcal B=\\{\\vec v_1=(1,0,0),\\;\\vec v_2=(1,0,3),\\;\\vec v_3=(1,-3,3)\\}$ base de $\\mathbb{R}^3$. Al aplicar Gram-Schmidt usando $\\vec v_1$ como primer vector, ¿qué base ortogonal se obtiene?\n\n(A) $\\{v_1,v_2-v_1,v_3-v_1\\}$. (B) $\\{v_1,v_2,v_3-v_1\\}$. (C) $\\{v_1,v_2,v_3\\}$. (D) No se puede aplicar Gram-Schmidt a B. (E) $\\{v_1,v_2-v_1,v_3-v_2\\}$.",
                steps: [
                    {
                        label: "Paso 1: Calcular w2",
                        hint: "$\\vec w_2=\\vec v_2-\\dfrac{\\vec v_2\\cdot\\vec w_1}{\\|\\vec w_1\\|^2}\\vec w_1$, con $\\vec w_1=\\vec v_1$.",
                        reveal: "$\\vec v_2\\cdot\\vec w_1=1$, $\\|\\vec w_1\\|^2=1$. $\\vec w_2=(1,0,3)-1\\cdot(1,0,0)=(0,0,3)=\\vec v_2-\\vec v_1$."
                    },
                    {
                        label: "Paso 2: Calcular w3",
                        hint: "$\\vec w_3=\\vec v_3-\\dfrac{\\vec v_3\\cdot\\vec w_1}{\\|\\vec w_1\\|^2}\\vec w_1-\\dfrac{\\vec v_3\\cdot\\vec w_2}{\\|\\vec w_2\\|^2}\\vec w_2$.",
                        reveal: "$\\vec v_3\\cdot\\vec w_1=1\\Rightarrow$ restar $\\vec w_1$: $(1,-3,3)-(1,0,0)=(0,-3,3)$. Luego $\\vec v_3\\cdot\\vec w_2=9=\\|\\vec w_2\\|^2\\Rightarrow$ restar $\\vec w_2$ completo: $(0,-3,3)-(0,0,3)=(0,-3,0)$."
                    },
                    {
                        label: "Paso 3: Reconocer w3 en términos de los vectores originales",
                        hint: "Compare $(0,-3,0)$ con combinaciones simples de $\\vec v_1,\\vec v_2,\\vec v_3$.",
                        reveal: "$\\vec v_3-\\vec v_2=(1,-3,3)-(1,0,3)=(0,-3,0)=\\vec w_3$. La base ortogonal es $\\{\\vec v_1,\\;\\vec v_2-\\vec v_1,\\;\\vec v_3-\\vec v_2\\}$. <strong>Respuesta correcta: (E).</strong>"
                    }
                ]
            },
            {
                id: 5,
                context: "¿Cuál de las siguientes afirmaciones sobre matrices simétricas y ortogonales es correcta?\n\n(A) Toda matriz ortogonalmente diagonalizable es simétrica.\n(B) Toda matriz simétrica es ortogonal.\n(C) Toda matriz simétricamente diagonalizable es ortogonal.\n(D) Ninguna de las otras opciones.\n(E) Toda matriz ortogonal es simétrica.",
                steps: [
                    {
                        label: "Paso 1: Recordar el Teorema Espectral (caso real)",
                        hint: "El teorema espectral para matrices reales establece una equivalencia exacta entre \"ser ortogonalmente diagonalizable\" y una propiedad estructural muy conocida.",
                        reveal: "Teorema Espectral: una matriz real $A$ es ortogonalmente diagonalizable <strong>si y solo si</strong> $A$ es simétrica. Esto hace verdadera la opción (A)."
                    },
                    {
                        label: "Paso 2: Descartar las demás con contraejemplos",
                        hint: "Busque un contraejemplo simple para (B) y (E): una matriz diagonal no trivial, y una matriz de rotación.",
                        reveal: "(B) falsa: $\\begin{bmatrix}2&0\\\\0&3\\end{bmatrix}$ es simétrica pero no ortogonal. (E) falsa: la rotación $\\begin{bmatrix}0&-1\\\\1&0\\end{bmatrix}$ es ortogonal pero no simétrica. (C) mezcla conceptos y también es falsa. <strong>Respuesta correcta: (A).</strong>"
                    }
                ]
            },
            {
                id: 6,
                context: "Considere la curva $C: 5x^2+10xy+6y^2=1$. Clasifíquela.\n\n(A) No se puede determinar. (B) Círculo. (C) Hipérbola. (D) Parábola. (E) Elipse.",
                steps: [
                    {
                        label: "Paso 1: Matriz simétrica asociada",
                        hint: "Recuerde dividir el coeficiente cruzado entre 2 al construir la matriz.",
                        reveal: "$M=\\begin{bmatrix}5&5\\\\5&6\\end{bmatrix}$."
                    },
                    {
                        label: "Paso 2: Signo de los valores propios vía traza y determinante",
                        hint: "$\\text{tr}(M)=11$; calcule $\\det(M)$.",
                        reveal: "$\\det(M)=5(6)-5(5)=30-25=5>0$. Determinante positivo $\\Rightarrow$ ambos valores propios comparten signo; traza positiva $\\Rightarrow$ ambos son positivos."
                    },
                    {
                        label: "Paso 3: Clasificar",
                        hint: "Con ambos valores propios positivos, ¿qué forma canónica toma $\\lambda_1(x')^2+\\lambda_2(y')^2=1$?",
                        reveal: "Es la ecuación de una <strong>elipse</strong> (semiejes $1/\\sqrt{\\lambda_i}$, ambos reales). <strong>Respuesta correcta: (E).</strong>"
                    }
                ]
            },
            {
                id: 7,
                context: "Sea $\\mathcal P_2$ y $\\mathcal B=\\{2,\\;3+x,\\;3-5x+x^2\\}$. ¿Es $\\mathcal B$ base de $\\mathcal P_2$?\n\n(A) Los elementos de B son linealmente dependientes. (B) B es una base de P2. (C) El espacio generado por B tiene dimensión 4. (D) B no es una base de P2. (E) El espacio generado por B tiene dimensión 1.",
                steps: [
                    {
                        label: "Paso 1: Coordenadas en la base monomial",
                        hint: "Escriba cada polinomio como $(a_0,a_1,a_2)$ respecto a $\\{1,x,x^2\\}$.",
                        reveal: "$(2,0,0)$, $(3,1,0)$, $(3,-5,1)$."
                    },
                    {
                        label: "Paso 2: Verificar independencia",
                        hint: "Forme la matriz con estos vectores como columnas: ¿es triangular?",
                        reveal: "$\\begin{bmatrix}2&3&3\\\\0&1&-5\\\\0&0&1\\end{bmatrix}$ es triangular superior con diagonal $2,1,1$, determinante $=2\\neq0$. Son linealmente independientes."
                    },
                    {
                        label: "Paso 3: Concluir",
                        hint: "$\\dim(\\mathcal P_2)=3$. ¿Qué se necesita para que 3 vectores independientes formen una base?",
                        reveal: "3 vectores linealmente independientes en un espacio de dimensión 3 forman automáticamente una base. <strong>Respuesta correcta: (B) B es una base de P2.</strong>"
                    }
                ]
            },
            {
                id: 8,
                context: "Sea $W\\subset M_{2\\times2}(\\mathbb{R})$ el subespacio de las matrices simétricas. ¿Cuál afirmación es correcta?\n\n(A) W no tiene base. (B) $\\left\\{\\begin{bmatrix}1&2\\\\2&0\\end{bmatrix},\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}\\right\\}$ no es una base de W. (C) dim(W)=2. (D) dim(W)=4. (E) No hay suficiente información para calcular una base de W.",
                steps: [
                    {
                        label: "Paso 1: Determinar dim(W)",
                        hint: "Una matriz simétrica $2\\times2$ tiene la forma $\\begin{bmatrix}a&b\\\\b&c\\end{bmatrix}$: ¿cuántos parámetros libres hay?",
                        reveal: "3 parámetros libres $(a,b,c)\\Rightarrow\\dim(W)=3$, con base natural $\\left\\{\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix},\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix},\\begin{bmatrix}0&0\\\\0&1\\end{bmatrix}\\right\\}$."
                    },
                    {
                        label: "Paso 2: Evaluar el conjunto propuesto",
                        hint: "El conjunto de la opción (B) tiene solo 2 elementos. ¿Puede un conjunto de 2 vectores generar o ser base de un espacio de dimensión 3?",
                        reveal: "No: ningún conjunto de 2 vectores puede ser base de un espacio de dimensión 3, sin importar si son independientes (les falta un vector para generar todo $W$). <strong>Respuesta correcta: (B) El conjunto dado no es una base de W.</strong>"
                    }
                ]
            },
            {
                id: 9,
                context: "Sea $T:M_{2\\times2}(\\mathbb{R})\\to M_{2\\times2}(\\mathbb{R})$, $T(A)=\\dfrac{A+A^T}{2}$, y $S=T\\circ T$. ¿Cuál afirmación es correcta?\n\n(A) No existe A tal que T(A)=0. (B) Si $A=\\begin{bmatrix}1&3\\\\3&5\\end{bmatrix}$, entonces $S(A)\\neq A$. (C) Si $A=\\begin{bmatrix}1&1\\\\3&5\\end{bmatrix}$, entonces $T(A)=A$. (D) $S(0)\\neq0$. (E) $T(0)=0$.",
                steps: [
                    {
                        label: "Paso 1: Interpretar T",
                        hint: "T(A) extrae la \"parte simétrica\" de $A$. ¿Qué le pasa a una matriz ya simétrica bajo $T$? ¿Y a la matriz cero, usando linealidad?",
                        reveal: "Si $A$ es simétrica, $A^T=A$, entonces $T(A)=A$. Además $T$ es lineal, así que $T(0)=0$."
                    },
                    {
                        label: "Paso 2: Calcular S(0)",
                        hint: "$S=T\\circ T$; evalúe en la matriz nula.",
                        reveal: "$S(0)=T(T(0))=T(0)=0$."
                    },
                    {
                        label: "Paso 3: Descartar las demás opciones",
                        hint: "Pruebe con $A=\\begin{bmatrix}0&1\\\\-1&0\\end{bmatrix}$ (antisimétrica) para la opción sobre \"no existe A con T(A)=0\", y evalúe T en las matrices concretas de (B) y (C).",
                        reveal: "$T\\begin{bmatrix}0&1\\\\-1&0\\end{bmatrix}=0$, así que sí existe tal $A$ (descarta esa opción). Para $A=\\begin{bmatrix}1&3\\\\3&5\\end{bmatrix}$ (ya simétrica), $S(A)=A$ (no $\\neq A$). Para $A=\\begin{bmatrix}1&1\\\\3&5\\end{bmatrix}$, $T(A)=\\begin{bmatrix}1&2\\\\2&5\\end{bmatrix}\\neq A$. Todas esas opciones son falsas. <strong>Respuesta correcta: (E) T(0)=0.</strong>"
                    }
                ]
            },
            {
                id: 10,
                context: "Sea $\\mathcal P_2$ y $T:\\mathcal P_2\\to\\mathcal P_2$, $T(p(x))=p(0)+xp'(x)$. ¿Cuál afirmación es correcta?\n\n(A) $T(x^2)=1$. (B) T no es invertible. (C) T es invertible. (D) $T(1)=0$. (E) $T(x)=x^2$.",
                steps: [
                    {
                        label: "Paso 1: Calcular T sobre la base monomial",
                        hint: "Evalúe $T(1)$, $T(x)$, $T(x^2)$ directamente con la fórmula.",
                        reveal: "$T(1)=1+x\\cdot0=1$. $T(x)=0+x\\cdot1=x$. $T(x^2)=0+x\\cdot2x=2x^2$."
                    },
                    {
                        label: "Paso 2: Descartar opciones sobre valores puntuales",
                        hint: "Compare con las opciones (A), (D) y (E).",
                        reveal: "$T(x^2)=2x^2\\neq1$, $T(1)=1\\neq0$, $T(x)=x\\neq x^2$. Esas tres opciones son falsas."
                    },
                    {
                        label: "Paso 3: Determinar invertibilidad",
                        hint: "Escriba la matriz de $T$ en la base $\\{1,x,x^2\\}$ usando los resultados del Paso 1 y calcule su determinante.",
                        reveal: "Matriz $\\text{diag}(1,1,2)$, con $\\det=2\\neq0$. $T$ es invertible. <strong>Respuesta correcta: (C).</strong>"
                    }
                ]
            }
        ]
    },
    {
        mission_id: "simulacro_al_p3",
        title: "Simulacro de Parcial 3",
        subtitle: "Proyecciones, coordenadas en espacios abstractos, invertibilidad de operadores matriciales, matrices ortogonales, cónicas, Gram-Schmidt y teorema espectral",
        exercises: [
            {
                id: 1,
                context: "En $\\mathbb{R}^4$, sea $W=\\{(x,y,z,w) : 2x-y+3z-2w=0\\}$ y $\\vec v=\\begin{bmatrix}6\\\\2\\\\4\\\\2\\end{bmatrix}$. Calcule $\\text{Proy}_W(\\vec v)$.\n\n(A) $(4,3,1,4)$. (B) $(2,-1,3,-2)$. (C) $(8,1,7,0)$. (D) $(6,2,4,2)$. (E) $(1,2,-1,3)$.",
                steps: [
                    {
                        label: "Paso 1: Identificar el vector normal a W",
                        hint: "$W$ es un hiperplano en $\\mathbb{R}^4$; su normal son los coeficientes de la ecuación implícita.",
                        reveal: "$\\vec n=\\begin{bmatrix}2\\\\-1\\\\3\\\\-2\\end{bmatrix}$, generador de $W^\\perp$ (dimensión 1)."
                    },
                    {
                        label: "Paso 2: Proyectar v sobre W⊥",
                        hint: "Use $\\text{Proy}_{W^\\perp}(\\vec v)=\\dfrac{\\vec v\\cdot\\vec n}{\\|\\vec n\\|^2}\\vec n$.",
                        reveal: "$\\|\\vec n\\|^2=4+1+9+4=18$. $\\vec v\\cdot\\vec n=12-2+12-4=18$. $\\text{Proy}_{W^\\perp}(\\vec v)=\\frac{18}{18}\\vec n=\\begin{bmatrix}2\\\\-1\\\\3\\\\-2\\end{bmatrix}$."
                    },
                    {
                        label: "Paso 3: Obtener la proyección sobre W",
                        hint: "$\\text{Proy}_W(\\vec v)=\\vec v-\\text{Proy}_{W^\\perp}(\\vec v)$.",
                        reveal: "$\\text{Proy}_W(\\vec v)=\\begin{bmatrix}6\\\\2\\\\4\\\\2\\end{bmatrix}-\\begin{bmatrix}2\\\\-1\\\\3\\\\-2\\end{bmatrix}=\\begin{bmatrix}4\\\\3\\\\1\\\\4\\end{bmatrix}$. Verificación: $2(4)-3+3(1)-2(4)=8-3+3-8=0$ ✓. <strong>Respuesta correcta: (A).</strong>"
                    }
                ]
            },
            {
                id: 2,
                context: "Sea $W=\\{p(x)\\in\\mathcal P_2 : p(1)=0\\}$ con base $\\mathcal B=\\{1-x,\\;x-x^2\\}$. Dado $q(x)=3-5x+2x^2\\in W$, halle $[q(x)]_{\\mathcal B}$.\n\n(A) $(3,-2)$. (B) $(-3,2)$. (C) $(2,3)$. (D) $(3,2)$. (E) $(-5,2)$.",
                steps: [
                    {
                        label: "Paso 1: Plantear la combinación lineal",
                        hint: "Busque $c_1,c_2$ tales que $q(x)=c_1(1-x)+c_2(x-x^2)$.",
                        reveal: "$3-5x+2x^2=c_1+(-c_1+c_2)x-c_2x^2$."
                    },
                    {
                        label: "Paso 2: Igualar coeficientes grado a grado",
                        hint: "Compare término constante, término en $x$ y término en $x^2$ por separado.",
                        reveal: "Constante: $c_1=3$. Término $x^2$: $-c_2=2\\Rightarrow c_2=-2$. Verificación en $x$: $-c_1+c_2=-3-2=-5$ ✓ coincide con el coeficiente dado."
                    },
                    {
                        label: "Paso 3: Concluir",
                        hint: "Escriba el vector de coordenadas en el orden $(c_1,c_2)$.",
                        reveal: "$[q(x)]_{\\mathcal B}=\\begin{bmatrix}3\\\\-2\\end{bmatrix}$. <strong>Respuesta correcta: (A).</strong>"
                    }
                ]
            },
            {
                id: 3,
                context: "Sea $T:M_{2\\times2}(\\mathbb{R})\\to M_{2\\times2}(\\mathbb{R})$, $T(A)=A-A^T$. ¿Cuál afirmación es correcta?\n\n(A) T es invertible. (B) $T(A)=0$ para cualquier matriz simétrica A, y por lo tanto T no es invertible. (C) $T(A)=0$ únicamente cuando A es la matriz nula. (D) $T(T(A))=T(A)$ para toda A. (E) Ninguna de las otras.",
                steps: [
                    {
                        label: "Paso 1: Caracterizar el núcleo de T",
                        hint: "Analice la condición $T(A)=0$: ¿qué relación entre $A$ y $A^T$ implica?",
                        reveal: "$T(A)=0\\iff A-A^T=0\\iff A=A^T$, es decir, $A$ es simétrica. Toda matriz simétrica cae en el núcleo de $T$."
                    },
                    {
                        label: "Paso 2: Concluir sobre invertibilidad",
                        hint: "Existen matrices simétricas no nulas (por ejemplo la identidad). ¿Qué implica esto sobre la inyectividad de T?",
                        reveal: "Como $A=I\\neq0$ es simétrica, $T(I)=0$ con $I\\neq0$: $T$ no es inyectiva, luego no es invertible. Esto descarta (A) y (C)."
                    },
                    {
                        label: "Paso 3: Descartar la opción (D)",
                        hint: "Calcule explícitamente $T(T(A))$ usando que $T(A)=A-A^T$ es siempre antisimétrica.",
                        reveal: "$T(T(A))=T(A-A^T)=(A-A^T)-(A-A^T)^T=(A-A^T)-(A^T-A)=2(A-A^T)=2T(A)\\neq T(A)$ en general. <strong>Respuesta correcta: (B).</strong>"
                    }
                ]
            },
            {
                id: 4,
                context: "Sea $Q=\\begin{bmatrix}1/\\sqrt3&a&1/\\sqrt2\\\\1/\\sqrt3&b&-1/\\sqrt2\\\\1/\\sqrt3&c&0\\end{bmatrix}$ una matriz ortogonal con $a>0$. Determine $a,b,c$.\n\n(A) $a=1/\\sqrt6,\\,b=1/\\sqrt6,\\,c=-2/\\sqrt6$. (B) $a=b=1/\\sqrt3,\\,c=-1/\\sqrt3$. (C) $a=1/\\sqrt2,\\,b=-1/\\sqrt2,\\,c=0$. (D) $a=2/\\sqrt6,\\,b=-1/\\sqrt6,\\,c=-1/\\sqrt6$. (E) Ninguna.",
                steps: [
                    {
                        label: "Paso 1: Ortogonalidad entre la 2ª y 3ª columnas",
                        hint: "Las columnas de una matriz ortogonal son ortogonales entre sí: calcule $\\vec q_2\\cdot\\vec q_3=0$ con $\\vec q_2=(a,b,c)$, $\\vec q_3=(1/\\sqrt2,-1/\\sqrt2,0)$.",
                        reveal: "$\\dfrac{a}{\\sqrt2}-\\dfrac{b}{\\sqrt2}=0\\Rightarrow a=b$."
                    },
                    {
                        label: "Paso 2: Ortogonalidad entre la 2ª y 1ª columnas",
                        hint: "Calcule $\\vec q_2\\cdot\\vec q_1=0$ con $\\vec q_1=(1/\\sqrt3,1/\\sqrt3,1/\\sqrt3)$ y sustituya $b=a$.",
                        reveal: "$\\dfrac{a+b+c}{\\sqrt3}=0\\Rightarrow a+b+c=0$. Con $b=a$: $2a+c=0\\Rightarrow c=-2a$."
                    },
                    {
                        label: "Paso 3: Normalizar q2",
                        hint: "Imponga $\\|\\vec q_2\\|^2=1$ y use $a>0$.",
                        reveal: "$a^2+a^2+(2a)^2=6a^2=1\\Rightarrow a=\\dfrac{1}{\\sqrt6}$ (tomando la raíz positiva). Entonces $b=\\dfrac{1}{\\sqrt6}$, $c=-\\dfrac{2}{\\sqrt6}$. <strong>Respuesta correcta: (A).</strong>"
                    }
                ]
            },
            {
                id: 5,
                context: "Considere la curva $3x^2-4xy+6y^2=14$. Clasifíquela.\n\n(A) Hipérbola, porque los valores propios tienen signos opuestos. (B) Parábola, porque un valor propio es cero. (C) Elipse, porque ambos valores propios son estrictamente positivos. (D) Par de rectas concurrentes. (E) Conjunto vacío.",
                steps: [
                    {
                        label: "Paso 1: Matriz simétrica asociada",
                        hint: "Divida el coeficiente cruzado entre 2.",
                        reveal: "$A=\\begin{bmatrix}3&-2\\\\-2&6\\end{bmatrix}$."
                    },
                    {
                        label: "Paso 2: Hallar los valores propios",
                        hint: "Resuelva $\\det(A-\\lambda I)=0$.",
                        reveal: "$(3-\\lambda)(6-\\lambda)-4=\\lambda^2-9\\lambda+14=0\\Rightarrow(\\lambda-7)(\\lambda-2)=0\\Rightarrow\\lambda_1=7,\\;\\lambda_2=2$, ambos positivos."
                    },
                    {
                        label: "Paso 3: Clasificar",
                        hint: "Con $\\lambda_1,\\lambda_2>0$, la ecuación en ejes principales toma la forma $7(x')^2+2(y')^2=14$: divida entre 14.",
                        reveal: "$\\dfrac{(x')^2}{2}+\\dfrac{(y')^2}{7}=1$: ecuación canónica de una <strong>elipse</strong>. <strong>Respuesta correcta: (C).</strong>"
                    }
                ]
            },
            {
                id: 6,
                context: "En $\\mathbb{R}^4$, sea $W=\\text{gen}\\{\\vec v_1,\\vec v_2,\\vec v_3\\}$ con $$\\vec v_1=\\begin{bmatrix}1\\\\1\\\\0\\\\1\\end{bmatrix},\\quad\\vec v_2=\\begin{bmatrix}3\\\\1\\\\1\\\\1\\end{bmatrix},\\quad\\vec v_3=\\begin{bmatrix}-1\\\\1\\\\-2\\\\1\\end{bmatrix}$$ y $\\vec b=\\begin{bmatrix}4\\\\2\\\\-1\\\\3\\end{bmatrix}$.\n\n(i) Demuestre que $\\{\\vec v_1,\\vec v_2,\\vec v_3\\}$ es linealmente independiente y determine $\\dim(W)$.\n(ii) Aplique Gram-Schmidt para construir una base ortonormal $\\{\\vec u_1,\\vec u_2,\\vec u_3\\}$ de $W$.\n(iii) Calcule $\\text{Proy}_W(\\vec b)$ y $\\text{Proy}_{W^\\perp}(\\vec b)$.",
                steps: [
                    {
                        label: "Paso 1 (i): Reducir por filas la matriz [v1 v2 v3]",
                        hint: "Arme la matriz con $\\vec v_1,\\vec v_2,\\vec v_3$ como columnas y escalone; cuente los pivotes.",
                        reveal: "$\\begin{bmatrix}1&3&-1\\\\1&1&1\\\\0&1&-2\\\\1&1&1\\end{bmatrix}\\to\\begin{bmatrix}1&3&-1\\\\0&1&-1\\\\0&0&-1\\\\0&0&0\\end{bmatrix}$ (tres pivotes, uno por columna). Son linealmente independientes y $\\dim(W)=3$."
                    },
                    {
                        label: "Paso 2 (ii): Primer vector ortonormal",
                        hint: "$\\vec w_1=\\vec v_1$, luego normalice.",
                        reveal: "$\\|\\vec w_1\\|^2=1+1+0+1=3\\Rightarrow \\vec u_1=\\dfrac{1}{\\sqrt3}\\begin{bmatrix}1\\\\1\\\\0\\\\1\\end{bmatrix}$."
                    },
                    {
                        label: "Paso 3 (ii): Segundo vector ortonormal",
                        hint: "$\\vec w_2=\\vec v_2-\\dfrac{\\vec v_2\\cdot\\vec w_1}{\\|\\vec w_1\\|^2}\\vec w_1$.",
                        reveal: "$\\vec v_2\\cdot\\vec w_1=3+1+0+1=5$. $\\vec w_2=(3,1,1,1)-\\frac{5}{3}(1,1,0,1)=\\frac{1}{3}(4,-2,3,-2)$, con $\\|\\vec w_2\\|^2=\\frac{1}{9}(16+4+9+4)=\\frac{11}{3}$. $\\vec u_2=\\dfrac{1}{\\sqrt{33}}\\begin{bmatrix}4\\\\-2\\\\3\\\\-2\\end{bmatrix}$."
                    },
                    {
                        label: "Paso 4 (ii): Tercer vector ortonormal",
                        hint: "$\\vec w_3=\\vec v_3-\\dfrac{\\vec v_3\\cdot\\vec w_1}{\\|\\vec w_1\\|^2}\\vec w_1-\\dfrac{\\vec v_3\\cdot\\vec w_2}{\\|\\vec w_2\\|^2}\\vec w_2$.",
                        reveal: "$\\vec v_3\\cdot\\vec w_1=1$; $\\vec v_3\\cdot\\vec w_2=-\\frac{14}{3}$ (usando $\\vec v_3\\cdot(3\\vec w_2)=-14$). Sustituyendo: $\\vec w_3=\\frac{2}{11}\\begin{bmatrix}2\\\\-1\\\\-4\\\\-1\\end{bmatrix}$, con $\\|\\vec w_3\\|=\\frac{2}{11}\\sqrt{22}$. $\\vec u_3=\\dfrac{1}{\\sqrt{22}}\\begin{bmatrix}2\\\\-1\\\\-4\\\\-1\\end{bmatrix}$."
                    },
                    {
                        label: "Paso 5 (iii): Proyección de b sobre W",
                        hint: "Use $\\text{Proy}_W(\\vec b)=(\\vec b\\cdot\\vec u_1)\\vec u_1+(\\vec b\\cdot\\vec u_2)\\vec u_2+(\\vec b\\cdot\\vec u_3)\\vec u_3$.",
                        reveal: "$\\vec b\\cdot\\vec u_1=3\\sqrt3$, $\\vec b\\cdot\\vec u_2=\\frac{3}{\\sqrt{33}}$, $\\vec b\\cdot\\vec u_3=\\frac{7}{\\sqrt{22}}$. Sustituyendo: $\\text{Proy}_W(\\vec b)=3\\vec w_1+\\frac{3}{11}\\begin{bmatrix}4\\\\-2\\\\3\\\\-2\\end{bmatrix}+\\frac{7}{22}\\begin{bmatrix}2\\\\-1\\\\-4\\\\-1\\end{bmatrix}=\\begin{bmatrix}52/11\\\\47/22\\\\-5/11\\\\47/22\\end{bmatrix}$."
                    },
                    {
                        label: "Paso 6 (iii): Componente ortogonal",
                        hint: "$\\text{Proy}_{W^\\perp}(\\vec b)=\\vec b-\\text{Proy}_W(\\vec b)$.",
                        reveal: "$\\text{Proy}_{W^\\perp}(\\vec b)=\\begin{bmatrix}4\\\\2\\\\-1\\\\3\\end{bmatrix}-\\begin{bmatrix}52/11\\\\47/22\\\\-5/11\\\\47/22\\end{bmatrix}=\\begin{bmatrix}-8/11\\\\-3/22\\\\-6/11\\\\19/22\\end{bmatrix}$. Auditoría: este vector debe ser ortogonal a $\\vec v_1$: $\\frac{-8}{11}-\\frac{3}{22}+0+\\frac{19}{22}=\\frac{-16-3+19}{22}=0$ ✓."
                    }
                ]
            },
            {
                id: 7,
                context: "Sea $A\\in M_{3\\times3}(\\mathbb{R})$ simétrica con $\\text{rango}(A)=1$. Se sabe que $\\vec v=\\begin{bmatrix}1\\\\2\\\\2\\end{bmatrix}$ es vector propio de $A$ con valor propio $\\lambda=9$.\n\n(i) Determine todos los valores propios de A, con sus multiplicidades algebraicas y geométricas.\n(ii) Escriba el polinomio característico $P_A(\\lambda)$.\n(iii) Para cada valor propio, construya una base ortonormal de su espacio propio.\n(iv) Reconstruya explícitamente la matriz A.",
                steps: [
                    {
                        label: "Paso 1 (i): Usar el rango para hallar la multiplicidad de λ=0",
                        hint: "Por el Teorema de Rango-Nulidad, $\\dim(\\text{Nul}(A))=3-\\text{rango}(A)$. Recuerde que $\\text{Nul}(A)=E_0$.",
                        reveal: "$\\dim(\\text{Nul}(A))=3-1=2\\Rightarrow$ la multiplicidad geométrica de $\\lambda=0$ es 2."
                    },
                    {
                        label: "Paso 2 (i): Concluir las multiplicidades",
                        hint: "Como $A$ es simétrica, las multiplicidades algebraica y geométrica coinciden para cada valor propio.",
                        reveal: "$\\lambda_1=9$: multiplicidad algebraica 1, geométrica 1. $\\lambda_2=0$: multiplicidad algebraica 2, geométrica 2 (suman 3, correcto)."
                    },
                    {
                        label: "Paso 3 (ii): Polinomio característico",
                        hint: "Factorice usando las raíces y sus multiplicidades.",
                        reveal: "$P_A(\\lambda)=(\\lambda-9)^1(\\lambda-0)^2=\\lambda^2(\\lambda-9)=\\lambda^3-9\\lambda^2$."
                    },
                    {
                        label: "Paso 4 (iii): Base ortonormal de E9",
                        hint: "Normalice $\\vec v=(1,2,2)$.",
                        reveal: "$\\|\\vec v\\|=\\sqrt{1+4+4}=3\\Rightarrow \\mathcal B_{E_9}=\\left\\{\\begin{bmatrix}1/3\\\\2/3\\\\2/3\\end{bmatrix}\\right\\}$."
                    },
                    {
                        label: "Paso 5 (iii): Base ortonormal de E0",
                        hint: "Como $A$ es simétrica, $E_0=E_9^\\perp=\\{(x,y,z):x+2y+2z=0\\}$. Elija un primer vector simple en ese plano y complete con un producto cruz.",
                        reveal: "Primer vector: $\\vec w_2=(0,1,-1)$, ya de norma $\\sqrt2$; normalizado: $\\vec u_2=(0,1/\\sqrt2,-1/\\sqrt2)$. Segundo vector: $\\vec u_3=\\vec u_1\\times\\vec u_2=\\frac{1}{3\\sqrt2}(-4,1,1)$ (norma 1, verificable: $\\frac{16+1+1}{18}=1$). $\\mathcal B_{E_0}=\\left\\{\\begin{bmatrix}0\\\\1/\\sqrt2\\\\-1/\\sqrt2\\end{bmatrix},\\begin{bmatrix}-4/(3\\sqrt2)\\\\1/(3\\sqrt2)\\\\1/(3\\sqrt2)\\end{bmatrix}\\right\\}$."
                    },
                    {
                        label: "Paso 6 (iv): Reconstruir A",
                        hint: "Use $A=\\sum\\lambda_i\\vec u_i\\vec u_i^T$; los términos con $\\lambda=0$ se anulan.",
                        reveal: "$A=9\\,\\vec u_1\\vec u_1^T=9\\begin{bmatrix}1/3\\\\2/3\\\\2/3\\end{bmatrix}\\begin{bmatrix}1/3&2/3&2/3\\end{bmatrix}=\\begin{bmatrix}1&2&2\\\\2&4&4\\\\2&4&4\\end{bmatrix}$. Comprobación: simétrica ✓, rango 1 ✓, $A(1,2,2)^T=(9,18,18)^T=9(1,2,2)^T$ ✓."
                    }
                ]
            }
        ]
    }
];
