# main.py
from fastapi import FastAPI
from routers import usuarios, incidentes  # Importamos nuestros archivos de rutas

app = FastAPI(
    title="WankaSegura API",
    description="API para el proyecto de seguridad ciudadana en Tambo, Huancayo.",
    version="1.0.0"
)

# Saludo de bienvenida
@app.get("/", tags=["Home"])
def bienvenida():
    return {"mensaje": "Bienvenido a la API de WankaSegura"}

# Incluimos las rutas de usuarios (login, registro, etc.)
app.include_router(usuarios.router, prefix="/api")

# Incluimos las rutas de incidentes (reportar, ver, etc.)
app.include_router(incidentes.router, prefix="/api")