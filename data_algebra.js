const ALGEBRA_DATA = [
  {
    "mission_id": "simulacro_lineal",
    "title": "Simulacro de Examen (Nivel Alto)",
    "exercises": [
      {
        "id": 1,
        "question": "Sean $A, B, C, D$ matrices invertibles del mismo tamaño. Si se sabe que la inversa de la matriz $(A B^2)$ es la matriz $C$, y la inversa de $B$ es la matriz $D$, determine cuál de las siguientes expresiones es igual a la matriz $A$:<br><br>A) $C^{-1} D^2$<br>B) $D^2 C^{-1}$<br>C) $C D^{-2}$<br>D) $D^{-2} C$",
        "solution": "Por hipótesis, la inversa de $A B^2$ es $C$, lo que significa que $(A B^2)^{-1} = C$.<br>Usando las propiedades de la inversa de un producto:<br>$$ (B^2)^{-1} A^{-1} = C \\implies (B^{-1})^2 A^{-1} = C $$<br>Sabemos además que la inversa de $B$ es $D$, es decir, $B^{-1} = D$. Sustituyendo esto en la expresión:<br>$$ D^2 A^{-1} = C $$<br>Para despejar $A^{-1}$, multiplicamos a la izquierda por la inversa de $D^2$, que es $(D^2)^{-1} = (D^{-1})^2 = B^2$:<br>$$ A^{-1} = (D^2)^{-1} C = B^2 C $$<br>Queremos encontrar la matriz $A$, así que invertimos ambos lados:<br>$$ A = (A^{-1})^{-1} = (B^2 C)^{-1} = C^{-1} (B^2)^{-1} = C^{-1} (B^{-1})^2 = C^{-1} D^2 $$<br><strong>Respuesta: A</strong>",
        "answers": {
          "Opcion": "A"
        }
      },
      {
        "id": 2,
        "question": "Considere los siguientes subconjuntos del espacio vectorial $\\mathbb{R}^3$:<br>$$ H_1 = \\left\\{ \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix} \\in \\mathbb{R}^3 \\;\\middle|\\; 2x - y + 3z = 0 \\right\\} $$<br>$$ H_2 = \\left\\{ \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix} \\in \\mathbb{R}^3 \\;\\middle|\\; xy \\ge 0 \\right\\} $$<br>$$ H_3 = \\left\\{ \\begin{bmatrix} a+b \\\\ 2a \\\\ b-a \\end{bmatrix} \\in \\mathbb{R}^3 \\;\\middle|\\; a, b \\in \\mathbb{R} \\right\\} $$<br>¿Cuáles de estos subconjuntos son subespacios vectoriales de $\\mathbb{R}^3$?<br><br>A) Solo $H_1$<br>B) Solo $H_1$ y $H_3$<br>C) Solo $H_1$ y $H_2$<br>D) Todos ($H_1$, $H_2$ y $H_3$)",
        "solution": "<ul><li>El conjunto $H_1$ es el plano cuya ecuación es $2x - y + 3z = 0$. Al ser una ecuación lineal homogénea, representa un plano que pasa por el origen en $\\mathbb{R}^3$, el cual es siempre un subespacio vectorial.</li><li>El conjunto $H_2$ no es cerrado bajo la suma. Consideremos los vectores $v_1 = [1, 0, 0]^T$ y $v_2 = [0, -1, 0]^T$, que pertenecen a $H_2$ pues para ambos $xy = 0 \\ge 0$. Sin embargo, su suma es $v_1 + v_2 = [1, -1, 0]^T$, para el cual $xy = 1(-1) = -1 < 0$. Como la suma escapa del conjunto, no es subespacio vectorial.</li><li>El conjunto $H_3$ puede escribirse como una combinación lineal matricial, lo que equivale al espacio generado por dos vectores columna. Por definición, el conjunto generado por cualquier colección de vectores es un subespacio vectorial de $\\mathbb{R}^3$.</li></ul>Por tanto, solo $H_1$ y $H_3$ son subespacios.<br><strong>Respuesta: B</strong>",
        "answers": {
          "Opcion": "B"
        }
      },
      {
        "id": 3,
        "question": "Considere una matriz $A$ de tamaño $4 \\times 6$. Si se sabe que el espacio fila de la matriz $A$ tiene dimensión 3, ¿cuál es la dimensión del espacio nulo de su matriz transpuesta $A^T$?<br><br>A) 1<br>B) 2<br>C) 3<br>D) 4",
        "solution": "La matriz $A$ es de $4 \\times 6$. La dimensión del espacio fila es el rango de la matriz. Por lo tanto, rango$(A) = 3$.<br>La transpuesta $A^T$ tiene dimensiones de $6 \\times 4$. Su número de columnas es $n = 4$.<br>Sabemos que el rango de una matriz es igual al rango de su transpuesta, es decir, rango$(A^T)$ = rango$(A) = 3$.<br>Usando el Teorema del Rango y la Nulidad para la matriz $A^T$:<br>$$ \\dim(\\text{Nul}(A^T)) + \\text{rango}(A^T) = n \\implies \\dim(\\text{Nul}(A^T)) + 3 = 4 \\implies \\dim(\\text{Nul}(A^T)) = 1 $$<br><strong>Respuesta: A</strong>",
        "answers": {
          "Opcion": "A"
        }
      },
      {
        "id": 4,
        "question": "Sea $T: \\mathbb{R}^2 \\to \\mathbb{R}^2$ la transformación lineal que proyecta ortogonalmente cualquier vector sobre la recta $y = 2x$. Si $A$ es la matriz estándar asociada a la transformación $T$, determine el valor de la traza de $A$ (la suma de los elementos de su diagonal principal):<br><br>A) 0<br>B) 1<br>C) 1/5<br>D) 2",
        "solution": "La proyección ortogonal sobre la recta $y = 2x$ puede asociarse a su matriz estándar. Los valores propios de una matriz de proyección sobre una recta en $\\mathbb{R}^2$ siempre son $1$ (para los vectores sobre la recta a la cual se proyecta) y $0$ (para los vectores ortogonales a la proyección).<br>Como la traza de una matriz es invariante y es igual a la suma de sus valores propios, tenemos:<br>$$ \\text{Traza}(A) = \\lambda_1 + \\lambda_2 = 1 + 0 = 1 $$<br><strong>Respuesta: B</strong>",
        "answers": {
          "Opcion": "B"
        }
      },
      {
        "id": 5,
        "question": "En $\\mathbb{R}^2$, considere las bases $\\mathcal{B} = \\{v_1, v_2\\}$ y $\\mathcal{C} = \\{u_1, u_2\\}$. Se sabe que la relación entre los vectores de las bases es $v_1 = 2u_1 - u_2$ y $v_2 = 3u_1 + 2u_2$. Si para un vector $x \\in \\mathbb{R}^2$ se tiene que su vector de coordenadas en la base $\\mathcal{B}$ es $[x]_\\mathcal{B} = \\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix}$, determine su vector de coordenadas en la base $\\mathcal{C}$, denotado por $[x]_\\mathcal{C}$:<br><br>A) $\\begin{bmatrix} 4 \\\\ 5 \\end{bmatrix}$<br>B) $\\begin{bmatrix} 5 \\\\ 4 \\end{bmatrix}$<br>C) $\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$<br>D) $\\begin{bmatrix} -4 \\\\ -5 \\end{bmatrix}$",
        "solution": "El vector coordenado $[x]_\\mathcal{B} = \\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix}$ significa que el vector $x$ se expresa como la combinación lineal:<br>$$ x = -1 v_1 + 2 v_2 $$<br>Sustituyendo los vectores $v_1$ y $v_2$ en función de la base $\\mathcal{C}$:<br>$$ x = -(2u_1 - u_2) + 2(3u_1 + 2u_2) $$<br>Distribuyendo y agrupando términos semejantes:<br>$$ x = -2u_1 + u_2 + 6u_1 + 4u_2 = (-2+6)u_1 + (1+4)u_2 = 4u_1 + 5u_2 $$<br>Por lo tanto, el vector coordenado en la base $\\mathcal{C}$ es $[x]_\\mathcal{C} = \\begin{bmatrix} 4 \\\\ 5 \\end{bmatrix}$.<br><strong>Respuesta: A</strong>",
        "answers": {
          "Opcion": "A"
        }
      },
      {
        "id": 6,
        "question": "Sean $A$ y $B$ matrices de tamaño $3 \\times 3$. Suponga que $\\det(A) = 2$ y $\\det(B) = 5$. Calcule el valor del determinante de la matriz $M = 2 A^{-1} B^T A^2$:<br><br>A) 20<br>B) 40<br>C) 80<br>D) 160",
        "solution": "Se nos pide calcular $\\det(2 A^{-1} B^T A^2)$. Como es una matriz de $3 \\times 3$, un escalar que multiplica a toda la matriz sale del determinante elevado a la potencia de la dimensión $n=3$.<br>Usando las propiedades del determinante:<br>$$ \\det(2 A^{-1} B^T A^2) = 2^3 \\det(A^{-1}) \\det(B^T) \\det(A^2) = 8 \\left(\\frac{1}{\\det(A)}\\right) \\det(B) (\\det(A))^2 $$<br>Sustituyendo los valores conocidos:<br>$$ \\det(M) = 8 \\left(\\frac{1}{2}\\right) (5) (2^2) = 8 \\left(\\frac{1}{2}\\right) (5) (4) = 4 \\cdot 5 \\cdot 4 = 80 $$<br><strong>Respuesta: C</strong>",
        "answers": {
          "Opcion": "C"
        }
      },
      {
        "id": 7,
        "question": "<strong>Pregunta de Procedimiento:</strong><br>Considere el siguiente subconjunto de $\\mathbb{R}^4$:<br>$$ W = \\left\\{ \\begin{bmatrix} x \\\\ y \\\\ z \\\\ w \\end{bmatrix} \\in \\mathbb{R}^4 \\;\\middle|\\; \\begin{array}{l} 2x - y + z - w = 0 \\\\ x + y - 2z + w = 0 \\end{array} \\right\\} $$<br><br>(a) Demuestre que $W$ es el espacio nulo de una matriz $A$ que usted debe determinar explícitamente y concluya que $W$ es un subespacio vectorial.<br>(b) Halle una base $\\mathcal{B}$ para el subespacio $W$ y determine su dimensión.<br>(c) Se sabe que el vector $v = \\begin{bmatrix} 2 \\\\ 7 \\\\ 6 \\\\ 3 \\end{bmatrix}$ pertenece al subespacio $W$. Halle el vector coordenado $[v]_\\mathcal{B}$ con respecto a la base $\\mathcal{B}$ que encontró en el literal (b).",
        "solution": "<strong>(a)</strong> Las ecuaciones se pueden escribir de manera matricial como el sistema homogéneo:<br>$$ \\begin{bmatrix} 2 & -1 & 1 & -1 \\\\ 1 & 1 & -2 & 1 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\\\ z \\\\ w \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} $$<br>El subconjunto $W$ contiene a todos los vectores $x \\in \\mathbb{R}^4$ tales que $Ax = 0$. Por definición, este es el espacio nulo de $A$.<br><br><strong>(b)</strong> Sumando ambas ecuaciones originales obtenemos $3x - z = 0 \\implies z = 3x$.<br>Sustituyendo $z$ en la ecuación 2:<br>$$ x + y - 2(3x) + w = 0 \\implies y = 5x - w $$<br>Podemos parametrizar la solución asignando $x$ y $w$ como variables libres:<br>$$ \\begin{bmatrix} x \\\\ y \\\\ z \\\\ w \\end{bmatrix} = x \\begin{bmatrix} 1 \\\\ 5 \\\\ 3 \\\\ 0 \\end{bmatrix} + w \\begin{bmatrix} 0 \\\\ -1 \\\\ 0 \\\\ 1 \\end{bmatrix} $$<br>La base es $\\mathcal{B} = \\left\\{ [1, 5, 3, 0]^T, [0, -1, 0, 1]^T \\right\\}$ y su dimensión es 2.<br><br><strong>(c)</strong> Resolvemos la combinación lineal para $v$:<br>$$ c_1 \\begin{bmatrix} 1 \\\\ 5 \\\\ 3 \\\\ 0 \\end{bmatrix} + c_2 \\begin{bmatrix} 0 \\\\ -1 \\\\ 0 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 7 \\\\ 6 \\\\ 3 \\end{bmatrix} $$<br>Observando las componentes 1 y 4 obtenemos de inmediato $c_1 = 2$ y $c_2 = 3$. Comprobamos que satisface el resto. Por lo tanto, $[v]_\\mathcal{B} = \\begin{bmatrix} 2 \\\\ 3 \\end{bmatrix}$.",
        "answers": null
      },
      {
        "id": 8,
        "question": "<strong>Pregunta de Procedimiento:</strong><br>Sea $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ una transformación lineal definida por:<br>$$ T \\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix} = \\begin{bmatrix} 4x + z \\\\ -2x + y \\\\ -2x + z \\end{bmatrix} $$<br>Sea $A$ la matriz estándar asociada a $T$.<br><br>(a) Halle la matriz estándar $A$.<br>(b) Encuentre todos los valores propios de $A$.<br>(c) Halle una base para cada uno de los espacios propios asociados.<br>(d) Determine si la matriz $A$ es diagonalizable. De ser así, proporcione una matriz invertible $P$ y una matriz diagonal $D$ tales que $A = P D P^{-1}$.",
        "solution": "<strong>(a)</strong> La matriz estándar $A$ tiene las imágenes de la base canónica por columnas:<br>$$ A = \\begin{bmatrix} 4 & 0 & 1 \\\\ -2 & 1 & 0 \\\\ -2 & 0 & 1 \\end{bmatrix} $$<br><br><strong>(b)</strong> Planteamos la ecuación característica $\\det(A - \\lambda I) = 0$:<br>$$ (1-\\lambda) [ (4-\\lambda)(1-\\lambda) - (-2)(1) ] = 0 \\implies (1-\\lambda) (\\lambda^2 - 5\\lambda + 6) = 0 $$<br>Factorizando: $(1-\\lambda) (\\lambda - 2) (\\lambda - 3) = 0$. Valores propios: $\\lambda_1 = 1$, $\\lambda_2 = 2$, $\\lambda_3 = 3$.<br><br><strong>(c)</strong> Espacios propios:<br>$\\lambda = 1 \\implies$ Base: $\\left\\{ \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix} \\right\\}$<br>$\\lambda = 2 \\implies$ Base: $\\left\\{ \\begin{bmatrix} 1 \\\\ -2 \\\\ -2 \\end{bmatrix} \\right\\}$<br>$\\lambda = 3 \\implies$ Base: $\\left\\{ \\begin{bmatrix} 1 \\\\ -1 \\\\ -1 \\end{bmatrix} \\right\\}$<br><br><strong>(d)</strong> Como tiene 3 valores propios distintos en $\\mathbb{R}^3$, es diagonalizable.<br>$$ P = \\begin{bmatrix} 0 & 1 & 1 \\\\ 1 & -2 & -1 \\\\ 0 & -2 & -1 \\end{bmatrix}, \\quad D = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{bmatrix} $$",
        "answers": null
      }
    ]
  },
  {
    "mission_id": "parcial2024_1",
    "title": "Parcial 2 2024-I",
    "exercises": [
        {
            "id": 1,
            "question": "Sea $\\alpha \\in \\mathbb{R}$ un número real. Se sabe que la matriz $A$ de tamaño $3 \\times 3$ es invertible con inversa dada por $$ A^{-1} = \\begin{bmatrix} 1 & 2\\alpha & \\alpha \\\\ 0 & 1 & 3\\alpha \\\\ 0 & 0 & 1 \\end{bmatrix} $$ Determine cuál es la matriz $A$.",
            "solution": "Buscamos la matriz $A = (A^{-1})^{-1}$. Podemos encontrar la inversa de $A^{-1}$ usando el método de Gauss-Jordan, aumentando la matriz con la identidad $[A^{-1} \\mid I]$: $$ \\left[\\begin{array}{ccc|ccc} 1 & 2\\alpha & \\alpha & 1 & 0 & 0 \\\\ 0 & 1 & 3\\alpha & 0 & 1 & 0 \\\\ 0 & 0 & 1 & 0 & 0 & 1 \\end{array}\\right] $$ Operación $R_2 \\to R_2 - 3\\alpha R_3$: $$ \\left[\\begin{array}{ccc|ccc} 1 & 2\\alpha & \\alpha & 1 & 0 & 0 \\\\ 0 & 1 & 0 & 0 & 1 & -3\\alpha \\\\ 0 & 0 & 1 & 0 & 0 & 1 \\end{array}\\right] $$ Operación $R_1 \\to R_1 - \\alpha R_3$: $$ \\left[\\begin{array}{ccc|ccc} 1 & 2\\alpha & 0 & 1 & 0 & -\\alpha \\\\ 0 & 1 & 0 & 0 & 1 & -3\\alpha \\\\ 0 & 0 & 1 & 0 & 0 & 1 \\end{array}\\right] $$ Operación $R_1 \\to R_1 - 2\\alpha R_2$: $$ \\left[\\begin{array}{ccc|ccc} 1 & 0 & 0 & 1 & -2\\alpha & -\\alpha - 2\\alpha(-3\\alpha) \\\\ 0 & 1 & 0 & 0 & 1 & -3\\alpha \\\\ 0 & 0 & 1 & 0 & 0 & 1 \\end{array}\\right] $$ Simplificando el elemento de la primera fila y tercera columna obtenemos $-\\alpha + 6\\alpha^2 = 6\\alpha^2 - \\alpha$.  Por lo tanto,  $$ A = \\begin{bmatrix} 1 & -2\\alpha & 6\\alpha^2 - \\alpha \\\\ 0 & 1 & -3\\alpha \\\\ 0 & 0 & 1 \\end{bmatrix} $$ \\textbf{Respuesta:} La opción correcta es $A = \\begin{bmatrix} 1 & -2\\alpha & 6\\alpha^2-\\alpha \\\\ 0 & 1 & -3\\alpha \\\\ 0 & 0 & 1 \\end{bmatrix}$.",
            "answers": null
        },
        {
            "id": 2,
            "question": "Considere los siguientes subconjuntos de $\\mathbb{R}^2$: $$H = \\left\\{ \\begin{bmatrix} x \\\\ y \\end{bmatrix} \\in \\mathbb{R}^2 \\mid x = a+b+c, \\; y = 2a-b+c-3 \\text{ para algunos } a,b,c \\in \\mathbb{R} \\right\\}$$ $$K = \\left\\{ \\begin{bmatrix} x \\\\ y \\end{bmatrix} \\in \\mathbb{R}^2 \\mid 3x - 2y = 0 \\right\\}$$ Determine cuál afirmación es correcta respecto a si son subespacios vectoriales.<br><br><em>(Selecciona la opción correcta A, B, C o D según el PDF original)</em>",
            "solution": "Para $K$, la ecuación $3x - 2y = 0$ representa una recta que pasa por el origen en $\\mathbb{R}^2$. Esto claramente es un subespacio vectorial de $\\mathbb{R}^2$.<br><br>Para $H$, observemos que las ecuaciones se pueden escribir de manera matricial como: $$ \\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 1 & 1 & 1 \\\\ 2 & -1 & 1 \\end{bmatrix} \\begin{bmatrix} a \\\\ b \\\\ c \\end{bmatrix} + \\begin{bmatrix} 0 \\\\ -3 \\end{bmatrix} $$ Sea $M = \\begin{bmatrix} 1 & 1 & 1 \\\\ 2 & -1 & 1 \\end{bmatrix}$. La imagen de $M$ (el espacio columna) es un subespacio de $\\mathbb{R}^2$. Como las dos primeras columnas de $M$ son linealmente independientes, el rango de $M$ es 2, y por lo tanto el espacio columna de $M$ es todo $\\mathbb{R}^2$. Al sumarle el vector $\\begin{bmatrix} 0 \\\\ -3 \\end{bmatrix}$ a todo $\\mathbb{R}^2$, el conjunto resultante sigue siendo todo $\\mathbb{R}^2$. Así, $H = \\mathbb{R}^2$.  Dado que $\\mathbb{R}^2$ es un subespacio vectorial de sí mismo, $H$ también es un subespacio.<br><br>\\textbf{Respuesta:} (d) Ambos $H$ y $K$ son subespacios vectoriales de $\\mathbb{R}^2$.",
            "answers": {
                "Opcion": "D"
            }
        },
        {
            "id": 3,
            "question": "Considere la matriz  $$C = \\begin{bmatrix} 1 & 0 & 2 & 5 & -3 \\\\ 1 & 0 & 2 & 5 & -4 \\\\ 2 & 0 & 4 & 10 & -6 \\end{bmatrix}$$ y sea $V$ su espacio nulo. ¿Cuál es la dimensión de $V$?<br><br><em>(Selecciona la opción correcta A, B, C o D según el PDF original)</em>",
            "solution": "Reducimos la matriz $C$ mediante operaciones elementales de fila para encontrar su rango: $$ \\begin{bmatrix} 1 & 0 & 2 & 5 & -3 \\\\ 1 & 0 & 2 & 5 & -4 \\\\ 2 & 0 & 4 & 10 & -6 \\end{bmatrix} \\xrightarrow{\\begin{subarray}{l} R_2 \\to R_2 - R_1 \\\\ R_3 \\to R_3 - 2R_1 \\end{subarray}} \\begin{bmatrix} 1 & 0 & 2 & 5 & -3 \\\\ 0 & 0 & 0 & 0 & -1 \\\\ 0 & 0 & 0 & 0 & 0 \\end{bmatrix} $$ Vemos que la matriz escalonada tiene exactamente 2 filas no nulas (2 pivotes), por lo que el rango de $C$ es 2. El número de columnas de $C$ es $n = 5$. Por el Teorema del Rango y la Nulidad: $$\\dim(V) = \\dim(\\text{Nul}(C)) = n - \\text{rango}(C) = 5 - 2 = 3$$<br><br>\\textbf{Respuesta:} (c) 3",
            "answers": {
                "Opcion": "C"
            }
        },
        {
            "id": 4,
            "question": "Sea $B = \\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$ y sea $T_B: \\mathbb{R}^2 \\to \\mathbb{R}^2$ la transformación lineal asociada a $B$. Determine cuál es la matriz estándar de la función compuesta $T_B \\circ T_B$.<br><br><em>(Selecciona la opción correcta A, B, C o D según el PDF original)</em>",
            "solution": "La matriz estándar de la composición de dos transformaciones lineales es el producto de sus matrices estándar. Así, la matriz estándar de $T_B \\circ T_B$ es $B^2$: $$ B^2 = \\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix} \\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} (1)(1)+(1)(0) & (1)(1)+(1)(1) \\\\ (0)(1)+(1)(0) & (0)(1)+(1)(1) \\end{bmatrix} = \\begin{bmatrix} 1 & 2 \\\\ 0 & 1 \\end{bmatrix} $$<br><br>\\textbf{Respuesta:} (c) $\\begin{bmatrix} 1 & 2 \\\\ 0 & 1 \\end{bmatrix}$",
            "answers": {
                "Opcion": "C"
            }
        },
        {
            "id": 5,
            "question": "Decimos que una matriz $A$ de tamaño $2 \\times 2$ es antisimétrica si $A^T = -A$. Se sabe que $N = \\{A \\in M_{2\\times 2} \\mid A \\text{ es antisimétrica}\\}$ es un subespacio vectorial de $M_{2\\times 2}$. ¿Cuál es la dimensión de $N$?<br><br><em>(Selecciona la opción correcta A, B, C o D según el PDF original)</em>",
            "solution": "Sea $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$. Su transpuesta es $A^T = \\begin{bmatrix} a & c \\\\ b & d \\end{bmatrix}$.  Para que $A$ sea antisimétrica, se debe cumplir: $$ \\begin{bmatrix} a & c \\\\ b & d \\end{bmatrix} = \\begin{bmatrix} -a & -b \\\\ -c & -d \\end{bmatrix} $$ Esto nos da el siguiente sistema de ecuaciones: 1) $a = -a \\implies 2a = 0 \\implies a = 0$ 2) $d = -d \\implies 2d = 0 \\implies d = 0$ 3) $c = -b$<br><br>Entonces, cualquier matriz antisimétrica $2 \\times 2$ tiene la forma: $$ A = \\begin{bmatrix} 0 & b \\\\ -b & 0 \\end{bmatrix} = b \\begin{bmatrix} 0 & 1 \\\\ -1 & 0 \\end{bmatrix} $$ El subespacio es generado por una única matriz no nula, por tanto, una base para $N$ es $\\left\\{ \\begin{bmatrix} 0 & 1 \\\\ -1 & 0 \\end{bmatrix} \\right\\}$. La dimensión es la cantidad de elementos en la base.<br><br>\\textbf{Respuesta:} (b) 1",
            "answers": {
                "Opcion": "B"
            }
        },
        {
            "id": 6,
            "question": "Sea $\\mathcal{P}_3$ el espacio vectorial de polinomios con grado menor o igual a 3. Determine cuál de las opciones es una base de $\\mathcal{P}_3$.<br><br><em>(Selecciona la opción correcta A, B, C o D según el PDF original)</em>",
            "solution": "Sabemos que la dimensión de $\\mathcal{P}_3$ es 4. Una base debe contener exactamente 4 polinomios linealmente independientes. Analizamos las opciones: - (a) $\\{x^3, x^2, 2x, 3x\\}$: Los polinomios $2x$ y $3x$ son múltiplos entre sí (linealmente dependientes). No es base. - (c) $\\{x^3, x^2+x, 1\\}$: Sólo tiene 3 elementos, por lo que no genera un espacio de dimensión 4. No es base. - (d) $\\{x^3-x, x^2-x, x, x^3+x\\}$: Notemos que $(x^3-x) + 2x = x^3+x$, por lo que el conjunto es linealmente dependiente. No es base. - (b) $\\{(x-1)^3, (x-1)^2, x-1, 1\\}$: Son 4 polinomios de grados escalonados (3, 2, 1, 0), por lo que son linealmente independientes y generan $\\mathcal{P}_3$ (es equivalente a la base canónica evaluada en $x-1$). Es una base.<br><br>\\textbf{Respuesta:} (b) $\\{(x-1)^3, (x-1)^2, x-1, 1\\}$",
            "answers": {
                "Opcion": "B"
            }
        },
        {
            "id": 7,
            "question": "Considere las funciones $S: M_{2\\times 2} \\to M_{2\\times 2}$ y $D: M_{2\\times 2} \\to M_{2\\times 2}$ dadas por $S(A) = A - A^T$ y $D(A) = A^T$. Determine qué afirmación es correcta.",
            "solution": "La transposición de matrices es una operación lineal, es decir, $(A+cB)^T = A^T + cB^T$. - $D(A+cB) = (A+cB)^T = A^T + cB^T = D(A) + cD(B)$. Luego $D$ es lineal. - $S(A+cB) = (A+cB) - (A+cB)^T = A+cB - (A^T + cB^T) = (A-A^T) + c(B-B^T) = S(A) + cS(B)$. Luego $S$ es lineal. La composición de dos transformaciones lineales siempre es una transformación lineal. Por lo tanto, $D \\circ S$ también es lineal.<br><br>\\textbf{Respuesta:} (d) Todas $S$, $D$ y $D \\circ S$ son transformaciones lineales.<br><br>\\section*{II. Solución con Procedimiento}",
            "answers": null
        },
        {
            "id": 8,
            "question": "Considere la transformación lineal $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ dada por $$ T\\begin{bmatrix} x \\\\ y \\\\ z \\end{bmatrix} = \\begin{bmatrix} x - y \\\\ y - z \\\\ z - x \\end{bmatrix} $$<br><br>\\textbf{(a) Sea $S = T^2$. Halle su matriz estándar $A$.}",
            "solution": "Primero, encontramos la matriz estándar de $T$, digamos $M$. Evaluamos en la base canónica: $$ T(\\vec{e}_1) = \\begin{bmatrix} 1 \\\\ 0 \\\\ -1 \\end{bmatrix}, \\quad T(\\vec{e}_2) = \\begin{bmatrix} -1 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\quad T(\\vec{e}_3) = \\begin{bmatrix} 0 \\\\ -1 \\\\ 1 \\end{bmatrix} $$ Por lo que la matriz estándar $M$ es: $$ M = \\begin{bmatrix} 1 & -1 & 0 \\\\ 0 & 1 & -1 \\\\ -1 & 0 & 1 \\end{bmatrix} $$ La matriz $A$ de $S=T^2$ será el cuadrado de $M$: $$ A = M^2 = \\begin{bmatrix} 1 & -1 & 0 \\\\ 0 & 1 & -1 \\\\ -1 & 0 & 1 \\end{bmatrix} \\begin{bmatrix} 1 & -1 & 0 \\\\ 0 & 1 & -1 \\\\ -1 & 0 & 1 \\end{bmatrix} $$ Calculando el producto matricial fila por columna: \\begin{itemize}     \\item $A_{11} = (1)(1) + (-1)(0) + (0)(-1) = 1$     \\item $A_{12} = (1)(-1) + (-1)(1) + (0)(0) = -2$     \\item $A_{13} = (1)(0) + (-1)(-1) + (0)(1) = 1$     \\item $A_{21} = (0)(1) + (1)(0) + (-1)(-1) = 1$     \\item $A_{22} = (0)(-1) + (1)(1) + (-1)(0) = 1$     \\item $A_{23} = (0)(0) + (1)(-1) + (-1)(1) = -2$     \\item $A_{31} = (-1)(1) + (0)(0) + (1)(-1) = -2$     \\item $A_{32} = (-1)(-1) + (0)(1) + (1)(0) = 1$     \\item $A_{33} = (-1)(0) + (0)(-1) + (1)(1) = 1$ \\end{itemize} Por lo tanto, la matriz estándar es $A = \\begin{bmatrix} 1 & -2 & 1 \\\\ 1 & 1 & -2 \\\\ -2 & 1 & 1 \\end{bmatrix}$.<br><br>\\textbf{(b) Muestre que $\\mathcal{B} = \\left\\{\\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}\\right\\}$ es una base de $\\text{Nul}(A)$ y que $\\mathcal{C} = \\left\\{\\begin{bmatrix} 1 \\\\ 1 \\\\ -2 \\end{bmatrix}, \\begin{bmatrix} -2 \\\\ 1 \\\\ 1 \\end{bmatrix}\\right\\}$ es una base de $\\text{Col}(A)$.}<br><br>\\textbf{Solución:} Para hallar el espacio nulo, resolvemos $A\\vec{x} = \\vec{0}$: $$ \\begin{bmatrix} 1 & -2 & 1 \\\\ 1 & 1 & -2 \\\\ -2 & 1 & 1 \\end{bmatrix} \\xrightarrow{\\begin{subarray}{l} R_2 \\to R_2 - R_1 \\\\ R_3 \\to R_3 + 2R_1 \\end{subarray}} \\begin{bmatrix} 1 & -2 & 1 \\\\ 0 & 3 & -3 \\\\ 0 & -3 & 3 \\end{bmatrix} \\xrightarrow{R_3 \\to R_3 + R_2} \\begin{bmatrix} 1 & -2 & 1 \\\\ 0 & 3 & -3 \\\\ 0 & 0 & 0 \\end{bmatrix} $$ Dividiendo $R_2$ por 3: $$ \\begin{bmatrix} 1 & -2 & 1 \\\\ 0 & 1 & -1 \\\\ 0 & 0 & 0 \\end{bmatrix} \\xrightarrow{R_1 \\to R_1 + 2R_2} \\begin{bmatrix} 1 & 0 & -1 \\\\ 0 & 1 & -1 \\\\ 0 & 0 & 0 \\end{bmatrix} $$ El sistema equivalente es $x - z = 0$ y $y - z = 0$, lo que implica $x=z$ y $y=z$. La variable $z$ es libre. Los vectores de $\\text{Nul}(A)$ tienen la forma $\\begin{bmatrix} z \\\\ z \\\\ z \\end{bmatrix} = z \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}$. Como el vector genera el espacio nulo y es linealmente independiente (no es el vector nulo), $\\mathcal{B} = \\left\\{\\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}\\right\\}$ es base de $\\text{Nul}(A)$.<br><br>El espacio columna $\\text{Col}(A)$ es generado por las columnas de $A$. Las columnas pivote están en la primera y segunda columna de la matriz reducida, por lo que una base natural está formada por la primera y segunda columna de $A$ original: $$ \\mathcal{C} = \\left\\{\\begin{bmatrix} 1 \\\\ 1 \\\\ -2 \\end{bmatrix}, \\begin{bmatrix} -2 \\\\ 1 \\\\ 1 \\end{bmatrix}\\right\\} $$ Como estas columnas no son múltiplos escalares entre sí, son linealmente independientes y generan $\\text{Col}(A)$. Por lo tanto, forman una base de $\\text{Col}(A)$, lo cual concuerda con el conjunto dado en el problema.<br><br>\\textbf{(c) Calcule la dimensión de $\\text{Nul}(A^T)$, el espacio nulo de la transpuesta de $A$.}<br><br>\\textbf{Solución:} El rango de una matriz es igual al rango de su transpuesta. Como $A$ tiene 2 columnas pivote, su rango es 2. Por lo tanto, $\\text{rango}(A^T) = 2$. El tamaño de $A^T$ es $3 \\times 3$, lo que significa que tiene 3 columnas. Por el Teorema del Rango y la Nulidad aplicado a $A^T$: $$ \\dim(\\text{Nul}(A^T)) + \\text{rango}(A^T) = 3 $$ $$ \\dim(\\text{Nul}(A^T)) = 3 - 2 = 1 $$<br><br>\\textbf{(d) Se sabe que $\\vec{v} = \\begin{bmatrix} 4 \\\\ 6 \\\\ -10 \\end{bmatrix}$ está en $\\text{Col}(A)$. Calcule $[\\vec{v}]_{\\mathcal{C}}$.}<br><br>\\textbf{Solución:} Buscamos las coordenadas $[c_1, c_2]^T$ tales que: $$ c_1 \\begin{bmatrix} 1 \\\\ 1 \\\\ -2 \\end{bmatrix} + c_2 \\begin{bmatrix} -2 \\\\ 1 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ 6 \\\\ -10 \\end{bmatrix} $$ Esto produce el sistema de ecuaciones: \\begin{align*} c_1 - 2c_2 &= 4 \\quad (1) \\\\ c_1 + c_2 &= 6 \\quad (2) \\\\ -2c_1 + c_2 &= -10 \\quad (3) \\end{align*} Restando la ecuación (1) de la ecuación (2): $$ (c_1 + c_2) - (c_1 - 2c_2) = 6 - 4 \\implies 3c_2 = 2 \\implies c_2 = \\frac{2}{3} $$ Sustituyendo en la ecuación (2): $$ c_1 + \\frac{2}{3} = 6 \\implies c_1 = 6 - \\frac{2}{3} = \\frac{18}{3} - \\frac{2}{3} = \\frac{16}{3} $$ Verificamos en la ecuación (3): $$ -2\\left(\\frac{16}{3}\\right) + \\frac{2}{3} = -\\frac{32}{3} + \\frac{2}{3} = -\\frac{30}{3} = -10 $$ Los valores satisfacen todo el sistema. Por lo tanto, el vector de coordenadas es: $$ [\\vec{v}]_{\\mathcal{C}} = \\begin{bmatrix} 16/3 \\\\ 2/3 \\end{bmatrix} $$<br><br>\\end{document}",
            "answers": null
        }
    ]
},
  {
    "mission_id": "parcial2024_2",
    "title": "Parcial 2 2024-II",
    "exercises": [
        {
            "id": 1,
            "question": "Considere las matrices  $$ A = \\begin{bmatrix} 1 & -9 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix}, \\quad B = \\begin{bmatrix} 1 & 9 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}, \\quad C = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix}, \\quad D = \\begin{bmatrix} 1 & 9 & 0 \\\\ 0 & 0 & -1 \\\\ 0 & 1 & 0 \\end{bmatrix} $$ Determine cuál afirmación es correcta sobre la inversa de $A$.",
            "solution": "El determinante de $A$ desarrollando por la primera columna es $1(0\\cdot0 - 1\\cdot1) = -1 \\neq 0$, por lo que $A$ es invertible. Procedemos a verificar la opción (ii) calculando el producto $BC$: $$ BC = \\begin{bmatrix} 1 & 9 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 & 9 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix} $$ Ahora multiplicamos $A(BC)$ para comprobar si da la matriz identidad: $$ A(BC) = \\begin{bmatrix} 1 & -9 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix} \\begin{bmatrix} 1 & 0 & 9 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 & 9 - 9 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} = I $$ Por lo tanto, la inversa de $A$ es efectivamente $BC$.<br><br>\\textbf{Respuesta:} (ii) La matriz $A$ es invertible y su inversa es $BC$.",
            "answers": null
        },
        {
            "id": 2,
            "question": "Sea $\\vec{b} = [2, 3, 4, 5]^T$ y sea $A$ una matriz invertible de $4 \\times 4$ tal que $A^{-1}\\vec{b} = [1, 1, 0, 2]^T$. Determine cuál afirmación es correcta.",
            "solution": "Si $A$ es una matriz invertible, sabemos que el sistema $A\\vec{x} = \\vec{b}$ tiene una y sólo una solución dada por $\\vec{x} = A^{-1}\\vec{b}$. Nos dan que $A^{-1}\\vec{b} = [1, 1, 0, 2]^T$. Por lo tanto, el sistema aumentado $[A \\mid \\vec{b}]$ es consistente y su única solución es precisamente el vector $\\vec{x} = [1, 1, 0, 2]^T$.<br><br>\\textbf{Respuesta:} (iii) El sistema aumentado $[A \\mid \\vec{b}]$ tiene a $\\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\\\ 2 \\end{bmatrix}$ como su única solución.",
            "answers": null
        },
        {
            "id": 3,
            "question": "Considere los conjuntos de $\\mathbb{R}^2$: $H_1 = \\{[x, y]^T \\mid xy \\ge 0\\}$, $H_2 = \\{[x, y]^T \\mid x^2+y^2 \\le 2025\\}$ y $H_3 = \\{[x, y]^T \\mid y \\ge 0\\}$. Determine la afirmación correcta.",
            "solution": "- $H_1$ son los cuadrantes I y III. No es cerrado bajo la suma: $\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} + \\begin{bmatrix} 0 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix} \\notin H_1$. No es subespacio. - $H_2$ es un disco centrado en el origen de radio 45. No es cerrado bajo la multiplicación escalar. Si multiplicamos un vector de $H_2$ por un escalar arbitrariamente grande, el resultado escapará de la región. No es subespacio. - $H_3$ es el semiplano superior. No es cerrado bajo multiplicación por escalares negativos: $\\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix} \\in H_3$ pero $-1\\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ -1 \\end{bmatrix} \\notin H_3$. No es subespacio. La afirmación (ii) nos dice \"$H_2$ no es un subespacio vectorial de $\\mathbb{R}^2$\", lo cual hemos comprobado que es verdadero.<br><br>\\textbf{Respuesta:} (ii) $H_2$ no es un subespacio vectorial de $\\mathbb{R}^2$.",
            "answers": null
        },
        {
            "id": 4,
            "question": "Considere una matriz $A$ de tamaño $3 \\times 4$ y $\\vec{b} \\in \\mathbb{R}^3$. Se sabe que el espacio fila de $A$ tiene dimensión igual a 3. Determine la correcta.",
            "solution": "Si la dimensión del espacio fila es 3, entonces el rango de $A$ es 3. Dado que $A$ es una matriz de $3 \\times 4$, el rango de $A$ es máximo posible para sus filas.  Por el teorema de Rango y Nulidad, la nulidad de $A$ es $\\dim(\\text{Nul}(A)) = 4 - 3 = 1 \\neq 0$. Como el espacio columna es un subespacio de $\\mathbb{R}^3$ con dimensión igual a su rango (3), concluimos que $\\text{Col}(A) = \\mathbb{R}^3$. Esto garantiza que cualquier vector $\\vec{b} \\in \\mathbb{R}^3$ pertenece a $\\text{Col}(A)$, y el sistema $A\\vec{x} = \\vec{b}$ siempre será consistente. Al tener 1 variable libre (nulidad 1), el sistema consistente tendrá infinitas soluciones.<br><br>\\textbf{Respuesta:} (iii) El sistema aumentado $[A \\mid \\vec{b}]$ tiene infinitas soluciones.",
            "answers": null
        },
        {
            "id": 5,
            "question": "Sea $\\vec{v} = [1, 1, 1, 1]^T$. Consideremos $T: \\mathbb{R}^4 \\to \\mathbb{R}^4$ definida por $T(\\vec{u}) = \\text{Proy}_{\\vec{v}}(\\vec{u})$ y sea $A$ su matriz estándar.",
            "solution": "La transformación $T$ proyecta cualquier vector de $\\mathbb{R}^4$ sobre el subespacio unidimensional generado por el vector $\\vec{v}$. La imagen de $T$ es precisamente este espacio generado por $\\vec{v}$, que tiene dimensión 1. Por lo tanto, el rango de $A$ es 1. Usando el teorema del Rango y la Nulidad para la matriz $A$ de tamaño $4 \\times 4$: $$ \\dim(\\text{Nul}(A)) = 4 - \\text{rango}(A) = 4 - 1 = 3 $$ Por ende, la nulidad de $A$ es igual a 3. (En el examen aparece repetida la opción iii, tomamos la última que indica nulidad 3).<br><br>\\textbf{Respuesta:} (iii) La nulidad de $A$ es igual a 3.",
            "answers": null
        },
        {
            "id": 6,
            "question": "La matriz de cambio de base de una base $\\mathcal{B}$ a la base canónica $\\mathcal{E}$ es $P_{\\mathcal{E} \\leftarrow \\mathcal{B}} = \\begin{bmatrix} 1 & 1 & 1 \\\\ 8 & -7 & -1 \\\\ 5 & 5 & -10 \\end{bmatrix}^{-1}$. Sea $\\vec{v} = [1, 1, 1]^T$. Determine $[\\vec{v}]_{\\mathcal{B}}$.",
            "solution": "Sabemos que la relación de cambio de base está dada por: $$ [\\vec{v}]_{\\mathcal{E}} = P_{\\mathcal{E} \\leftarrow \\mathcal{B}} [\\vec{v}]_{\\mathcal{B}} $$ Multiplicando por la inversa a ambos lados, obtenemos: $$ [\\vec{v}]_{\\mathcal{B}} = (P_{\\mathcal{E} \\leftarrow \\mathcal{B}})^{-1} [\\vec{v}]_{\\mathcal{E}} $$ Sustituyendo el valor dado en el problema, $(P_{\\mathcal{E} \\leftarrow \\mathcal{B}})^{-1}$ es simplemente la matriz dentro del paréntesis: $$ [\\vec{v}]_{\\mathcal{B}} = \\begin{bmatrix} 1 & 1 & 1 \\\\ 8 & -7 & -1 \\\\ 5 & 5 & -10 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix} $$ Calculamos el producto: $$ [\\vec{v}]_{\\mathcal{B}} = \\begin{bmatrix} (1)(1) + (1)(1) + (1)(1) \\\\ (8)(1) + (-7)(1) + (-1)(1) \\\\ (5)(1) + (5)(1) + (-10)(1) \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ 0 \\\\ 0 \\end{bmatrix} $$<br><br>\\textbf{Respuesta:} (ii) $[\\vec{v}]_{\\mathcal{B}} = \\begin{bmatrix} 3 \\\\ 0 \\\\ 0 \\end{bmatrix}$.",
            "answers": null
        },
        {
            "id": 7,
            "question": "Sea $R: \\mathbb{R}^2 \\to \\mathbb{R}^2$ la transformación lineal que rota el plano $90^\\circ$ en dirección contraria a las manecillas del reloj.",
            "solution": "Una rotación de $90^\\circ$ altera la dirección de cualquier vector no nulo. Un vector propio requiere que $R(\\vec{v}) = \\lambda \\vec{v}$, lo que geométricamente significa que el vector rotado debe estar en la misma recta (misma dirección o contraria).  Como todos los vectores no nulos se rotan en $90^\\circ$, no pueden ser múltiplos escalares de sí mismos. Por consiguiente, $R$ no tiene ningún vector propio real (no existe $\\vec{v} \\neq \\vec{0}$ en $\\mathbb{R}^2$ que cumpla). Nota: La opción (d) asume la definición habitual que el vector nulo no se cuenta como vector propio (o que ningún vector propio existe). <br><br>\\textbf{Respuesta:} (d) No existe $\\vec{v} \\in \\mathbb{R}^2$ ($\\vec{v} \\neq \\vec{0}$) que sea vector propio de $R$.<br><br>\\section*{II. Solución con Procedimiento}",
            "answers": null
        },
        {
            "id": 8,
            "question": "Sea $\\mathcal{B} = \\left\\{ \\vec{u}_1 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\vec{u}_2 = \\begin{bmatrix} -9 \\\\ 0 \\\\ 1 \\end{bmatrix}, \\vec{v} = \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix} \\right\\}$ una base de $\\mathbb{R}^3$. Se sabe que $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ es una transformación lineal tal que $T(\\vec{u}_1) = T(\\vec{u}_2) = \\vec{0}$ y $T(\\vec{v}) = \\vec{v}$. Sea $A$ la matriz estándar asociada a $T$.<br><br>\\textbf{(i) Muestre que $\\vec{v}$ es un vector propio de $A$ asociado al valor propio $\\lambda = 1$.}",
            "solution": "Por definición de matriz estándar, la acción de $A$ multiplicando a un vector es la misma que la transformación evaluando a dicho vector: $A\\vec{x} = T(\\vec{x})$. Tenemos la hipótesis de que $T(\\vec{v}) = \\vec{v}$.  Entonces, $A\\vec{v} = \\vec{v} = 1\\vec{v}$. Como el vector $\\vec{v} = [0, 1, 0]^T$ es diferente del vector nulo, y satisface la ecuación $A\\vec{v} = \\lambda \\vec{v}$ con $\\lambda = 1$, queda demostrado que $\\vec{v}$ es un vector propio de $A$ asociado al valor propio $\\lambda = 1$.<br><br>\\textbf{(ii) Muestre que $\\vec{u}_1, \\vec{u}_2$ son vectores propios de $A$ asociados al valor propio $\\lambda = 0$.}<br><br>\\textbf{Solución:} Por hipótesis, $T(\\vec{u}_1) = \\vec{0}$. Esto implica que $A\\vec{u}_1 = \\vec{0} = 0 \\vec{u}_1$. Como $\\vec{u}_1$ es un vector no nulo, es un vector propio de $A$ con valor propio $\\lambda = 0$. Similarmente, $T(\\vec{u}_2) = \\vec{0}$. Esto implica que $A\\vec{u}_2 = \\vec{0} = 0 \\vec{u}_2$. Como $\\vec{u}_2$ es un vector no nulo, también es un vector propio de $A$ con valor propio $\\lambda = 0$.<br><br>\\textbf{(iii) ¿Es $A$ diagonalizable? Si su respuesta es afirmativa, encuentre $P \\in M_{3\\times3}$ invertible y $D \\in M_{3\\times3}$ diagonal tales que $AP = PD$.}<br><br>\\textbf{Solución:} Una matriz $A$ de $3 \\times 3$ es diagonalizable si y sólo si existe una base de $\\mathbb{R}^3$ compuesta exclusivamente por vectores propios de $A$. Del enunciado sabemos que el conjunto $\\mathcal{B} = \\{ \\vec{u}_1, \\vec{u}_2, \\vec{v} \\}$ es una base de $\\mathbb{R}^3$. Por los apartados anteriores demostramos que los tres vectores en la base son vectores propios de $A$. Por lo tanto, $A$ sí es diagonalizable. Las matrices de la diagonalización están dadas por los vectores propios en las columnas de $P$ y sus respectivos valores propios en la diagonal de $D$. Tomamos: $$ P = \\begin{bmatrix} \\vec{u}_1 & \\vec{u}_2 & \\vec{v} \\end{bmatrix} = \\begin{bmatrix} 1 & -9 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix} $$ $$ D = \\begin{bmatrix} \\lambda_{u1} & 0 & 0 \\\\ 0 & \\lambda_{u2} & 0 \\\\ 0 & 0 & \\lambda_v \\end{bmatrix} = \\begin{bmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} $$ Con estas matrices construidas mediante la teoría de valores y vectores propios, se cumple que $A = PDP^{-1}$ y equivalentemente, $AP = PD$.<br><br>\\textbf{(iv) Muestre que $A^2 = A$.}<br><br>\\textbf{Solución:} Haremos uso de la diagonalización obtenida en la parte (iii). Tenemos $A = P D P^{-1}$. Elevando al cuadrado: $$ A^2 = (P D P^{-1})(P D P^{-1}) = P D (P^{-1} P) D P^{-1} = P D I D P^{-1} = P D^2 P^{-1} $$ Observemos la matriz $D^2$: $$ D^2 = \\begin{bmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} \\begin{bmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 0^2 & 0 & 0 \\\\ 0 & 0^2 & 0 \\\\ 0 & 0 & 1^2 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} = D $$ Sustituyendo $D^2 = D$ en la expresión: $$ A^2 = P D P^{-1} $$ Lo cual es exactamente igual a $A$. Por ende, hemos demostrado que $A^2 = A$.<br><br>\\end{document}",
            "answers": null
        }
    ]
},
  {
    "mission_id": "parcial2025_2s",
    "title": "P2 lineal 2025-2s",
    "exercises": [
        {
            "id": 1,
            "question": "Sea $A$ una matriz $3 \\times 3$. Se sabe que la inversa de $A$ está dada por $\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & -3 \\\\ 0 & 0 & 1 \\end{bmatrix}$. Determine cuál de las afirmaciones es correcta.<br><br><em>(Selecciona la opción correcta A, B, C o D según el PDF original)</em>",
            "solution": "Sabemos que $A^{-1} = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & -3 \\\\ 0 & 0 & 1 \\end{bmatrix}$. Nos preguntan por propiedades de la matriz $A^2$ y su inversa. La inversa de $A^2$ se calcula como $(A^2)^{-1} = (A^{-1})^2$. Calculamos $(A^{-1})^2$: $$ (A^{-1})^2 = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & -3 \\\\ 0 & 0 & 1 \\end{bmatrix} \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & -3 \\\\ 0 & 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & -6 \\\\ 0 & 0 & 1 \\end{bmatrix} $$ Buscamos en las opciones y encontramos que esta matriz coincide con la opción (B).<br><br>\\textbf{Respuesta:} (B) La inversa de la matriz $A^2$ está dada por $\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & -6 \\\\ 0 & 0 & 1 \\end{bmatrix}$.",
            "answers": {
                "Opcion": "B"
            }
        },
        {
            "id": 2,
            "question": "Sean $m$ y $n$ números naturales distintos. Sea $A$ una matriz de tamaño $m \\times n$. Determine cuál afirmación es correcta.<br><br><em>(Selecciona la opción correcta A, B, C o D según el PDF original)</em>",
            "solution": "Analizamos las dimensiones fundamentales de la matriz $A$ ($m$ filas y $n$ columnas): - El espacio nulo $\\text{Nul}(A)$ consiste en los vectores $\\vec{x} \\in \\mathbb{R}^n$ tales que $A\\vec{x} = \\vec{0}$, así que es un subespacio de $\\mathbb{R}^n$. - El espacio columna $\\text{Col}(A)$ es generado por las columnas de $A$, que son vectores de $m$ componentes, por lo que es un subespacio de $\\mathbb{R}^m$. - El espacio fila está generado por las filas de $A$, que son vectores transpuestos de $n$ componentes, por lo que es un subespacio de $\\mathbb{R}^n$. La opción (D) afirma que el espacio fila de $A$ es un subespacio de $\\mathbb{R}^n$, lo cual es correcto.<br><br>\\textbf{Respuesta:} (D) El espacio fila de $A$ es un subespacio de $\\mathbb{R}^n$.",
            "answers": {
                "Opcion": "D"
            }
        },
        {
            "id": 3,
            "question": "Se sabe que $S = \\left\\{ \\begin{bmatrix} x \\\\ y \\\\ z \\\\ w \\end{bmatrix} \\in \\mathbb{R}^4 \\mid x - y + z - w = 0 \\right\\}$ es un subespacio de $\\mathbb{R}^4$. Determine cuál de las opciones es una base de $S$.<br><br><em>(Selecciona la opción correcta A, B, C o D según el PDF original)</em>",
            "solution": "La ecuación definitoria es $x = y - z + w$. Por lo tanto, cualquier vector en $S$ se puede escribir como: $$ \\begin{bmatrix} y - z + w \\\\ y \\\\ z \\\\ w \\end{bmatrix} = y\\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\\\ 0 \\end{bmatrix} + z\\begin{bmatrix} -1 \\\\ 0 \\\\ 1 \\\\ 0 \\end{bmatrix} + w\\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\\\ 1 \\end{bmatrix} $$ Dado que estos tres vectores generan el espacio y son linealmente independientes (lo notamos fácilmente por la posición de los $1$ y $0$ en $y, z, w$), forman una base. La opción (C) presenta exactamente este conjunto de vectores.<br><br>\\textbf{Respuesta:} (C) $\\left\\{ \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} -1 \\\\ 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\\\ 1 \\end{bmatrix} \\right\\}$.",
            "answers": {
                "Opcion": "C"
            }
        },
        {
            "id": 4,
            "question": "Sea $A$ una matriz de tamaño $2025 \\times 2025$. De $A$ se sabe que su espacio nulo tiene dimensión 1. Determine cuál afirmación es correcta.<br><br><em>(Selecciona la opción correcta A, B, C o D según el PDF original)</em>",
            "solution": "Por el Teorema del Rango y la Nulidad para una matriz $n \\times n$: $$ \\dim(\\text{Col}(A)) + \\dim(\\text{Nul}(A)) = n $$ $$ \\dim(\\text{Col}(A)) + 1 = 2025 \\implies \\dim(\\text{Col}(A)) = 2024 $$ Por lo tanto, el espacio columna tiene dimensión 2024.<br><br>\\textbf{Respuesta:} (C) El espacio columna de $A$ tiene dimensión 2024.",
            "answers": {
                "Opcion": "C"
            }
        },
        {
            "id": 5,
            "question": "Sea $R: \\mathbb{R}^2 \\to \\mathbb{R}^2$ la transformación lineal dada por la rotación de $\\pi/4$ radianes en el sentido horario (el sentido de las manecillas del reloj). Determine la afirmación correcta.<br><br><em>(Selecciona la opción correcta A, B, C o D según el PDF original)</em>",
            "solution": "La matriz estándar de una rotación en ángulo $\\theta$ (donde el sentido antihorario es positivo) es $\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$. Como la rotación es en sentido horario, $\\theta = -\\pi/4$. Evaluando: $$ \\cos(-\\pi/4) = \\frac{\\sqrt{2}}{2}, \\quad \\sin(-\\pi/4) = -\\frac{\\sqrt{2}}{2} $$ Sustituyendo en la matriz: $$ M_R = \\begin{bmatrix} \\sqrt{2}/2 & -(-\\sqrt{2}/2) \\\\ -\\sqrt{2}/2 & \\sqrt{2}/2 \\end{bmatrix} = \\begin{bmatrix} \\sqrt{2}/2 & \\sqrt{2}/2 \\\\ -\\sqrt{2}/2 & \\sqrt{2}/2 \\end{bmatrix} $$<br><br>\\textbf{Respuesta:} (D) La matriz estándar de $R$ está dada por $\\begin{bmatrix} \\sqrt{2}/2 & \\sqrt{2}/2 \\\\ -\\sqrt{2}/2 & \\sqrt{2}/2 \\end{bmatrix}$.",
            "answers": {
                "Opcion": "D"
            }
        },
        {
            "id": 6,
            "question": "Considere las matrices $E_1 = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 2 \\\\ 0 & 0 & 1 \\end{bmatrix}$ y $E_2 = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix}$. Sea $T: \\mathbb{R}^3 \\to \\mathbb{R}^3$ la transformación con matriz estándar $E_2 E_1$ y sea $S$ la transformación inversa de $T$.<br><br><em>(Selecciona la opción correcta A, B, C o D según el PDF original)</em>",
            "solution": "La matriz de $S$ es $(E_2 E_1)^{-1} = E_1^{-1} E_2^{-1}$. Las inversas son matrices elementales sencillas: $$ E_1^{-1} = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & -2 \\\\ 0 & 0 & 1 \\end{bmatrix}, \\quad E_2^{-1} = E_2 = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix} $$ Multiplicando: $$ M_S = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & -2 \\\\ 0 & 0 & 1 \\end{bmatrix} \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & -2 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix} $$ Para encontrar $S \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix}$: $$ \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & -2 & 1 \\\\ 0 & 1 & 0 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ -2(2) + 3 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ -1 \\\\ 2 \\end{bmatrix} $$<br><br>\\textbf{Respuesta:} (C) $S \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ -1 \\\\ 2 \\end{bmatrix}$.",
            "answers": {
                "Opcion": "C"
            }
        },
        {
            "id": 7,
            "question": "Sean $\\vec{u}_1 = 2\\vec{e}_1 - \\vec{e}_3$, $\\vec{u}_2 = 5\\vec{e}_2 + 6\\vec{e}_3$ y $\\vec{u}_3 = 3\\vec{e}_3$. La base $\\mathcal{B} = \\{\\vec{u}_1, \\vec{u}_2, \\vec{u}_3\\}$ y $[\\vec{w}]_\\mathcal{B} = \\begin{bmatrix} 1 \\\\ 5 \\\\ 3 \\end{bmatrix}$. Determine $\\vec{w}$.",
            "solution": "El vector $\\vec{w}$ se recupera multiplicando las coordenadas por sus vectores de la base correspondientes: $$ \\vec{w} = 1\\vec{u}_1 + 5\\vec{u}_2 + 3\\vec{u}_3 $$ Sustituyendo las definiciones: $$ \\vec{w} = 1(2\\vec{e}_1 - \\vec{e}_3) + 5(5\\vec{e}_2 + 6\\vec{e}_3) + 3(3\\vec{e}_3) $$ $$ \\vec{w} = 2\\vec{e}_1 - \\vec{e}_3 + 25\\vec{e}_2 + 30\\vec{e}_3 + 9\\vec{e}_3 = 2\\vec{e}_1 + 25\\vec{e}_2 + 38\\vec{e}_3 $$<br><br>\\textbf{Respuesta:} (E) El vector $\\vec{w}$ es igual a $2\\vec{e}_1 + 25\\vec{e}_2 + 38\\vec{e}_3$.",
            "answers": null
        },
        {
            "id": 8,
            "question": "Supongamos que $A$ es de $2\\times 2$ con valores propios $\\lambda_1 = 1$ y $\\lambda_2 = \\sqrt{2}$ cuyos espacios propios son $E_{\\lambda_1} = \\text{gen}\\left\\{\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}\\right\\}$ y $E_{\\lambda_2} = \\text{gen}\\left\\{\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}\\right\\}$. Sea $\\vec{v} = A^2 \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}$. Determine $\\vec{v}$.",
            "solution": "Expresamos el vector $\\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}$ como combinación lineal de los vectores propios: $$ \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix} = c_1 \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} + c_2 \\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix} $$ Esto nos da el sistema $c_1 + c_2 = 0$ y $-c_2 = 1 \\implies c_2 = -1, c_1 = 1$. Entonces, $A^2 \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix} = A^2\\left(1 \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} - 1 \\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix}\\right)$. Usando los valores propios: $$ = 1^2 \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} - (\\sqrt{2})^2 \\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} - 2\\begin{bmatrix} 1 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} 1 - 2 \\\\ 0 - (-2) \\end{bmatrix} = \\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix} $$<br><br>\\textbf{Respuesta:} (D) El vector $\\vec{v}$ es igual a $\\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix}$.",
            "answers": null
        },
        {
            "id": 9,
            "question": "Sea $A = \\begin{bmatrix} 1 & 2 & 1 \\\\ 2 & 1 & 1 \\\\ 1 & 1 & 2 \\end{bmatrix}$. Se sabe que $\\lambda=4$ es un valor propio de $A$.",
            "solution": "Probamos los vectores de las opciones multiplicándolos por $A$. Para la opción (D), el vector es $\\vec{u} = \\begin{bmatrix} -2 \\\\ -2 \\\\ -2 \\end{bmatrix}$. $$ A\\vec{u} = \\begin{bmatrix} 1 & 2 & 1 \\\\ 2 & 1 & 1 \\\\ 1 & 1 & 2 \\end{bmatrix} \\begin{bmatrix} -2 \\\\ -2 \\\\ -2 \\end{bmatrix} = \\begin{bmatrix} -2-4-2 \\\\ -4-2-2 \\\\ -2-2-4 \\end{bmatrix} = \\begin{bmatrix} -8 \\\\ -8 \\\\ -8 \\end{bmatrix} = 4 \\begin{bmatrix} -2 \\\\ -2 \\\\ -2 \\end{bmatrix} = 4\\vec{u} $$ Efectivamente, cumple $A\\vec{u} = 4\\vec{u}$, por lo que es un vector propio asociado a $\\lambda=4$.<br><br>\\textbf{Respuesta:} (D) El vector $\\begin{bmatrix} -2 \\\\ -2 \\\\ -2 \\end{bmatrix}$ es un vector propio asociado a $\\lambda = 4$.",
            "answers": null
        },
        {
            "id": 10,
            "question": "Supongamos que $A$ es una matriz diagonalizable de tamaño $3 \\times 3$ con dos valores propios distintos $\\lambda_1 = 1$ y $\\lambda_2$. El espacio propio de $\\lambda_1$ es el espacio nulo de $B = \\begin{bmatrix} 1 & -1 & 1 \\\\ 2 & -2 & 2 \\\\ 3 & -3 & 3 \\end{bmatrix}$, y el espacio fila de $B$ está contenido en el espacio nulo de $A$.",
            "solution": "El espacio nulo de $B$ está determinado por la ecuación $x - y + z = 0$, que corresponde a un plano en $\\mathbb{R}^3$, por tanto $\\dim(E_{\\lambda_1}) = 2$. Al ser $A$ de tamaño $3 \\times 3$ y diagonalizable, la suma de las dimensiones de todos sus espacios propios debe ser 3. Por ende, la dimensión del espacio propio de $\\lambda_2$ debe ser $\\dim(E_{\\lambda_2}) = 3 - 2 = 1$. El espacio fila de $B$ está generado por $[1, -1, 1]^T$. Como está en el espacio nulo de $A$, significa que $A [1, -1, 1]^T = \\vec{0} = 0 \\cdot [1, -1, 1]^T$. Esto nos indica que $\\lambda_2 = 0$. Su espacio propio tiene dimensión 1.<br><br>\\textbf{Respuesta:} (E) El espacio propio asociado a $\\lambda_2$ tiene dimensión 1.<br><br>\\end{document}",
            "answers": null
        }
    ]
}
];

const SUBJECTS = [
    {
        id: "calculus",
        title: "Repaso Cálculo Diferencial",
        description: "Domina los límites, derivadas y sus aplicaciones geométricas. Explora la ciencia del cambio continuo.",
        icon: "📈",
        missions: CALCULUS_DATA
    },
    {
        id: "algebra",
        title: "Repaso Álgebra Lineal",
        description: "Sistemas de ecuaciones, transformaciones lineales, espacios vectoriales y diagonalización. La base del mundo multidimensional.",
        icon: "🧮",
        missions: ALGEBRA_DATA
    }
];
