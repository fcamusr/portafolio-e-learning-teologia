# Avance del proyecto

## Fecha de creacion del documento

2026-04-29

## Objetivo

Este documento funciona como bitacora de avance del proyecto.

Su proposito es permitir retomar el trabajo rapidamente cuando necesites recordar:

- en que punto quedo el proyecto
- que ya esta construido
- que cambios recientes se realizaron
- que deberia seguir despues

## Estado actual resumido

Hoy el proyecto ya cuenta con:

- backend Django funcional
- frontend Next.js funcional
- PostgreSQL conectado al backend
- modelo de usuario personalizado
- documentacion base organizada por areas
- base API inicial en Django REST Framework
- primer endpoint `GET /api/health/`
- primera conexion real entre frontend y backend

Todavia no existen endpoints de negocio ni una interfaz funcional del producto final. El proyecto sigue en construccion activa.

## Avances anteriores sin fecha exacta

Estos avances se registran sin fecha porque ya estaban construidos antes de crear esta bitacora y no se recuerda el dia exacto.

### Base del repositorio y entorno

- Se creo la estructura principal `Portafolio/` con `backend/`, `frontend/` y `docs/`.
- Se preparo el entorno virtual del backend.
- Se inicializo el repositorio Git y el proyecto fue subido correctamente a GitHub.
- Los archivos reales de entorno quedaron ignorados y los archivos `.env.example` quedaron listos para versionarse.

### Backend base

- Se creo el proyecto Django dentro de `backend/`.
- PostgreSQL quedo conectado al backend y el servidor fue probado correctamente.
- `settings.py` fue configurado para cargar variables desde `backend/.env` usando `python-dotenv`.
- Se instalaron y prepararon las dependencias base del backend.

### Frontend base

- Se creo el proyecto Next.js dentro de `frontend/`.
- El frontend usa JavaScript, ESLint, estructura `src/` y App Router.
- No se agrego Tailwind.
- El servidor del frontend fue probado correctamente.

### Dominio inicial de usuarios

- Se creo la app local `users` en `backend/apps/users/`.
- El modelo `User` hereda de `AbstractUser`.
- `UsersConfig` usa `apps.users`.
- La app fue registrada en `INSTALLED_APPS`.
- `AUTH_USER_MODEL` quedo configurado como `users.User`.

### Documentacion y estructura de trabajo

- Se crearon `README.md` de raiz, backend y frontend.
- Se prepararon `backend/.env`, `frontend/.env.local`, `backend/.env.example` y `frontend/.env.example`.
- Se prepararon `.gitignore` en raiz, backend y frontend.
- Se creo la estructura `docs/` para setup, arquitectura, API, base de datos y decisiones.
- Se dejaron listos los archivos `AGENTS.md` en raiz, backend y frontend para guiar el trabajo con Codex.

## Avances con fecha confirmada

### 2026-04-28

#### Backend listo como base API

- Se instalaron `djangorestframework` y `django-cors-headers`.
- Django quedo preparado para exponer API y responder solicitudes desde `http://localhost:3000`.
- Se registro la configuracion base de CORS para desarrollo local.
- Se creo la app `core` en `backend/apps/core/`.
- Se implemento el primer endpoint `GET /api/health/`.
- El backend quedo respondiendo como API usando Django REST Framework.

### 2026-04-29

#### Primera conexion real entre frontend y backend

- El frontend comenzo a consumir el backend Django.
- Se uso `NEXT_PUBLIC_API_BASE_URL` como URL base del backend.
- Se creo `frontend/src/lib/api.js` con la funcion `getHealth()`.
- `frontend/src/app/page.js` paso a consultar `GET /api/health/` desde un Server Component.
- La pagina principal ya muestra en pantalla el estado del backend devuelto por Django.

### 2026-05-04

#### Decision documental del nucleo inicial del MVP

- Se dejo documentado que el nucleo inicial planificado del dominio estara formado por `Course`, `Unit`, `Lesson` y `LessonProgress`.
- Se corrigieron referencias documentales que todavia hablaban de `Module` o de un `Progress` generico.
- Quedo explicitado en la documentacion que esta decision ya esta registrada, pero que esos modelos y apps de negocio aun no existen en el codigo.

### 2026-05-05

#### App `learning` creada como base del dominio

- Se verifico la creacion de `backend/apps/learning/` con `apps.py`, `models.py`, `admin.py`, `views.py`, `tests.py` y carpeta `migrations/`.
- `LearningConfig` quedo registrada en `INSTALLED_APPS` dentro de `backend/config/settings.py`.
- Quedo documentado que `learning` ya esta implementada como app local, pero que `Course`, `Unit`, `Lesson` y `LessonProgress` aun no existen como modelos ni como endpoints.

#### Primer modelo real del dominio documentado

- Se verifico que `backend/apps/learning/models.py` ya implementa `Course`.
- Se verifico la migracion `backend/apps/learning/migrations/0001_initial.py` para crear ese modelo.
- Se corrigio la documentacion que todavia describia a `learning` como app sin modelos, dejando `Course` como implementado y `Unit`, `Lesson` y `LessonProgress` como planificados.

## Ultimo punto alcanzado

El ultimo avance real del dominio es la implementacion de `Course` como primer modelo dentro de `learning`, sobre una base donde la conexion `Next.js <-> Django` ya estaba funcionando con `GET /api/health/`.

## Proximo paso sugerido

El siguiente avance natural puede ir por una de estas dos rutas:

1. mejorar la UI inicial del frontend para salir de la pantalla de prueba
2. continuar dentro de `learning` con los modelos `Unit`, `Lesson` y `LessonProgress`

Recomendacion actual: continuar con `Unit`, `Lesson` y `LessonProgress`, porque `Course` ya quedo como primera base real del dominio.

## Regla de mantenimiento de esta bitacora

A partir de este documento, cada avance nuevo del proyecto debe registrarse aqui con fecha.

Cuando se actualice, conviene anotar al menos:

- fecha
- que se hizo
- que archivos o areas fueron impactadas
- como quedo verificado
- cual es el siguiente paso recomendado
