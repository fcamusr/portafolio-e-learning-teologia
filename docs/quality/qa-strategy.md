# Estrategia de QA

## Proposito

Definir como se valida una funcionalidad antes de considerarla terminada y que evidencia minima debe existir para cerrar una tarea con trazabilidad razonable.

## Alcance

Aplica a cambios documentales, de backend, frontend, API y base de datos. No reemplaza pruebas automatizadas; organiza el criterio de validacion mientras el proyecto sigue creciendo.

## Contenido principal

### Regla general de cierre

Una funcionalidad o cambio relevante no deberia considerarse terminada hasta confirmar:

1. que cumple el objetivo funcional esperado
2. que no rompe la base tecnica existente
3. que el impacto en documentacion esta reflejado
4. que existe evidencia minima verificable

### Flujo recomendado de validacion

1. Confirmar el alcance en [../product/requirements.md](../product/requirements.md) y [../product/acceptance-criteria.md](../product/acceptance-criteria.md).
2. Identificar la fuente tecnica de verdad afectada:
   - `api/` si cambia contrato o endpoint
   - `database/` si cambia modelo, relacion o migracion
   - `architecture/` si cambia estructura, responsabilidad o criterio tecnico
3. Ejecutar la checklist correspondiente:
   - [backend-checklist.md](./backend-checklist.md)
   - [frontend-checklist.md](./frontend-checklist.md)
   - [acceptance-checklist.md](./acceptance-checklist.md)
4. Registrar evidencia minima.
5. Documentar pendientes, supuestos o riesgos residuales.

### Que revisar por area

#### Backend

- comportamiento funcional esperado
- validaciones
- errores previsibles
- impacto en autenticacion, permisos o seguridad
- impacto en migraciones o datos si aplica

#### Frontend

- estado normal
- estado de carga, vacio y error cuando corresponda
- claridad del flujo de usuario
- dependencias con backend, variables o datos simulados

#### API

- contrato de entrada y salida
- codigos de estado
- errores esperados
- coherencia con documentacion de `api/`

#### Base de datos

- impacto de cambios de esquema
- relaciones afectadas
- necesidad de migraciones
- necesidad de datos iniciales o ajustes operativos

### Evidencia minima para cerrar una tarea

La evidencia minima deberia dejar claro:

- que se probo
- con que comando, ruta o flujo se probo
- que resultado se obtuvo
- que quedo pendiente o no se pudo validar

Ejemplos validos segun el cambio:

- comando ejecutado y resultado resumido
- ruta probada manualmente
- respuesta de endpoint validada
- confirmacion de migraciones aplicadas
- nota explicita cuando no fue posible verificar algo

### Relacion entre QA, criterios de aceptacion y requerimientos

- `product/requirements.md` responde que necesita el producto.
- `product/acceptance-criteria.md` responde como luce el cumplimiento funcional.
- `quality/` responde como se valida y que evidencia permite cerrar una tarea.

## Relacion con otros documentos

- [../product/requirements.md](../product/requirements.md)
- [../product/acceptance-criteria.md](../product/acceptance-criteria.md)
- [../api/health.md](../api/health.md)
- [../api/errors.md](../api/errors.md)
- [../database/migrations.md](../database/migrations.md)

## Pendientes

- Pendiente por definir: umbral minimo de pruebas automatizadas por tipo de cambio.
- Requiere validacion: formato preferido para evidencia continua en PR, issue o bitacora.

## Ultima actualizacion

2026-05-18
