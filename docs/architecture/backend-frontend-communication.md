# Comunicación backend-frontend

La comunicación entre backend y frontend está pensada mediante HTTP, con Django como fuente de datos y Next.js como consumidor.

## Estado actual

Actualmente:

- el backend expone la ruta administrativa `/admin/`
- todavía no existen endpoints API de negocio
- el frontend ya contempla la variable `NEXT_PUBLIC_API_BASE_URL` para apuntar al backend

## Dirección de diseño

Cuando la API se implemente:

- Django expondrá endpoints bajo una convención consistente, previsiblemente en rutas como `/api/...`
- Next.js consumirá esos endpoints con `fetch` u otra capa HTTP
- el frontend no deberá conectarse directamente a la base de datos

## Entorno local

- Backend: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)
- Frontend: [http://localhost:3000/](http://localhost:3000/)

## Consideraciones futuras

Cuando ambos servicios intercambien datos reales, habrá que definir explícitamente:

- estrategia de autenticación
- formato de errores
- política de CORS
- versionado o estabilidad del contrato API
