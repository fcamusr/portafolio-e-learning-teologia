# API de cursos

## Estado actual

El modelo `Course` existe en `backend/apps/learning/models.py` y ya tiene una primera exposicion API real.

Implementado hoy:

- `CourseSerializer` en `backend/apps/learning/serializers.py`
- vista `course_list` en `backend/apps/learning/views.py`
- ruta `courses/` en `backend/apps/learning/urls.py`
- inclusion de `apps.learning.urls` bajo `/api/` desde `backend/config/urls.py`
- endpoint `GET /api/courses/`

Comportamiento implementado:

- devuelve solo cursos publicados
- usa `Course.objects.filter(is_published=True).order_by("title")`
- responde una lista serializada con `id`, `title`, `description`, `level`, `is_published`, `created_at` y `updated_at`

## Contrato implementado hoy

```text
GET /api/courses/
```

Respuesta:

- lista JSON de cursos publicados

Consumo implementado hoy en frontend:

- `frontend/src/lib/api.js` define `getCourses()`
- `frontend/src/app/page.js` usa ese helper desde un Server Component
- la pagina principal muestra el listado de cursos publicados o un estado vacio si la respuesta viene sin elementos

Alcance actual:

- no expone cursos no publicados
- no expone detalle individual de curso
- no devuelve todavia unidades anidadas ni ruta completa de aprendizaje

## Alcance todavia planificado

Este recurso deberia permitir consultar la ruta inicial de aprendizaje asociada al curso del MVP.

Si la decision actual del dominio se mantiene, `Course` sera la entidad superior de una estructura que luego se organiza en `Unit` y `Lesson`. Como el MVP inicial contempla un solo curso visible para el usuario, la API deberia priorizar un endpoint de ruta inicial antes que una experiencia de catalogo.

## Endpoints previstos

```text
GET /api/courses/{id}/
GET /api/learning-path/
```

## Nota

La forma final del recurso todavia puede evolucionar. Este documento distingue entre lo ya implementado hoy y lo que sigue pendiente para unidades bloqueadas, clases vistas, navegacion entre contenidos y disponibilidad de quiz.
