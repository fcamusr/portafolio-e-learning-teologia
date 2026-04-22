# 0004 - Separar backend y frontend

## Estado

Aceptada.

## Decisión

Mantener backend y frontend en carpetas separadas.

## Motivo

Esta separación permite trabajar Django como backend/API y Next.js como frontend independiente.

## Consecuencias

El proyecto tendrá dos servidores en desarrollo:

- Django en puerto 8000.
- Next.js en puerto 3000.

## Alternativas consideradas

- Usar solo Django templates.
- Integrar React dentro de Django.

## Conclusión

Se usará arquitectura separada.