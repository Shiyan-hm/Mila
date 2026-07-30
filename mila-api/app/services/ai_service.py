import os

from openai import OpenAI



client=OpenAI(

api_key=os.getenv(
"OPENAI_API_KEY"
)

)



def generate_plan(data):


    prompt=f"""

你是一名2028考研规划老师。


学生信息：

{data}


请生成：

1.每日时间轴

2.周计划

3.月计划

4.艾宾浩斯复习安排


要求：

政治、英语、数学一、408分别规划。


"""


    response=client.chat.completions.create(

        model="gpt-5-mini",

        messages=[

        {

        "role":"user",

        "content":prompt

        }

        ]

    )


    return response.choices[0].message.content
