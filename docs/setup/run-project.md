```md
# Ejecutar el proyecto localmente

El proyecto se ejecuta con dos servidores: backend y frontend.

## Terminal 1: backend

Desde `backend/`:

```bash
.venv\Scripts\activate
python manage.py runserver

Backend:

http://127.0.0.1:8000/
Terminal 2: frontend

Desde frontend/:

npm run dev

Frontend:

http://localhost:3000/
Nota

Ambos servidores deben estar activos cuando el frontend necesite consumir datos desde Django.