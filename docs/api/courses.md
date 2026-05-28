# API de cursos

## Estado actual

No hay endpoints de cursos implementados.

El modelo `Course` existe en `backend/apps/learning/models.py`, pero todavia no tiene contrato API expuesto.

## Objetivo del MVP pendiente

Este recurso deberia permitir consultar la ruta inicial de aprendizaje asociada al curso del MVP.

Si la decision actual del dominio se mantiene, `Course` sera la entidad superior de una estructura que luego se organiza en `Unit` y `Lesson`. Como el MVP inicial contempla un solo curso visible para el usuario, la API deberia priorizar un endpoint de ruta inicial antes que una experiencia de catalogo.

## Endpoints previstos

```text
GET /api/courses/
GET /api/courses/{id}/
GET /api/learning-path/
```

## Nota

La forma final del recurso dependera del diseno real de modelos, serializacion y navegacion entre contenidos. Este documento todavia no fija el contrato definitivo para unidades bloqueadas, clases vistas ni disponibilidad de quiz.
