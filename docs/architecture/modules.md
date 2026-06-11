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

### `learning`

- Ubicacion: `backend/apps/learning/`
- Responsabilidad actual: alojar el nucleo inicial del dominio del MVP
- Estado: implementado como app local y registrado en Django, con `Course`, `Unit`, `Lesson` y `LessonProgress` ya definidos como modelos

## Nucleo inicial del dominio del MVP

La decision documental vigente para el primer nucleo funcional del producto se apoya en estas entidades:

- `Course`: contenedor principal de una oferta formativa
- `Unit`: agrupacion intermedia dentro de un curso
- `Lesson`: pieza concreta de aprendizaje dentro de una unidad
- `LessonProgress`: registro del avance de un usuario sobre una leccion

Estado actual de esta decision:

- esta decision ya queda documentada en el repositorio
- la app local `learning` ya aloja este nucleo
- las cuatro entidades ya existen como modelos implementados
- `Lesson` usa `text_content` como campo de contenido textual actual
- ya existe un primer endpoint de negocio para `Course` mediante `GET /api/courses/`
- `Course` ya expone tambien `GET /api/courses/{id}/` con `units` y `lessons` anidados
- `Unit`, `Lesson` y `LessonProgress` todavia no exponen endpoints propios

## Modulos previstos

### `quizzes`

Responsable de evaluaciones, preguntas, respuestas e intentos.

Estado: planificado, no implementado.

### `certificates`

Responsable de evidencias de avance, logros o certificados.

Estado: planificado, no implementado.

### `notes`

Responsable de notas personales, reflexiones o apuntes vinculados al aprendizaje.

Estado: planificado, no implementado.

## Criterio de diseno

Cada modulo debe tener una responsabilidad clara. Cuando el backend crezca, la preferencia es separar dominios por apps en vez de concentrar logica no relacionada en un solo lugar.
