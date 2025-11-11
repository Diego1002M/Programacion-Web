from database.conexion import get_connection

conn = get_connection()
if conn:
    cursor = conn.cursor()
    cursor.execute("SELECT @@VERSION;")
    print(cursor.fetchone())
    conn.close()
