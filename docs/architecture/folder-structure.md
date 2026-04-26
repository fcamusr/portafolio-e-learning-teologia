# Estructura de carpetas

Este documento describe la organización actual del repositorio y la responsabilidad de cada sección principal.

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
|   `-- users/
|-- config/
|-- .env.example
|-- manage.py
|-- requirements.txt
`-- README.md
```

- `apps/`: apps locales del proyecto
- `config/`: configuración principal de Django
- `.env.example`: plantilla de configuración local

## Frontend

```text
frontend/
|-- public/
|-- src/
|   `-- app/
|-- .env.example
|-- eslint.config.mjs
|-- jsconfig.json
|-- next.config.mjs
|-- package.json
`-- README.md
```

- `src/app/`: rutas y layout principal de Next.js
- `public/`: activos estáticos
- `.env.example`: plantilla de configuración del frontend

## Documentación

```text
docs/
|-- api/
|-- architecture/
|-- database/
|-- decisions/
|-- setup/
`-- README.md
```

Cada subcarpeta documenta una dimensión distinta del proyecto para evitar mezclar contenido operativo con contenido arquitectónico.

## Archivos y carpetas locales que no deben versionarse

- `backend/.env`
- `backend/.venv/`
- `frontend/.env.local`
- `frontend/node_modules/`
- `frontend/.next/`

## Regla de mantenimiento

Si la estructura principal del repositorio cambia, este documento debe actualizarse en la misma tarea.
