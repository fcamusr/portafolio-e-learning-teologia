# Relaciones

Este documento registra las relaciones del dominio a nivel conceptual. No reemplaza la definicion real de modelos ni de migraciones.

## Estado actual

Actualmente no hay relaciones de dominio relevantes documentadas en el codigo mas alla de las que Django aporta de forma estandar al modelo `User`.

## Relaciones planificadas del nucleo inicial del MVP

Si el dominio se implementa segun la decision actual, la estructura base esperada es esta:

- un `Course` podra contener multiples `Unit`
- una `Unit` podra contener multiples `Lesson`
- un `LessonProgress` asociara a un `User` con una `Lesson`

Todavia no se documentan restricciones concretas de integridad, cascadas ni unicidad para estas relaciones porque esos detalles aun no existen en el codigo.

## Otras relaciones previstas

Ademas del nucleo inicial, el producto podria sumar mas adelante relaciones como estas:

- una `Lesson` podria tener una o mas evaluaciones
- un `User` podria registrar intentos o respuestas en quizzes
- un `User` podria asociar notas personales a contenidos especificos

## Criterio

Las relaciones definitivas deben documentarse una vez que existan modelos reales, restricciones de integridad y decisiones concretas sobre cascadas, unicidad y desempeno.
