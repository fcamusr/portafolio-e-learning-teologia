# Modelos

Modelos actuales y planificados.

## Modelo actual

### User

Ubicación:

```text
backend/apps/users/models.py

Definición:

from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass
Por qué existe

Se creó un modelo de usuario personalizado desde el inicio para permitir futuras extensiones sin tener que cambiar el modelo de usuario a mitad del proyecto.

Modelos planificados
Course
Module
Lesson
Quiz
Question
Answer
Progress
Certificate
Note
Regla

No crear modelos antes de entender qué responsabilidad tendrán dentro del dominio.


