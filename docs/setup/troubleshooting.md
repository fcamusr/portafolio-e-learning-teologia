# Troubleshooting

Problemas frecuentes durante la configuración local y cómo revisarlos rápidamente.

## `manage.py` no existe

Causa probable: el comando se está ejecutando fuera de `backend/`.

Solución:

```powershell
cd backend
python manage.py runserver
```

## El backend no conecta a PostgreSQL

Revisa lo siguiente:

- que PostgreSQL esté iniciado
- que la base de datos exista
- que `backend/.env` tenga valores correctos para `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_HOST` y `DB_PORT`
- que el usuario tenga permisos sobre la base de datos

Comando útil:

```powershell
python manage.py check
```

## El frontend no inicia

Verifica dependencias e intenta nuevamente:

```powershell
cd frontend
npm install
npm run dev
```

## `*.env.example` no aparece en Git

Revisa las reglas de `.gitignore`. Si tienes una regla amplia para `.env*`, agrega una excepción explícita:

```gitignore
.env
.env.*
!.env.example
```

## Las URLs de frontend y backend no coinciden

Verifica que:

- el backend esté en `http://127.0.0.1:8000`
- el frontend esté en `http://localhost:3000`
- `frontend/.env.local` apunte al backend correcto mediante `NEXT_PUBLIC_API_BASE_URL`
