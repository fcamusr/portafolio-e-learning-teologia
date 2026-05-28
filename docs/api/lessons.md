# API de lecciones

## Estado actual

No hay endpoints de lecciones implementados.

El modelo `Lesson` existe en `backend/apps/learning/models.py`, pero todavia no tiene contrato API expuesto.

## Objetivo del MVP pendiente

Este recurso deberia permitir consultar lecciones, su orden dentro de una `Unit` y el contenido asociado a cada una.

Detalle relevante de diseno:

- `Lesson` usa `text_content` en lugar de `content`

Esto deja abierta la evolucion futura hacia otros tipos de contenido sin cambiar la intencion del modelo actual.

## Endpoints previstos

```text
GET /api/lessons/
GET /api/lessons/{id}/
```
