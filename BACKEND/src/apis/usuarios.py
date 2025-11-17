# apis/usuarios.py
from sqlalchemy.orm import Session

# --- ¡LOS IMPORTS CORRECTOS! ---
# (Sin ".." y sin "src.")
from database import models
import schemas
# ---------------------------------

def get_usuario_by_correo(db: Session, correo: str):
    return db.query(models.Usuario).filter(models.Usuario.correo == correo).first()

def get_usuario_by_dni(db: Session, dni: str):
    return db.query(models.Usuario).filter(models.Usuario.dni == dni).first()

def get_usuario_by_id(db: Session, usuario_id: int):
    return db.query(models.Usuario).filter(models.Usuario.id == usuario_id).first()

def create_usuario(db: Session, usuario: schemas.UsuarioCreate):
    hashed_password = usuario.contrasena + "_hash_real" 
    
    db_usuario = models.Usuario(
        nombres=usuario.nombres,
        apellidos=usuario.apellidos,
        dni=usuario.dni,
        correo=usuario.correo,
        celular=usuario.celular,
        contrasena_hash=hashed_password
    )
    db.add(db_usuario)
    db.commit()
    db.refresh(db_usuario)
    return db_usuario