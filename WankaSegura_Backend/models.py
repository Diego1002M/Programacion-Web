# models.py
from pydantic import BaseModel
from enum import Enum
from typing import Optional

# Usamos Enum para los tipos de incidentes (basado en tu mockup)
# Esto asegura que solo se puedan reportar estos tipos
class TipoIncidente(str, Enum):
    robo = "Robo"
    extorsion = "Extorsión"
    homicidio = "Homicidio"
    accidente_vial = "Accidente Vial"
    violencia_genero = "Violencia de Género"
    venta_drogas = "Venta de Drogas"

# --- Modelos de Usuario ---

# Modelo para crear un usuario (lo que recibimos en el registro)
# Basado en tu mockup de registro (image_e60aab.png)
class UsuarioBase(BaseModel):
    nombres: str
    apellidos: str
    dni: str
    correo: str
    celular: str
    contrasena: str

# Modelo para devolver un usuario (lo que enviamos al cliente)
# Nota: NUNCA devolvemos la contraseña
class Usuario(BaseModel):
    id: int
    nombres: str
    apellidos: str
    dni: str
    correo: str
    celular: str

# Modelo para el Login
class LoginData(BaseModel):
    correo: str
    contrasena: str

# --- Modelos de Incidente ---

# Modelo para reportar un incidente (lo que recibimos del usuario)
class IncidenteBase(BaseModel):
    tipo: TipoIncidente  # Usamos el Enum
    descripcion: Optional[str] = None
    latitud: float
    longitud: float

# Modelo para devolver un incidente (lo que enviamos al cliente)
class Incidente(BaseModel):
    id: int
    tipo: TipoIncidente
    descripcion: Optional[str] = None
    latitud: float
    longitud: float
    fecha_hora: str
    id_usuario: int
    estado: str = "reportado"