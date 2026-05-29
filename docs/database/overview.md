# Vision general de base de datos

El proyecto usa PostgreSQL como motor de datos principal y Django se comunica con el mediante el ORM.

## Objetivo del modelo de datos

El sistema esta pensado para almacenar informacion relacionada con:

- usuarios
- la estructura `Course -> Unit -> Lesson`
- progreso de usuario por leccion mediante `LessonProgress`
- evaluaciones
- notas o reflexiones
- certificados o logros

## Estado actual

Hoy la base de datos soporta principalmente:

- conexion configurada mediante variables de entorno
- migraciones de Django aplicadas
- modelo `User` personalizado como primera entidad del dominio
- app `learning` creada y registrada para alojar el nucleo del MVP
- modelos `Course`, `Unit`, `Lesson` y `LessonProgress` implementados como primer nucleo real del dominio
- validacion manual desde Django admin del flujo `Course -> Unit -> Lesson -> LessonProgress` con datos reales de prueba

El dominio ya cuenta con relaciones reales entre curso, unidad, leccion y progreso. `Lesson` usa `text_content` como campo textual actual para no cerrar la puerta a soportar otros formatos de contenido en el futuro.

## Distincion de estado

- Implementado: existen los modelos `Course`, `Unit`, `Lesson` y `LessonProgress`, sus relaciones y sus migraciones.
- Validado manualmente: el flujo `Course -> Unit -> Lesson -> LessonProgress` ya fue cargado y probado desde Django admin con datos reales de prueba.
- Planificado: los endpoints de negocio, seeds automaticos y flujos funcionales completos del producto todavia no forman parte del estado implementado.

## Alcance documental

Mientras la capa API y otras areas del producto sigan creciendo, esta seccion debe documentar con precision que tablas, relaciones, constraints y migraciones existen efectivamente y cuales siguen siendo proyecciones de diseno.
