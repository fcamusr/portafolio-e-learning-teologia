docs/setup/run-project.md

Este archivo explica cómo levantar todo el sistema.

Contenido inicial:

# Ejecutar el proyecto completo

Para ejecutar el proyecto en local se deben levantar dos servidores:

- Backend Django
- Frontend Next.js

## Ejecutar backend

Desde la carpeta `backend`:

```bash
python manage.py runserver

El backend queda disponible en:

http://127.0.0.1:8000
Ejecutar frontend

Desde la carpeta frontend:

npm run dev

El frontend queda disponible en:

http://localhost:3000

Este archivo es útil para el “día a día”.