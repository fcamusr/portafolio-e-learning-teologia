# Migraciones

Las migraciones son el mecanismo mediante el cual Django traduce cambios en los modelos a cambios reales en el esquema de la base de datos.

## Flujo general

```text
models.py
  -> makemigrations
  -> archivo de migración
  -> migrate
  -> esquema actualizado en PostgreSQL
```

## Comandos habituales

Crear migraciones:

```powershell
python manage.py makemigrations
```

Aplicar migraciones:

```powershell
python manage.py migrate
```

## Estado actual

El repositorio ya incluye una migración inicial para la app `users`.

## Regla de trabajo

Antes de crear o modificar migraciones:

- revisa el impacto real sobre el esquema
- confirma que el modelo representa un caso de uso real
- evita editar migraciones antiguas ya compartidas si el proyecto ya fue usado por otras personas o entornos
