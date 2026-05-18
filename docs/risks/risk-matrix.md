# Matriz de riesgos

## Proposito

Definir un criterio comun para estimar probabilidad, impacto y prioridad de los riesgos registrados en [risk-register.md](./risk-register.md).

## Alcance

Aplica a riesgos tecnicos, funcionales, operativos y de coordinacion del proyecto.

## Contenido principal

### Escala de probabilidad

- Baja: poco probable en el estado actual.
- Media: posible si no se toman medidas.
- Alta: probable o ya visible en el trabajo actual.

### Escala de impacto

- Bajo: genera friccion menor o retrabajo acotado.
- Medio: afecta calidad, tiempos o coordinacion de forma relevante.
- Alto: compromete un flujo principal, una decision estructural o el avance del proyecto.

### Regla simple de prioridad

- Alto: impacto alto, o combinacion de impacto medio con probabilidad alta.
- Medio: combinaciones intermedias que requieren seguimiento.
- Bajo: riesgo observado con impacto o probabilidad acotados.

### Matriz resumida

| Impacto \\ Probabilidad | Baja | Media | Alta |
|---|---|---|---|
| Alto | Medio | Alto | Alto |
| Medio | Bajo | Medio | Alto |
| Bajo | Bajo | Bajo | Medio |

### Uso recomendado

1. Registrar el riesgo en [risk-register.md](./risk-register.md).
2. Estimar probabilidad e impacto con esta matriz.
3. Definir mitigacion y responsable.
4. Revisar en hitos relevantes o cuando cambie el contexto.

### Conexion con otras areas

- Si el riesgo nace de una decision estructural, enlazar `decisions/`.
- Si el riesgo nace de una limitacion de implementacion, enlazar `architecture/`, `api/` o `database/`.
- Si el riesgo compromete entrega o cierre de tareas, enlazar `progress/` y `quality/`.

## Relacion con otros documentos

- [risk-register.md](./risk-register.md)
- [../quality/qa-strategy.md](../quality/qa-strategy.md)
- [../progress/README.md](../progress/README.md)

## Pendientes

- No documentado todavia: tolerancias diferenciadas por tipo de riesgo.

## Ultima actualizacion

2026-05-18
