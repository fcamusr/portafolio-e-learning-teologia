docs/architecture/modules.md

Aquí documentas los módulos grandes del sistema.

Ejemplo:

Módulo de usuarios
Módulo de cursos
Módulo de lecciones
Módulo de evaluaciones
Módulo de progreso
Módulo de certificados
Módulo de pagos
Módulo de reportes
Módulo de administración
Módulo de contenido teológico

Para cada módulo podrías explicar:

Responsabilidad.
Modelos principales.
Endpoints relacionados.
Reglas de negocio.
Permisos.
Relaciones con otros módulos.

Ejemplo:

## Módulo de cursos

Responsable de gestionar cursos, módulos, lecciones y recursos complementarios.

Entidades principales:

- Course
- CourseModule
- Lesson
- LessonResource

Reglas principales:

- Un curso puede tener muchos módulos.
- Un módulo puede tener muchas lecciones.
- Una lección puede contener video, texto, preguntas o recursos descargables.
- Solo usuarios con rol de profesor o administrador pueden crear cursos.