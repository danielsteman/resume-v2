from models.blog import BlogPost
from fastapi import APIRouter

router = APIRouter()

@router.get("/blog/{blog_post_id}", response_model=BlogPost)
async def read_blog_post(blog_post_id: int):
    return {
        "id": blog_post_id,
        "text": "lorem ipsum"
    }