# API de cursos

## Estado actual

El modelo `Course` existe en `backend/apps/learning/models.py` y ya tiene una primera exposicion API real.

Implementado hoy:

- `CourseSerializer` en `backend/apps/learning/serializers.py`
- `CourseDetailSerializer` con `UnitSerializer` y `LessonSerializer` anidados
- vista `course_list` en `backend/apps/learning/views.py`
- vista `course_detail` en `backend/apps/learning/views.py`
- ruta `courses/` en `backend/apps/learning/urls.py`
- ruta `courses/<int:course_id>/` en `backend/apps/learning/urls.py`
- inclusion de `apps.learning.urls` bajo `/api/` desde `backend/config/urls.py`
- endpoint `GET /api/courses/`
- endpoint `GET /api/courses/{id}/`

Comportamiento implementado:

- devuelve solo cursos publicados
- usa `Course.objects.filter(is_published=True).order_by("title")`
- responde una lista serializada con `id`, `title`, `description`, `level`, `is_published`, `created_at` y `updated_at`
- el detalle de curso tambien devuelve solo cursos publicados
- el detalle usa `prefetch_related("units__lessons")` para optimizar la carga relacionada
- el detalle responde un `Course` con sus `units` y cada `unit` con sus `lessons`

## Contrato implementado hoy

```text
GET /api/courses/
GET /api/courses/{id}/
```

Respuesta:

- lista JSON de cursos publicados
- objeto JSON de curso publicado con `units` y `lessons` anidados

Consumo implementado hoy en frontend:

- `frontend/src/lib/api.js` define `getCourses()`
- `frontend/src/lib/api.js` define `getCourseDetail(courseId)`
- `frontend/src/app/page.js` usa ese helper desde un Server Component
- `frontend/src/app/courses/[courseId]/page.js` consume `getCourseDetail()`
- la pagina principal muestra el listado de cursos publicados o un estado vacio si la respuesta viene sin elementos
- la pagina principal enlaza cada curso publicado usando `Link` de Next.js
- la pagina dinamica muestra titulo, descripcion, nivel, unidades y lecciones del curso
- la pagina dinamica usa `notFound()` cuando el `courseId` no es valido o el backend responde `404`

Alcance actual:

- no expone cursos no publicados
- ya expone detalle individual de curso
- ya devuelve unidades y lecciones anidadas en el detalle
- no devuelve todavia la ruta completa de aprendizaje con progreso, desbloqueos o quiz

## Alcance todavia planificado

Este recurso deberia permitir consultar la ruta inicial de aprendizaje asociada al curso del MVP.

Si la decision actual del dominio se mantiene, `Course` sera la entidad superior de una estructura que luego se organiza en `Unit` y `Lesson`. Como el MVP inicial contempla un solo curso visible para el usuario, la API deberia priorizar un endpoint de ruta inicial antes que una experiencia de catalogo.

## Endpoints previstos

```text
GET /api/learning-path/
```

## Nota

La forma final del recurso todavia puede evolucionar. Este documento distingue entre lo ya implementado hoy y lo que sigue pendiente para unidades bloqueadas, clases vistas, navegacion entre contenidos y disponibilidad de quiz.
