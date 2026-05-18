# Checklist de aceptacion

## Proposito

Conectar una tarea concreta con sus criterios de aceptacion y con la evidencia minima necesaria para darla por cerrada.

## Alcance

Aplica a funcionalidades, mejoras o correcciones que cambian comportamiento visible, contrato API, datos o flujo de usuario.

## Contenido principal

### Preguntas de cierre

- Que requerimiento de [../product/requirements.md](../product/requirements.md) se cubre con este cambio.
- Que criterio de [../product/acceptance-criteria.md](../product/acceptance-criteria.md) queda satisfecho.
- Que evidencia muestra que realmente funciona.
- Que documento tecnico se actualizo si hubo impacto en API, base de datos o arquitectura.
- Que pendiente o riesgo residual queda abierto.

### Lista de verificacion

- El alcance de la tarea esta identificado.
- Existe criterio de aceptacion funcional asociado.
- Existe validacion tecnica suficiente para el cambio.
- Existe evidencia minima.
- Existe documentacion actualizada o pendiente explicitado.
- Existe nota de riesgos o supuestos si algo no quedo cerrado.

### Evidencia minima por tipo de cambio

- Cambio de producto o flujo:
  - recorrido probado
  - resultado observado
- Cambio de API:
  - endpoint probado
  - codigo esperado
  - error relevante si aplica
- Cambio de base de datos:
  - migracion o nota explicita de que no se requirio
  - impacto resumido
- Cambio de frontend:
  - ruta probada
  - estados visibles revisados

## Relacion con otros documentos

- [qa-strategy.md](./qa-strategy.md)
- [backend-checklist.md](./backend-checklist.md)
- [frontend-checklist.md](./frontend-checklist.md)
- [../templates/acceptance-criteria-template.md](../templates/acceptance-criteria-template.md)

## Pendientes

- Requiere validacion: si conviene usar esta lista tambien como base de definicion de done por tarea.

## Ultima actualizacion

2026-05-18
