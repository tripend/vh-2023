from fastapi import FastAPI
from pymongo import MongoClient
from pydantic import BaseModel

app = FastAPI()

client = MongoClient("mongodb://localhost:27017/")
db = client.ratings_db

class Rating(BaseModel):
    quality: int
    price: int
    durability: int

@app.post("/submit-rating/")
async def submit_rating(rating: Rating):
    ratings_collection = db.ratings
    ratings_collection.insert_one(rating.dict())
    return {"message": "Rating submitted successfully!"}
