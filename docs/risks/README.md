# Riesgos

## Proposito

Concentrar la identificacion, seguimiento y mitigacion de riesgos tecnicos y de proyecto para que no queden diluidos entre avances, decisiones o conversaciones temporales.

## Alcance

Esta carpeta responde a la pregunta "que puede comprometer alcance, calidad, continuidad o mantenibilidad, y como se esta gestionando".

## Contenido principal

- [risk-register.md](./risk-register.md): registro vivo de riesgos con estado, impacto y mitigacion
- [risk-matrix.md](./risk-matrix.md): criterio de priorizacion por probabilidad e impacto
- [DIAGRAMS.md](./DIAGRAMS.md): mapas visuales de causas, prioridad y estrategia de mitigacion

## Fuente principal de verdad

- `risks/` es la fuente principal para riesgos abiertos y mitigaciones.
- `decisions/` conserva decisiones tomadas, no el seguimiento operativo del riesgo.
- `progress/` registra avances e hitos, pero no reemplaza el registro de riesgos.

## Cuando usar esta carpeta

- Cuando aparece una amenaza tecnica, funcional u operativa relevante.
- Cuando una decision tecnica implica tradeoffs que deben seguirse en el tiempo.
- Cuando una tarea se bloquea por dependencias, incertidumbre o deuda.

## Como mantener los riesgos vivos

- Revisar el registro cuando cambie el alcance del MVP.
- Revisar el registro cuando aparezca una nueva decision tecnica importante.
- Revisar el registro al cerrar hitos importantes en `progress/`.
- Actualizar estado, mitigacion y responsable en vez de crear notas duplicadas en otros documentos.

## Relacion con otros documentos

- [../decisions/README.md](../decisions/README.md)
- [../architecture/README.md](../architecture/README.md)
- [../progress/README.md](../progress/README.md)
- [../templates/risk-template.md](../templates/risk-template.md)

## Pendientes

- Pendiente por definir: cadencia fija de revision del registro de riesgos.
- No documentado todavia: criterio formal para cerrar riesgos archivados.

## Ultima actualizacion

2026-05-18
