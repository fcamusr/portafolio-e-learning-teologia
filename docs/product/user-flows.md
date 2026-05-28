# Flujos principales de usuario

Este documento baja el alcance del producto a recorridos concretos para que frontend, backend y API puedan construirse contra necesidades reales.

## Flujo 1: entrar a la ruta de aprendizaje

1. La persona usuaria llega a la plataforma.
2. Inicia sesion o se registra si necesita guardar progreso.
3. Ve la ruta de aprendizaje del curso inicial.
4. Identifica que unidad esta disponible y cuales siguen bloqueadas.
5. Decide comenzar o continuar el estudio.

## Flujo 2: avanzar por una unidad y sus clases

1. La persona usuaria selecciona una unidad desbloqueada.
2. El sistema muestra las clases de la unidad en un modal.
3. La persona abre una clase de texto.
4. El sistema marca automaticamente esa clase como vista.
5. La persona puede navegar libremente entre las clases de texto de la unidad.
6. Cuando todas las clases fueron vistas, el quiz queda disponible.

## Flujo 3: aprobar quiz y desbloquear unidad

1. La persona entra al quiz de la unidad.
2. El sistema presenta preguntas relacionadas con las clases vistas.
3. La persona responde el quiz.
4. Si supera el maximo de respuestas erroneas, el sistema genera o selecciona nuevas preguntas para repetir.
5. Si aprueba, la unidad se marca como completada.
6. La siguiente unidad queda desbloqueada.

## Flujo 4: retomar aprendizaje

1. La persona usuaria vuelve dias despues.
2. El sistema muestra el ultimo punto relevante o la siguiente unidad/clase disponible.
3. La persona retoma sin reconstruir manualmente donde estaba.

## Flujo 5: revisar progreso basico o dashboard

1. La persona usuaria consulta su avance.
2. Ve clases vistas, unidad actual y unidades desbloqueadas.
3. Si existen dashboards, ve informacion resumida de avance.
4. Usa esa informacion para continuar el recorrido formativo.

## Implicaciones tecnicas

Estos flujos justifican priorizar:

- endpoints para listar cursos, unidades y lecciones
- persistencia de progreso por leccion
- reglas de desbloqueo de quiz y unidad
- autenticacion para asociar progreso a usuario
- modelo o contrato futuro para quizzes, intentos y respuestas
- una UI inicial centrada en navegacion y continuidad

## Referencias relacionadas

- [mvp.md](./mvp.md)
- [acceptance-criteria.md](./acceptance-criteria.md)
- [roadmap.md](./roadmap.md)
- [../api/courses.md](../api/courses.md)
- [../api/lessons.md](../api/lessons.md)
- [../api/progress.md](../api/progress.md)
