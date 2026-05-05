# API de progreso

## Estado actual

No hay endpoints de progreso implementados.

## Objetivo futuro

Este recurso deberia registrar y consultar el avance del usuario sobre contenidos formativos.

Si la decision actual del dominio se mantiene, el seguimiento inicial se apoyara en `LessonProgress` como registro de avance de un `User` sobre una `Lesson`.

## Endpoints previstos

```text
GET  /api/progress/me/
POST /api/lessons/{id}/complete/
```

## Nota

Todavia no existe un contrato cerrado para exponer progreso agregado por curso o por unidad.
