# Vision general de API

La API es el contrato principal entre el backend Django y el frontend Next.js.

## Estado actual

Hoy la base API ya esta operativa. El backend expone:

- la ruta administrativa estandar de Django en `/admin/`
- un endpoint tecnico de salud en `/api/health/`
- un primer endpoint de negocio del dominio en `GET /api/courses/`
- un endpoint de detalle del dominio en `GET /api/courses/{id}/`
- la configuracion inicial de Django REST Framework y CORS para integracion local con el frontend
- una integracion real desde la pagina principal de Next.js consumiendo la lista de cursos publicados
- una pagina dinamica de detalle de curso en Next.js consumiendo el endpoint individual

Ademas, el backend ya tiene implementado el nucleo del dominio en modelos:

- `Course`
- `Unit`
- `Lesson`
- `LessonProgress`

Y ya existe una primera exposicion API real de ese dominio:

- `CourseSerializer` en `backend/apps/learning/serializers.py`
- `CourseDetailSerializer` con serializers anidados para unidades y lecciones
- `course_list` en `backend/apps/learning/views.py`
- `course_detail` en `backend/apps/learning/views.py`
- `courses/` en `backend/apps/learning/urls.py`
- `courses/<int:course_id>/` en `backend/apps/learning/urls.py`
- inclusion bajo `/api/` desde `backend/config/urls.py`

Estado implementado hoy:

- `GET /api/courses/` responde con una lista de cursos publicados
- `GET /api/courses/{id}/` responde con un curso publicado y su estructura `Unit -> Lesson`

Estado todavia planificado:

- ruta inicial agregada
- progreso, desbloqueos y quiz expuestos por API

## Objetivo

La API debera exponer datos y acciones relacionadas con:

- usuarios
- la estructura `Course -> Unit -> Lesson`
- evaluaciones
- progreso por leccion mediante `LessonProgress`
- certificados o logros

## Formato esperado

La expectativa es trabajar con respuestas JSON y contratos consistentes entre recursos. Ese patron ya comienza a verse en el endpoint de salud, que responde usando `Response` de DRF.

## Principio de diseno

El frontend no debe comunicarse directamente con la base de datos. Toda operacion de negocio debe pasar por el backend.

## Observacion tecnica

La base tecnica actual incluye:

- `djangorestframework` en dependencias y `INSTALLED_APPS`
- `django-cors-headers` en dependencias, `INSTALLED_APPS` y `MIDDLEWARE`
- `CORS_ALLOWED_ORIGINS` con `http://localhost:3000`
- el prefijo de rutas `api/` conectado desde `backend/config/urls.py`

Esto deja preparado el backend para que el frontend en `http://localhost:3000` consuma el backend en `http://127.0.0.1:8000` sin abrir CORS de forma global.
