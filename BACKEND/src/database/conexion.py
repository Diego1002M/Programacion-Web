# database/conexion.py
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# --- ¡ESTA ES LA LÍNEA CLAVE! ---
# Aquí pones tu usuario (root), tu contraseña (1234),
# y tu base de datos (wankaseguradb).
DATABASE_URL = "mysql+pymysql://root:1234@127.0.0.1/wankaseguradb"
# ------------------------------------

# Crea el "motor" (engine) de la base de datos
engine = create_engine(DATABASE_URL)

# Crea una "fábrica" de sesiones (para hablar con la BD)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Crea una "Base" que tus modelos de datos usarán
Base = declarative_base()