# 0005 - Usar carpeta apps en backend

## Estado

Aceptada.

## Decisión

Crear apps locales dentro de:

```text
backend/apps/

Motivo

Esto ayuda a organizar mejor las apps propias del proyecto cuando el backend crezca.

Consecuencias

Las apps deben configurarse correctamente en apps.py.

Ejemplo:

name = "apps.users"

En INSTALLED_APPS se registra la configuración completa de la app.

Conclusión

Las apps locales vivirán dentro de backend/apps/.