```md
# Configuración del backend

El backend está dentro de la carpeta:

```text
backend/
Activar entorno virtual

Desde backend/:

.venv\Scripts\activate
Instalar dependencias
pip install -r requirements.txt
Ejecutar servidor
python manage.py runserver

Servidor local:

http://127.0.0.1:8000/
Estructura importante
backend/
├── apps/
│   └── users/
├── config/
└── manage.py
App users

La app users se creó dentro de backend/apps/users.

El modelo User hereda de AbstractUser.

En settings.py se configuró:

AUTH_USER_MODEL = "users.User"
Nota

Los comandos de Django deben ejecutarse desde la carpeta donde está manage.py.

Agrega esta sección al final:

```md
## Variables de entorno en Django

El backend carga variables desde:

```text
backend/.env

Para esto se usa python-dotenv.

La carga se realiza en config/settings.py con:

load_dotenv(BASE_DIR / ".env")

Esto permite mantener fuera del código fuente valores sensibles como:

SECRET_KEY
DB_PASSWORD
configuración real de PostgreSQL
Verificar configuración

Desde backend/:

python manage.py check

Si no hay errores, levantar servidor:

python manage.py runserver