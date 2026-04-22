# Visión general de API

La API será construida con Django y consumida por Next.js.

## Estado actual

La API aún no está implementada.

## Objetivo

Exponer datos y acciones del sistema, como:

- Usuarios.
- Cursos.
- Lecciones.
- Evaluaciones.
- Progreso.
- Certificados.

## Formato esperado

La API devolverá respuestas en JSON.

## Principio

El frontend no debe conectarse directamente a la base de datos. Debe comunicarse con Django mediante API.

DRF es una herramienta oficial ampliamente usada para construir APIs web con Django, y sus serializers permiten convertir modelos/querysets a datos que pueden renderizarse como JSON.