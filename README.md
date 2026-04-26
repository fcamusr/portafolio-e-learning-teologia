# Portafolio E-learning de Teología

Aplicación fullstack orientada al aprendizaje progresivo de Biblia y teología evangélica. El proyecto busca combinar una experiencia de estudio clara y amigable con una base técnica bien documentada, mantenible y extensible.

Además de su propósito funcional, este repositorio también sirve como portafolio profesional para demostrar criterios de ingeniería de software, organización de arquitectura, documentación técnica y buenas prácticas de desarrollo.

## Resumen del proyecto

- Backend: Django
- Frontend: Next.js
- Base de datos: PostgreSQL
- Arquitectura: backend y frontend separados dentro del mismo repositorio
- Estado actual: base técnica inicial operativa, con backend configurado, frontend creado y documentación estructurada

## Estado actual

Hoy el repositorio contiene una base sólida sobre la cual seguir construyendo:

- Un proyecto Django funcional en `backend/`
- Un modelo de usuario personalizado en `backend/apps/users/models.py`
- Configuración de PostgreSQL mediante variables de entorno
- Un frontend Next.js con App Router en `frontend/`
- Una estructura documental en `docs/` para setup, arquitectura, API, base de datos y decisiones técnicas

Todavía no existen endpoints de negocio ni una interfaz funcional del producto. La documentación distingue explícitamente entre lo implementado y lo planificado para evitar ambigüedades.

## Estructura del repositorio

```text
Portafolio/
|-- backend/
|-- frontend/
|-- docs/
|-- .gitignore
`-- README.md
```

- `backend/`: proyecto Django, configuración, modelos y futura API
- `frontend/`: aplicación Next.js y futura interfaz de usuario
- `docs/`: documentación técnica y operativa del proyecto

## Primeros pasos

1. Revisa los prerrequisitos en [docs/setup/prerequisites.md](./docs/setup/prerequisites.md).
2. Configura el backend siguiendo [backend/README.md](./backend/README.md).
3. Configura el frontend siguiendo [frontend/README.md](./frontend/README.md).
4. Completa las variables de entorno usando `backend/.env.example` y `frontend/.env.example`.
5. Ejecuta ambos servicios con la guía de [docs/setup/run-project.md](./docs/setup/run-project.md).

## Documentación

La documentación del proyecto está organizada por dominios:

- [docs/README.md](./docs/README.md): mapa general de la documentación
- [docs/setup/README.md](./docs/setup/README.md): instalación, configuración y ejecución local
- [docs/architecture/README.md](./docs/architecture/README.md): contexto, estructura y criterios de arquitectura
- [docs/database/README.md](./docs/database/README.md): modelos, migraciones y lineamientos de datos
- [docs/api/README.md](./docs/api/README.md): estado y diseño previsto de la API
- [docs/decisions/README.md](./docs/decisions/README.md): decisiones técnicas registradas

## Seguridad y configuración

Los archivos con secretos reales no se versionan. La configuración local se define mediante archivos de entorno:

- `backend/.env`
- `frontend/.env.local`

Los archivos `*.env.example` sí se mantienen en el repositorio como referencia de configuración.

## Objetivo documental

La documentación de este proyecto se mantiene como documentación viva. Cada cambio relevante en estructura, setup, arquitectura o contratos técnicos debería reflejarse en los documentos correspondientes.
