import asyncio
from datetime import datetime

class AlertaService:
    _alertas = []

    @classmethod
    async def obtener_alertas(cls):
        # simula operación async
        await asyncio.sleep(0)
        return cls._alertas

    @classmethod
    async def crear_alerta(cls, alerta: dict):
        alerta_record = {
            "id": len(cls._alertas) + 1,
            "tipo": alerta.get("tipo"),
            "descripcion": alerta.get("descripcion"),
            "origen": alerta.get("origen"),
            "timestamp": datetime.utcnow().isoformat() + "Z"
        }
        cls._alertas.append(alerta_record)
        await asyncio.sleep(0)
        return {"mensaje": "Alerta registrada", "alerta": alerta_record}
