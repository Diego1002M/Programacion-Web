import pyodbc

def get_connection():
    try:
        connection = pyodbc.connect(
            "DRIVER={ODBC Driver 18 for SQL Server};"
            "SERVER=DESKTOP-GR8UAER\\SQLEXPRESS;"
            "DATABASE=dipli_db;"
            "UID=backend_user;"
            "PWD=12345;"
            "Encrypt=no;"
        )
        print("✅ Conectado correctamente a SQL Server.")
        return connection
    except Exception as e:
        print("❌ Error al conectar a SQL Server:", e)
        return None
    