# Roadmap de producto

Este roadmap propone un orden de evolucion para construir sobre la base actual sin abrir demasiados frentes al mismo tiempo.

## Fase actual

La fase actual del proyecto es de base tecnica ya operativa con dominio inicial modelado, pero sin experiencia funcional completa de producto.

## Orden sugerido

### Fase 1: cerrar el flujo principal de aprendizaje en backend

- exponer endpoints del dominio `Course`, `Unit`, `Lesson` y `LessonProgress`
- definir contratos consistentes para lectura de contenido y avance
- validar el flujo minimo necesario para estudiar y retomar

### Fase 2: construir la primera experiencia funcional en frontend

- reemplazar la pantalla actual de prueba
- mostrar cursos, unidades y lecciones
- presentar progreso basico y llamadas claras a continuar

### Fase 3: reforzar experiencia de cuenta y seguimiento

- incorporar autenticacion aplicada al flujo real
- asegurar que el progreso este asociado al usuario correcto
- mejorar estado vacio, errores y continuidad

### Fase 4: ampliar valor formativo

- agregar quizzes cuando el flujo principal ya sea estable
- evaluar certificados o logros
- decidir si entran funciones editoriales o administrativas adicionales

## Criterio de priorizacion

Cada fase deberia cerrar una parte util del producto antes de abrir la siguiente. La prioridad no es acumular funciones, sino completar recorridos.

## Referencias relacionadas

- [overview.md](./overview.md)
- [mvp.md](./mvp.md)
- [user-flows.md](./user-flows.md)
- [../progress/README.md](../progress/README.md)
