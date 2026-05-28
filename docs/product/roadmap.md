# Roadmap de producto

Este roadmap propone un orden de evolucion para construir sobre la base actual sin abrir demasiados frentes al mismo tiempo.

## Fase actual

La fase actual del proyecto es de base tecnica ya operativa con dominio inicial modelado, pero sin experiencia funcional completa de producto.

## Orden sugerido

### Fase 1: cerrar el flujo principal de aprendizaje en backend

- exponer endpoints para la ruta inicial de aprendizaje
- definir contratos para unidad desbloqueada, clases vistas y progreso por leccion
- definir reglas de desbloqueo de quiz y unidad
- preparar autenticacion basica para asociar progreso a usuario

### Fase 2: construir la primera experiencia funcional en frontend

- reemplazar la pantalla actual de prueba
- mostrar el curso inicial como ruta de aprendizaje
- mostrar unidades como camino visual
- abrir clases de una unidad en modal
- abrir clase de texto y marcarla como vista
- mostrar bloqueo/desbloqueo del quiz

### Fase 3: reforzar experiencia de cuenta y seguimiento

- incorporar autenticacion aplicada al flujo real
- asegurar que el progreso este asociado al usuario correcto
- mejorar estado vacio, errores y continuidad
- incorporar dashboard simple de avance si aporta claridad

### Fase 4: ampliar valor formativo

- implementar quizzes con intentos, maximo de errores y preguntas nuevas al repetir
- evaluar certificados o logros
- decidir si entran funciones editoriales o administrativas adicionales

## Criterio de priorizacion

Cada fase deberia cerrar una parte util del producto antes de abrir la siguiente. La prioridad no es acumular funciones, sino completar recorridos.

## Referencias relacionadas

- [overview.md](./overview.md)
- [mvp.md](./mvp.md)
- [user-flows.md](./user-flows.md)
- [../progress/README.md](../progress/README.md)
