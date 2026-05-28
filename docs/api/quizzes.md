# API de quizzes

## Estado actual

No hay endpoints de evaluaciones implementados.

## Objetivo del MVP pendiente

Este recurso deberia cubrir quizzes, preguntas, respuestas e intentos del usuario dentro del flujo principal de aprendizaje.

En el flujo objetivo, el quiz de una unidad se desbloquea solo cuando todas sus clases de texto fueron vistas. Si el usuario no aprueba, debe repetir un cuestionario con preguntas nuevas. Si aprueba, la unidad se completa y se desbloquea la siguiente.

## Endpoints previstos

```text
GET  /api/units/{id}/quiz/
POST /api/units/{id}/quiz/submit/
```

## Reglas pendientes

- definir el maximo de respuestas erroneas permitido
- definir como se seleccionan preguntas nuevas al repetir
- definir modelos para quiz, preguntas, respuestas e intentos
- definir como se registra aprobacion de unidad
