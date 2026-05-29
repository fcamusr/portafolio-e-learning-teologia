# Seed data

Los datos iniciales o de prueba permiten preparar un entorno local útil para desarrollo, demostraciones o validación funcional.

## Estado actual

Todavía no existe un mecanismo formal de seed data en el repositorio.

Lo que si existe hoy es carga manual de datos reales de prueba desde Django admin para validar el flujo `Course -> Unit -> Lesson -> LessonProgress`.

Distincion importante:

- no hay seeds automaticos
- no hay fixtures versionados documentados como mecanismo oficial
- la validacion actual depende de carga manual controlada desde `/admin/`

## Posibles usos futuros

- crear usuarios de prueba
- cargar cursos o lecciones de ejemplo
- poblar evaluaciones iniciales
- preparar contenido mínimo para demos

## Criterio

Cuando se incorpore seed data, debería cumplir estas condiciones:

- ser reproducible
- no depender de datos manuales ocultos
- estar documentado
- diferenciar claramente entre datos de desarrollo y datos reales
