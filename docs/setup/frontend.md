# Configuración del frontend

El frontend vive en `frontend/` y se ejecuta como una aplicación Next.js independiente del backend.

## 1. Instalar dependencias

Desde `frontend/`:

```powershell
npm install
```

## 2. Configurar variables de entorno

Usa `frontend/.env.example` como base y crea `frontend/.env.local`.

Variable documentada actualmente:

```text
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

## 3. Ejecutar el servidor de desarrollo

```powershell
npm run dev
```

Frontend local: [http://localhost:3000/](http://localhost:3000/)

## Estado actual del frontend

La aplicación fue creada con:

- JavaScript
- App Router
- estructura `src/`
- ESLint

La página principal todavía corresponde al scaffold inicial de Next.js, por lo que el proyecto está listo para construir la experiencia real del producto.

## Referencias relacionadas

- [../../frontend/README.md](../../frontend/README.md)
- [environment-variables.md](./environment-variables.md)
- [run-project.md](./run-project.md)
