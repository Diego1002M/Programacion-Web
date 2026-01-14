from src.database.conexion import get_connection
from datetime import datetime

class AlertaService:

    @classmethod
    def obtener_alertas(cls):
        conn = get_connection()
        if not conn:
            return []

        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM alertas ORDER BY id DESC")
        resultado = cursor.fetchall()

        for r in resultado:
            if "timestamp" in r and r["timestamp"]:
                dt = r["timestamp"]
                r["fecha"] = dt.strftime("%Y-%m-%d")
                r["hora"] = dt.strftime("%H:%M:%S")

        cursor.close()
        conn.close()
        return resultado


    @classmethod
    def registrar_alerta(cls, data: dict):
        conn = get_connection()
        if not conn:
            return {"error": "No se pudo conectar a la BD"}

        cursor = conn.cursor()

        sql = """
            INSERT INTO alertas (tipo, descripcion, origen, ubicacion, timestamp)
            VALUES (%s, %s, %s, %s, %s)
        """

        timestamp = datetime.now()

        values = (
            data["tipo"],
            data["descripcion"],
            data["origen"],
            data.get("ubicacion", "No registrada"),
            timestamp
        )

        cursor.execute(sql, values)
        conn.commit()
        new_id = cursor.lastrowid

        cursor.close()
        conn.close()

        return {
            "mensaje": "Alerta registrada correctamente",
            "alerta": {
                "id": new_id,
                **data,
                "timestamp": timestamp
            }
        }


    @classmethod
    def eliminar_alerta(cls, id: int):
        conn = get_connection()
        if not conn:
            return {"error": "No se pudo conectar a la BD"}

        cursor = conn.cursor()
        cursor.execute("DELETE FROM alertas WHERE id = %s", (id,))
        conn.commit()

        cursor.close()
        conn.close()

        return {"mensaje": "Alerta eliminada correctamente"}


    @classmethod
    def editar_alerta(cls, id: int, data: dict):
        conn = get_connection()
        if not conn:
            return {"error": "No se pudo conectar a la BD"}

        cursor = conn.cursor()

        sql = """
            UPDATE alertas
            SET tipo = %s, descripcion = %s, origen = %s, ubicacion = %s
            WHERE id = %s
        """

        values = (
            data["tipo"],
            data["descripcion"],
            data["origen"],
            data.get("ubicacion", "No registrada"),
            id
        )

        cursor.execute(sql, values)
        conn.commit()

        cursor.close()
        conn.close()

        return {"mensaje": "Alerta actualizada correctamente"}
