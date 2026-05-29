# Vision general de arquitectura

El proyecto esta organizado como un repositorio con frontend y backend separados, pero alineados como una sola solucion de producto.

## Componentes principales

### Backend

Django concentra:

- modelos y persistencia de datos
- autenticacion del sistema
- logica de negocio
- exposicion de API

### Frontend

Next.js concentra:

- experiencia de usuario
- navegacion
- composicion de pantallas y componentes
- consumo del backend mediante HTTP

### Base de datos

PostgreSQL es el motor de datos principal y es accedido desde Django a traves del ORM.

## Estilo arquitectonico

La decision actual es avanzar con un monolito modular:

- un solo proyecto Django
- apps separadas por dominio dentro de `backend/apps/`
- un frontend desacoplado en `frontend/`

Este enfoque permite crecer sin introducir complejidad innecesaria demasiado pronto.

## Estado actual

La arquitectura ya esta definida a nivel estructural. La capa API de negocio todavia no esta completa, pero ya existe una primera exposicion real del dominio. Hoy existe principalmente esta base:

- proyecto Django funcional
- proyecto Next.js funcional
- modelo `User` personalizado
- app local `learning` creada y registrada en `INSTALLED_APPS` como contenedor del nucleo inicial del dominio
- modelos `Course`, `Unit`, `Lesson` y `LessonProgress` implementados dentro de `learning`
- configuracion de PostgreSQL
- base API con Django REST Framework
- configuracion CORS para desarrollo local
- endpoint tecnico `/api/health/`
- endpoint de dominio `GET /api/courses/`
- primera conexion real Next.js <-> Django desde `frontend/src/app/page.js`

El nucleo del dominio ya existe en base de datos y ya cuenta con un primer endpoint propio para cursos publicados. En `Lesson`, el contenido textual actual se modela con `text_content` para dejar abierta la evolucion futura hacia otros tipos de contenido.

## Referencias relacionadas

- [system-context.md](./system-context.md)
- [modules.md](./modules.md)
- [backend-frontend-communication.md](./backend-frontend-communication.md)
