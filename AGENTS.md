# AGENTS del proyecto Portafolio

## Objetivo del proyecto
Este repositorio es un portafolio fullstack orientado a aprendizaje serio y perfil profesional.
El producto principal es una plataforma e-learning de teologia evangelica construida para aprender ingenieria de software mientras se desarrolla un producto real.

La prioridad no es solo hacer que funcione, sino construir una base tecnica clara, mantenible, bien documentada y presentable como portafolio profesional.

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
  - configuracion por variables de entorno
  - base API inicial con `GET /api/health/`
- El frontend ya tiene:
  - Next.js con App Router
  - JavaScript, no TypeScript
  - estructura en `frontend/src/app/` y `frontend/src/lib/`
  - primera conexion real con el backend desde `frontend/src/app/page.js`
- La documentacion ya esta organizada y debe tratarse como documentacion viva.

No asumas que existen endpoints de negocio, flujos completos de producto o modulos avanzados si aun no estan implementados.

## Arquitectura obligatoria
- Mantener separacion clara entre backend, frontend, base de datos y documentacion.
- Mantener enfoque de monolito modular en el backend.
- Evitar sobreingenieria y capas artificiales.
- Respetar la separacion de responsabilidades:
  - backend = logica de negocio, datos, autenticacion, API
  - frontend = experiencia de usuario, navegacion, consumo del backend
- No introducir nuevas tecnologias, frameworks o patrones grandes sin solicitud explicita o justificacion solida.

## Forma de trabajar en este repo
Antes de implementar, revisa que areas toca la tarea:

1. backend
2. frontend
3. base de datos
4. variables de entorno
5. contratos API
6. documentacion

Reglas de ejecucion:

- Prefiere cambios pequenos, seguros y revisables.
- Si el cambio es mediano o grande, presenta primero un plan breve.
- No cambies arquitectura, nombres importantes o estructura de carpetas sin explicar el motivo.
- Si detectas una mala practica, dilo con claridad y propone una alternativa mejor.
- Si una suposicion puede afectar el diseno o el resultado, indicala explicitamente.
- Si un cambio impacta codigo y documentacion, actualiza ambas en la misma tarea por defecto.

## Calidad esperada
- Prioriza legibilidad, mantenibilidad y valor formativo.
- Usa nombres descriptivos.
- Evita duplicacion innecesaria.
- Respeta el estilo ya existente del repositorio.
- No sobreingenierices.
- Si una refactorizacion no aporta valor claro hoy, no la hagas.

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
  1. usala en el codigo correspondiente,
  2. agregala al archivo `.env.example` correcto,
  3. documentala en `docs/setup/environment-variables.md`,
  4. y ajusta el README correspondiente si afecta setup diario.

## Documentacion obligatoria
La documentacion no es un extra. Si el cambio altera comportamiento, setup, arquitectura, datos, API o flujo de trabajo, actualizala dentro de la misma tarea salvo que el usuario indique lo contrario.

### Regla de encoding

Si detectas problemas de encoding con acentos o caracteres especiales, usa ASCII simple en los cambios nuevos.

Reglas:

- evita acentos si ves riesgo de mojibake o texto corrupto;
- prefiere palabras como `configuracion`, `integracion` o `tecnica` en vez de usar tildes si hay duda;
- no introduzcas caracteres especiales solo por estilo;
- si corriges documentacion danada por encoding, prioriza dejarla legible y estable aunque quede sin acentos.

### Regla obligatoria sobre diagramas

Cuando una implementacion real de codigo obliga a actualizar documentacion, revisa tambien los archivos `DIAGRAMS.md` relacionados con esa misma area antes de cerrar la tarea.

Reglas:

- no asumas que los diagramas siguen correctos solo porque el texto ya fue actualizado;
- si un diagrama, su lectura rapida o su seccion de limites queda desalineada con el estado real, corrigelo en la misma tarea;
- si el cambio toca varias capas, revisa tanto los `DIAGRAMS.md` locales como los de `docs/` que describen esa integracion;
- si un diagrama sigue siendo valido sin cambios, confirmalo durante la revision en vez de ignorarlo.

### README principales
- `backend/DIAGRAMS.md` y `frontend/DIAGRAMS.md`
  - Revisar y actualizar si cambia el estado real de integracion, estructura o responsabilidades visibles de cada capa.
- `README.md`
  - Actualizar si cambia la vision general, el stack, el estado del proyecto, la estructura del repo o el quickstart.
- `backend/README.md`
  - Actualizar si cambia el setup del backend, sus dependencias, comandos, modulos clave o responsabilidades.
- `frontend/README.md`
  - Actualizar si cambia el setup del frontend, scripts, integracion con backend o estructura principal.

### `docs/setup/`
- `docs/setup/DIAGRAMS.md`
  - Actualizar si cambia el flujo real de configuracion, verificacion local o secuencia recomendada de arranque.
- `docs/setup/README.md`
  - Actualizar si cambian los pasos recomendados de instalacion o el orden de lectura.
- `docs/setup/prerequisites.md`
  - Actualizar si cambian versiones minimas, herramientas requeridas o dependencias del entorno local.
- `docs/setup/environment-variables.md`
  - Actualizar cuando se agreguen, eliminen o cambien variables de entorno del backend o frontend.
- `docs/setup/database.md`
  - Actualizar si cambia la creacion de base de datos, credenciales esperadas, migraciones o flujo de conexion.
- `docs/setup/backend.md`
  - Actualizar si cambian instalacion, comandos, dependencias o pasos de arranque del backend.
- `docs/setup/frontend.md`
  - Actualizar si cambian instalacion, scripts, build o pasos de arranque del frontend.
- `docs/setup/run-project.md`
  - Actualizar si cambia la secuencia para levantar backend y frontend juntos.
- `docs/setup/troubleshooting.md`
  - Actualizar si aparece un error recurrente de entorno, puertos, migraciones, dependencias o variables mal configuradas.

### `docs/architecture/`
- `docs/architecture/DIAGRAMS.md`
  - Actualizar si cambia la estructura real, los servicios expuestos o la integracion entre frontend, backend y base de datos.
- `docs/architecture/README.md`
  - Actualizar si cambia el mapa de documentos o el orden recomendado de lectura.
- `docs/architecture/system-context.md`
  - Actualizar si cambia el problema que resuelve el producto, actores relevantes o alcance funcional.
- `docs/architecture/overview.md`
  - Actualizar si cambia la vision general de la solucion, sus piezas principales o su relacion.
- `docs/architecture/modules.md`
  - Actualizar si aparecen nuevos modulos, apps, dominios o responsabilidades importantes.
- `docs/architecture/backend-frontend-communication.md`
  - Actualizar si cambia como se comunican Django y Next.js, o si cambian autenticacion, contratos, CORS, CSRF o flujo de datos.
- `docs/architecture/folder-structure.md`
  - Actualizar si cambian carpetas relevantes, convenciones estructurales o ubicacion de piezas importantes.
- `docs/architecture/scalability.md`
  - Actualizar si una decision se toma pensando en crecimiento, rendimiento, modularidad futura o limites del sistema.

### `docs/database/`
- `docs/database/DIAGRAMS.md`
  - Actualizar si cambian modelos, relaciones o el estado real del dominio persistido.
- `docs/database/README.md`
  - Actualizar si cambia el mapa documental del area de datos.
- `docs/database/overview.md`
  - Actualizar si cambia el estado general del modelo de datos o su estrategia.
- `docs/database/models.md`
  - Actualizar cuando se agreguen o cambien modelos, campos o entidades relevantes.
- `docs/database/relationships.md`
  - Actualizar cuando cambien relaciones entre entidades.
- `docs/database/migrations.md`
  - Actualizar cuando un cambio de esquema requiera explicar estrategia, orden o impacto de migraciones.
- `docs/database/indexes.md`
  - Actualizar si se agregan indices, constraints relevantes o decisiones de rendimiento sobre base de datos.
- `docs/database/seed-data.md`
  - Actualizar si se agregan fixtures, seeds o criterios para datos iniciales o de prueba.

### `docs/api/`
- `docs/api/DIAGRAMS.md`
  - Actualizar si cambia el flujo real de consumo API, los endpoints ya implementados o la relacion entre estado actual y planificado.
- `docs/api/README.md`
  - Actualizar si cambia el mapa de documentos del area API.
- `docs/api/overview.md`
  - Actualizar si cambia el estado general de la API, su alcance o convenciones base.
- `docs/api/authentication.md`
  - Actualizar si cambia autenticacion, autorizacion, sesiones, tokens o permisos.
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
  - Actualizar si cambia la convencion de codigos de estado usados por la API.

### `docs/progress/`
- `docs/progress/DIAGRAMS.md`
  - Actualizar si cambia el hito real alcanzado, la madurez por area o el tablero de trabajo documentado.
- `docs/progress/README.md`
  - Actualizar cuando cambie el estado real del proyecto, se cierre un avance importante, se agregue un hito con fecha o cambie el siguiente paso recomendado.

### `docs/decisions/`
- `docs/decisions/README.md`
  - Actualizar si se agrega una nueva ADR o cambia la forma de registrar decisiones.
- `docs/decisions/0001-use-django.md`
  - Referencia historica: no reescribir salvo que se aclare contexto o consecuencias.
- `docs/decisions/0002-use-nextjs.md`
  - Referencia historica: no reescribir salvo que se aclare contexto o consecuencias.
- `docs/decisions/0003-use-postgresql.md`
  - Referencia historica: no reescribir salvo que se aclare contexto o consecuencias.
- `docs/decisions/0004-separate-backend-frontend.md`
  - Referencia historica: no reescribir salvo que se aclare contexto o consecuencias.
- `docs/decisions/0005-use-apps-folder.md`
  - Referencia historica: no reescribir salvo que se aclare contexto o consecuencias.

Si se toma una decision nueva, significativa y de largo plazo, crea una nueva ADR en `docs/decisions/` con numeracion correlativa `0006-...`, `0007-...`, etc.

## Como crear nueva documentacion cuando haga falta
Si el documento correcto no existe, no fuerces la informacion en un archivo incorrecto.

Reglas:

1. Crea el archivo nuevo dentro de la seccion mas especifica posible de `docs/`.
2. Si nace una nueva familia de documentos, crea una nueva carpeta bajo `docs/` con su `README.md`.
3. Enlaza cualquier archivo nuevo desde el `README.md` de su seccion.
4. Si la nueva seccion es transversal, enlazala tambien desde `docs/README.md`.
5. Si la nueva pieza cambia el estado acumulado del proyecto, actualiza tambien `docs/progress/README.md`.
6. Usa nombres claros y orientados al tema, por ejemplo:
   - `docs/api/enrollments.md`
   - `docs/architecture/rendering-strategy.md`
   - `docs/setup/deployment-local.md`
7. No crees carpetas nuevas si una carpeta existente ya cubre bien el tema.

## Uso eficiente de tokens
Optimiza tokens sin empobrecer el resultado.

Reglas:

- Se conciso por defecto y profundiza solo cuando la tarea lo requiera.
- No repitas el contexto del usuario ni resumenes redundantes.
- Lee primero los archivos realmente relevantes antes de abrir mas contexto.
- Si muchos archivos comparten patron, resume el patron y detalla solo los impactados.
- En planes y cierres, prioriza informacion de alto valor:
  - que cambio,
  - por que,
  - archivos tocados,
  - riesgos,
  - verificacion,
  - documentacion actualizada.
- No sacrifiques exactitud, validacion, advertencias importantes o documentacion correcta por ahorrar tokens.

## Que significa "terminado"
Una tarea se considera bien hecha cuando:

1. resuelve el problema pedido;
2. respeta la arquitectura del proyecto;
3. no introduce complejidad innecesaria;
4. deja claros los pasos de validacion;
5. actualiza la documentacion necesaria o identifica con precision que faltaria;
6. deja explicitos riesgos, supuestos o impactos relevantes.

## Cierre esperado al terminar una tarea
Al cerrar una tarea, entrega de forma breve:

1. que cambio;
2. que archivos se tocaron;
3. como verificarlo;
4. que documentacion se actualizo o debe actualizarse;
5. riesgos pendientes;
6. un mensaje de commit pequeno y profesional cuando tenga sentido.
