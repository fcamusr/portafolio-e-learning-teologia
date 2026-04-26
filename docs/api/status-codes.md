# Códigos de estado HTTP

Este documento resume los códigos de estado que deberían usarse de forma consistente cuando la API exista.

## Códigos comunes

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

El código HTTP debe reflejar la intención real de la respuesta. No conviene devolver siempre `200` cuando hubo errores de validación, autorización o inexistencia de recursos.
