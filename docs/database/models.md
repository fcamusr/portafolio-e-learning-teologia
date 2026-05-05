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

Estado actual:

- `Course` ya esta implementado en codigo
- existe la migracion `backend/apps/learning/migrations/0001_initial.py` para crear este modelo

## Nucleo inicial del dominio del MVP

La decision documental actual para el primer bloque del dominio funcional es trabajar con estas cuatro entidades:

- `Course`: curso o ruta formativa
- `Unit`: agrupacion intermedia dentro de un curso
- `Lesson`: pieza minima de contenido consumible por el usuario
- `LessonProgress`: avance de un usuario sobre una leccion

Estado actual:

- la app `backend/apps/learning/` ya existe y `LearningConfig` esta registrada en `INSTALLED_APPS`
- `Course` ya esta implementado en el codigo del backend
- `Unit`, `Lesson` y `LessonProgress` todavia no existen como modelos
- por ahora no se documenta un modelo generico `Progress`; el seguimiento inicial previsto se concentra en `LessonProgress`

## Otros modelos previstos

Las siguientes entidades siguen apareciendo como parte del diseno futuro del producto, pero todavia no existen en el codigo:

- `Quiz`
- `Question`
- `Answer`
- `Certificate`
- `Note`

## Regla de evolucion

No conviene crear modelos solo por anticipacion. Cada nueva entidad deberia incorporarse cuando exista un caso de uso claro, responsabilidades definidas y una relacion explicita con el resto del dominio.
