# src/apis/alertas.py
from fastapi import APIRouter
from pydantic import BaseModel
from src.services.alerta_service import AlertaService  # ✅ cambio aquí

router = APIRouter()

class AlertaIn(BaseModel):
    tipo: str
    descripcion: str
    origen: str

@router.get("/")
async def obtener_alertas():
    return await AlertaService.obtener_alertas()

@router.post("/")
async def registrar_alerta(alerta: AlertaIn):
    return await AlertaService.registrar_alerta(alerta.dict())
