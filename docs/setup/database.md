# Configuración de base de datos

El proyecto utiliza PostgreSQL como base de datos principal para desarrollo local y para la evolución futura del dominio.

## Objetivo

La base de datos respalda actualmente el backend Django y su modelo de usuario personalizado. A medida que el producto crezca, también alojará cursos, lecciones, progreso, evaluaciones y otras entidades del negocio.

## Configuración esperada

La conexión se define en `backend/config/settings.py` a través de variables de entorno:

- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`
- `DB_HOST`
- `DB_PORT`

El nombre de base documentado en el ejemplo de entorno es:

```text
portafolio_db
```

## Flujo recomendado

1. Crea una base de datos local en PostgreSQL.
2. Completa `backend/.env` con las credenciales correctas.
3. Ejecuta `python manage.py migrate` desde `backend/`.
4. Verifica que Django se conecte correctamente con `python manage.py check`.

## Consideraciones

- Nunca subas contraseñas reales al repositorio.
- Mantén `backend/.env.example` actualizado cuando cambie la estructura de configuración.
- Si cambias modelos, recuerda generar y aplicar migraciones.

## Referencias relacionadas

- [environment-variables.md](./environment-variables.md)
- [../database/overview.md](../database/overview.md)
- [../database/migrations.md](../database/migrations.md)
