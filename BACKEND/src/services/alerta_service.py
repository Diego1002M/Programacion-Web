from src.database.conexion import get_connection
from datetime import datetime

class AlertaService:

    @classmethod
    def obtener_alertas(cls):
        conn = get_connection()
        if not conn:
            return []

        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM alertas")
        resultado = cursor.fetchall()

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
            INSERT INTO alertas (tipo, descripcion, origen, timestamp)
            VALUES (%s, %s, %s, %s)
        """

        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        values = (
            data["tipo"],
            data["descripcion"],
            data["origen"],
            timestamp
        )

        cursor.execute(sql, values)
        conn.commit()

        new_id = cursor.lastrowid

        cursor.close()
        conn.close()

        return {
            "mensaje": "Alerta registrada correctamente",
            "alerta": {**data, "id": new_id, "timestamp": timestamp}
        }
