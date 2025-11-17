from fastapi import APIRouter
from pydantic import BaseModel
from src.services.usuario_service import UsuarioService

router = APIRouter(prefix="/usuarios")

class UsuarioIn(BaseModel):
    nombre: str
    apellido: str
    usuario: str
    contrasena: str

@router.get("")
async def obtener_usuarios():
    return UsuarioService.obtener_usuarios()

@router.post("")
async def registrar_usuario(usuario: UsuarioIn):
    return UsuarioService.registrar_usuario(usuario.dict())
