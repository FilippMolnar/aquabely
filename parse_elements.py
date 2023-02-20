import json
    
with open('prvky.txt', 'r') as f:
    lines = f.readlines()
elements = {}
    
for line in lines:
    el, points = line.split()
    elements[el] = points

# json_data = json.dumps(elements)

with open("elements.json", "w") as f:
    json.dump(elements, f)