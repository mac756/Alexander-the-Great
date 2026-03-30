import re

with open('src/app/components/InteractiveMap.tsx', 'r') as f:
    content = f.read()

# Add casualties field to interface
content = content.replace(
    'significance: string;\n}',
    'significance: string;\n  casualties: string;\n}'
)

# Update conquest points with casualties
casualties_data = {
    'macedonia': 'Inherited: 0 (Philip\'s foundation)',
    'granicus': 'Persians: 5,000-6,000 killed; Macedonians: ~350',
    'issus': 'Persians: ~30,000; Macedonians: ~7,000',
    'gaugamela': 'Persians: ~40,000-90,000; Macedonians: ~1,000-3,000'
}

for point_id, casualty in casualties_data.items():
    pattern = f'id: "{point_id}".*?significance: "[^"]+"'
    replacement = f'id: "{point_id}".*?significance: "[^"]+"\n    casualties: "{casualty}"'
    content = re.sub(pattern, replacement, content, flags=re.DOTALL)

with open('src/app/components/InteractiveMap.tsx', 'w') as f:
    f.write(content)

print('Updated InteractiveMap.tsx')
