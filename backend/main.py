from fastapi import FastAPI

app = FastAPI()  # Esta linha deve vir PRIMEIRO

@app.get("/")
async def home():
    return {"message": "API Geoprovas está no ar!", "status": "OK"}

@app.get("/gerar-questao")
async def gerar_questao(tema: str):
    # teste inicial no futuro haverá integração com a ia
    return {
        "questao": f"Explique o conceito de {tema}",
        "dificuldade": "Médio",
        "tema": tema
    }
