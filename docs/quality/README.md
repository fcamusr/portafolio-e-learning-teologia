# Calidad

## Proposito

Concentrar la estrategia de QA, los criterios de cierre y las listas de verificacion operativas para validar trabajo sin duplicar requerimientos, contratos API ni detalle de arquitectura.

## Alcance

Esta carpeta responde a la pregunta "como se valida el trabajo antes de considerarlo terminado". La fuente de verdad funcional sigue viviendo en `product/`.

## Contenido principal

- [qa-strategy.md](./qa-strategy.md): estrategia general de validacion, evidencias y criterio de cierre
- [DIAGRAMS.md](./DIAGRAMS.md): mapas visuales de causas, prioridades y madurez tecnica
- [backend-checklist.md](./backend-checklist.md): revision practica para cambios del backend
- [frontend-checklist.md](./frontend-checklist.md): revision practica para cambios del frontend
- [acceptance-checklist.md](./acceptance-checklist.md): puente entre criterios de aceptacion, evidencia y cierre

## Fuente principal de verdad

- `product/` define requerimientos, alcance y criterios de aceptacion.
- `api/` define contratos y endpoints.
- `database/` define modelos, relaciones y migraciones.
- `quality/` define como se valida todo eso y que evidencia minima se espera.

## Cuando usar esta carpeta

- Antes de cerrar una tarea funcional.
- Cuando un cambio toca backend, frontend, API o base de datos y hace falta una verificacion estructurada.
- Cuando se necesita documentar evidencia minima de QA o revisar si el alcance realmente quedo aceptado.

## Relacion con otros documentos

- [../product/acceptance-criteria.md](../product/acceptance-criteria.md)
- [../api/README.md](../api/README.md)
- [../database/README.md](../database/README.md)
- [../templates/qa-checklist-template.md](../templates/qa-checklist-template.md)

## Pendientes

- Pendiente por definir: automatizaciones de pruebas cuando el proyecto tenga mas flujo funcional implementado.
- No documentado todavia: convencion estable para adjuntar evidencia en PR o bitacora semanal.

## Ultima actualizacion

2026-05-18
