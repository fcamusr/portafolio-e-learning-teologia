```md
# Troubleshooting

Problemas comunes y soluciones.

## Error: no existe manage.py

Causa probable: el comando se ejecutó desde la carpeta incorrecta.

Solución: ejecutar comandos Django desde:

```text
backend/

Ejemplo:

cd backend
python manage.py runserver
.env.example no aparece en Git

Causa probable: .gitignore está ignorando .env*.

Solución: permitir explícitamente .env.example.

.env
.env.*
!.env.example
Frontend no inicia

Verificar dependencias:

cd frontend
npm install
npm run dev
Backend no conecta a PostgreSQL

Revisar:

Nombre de base de datos.
Usuario.
Contraseña.
Puerto.
Variables de entorno.
Que PostgreSQL esté iniciado.