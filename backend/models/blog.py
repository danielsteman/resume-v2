from sqlalchemy import Boolean, Column, Integer, String, Text, ARRAY

from database import Base


class BlogPost(Base):
    __tablename__ = "blog_post"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    body = Column(Text)
    tags = Column(ARRAY(String))