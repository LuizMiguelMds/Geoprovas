from sqlalchemy import Column, Integer, String
from pydantic import BaseModel

class Questao(BaseModel):
    texto: str
    tema: str
    nivel: str
    
@app.post("/salvar-questao")
async def salvar_questao(questao: Questao):
    # Para salvar no banco de dados ou planilha
    return {"status": "Questão salva!"}
