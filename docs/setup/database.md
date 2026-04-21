`docs/setup/database.md`

Aquí explicas PostgreSQL.

Contenido inicial:

```md id="t2pv50"
# Configuración de base de datos

El proyecto utiliza PostgreSQL como base de datos principal.

## Datos necesarios

Para conectar Django con PostgreSQL se necesita:

- Nombre de la base de datos.
- Usuario.
- Contraseña.
- Host.
- Puerto.

## Puerto por defecto

```txt
5432
Migraciones de Django

Crear migraciones:

python manage.py makemigrations

Aplicar migraciones:

python manage.py migrate

Más adelante puedes agregar cómo crear la base desde pgAdmin o desde consola.