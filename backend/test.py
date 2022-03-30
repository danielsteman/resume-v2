from pathlib import Path

root = Path(__file__).parent.parent
statics = Path.joinpath(root, "frontend/build")
print(statics)
