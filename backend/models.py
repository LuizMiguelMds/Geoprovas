from sqlalchemy import Column, Integer, String
from .database import Base

class Questao(Base):
    __tablename__ = "questoes"
    
    id = Column(Integer, primary_key=True, index=True)
    tema = Column(String)
    questao = Column(String)
    dificuldade = Column(String)