# Escalabilidad

El proyecto está pensado para crecer como un monolito modular antes de considerar una arquitectura distribuida.

## Por qué este enfoque

En una etapa temprana, un monolito bien organizado ofrece ventajas claras:

- menor complejidad operativa
- menor costo de coordinación
- mayor velocidad de desarrollo
- mejor trazabilidad de cambios

## Cómo debería crecer

La evolución esperada del sistema pasa por:

- separar dominios en apps del backend
- definir contratos API claros
- mantener decisiones técnicas documentadas
- evitar acoplamientos innecesarios entre frontend, backend y datos

## Señales que podrían justificar un cambio de enfoque

Antes de pensar en microservicios o particiones mayores, deberían existir necesidades reales como:

- equipos trabajando en dominios muy separados
- requerimientos de escalado independientes por módulo
- complejidad operativa que ya no pueda manejarse razonablemente en un monolito

## Regla práctica

No introducir complejidad arquitectónica antes de que el producto y el equipo realmente la necesiten.
