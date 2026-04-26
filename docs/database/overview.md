# Visión general de base de datos

El proyecto usa PostgreSQL como motor de datos principal y Django se comunica con él mediante el ORM.

## Objetivo del modelo de datos

El sistema está pensado para almacenar información relacionada con:

- usuarios
- cursos y lecciones
- evaluaciones
- progreso
- notas o reflexiones
- certificados o logros

## Estado actual

Hoy la base de datos soporta principalmente la base técnica inicial del backend:

- conexión configurada mediante variables de entorno
- migraciones de Django aplicables
- modelo `User` personalizado como primera entidad del dominio

## Alcance documental

Mientras el dominio real aún no esté implementado, esta sección debe documentar con precisión qué tablas y relaciones existen efectivamente y cuáles siguen siendo proyecciones de diseño.
