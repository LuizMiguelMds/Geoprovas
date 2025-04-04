from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configuração do CORS (para o React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # URL do frontend
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rotas da API
@app.get("/")
async def home():
    return {"message": "API Geoprovas está no ar!", "status": "OK"}

@app.get("/gerar-questao")
async def gerar_questao(tema: str):
    return {
        "questao": f"Explique o conceito de {tema}",
        "dificuldade": "Médio",
        "tema": tema
    }

# Adicione rotas CRUD aqui