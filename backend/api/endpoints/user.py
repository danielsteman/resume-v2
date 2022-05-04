from urllib import response
from database import SessionLocal
from schemas.user import User, UserCreate
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/login")
async def login_user(user: User, db: Session = Depends(get_db)):
    return

@router.post("/signup")
async def create_user(user: UserCreate, db: Session = Depends(get_db)):
    return