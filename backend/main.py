from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import os
from supabase import create_client, Client
from supabase.client import ClientOptions
from dotenv import load_dotenv

USER_TABLE = "users"

# load .env variables
load_dotenv()

# ---------------- DEFINE SUPABASE CLIENT -------------------
url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(
    url,
    key,
    options=ClientOptions(
        postgrest_client_timeout=10,
        storage_client_timeout=10,
        schema="public",
    )
)

app = FastAPI()

# ------------------- DEFINE fastAPI CORS POLICIES ----------------
# only allow React dev server to send API requests to server
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],    # allow GET, POST, PUT, DELETE methods
    allow_headers=["*"]
)

class User(BaseModel):
    username: str
    password: str

# queries database to check if username already exists
def usernameAlreadyExists(username):
    response = (
        supabase.table(USER_TABLE)
        .select("*")
        .eq("username", username)
        .execute()
    )
    return len(response.data) > 0


# API to sign up user, returns "Success" or "Fail" with details if unsuccessful
@app.post("/signup")
async def signup(user: User):
    try:
        if usernameAlreadyExists(user.username):
            # return username already exists
            return {"status": "Fail", "details": "Username already exists"}
        else:
            # insert username and password into table, return successful sign up
            response = (
                supabase.table(USER_TABLE)
                .insert({"username": user.username, "password": user.password})
                .execute()
            )
            return {"status": "Success"}
    except:
        # return error message
        return {"status": "Fail", "details": "Database timeout"}