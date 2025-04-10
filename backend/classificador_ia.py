# Metodo para classificação
from transformes import pipeline

classificador = pipeline(
    "text-classification",
    model = "neuralmind/bert-base-portuguese-cased",
    function_to_apply="none"
)