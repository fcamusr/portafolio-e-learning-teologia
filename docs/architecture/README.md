# Arquitectura

Esta sección documenta cómo está pensado el sistema: su contexto, sus límites, la distribución de responsabilidades y los criterios de crecimiento.

## Contenido

- [DIAGRAMS.md](./DIAGRAMS.md): vistas visuales de contexto, contenedores, componentes, arquitectura y bloques principales
- [overview.md](./overview.md): visión general de la solución técnica
- [system-context.md](./system-context.md): problema que resuelve el producto y actores principales
- [folder-structure.md](./folder-structure.md): organización del repositorio
- [backend-frontend-communication.md](./backend-frontend-communication.md): relación entre Django y Next.js
- [modules.md](./modules.md): módulos actuales y dominios previstos
- [scalability.md](./scalability.md): criterios de evolución del sistema

## Objetivo

La intención de esta carpeta no es solo describir carpetas, sino dejar claros los principios que guían decisiones técnicas y el porqué de la estructura actual.

## Orden de lectura recomendado

1. [system-context.md](./system-context.md)
2. [overview.md](./overview.md)
3. [DIAGRAMS.md](./DIAGRAMS.md)
4. [modules.md](./modules.md)
5. [backend-frontend-communication.md](./backend-frontend-communication.md)
6. [folder-structure.md](./folder-structure.md)
7. [scalability.md](./scalability.md)

## Por qué este orden

- Empiezas entendiendo el problema y el tipo de producto.
- Luego ves la solución técnica en conjunto.
- Después bajas al detalle de módulos y comunicación entre capas.
- Al final revisas estructura física del repositorio y criterios de crecimiento.
