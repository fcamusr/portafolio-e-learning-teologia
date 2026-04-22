# Frontend - Next.js

Frontend del proyecto e-learning de teología.

Este frontend está construido con Next.js usando JavaScript, ESLint, estructura `src/` y App Router.

Su responsabilidad será mostrar la interfaz de usuario, manejar navegación, consumir la API del backend Django y entregar una experiencia amigable para el aprendizaje bíblico y teológico.

## Estructura actual

```text
frontend/
├── public/
├── src/
│   └── app/
├── .env.local
├── .env.example
├── .gitignore
├── package.json
├── next.config.mjs
└── README.md
Variables de entorno

El frontend usa .env.local para configuración local.

Este archivo no debe subirse a GitHub.

El archivo .env.example sí debe subirse para mostrar qué variables se necesitan.

Ejecutar frontend

Desde la carpeta frontend/:

npm run dev

El servidor se ejecuta en:

http://localhost:3000/
Rol dentro de la arquitectura

Next.js funciona como frontend de la aplicación.

Django seguirá siendo el backend principal y la fuente de datos mediante API.