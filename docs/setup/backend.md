# Configuracion del backend

El backend vive en la carpeta `backend/` y se ejecuta como un proyecto Django independiente.

## 1. Crear entorno virtual

Desde `backend/`:

```powershell
python -m venv .venv
.venv\Scripts\activate
```

## 2. Instalar dependencias

```powershell
pip install -r requirements.txt
```

Entre las dependencias actuales del backend destacan:

- `Django`
- `djangorestframework`
- `django-cors-headers`
- `psycopg2-binary`
- `python-dotenv`

## 3. Configurar variables de entorno

Usa `backend/.env.example` como plantilla y crea `backend/.env` con valores reales para tu entorno local.

El backend carga estas variables desde `config/settings.py` mediante:

```python
load_dotenv(BASE_DIR / ".env")
```

## 4. Aplicar migraciones

Con PostgreSQL ya disponible:

```powershell
python manage.py migrate
```

## 5. Validar configuracion

```powershell
python manage.py check
```

Este comando permite detectar errores de configuracion antes de levantar el servidor.

## 6. Ejecutar el servidor

```powershell
python manage.py runserver
```

Backend local: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

## Verificacion API inicial

Despues de ejecutar `python manage.py check` y levantar el servidor, conviene verificar:

- panel administrativo: [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)
- endpoint de salud: [http://127.0.0.1:8000/api/health/](http://127.0.0.1:8000/api/health/)

## Archivos y carpetas importantes

```text
backend/
|-- apps/
|   |-- core/
|   |-- learning/
|   `-- users/
|-- config/
|-- .env.example
|-- manage.py
`-- requirements.txt
```

## Detalles relevantes del estado actual

- Las apps locales disponibles son `users`, `core` y `learning`
- `learning` ya esta registrada en Django como app local para el nucleo del dominio del MVP
- `learning` ya implementa `Course` como primer modelo real del dominio
- El modelo `User` extiende `AbstractUser`
- `AUTH_USER_MODEL` esta definido como `users.User`
- `rest_framework` y `corsheaders` ya estan registrados en la configuracion del proyecto
- `CORS_ALLOWED_ORIGINS` permite solicitudes desde `http://localhost:3000`
- La ruta `/admin/` esta disponible por defecto
- La ruta `/api/health/` permite validar la base inicial de la API

Por ahora `learning` ya define el modelo `Course`, pero aun no expone endpoints propios ni implementa `Unit`, `Lesson` o `LessonProgress`.

## Referencias relacionadas

- [../../backend/README.md](../../backend/README.md)
- [database.md](./database.md)
- [environment-variables.md](./environment-variables.md)
