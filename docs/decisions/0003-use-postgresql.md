# 0003 - Usar PostgreSQL como base de datos

## Estado

Aceptada

## Contexto

El dominio previsto del producto incluye usuarios, contenido formativo, progreso y relaciones que probablemente necesitarán un modelo relacional sólido.

## Decisión

Usar PostgreSQL como base de datos principal.

## Consecuencias

- Django se conectará a PostgreSQL mediante variables de entorno.
- El proyecto se apoya en un motor relacional robusto y ampliamente soportado.

## Alternativas consideradas

- SQLite
- MySQL
