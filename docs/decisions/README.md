Documentación de decisiones técnicas
docs/
└── decisions/
    ├── README.md
    ├── 0001-use-django.md
    ├── 0002-use-nextjs.md
    ├── 0003-use-postgresql.md
    ├── 0004-separate-backend-frontend.md
    ├── 0005-use-apps-folder.md
    └── 0006-use-celery-for-background-tasks.md

Esto se conoce muchas veces como ADR: Architecture Decision Records.

Cada archivo explica una decisión.

Ejemplo:

# 0004 - Separar backend y frontend

## Contexto

El proyecto necesita una arquitectura cercana a aplicaciones reales, donde el backend gestione datos y reglas de negocio, y el frontend se encargue de la experiencia de usuario.

## Decisión

Se separa el proyecto en dos carpetas principales:

- backend/
- frontend/

## Consecuencias

Ventajas:

- Separación clara de responsabilidades.
- Mayor escalabilidad.
- Facilita despliegues separados.

Desventajas:

- Mayor complejidad inicial.
- Requiere configurar CORS.
- Requiere manejar comunicación HTTP entre ambas partes.

Este tipo de documentación es excelente para tu crecimiento porque te obliga a pensar como ingeniero.