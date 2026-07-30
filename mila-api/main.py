from fastapi import FastAPI

from app.routers import (
    study,
    planner,
    ai
)


app = FastAPI(

title="Mila API",

version="1.0"

)




app.include_router(
study.router,
prefix="/api/v1/study"
)


app.include_router(
planner.router,
prefix="/api/v1/planner"
)


app.include_router(
ai.router,
prefix="/api/v1/ai"
)



@app.get("/")
def root():

    return {

        "name":"Mila",

        "status":"running"

    }
