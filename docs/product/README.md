# Producto

Esta seccion documenta el producto desde una perspectiva funcional: que problema busca resolver, para quien existe, cual es su alcance inicial y en que orden conviene construirlo.

## Contenido

- [overview.md](./overview.md): vision general del producto y su estado actual
- [users.md](./users.md): usuarios objetivo, necesidades y criterios de valor
- [mvp.md](./mvp.md): alcance funcional del primer producto util
- [requirements.md](./requirements.md): requerimientos funcionales, no funcionales y reglas de negocio conocidas
- [acceptance-criteria.md](./acceptance-criteria.md): criterios de aceptacion funcionales
- [user-flows.md](./user-flows.md): recorridos principales que la experiencia debe soportar
- [roadmap.md](./roadmap.md): orden sugerido de evolucion del producto

## Objetivo

La intencion de esta carpeta es evitar que el proyecto crezca solo desde lo tecnico. Aqui se deja explicito que experiencia se quiere construir, para quien y con que prioridades.

## Fuente principal de verdad

`product/` debe concentrar:

- vision del producto
- alcance y prioridades
- requerimientos
- reglas de negocio conocidas
- criterios de aceptacion

Si un documento de `quality/`, `api/` o `progress/` necesita hablar de alguno de estos temas, debe referenciar `product/` en vez de duplicarlo.

## Relacion con otras secciones

- `architecture/` explica como esta pensado el sistema.
- `api/` explica como se expondran los datos y acciones.
- `database/` describe como se modelan las entidades.
- `quality/` explica como se valida el cumplimiento de lo definido aqui.
- `progress/` registra cuando estas definiciones se convierten en trabajo real.

## Orden de lectura recomendado

1. [overview.md](./overview.md)
2. [users.md](./users.md)
3. [mvp.md](./mvp.md)
4. [requirements.md](./requirements.md)
5. [acceptance-criteria.md](./acceptance-criteria.md)
6. [user-flows.md](./user-flows.md)
7. [roadmap.md](./roadmap.md)

## Por que este orden

- Primero entiendes que producto se quiere construir.
- Luego ves para quien se esta construyendo.
- Despues acotas el MVP para no mezclar vision con alcance inmediato.
- Luego bajas a requerimientos y criterios verificables.
- Al final conectas flujos concretos y el orden sugerido de implementacion.
