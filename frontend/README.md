README raíz:
Presenta el proyecto.

backend/README.md:
Explica cómo instalar y ejecutar backend.

frontend/README.md:
Explica cómo instalar y ejecutar frontend.

docs/:
Explica decisiones, arquitectura y detalles profundos.



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



El README del frontend debe explicar cómo trabajar con Next.js.

Debe contener:

```txt
Qué es el frontend.
Tecnologías.
Instalación.
Variables de entorno.
Ejecutar servidor.
Build.
Estructura de carpetas.
Rutas principales.
Comunicación con backend.
Enlaces a documentación.

Ejemplo:

# Frontend

Frontend de la plataforma e-learning de teología, construido con Next.js y React.

## Responsabilidades

- Mostrar cursos.
- Mostrar lecciones.
- Gestionar navegación del estudiante.
- Mostrar progreso.
- Renderizar evaluaciones.
- Consumir la API del backend.
- Mostrar certificados.

## Tecnologías

- Next.js
- React
- JavaScript / TypeScript
- CSS Modules / Tailwind CSS

## Instalación

```bash
npm install
Variables de entorno

Crear archivo .env.local.

Usar como referencia:

.env.example

Variable principal:

NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api
Ejecutar servidor de desarrollo
npm run dev
Build de producción
npm run build
Estructura general
frontend/
├── src/
│   ├── app/
│   ├── components/
│   ├── services/
│   ├── hooks/
│   └── styles/
├── public/
├── package.json
└── README.md
Documentación relacionada
docs/frontend/overview.md
docs/frontend/routing.md
docs/frontend/components.md
docs/frontend/api-integration.md