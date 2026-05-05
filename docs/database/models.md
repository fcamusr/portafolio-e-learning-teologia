# Modelos

Este documento diferencia los modelos realmente implementados de las entidades que aun pertenecen al diseno futuro del producto.

## Modelo implementado

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

## Nucleo inicial del dominio del MVP

La decision documental actual para el primer bloque del dominio funcional es trabajar con estas cuatro entidades:

- `Course`: curso o ruta formativa
- `Unit`: agrupacion intermedia dentro de un curso
- `Lesson`: pieza minima de contenido consumible por el usuario
- `LessonProgress`: avance de un usuario sobre una leccion

Estado actual:

- la app `backend/apps/learning/` ya existe y `LearningConfig` esta registrada en `INSTALLED_APPS`
- ninguno de estos modelos existe todavia en el codigo del backend
- la unica entidad de dominio implementada hoy sigue siendo `User`
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
