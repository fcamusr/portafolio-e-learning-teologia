```md
# Configuración de base de datos

El proyecto usa PostgreSQL como base de datos principal.

## Base de datos local

Nombre usado en desarrollo:

```text
portafolio_db
Herramienta gráfica

Se puede usar pgAdmin para crear y revisar la base de datos.

Configuración en Django

La conexión se define en backend/config/settings.py, idealmente usando variables de entorno.

Campos principales:

ENGINE
NAME
USER
PASSWORD
HOST
PORT
Nota importante

No se debe subir a GitHub la contraseña real de la base de datos.

La estructura de variables debe documentarse en .env.example.