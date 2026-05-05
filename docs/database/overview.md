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

Hoy la base de datos soporta principalmente la base tecnica inicial del backend:

- conexion configurada mediante variables de entorno
- migraciones de Django aplicables
- modelo `User` personalizado como primera entidad del dominio
- app `learning` creada y registrada para alojar el nucleo del MVP
- modelo `Course` implementado como primer modelo real del dominio en `learning`

Hoy `Course` ya tiene definicion de modelo y migracion inicial. `Unit`, `Lesson` y `LessonProgress` todavia no existen como tablas propias del dominio.

## Alcance documental

Mientras el dominio real aun no este implementado, esta seccion debe documentar con precision que tablas y relaciones existen efectivamente y cuales siguen siendo proyecciones de diseno.
