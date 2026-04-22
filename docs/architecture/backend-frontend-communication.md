```md
# Comunicación backend-frontend

Django y Next.js se comunicarán mediante HTTP.

## Backend

Django expondrá endpoints de API.

Ejemplo planificado:

```text
/api/...
Frontend

Next.js consumirá esos endpoints usando fetch u otra capa de cliente HTTP cuando sea necesario.

Desarrollo local

Backend:

http://127.0.0.1:8000/

Frontend:

http://localhost:3000/
Nota

Cuando se implemente la API, se deberá configurar CORS para permitir comunicación segura entre ambos servidores.