# API

Esta seccion describe el estado actual de la API y documenta el diseno previsto para la comunicacion entre frontend y backend.

## Contenido

- [overview.md](./overview.md): estado general de la API
- [DIAGRAMS.md](./DIAGRAMS.md): secuencias, estructura JSON y mapa de requisitos de endpoints
- [health.md](./health.md): endpoint tecnico de salud actualmente implementado
- [authentication.md](./authentication.md): estrategia actual y futura de autenticacion
- [users.md](./users.md): endpoints previstos relacionados con usuarios
- [courses.md](./courses.md): estado actual y evolucion prevista de los endpoints de cursos
- [lessons.md](./lessons.md): endpoints previstos para lecciones
- [quizzes.md](./quizzes.md): endpoints previstos para evaluaciones
- [progress.md](./progress.md): endpoints previstos para seguimiento de avance
- [certificates.md](./certificates.md): endpoints previstos para certificados o logros
- [errors.md](./errors.md): formato sugerido para respuestas de error
- [status-codes.md](./status-codes.md): uso esperado de codigos HTTP

## Nota importante

Esta carpeta mezcla dos tipos de documentacion:

- lo que ya esta implementado hoy, como `/api/health/`
- contratos y disenos que todavia siguen proyectados

Cada documento debe dejar ese estado explicito.

La fuente de verdad de validacion no vive aqui. Si necesitas saber como se prueba o que evidencia pedir para cerrar un cambio de API, revisa [../quality/qa-strategy.md](../quality/qa-strategy.md).

## Orden de lectura recomendado

1. [overview.md](./overview.md)
2. [DIAGRAMS.md](./DIAGRAMS.md)
3. [health.md](./health.md)
4. [authentication.md](./authentication.md)
5. [users.md](./users.md)
6. [courses.md](./courses.md)
7. [lessons.md](./lessons.md)
8. [quizzes.md](./quizzes.md)
9. [progress.md](./progress.md)
10. [certificates.md](./certificates.md)
11. [errors.md](./errors.md)
12. [status-codes.md](./status-codes.md)

## Por que este orden

- Primero entiendes el estado general de la API.
- Luego revisas el endpoint ya implementado para ver la base actual.
- Despues revisas la autenticacion, porque condiciona casi todo el resto.
- Luego recorres los recursos por dominio funcional.
- Al final cierras con convenciones transversales de errores y codigos HTTP.

## Referencias relacionadas

- [../quality/qa-strategy.md](../quality/qa-strategy.md)
- [../quality/backend-checklist.md](../quality/backend-checklist.md)
- [../product/requirements.md](../product/requirements.md)
