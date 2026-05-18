# Vision general de producto

El producto apunta a una plataforma e-learning de teologia evangelica pensada para estudio progresivo, seguimiento personal y continuidad del aprendizaje.

## Problema que busca resolver

Hoy muchas personas interesadas en estudiar Biblia y teologia encuentran contenido disperso, poco estructurado o dificil de seguir con constancia. El producto busca ofrecer una experiencia mas clara, ordenada y acumulativa.

## Resultado que se quiere lograr

La persona usuaria deberia poder:

- encontrar una ruta de aprendizaje comprensible
- avanzar por contenido organizado en cursos, unidades y lecciones
- retomar facilmente donde quedo
- ver su progreso de forma simple
- consolidar aprendizaje con evaluaciones cuando el producto madure

## Estado actual

La base tecnica del proyecto ya existe, pero la experiencia de producto todavia no esta terminada.

Hoy ya existe:

- backend Django funcional
- frontend Next.js funcional
- conexion real entre frontend y backend
- nucleo del dominio implementado con `Course`, `Unit`, `Lesson` y `LessonProgress`

Todavia sigue pendiente:

- exponer endpoints de negocio del dominio
- construir la interfaz principal de aprendizaje
- definir y validar recorridos completos de usuario en la aplicacion

## Principios de producto

- priorizar claridad por encima de complejidad visual o funcional
- construir una experiencia que favorezca continuidad, no consumo aislado
- distinguir bien lo esencial del MVP frente a ideas posteriores
- apoyar el aprendizaje con estructura, progreso y contexto

## Referencias relacionadas

- [requirements.md](./requirements.md)
- [acceptance-criteria.md](./acceptance-criteria.md)
- [users.md](./users.md)
- [mvp.md](./mvp.md)
- [user-flows.md](./user-flows.md)
- [roadmap.md](./roadmap.md)
- [../architecture/system-context.md](../architecture/system-context.md)
