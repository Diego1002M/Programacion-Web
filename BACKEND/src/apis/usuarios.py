from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from src.services.usuario_service import UsuarioService

router = APIRouter(prefix="/usuarios")

class UsuarioIn(BaseModel):
    nombre: str
    apellido: str
    usuario: str
    contrasena: str
    dni: str
    celular: str

@router.get("")
async def obtener_usuarios():
    return UsuarioService.obtener_usuarios()

@router.post("")
async def registrar_usuario(usuario: UsuarioIn):

    for campo, valor in usuario.dict().items():
        if not valor.strip():
            raise HTTPException(
                status_code=400,
                detail=f"El campo '{campo}' no puede estar vacío"
            )

    return UsuarioService.registrar_usuario(usuario.dict())

# ============================================
#              NUEVA RUTA LOGIN
# ============================================
class LoginIn(BaseModel):
    usuario: str
    contrasena: str

@router.post("/login")
async def login(datos: LoginIn):
    resultado = UsuarioService.login(datos.usuario, datos.contrasena)

    if resultado.get("usuario"):
        return resultado

    raise HTTPException(status_code=401, detail="Credenciales incorrectas")
