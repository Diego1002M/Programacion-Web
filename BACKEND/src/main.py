# main.py
import sys
import os

# --- ESTA ES LA MAGIA ---
# Añade la carpeta 'src' (donde estamos) al path de Python
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
# ------------------------

from fastapi import FastAPI
from services import usuario_service, alerta_service 
from database import conexion, models 

# --- CREAR TABLAS ---
# (Esto ahora SÍ funcionará porque la conexión es correcta)
models.Base.metadata.create_all(bind=conexion.engine)

app = FastAPI(
    title="WankaSegura API (Versión Profesional)",
    version="2.0.0"
)

@app.get("/", tags=["Home"])
def bienvenida():
    return {"mensaje": "Bienvenido a la API de WankaSegura"}

# Incluimos las rutas
app.include_router(usuario_service.router, prefix="/api")
app.include_router(alerta_service.router, prefix="/api")