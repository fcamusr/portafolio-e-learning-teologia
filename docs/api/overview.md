# Visión general de API

La API será el contrato principal entre el backend Django y el frontend Next.js.

## Estado actual

Hoy no existen endpoints de negocio implementados. El backend solo expone la ruta administrativa estándar de Django y la base técnica necesaria para construir una API más adelante.

## Objetivo

La API deberá exponer datos y acciones relacionadas con:

- usuarios
- cursos y lecciones
- evaluaciones
- progreso
- certificados o logros

## Formato esperado

La expectativa es trabajar con respuestas JSON y contratos consistentes entre recursos.

## Principio de diseño

El frontend no debe comunicarse directamente con la base de datos. Toda operación de negocio debe pasar por el backend.

## Observación técnica

`djangorestframework` ya aparece en `backend/requirements.txt`, lo que deja preparada la base para una futura implementación API, aunque hoy todavía no esté configurada en rutas ni apps instaladas.
