# Documentación del proyecto

Esta carpeta reúne la documentación técnica y operativa del repositorio. Su propósito es ayudar a entender el sistema, configurarlo localmente y mantener trazabilidad sobre decisiones relevantes.

## Cómo está organizada

- [setup/README.md](./setup/README.md): instalación, variables de entorno y ejecución local
- [architecture/README.md](./architecture/README.md): contexto del producto, estructura y criterios de diseño
- [database/README.md](./database/README.md): estado de la base de datos, modelos y lineamientos operativos
- [api/README.md](./api/README.md): estado actual y diseño previsto de la API
- [decisions/README.md](./decisions/README.md): decisiones técnicas registradas como ADRs

## Principios editoriales

La documentación de este proyecto sigue estas reglas:

- Debe describir con claridad lo que existe hoy.
- Debe diferenciar sin ambigüedad lo implementado de lo planificado.
- Debe priorizar instrucciones útiles para otra persona que entre al proyecto.
- Debe actualizarse junto con cambios de arquitectura, setup, datos o contratos técnicos.

## Orden de lectura recomendado

### Si es tu primera vez en el proyecto

1. [../README.md](../README.md)
2. [setup/README.md](./setup/README.md)
3. [architecture/README.md](./architecture/README.md)
4. [database/README.md](./database/README.md)
5. [api/README.md](./api/README.md)
6. [decisions/README.md](./decisions/README.md)

### Si quieres levantar el proyecto localmente

1. [setup/prerequisites.md](./setup/prerequisites.md)
2. [setup/environment-variables.md](./setup/environment-variables.md)
3. [setup/database.md](./setup/database.md)
4. [setup/backend.md](./setup/backend.md)
5. [setup/frontend.md](./setup/frontend.md)
6. [setup/run-project.md](./setup/run-project.md)
7. [setup/troubleshooting.md](./setup/troubleshooting.md)

### Si quieres entender la solución técnica

1. [architecture/system-context.md](./architecture/system-context.md)
2. [architecture/overview.md](./architecture/overview.md)
3. [architecture/modules.md](./architecture/modules.md)
4. [architecture/backend-frontend-communication.md](./architecture/backend-frontend-communication.md)
5. [architecture/folder-structure.md](./architecture/folder-structure.md)
6. [architecture/scalability.md](./architecture/scalability.md)

### Si quieres entender los datos del sistema

1. [database/overview.md](./database/overview.md)
2. [database/models.md](./database/models.md)
3. [database/relationships.md](./database/relationships.md)
4. [database/migrations.md](./database/migrations.md)
5. [database/indexes.md](./database/indexes.md)
6. [database/seed-data.md](./database/seed-data.md)

### Si quieres revisar la API prevista

1. [api/overview.md](./api/overview.md)
2. [api/authentication.md](./api/authentication.md)
3. [api/users.md](./api/users.md)
4. [api/courses.md](./api/courses.md)
5. [api/lessons.md](./api/lessons.md)
6. [api/quizzes.md](./api/quizzes.md)
7. [api/progress.md](./api/progress.md)
8. [api/certificates.md](./api/certificates.md)
9. [api/errors.md](./api/errors.md)
10. [api/status-codes.md](./api/status-codes.md)

### Si quieres entender por qué se tomaron ciertas decisiones

1. [decisions/README.md](./decisions/README.md)
2. [decisions/0001-use-django.md](./decisions/0001-use-django.md)
3. [decisions/0002-use-nextjs.md](./decisions/0002-use-nextjs.md)
4. [decisions/0003-use-postgresql.md](./decisions/0003-use-postgresql.md)
5. [decisions/0004-separate-backend-frontend.md](./decisions/0004-separate-backend-frontend.md)
6. [decisions/0005-use-apps-folder.md](./decisions/0005-use-apps-folder.md)
