from fastapi import APIRouter

from app.services.ai_service import generate_plan


router=APIRouter()



@router.post("/plan")

def create_plan(data:dict):


    result=generate_plan(data)


    return {


    "plan":result


    }
