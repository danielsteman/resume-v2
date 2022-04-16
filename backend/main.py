from sys import prefix
from api.static.spastaticfiles import SPAStaticFiles
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.api import api_router

from pathlib import Path

root = Path(__file__).parent.parent
static_path = Path.joinpath(root, "frontend/build")

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/blog")

app.mount('/', SPAStaticFiles(directory=static_path, html=True), name='app')