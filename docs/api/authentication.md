# Autenticación

Este documento describe el punto de partida actual y la decisión pendiente sobre autenticación API.

## Estado actual

- Existe un modelo de usuario personalizado en Django.
- `AUTH_USER_MODEL` está configurado como `users.User`.
- No hay autenticación por API implementada todavía.
- El acceso administrativo de Django sigue disponible por la vía estándar del framework.

## Base técnica existente

El modelo actual extiende `AbstractUser`, lo que deja preparada la posibilidad de agregar campos o comportamiento de autenticación más adelante sin cambiar de modelo a mitad del proyecto.

## Decisión pendiente

Todavía no está definido el mecanismo de autenticación entre Django y Next.js. Algunas alternativas razonables para evaluar más adelante son:

- sesiones
- tokens
- JWT

Cuando esa decisión se tome, debe registrarse también en `docs/decisions/`.
