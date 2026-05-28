# Base de datos

Esta sección documenta cómo se modelan y administran los datos del proyecto.

## Contenido

- [DIAGRAMS.md](./DIAGRAMS.md): ERD, relaciones de modelos y vista visual del dominio actual
- [overview.md](./overview.md): visión general y estado actual
- [models.md](./models.md): modelos implementados y dominios previstos
- [relationships.md](./relationships.md): relaciones actuales y futuras de alto nivel
- [migrations.md](./migrations.md): flujo de cambios de esquema
- [indexes.md](./indexes.md): lineamientos sobre índices
- [seed-data.md](./seed-data.md): criterio para datos iniciales o de prueba

## Enfoque actual

La base de datos ya está conectada al backend, pero el modelo de dominio todavía está en una etapa temprana. Por eso esta documentación distingue claramente entre el esquema existente y el que aún está previsto.

## Orden de lectura recomendado

1. [overview.md](./overview.md)
2. [DIAGRAMS.md](./DIAGRAMS.md)
3. [models.md](./models.md)
4. [relationships.md](./relationships.md)
5. [migrations.md](./migrations.md)
6. [indexes.md](./indexes.md)
7. [seed-data.md](./seed-data.md)

## Por qué este orden

- Primero entiendes el objetivo general del modelo de datos.
- Luego revisas qué entidades existen y cuáles están proyectadas.
- Después ves cómo se relacionarán.
- Al final pasas a la operación: migraciones, desempeño e inicialización de datos.
