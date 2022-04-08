from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from pathlib import Path

root = Path(__file__).parent.parent
static_path = Path.joinpath(root, "frontend/build")

app = FastAPI()

class SPAStaticFiles(StaticFiles):
    async def get_response(self, path: str, scope):
        response = await super().get_response(path, scope)
        if response.status_code == 404:
            response = await super().get_response('.', scope)
        return response

app.mount('/', SPAStaticFiles(directory=static_path, html=True), name='app')