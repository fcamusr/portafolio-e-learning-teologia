# Modelos

Este documento diferencia los modelos realmente implementados de las entidades que aún pertenecen al diseño futuro del producto.

## Modelo implementado

### `User`

Ubicación:

```text
backend/apps/users/models.py
```

Definición actual:

```python
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass
```

## Motivo de la decisión

Se creó un modelo de usuario personalizado desde el inicio para evitar un cambio estructural complejo más adelante si el proyecto necesita agregar campos o comportamiento específico al usuario.

## Modelos previstos

Las siguientes entidades aparecen como parte del diseño del dominio, pero todavía no existen en el código:

- `Course`
- `Module`
- `Lesson`
- `Quiz`
- `Question`
- `Answer`
- `Progress`
- `Certificate`
- `Note`

## Regla de evolución

No conviene crear modelos solo por anticipación. Cada nueva entidad debería incorporarse cuando exista un caso de uso claro, responsabilidades definidas y una relación explícita con el resto del dominio.
