# database/models.py
from sqlalchemy import Column, Integer, String, Float, ForeignKey
from .conexion import Base  # Importamos la Base de conexion.py

# Modelo (tabla) de Usuarios
class Usuario(Base):
    __tablename__ = "usuarios"  # Nombre exacto de la tabla en SQL

    # Define las columnas
    id = Column(Integer, primary_key=True, index=True)
    nombres = Column(String(100))
    apellidos = Column(String(100))
    dni = Column(String(8), unique=True, index=True)
    correo = Column(String(100), unique=True, index=True)
    celular = Column(String(15))
    contrasena_hash = Column(String(255)) # Guardamos la contraseña encriptada

# Modelo (tabla) de Alertas
class Alerta(Base):
    __tablename__ = "alertas"

    id = Column(Integer, primary_key=True, index=True)
    tipo = Column(String(50))
    descripcion = Column(String(255))
    latitud = Column(Float)
    longitud = Column(Float)
    id_usuario = Column(Integer, ForeignKey("usuarios.id")) # Llave foránea