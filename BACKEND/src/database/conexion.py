# Modificación completa para usar el conector de MySQL
import mysql.connector
from mysql.connector import Error
# Dentro de database/conexion.py
# ...
database="dipli_db", # <--- Asegúrate que este nombre coincida con la DB que creaste.
# ...

def get_connection():
    try:
        # Los parámetros de conexión son diferentes para MySQL
        connection = mysql.connector.connect(
            host="localhost",           # Generalmente es 'localhost' si MySQL Workbench está en tu máquina
            database="nombre_de_tu_db_mysql", # ¡IMPORTANTE! Cambia esto al nombre de tu base de datos en MySQL
            user="root",    # Generalmente 'root' o un usuario que creaste
            password="continental",   # La contraseña de ese usuario
            port=3306                   # Puerto estándar de MySQL
        )
        if connection.is_connected():
            print("✅ Conectado correctamente a MySQL.")
            return connection
        else:
            print("❌ No se pudo establecer la conexión a MySQL.")
            return None
    except Error as e:
        print(f"❌ Error al conectar a MySQL: {e}")
        return None