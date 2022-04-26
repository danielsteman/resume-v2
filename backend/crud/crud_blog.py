from sqlalchemy.orm import Session

import models, schemas

def get_blog_posts(db: Session, *, skip: int = 0, limit: int = 100):
    return db.query(models.BlogPost).offset(skip).limit(limit).all()

def create_blog_post(db: Session, *, blog_post: schemas.BlogPost):
    db_blog_post = models.BlogPost(
        title = blog_post.title,
        body = blog_post.body,
        tags = blog_post.tags,
    )
    db.add(db_blog_post)
    db.commit()
    db.refresh(db_blog_post)
    return db_blog_post