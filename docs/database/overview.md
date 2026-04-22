# Visión general de base de datos

El proyecto usa PostgreSQL como base de datos principal.

Django se comunica con PostgreSQL mediante su ORM.

## Objetivo

Guardar información de:

- Usuarios.
- Cursos.
- Lecciones.
- Evaluaciones.
- Progreso.
- Reflexiones.
- Certificados o logros.

## Estado actual

La base de datos está conectada con Django.

El primer modelo personalizado importante es `User`.

Django soporta oficialmente PostgreSQL como backend de base de datos, entre otros motores.