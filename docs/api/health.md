# Endpoint de salud

Este documento describe el primer endpoint API real implementado en el backend.

## Objetivo

`/api/health/` permite comprobar rapidamente que:

- Django esta ejecutandose
- el enrutamiento principal del proyecto funciona
- Django REST Framework responde correctamente
- la base inicial para la integracion con el frontend ya existe

No representa logica de negocio. Es un endpoint tecnico de verificacion.

## Estado actual

Actualmente este endpoint vive en la app `core`, ubicada en `backend/apps/core/`.

La ruta principal se conecta asi:

- `backend/config/urls.py` delega `api/` a `apps.core.urls`
- `backend/apps/core/urls.py` registra `health/`
- `backend/apps/core/views.py` devuelve la respuesta API

## Contrato actual

- Metodo: `GET`
- Ruta: `/api/health/`
- Autenticacion requerida: no
- Uso principal: verificacion tecnica local

Respuesta esperada:

```json
{
  "status": "ok",
  "service": "backend",
  "message": "Django API funcionando correctamente"
}
```

Estado HTTP esperado:

- `200 OK` cuando el backend responde correctamente

## Consumo actual desde el frontend

El primer consumidor real de este endpoint es el frontend Next.js:

- `frontend/src/lib/api.js` define `getHealth()`
- `frontend/src/app/page.js` ejecuta esa funcion desde la pagina principal
- el navegador muestra los datos devueltos por Django ya renderizados por Next.js

## Verificacion local

Con backend y frontend levantados:

1. Ejecuta `python manage.py runserver` desde `backend/`.
2. Ejecuta `npm run dev` desde `frontend/`.
3. Abre [http://127.0.0.1:8000/api/health/](http://127.0.0.1:8000/api/health/).
4. Abre [http://localhost:3000/](http://localhost:3000/) y confirma que aparecen `status`, `service` y `message`.

Segun el cliente, puedes ver JSON puro o la interfaz navegable de Django REST Framework. Ambas respuestas son validas.
