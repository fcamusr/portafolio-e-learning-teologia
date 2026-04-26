# Variables de entorno

El proyecto usa variables de entorno para separar configuración sensible del código fuente y facilitar cambios entre entornos.

## Regla principal

- Los archivos reales de entorno no deben versionarse.
- Los archivos `*.env.example` sí deben mantenerse actualizados como plantilla.

## Backend

Archivo local:

```text
backend/.env
```

Archivo versionado:

```text
backend/.env.example
```

Variables documentadas:

| Variable | Descripción |
| --- | --- |
| `SECRET_KEY` | Clave secreta usada por Django |
| `DEBUG` | Activa o desactiva el modo de depuración |
| `ALLOWED_HOSTS` | Lista de hosts permitidos |
| `DB_NAME` | Nombre de la base PostgreSQL |
| `DB_USER` | Usuario de PostgreSQL |
| `DB_PASSWORD` | Contraseña del usuario |
| `DB_HOST` | Host del servidor PostgreSQL |
| `DB_PORT` | Puerto del servidor PostgreSQL |

Ejemplo:

```dotenv
SECRET_KEY=change-me
DEBUG=True
ALLOWED_HOSTS=127.0.0.1,localhost
DB_NAME=portafolio_db
DB_USER=postgres
DB_PASSWORD=your-db-password
DB_HOST=localhost
DB_PORT=5432
```

## Frontend

Archivo local:

```text
frontend/.env.local
```

Archivo versionado:

```text
frontend/.env.example
```

Variables documentadas:

| Variable | Descripción |
| --- | --- |
| `NEXT_PUBLIC_API_BASE_URL` | URL base del backend que consumirá el frontend |

Ejemplo:

```dotenv
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

## Nota de seguridad

Las variables con prefijo `NEXT_PUBLIC_` pueden estar expuestas en el navegador. No deben utilizarse para secretos, tokens privados ni credenciales sensibles.
