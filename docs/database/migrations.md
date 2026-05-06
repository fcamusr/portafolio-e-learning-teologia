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

Revisar migraciones de `learning`:

```powershell
python manage.py showmigrations learning
```

## Estado actual

El repositorio ya incluye y tiene aplicadas en `learning` estas migraciones:

- `0001_initial.py`: crea `Course`
- `0002_unit.py`: crea `Unit`
- `0003_lesson.py`: crea `Lesson`
- `0004_lessonprogress.py`: crea `LessonProgress`

Tambien existe la migracion inicial de la app `users`.

## Regla de trabajo

Antes de crear o modificar migraciones:

- revisa el impacto real sobre el esquema
- confirma que el modelo representa un caso de uso real
- evita editar migraciones antiguas ya compartidas si el proyecto ya fue usado por otras personas o entornos
