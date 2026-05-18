# Registro de riesgos

## Proposito

Mantener un listado vivo de riesgos relevantes con contexto suficiente para actuar sobre ellos y no solo describirlos.

## Alcance

Incluye riesgos tecnicos, de producto, de integracion y de coordinacion que puedan afectar entrega, calidad o mantenibilidad.

## Contenido principal

### Como identificar riesgos

Conviene registrar un riesgo cuando:

- existe una incertidumbre con impacto real sobre entrega o calidad
- una decision tecnica crea una consecuencia que requiere seguimiento
- una dependencia externa o interna puede bloquear avance
- un cambio puede generar deuda, retrabajo o fragilidad operativa

### Campos minimos del registro

- ID
- riesgo
- categoria
- impacto
- probabilidad
- nivel
- mitigacion
- responsable
- estado
- documentos relacionados

### Registro actual

| ID | Riesgo | Categoria | Impacto | Probabilidad | Nivel | Mitigacion actual | Responsable | Estado | Documentos relacionados |
|---|---|---|---|---|---|---|---|---|---|
| R-001 | El proyecto aun no tiene endpoints de negocio implementados, lo que puede retrasar la primera experiencia funcional completa. | alcance / API | Alto | Alta | Alto | Priorizar contratos minimos para `Course`, `Unit`, `Lesson` y `LessonProgress` segun `product/` y `api/`. | backend | Abierto | [../product/mvp.md](../product/mvp.md), [../api/overview.md](../api/overview.md) |
| R-002 | La estrategia final de autenticacion todavia no esta definida, lo que puede obligar a retrabajo en frontend, API y flujo de progreso. | seguridad / arquitectura | Alto | Media | Alto | Definir decision tecnica antes de implementar flujos dependientes de sesion real. | arquitectura | Abierto | [../api/authentication.md](../api/authentication.md), [../decisions/README.md](../decisions/README.md) |
| R-003 | La validacion actual depende en gran parte de chequeos manuales y todavia no tiene una convencion estable de evidencia continua. | calidad / proceso | Medio | Alta | Alto | Usar `quality/` como base comun y documentar evidencia minima por tarea. | calidad | Mitigando | [../quality/qa-strategy.md](../quality/qa-strategy.md), [../templates/qa-checklist-template.md](../templates/qa-checklist-template.md) |
| R-004 | La documentacion de producto todavia esta madurando y algunas reglas de negocio siguen pendientes por definir. | producto / alcance | Medio | Media | Medio | Mantener `product/requirements.md` y `product/acceptance-criteria.md` como fuente principal y marcar supuestos. | producto | Mitigando | [../product/requirements.md](../product/requirements.md), [../product/acceptance-criteria.md](../product/acceptance-criteria.md) |
| R-005 | El frontend depende del backend local y de variables de entorno correctas para validar integracion, lo que puede generar falsos negativos de QA. | integracion / setup | Medio | Media | Medio | Validar primero `setup/` y usar `/api/health/` como prueba tecnica base antes de flujos mayores. | frontend | Abierto | [../setup/run-project.md](../setup/run-project.md), [../api/health.md](../api/health.md) |

### Estados sugeridos

- Abierto
- Mitigando
- Monitoreando
- Cerrado

### Responsables

Si no existe una persona asignada todavia, se puede usar un rol provisional:

- producto
- backend
- frontend
- arquitectura
- calidad

## Relacion con otros documentos

- [risk-matrix.md](./risk-matrix.md)
- [../decisions/README.md](../decisions/README.md)
- [../progress/README.md](../progress/README.md)
- [../templates/risk-template.md](../templates/risk-template.md)

## Pendientes

- Requiere validacion: si el proyecto usara una escala numerica adicional para prioridad.
- Pendiente por definir: responsables nominales si el equipo crece.

## Ultima actualizacion

2026-05-18
