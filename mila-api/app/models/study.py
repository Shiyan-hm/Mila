from sqlalchemy import Column,Integer,String,DateTime

from datetime import datetime

from app.database import Base



class StudyRecord(Base):


    __tablename__="study_records"


    id=Column(
    Integer,
    primary_key=True
    )


    subject=Column(
    String
    )


    duration=Column(
    Integer
    )


    created_at=Column(
    DateTime,
    default=datetime.now
    )
