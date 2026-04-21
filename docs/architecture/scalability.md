docs/architecture/scalability.md

Este documento aparece cuando el proyecto crece.

Contendría:

Qué partes podrían escalar.
Qué tareas se pasan a Celery.
Qué consultas necesitan optimización.
Qué datos se cachean.
Qué archivos se almacenan fuera del servidor.
Qué problemas podrían aparecer con muchos usuarios.

Ejemplo:

# Escalabilidad

La plataforma puede crecer en número de estudiantes, cursos y evaluaciones.

Posibles puntos críticos:

- Consultas de progreso por usuario.
- Reportes de cursos.
- Generación de certificados.
- Envío masivo de correos.
- Carga de archivos multimedia.

Las tareas pesadas deberán procesarse de forma asíncrona usando Celery.