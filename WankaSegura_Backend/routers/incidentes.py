# routers/incidentes.py
from fastapi import APIRouter, HTTPException, Depends, status
from models import IncidenteBase, Incidente, Usuario
from database import db_incidentes, get_next_incident_id, db_usuarios
import datetime
from typing import Annotated

router = APIRouter(tags=["Incidentes"])

# --- SIMULACIÓN DE AUTENTICACIÓN ---
# Esta función simula la obtención del usuario actual a partir de un token
# En un proyecto real, aquí decodificarías el Token JWT
async def fake_get_current_user():
    # Por ahora, solo devolvemos al primer usuario de la BD (Juan Diego)
    # como si estuviera logueado.
    usuario = db_usuarios[0]
    return Usuario(**usuario)

# Modelo para un usuario autenticado
UsuarioAutenticado = Annotated[Usuario, Depends(fake_get_current_user)]

# --- REPORTAR UN NUEVO INCIDENTE (Ruta Protegida) ---
@router.post("/incidentes", response_model=Incidente, status_code=status.HTTP_201_CREATED)
async def reportar_incidente(
    incidente: IncidenteBase, 
    usuario_actual: UsuarioAutenticado
):
    # Creamos el nuevo incidente (como diccionario)
    nuevo_incidente_db = {
        "id": get_next_incident_id(),
        "tipo": incidente.tipo,
        "descripcion": incidente.descripcion,
        "latitud": incidente.latitud,
        "longitud": incidente.longitud,
        "fecha_hora": datetime.datetime.now().isoformat(),
        "id_usuario": usuario_actual.id,  # Vinculamos el incidente al usuario logueado
        "estado": "reportado"
    }
    
    db_incidentes.append(nuevo_incidente_db)
    
    return Incidente(**nuevo_incidente_db)

# --- VER TODOS LOS INCIDENTES (Para el Dashboard de Autoridades) ---
@router.get("/incidentes", response_model=list[Incidente])
async def obtener_todos_los_incidentes():
    return [Incidente(**i) for i in db_incidentes]