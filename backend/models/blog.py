from pydantic import BaseModel

class BlogPost(BaseModel):
    id: int
    text: str
    tags: list[str] = []