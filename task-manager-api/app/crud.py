from fastapi import APIRouter, Depends, HTTPException, status
from .schemas import TaskCreate, TaskUpdate, TaskOut
from .models import Task
from .auth import get_current_user
from typing import List

router = APIRouter(prefix="/tasks", tags=["Tasks"])

# In-memory fake DB for demo
fake_tasks = []
task_id_counter = 1

@router.post("/", response_model=TaskOut, status_code=201)
def create_task(task: TaskCreate, user=Depends(get_current_user)):
    global task_id_counter
    new_task = Task(id=task_id_counter, title=task.title, description=task.description, completed=False, owner_id=user["id"])
    fake_tasks.append(new_task)
    task_id_counter += 1
    return new_task

@router.get("/", response_model=List[TaskOut])
def list_tasks(user=Depends(get_current_user)):
    return [t for t in fake_tasks if t.owner_id == user["id"]]

@router.get("/{task_id}", response_model=TaskOut)
def get_task(task_id: int, user=Depends(get_current_user)):
    for t in fake_tasks:
        if t.id == task_id and t.owner_id == user["id"]:
            return t
    raise HTTPException(status_code=404, detail="Task not found")

@router.put("/{task_id}", response_model=TaskOut)
def update_task(task_id: int, update: TaskUpdate, user=Depends(get_current_user)):
    for t in fake_tasks:
        if t.id == task_id and t.owner_id == user["id"]:
            if update.title is not None:
                t.title = update.title
            if update.description is not None:
                t.description = update.description
            if update.completed is not None:
                t.completed = update.completed
            return t
    raise HTTPException(status_code=404, detail="Task not found")

@router.delete("/{task_id}", status_code=204)
def delete_task(task_id: int, user=Depends(get_current_user)):
    for i, t in enumerate(fake_tasks):
        if t.id == task_id and t.owner_id == user["id"]:
            del fake_tasks[i]
            return
    raise HTTPException(status_code=404, detail="Task not found")

# Edge case: Simulate 500 error
@router.get("/simulate-error/500")
def simulate_500():
    raise HTTPException(status_code=500, detail="Simulated server error")

# Edge case: Simulate 400 error
@router.get("/simulate-error/400")
def simulate_400():
    raise HTTPException(status_code=400, detail="Simulated bad request")
