from pydantic import BaseModel


class BlogPost(BaseModel):
    id: int
    title: str
    body: str
    tags: list[str] = []

    class Config:
        orm_mode = True