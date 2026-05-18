# Checklist de frontend

## Proposito

Ofrecer una lista breve y practica para revisar cambios del frontend antes de cerrar una tarea.

## Alcance

Aplica a rutas, pantallas, componentes, estilos, consumo de API y estados visibles en la experiencia de usuario.

## Contenido principal

### Validacion funcional

- Confirmar que el flujo visible coincide con [../product/user-flows.md](../product/user-flows.md) cuando aplica.
- Confirmar que los criterios relevantes de [../product/acceptance-criteria.md](../product/acceptance-criteria.md) quedan cubiertos.
- Confirmar que el cambio no oculta limitaciones reales del backend o del contrato API.

### Validacion visual y de UX

- Revisar estado normal.
- Revisar estado de carga si existe.
- Revisar estado vacio si existe.
- Revisar estado de error si existe.
- Confirmar que la interfaz deja claro el siguiente paso del usuario.

### Validacion tecnica

- Ejecutar `npm run lint` cuando el cambio toca frontend y el entorno lo permite.
- Ejecutar `npm run build` si el cambio es relevante y el entorno lo permite.
- Confirmar dependencias correctas con `NEXT_PUBLIC_API_BASE_URL` u otras variables publicas.
- Confirmar que no se agrego logica de negocio que deberia vivir en backend.

### Validacion de integracion

- Confirmar que los datos mostrados se alinean con la documentacion de `api/`.
- Confirmar si el frontend depende de endpoints aun no implementados.
- Si se usan datos temporales, dejarlo explicitado como pendiente por reemplazar.

### Evidencia minima recomendada

- ruta o pantalla probada
- estados revisados
- comando ejecutado cuando aplica
- dependencia pendiente con backend o entorno

## Relacion con otros documentos

- [qa-strategy.md](./qa-strategy.md)
- [../api/README.md](../api/README.md)
- [../architecture/backend-frontend-communication.md](../architecture/backend-frontend-communication.md)
- [../templates/qa-checklist-template.md](../templates/qa-checklist-template.md)

## Pendientes

- No documentado todavia: criterio visual de referencia para capturas o evidencia de UI.

## Ultima actualizacion

2026-05-18
