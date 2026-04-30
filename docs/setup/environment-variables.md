# Variables de entorno

El proyecto usa variables de entorno para separar configuracion sensible del codigo fuente y facilitar cambios entre entornos.

## Regla principal

- Los archivos reales de entorno no deben versionarse.
- Los archivos `*.env.example` si deben mantenerse actualizados como plantilla.

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

| Variable | Descripcion |
| --- | --- |
| `SECRET_KEY` | Clave secreta usada por Django |
| `DEBUG` | Activa o desactiva el modo de depuracion |
| `ALLOWED_HOSTS` | Lista de hosts permitidos |
| `DB_NAME` | Nombre de la base PostgreSQL |
| `DB_USER` | Usuario de PostgreSQL |
| `DB_PASSWORD` | Contrasena del usuario |
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

| Variable | Descripcion |
| --- | --- |
| `NEXT_PUBLIC_API_BASE_URL` | URL base del backend que consumira el frontend |

Ejemplo:

```dotenv
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

Uso actual:

- `frontend/src/lib/api.js` lee esta variable desde `process.env`
- la pagina principal usa esa funcion para consultar `GET /api/health/`

## Nota de seguridad

Las variables con prefijo `NEXT_PUBLIC_` pueden estar expuestas en el navegador. No deben utilizarse para secretos, tokens privados ni credenciales sensibles.
