# database.py

# --- Base de Datos Temporal de Usuarios ---
# (Pre-cargamos un usuario para pruebas)
db_usuarios = [
    {
        "id": 1,
        "nombres": "Juan Diego",
        "apellidos": "Berrocal",
        "dni": "12345678",
        "correo": "juan@correo.com",
        "celular": "987654321",
        "contrasena_hash": "secreto123_hash" # Simulación de contraseña encriptada
    }
]
_next_user_id = 2

# --- Base de Datos Temporal de Incidentes ---
db_incidentes = []
_next_incident_id = 1

# --- Funciones de Ayuda para generar IDs ---

def get_next_user_id():
    global _next_user_id
    id = _next_user_id
    _next_user_id += 1
    return id

def get_next_incident_id():
    global _next_incident_id
    id = _next_incident_id
    _next_incident_id += 1
    return id