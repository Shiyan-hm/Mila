from sqlalchemy import create_engine

from sqlalchemy.orm import sessionmaker


DATABASE_URL = (

"postgresql://"

"mila:mila123@localhost:5432/mila"

)



engine=create_engine(
DATABASE_URL
)



SessionLocal=sessionmaker(

autocommit=False,

autoflush=False,

bind=engine

)



def get_db():

    db=SessionLocal()

    try:

        yield db

    finally:

        db.close()
