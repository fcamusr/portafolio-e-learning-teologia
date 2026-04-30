# Modulos del sistema

Este documento identifica los dominios actuales y los modulos previstos para el crecimiento del backend.

## Modulos implementados

### `core`

- Ubicacion: `backend/apps/core/`
- Responsabilidad actual: concentrar endpoints transversales y tecnicos del proyecto
- Estado: implementado con el endpoint `/api/health/`

### `users`

- Ubicacion: `backend/apps/users/`
- Responsabilidad actual: definir el modelo de usuario personalizado
- Estado: implementado como base tecnica

## Modulos previstos

### `content`

Responsable de cursos, modulos, lecciones y recursos formativos.

### `progress`

Responsable del seguimiento del avance del usuario.

### `quizzes`

Responsable de evaluaciones, preguntas, respuestas e intentos.

### `certificates`

Responsable de evidencias de avance, logros o certificados.

### `notes`

Responsable de notas personales, reflexiones o apuntes vinculados al aprendizaje.

## Criterio de diseno

Cada modulo debe tener una responsabilidad clara. Cuando el backend crezca, la preferencia es separar dominios por apps en vez de concentrar logica no relacionada en un solo lugar.
