from fastapi import APIRouter

from api.endpoints import blog

api_router = APIRouter()
api_router.include_router(blog.router)