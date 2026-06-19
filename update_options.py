import json
import re

options_map = {
    "parcial2024_1": {
        1: "<br><br>A) $A = \\begin{bmatrix} 1 & -2\\alpha & 1-\\alpha \\\\ 0 & 1 & -1 \\\\ 0 & 0 & 1 \\end{bmatrix}$<br>B) $A = \\begin{bmatrix} 1 & -2\\alpha & 6\\alpha^2-\\alpha \\\\ 0 & 1 & -3\\alpha \\\\ 0 & 0 & 1 \\end{bmatrix}$<br>C) $A = \\begin{bmatrix} 1 & -2\\alpha & 6\\alpha^2-\\alpha \\\\ 0 & 1 & -3\\alpha \\\\ 0 & 0 & -1 \\end{bmatrix}$<br>D) $A = \\begin{bmatrix} 1 & -2\\alpha & 1+\\alpha \\\\ 0 & 1 & -1 \\\\ 0 & 0 & 1 \\end{bmatrix}$",
        2: "<br><br>A) Ninguno de H y K son subespacios vectoriales de $\\mathbb{R}^2$.<br>B) Sólo H es un subespacio vectorial de $\\mathbb{R}^2$.<br>C) Sólo K es un subespacio vectorial de $\\mathbb{R}^2$.<br>D) Ambos H y K son subespacios vectoriales de $\\mathbb{R}^2$.",
        3: "<br><br>A) 1<br>B) 2<br>C) 3<br>D) 4",
        4: "<br><br>A) $\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$<br>B) $\\begin{bmatrix} 0 & 1 \\\\ 0 & 0 \\end{bmatrix}$<br>C) $\\begin{bmatrix} 1 & 2 \\\\ 0 & 1 \\end{bmatrix}$<br>D) $\\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$",
        5: "<br><br>A) 0<br>B) 1<br>C) 2<br>D) 3",
        6: "<br><br>A) $\\{x^3, x^2, 2x, 3x\\}$<br>B) $\\{(x-1)^3, (x-1)^2, x-1, 1\\}$<br>C) $\\{x^3, x^2+x, 1\\}$<br>D) $\\{x^3-x, x^2-x, x, x^3+x\\}$",
        7: "<br><br>A) S y D son transformaciones lineales pero D $\\circ$ S no lo es.<br>B) S no es una transformación lineal.<br>C) D no es una transformación lineal.<br>D) Todas S, D y D $\\circ$ S son transformaciones lineales."
    },
    "parcial2024_2": {
        1: "<br><br>A) La matriz A no es invertible.<br>B) La matriz A es invertible y su inversa es BC.<br>C) La matriz A es invertible y su inversa es ella misma.<br>D) La matriz A es invertible y su inversa es D.",
        2: "<br><br>A) El sistema homogéneo asociado a la matriz A tiene infinitas soluciones.<br>B) El sistema aumentado $[A|b]$ es inconsistente.<br>C) El sistema aumentado $[A|b]$ tiene a $[1, 1, 0, 2]^T$ como su única solución.<br>D) El sistema aumentado $[A|b]$ tiene a $[1, 1, 0, 2]^T$ como solución, y tiene otras soluciones.",
        3: "<br><br>A) $H_1$ es un subespacio vectorial de $\\mathbb{R}^2$.<br>B) $H_2$ no es un subespacio vectorial de $\\mathbb{R}^2$.<br>C) $H_3$ es un subespacio vectorial de $\\mathbb{R}^2$.<br>D) Ninguna de las otras opciones.",
        4: "<br><br>A) El espacio nulo de A tiene dimensión 0.<br>B) El vector b no pertenece a Col(A).<br>C) El sistema aumentado $[A|b]$ tiene infinitas soluciones.<br>D) Ninguna de las otras opciones.",
        5: "<br><br>A) El rango de A es igual a 4.<br>B) El rango de A es igual a 2.<br>C) La nulidad de A es igual a 1.<br>D) La nulidad de A es igual a 3.",
        6: "<br><br>A) $[\\vec{v}]_{\\mathcal{B}} = [1, 1, 1]^T$<br>B) $[\\vec{v}]_{\\mathcal{B}} = [3, 0, 0]^T$<br>C) $[\\vec{v}]_{\\mathcal{B}} = [0, 0, 0]^T$<br>D) $[\\vec{v}]_{\\mathcal{B}} = [-2, 4, -7]^T$",
        7: "<br><br>A) El escalar $\\lambda = 1$ es un valor propio de R.<br>B) El escalar $\\lambda = -1$ es un valor propio de R.<br>C) El primer vector canónico $\\vec{e}_1$ es un vector propio de R.<br>D) No existe $\\vec{v} \\in \\mathbb{R}^2$ que sea vector propio de R."
    },
    "parcial2025_2s": {
        1: "<br><br>A) La matriz $A^2$ está dada por $\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & -6 \\\\ 0 & 0 & 1 \\end{bmatrix}$.<br>B) La inversa de la matriz $A^2$ está dada por $\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & -6 \\\\ 0 & 0 & 1 \\end{bmatrix}$.<br>C) La inversa de la matriz $A^2$ está dada por $\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 6 \\\\ 0 & 0 & 1 \\end{bmatrix}$.<br>D) La matriz $A$ está dada por $\\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & -3 \\\\ 0 & 0 & 1 \\end{bmatrix}$.<br>E) La matriz $A$ no es invertible.",
        2: "<br><br>A) A es un subespacio de $\\mathbb{R}^{m\\times n}$.<br>B) El espacio nulo $\\text{Nul}(A)$ es un subespacio de $\\mathbb{R}^m$.<br>C) El espacio columna de A es un subespacio de $\\mathbb{R}^n$.<br>D) El espacio fila de A es un subespacio de $\\mathbb{R}^n$.<br>E) Ninguna de las otras opciones.",
        3: "<br><br>A) $\\left\\{ \\begin{bmatrix} y - z + w \\\\ y \\\\ z \\\\ w \\end{bmatrix} \\mid y, z, w \\in \\mathbb{R} \\right\\}$.<br>B) S no tiene una base.<br>C) $\\left\\{ \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} -1 \\\\ 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\\\ 1 \\end{bmatrix} \\right\\}$.<br>D) $\\left\\{ \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} -1 \\\\ 0 \\\\ 1 \\\\ 0 \\end{bmatrix} \\right\\}$.<br>E) $\\left\\{ \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} -1 \\\\ 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 2 \\\\ 1 \\\\ -1 \\\\ 0 \\end{bmatrix} \\right\\}$.",
        4: "<br><br>A) El espacio columna de A tiene dimensión 1.<br>B) El espacio columna de A tiene dimensión 2025.<br>C) El espacio columna de A tiene dimensión 2024.<br>D) El espacio columna de A no tiene dimensión.<br>E) No hay suficientes elementos para determinar la dimensión del espacio columna de A.",
        5: "<br><br>A) La matriz estándar de R está dada por $\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$.<br>B) R no tiene una matriz estándar.<br>C) La matriz estándar de R está dada por $\\begin{bmatrix} \\sqrt{2}/2 & -\\sqrt{2}/2 \\\\ \\sqrt{2}/2 & \\sqrt{2}/2 \\end{bmatrix}$.<br>D) La matriz estándar de R está dada por $\\begin{bmatrix} \\sqrt{2}/2 & \\sqrt{2}/2 \\\\ -\\sqrt{2}/2 & \\sqrt{2}/2 \\end{bmatrix}$.<br>E) La matriz estándar de R está dada por $\\begin{bmatrix} -1 & 0 \\\\ 0 & -1 \\end{bmatrix}$.",
        6: "<br><br>A) $S \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix}$.<br>B) $S \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ -1 \\\\ 3 \\end{bmatrix}$.<br>C) $S \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ -1 \\\\ 2 \\end{bmatrix}$.<br>D) $S \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 3 \\\\ 2 \\end{bmatrix}$.<br>E) $S \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}$.",
        7: "<br><br>A) El vector $\\vec{w}$ no está en $\\mathbb{R}^3$.<br>B) El vector $\\vec{w}$ es igual a $2\\vec{e}_1 - 5\\vec{e}_3$.<br>C) El vector $\\vec{w}$ es igual a $5\\vec{e}_2 + 6\\vec{e}_3$.<br>D) El vector $\\vec{w}$ es igual a $2\\vec{e}_1 + 15\\vec{e}_2 + 32\\vec{e}_3$.<br>E) El vector $\\vec{w}$ es igual a $2\\vec{e}_1 + 25\\vec{e}_2 + 38\\vec{e}_3$.",
        8: "<br><br>A) El vector $\\vec{v}$ es igual a $\\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}$.<br>B) El vector $\\vec{v}$ es igual a $\\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}$.<br>C) El vector $\\vec{v}$ es igual a $\\begin{bmatrix} -2 \\\\ 1 \\end{bmatrix}$.<br>D) El vector $\\vec{v}$ es igual a $\\begin{bmatrix} -1 \\\\ 2 \\end{bmatrix}$.<br>E) No hay suficiente información para calcular $\\vec{v}$."
    }
}

# Read data_algebra.js manually to replace
with open('data_algebra.js', 'r', encoding='utf-8') as f:
    content = f.read()

# We need to extract ALGEBRA_DATA array, modify it, and write it back.
# We will use simple regex or split since it's a js file.

# Find the start of ALGEBRA_DATA
start_idx = content.find('const ALGEBRA_DATA = [')
end_idx = content.find('const SUBJECTS =')

algebra_data_str = content[start_idx:end_idx].strip()
# remove 'const ALGEBRA_DATA = ' and trailing ';'
algebra_data_str = algebra_data_str.replace('const ALGEBRA_DATA = ', '').rstrip(';')

# Load it as json
import json
algebra_data = json.loads(algebra_data_str)

for mission in algebra_data:
    mission_id = mission['mission_id']
    if mission_id in options_map:
        for ex in mission['exercises']:
            ex_id = ex['id']
            if ex_id in options_map[mission_id]:
                # Append options
                # First remove the temporary disclaimer if it exists
                clean_q = re.sub(r'<br><br><em>\(Selecciona la opción correcta.*?</em>', '', ex['question'])
                # Then append the real options
                ex['question'] = clean_q + options_map[mission_id][ex_id]
                
# Convert back to JSON and write
new_algebra_data_str = 'const ALGEBRA_DATA = ' + json.dumps(algebra_data, ensure_ascii=False, indent=4) + ';\n\n'

new_content = new_algebra_data_str + content[end_idx:]

with open('data_algebra.js', 'w', encoding='utf-8') as f:
    f.write(new_content)
    
print("Updated successfully")
