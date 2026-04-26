# Decisiones técnicas

Esta carpeta reúne decisiones de arquitectura y diseño que vale la pena preservar en el tiempo.

## Objetivo

Registrar decisiones ayuda a responder preguntas como:

- por qué se eligió una tecnología
- qué alternativas se evaluaron
- qué consecuencias trae una decisión

## Formato usado

Cada ADR de esta carpeta sigue una estructura simple:

- estado
- contexto o motivo
- decisión
- consecuencias
- alternativas consideradas

## Índice actual

- [0001-use-django.md](./0001-use-django.md)
- [0002-use-nextjs.md](./0002-use-nextjs.md)
- [0003-use-postgresql.md](./0003-use-postgresql.md)
- [0004-separate-backend-frontend.md](./0004-separate-backend-frontend.md)
- [0005-use-apps-folder.md](./0005-use-apps-folder.md)

## Orden de lectura recomendado

1. [0001-use-django.md](./0001-use-django.md)
2. [0002-use-nextjs.md](./0002-use-nextjs.md)
3. [0003-use-postgresql.md](./0003-use-postgresql.md)
4. [0004-separate-backend-frontend.md](./0004-separate-backend-frontend.md)
5. [0005-use-apps-folder.md](./0005-use-apps-folder.md)

## Por qué este orden

- Empieza por las decisiones fundacionales de stack.
- Luego pasa a la separación entre capas.
- Termina con la decisión más específica de organización interna del backend.
