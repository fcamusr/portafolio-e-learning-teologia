# Migraciones

Las migraciones son el mecanismo que usa Django para transformar modelos Python en estructura real de base de datos.

## Flujo general

```text
models.py
↓
makemigrations
↓
archivo de migración
↓
migrate
↓
tabla en PostgreSQL
Comandos

Crear migraciones:

python manage.py makemigrations

Aplicar migraciones:

python manage.py migrate
Regla

Antes de crear o modificar migraciones, revisar los modelos y entender qué cambio se está llevando a la base de datos.