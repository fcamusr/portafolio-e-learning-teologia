# Ejecutar el proyecto localmente

El proyecto se levanta con dos procesos independientes: un servidor Django para el backend y un servidor Next.js para el frontend.

## Secuencia recomendada

### Terminal 1: backend

Desde `backend/`:

```powershell
.venv\Scripts\activate
python manage.py migrate
python manage.py runserver
```

Backend local: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

### Terminal 2: frontend

Desde `frontend/`:

```powershell
npm run dev
```

Frontend local: [http://localhost:3000/](http://localhost:3000/)

## Verificacion minima

Una vez levantados ambos servicios:

- abre el frontend en `http://localhost:3000/`
- verifica que el backend responda en `http://127.0.0.1:8000/admin/`
- verifica que el endpoint API responda en `http://127.0.0.1:8000/api/health/`
- confirma que la pagina principal muestre `status`, `service` y `message` provenientes del backend

## Observacion

Aunque todavia no existen endpoints de negocio, la primera conexion real entre frontend y backend ya esta implementada. Para ver esa integracion funcionando, ambos servicios deben estar activos al mismo tiempo.
