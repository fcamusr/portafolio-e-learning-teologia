# 0001 - Usar Django como backend

## Estado

Aceptada

## Contexto

El proyecto requiere una base robusta para autenticación, modelos, administración de datos y lógica de negocio, sin invertir demasiado tiempo en construir infraestructura básica desde cero.

## Decisión

Usar Django como backend principal del proyecto.

## Consecuencias

- La lógica de negocio vivirá principalmente en el backend Django.
- El ORM de Django será la base para el modelo de datos.
- El panel admin queda disponible como herramienta operativa.

## Alternativas consideradas

- Node.js
- Express
- Backend propio en Next.js
