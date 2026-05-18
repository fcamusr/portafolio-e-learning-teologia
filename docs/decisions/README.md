# Decisiones tecnicas

Esta carpeta reune decisiones de arquitectura y diseno que vale la pena preservar en el tiempo.

## Objetivo

Registrar decisiones ayuda a responder preguntas como:

- por que se eligio una tecnologia
- que alternativas se evaluaron
- que consecuencias trae una decision

## Formato usado

Cada ADR de esta carpeta sigue una estructura simple:

- estado
- contexto o motivo
- decision
- consecuencias
- alternativas consideradas

La plantilla reutilizable para nuevas decisiones vive en [../templates/decision-record-template.md](../templates/decision-record-template.md).

## Indice actual

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

## Por que este orden

- Empieza por las decisiones fundacionales de stack.
- Luego pasa a la separacion entre capas.
- Termina con la decision mas especifica de organizacion interna del backend.
