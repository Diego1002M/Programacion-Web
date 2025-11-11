# src/apis/usuarios.py
from fastapi import APIRouter
from pydantic import BaseModel
from src.services.usuario_service import UsuarioService

router = APIRouter()

class UsuarioIn(BaseModel):
    nombre: str
    apellido: str
    usuario: str
    contrasena: str

@router.get("/")
async def obtener_usuarios():
    return await UsuarioService.obtener_usuarios()

@router.post("/")
async def registrar_usuario(usuario: UsuarioIn):
    return await UsuarioService.registrar_usuario(usuario.dict())
