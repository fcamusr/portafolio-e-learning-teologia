# Requerimientos del producto

## Proposito

Concentrar los requerimientos funcionales y no funcionales de mayor nivel del producto para evitar que queden dispersos entre roadmap, API, arquitectura o tareas sueltas.

## Alcance

Este documento describe que necesita lograr el producto. No define contratos HTTP ni detalle de implementacion tecnica.

## Contenido principal

### Requerimientos funcionales vigentes

Los siguientes requerimientos reflejan el alcance funcional hoy documentado para el flujo principal del MVP:

- El sistema debe presentar una ruta de aprendizaje inicial asociada a un unico curso.
- El sistema debe mostrar las unidades del curso como un camino de aprendizaje.
- El sistema debe permitir seleccionar una unidad desbloqueada y ver sus clases en un modal.
- El sistema debe permitir abrir una clase de texto desde el modal.
- El sistema debe marcar automaticamente una clase como vista cuando el usuario entra a su pantalla de contenido.
- El sistema debe permitir navegar libremente entre las clases de texto de una unidad desbloqueada.
- El sistema debe bloquear el quiz de la unidad hasta que todas sus clases de texto hayan sido vistas.
- El sistema debe permitir realizar el quiz de la unidad cuando cumpla los requisitos de desbloqueo.
- El sistema debe validar el quiz con un maximo permitido de respuestas erroneas.
- El sistema debe repetir el cuestionario con preguntas nuevas si el usuario no lo aprueba.
- El sistema debe marcar la unidad como completada y desbloquear la siguiente solo cuando el quiz haya sido aprobado.
- El sistema debe ayudar a retomar el estudio desde el ultimo punto relevante.
- El sistema debe permitir login y registro para asociar progreso a una cuenta real.

### Requerimientos funcionales posteriores al MVP

Estos puntos existen como direccion futura, pero no forman parte del cierre minimo actual:

- certificados o logros
- herramientas editoriales o administrativas mas completas
- recomendaciones personalizadas
- dashboards de avance o seguimiento

### Requerimientos no funcionales base

- La experiencia debe ser clara y comprensible para una persona que estudia de forma individual.
- La aplicacion debe mantener separacion entre frontend, backend y base de datos.
- La documentacion debe distinguir lo implementado de lo planificado.
- Las variables sensibles deben mantenerse fuera del repositorio.
- La base tecnica debe permitir evolucion progresiva sin sobreingenieria.

### Reglas de negocio actuales y supuestos iniciales

- La jerarquia principal del contenido es `Course -> Unit -> Lesson`.
- El progreso base se mide por leccion mediante `LessonProgress`.
- El MVP inicial parte con un solo curso visible para el usuario; por eso la experiencia prioriza ruta de aprendizaje por sobre catalogo de cursos.
- Las unidades funcionan como etapas de una ruta: solo la siguiente unidad se desbloquea cuando la unidad actual se completa.
- Una clase de texto se marca como vista automaticamente al entrar a su pantalla.
- El quiz de una unidad se desbloquea solo cuando todas las clases de texto de esa unidad fueron vistas.
- La aprobacion del quiz debe considerar un maximo permitido de respuestas erroneas.
- Si el usuario no aprueba el quiz, debe repetir un cuestionario con preguntas nuevas.
- La unidad se completa solo cuando el quiz fue aprobado.
- La siguiente unidad se desbloquea solo despues de completar la unidad anterior.
- El producto puede incluir dashboards, pero no reportes como foco inicial.
- La continuidad del aprendizaje es parte central del valor del producto.
- Pendiente por definir: cantidad exacta de respuestas erroneas permitidas para aprobar un quiz.
- Pendiente por definir: estrategia exacta de generacion o seleccion de preguntas nuevas al repetir quiz.
- Pendiente por definir: reglas exactas de dashboard y metricas visibles para el usuario.

## Relacion con otros documentos

- [mvp.md](./mvp.md) delimita que parte de estos requerimientos entra primero.
- [acceptance-criteria.md](./acceptance-criteria.md) traduce estos requerimientos a criterios verificables.
- [user-flows.md](./user-flows.md) muestra los recorridos que deben soportarlos.
- [../api/README.md](../api/README.md) documenta como estos requerimientos deberian exponerse por API.
- [../architecture/README.md](../architecture/README.md) documenta la estructura tecnica que los sostiene.

## Pendientes

- Requiere validacion: priorizacion detallada por pantalla y por endpoint.
- No documentado todavia: requerimientos de autenticacion aplicada al flujo real.
- No documentado todavia: requerimientos de administracion de contenido.

## Ultima actualizacion

2026-05-18
