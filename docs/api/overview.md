# Vision general de API

La API es el contrato principal entre el backend Django y el frontend Next.js.

## Estado actual

Hoy no existen endpoints de negocio implementados, pero la base API ya esta operativa. El backend expone:

- la ruta administrativa estandar de Django en `/admin/`
- un endpoint tecnico de salud en `/api/health/`
- la configuracion inicial de Django REST Framework y CORS para integracion local con el frontend
- una primera integracion real desde la pagina principal de Next.js consumiendo ese endpoint

## Objetivo

La API debera exponer datos y acciones relacionadas con:

- usuarios
- cursos y lecciones
- evaluaciones
- progreso
- certificados o logros

## Formato esperado

La expectativa es trabajar con respuestas JSON y contratos consistentes entre recursos. Ese patron ya comienza a verse en el endpoint de salud, que responde usando `Response` de DRF.

## Principio de diseno

El frontend no debe comunicarse directamente con la base de datos. Toda operacion de negocio debe pasar por el backend.

## Observacion tecnica

La base tecnica actual incluye:

- `djangorestframework` en dependencias y `INSTALLED_APPS`
- `django-cors-headers` en dependencias, `INSTALLED_APPS` y `MIDDLEWARE`
- `CORS_ALLOWED_ORIGINS` con `http://localhost:3000`
- el prefijo de rutas `api/` conectado desde `backend/config/urls.py`

Esto deja preparado el backend para que el frontend en `http://localhost:3000` pueda consumir el backend en `http://127.0.0.1:8000` sin abrir CORS de forma global.
