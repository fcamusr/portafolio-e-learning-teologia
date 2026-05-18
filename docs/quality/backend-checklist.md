# Checklist de backend

## Proposito

Ofrecer una lista breve y practica para revisar cambios del backend antes de cerrar una tarea.

## Alcance

Aplica a cambios en Django, Django REST Framework, modelos, configuracion, endpoints y logica asociada al servidor.

## Contenido principal

### Validacion funcional

- Confirmar que el comportamiento implementado coincide con [../product/requirements.md](../product/requirements.md).
- Confirmar que los criterios relevantes de [../product/acceptance-criteria.md](../product/acceptance-criteria.md) quedan cubiertos.
- Confirmar que errores y supuestos importantes quedan explicitados si el alcance no esta completo.

### Validacion tecnica

- Ejecutar `python manage.py check` cuando el cambio toca backend.
- Ejecutar pruebas relevantes si existen.
- Revisar imports, configuracion y rutas afectadas.
- Confirmar que no se expusieron secretos ni configuraciones sensibles.

### Validacion de API

- Revisar metodo, ruta, payload y respuesta si el cambio toca endpoints.
- Revisar codigos HTTP y errores esperados.
- Confirmar que `docs/api/` sigue siendo consistente con el comportamiento implementado.

### Validacion de base de datos

- Confirmar si el cambio requiere migracion.
- Confirmar si la migracion fue creada o si se deja explicitamente pendiente.
- Revisar impacto sobre relaciones, constraints y datos existentes.
- Revisar si corresponde actualizar `docs/database/`.

### Evidencia minima recomendada

- comando ejecutado
- endpoint o flujo validado
- resultado resumido
- pendiente o limitacion conocida

## Relacion con otros documentos

- [qa-strategy.md](./qa-strategy.md)
- [../api/README.md](../api/README.md)
- [../database/README.md](../database/README.md)
- [../templates/qa-checklist-template.md](../templates/qa-checklist-template.md)

## Pendientes

- No documentado todavia: matriz de pruebas automatizadas por modulo backend.

## Ultima actualizacion

2026-05-18
