# Frontend

Frontend del proyecto, construido con Next.js y App Router. Su objetivo es entregar la experiencia de usuario de la plataforma, manejar navegacion y consumir los datos expuestos por el backend.

## Alcance actual

Actualmente el frontend incluye:

- Aplicacion Next.js creada en `frontend/`
- Estructura `src/app/` con App Router
- Carpeta `src/lib/` para logica compartida de acceso a datos
- Configuracion base de ESLint
- Variable de entorno publica para la URL del backend
- Primera integracion real con Django consumiendo `GET /api/health/`

La interfaz sigue siendo simple, pero ya no corresponde solo al scaffold inicial: la pagina principal consulta el backend y muestra en pantalla el estado de la API.

## Estructura relevante

```text
frontend/
|-- public/
|-- src/
|   |-- app/
|   `-- lib/
|       `-- api.js
|-- .env.example
|-- eslint.config.mjs
|-- jsconfig.json
|-- next.config.mjs
|-- package.json
`-- README.md
```

- `src/app/`: rutas, layout y paginas del frontend
- `src/lib/api.js`: funciones reutilizables para consultar el backend
- `public/`: archivos estaticos
- `package.json`: scripts y dependencias del proyecto

## Configuracion local

Desde `frontend/`, instala las dependencias:

```powershell
npm install
```

Copia `frontend/.env.example` a `frontend/.env.local` y ajusta los valores segun tu entorno.

## Ejecucion

Inicia el servidor de desarrollo:

```powershell
npm run dev
```

La aplicacion queda disponible en [http://localhost:3000/](http://localhost:3000/).

## Variables de entorno

El frontend expone actualmente una sola variable documentada:

- `NEXT_PUBLIC_API_BASE_URL`: URL base del backend que consumira la aplicacion

Como la variable usa el prefijo `NEXT_PUBLIC_`, su valor puede ser accesible desde el navegador. No debe usarse para secretos.

## Relacion con el backend

El frontend no accede directamente a la base de datos. Toda integracion de negocio debe realizarse a traves del backend Django mediante HTTP.

La primera conexion real ya esta implementada asi:

- `frontend/src/lib/api.js` construye la URL usando `process.env.NEXT_PUBLIC_API_BASE_URL`
- `getHealth()` consulta `GET /api/health/`
- `frontend/src/app/page.js` usa esa funcion desde un Server Component
- la pagina principal muestra `status`, `service` y `message` devueltos por Django

## Verificacion rapida

Con backend y frontend levantados:

- abre [http://localhost:3000/](http://localhost:3000/)
- verifica que aparezca el mensaje de primera conexion entre Next.js y Django
- confirma que se muestren los datos del backend devueltos por `/api/health/`

## Referencias relacionadas

- [docs/setup/frontend.md](../docs/setup/frontend.md)
- [docs/setup/environment-variables.md](../docs/setup/environment-variables.md)
- [docs/architecture/backend-frontend-communication.md](../docs/architecture/backend-frontend-communication.md)
