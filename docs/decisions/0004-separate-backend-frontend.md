# 0004 - Separar backend y frontend

## Estado

Aceptada

## Contexto

El proyecto busca mantener responsabilidades claras entre experiencia de usuario y lógica de negocio, permitiendo además que ambos lados evolucionen con menor acoplamiento.

## Decisión

Mantener backend y frontend en carpetas separadas dentro del mismo repositorio.

## Consecuencias

- El desarrollo local requiere dos servidores.
- El frontend y el backend pueden evolucionar con ciclos diferentes.
- La comunicación entre ambos debe definirse mediante contratos HTTP/API.

## Alternativas consideradas

- Usar solo templates de Django
- Integrar React dentro del backend
