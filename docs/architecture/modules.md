# Módulos del sistema

Este documento identifica los dominios actuales y los módulos previstos para el crecimiento del backend.

## Módulo implementado

### `users`

- Ubicación: `backend/apps/users/`
- Responsabilidad actual: definir el modelo de usuario personalizado
- Estado: implementado como base técnica

## Módulos previstos

### `content`

Responsable de cursos, módulos, lecciones y recursos formativos.

### `progress`

Responsable del seguimiento del avance del usuario.

### `quizzes`

Responsable de evaluaciones, preguntas, respuestas e intentos.

### `certificates`

Responsable de evidencias de avance, logros o certificados.

### `notes`

Responsable de notas personales, reflexiones o apuntes vinculados al aprendizaje.

## Criterio de diseño

Cada módulo debe tener una responsabilidad clara. Cuando el backend crezca, la preferencia es separar dominios por apps en vez de concentrar lógica no relacionada en un solo lugar.
