# Comunicacion backend-frontend

La comunicacion entre backend y frontend esta pensada mediante HTTP, con Django como fuente de datos y Next.js como consumidor.

## Estado actual

Actualmente:

- el backend expone la ruta administrativa `/admin/`
- el backend expone tambien `/api/health/` como endpoint tecnico inicial
- el backend ya expone `GET /api/courses/` como primer endpoint API de negocio del dominio
- el backend ya expone `GET /api/courses/{id}/` como detalle de curso publicado
- el frontend contempla la variable `NEXT_PUBLIC_API_BASE_URL` para apuntar al backend
- la pagina principal del frontend ya consume `/api/health/`
- la pagina principal del frontend ya consume `GET /api/courses/`
- el frontend ya tiene una pagina dinamica en `/courses/[courseId]` que consume `GET /api/courses/{id}/`

## Direccion de diseno

La base de comunicacion ya funciona en desarrollo local:

- Django expone el prefijo `/api/`
- Next.js consume el backend con `fetch`
- el frontend no se conecta directamente a la base de datos
- el intercambio entre `http://localhost:3000` y `http://127.0.0.1:8000` depende de una configuracion CORS explicita y restringida

## Entorno local

- Backend: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
- Frontend: [http://localhost:3000/](http://localhost:3000/)

Configuracion actual relacionada:

- `CORS_ALLOWED_ORIGINS` permite `http://localhost:3000`
- el prefijo API actual es `/api/`
- la ruta de verificacion disponible es `/api/health/`
- la primera ruta de dominio disponible es `/api/courses/`
- la ruta de detalle disponible es `/api/courses/{id}/`
- el frontend construye la URL base desde `NEXT_PUBLIC_API_BASE_URL`

## Primera conexion real entre frontend y backend

El frontend Next.js ya consume el endpoint inicial del backend Django:

```text
GET /api/health/
```

La primera integracion se hizo desde la pagina principal del frontend usando App Router y una funcion de acceso a datos ubicada en `frontend/src/lib/api.js`.

La pagina principal consulta el backend y muestra en pantalla el estado de la API.

Esto confirma que la comunicacion base entre Next.js y Django ya funciona correctamente en desarrollo local.

## Primera exposicion del dominio por API

La app `learning` ya expone un primer recurso real por HTTP:

```text
GET /api/courses/
```

Estado implementado:

- serializa `Course` con `CourseSerializer`
- usa la vista `course_list`
- devuelve solo cursos publicados
- `frontend/src/lib/api.js` expone `getCourses()`
- `frontend/src/app/page.js` consume ese recurso y lo renderiza en la pantalla principal
- la pagina principal usa `Link` de Next.js para navegar al detalle de cada curso

## Detalle de curso ya implementado

La app `learning` ya expone tambien:

```text
GET /api/courses/{id}/
```

Estado implementado:

- usa `CourseDetailSerializer` con `UnitSerializer` y `LessonSerializer` anidados
- devuelve solo cursos publicados
- usa `prefetch_related("units__lessons")` para optimizar la consulta
- `frontend/src/lib/api.js` expone `getCourseDetail(courseId)`
- `frontend/src/app/courses/[courseId]/page.js` consume ese recurso
- la pagina dinamica usa `notFound()` si el curso no existe o el `courseId` no es valido

Estado planificado:

- exposicion de unidades y lecciones
- escritura o seguimiento de progreso por API
- quiz y desbloqueos del flujo de aprendizaje

## Consideraciones futuras

Cuando ambos servicios intercambien datos reales, habra que definir explicitamente:

- estrategia de autenticacion
- formato de errores
- evolucion de la politica de CORS segun los entornos
- versionado o estabilidad del contrato API
