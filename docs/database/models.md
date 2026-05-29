# Modelos

Este documento diferencia los modelos realmente implementados de las entidades que aun pertenecen al diseno futuro del producto.

## Modelos implementados

### `User`

Ubicacion:

```text
backend/apps/users/models.py
```

Definicion actual:

```python
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass
```

## Motivo de la decision

Se creo un modelo de usuario personalizado desde el inicio para evitar un cambio estructural complejo mas adelante si el proyecto necesita agregar campos o comportamiento especifico al usuario.

### `Course`

Ubicacion:

```text
backend/apps/learning/models.py
```

Campos implementados:

- `title`
- `description`
- `level`
- `is_published`
- `created_at`
- `updated_at`

Detalles relevantes:

- `level` usa `models.TextChoices` con `BEGINNER`, `INTERMEDIATE` y `ADVANCED`
- `description` permite valor vacio
- `is_published` parte en `False`
- `created_at` y `updated_at` usan marcas automaticas de tiempo de Django

### `Unit`

Ubicacion:

```text
backend/apps/learning/models.py
```

Campos implementados:

- `course`
- `title`
- `description`
- `order`
- `is_published`
- `created_at`
- `updated_at`

Detalles relevantes:

- `course` referencia a `Course` con `related_name="units"`
- define `ordering = ["order", "id"]`

### `Lesson`

Ubicacion:

```text
backend/apps/learning/models.py
```

Campos implementados:

- `unit`
- `title`
- `summary`
- `text_content`
- `order`
- `estimated_minutes`
- `is_published`
- `created_at`
- `updated_at`

Detalles relevantes:

- `unit` referencia a `Unit` con `related_name="lessons"`
- `summary` permite valor vacio
- usa `text_content` en lugar de `content`
- esta decision deja abierta la posibilidad de soportar otros tipos de contenido mas adelante sin forzar un nombre demasiado generico hoy
- define `ordering = ["order", "id"]`

### `LessonProgress`

Ubicacion:

```text
backend/apps/learning/models.py
```

Campos implementados:

- `user`
- `lesson`
- `is_completed`
- `started_at`
- `completed_at`
- `updated_at`

Detalles relevantes:

- `user` referencia a `settings.AUTH_USER_MODEL` con `related_name="lesson_progresses"`
- `lesson` referencia a `Lesson` con `related_name="progresses"`
- `completed_at` permite `null` y `blank`
- define el constraint `unique_lesson_progress_per_user` para evitar mas de un progreso por usuario y leccion

## Estado actual del nucleo del MVP

- la app `backend/apps/learning/` ya existe y `LearningConfig` esta registrada en `INSTALLED_APPS`
- `Course`, `Unit`, `Lesson` y `LessonProgress` ya estan implementados en el codigo del backend
- por ahora no se documenta un modelo generico `Progress`; el seguimiento inicial real se concentra en `LessonProgress`
- el flujo `Course -> Unit -> Lesson -> LessonProgress` ya fue validado manualmente desde Django admin con datos reales de prueba

## Registro real en Django admin

Ademas de existir como modelos y tablas migradas, hoy `Course`, `Unit`, `Lesson` y `LessonProgress` ya estan registrados en `backend/apps/learning/admin.py`.

Estado implementado en el admin:

- `Course` usa un `ModelAdmin` con columnas de titulo, nivel, publicacion y timestamps, filtros por nivel, publicacion y fechas, busqueda por titulo y descripcion, y orden por titulo.
- `Unit` usa un `ModelAdmin` con columnas para curso y orden, filtros por curso, publicacion y fechas, busqueda por titulo, descripcion y titulo del curso, y orden por curso, orden e id.
- `Lesson` usa un `ModelAdmin` con columnas para unidad, orden y duracion estimada, filtros por unidad, publicacion y fechas, busqueda por titulo, resumen, `text_content`, unidad y curso, y orden por unidad, orden e id.
- `LessonProgress` usa un `ModelAdmin` con columnas para usuario, leccion, completitud y timestamps relevantes, filtros por completitud y fechas, busqueda por usuario y por la jerarquia de la leccion, y orden descendente por `updated_at`.

Esto ya esta implementado. No describe un plan futuro ni una propuesta: documenta el estado real actual del panel administrativo para el dominio `learning`.

## Validacion manual del flujo principal

Ademas del estado implementado, ya existe una validacion manual real del nucleo desde `/admin/`.

Validado manualmente:

- alta de `Course`
- alta de `Unit` vinculada a un curso
- alta de `Lesson` vinculada a una unidad
- alta de `LessonProgress` vinculada a usuario y leccion

Esta evidencia sirve para afirmar que el nucleo actual no solo existe en el esquema y en el admin, sino que ya pudo recorrerse manualmente con datos de prueba reales.

## Otros modelos previstos

Las siguientes entidades siguen apareciendo como parte del diseno futuro del producto, pero todavia no existen en el codigo:

- `Quiz`
- `Question`
- `Answer`
- `Certificate`
- `Note`

## Regla de evolucion

No conviene crear modelos solo por anticipacion. Cada nueva entidad deberia incorporarse cuando exista un caso de uso claro, responsabilidades definidas y una relacion explicita con el resto del dominio.
