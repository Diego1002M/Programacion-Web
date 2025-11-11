# src/services/usuario_service.py
import asyncio

class UsuarioService:
    _usuarios = []

    @classmethod
    async def obtener_usuarios(cls):
        await asyncio.sleep(0)
        return cls._usuarios

    @classmethod
    async def registrar_usuario(cls, data: dict):
        nuevo = {
            "id": len(cls._usuarios) + 1,
            "nombre": data.get("nombre"),
            "apellido": data.get("apellido"),
            "usuario": data.get("usuario"),
            "contrasena": data.get("contrasena"),
        }
        cls._usuarios.append(nuevo)
        await asyncio.sleep(0)
        return {"mensaje": "Usuario registrado correctamente", "usuario": nuevo}
