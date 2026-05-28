# API de progreso

## Estado actual

No hay endpoints de progreso implementados.

El modelo `LessonProgress` existe en `backend/apps/learning/models.py`, pero todavia no tiene contrato API expuesto.

## Objetivo del MVP pendiente

Este recurso deberia registrar y consultar el avance del usuario sobre contenidos formativos.

Si la decision actual del dominio se mantiene, el seguimiento inicial se apoyara en `LessonProgress` como registro de avance de un `User` sobre una `Lesson`. La regla de producto actual indica que una clase de texto se marca como vista automaticamente cuando el usuario entra a su pantalla.

## Endpoints previstos

```text
GET  /api/progress/me/
POST /api/lessons/{id}/view/
GET  /api/units/{id}/progress/
```

## Nota

Todavia no existe un contrato cerrado para progreso agregado por curso o por unidad. El desbloqueo de quiz y de unidad siguiente requerira definir como se calcula una unidad completada y donde se persiste el resultado.
