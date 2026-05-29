# Alcance del MVP

Este documento acota que deberia incluir el primer producto util para evitar que la vision completa se convierta en una lista abierta de ideas.

## Objetivo del MVP

El MVP deberia permitir que una persona estudie contenido estructurado y vea un progreso basico dentro de una experiencia web clara.

## Capacidades que si deberian entrar

- visualizar una ruta de aprendizaje inicial asociada a un unico curso
- recorrer unidades presentadas como camino de aprendizaje
- abrir una unidad desbloqueada y ver sus clases en un modal
- abrir clases de texto y consumir su contenido principal
- registrar automaticamente una clase como vista al entrar en ella
- bloquear el quiz de unidad hasta que todas sus clases de texto hayan sido vistas
- aprobar un quiz para completar la unidad y desbloquear la siguiente
- retomar el estudio desde el ultimo punto relevante
- iniciar sesion o registrarse para conservar el progreso

## Capacidades que pueden entrar despues

- certificados o logros
- paneles de administracion mas trabajados
- recomendaciones personalizadas
- comunidad, comentarios o funciones sociales
- dashboards mas completos de avance y seguimiento

## Relacion con el estado actual del proyecto

La base de datos ya tiene implementados `Course`, `Unit`, `Lesson` y `LessonProgress`, y el backend ya expone `GET /api/courses/` como primera lectura del dominio. La siguiente etapa natural es ampliar esa API y construir una interfaz minima de ruta de aprendizaje. Las reglas de quiz, desbloqueo de unidad y progreso agregado todavia requieren modelos, contratos o decisiones adicionales.

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
