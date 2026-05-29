# Avance del proyecto

## Fecha de creacion del documento

2026-04-29

## Objetivo

Este documento funciona como bitacora de avance del proyecto.

Su proposito es permitir retomar el trabajo rapidamente cuando necesites recordar:

- en que punto quedo el proyecto
- que ya esta construido
- que cambios recientes se realizaron
- que deberia seguir despues

Referencia visual complementaria: [DIAGRAMS.md](./DIAGRAMS.md).

## Estado actual resumido

Hoy el proyecto ya cuenta con:

- backend Django funcional
- frontend Next.js funcional
- PostgreSQL conectado al backend
- modelo de usuario personalizado
- documentacion base organizada por setup, producto, arquitectura, API, base de datos, calidad, riesgos, decisiones y plantillas
- base API inicial en Django REST Framework
- primer endpoint `GET /api/health/`
- primera conexion real entre frontend y backend
- nucleo inicial del dominio implementado en `learning`
- diagramas documentales por area para explicar arquitectura, producto, API, datos, riesgos, calidad, decisiones y avance
- flujo objetivo del MVP documentado: curso inicial unico, ruta de aprendizaje, unidades, clases de texto, progreso, quiz, desbloqueo, login y registro
- primera exposicion del dominio `learning` por API con `GET /api/courses/`

Todavia no existe una interfaz funcional del producto final ni una API de dominio completa. El proyecto sigue en construccion activa.

## Avances anteriores sin fecha exacta

Estos avances se registran sin fecha porque ya estaban construidos antes de crear esta bitacora y no se recuerda el dia exacto.

### Base del repositorio y entorno

- Se creo la estructura principal `Portafolio/` con `backend/`, `frontend/` y `docs/`.
- Se preparo el entorno virtual del backend.
- Se inicializo el repositorio Git y el proyecto fue subido correctamente a GitHub.
- Los archivos reales de entorno quedaron ignorados y los archivos `.env.example` quedaron listos para versionarse.

### Backend base

- Se creo el proyecto Django dentro de `backend/`.
- PostgreSQL quedo conectado al backend y el servidor fue probado correctamente.
- `settings.py` fue configurado para cargar variables desde `backend/.env` usando `python-dotenv`.
- Se instalaron y prepararon las dependencias base del backend.

### Frontend base

- Se creo el proyecto Next.js dentro de `frontend/`.
- El frontend usa JavaScript, ESLint, estructura `src/` y App Router.
- No se agrego Tailwind.
- El servidor del frontend fue probado correctamente.

### Dominio inicial de usuarios

- Se creo la app local `users` en `backend/apps/users/`.
- El modelo `User` hereda de `AbstractUser`.
- `UsersConfig` usa `apps.users`.
- La app fue registrada en `INSTALLED_APPS`.
- `AUTH_USER_MODEL` quedo configurado como `users.User`.

### Documentacion y estructura de trabajo

- Se crearon `README.md` de raiz, backend y frontend.
- Se prepararon `backend/.env`, `frontend/.env.local`, `backend/.env.example` y `frontend/.env.example`.
- Se prepararon `.gitignore` en raiz, backend y frontend.
- Se creo la estructura `docs/` para setup, arquitectura, API, base de datos y decisiones.
- Se dejaron listos los archivos `AGENTS.md` en raiz, backend y frontend para guiar el trabajo con Codex.

## Avances con fecha confirmada

### 2026-04-28

#### Backend listo como base API

- Se instalaron `djangorestframework` y `django-cors-headers`.
- Django quedo preparado para exponer API y responder solicitudes desde `http://localhost:3000`.
- Se registro la configuracion base de CORS para desarrollo local.
- Se creo la app `core` en `backend/apps/core/`.
- Se implemento el primer endpoint `GET /api/health/`.
- El backend quedo respondiendo como API usando Django REST Framework.

### 2026-04-29

#### Primera conexion real entre frontend y backend

- El frontend comenzo a consumir el backend Django.
- Se uso `NEXT_PUBLIC_API_BASE_URL` como URL base del backend.
- Se creo `frontend/src/lib/api.js` con la funcion `getHealth()`.
- `frontend/src/app/page.js` paso a consultar `GET /api/health/` desde un Server Component.
- La pagina principal ya muestra en pantalla el estado del backend devuelto por Django.

### 2026-05-04

#### Decision documental del nucleo inicial del MVP

- Se dejo documentado que el nucleo inicial planificado del dominio estara formado por `Course`, `Unit`, `Lesson` y `LessonProgress`.
- Se corrigieron referencias documentales que todavia hablaban de `Module` o de un `Progress` generico.
- Quedo explicitado en la documentacion que esta decision ya esta registrada, pero que esos modelos y apps de negocio aun no existen en el codigo.

### 2026-05-05

#### App `learning` creada como base del dominio

- Se creo `backend/apps/learning/` con `apps.py`, `models.py`, `admin.py`, `views.py`, `tests.py` y carpeta `migrations/`.
- `LearningConfig` se registro en `INSTALLED_APPS` dentro de `backend/config/settings.py`.
- Quedo documentado que `learning` ya esta implementada como app local, pero que `Course`, `Unit`, `Lesson` y `LessonProgress` aun no existen como modelos ni como endpoints.

#### Primer modelo real del dominio documentado

- Se implemento `Course` en `backend/apps/learning/models.py`.
- Se creo la migracion `backend/apps/learning/migrations/0001_initial.py` para ese modelo.
- Se corrigio la documentacion que todavia describia a `learning` como app sin modelos, dejando `Course` como implementado y `Unit`, `Lesson` y `LessonProgress` como planificados.

### 2026-05-06

#### Nucleo del dominio del MVP implementado en `learning`

- Se implementaron `Course`, `Unit`, `Lesson` y `LessonProgress` en `backend/apps/learning/models.py`.
- En `Lesson` se uso `text_content` en lugar de `content` para mantener abierta la evolucion futura hacia otros tipos de contenido.
- Se aplicaron las migraciones `0001_initial`, `0002_unit`, `0003_lesson` y `0004_lessonprogress`.
- Se actualizo la documentacion para distinguir que el nucleo del dominio ya esta implementado en modelos, mientras la API de negocio sigue pendiente.

### 2026-05-17

#### Nueva seccion de documentacion de producto

- Se creo `docs/product/` para documentar vision funcional, usuarios, alcance MVP, flujos y roadmap.
- Se conecto esta nueva seccion con el mapa general de `docs/`.
- Quedo explicitado un orden de lectura para alinear decisiones de producto con arquitectura, API y progreso del proyecto.

### 2026-05-18

#### Fortalecimiento documental para QA, riesgos y trazabilidad

- Se crearon `docs/quality/`, `docs/risks/` y `docs/templates/`.
- `docs/quality/` quedo orientada a validacion, evidencia minima y criterio de cierre.
- `docs/risks/` quedo orientada a registro vivo, matriz y mitigaciones.
- `docs/templates/` quedo orientada a formatos reutilizables para mantener consistencia sin burocracia.
- `docs/product/` se amplio con requerimientos y criterios de aceptacion para dejar una fuente de verdad funcional mas clara.
- `docs/README.md` fue reescrito como mapa general de documentacion, fuentes de verdad y trazabilidad.

### 2026-05-23

#### Registro documental del admin real para `learning`

- Se verifico el estado real de `backend/apps/learning/admin.py`.
- Quedo documentado que `Course`, `Unit`, `Lesson` y `LessonProgress` ya estan registrados en Django admin con `ModelAdmin`.
- Se dejo registrado en la documentacion que ese admin ya mejora listados, filtros, busquedas y orden para el dominio `learning`.
- Se distinguio explicitamente entre este estado implementado y las partes del dominio que siguen sin endpoints de negocio.

### 2026-05-28

#### Diagramas documentales y alineacion del flujo MVP

- Se crearon archivos `DIAGRAMS.md` en backend, frontend y secciones principales de `docs/` para explicar visualmente el proyecto por area.
- Se agregaron diagramas de arquitectura, API, base de datos, producto, calidad, riesgos, progreso, decisiones y setup.
- Se mantuvo la convencion de nombres en ingles para archivos de diagramas.
- Se corrigio la coherencia entre el nombre visible de cada mapa y el tipo real usado en Mermaid: `Flowchart`, `Sequence Diagram`, `Timeline`, `Gantt`, `Pie Chart`, `Class Diagram`, `ERD` y `Mindmap`.
- Se alineo la documentacion de producto con el flujo objetivo del MVP: curso inicial unico, ruta de aprendizaje, unidades como camino, modal de clases, clases de texto, marcado automatico como vista, quiz bloqueado hasta ver todas las clases, aprobacion con maximo de errores, repeticion con preguntas nuevas y desbloqueo de la siguiente unidad.
- Se documento que login y registro son necesarios para asociar progreso a una cuenta real.
- Se aclaro que no se priorizaran reportes y que los dashboards quedan como evolucion probable, manteniendo foco en el flujo principal de aprendizaje.
- Se actualizaron documentos de API para reflejar endpoints pendientes del MVP relacionados con ruta inicial, unidad, lecciones, progreso y quiz.
- Se actualizaron documentos de riesgos y decisiones para preparar futuras implementaciones sin sobrecargar el alcance inicial.
- Se verifico la documentacion con busquedas de inconsistencias de nombres de mapas y con `git diff --check`.

#### Validacion manual del nucleo del dominio en Django admin

- Se dejo documentado que el flujo `Course -> Unit -> Lesson -> LessonProgress` ya fue validado manualmente desde Django admin con datos reales de prueba.
- Se distinguio de forma explicita entre lo ya implementado en modelos, lo ya validado manualmente y lo que sigue planificado.
- Se aclaro que esta validacion no implica la existencia de seeds automaticos ni de endpoints de negocio.

### 2026-05-29

#### Primera exposicion del dominio `learning` por API

- Se verifico en el codigo real que `backend/apps/learning/serializers.py` define `CourseSerializer`.
- Se verifico en el codigo real que `backend/apps/learning/views.py` define la vista `course_list`.
- Se verifico en el codigo real que `backend/apps/learning/urls.py` publica `courses/` y que `backend/config/urls.py` la expone bajo `/api/`.
- Quedo documentado que `GET /api/courses/` es el primer endpoint de negocio real del dominio `learning`.
- Quedo explicitado que el endpoint devuelve solo cursos publicados y que otras rutas del dominio siguen planificadas.

#### Primera integracion del frontend con un recurso real del dominio

- Se verifico en el codigo real que `frontend/src/lib/api.js` define `getCourses()`.
- Se verifico en el codigo real que `frontend/src/app/page.js` consume `getCourses()` junto con `getHealth()`.
- Quedo documentado que la pagina principal ya muestra cursos publicados obtenidos desde `GET /api/courses/`.
- Se distinguio entre esta integracion ya implementada y las partes del flujo de aprendizaje que siguen planificadas.

## Ultimo punto alcanzado

El ultimo avance real del proyecto es que la pagina principal de Next.js ya no solo verifica salud tecnica del backend: tambien consume y muestra cursos publicados desde `GET /api/courses/`. El resto de la API del dominio y la experiencia completa de aprendizaje siguen pendientes.

## Proximo paso sugerido

El siguiente avance natural puede ir por una de estas rutas:

1. definir con precision los contratos API del flujo de ruta inicial, unidad, leccion, progreso y quiz
2. ampliar los endpoints de negocio sobre el nucleo `Course`, `Unit`, `Lesson` y `LessonProgress`
3. construir la primera pantalla funcional de ruta de aprendizaje en el frontend

Recomendacion actual: seguir por los contratos y endpoints faltantes del dominio, porque el modelo de datos principal ya esta definido y ya existe una primera exposicion API real para cursos.
La nueva documentacion de [../product/README.md](../product/README.md) puede usarse como referencia para priorizar esos endpoints y la primera experiencia funcional del frontend.
[../quality/README.md](../quality/README.md) y [../risks/README.md](../risks/README.md) ya pueden usarse para cerrar tareas con mejor trazabilidad y seguimiento.

## Regla de mantenimiento de esta bitacora

A partir de este documento, cada avance nuevo del proyecto debe registrarse aqui con fecha.

Cuando se actualice, conviene anotar al menos:

- fecha
- que se hizo
- que archivos o areas fueron impactadas
- como quedo verificado
- cual es el siguiente paso recomendado
