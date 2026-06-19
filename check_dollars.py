import json
import re

with open('data_algebra.js', 'r', encoding='utf-8') as f:
    content = f.read()

start_idx = content.find('const ALGEBRA_DATA = [')
end_idx = content.find('const SUBJECTS =')
algebra_data_str = content[start_idx:end_idx].strip()
algebra_data_str = algebra_data_str.replace('const ALGEBRA_DATA = ', '').rstrip(';')

algebra_data = json.loads(algebra_data_str)

for mission in algebra_data:
    for ex in mission['exercises']:
        q = ex['question']
        # remove $$ ... $$
        q_no_display = re.sub(r'\$\$.*?\$\$', '', q, flags=re.DOTALL)
        # count $
        dollars = q_no_display.count('$')
        if dollars % 2 != 0:
            print(f"Mismatched $ in {mission['mission_id']} Q{ex['id']}")
            print(q)
            print("---")
            
        s = ex['solution']
        s_no_display = re.sub(r'\$\$.*?\$\$', '', s, flags=re.DOTALL)
        dollars_s = s_no_display.count('$')
        if dollars_s % 2 != 0:
            print(f"Mismatched $ in SOLUTION {mission['mission_id']} Q{ex['id']}")
            print(s)
            print("---")
