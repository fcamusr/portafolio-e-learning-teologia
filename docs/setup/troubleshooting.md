`docs/setup/troubleshooting.md`

Aquí registras errores comunes.

Contenido inicial:

```md id="8ny10v"
# Problemas comunes

## Error de conexión con PostgreSQL

Verificar que:

- PostgreSQL esté ejecutándose.
- La base de datos exista.
- El usuario y contraseña sean correctos.
- El puerto sea `5432`.

## Error porque no existen las tablas

Ejecutar:

```bash
python manage.py migrate
Error con dependencias del frontend

Eliminar node_modules y reinstalar:

npm install
Error con el entorno virtual

Verificar que el entorno virtual esté activado antes de ejecutar comandos de Django.


Este archivo crecerá mucho con el tiempo. Es como tu “libreta de problemas resueltos”.

