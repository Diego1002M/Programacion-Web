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
            INSERT INTO usuarios (nombre, apellido, usuario, contrasena, dni, celular)
            VALUES (%s, %s, %s, %s, %s, %s)
        """

        values = (
            data["nombre"],
            data["apellido"],
            data["usuario"],
            data["contrasena"],
            data["dni"],
            data["celular"],
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

    # =========================
    #         LOGIN
    # =========================
    @classmethod
    def login(cls, usuario: str, contrasena: str):
        conn = get_connection()
        if not conn:
            return {"error": "No se pudo conectar a la BD"}

        cursor = conn.cursor(dictionary=True)

        sql = """
            SELECT * FROM usuarios 
            WHERE usuario = %s AND contrasena = %s
        """

        cursor.execute(sql, (usuario, contrasena))
        resultado = cursor.fetchone()

        cursor.close()
        conn.close()

        if resultado:
            return {
                "mensaje": "Login correcto",
                "usuario": resultado
            }

        return {"mensaje": "Credenciales incorrectas"}
