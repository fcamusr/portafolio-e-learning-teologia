# Visión general de arquitectura

El proyecto está organizado como un repositorio con frontend y backend separados, pero alineados como una sola solución de producto.

## Componentes principales

### Backend

Django concentra:

- modelos y persistencia de datos
- autenticación del sistema
- lógica de negocio
- futura exposición de API

### Frontend

Next.js concentra:

- experiencia de usuario
- navegación
- composición de pantallas y componentes
- consumo del backend mediante HTTP

### Base de datos

PostgreSQL es el motor de datos principal y es accedido desde Django a través del ORM.

## Estilo arquitectónico

La decisión actual es avanzar con un monolito modular:

- un solo proyecto Django
- apps separadas por dominio dentro de `backend/apps/`
- un frontend desacoplado en `frontend/`

Este enfoque permite crecer sin introducir complejidad innecesaria demasiado pronto.

## Estado actual

La arquitectura ya está definida a nivel estructural, pero la mayoría de los dominios de negocio todavía no están implementados. Hoy existe principalmente la base técnica inicial:

- proyecto Django funcional
- proyecto Next.js funcional
- modelo `User` personalizado
- configuración de PostgreSQL

## Referencias relacionadas

- [system-context.md](./system-context.md)
- [modules.md](./modules.md)
- [backend-frontend-communication.md](./backend-frontend-communication.md)
