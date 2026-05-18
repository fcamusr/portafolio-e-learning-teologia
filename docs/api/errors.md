# Errores de API

Este documento propone una convencion para respuestas de error a medida que la API del proyecto crezca.

## Estado actual

Ya existe una base API inicial, pero todavia no hay un formato de errores formalizado entre endpoints de negocio. El endpoint `/api/health/` no define por si solo una convencion general de errores para el resto del sistema.

## Formato sugerido

```json
{
  "error": "Mensaje breve",
  "detail": "Detalle adicional para diagnostico",
  "code": "ERROR_CODE"
}
```

## Criterio

El formato definitivo deberia ser consistente en todos los endpoints y suficientemente estable para que el frontend pueda manejar errores de forma predecible.

## Referencias relacionadas

- [status-codes.md](./status-codes.md)
- [../quality/qa-strategy.md](../quality/qa-strategy.md)
- [../quality/backend-checklist.md](../quality/backend-checklist.md)
