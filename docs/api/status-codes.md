# Codigos de estado HTTP

Este documento resume los codigos de estado que deberian usarse de forma consistente a medida que la API del proyecto crezca.

## Estado actual

El endpoint tecnico `/api/health/` responde con `200 OK` cuando el backend esta funcionando correctamente. Aun no existe una convencion completa aplicada a endpoints de negocio.

## Codigos comunes

```text
200 OK
201 Created
204 No Content
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
500 Internal Server Error
```

## Regla

El codigo HTTP debe reflejar la intencion real de la respuesta. No conviene devolver siempre `200` cuando hubo errores de validacion, autorizacion o inexistencia de recursos.
