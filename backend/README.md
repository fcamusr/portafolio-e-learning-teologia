# Backend - Django

Backend principal del proyecto e-learning de teología.

Este backend está construido con Django y PostgreSQL. Su responsabilidad será manejar la lógica de negocio, autenticación, modelos, base de datos y futura API que consumirá el frontend Next.js.

## Estructura actual

```text
backend/
├── apps/
│   └── users/
├── config/
├── .env
├── .env.example
├── .gitignore
├── manage.py
├── README.md
└── requirements.txt
Apps locales

Las apps propias del proyecto se ubican dentro de:

backend/apps/

Esto ayuda a separar las apps locales del código de configuración del proyecto.

App users

La app users contiene el modelo de usuario personalizado.

El modelo User hereda de AbstractUser, por lo que mantiene el comportamiento base de Django, pero deja preparada la estructura para extender el usuario en el futuro.

Variables de entorno

El backend usa un archivo .env para configuración local sensible.

Este archivo no debe subirse a GitHub.

El archivo .env.example sí se versiona para mostrar qué variables necesita el proyecto.

Ejecutar backend

Desde la carpeta backend/:

.venv\Scripts\activate
python manage.py runserver

El servidor se ejecuta en:

http://127.0.0.1:8000/
Base de datos

El backend usa PostgreSQL como base de datos principal.

La configuración real debe cargarse desde variables de entorno.

```md
## Configuración con variables de entorno

El backend usa variables de entorno para evitar dejar secretos dentro del código fuente.

Archivo real local:

```text
.env

Archivo de ejemplo versionable:

.env.example

El archivo .env debe contener valores reales de desarrollo local.

El archivo .env.example debe contener la estructura esperada sin secretos reales.

Dependencia para cargar variables

El proyecto usa python-dotenv para cargar backend/.env desde config/settings.py.

Después de instalar o actualizar dependencias:

pip freeze > requirements.txt