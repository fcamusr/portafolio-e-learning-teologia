# API de cursos

## Estado actual

No hay endpoints de cursos implementados.

El modelo `Course` si existe ya en `backend/apps/learning/models.py`, pero todavia no tiene contrato API expuesto.

## Objetivo futuro

Este recurso deberia permitir listar y consultar la oferta de cursos o rutas formativas.

Si la decision actual del dominio se mantiene, `Course` sera la entidad superior de una estructura que luego se organiza en `Unit` y `Lesson`.

## Endpoints previstos

```text
GET /api/courses/
GET /api/courses/{id}/
```

## Nota

La forma final del recurso dependera del diseno real de modelos, serializacion y navegacion entre contenidos. Este documento no fija todavia el contrato de API para `Unit`.
