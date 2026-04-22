# Estructura de carpetas

Este documento registra la estructura actual del proyecto.

La estructura busca separar responsabilidades entre backend, frontend, documentación, configuración y archivos de control de versiones.

## Estructura general

```text
Portafolio/
├── backend/
├── frontend/
├── docs/
├── .gitignore
└── README.md
Backend
backend/
├── .venv/
├── apps/
│   └── users/
├── config/
├── .env
├── .env.example
├── .gitignore
├── manage.py
├── README.md
└── requirements.txt
Frontend
frontend/
├── .next/
├── node_modules/
├── public/
├── src/
├── .env.example
├── .env.local
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
└── README.md
Documentación
docs/
├── api/
│   ├── authentication.md
│   ├── certificates.md
│   ├── courses.md
│   ├── errors.md
│   ├── lessons.md
│   ├── overview.md
│   ├── progress.md
│   ├── quizzes.md
│   ├── README.md
│   ├── status-codes.md
│   └── users.md
├── architecture/
│   ├── backend-frontend-communication.md
│   ├── folder-structure.md
│   ├── modules.md
│   ├── overview.md
│   ├── README.md
│   ├── scalability.md
│   └── system-context.md
├── database/
│   ├── indexes.md
│   ├── migrations.md
│   ├── models.md
│   ├── overview.md
│   ├── README.md
│   ├── relationships.md
│   └── seed-data.md
├── decisions/
│   ├── 0001-use-django.md
│   ├── 0002-use-nextjs.md
│   ├── 0003-use-postgresql.md
│   ├── 0004-separate-backend-frontend.md
│   ├── 0005-use-apps-folder.md
│   └── README.md
├── setup/
│   ├── backend.md
│   ├── database.md
│   ├── environment-variables.md
│   ├── frontend.md
│   ├── prerequisites.md
│   ├── README.md
│   ├── run-project.md
│   └── troubleshooting.md
└── README.md
Criterio de organización

backend/ contiene Django, la lógica de negocio, modelos, configuración del backend y futura API.

frontend/ contiene Next.js, la interfaz de usuario y el consumo de datos desde el backend.

docs/ contiene la documentación viva del proyecto.

backend/apps/ contiene las aplicaciones locales de Django.

Archivos que no deben subirse

Estos archivos o carpetas no deben versionarse:

backend/.env
backend/.venv/
frontend/.env.local
frontend/node_modules/
frontend/.next/
Archivos que sí deben subirse

Estos archivos sí deben versionarse:

backend/.env.example
frontend/.env.example
README.md
backend/README.md
frontend/README.md
docs/
Regla

Si se agrega una carpeta importante al proyecto, este documento debe actualizarse.