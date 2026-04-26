# Errores de API

Este documento propone una convención para respuestas de error cuando la API sea implementada.

## Estado actual

Todavía no existe una capa API con formato de errores formalizado.

## Formato sugerido

```json
{
  "error": "Mensaje breve",
  "detail": "Detalle adicional para diagnóstico",
  "code": "ERROR_CODE"
}
```

## Criterio

El formato definitivo debería ser consistente en todos los endpoints y suficientemente estable para que el frontend pueda manejar errores de forma predecible.
