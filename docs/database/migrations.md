# Migraciones

Las migraciones son el mecanismo mediante el cual Django traduce cambios en los modelos a cambios reales en el esquema de la base de datos.

## Flujo general

```text
models.py
  -> makemigrations
  -> archivo de migracion
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

El repositorio ya incluye:

- la migracion inicial de la app `users`
- la migracion `backend/apps/learning/migrations/0001_initial.py`, que crea el modelo `Course`

## Regla de trabajo

Antes de crear o modificar migraciones:

- revisa el impacto real sobre el esquema
- confirma que el modelo representa un caso de uso real
- evita editar migraciones antiguas ya compartidas si el proyecto ya fue usado por otras personas o entornos
