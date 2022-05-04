from fastapi import APIRouter

from api.endpoints import blog, user

api_router = APIRouter()
api_router.include_router(blog.router)
api_router.include_router(user.router)