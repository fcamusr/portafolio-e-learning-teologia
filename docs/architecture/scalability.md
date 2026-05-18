# Escalabilidad

El proyecto esta pensado para crecer como un monolito modular antes de considerar una arquitectura distribuida.

## Por que este enfoque

En una etapa temprana, un monolito bien organizado ofrece ventajas claras:

- menor complejidad operativa
- menor costo de coordinacion
- mayor velocidad de desarrollo
- mejor trazabilidad de cambios

## Como deberia crecer

La evolucion esperada del sistema pasa por:

- separar dominios en apps del backend
- definir contratos API claros
- mantener decisiones tecnicas documentadas
- evitar acoplamientos innecesarios entre frontend, backend y datos

## Senales que podrian justificar un cambio de enfoque

Antes de pensar en microservicios o particiones mayores, deberian existir necesidades reales como:

- equipos trabajando en dominios muy separados
- requerimientos de escalado independientes por modulo
- complejidad operativa que ya no pueda manejarse razonablemente en un monolito

## Regla practica

No introducir complejidad arquitectonica antes de que el producto y el equipo realmente la necesiten.

## Referencias relacionadas

- [../risks/risk-register.md](../risks/risk-register.md)
- [../decisions/README.md](../decisions/README.md)
