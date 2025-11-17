from src.database.conexion import get_connection

class UsuarioService:

    @classmethod
    def obtener_usuarios(cls):
        conn = get_connection()
        if not conn:
            return []

        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM usuarios")
        resultado = cursor.fetchall()

        cursor.close()
        conn.close()
        return resultado

    @classmethod
    def registrar_usuario(cls, data: dict):
        conn = get_connection()
        if not conn:
            return {"error": "No se pudo conectar a la BD"}

        cursor = conn.cursor()
        sql = """
            INSERT INTO usuarios (nombre, apellido, usuario, contrasena)
            VALUES (%s, %s, %s, %s)
        """
        values = (
            data["nombre"],
            data["apellido"],
            data["usuario"],
            data["contrasena"],
        )

        cursor.execute(sql, values)
        conn.commit()

        new_id = cursor.lastrowid

        cursor.close()
        conn.close()

        return {
            "mensaje": "Usuario registrado correctamente",
            "usuario": {**data, "id": new_id}
        }
