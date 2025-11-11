from database.conexion import get_connection

conn = get_connection()
if conn:
    cursor = conn.cursor()
    # Cambiamos la consulta SQL de @@VERSION a la función MySQL VERSION()
    cursor.execute("SELECT VERSION();") 
    print(cursor.fetchone())
    cursor.close() # Siempre es buena práctica cerrar el cursor también
    conn.close()