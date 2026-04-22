# Visión general de arquitectura

El proyecto usa arquitectura separada entre backend y frontend.

## Backend

Django será el backend principal.

Responsabilidades:

- Modelos.
- Base de datos.
- Autenticación.
- Lógica de negocio.
- API.

## Frontend

Next.js será el frontend.

Responsabilidades:

- Interfaz de usuario.
- Navegación.
- Experiencia de aprendizaje.
- Consumo de API.

## Base de datos

PostgreSQL será la base de datos principal.

## Estilo arquitectónico

Se usará un monolito modular en Django.

Esto significa que el backend será un solo proyecto Django, pero organizado en apps separadas por dominio.