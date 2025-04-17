from fastapi import FastAPI
from . import models, schemas, crud, auth, errors
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Task Manager API", description="A demo API for CRUD, auth, and automation testing.", version="1.0.0")

origins = [
    "http://localhost:3000",
    "https://tekin-website-k65b.vercel.app",
    "https://task-manager-api.onrender.com"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(crud.router)

# Custom error handlers
errors.register_handlers(app)

@app.get("/", tags=["Root"])
def read_root():
    return {"message": "Welcome to the Task Manager API"}
