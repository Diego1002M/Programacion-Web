# models.py
from pydantic import BaseModel
from enum import Enum
from typing import Optional

# Definimos los tipos de incidentes (basado en tu mockup image_e664fb.png)
# Esto asegura que solo se puedan reportar estos tipos
class TipoIncidente(str, Enum):
    robo = "Robo"
    extorsion = "Extorsión"
    homicidio = "Homicidio"
    accidente_vial = "Accidente Vial"
    violencia_genero = "Violencia de Género"
    secuestro = "Secuestro"

# --- Modelos de Usuario ---

# Modelo para CREAR un usuario (lo que recibimos en el registro)
# Basado en tu mockup image_e60aab.png
class UsuarioBase(BaseModel):
    nombres: str
    apellidos: str
    dni: str
    correo: str
    celular: str
    contrasena: str # Tu mockup no la tenía, pero es esencial para el registro

# Modelo para DEVOLVER un usuario (lo que enviamos al cliente)
# Nota: NUNCA devolvemos la contraseña
class Usuario(BaseModel):
    id: int
    nombres: str
    apellidos: str
    dni: str
    correo: str
    celular: str

# Modelo para el Login (basado en tu mockup image_63d73f.jpg)
class LoginData(BaseModel):
    correo: str
    contrasena: str

# --- Modelos de Incidente ---

# Modelo para REPORTAR un incidente (lo que recibimos del usuario)
class IncidenteBase(BaseModel):
    tipo: TipoIncidente  # Usamos el Enum para validar
    descripcion: Optional[str] = None # Opcional
    latitud: float  # Necesitamos la ubicación
    longitud: float # Necesitamos la ubicación

# Modelo para DEVOLVER un incidente (lo que enviamos al cliente)
class Incidente(BaseModel):
    id: int
    tipo: TipoIncidente
    descripcion: Optional[str] = None
    latitud: float
    longitud: float
    fecha_hora: str
    id_usuario: int
    estado: str = "reportado"