# src/main.py
from fastapi import FastAPI
from src.apis import usuarios
from src.apis import alertas  # si este módulo ya existía

app = FastAPI()

app.include_router(alertas.router, prefix="/alertas", tags=["Alertas"])
app.include_router(usuarios.router, prefix="/usuarios", tags=["Usuarios"])

@app.get("/")
def root():
    return {"mensaje": "API funcionando correctamente"}
