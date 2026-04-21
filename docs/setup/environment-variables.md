`docs/setup/environment-variables.md`

Este archivo es importante porque evita subir secretos a GitHub.

Contenido inicial:

```md id="nv7uat"
# Variables de entorno

El proyecto utiliza archivos de entorno para manejar configuraciones sensibles.

## Backend

El backend utiliza un archivo:

```txt
backend/.env

Ejemplo:

SECRET_KEY=your_secret_key
DEBUG=True
DATABASE_NAME=your_database_name
DATABASE_USER=your_database_user
DATABASE_PASSWORD=your_database_password
DATABASE_HOST=localhost
DATABASE_PORT=5432
Frontend

El frontend utiliza un archivo:

frontend/.env.local

Ejemplo:

NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api
Importante

Los archivos .env y .env.local no deben subirse al repositorio.


También puedes crear:

```txt id="dn37g6"
backend/.env.example
frontend/.env.example

Esos sí se pueden subir a GitHub.