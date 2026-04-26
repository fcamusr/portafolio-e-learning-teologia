# Backend

Backend principal del proyecto, construido con Django y PostgreSQL. Su responsabilidad es concentrar la lógica de negocio, la persistencia de datos, la autenticación del sistema y la futura API que consumirá el frontend.

## Alcance actual

Actualmente el backend incluye:

- Proyecto Django base en `backend/config/`
- App local `users` en `backend/apps/users/`
- Modelo de usuario personalizado basado en `AbstractUser`
- Configuración de base de datos PostgreSQL mediante variables de entorno
- Ruta del panel administrativo de Django en `/admin/`

Todavía no existen endpoints de negocio ni vistas API implementadas.

## Estructura relevante

```text
backend/
|-- apps/
|   `-- users/
|-- config/
|-- .env.example
|-- manage.py
|-- requirements.txt
`-- README.md
```

- `apps/`: aplicaciones locales del dominio
- `config/`: configuración global del proyecto Django
- `manage.py`: punto de entrada para comandos administrativos
- `requirements.txt`: dependencias del backend

## Configuración local

Desde `backend/`, crea y activa un entorno virtual:

```powershell
crea: python -m venv .venv
activa: .venv\Scripts\activate
desactiva: deactivate
```

Instala dependencias:

```powershell
pip install -r requirements.txt
```

Copia `backend/.env.example` a `backend/.env` y completa los valores reales de tu entorno local.

## Ejecución

Con el entorno virtual activo y la base de datos disponible

```powershell
python manage.py migrate #migrar
python manage.py check #salud
python manage.py runserver #arrancar
```

El servidor de desarrollo queda disponible en [http://127.0.0.1:8000/].

## Variables de entorno

El backend carga variables desde `backend/.env` usando `python-dotenv` dentro de `backend/config/settings.py`.

Variables requeridas:

- `SECRET_KEY`
- `DEBUG`
- `ALLOWED_HOSTS`
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`
- `DB_HOST`
- `DB_PORT`

Nunca se deben subir secretos reales al repositorio. El archivo versionado debe ser siempre `backend/.env.example`.

## Modelo de usuario

El modelo actual se define en `backend/apps/users/models.py` y extiende `AbstractUser`:

```python
class User(AbstractUser):
    pass
```

Tomar esta decisión al inicio evita migraciones complejas más adelante si el proyecto necesita extender el perfil de usuario.

## Referencias relacionadas

- [docs/setup/backend.md](../docs/setup/backend.md)
- [docs/database/models.md](../docs/database/models.md)
- [docs/architecture/modules.md](../docs/architecture/modules.md)
