# Configuración del backend

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

## 5. Validar configuración

```powershell
python manage.py check
```

Este comando permite detectar errores de configuración antes de levantar el servidor.

## 6. Ejecutar el servidor

```powershell
python manage.py runserver
```

Backend local: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

## Archivos y carpetas importantes

```text
backend/
|-- apps/
|   `-- users/
|-- config/
|-- .env.example
|-- manage.py
`-- requirements.txt
```

## Detalles relevantes del estado actual

- La app local disponible es `users`
- El modelo `User` extiende `AbstractUser`
- `AUTH_USER_MODEL` está definido como `users.User`
- La ruta `/admin/` está disponible por defecto

## Referencias relacionadas

- [../../backend/README.md](../../backend/README.md)
- [database.md](./database.md)
- [environment-variables.md](./environment-variables.md)
