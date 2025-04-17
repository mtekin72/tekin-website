from typing import Optional
from pydantic import BaseModel

class User(BaseModel):
    id: int
    username: str
    hashed_password: str

class Task(BaseModel):
    id: int
    title: str
    description: Optional[str] = None
    completed: bool = False
    owner_id: int
