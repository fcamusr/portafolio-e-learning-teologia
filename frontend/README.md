# Frontend

Frontend del proyecto, construido con Next.js y App Router. Su objetivo es entregar la experiencia de usuario de la plataforma, manejar navegación y consumir los datos expuestos por el backend.

## Alcance actual

Actualmente el frontend incluye:

- Aplicación Next.js creada en `frontend/`
- Estructura `src/app/` con App Router
- Configuración base de ESLint
- Variable de entorno pública para la URL del backend

La interfaz aún corresponde en gran parte al scaffold inicial de Next.js, por lo que este módulo debe entenderse como una base técnica lista para evolucionar.

## Estructura relevante

```text
frontend/
|-- public/
|-- src/
|   `-- app/
|-- .env.example
|-- eslint.config.mjs
|-- jsconfig.json
|-- next.config.mjs
|-- package.json
`-- README.md
```

- `src/app/`: rutas, layout y páginas del frontend
- `public/`: archivos estáticos
- `package.json`: scripts y dependencias del proyecto

## Configuración local

Desde `frontend/`, instala las dependencias:

```powershell
npm install
```

Copia `frontend/.env.example` a `frontend/.env.local` y ajusta los valores según tu entorno.

## Ejecución

Inicia el servidor de desarrollo:

```powershell
npm run dev
```

La aplicación queda disponible en [http://localhost:3000/](http://localhost:3000/).

## Variables de entorno

El frontend expone actualmente una sola variable documentada:

- `NEXT_PUBLIC_API_BASE_URL`: URL base del backend que consumirá la aplicación

Como la variable usa el prefijo `NEXT_PUBLIC_`, su valor puede ser accesible desde el navegador. No debe usarse para secretos.

## Relación con el backend

El frontend no accede directamente a la base de datos. Toda integración de negocio debe realizarse a través del backend Django mediante HTTP.

Mientras la API no exista, el frontend puede evolucionar de forma independiente en layout, navegación y componentes base.

## Referencias relacionadas

- [docs/setup/frontend.md](../docs/setup/frontend.md)
- [docs/setup/environment-variables.md](../docs/setup/environment-variables.md)
- [docs/architecture/backend-frontend-communication.md](../docs/architecture/backend-frontend-communication.md)
