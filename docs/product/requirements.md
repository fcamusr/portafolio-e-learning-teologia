# Requerimientos del producto

## Proposito

Concentrar los requerimientos funcionales y no funcionales de mayor nivel del producto para evitar que queden dispersos entre roadmap, API, arquitectura o tareas sueltas.

## Alcance

Este documento describe que necesita lograr el producto. No define contratos HTTP ni detalle de implementacion tecnica.

## Contenido principal

### Requerimientos funcionales vigentes

Los siguientes requerimientos reflejan el alcance funcional hoy documentado para el flujo principal del MVP:

- El sistema debe permitir visualizar cursos disponibles.
- El sistema debe permitir entrar a un curso y recorrer sus unidades.
- El sistema debe permitir abrir lecciones y consumir su contenido principal.
- El sistema debe permitir registrar o actualizar avance por leccion.
- El sistema debe ayudar a retomar el estudio desde el ultimo punto relevante.

### Requerimientos funcionales posteriores al MVP

Estos puntos existen como direccion futura, pero no forman parte del cierre minimo actual:

- evaluaciones o quizzes
- certificados o logros
- herramientas editoriales o administrativas mas completas
- recomendaciones personalizadas

### Requerimientos no funcionales base

- La experiencia debe ser clara y comprensible para una persona que estudia de forma individual.
- La aplicacion debe mantener separacion entre frontend, backend y base de datos.
- La documentacion debe distinguir lo implementado de lo planificado.
- Las variables sensibles deben mantenerse fuera del repositorio.
- La base tecnica debe permitir evolucion progresiva sin sobreingenieria.

### Reglas de negocio actuales y supuestos iniciales

- La jerarquia principal del contenido es `Course -> Unit -> Lesson`.
- El progreso base se mide por leccion mediante `LessonProgress`.
- La continuidad del aprendizaje es parte central del valor del producto.
- Pendiente por definir: reglas exactas para marcar una leccion como completada.
- Pendiente por definir: reglas exactas para desbloqueo, orden forzado o prerequisitos entre lecciones.
- Pendiente por definir: reglas exactas de evaluacion, aprobacion y certificados.

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
