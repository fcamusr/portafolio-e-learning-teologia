# API

Esta sección describe el estado actual de la API y documenta el diseño previsto para la comunicación entre frontend y backend.

## Contenido

- [overview.md](./overview.md): estado general de la API
- [authentication.md](./authentication.md): estrategia actual y futura de autenticación
- [users.md](./users.md): endpoints previstos relacionados con usuarios
- [courses.md](./courses.md): endpoints previstos para cursos
- [lessons.md](./lessons.md): endpoints previstos para lecciones
- [quizzes.md](./quizzes.md): endpoints previstos para evaluaciones
- [progress.md](./progress.md): endpoints previstos para seguimiento de avance
- [certificates.md](./certificates.md): endpoints previstos para certificados o logros
- [errors.md](./errors.md): formato sugerido para respuestas de error
- [status-codes.md](./status-codes.md): uso esperado de códigos HTTP

## Nota importante

La mayor parte de esta carpeta describe contratos proyectados, no endpoints ya implementados. Cada documento debe dejar ese estado explícito.

## Orden de lectura recomendado

1. [overview.md](./overview.md)
2. [authentication.md](./authentication.md)
3. [users.md](./users.md)
4. [courses.md](./courses.md)
5. [lessons.md](./lessons.md)
6. [quizzes.md](./quizzes.md)
7. [progress.md](./progress.md)
8. [certificates.md](./certificates.md)
9. [errors.md](./errors.md)
10. [status-codes.md](./status-codes.md)

## Por qué este orden

- Primero entiendes el estado general de la API.
- Luego revisas la autenticación, porque condiciona casi todo el resto.
- Después recorres los recursos por dominio funcional.
- Al final cierras con convenciones transversales de errores y códigos HTTP.
