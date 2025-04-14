from pydantic import BaseModel

class Questao(BaseModel):
    texto: str
    tema: str
    nivel: str
    
