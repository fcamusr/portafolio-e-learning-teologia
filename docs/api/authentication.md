# Autenticación

Documentación de autenticación del proyecto.

## Estado actual

Existe un modelo de usuario personalizado en Django.

Aún no se ha implementado autenticación por API.

## Modelo de usuario

El modelo `User` hereda de `AbstractUser`.

Configuración:

```python
AUTH_USER_MODEL = "users.User"
Futuro

Se evaluará el mecanismo de autenticación más adecuado para conectar Django con Next.js.

Opciones posibles:

Sesiones.
Tokens.
JWT.

La decisión se documentará en docs/decisions/ cuando se implemente.