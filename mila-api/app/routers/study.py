from fastapi import APIRouter


router=APIRouter()



@router.post("/timer")


def save_time(data:dict):


    return {


    "success":True,


    "message":"学习时间已记录"


    }
