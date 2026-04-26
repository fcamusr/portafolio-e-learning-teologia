# Setup

Esta sección reúne todo lo necesario para preparar y ejecutar el proyecto en un entorno local de desarrollo.

## Contenido

- [prerequisites.md](./prerequisites.md): herramientas necesarias antes de comenzar
- [backend.md](./backend.md): instalación y ejecución del backend Django
- [frontend.md](./frontend.md): instalación y ejecución del frontend Next.js
- [database.md](./database.md): preparación de PostgreSQL y migraciones
- [environment-variables.md](./environment-variables.md): variables de entorno esperadas
- [run-project.md](./run-project.md): secuencia recomendada para levantar el proyecto
- [troubleshooting.md](./troubleshooting.md): problemas comunes y verificaciones rápidas

## Objetivo

El objetivo de esta carpeta es que cualquier persona pueda:

- instalar las dependencias necesarias
- configurar las variables de entorno sin exponer secretos
- levantar backend y frontend con pasos reproducibles

## Orden de lectura recomendado

### Recorrido completo

1. [prerequisites.md](./prerequisites.md)
2. [environment-variables.md](./environment-variables.md)
3. [database.md](./database.md)
4. [backend.md](./backend.md)
5. [frontend.md](./frontend.md)
6. [run-project.md](./run-project.md)
7. [troubleshooting.md](./troubleshooting.md)

### Por qué este orden

- Primero validas herramientas y dependencias base.
- Luego entiendes qué configuración necesita el proyecto.
- Después preparas la base de datos antes de ejecutar Django.
- Finalmente levantas backend y frontend y dejas `troubleshooting.md` como apoyo si algo falla.
