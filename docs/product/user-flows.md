# Flujos principales de usuario

Este documento baja el alcance del producto a recorridos concretos para que frontend, backend y API puedan construirse contra necesidades reales.

## Flujo 1: explorar y entrar a un curso

1. La persona usuaria llega a la plataforma.
2. Ve una lista de cursos disponibles o destacados.
3. Abre un curso para entender su contenido y estructura.
4. Decide comenzar o continuar el estudio.

## Flujo 2: avanzar por una unidad y una leccion

1. La persona usuaria entra a un curso.
2. Revisa las unidades disponibles.
3. Abre una leccion especifica.
4. Consume el contenido principal.
5. El sistema registra o actualiza su avance.

## Flujo 3: retomar aprendizaje

1. La persona usuaria vuelve dias despues.
2. El sistema muestra el ultimo punto relevante o el siguiente paso recomendado.
3. La persona retoma sin tener que reconstruir mentalmente donde estaba.

## Flujo 4: revisar progreso basico

1. La persona usuaria consulta su avance.
2. Ve que lecciones completo o cuales siguen pendientes.
3. Usa esa informacion para continuar el recorrido formativo.

## Implicaciones tecnicas

Estos flujos justifican priorizar:

- endpoints para listar cursos, unidades y lecciones
- persistencia de progreso por leccion
- una UI inicial centrada en navegacion y continuidad

## Referencias relacionadas

- [mvp.md](./mvp.md)
- [acceptance-criteria.md](./acceptance-criteria.md)
- [roadmap.md](./roadmap.md)
- [../api/courses.md](../api/courses.md)
- [../api/lessons.md](../api/lessons.md)
- [../api/progress.md](../api/progress.md)
