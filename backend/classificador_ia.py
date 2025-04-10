# Metodo para classificação
from transformes import pipeline

classificador = pipeline(
    "text-classification",
    model = "neuralmind/bert-base-portuguese-cased",
    function_to_apply="none"
)

def classicador_nivel(questao: str) -> str:
    resultado = classificador(questao)
    if "básico" in questap.lower():
        return "Ensino Básico"
    elif "fundamental" in questao.lower():
        return "Ensino Fundamental"
    else:
        return "Ensino Médio"