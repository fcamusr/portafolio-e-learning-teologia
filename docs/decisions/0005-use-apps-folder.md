# 0005 - Usar carpeta apps en backend

## Estado

Aceptada

## Decisión

Crear las apps locales dentro de:

```text
backend/apps/
```

## Contexto

Se busca separar con claridad la configuración global de Django y los módulos del dominio del negocio.

## Consecuencias

- Las apps locales quedan agrupadas en un solo lugar.
- La estructura del backend escala mejor cuando se agregan nuevos dominios.
- La configuración de importaciones y `INSTALLED_APPS` debe ser explícita.

Ejemplo:

```python
name = "apps.users"
```

En `INSTALLED_APPS` se registra la configuración completa de la app, por ejemplo `apps.users.apps.UsersConfig`.
