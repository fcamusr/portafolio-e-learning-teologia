docs/architecture/backend-frontend-communication.md

Explica cómo se comunican Django y Next.js.

Contendría:

URL base de la API.
Autenticación.
Tokens o sesiones.
CORS.
Manejo de errores.
Flujo de login.
Flujo de logout.
Flujo de refresco de sesión si aplica.

Ejemplo:

# Comunicación entre backend y frontend

El frontend consume datos desde el backend mediante peticiones HTTP.

En desarrollo local:

- Backend: `http://127.0.0.1:8000`
- Frontend: `http://localhost:3000`

La API responde en formato JSON.

El frontend no accede directamente a la base de datos. Toda operación sobre usuarios, cursos, evaluaciones y progreso pasa por el backend.