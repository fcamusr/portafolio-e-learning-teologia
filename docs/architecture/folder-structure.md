# Estructura de carpetas

Este documento describe la organizacion actual del repositorio y la responsabilidad de cada seccion principal.

## Estructura general

```text
Portafolio/
|-- backend/
|-- frontend/
|-- docs/
|-- .gitignore
`-- README.md
```

## Backend

```text
backend/
|-- apps/
|   |-- core/
|   |-- learning/
|   `-- users/
|-- config/
|-- .env.example
|-- manage.py
|-- requirements.txt
`-- README.md
```

- `apps/`: apps locales del proyecto
- `apps/core/`: endpoints transversales como verificaciones tecnicas de salud
- `apps/learning/`: nucleo inicial del dominio del MVP; hoy ya incluye `Course`, `Unit`, `Lesson` y `LessonProgress`
- `apps/users/`: dominio de usuarios y modelo de usuario personalizado
- `config/`: configuracion principal de Django
- `.env.example`: plantilla de configuracion local

## Frontend

```text
frontend/
|-- public/
|-- src/
|   |-- app/
|   `-- lib/
|       `-- api.js
|-- .env.example
|-- eslint.config.mjs
|-- jsconfig.json
|-- next.config.mjs
|-- package.json
`-- README.md
```

- `src/app/`: rutas, layout y pagina principal de Next.js
- `src/lib/`: logica compartida del frontend
- `src/lib/api.js`: acceso reutilizable a endpoints del backend
- `public/`: activos estaticos
- `.env.example`: plantilla de configuracion del frontend

## Documentacion

```text
docs/
|-- api/
|-- architecture/
|-- database/
|-- decisions/
|-- progress/
|-- setup/
`-- README.md
```

Cada subcarpeta documenta una dimension distinta del proyecto para evitar mezclar contenido operativo con contenido arquitectonico.

- `progress/`: bitacora de avance del proyecto para retomar trabajo y registrar hitos

## Archivos y carpetas locales que no deben versionarse

- `backend/.env`
- `backend/.venv/`
- `frontend/.env.local`
- `frontend/node_modules/`
- `frontend/.next/`

## Regla de mantenimiento

Si la estructura principal del repositorio cambia, este documento debe actualizarse en la misma tarea.
