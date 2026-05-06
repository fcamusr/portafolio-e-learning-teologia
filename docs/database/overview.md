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

El dominio ya cuenta con relaciones reales entre curso, unidad, leccion y progreso. `Lesson` usa `text_content` como campo textual actual para no cerrar la puerta a soportar otros formatos de contenido en el futuro.

## Alcance documental

Mientras la capa API y otras areas del producto sigan creciendo, esta seccion debe documentar con precision que tablas, relaciones, constraints y migraciones existen efectivamente y cuales siguen siendo proyecciones de diseno.
