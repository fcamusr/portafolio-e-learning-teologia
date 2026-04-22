# Portafolio E-learning de Teología

Aplicación web fullstack orientada al aprendizaje progresivo de Biblia y teología evangélica.

El objetivo del proyecto es construir una plataforma e-learning profunda, amigable e innovadora, donde los usuarios puedan aprender, practicar, reflexionar, evaluar su progreso y aplicar lo aprendido a la vida cristiana.

Este proyecto también funciona como portafolio profesional para demostrar habilidades en desarrollo fullstack, arquitectura de software, documentación, buenas prácticas, seguridad básica, Git/GitHub y trabajo con bases de datos.

## Stack principal

- Backend: Django
- Frontend: Next.js
- Base de datos: PostgreSQL
- Lenguajes: Python, JavaScript, HTML y CSS
- Control de versiones: Git y GitHub

## Estructura general

```text
Portafolio/
├── backend/
├── frontend/
├── docs/
├── .gitignore
└── README.md
Arquitectura general

El proyecto usa arquitectura separada:

Django funciona como backend principal y futura API.
Next.js funciona como frontend.
PostgreSQL almacena los datos.
La comunicación entre frontend y backend se realizará mediante HTTP/API.
Estado actual
Backend Django creado.
PostgreSQL conectado.
Servidor Django probado.
Frontend Next.js creado con App Router.
Servidor Next.js probado.
App local users creada en backend/apps/users.
Modelo User personalizado creado heredando de AbstractUser.
Documentación base creada en docs/.
Repositorio subido a GitHub.
Documentación

La documentación del proyecto está en la carpeta docs/.

Archivos principales:

docs/setup/: instalación, configuración y ejecución.
docs/architecture/: arquitectura y decisiones técnicas.
docs/database/: modelos, relaciones y migraciones.
docs/api/: endpoints y contratos de API.
docs/decisions/: decisiones importantes del proyecto.
Seguridad básica

Los archivos reales de entorno no se suben a GitHub.

Se versionan archivos .env.example para mostrar la estructura esperada de configuración sin exponer secretos.

Objetivo profesional

Este proyecto busca demostrar capacidad para construir una aplicación fullstack real, documentada, mantenible y pensada con criterios de ingeniería de software.