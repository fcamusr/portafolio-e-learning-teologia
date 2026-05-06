# Relaciones

Este documento registra las relaciones del dominio a nivel conceptual y en su estado actual de implementacion. No reemplaza la definicion real de modelos ni de migraciones.

## Relaciones implementadas del nucleo inicial del MVP

Hoy el backend ya implementa estas relaciones:

- un `Course` puede contener multiples `Unit`
- una `Unit` puede contener multiples `Lesson`
- un `LessonProgress` asocia a un `User` con una `Lesson`

## Detalles relevantes implementados

- `Unit.course` usa `on_delete=models.CASCADE` y `related_name="units"`
- `Lesson.unit` usa `on_delete=models.CASCADE` y `related_name="lessons"`
- `LessonProgress.user` usa `related_name="lesson_progresses"`
- `LessonProgress.lesson` usa `related_name="progresses"`
- `LessonProgress` define una unicidad por `user` y `lesson` mediante `unique_lesson_progress_per_user`

## Otras relaciones previstas

Ademas del nucleo inicial, el producto podria sumar mas adelante relaciones como estas:

- una `Lesson` podria tener una o mas evaluaciones
- un `User` podria registrar intentos o respuestas en quizzes
- un `User` podria asociar notas personales a contenidos especificos

## Criterio

Las relaciones definitivas deben seguir documentandose junto con cualquier cambio real de cascadas, unicidad, dependencia entre modelos o decisiones de desempeno.
