# routers/usuarios.py
from fastapi import APIRouter, HTTPException, status
# Importamos los modelos y la BD de los archivos hermanos
from models import UsuarioBase, Usuario, LoginData
from database import db_usuarios, get_next_user_id

# 'tags' agrupa las rutas en la documentación de /docs
router = APIRouter(tags=["Usuarios"])

# --- REGISTRO DE NUEVO USUARIO ---
# Responde al POST en /api/usuarios
@router.post("/usuarios", response_model=Usuario, status_code=status.HTTP_201_CREATED)
async def registrar_usuario(usuario: UsuarioBase):
    # Verificamos si el DNI o correo ya existen
    for u in db_usuarios:
        if u["dni"] == usuario.dni:
            raise HTTPException(status_code=400, detail="El DNI ya está registrado")
        if u["correo"] == usuario.correo:
            raise HTTPException(status_code=400, detail="El correo ya está registrado")

    # (En un proyecto real, aquí encriptaríamos la contraseña)
    contrasena_hash = usuario.contrasena + "_hash" # Simulación

    # Creamos el nuevo usuario (como diccionario para la BD)
    nuevo_usuario_db = {
        "id": get_next_user_id(),
        "nombres": usuario.nombres,
        "apellidos": usuario.apellidos,
        "dni": usuario.dni,
        "correo": usuario.correo,
        "celular": usuario.celular,
        "contrasena_hash": contrasena_hash
    }
    
    db_usuarios.append(nuevo_usuario_db)
    
    # Devolvemos un modelo Usuario (Pydantic) sin la contraseña
    usuario_respuesta = Usuario(**nuevo_usuario_db)
    
    return usuario_respuesta

# --- LOGIN DE USUARIO ---
# Responde al POST en /api/login
@router.post("/login", tags=["Autenticación"])
async def login(login_data: LoginData):
    # Buscamos al usuario por correo
    usuario_encontrado = None
    for u in db_usuarios:
        if u["correo"] == login_data.correo:
            usuario_encontrado = u
            break
            
    if not usuario_encontrado:
        raise HTTPException(status_code=404, detail="Usuario o contraseña incorrectos")

    # (En un proyecto real, aquí compararíamos la contraseña encriptada)
    if (login_data.contrasena + "_hash") != usuario_encontrado["contrasena_hash"]:
        raise HTTPException(status_code=404, detail="Usuario o contraseña incorrectos")

    # (En un proyecto real, aquí generaríamos un Token JWT)
    return {"mensaje": "Login exitoso", "token": "este_es_un_token_falso_jwt"}

# --- OBTENER TODOS LOS USUARIOS (Ruta de Admin) ---
@router.get("/usuarios", response_model=list[Usuario])
async def obtener_usuarios():
    # Devolvemos una lista de modelos Usuario (Pydantic), no los dict de la BD
    return [Usuario(**u) for u in db_usuarios]

# --- OBTENER UN USUARIO POR ID ---
@router.get("/usuarios/{id}", response_model=Usuario)
async def obtener_usuario_por_id(id: int):
    for u in db_usuarios:
        if u["id"] == id:
            return Usuario(**u)
    raise HTTPException(status_code=404, detail="Usuario no encontrado")