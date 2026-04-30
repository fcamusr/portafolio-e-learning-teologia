# AGENTS del proyecto Portafolio

## Objetivo del proyecto
Este repositorio es un portafolio fullstack orientado a aprendizaje serio y perfil profesional.
El producto principal es una plataforma e-learning de teología evangélica construida para aprender ingeniería de software mientras se desarrolla un producto real.

La prioridad no es solo hacer que funcione, sino construir una base técnica clara, mantenible, bien documentada y presentable como portafolio profesional.

## Estado actual del repositorio
Antes de proponer cambios, parte de estas realidades del proyecto:

- Arquitectura separada dentro del mismo repo:
  - `backend/` = Django como backend/API principal
  - `frontend/` = Next.js como frontend
  - PostgreSQL = base de datos principal
- El backend ya tiene:
  - proyecto Django funcional en `backend/config/`
  - app local `users` en `backend/apps/users/`
  - app local `core` en `backend/apps/core/`
  - modelo de usuario personalizado
  - configuración por variables de entorno
  - base API inicial con `GET /api/health/`
- El frontend ya tiene:
  - Next.js con App Router
  - JavaScript, no TypeScript
  - estructura en `frontend/src/app/` y `frontend/src/lib/`
  - primera conexión real con el backend desde `frontend/src/app/page.js`
- La documentación ya está organizada y debe tratarse como documentación viva.

No asumas que existen endpoints de negocio, flujos completos de producto o módulos avanzados si aún no están implementados.

## Arquitectura obligatoria
- Mantener separación clara entre backend, frontend, base de datos y documentación.
- Mantener enfoque de monolito modular en el backend.
- Evitar sobreingeniería y capas artificiales.
- Respetar la separación de responsabilidades:
  - backend = lógica de negocio, datos, autenticación, API
  - frontend = experiencia de usuario, navegación, consumo del backend
- No introducir nuevas tecnologías, frameworks o patrones grandes sin solicitud explícita o justificación sólida.

## Forma de trabajar en este repo
Antes de implementar, revisa qué áreas toca la tarea:

1. backend
2. frontend
3. base de datos
4. variables de entorno
5. contratos API
6. documentación

Reglas de ejecución:

- Prefiere cambios pequeños, seguros y revisables.
- Si el cambio es mediano o grande, presenta primero un plan breve.
- No cambies arquitectura, nombres importantes o estructura de carpetas sin explicar el motivo.
- Si detectas una mala práctica, dilo con claridad y propone una alternativa mejor.
- Si una suposición puede afectar el diseño o el resultado, indícala explícitamente.
- Si un cambio impacta código y documentación, actualiza ambas en la misma tarea por defecto.

## Calidad esperada
- Prioriza legibilidad, mantenibilidad y valor formativo.
- Usa nombres descriptivos.
- Evita duplicación innecesaria.
- Respeta el estilo ya existente del repositorio.
- No sobreingenierices.
- Si una refactorización no aporta valor claro hoy, no la hagas.

## Variables de entorno y secretos
- Nunca subir secretos reales al repositorio.
- Backend:
  - real: `backend/.env`
  - plantilla versionable: `backend/.env.example`
- Frontend:
  - real: `frontend/.env.local`
  - plantilla versionable: `frontend/.env.example`
- No hardcodear claves, tokens, credenciales ni URLs sensibles.
- Si agregas una nueva variable:
  1. úsala en el código correspondiente,
  2. agrégala al archivo `.env.example` correcto,
  3. documéntala en `docs/setup/environment-variables.md`,
  4. y ajusta el README correspondiente si afecta setup diario.

## Documentación obligatoria
La documentación no es un extra. Si el cambio altera comportamiento, setup, arquitectura, datos, API o flujo de trabajo, actualízala dentro de la misma tarea salvo que el usuario indique lo contrario.

### README principales
- `README.md`
  - Actualizar si cambia la visión general, el stack, el estado del proyecto, la estructura del repo o el quickstart.
- `backend/README.md`
  - Actualizar si cambia el setup del backend, sus dependencias, comandos, módulos clave o responsabilidades.
- `frontend/README.md`
  - Actualizar si cambia el setup del frontend, scripts, integración con backend o estructura principal.

### `docs/setup/`
- `docs/setup/README.md`
  - Actualizar si cambian los pasos recomendados de instalación o el orden de lectura.
- `docs/setup/prerequisites.md`
  - Actualizar si cambian versiones mínimas, herramientas requeridas o dependencias del entorno local.
- `docs/setup/environment-variables.md`
  - Actualizar cuando se agreguen, eliminen o cambien variables de entorno del backend o frontend.
- `docs/setup/database.md`
  - Actualizar si cambia la creación de base de datos, credenciales esperadas, migraciones o flujo de conexión.
- `docs/setup/backend.md`
  - Actualizar si cambian instalación, comandos, dependencias o pasos de arranque del backend.
- `docs/setup/frontend.md`
  - Actualizar si cambian instalación, scripts, build o pasos de arranque del frontend.
- `docs/setup/run-project.md`
  - Actualizar si cambia la secuencia para levantar backend y frontend juntos.
- `docs/setup/troubleshooting.md`
  - Actualizar si aparece un error recurrente de entorno, puertos, migraciones, dependencias o variables mal configuradas.

### `docs/architecture/`
- `docs/architecture/README.md`
  - Actualizar si cambia el mapa de documentos o el orden recomendado de lectura.
- `docs/architecture/system-context.md`
  - Actualizar si cambia el problema que resuelve el producto, actores relevantes o alcance funcional.
- `docs/architecture/overview.md`
  - Actualizar si cambia la visión general de la solución, sus piezas principales o su relación.
- `docs/architecture/modules.md`
  - Actualizar si aparecen nuevos módulos, apps, dominios o responsabilidades importantes.
- `docs/architecture/backend-frontend-communication.md`
  - Actualizar si cambia cómo se comunican Django y Next.js, o si cambian autenticación, contratos, CORS, CSRF o flujo de datos.
- `docs/architecture/folder-structure.md`
  - Actualizar si cambian carpetas relevantes, convenciones estructurales o ubicación de piezas importantes.
- `docs/architecture/scalability.md`
  - Actualizar si una decisión se toma pensando en crecimiento, rendimiento, modularidad futura o límites del sistema.

### `docs/database/`
- `docs/database/README.md`
  - Actualizar si cambia el mapa documental del área de datos.
- `docs/database/overview.md`
  - Actualizar si cambia el estado general del modelo de datos o su estrategia.
- `docs/database/models.md`
  - Actualizar cuando se agreguen o cambien modelos, campos o entidades relevantes.
- `docs/database/relationships.md`
  - Actualizar cuando cambien relaciones entre entidades.
- `docs/database/migrations.md`
  - Actualizar cuando un cambio de esquema requiera explicar estrategia, orden o impacto de migraciones.
- `docs/database/indexes.md`
  - Actualizar si se agregan índices, constraints relevantes o decisiones de rendimiento sobre base de datos.
- `docs/database/seed-data.md`
  - Actualizar si se agregan fixtures, seeds o criterios para datos iniciales o de prueba.

### `docs/api/`
- `docs/api/README.md`
  - Actualizar si cambia el mapa de documentos del área API.
- `docs/api/overview.md`
  - Actualizar si cambia el estado general de la API, su alcance o convenciones base.
- `docs/api/authentication.md`
  - Actualizar si cambia autenticación, autorización, sesiones, tokens o permisos.
- `docs/api/users.md`
  - Actualizar si cambian endpoints o contratos del dominio de usuarios.
- `docs/api/courses.md`
  - Actualizar si cambian endpoints o contratos del dominio de cursos.
- `docs/api/lessons.md`
  - Actualizar si cambian endpoints o contratos del dominio de lecciones.
- `docs/api/quizzes.md`
  - Actualizar si cambian endpoints o contratos del dominio de evaluaciones.
- `docs/api/progress.md`
  - Actualizar si cambian endpoints o contratos del dominio de progreso.
- `docs/api/certificates.md`
  - Actualizar si cambian endpoints o contratos del dominio de certificados o logros.
- `docs/api/errors.md`
  - Actualizar si cambia el formato de errores, validaciones o manejo de fallos HTTP.
- `docs/api/status-codes.md`
  - Actualizar si cambia la convención de códigos de estado usados por la API.

### `docs/progress/`
- `docs/progress/README.md`
  - Actualizar cuando cambie el estado real del proyecto, se cierre un avance importante, se agregue un hito con fecha o cambie el siguiente paso recomendado.

### `docs/decisions/`
- `docs/decisions/README.md`
  - Actualizar si se agrega una nueva ADR o cambia la forma de registrar decisiones.
- `docs/decisions/0001-use-django.md`
  - Referencia histórica: no reescribir salvo que se aclare contexto o consecuencias.
- `docs/decisions/0002-use-nextjs.md`
  - Referencia histórica: no reescribir salvo que se aclare contexto o consecuencias.
- `docs/decisions/0003-use-postgresql.md`
  - Referencia histórica: no reescribir salvo que se aclare contexto o consecuencias.
- `docs/decisions/0004-separate-backend-frontend.md`
  - Referencia histórica: no reescribir salvo que se aclare contexto o consecuencias.
- `docs/decisions/0005-use-apps-folder.md`
  - Referencia histórica: no reescribir salvo que se aclare contexto o consecuencias.

Si se toma una decisión nueva, significativa y de largo plazo, crea una nueva ADR en `docs/decisions/` con numeración correlativa `0006-...`, `0007-...`, etc.

## Cómo crear nueva documentación cuando haga falta
Si el documento correcto no existe, no fuerces la información en un archivo incorrecto.

Reglas:

1. Crea el archivo nuevo dentro de la sección más específica posible de `docs/`.
2. Si nace una nueva familia de documentos, crea una nueva carpeta bajo `docs/` con su `README.md`.
3. Enlaza cualquier archivo nuevo desde el `README.md` de su sección.
4. Si la nueva sección es transversal, enlázala también desde `docs/README.md`.
5. Si la nueva pieza cambia el estado acumulado del proyecto, actualiza también `docs/progress/README.md`.
6. Usa nombres claros y orientados al tema, por ejemplo:
   - `docs/api/enrollments.md`
   - `docs/architecture/rendering-strategy.md`
   - `docs/setup/deployment-local.md`
7. No crees carpetas nuevas si una carpeta existente ya cubre bien el tema.

## Uso eficiente de tokens
Optimiza tokens sin empobrecer el resultado.

Reglas:

- Sé conciso por defecto y profundiza solo cuando la tarea lo requiera.
- No repitas el contexto del usuario ni resúmenes redundantes.
- Lee primero los archivos realmente relevantes antes de abrir más contexto.
- Si muchos archivos comparten patrón, resume el patrón y detalla solo los impactados.
- En planes y cierres, prioriza información de alto valor:
  - qué cambió,
  - por qué,
  - archivos tocados,
  - riesgos,
  - verificación,
  - documentación actualizada.
- No sacrifiques exactitud, validación, advertencias importantes o documentación correcta por ahorrar tokens.

## Qué significa "terminado"
Una tarea se considera bien hecha cuando:

1. resuelve el problema pedido;
2. respeta la arquitectura del proyecto;
3. no introduce complejidad innecesaria;
4. deja claros los pasos de validación;
5. actualiza la documentación necesaria o identifica con precisión qué faltaría;
6. deja explícitos riesgos, supuestos o impactos relevantes.

## Cierre esperado al terminar una tarea
Al cerrar una tarea, entrega de forma breve:

1. qué cambió;
2. qué archivos se tocaron;
3. cómo verificarlo;
4. qué documentación se actualizó o debe actualizarse;
5. riesgos pendientes;
6. un mensaje de commit pequeño y profesional cuando tenga sentido.
