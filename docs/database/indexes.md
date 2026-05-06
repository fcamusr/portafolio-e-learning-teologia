# Indices

Los indices ayudan a acelerar consultas frecuentes, pero tambien introducen costo adicional de escritura y mantenimiento.

## Estado actual

No hay indices personalizados documentados en los modelos del proyecto.

Si existe una restriccion relevante ya implementada:

- `LessonProgress` define `unique_lesson_progress_per_user` sobre `user` y `lesson`

Esta restriccion no se documenta aqui como un indice de tuning, sino como una garantia de integridad para evitar mas de un registro de progreso por usuario y leccion.

## Cuando evaluar un indice

Conviene considerarlo cuando existan consultas repetidas sobre:

- filtros por usuario
- filtros por curso o leccion
- busquedas frecuentes
- ordenamientos muy usados
- tablas de progreso o intentos con crecimiento sostenido

## Criterio

No agregar indices de manera preventiva. Primero conviene observar consultas reales, entender patrones de acceso y luego justificar el cambio.
