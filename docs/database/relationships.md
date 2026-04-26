# Relaciones

Este documento registra las relaciones del dominio a nivel conceptual. No reemplaza la definición real de modelos ni de migraciones.

## Estado actual

Actualmente no hay relaciones de dominio relevantes documentadas en el código más allá de las que Django aporta de forma estándar al modelo `User`.

## Relaciones previstas

Cuando el dominio se implemente, se espera una estructura cercana a esta:

- un usuario podrá tener progreso sobre múltiples lecciones o cursos
- un curso podrá contener múltiples módulos
- un módulo podrá contener múltiples lecciones
- una lección podrá tener una o más evaluaciones
- un usuario podrá registrar intentos o respuestas en quizzes
- un usuario podrá asociar notas personales a contenidos específicos

## Criterio

Las relaciones definitivas deben documentarse una vez que existan modelos reales, restricciones de integridad y decisiones concretas sobre cascadas, unicidad y desempeño.
