from fastapi import APIRouter
from pydantic import BaseModel
from src.services.alerta_service import AlertaService

router = APIRouter(prefix="/alertas")

class AlertaIn(BaseModel):
    tipo: str
    descripcion: str
    origen: str

@router.get(" ")
async def obtener_alertas():
    return AlertaService.obtener_alertas()

@router.post("")
async def registrar_alerta(alerta: AlertaIn):
    return AlertaService.registrar_alerta(alerta.dict())
