# API de usuarios

## Estado actual

No hay endpoints de usuarios implementados todavía.

## Base relacionada

El dominio de usuarios parte desde el modelo definido en:

```text
backend/apps/users/models.py
```

## Endpoints previstos

Las siguientes rutas son referenciales y no deben considerarse contrato definitivo todavía:

```text
GET  /api/users/me/
POST /api/auth/login/
POST /api/auth/logout/
POST /api/auth/register/
```

## Nota

Cuando estos endpoints existan realmente, este documento debe ampliarse con payloads, respuestas, reglas de autorización y códigos de error.
