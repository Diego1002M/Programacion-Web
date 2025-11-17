# services/usuario_service.py
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

# --- ¡LOS IMPORTS CORRECTOS! ---
# (Sin ".." y sin "src.")
import schemas
from apis import usuarios as api_usuarios
from database import conexion, models
# ---------------------------------

router = APIRouter(tags=["Usuarios"])

def get_db():
    db = conexion.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/usuarios", response_model=schemas.Usuario, status_code=status.HTTP_201_CREATED)
def crear_nuevo_usuario(
    usuario: schemas.UsuarioCreate, 
    db: Session = Depends(get_db)
):
    db_usuario_correo = api_usuarios.get_usuario_by_correo(db, correo=usuario.correo)
    db_usuario_dni = api_usuarios.get_usuario_by_dni(db, dni=usuario.dni)
    
    if db_usuario_correo:
        raise HTTPException(status_code=400, detail="El correo ya está registrado")
    if db_usuario_dni:
        raise HTTPException(status_code=400, detail="El DNI ya está registrado")
    
    return api_usuarios.create_usuario(db=db, usuario=usuario)

@router.get("/usuarios/{id}", response_model=schemas.Usuario)
def obtener_usuario_por_id(id: int, db: Session = Depends(get_db)):
    usuario = api_usuarios.get_usuario_by_id(db, usuario_id=id)
    if usuario is None:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    return usuario