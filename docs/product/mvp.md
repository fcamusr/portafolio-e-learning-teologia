# Alcance del MVP

Este documento acota que deberia incluir el primer producto util para evitar que la vision completa se convierta en una lista abierta de ideas.

## Objetivo del MVP

El MVP deberia permitir que una persona estudie contenido estructurado y vea un progreso basico dentro de una experiencia web clara.

## Capacidades que si deberian entrar

- visualizar cursos disponibles
- entrar a un curso y recorrer sus unidades
- abrir lecciones y consumir su contenido principal
- registrar avance por leccion
- retomar el estudio desde el ultimo punto relevante

## Capacidades que pueden entrar despues

- evaluaciones o quizzes
- certificados o logros
- paneles de administracion mas trabajados
- recomendaciones personalizadas
- comunidad, comentarios o funciones sociales

## Relacion con el estado actual del proyecto

La base de datos ya tiene implementados `Course`, `Unit`, `Lesson` y `LessonProgress`, lo que calza bien con este alcance. La siguiente etapa natural es exponer ese nucleo mediante API y construir una interfaz minima sobre esa base.

## Criterios para aceptar trabajo dentro del MVP

Una funcionalidad entra en el MVP si:

- ayuda directamente a estudiar mejor
- reduce friccion en el flujo principal de aprendizaje
- reutiliza o fortalece el dominio ya modelado
- no obliga a introducir complejidad tecnica desproporcionada

## Lo que conviene evitar por ahora

- agregar muchas ramas funcionales antes de cerrar el flujo principal
- construir UI avanzada sin contrato API claro
- mezclar objetivos de portafolio visual con necesidades reales del producto

## Referencias relacionadas

- [overview.md](./overview.md)
- [users.md](./users.md)
- [requirements.md](./requirements.md)
- [acceptance-criteria.md](./acceptance-criteria.md)
- [user-flows.md](./user-flows.md)
- [roadmap.md](./roadmap.md)
- [../api/overview.md](../api/overview.md)
