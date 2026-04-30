# API

Esta seccion describe el estado actual de la API y documenta el diseno previsto para la comunicacion entre frontend y backend.

## Contenido

- [overview.md](./overview.md): estado general de la API
- [health.md](./health.md): endpoint tecnico de salud actualmente implementado
- [authentication.md](./authentication.md): estrategia actual y futura de autenticacion
- [users.md](./users.md): endpoints previstos relacionados con usuarios
- [courses.md](./courses.md): endpoints previstos para cursos
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

## Orden de lectura recomendado

1. [overview.md](./overview.md)
2. [health.md](./health.md)
3. [authentication.md](./authentication.md)
4. [users.md](./users.md)
5. [courses.md](./courses.md)
6. [lessons.md](./lessons.md)
7. [quizzes.md](./quizzes.md)
8. [progress.md](./progress.md)
9. [certificates.md](./certificates.md)
10. [errors.md](./errors.md)
11. [status-codes.md](./status-codes.md)

## Por que este orden

- Primero entiendes el estado general de la API.
- Luego revisas el endpoint ya implementado para ver la base actual.
- Despues revisas la autenticacion, porque condiciona casi todo el resto.
- Luego recorres los recursos por dominio funcional.
- Al final cierras con convenciones transversales de errores y codigos HTTP.
