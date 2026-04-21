docs/setup/backend.md

Aquí explicas cómo preparar Django.

Contenido inicial:

# Configuración del backend

## Entrar a la carpeta backend

```bash
cd backend
Crear entorno virtual
python -m venv venv
Activar entorno virtual en PowerShell
.\venv\Scripts\Activate.ps1
Instalar dependencias
pip install -r requirements.txt
Aplicar migraciones
python manage.py migrate
Crear superusuario
python manage.py createsuperuser

Este archivo es más detallado que el `backend/README.md`.