from fastapi import APIRouter


router=APIRouter()



@router.get("/today")

def today():


    return {


    "tasks":[


    {

    "time":"08:00",

    "content":"数学一 高数极限"

    },


    {

    "time":"10:30",

    "content":"英语阅读"

    },


    {

    "time":"14:00",

    "content":"408数据结构"

    }


    ]



    }
