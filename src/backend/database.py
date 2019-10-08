from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.schema import FetchedValue

engine_url = 'postgresql+psycopg2://postgres:mysecretpassword@localhost:5432/postgres'

engine = create_engine(engine_url, convert_unicode=True, echo=False)
session = scoped_session(
    sessionmaker(autocommit=False, autoflush=False, bind=engine)
    )
Base = declarative_base()


from sqlalchemy import (Column, String, Boolean,
                        DateTime, Integer)

class Users(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False, comment='사용자명')
    username = Column(String(50), nullable=False, comment='사용자 ID')
    password = Column(String(255), nullable=False, comment='사용자 비밀번호')
    email = Column(String(50), nullable=False, comment='이메일')
    registered_on = Column(DateTime, nullable=False, server_default=FetchedValue(), comment='가입일자')
    confirmed = Column(Boolean, nullable=False, server_default=FetchedValue(), comment='이메일 확인여부')
    confirmed_on = Column(DateTime, comment='이메일 확인일자')
