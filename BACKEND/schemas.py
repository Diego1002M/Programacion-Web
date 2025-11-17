# schemas.py
from pydantic import BaseModel
from typing import Optional

# --- Schemas de Usuario ---

# "Molde" para crear un usuario (lo que recibimos de la API)
class UsuarioCreate(BaseModel):
    nombres: str
    apellidos: str
    dni: str
    correo: str
    celular: str
    contrasena: str

# "Molde" para devolver un usuario (lo que enviamos desde la API)
class Usuario(BaseModel):
    id: int
    nombres: str
    apellidos: str
    dni: str
    correo: str
    celular: str

    class Config:
        from_attributes = True # Esto es para Pydantic v2 (usa orm_mode = True si es v1)

# --- Schemas de Alerta ---

class AlertaCreate(BaseModel):
    tipo: str
    descripcion: Optional[str] = None
    latitud: float
    longitud: float

class Alerta(BaseModel):
    id: int
    tipo: str
    descripcion: Optional[str] = None
    latitud: float
    longitud: float
    id_usuario: int

    class Config:
        from_attributes = True # Esto es para Pydantic v2 (usa orm_mode = True si es v1)