from typing import List
from crud import crud_blog
from database import SessionLocal
from schemas.blog import BlogPost
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/blog/{blog_post_id}", response_model=BlogPost)
async def read_blog_post(blog_post_id: int):
    return {
        "id": blog_post_id,
        "title": "title",
        "body": "lorem ipsum"
    }

@router.get("/blogs", response_model=List[BlogPost])
async def read_blog_posts(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    blog_posts = crud_blog.get_blog_posts(db, skip=skip, limit=limit)
    return blog_posts

@router.post("/blog/")
async def create_blog_post(blog_post: BlogPost, db: Session = Depends(get_db)):
    return crud_blog.create_blog_post(db, blog_post=blog_post)