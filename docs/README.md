# Documentacion del proyecto

## Proposito

Esta carpeta reune la documentacion tecnica, funcional y operativa del repositorio. Su objetivo es ayudar a entender que se esta construyendo, como esta organizado, como se valida y que riesgos o decisiones condicionan el avance.

## Alcance

`docs/` es el mapa principal de conocimiento del proyecto. Cada subcarpeta tiene un rol distinto y debe evitar duplicar informacion que ya tiene una fuente de verdad definida.

## Que contiene cada carpeta

- [setup/README.md](./setup/README.md): instalacion, entorno local, variables y ejecucion
- [product/README.md](./product/README.md): vision funcional, alcance, requerimientos, reglas de negocio y criterios de aceptacion
- [architecture/README.md](./architecture/README.md): estructura general, limites y criterios de diseno
- [database/README.md](./database/README.md): modelos, relaciones, migraciones e indices
- [api/README.md](./api/README.md): contratos, endpoints y convenciones HTTP
- [quality/README.md](./quality/README.md): QA, validacion y criterios de cierre
- [risks/README.md](./risks/README.md): riesgos, mitigaciones y seguimiento
- [progress/README.md](./progress/README.md): avance real, bitacora y punto de reentrada
- [decisions/README.md](./decisions/README.md): decisiones tecnicas registradas
- [templates/README.md](./templates/README.md): formatos reutilizables para documentar sin burocracia

## Fuente principal de verdad por tema

- Vision, alcance, requerimientos y criterios de aceptacion: [product/README.md](./product/README.md)
- Arquitectura general y estructura tecnica: [architecture/README.md](./architecture/README.md)
- Modelo de datos: [database/README.md](./database/README.md)
- Contratos y endpoints: [api/README.md](./api/README.md)
- Instalacion y configuracion local: [setup/README.md](./setup/README.md)
- Validacion y definicion de cierre: [quality/README.md](./quality/README.md)
- Riesgos abiertos y mitigaciones: [risks/README.md](./risks/README.md)
- Seguimiento y estado del proyecto: [progress/README.md](./progress/README.md)
- Decisiones tecnicas de largo plazo: [decisions/README.md](./decisions/README.md)
- Formatos base: [templates/README.md](./templates/README.md)

## Cuando usar cada tipo de documento

- Usa `product/` cuando debas responder que se quiere construir, para quien y con que criterio funcional.
- Usa `architecture/` cuando debas responder como se organiza tecnicamente la solucion.
- Usa `database/` cuando debas responder como se modelan o evolucionan los datos.
- Usa `api/` cuando debas responder como se comunican frontend y backend.
- Usa `quality/` cuando debas responder como validar un cambio y que evidencia pedir.
- Usa `risks/` cuando debas responder que puede salir mal o que necesita mitigacion activa.
- Usa `progress/` cuando debas responder en que estado real va el proyecto y que sigue.
- Usa `decisions/` cuando debas responder por que se eligio un enfoque tecnico.
- Usa `templates/` cuando necesites crear documentacion nueva con formato consistente.

## Como evitar repeticion

- Si un tema ya esta explicado en su fuente principal, resume en una o dos lineas y enlaza.
- No copies requerimientos funcionales en `quality/`; enlaza `product/`.
- No copies detalle de endpoints en `quality/` o `progress/`; enlaza `api/`.
- No copies relaciones o migraciones en `risks/`; enlaza `database/`.
- No copies decisiones completas en `risk-register`; enlaza `decisions/`.

## Como mantener trazabilidad

Una ruta recomendada de trazabilidad para cambios funcionales es:

1. necesidad o alcance en `product/`
2. impacto estructural en `architecture/`
3. contrato en `api/`
4. modelo o migracion en `database/` si aplica
5. decision en `decisions/` si el cambio es duradero
6. validacion y evidencia en `quality/`
7. riesgo en `risks/` si existe incertidumbre relevante
8. hito o seguimiento en `progress/`

## Principios editoriales

- Debe describir con claridad lo que existe hoy.
- Debe diferenciar sin ambiguedad lo implementado de lo planificado.
- Debe priorizar instrucciones utiles para otra persona que entre al proyecto.
- Debe actualizarse junto con cambios de arquitectura, setup, datos o contratos tecnicos.

## Orden de lectura recomendado

### Si es tu primera vez en el proyecto

1. [../README.md](../README.md)
2. [setup/README.md](./setup/README.md)
3. [product/README.md](./product/README.md)
4. [architecture/README.md](./architecture/README.md)
5. [database/README.md](./database/README.md)
6. [api/README.md](./api/README.md)
7. [quality/README.md](./quality/README.md)
8. [risks/README.md](./risks/README.md)
9. [decisions/README.md](./decisions/README.md)

### Si quieres levantar el proyecto localmente

1. [setup/prerequisites.md](./setup/prerequisites.md)
2. [setup/environment-variables.md](./setup/environment-variables.md)
3. [setup/database.md](./setup/database.md)
4. [setup/backend.md](./setup/backend.md)
5. [setup/frontend.md](./setup/frontend.md)
6. [setup/run-project.md](./setup/run-project.md)
7. [setup/troubleshooting.md](./setup/troubleshooting.md)

### Si quieres retomar rapidamente el proyecto

1. [progress/README.md](./progress/README.md)
2. [../README.md](../README.md)
3. [product/overview.md](./product/overview.md)
4. [api/overview.md](./api/overview.md)
5. [quality/qa-strategy.md](./quality/qa-strategy.md)
6. [risks/risk-register.md](./risks/risk-register.md)
7. [setup/run-project.md](./setup/run-project.md)

### Si quieres entender el producto

1. [product/README.md](./product/README.md)
2. [product/overview.md](./product/overview.md)
3. [product/users.md](./product/users.md)
4. [product/mvp.md](./product/mvp.md)
5. [product/requirements.md](./product/requirements.md)
6. [product/acceptance-criteria.md](./product/acceptance-criteria.md)
7. [product/user-flows.md](./product/user-flows.md)
8. [product/roadmap.md](./product/roadmap.md)

### Si quieres entender la solucion tecnica

1. [architecture/system-context.md](./architecture/system-context.md)
2. [architecture/overview.md](./architecture/overview.md)
3. [architecture/modules.md](./architecture/modules.md)
4. [architecture/backend-frontend-communication.md](./architecture/backend-frontend-communication.md)
5. [architecture/folder-structure.md](./architecture/folder-structure.md)
6. [architecture/scalability.md](./architecture/scalability.md)
7. [risks/risk-register.md](./risks/risk-register.md)

### Si quieres revisar la API actual y prevista

1. [api/overview.md](./api/overview.md)
2. [api/health.md](./api/health.md)
3. [api/authentication.md](./api/authentication.md)
4. [api/users.md](./api/users.md)
5. [api/courses.md](./api/courses.md)
6. [api/lessons.md](./api/lessons.md)
7. [api/quizzes.md](./api/quizzes.md)
8. [api/progress.md](./api/progress.md)
9. [api/certificates.md](./api/certificates.md)
10. [api/errors.md](./api/errors.md)
11. [api/status-codes.md](./api/status-codes.md)
12. [quality/qa-strategy.md](./quality/qa-strategy.md)

### Si quieres revisar calidad y cierre de tareas

1. [quality/README.md](./quality/README.md)
2. [quality/qa-strategy.md](./quality/qa-strategy.md)
3. [quality/backend-checklist.md](./quality/backend-checklist.md)
4. [quality/frontend-checklist.md](./quality/frontend-checklist.md)
5. [quality/acceptance-checklist.md](./quality/acceptance-checklist.md)
6. [product/acceptance-criteria.md](./product/acceptance-criteria.md)

### Si quieres revisar riesgos y mitigaciones

1. [risks/README.md](./risks/README.md)
2. [risks/risk-matrix.md](./risks/risk-matrix.md)
3. [risks/risk-register.md](./risks/risk-register.md)
4. [decisions/README.md](./decisions/README.md)
5. [progress/README.md](./progress/README.md)

### Si quieres entender por que se tomaron ciertas decisiones

1. [decisions/README.md](./decisions/README.md)
2. [decisions/0001-use-django.md](./decisions/0001-use-django.md)
3. [decisions/0002-use-nextjs.md](./decisions/0002-use-nextjs.md)
4. [decisions/0003-use-postgresql.md](./decisions/0003-use-postgresql.md)
5. [decisions/0004-separate-backend-frontend.md](./decisions/0004-separate-backend-frontend.md)
6. [decisions/0005-use-apps-folder.md](./decisions/0005-use-apps-folder.md)
7. [templates/decision-record-template.md](./templates/decision-record-template.md)

## Ultima actualizacion

2026-05-18
