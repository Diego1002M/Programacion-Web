from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.apis import usuarios
from src.apis import alertas

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rutas
app.include_router(alertas.router, prefix="/api", tags=["Alertas"])
app.include_router(usuarios.router, prefix="/api", tags=["Usuarios"])

@app.get("/")
def root():
    return {"mensaje": "API funcionando correctamente"}
