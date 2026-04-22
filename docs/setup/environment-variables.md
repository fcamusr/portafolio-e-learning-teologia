```md
# Variables de entorno

El proyecto usa variables de entorno para separar configuración sensible del código fuente.

## Regla principal

Los archivos reales de entorno no deben subirse a GitHub.

Los archivos `.env.example` sí deben versionarse porque sirven como plantilla de configuración.

## Backend

Archivo real:

```text
backend/.env

Archivo versionable:

backend/.env.example
Variables del backend
SECRET_KEY=change-me
DEBUG=True
ALLOWED_HOSTS=127.0.0.1,localhost

DB_NAME=portafolio_db
DB_USER=postgres
DB_PASSWORD=your-db-password
DB_HOST=localhost
DB_PORT=5432
Significado de las variables del backend

SECRET_KEY es la clave secreta de Django. No debe compartirse ni subirse al repositorio.

DEBUG controla si Django se ejecuta en modo desarrollo.

ALLOWED_HOSTS define qué hosts pueden servir la aplicación.

DB_NAME indica el nombre de la base de datos PostgreSQL.

DB_USER indica el usuario de PostgreSQL.

DB_PASSWORD indica la contraseña del usuario de PostgreSQL.

DB_HOST indica el host donde corre PostgreSQL.

DB_PORT indica el puerto de PostgreSQL.

Frontend

Archivo real:

frontend/.env.local

Archivo versionable:

frontend/.env.example
Variables del frontend
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
Significado de las variables del frontend

NEXT_PUBLIC_API_BASE_URL define la URL base del backend Django.

El prefijo NEXT_PUBLIC_ indica que la variable puede estar disponible en el navegador.

Nota de seguridad

No usar el prefijo NEXT_PUBLIC_ para secretos, contraseñas, tokens privados o claves sensibles.