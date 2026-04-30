# AGENTS del backend Django

## Contexto del backend
Este backend usa Django como backend/API principal del proyecto.
La base de datos principal es PostgreSQL.
También está instalado Django REST Framework, pero no asumas que toda la API ya existe solo por tener la dependencia.

La prioridad es construir un backend claro, mantenible, seguro y progresivo.

## Estado actual que debes respetar
- Proyecto Django en `backend/config/`
- Apps locales dentro de `backend/apps/`
- Apps locales existentes: `backend/apps/users/` y `backend/apps/core/`
- Modelo de usuario personalizado ya definido
- Variables sensibles cargadas desde `backend/.env`
- Base de datos PostgreSQL configurada por entorno
- Base API inicial disponible con `GET /api/health/`

No reemplaces el modelo de usuario, no reinicies autenticación desde cero y no muevas apps locales fuera de `backend/apps/` sin una razón muy fuerte y explícita.

## Reglas de arquitectura backend
- Mantener enfoque de monolito modular.
- Las apps locales deben vivir dentro de `backend/apps/`.
- Registrar apps locales usando su `AppConfig` cuando corresponda.
- Separar responsabilidades con criterio:
  - modelos para datos,
  - vistas o viewsets para orquestación HTTP,
  - serializers o formularios para validación y transformación,
  - servicios o helpers solo cuando aporten claridad real.
- Evitar capas artificiales si el problema todavía no lo necesita.
- No mezclar lógica de negocio compleja en lugares que vuelvan el mantenimiento confuso.

## Reglas de implementación backend
- Prioriza código claro y explícito.
- Usa nombres descriptivos para modelos, campos, vistas, serializers, utilidades y pruebas.
- Mantén las validaciones cerca del lugar correcto.
- Evita duplicar lógica.
- Si introduces DRF, sigue convenciones consistentes entre serializers, permisos, respuestas y errores.
- Si el cambio toca autenticación, permisos, sesiones, CSRF, CORS o seguridad, revísalo con especial cuidado.
- No debilites configuraciones de seguridad sin explicarlo claramente.

## Variables de entorno y configuración
- La configuración sensible debe salir de `backend/.env`.
- El archivo versionable de referencia es `backend/.env.example`.
- No hardcodear secretos, contraseñas ni configuraciones sensibles en `settings.py` ni en otros archivos.
- Si agregas una variable nueva:
  1. úsala en el código,
  2. agrégala a `backend/.env.example`,
  3. documéntala en `docs/setup/environment-variables.md`,
  4. y revisa si también debe aparecer en `backend/README.md` o `docs/setup/backend.md`.

## Cambios en modelos y base de datos
Si modificas modelos:

- revisa nombres, tipos de campo y relaciones con cuidado;
- evalúa impacto sobre datos existentes;
- genera migraciones coherentes;
- evita cambios destructivos innecesarios;
- explica el impacto en base de datos;
- verifica si hace falta actualizar documentación y tests.

Cuando corresponda, ejecuta o deja preparados estos comandos:

```powershell
cd backend
python manage.py makemigrations
python manage.py migrate
python manage.py check
python manage.py test
```

## API y contratos
Django es la fuente principal de verdad del lado del servidor.

Si cambias un endpoint, payload, validación, permiso, código de estado o comportamiento esperado:

1. explica el impacto;
2. actualiza `docs/api/` en el archivo correcto;
3. revisa si el frontend debe adaptarse;
4. deja claros errores, estados y supuestos.

## Documentación del backend
Si modificas backend de forma relevante, actualiza la documentación dentro de la misma tarea cuando el lugar correcto sea claro.

### Documentos que suelen tocarse
- `backend/README.md`
  - Cambios en setup, dependencias, comandos, estructura backend o responsabilidades.
- `docs/setup/backend.md`
  - Cambios en instalación, ejecución o comandos del backend.
- `docs/setup/environment-variables.md`
  - Nuevas variables o cambios de configuración.
- `docs/setup/database.md`
  - Cambios en conexión, migraciones o preparación de PostgreSQL.
- `docs/setup/troubleshooting.md`
  - Errores recurrentes o verificaciones útiles descubiertas durante el trabajo.
- `docs/database/overview.md`
  - Cambio relevante en el estado general del modelo de datos.
- `docs/database/models.md`
  - Nuevos modelos, campos o cambios importantes de esquema.
- `docs/database/relationships.md`
  - Nuevas relaciones o cambios entre entidades.
- `docs/database/migrations.md`
  - Estrategias o impactos de migración que merecen explicarse.
- `docs/database/indexes.md`
  - Índices, constraints o decisiones de rendimiento.
- `docs/database/seed-data.md`
  - Datos iniciales, fixtures o seeds.
- `docs/api/overview.md`
  - Cambio general de alcance o estilo de la API.
- `docs/api/health.md`
  - Cambios en el endpoint técnico de salud o en su uso como verificación base.
- `docs/api/authentication.md`
  - Login, sesiones, tokens, permisos o flujo auth.
- `docs/api/users.md`
  - Contratos del dominio usuarios.
- `docs/api/courses.md`
  - Contratos del dominio cursos.
- `docs/api/lessons.md`
  - Contratos del dominio lecciones.
- `docs/api/quizzes.md`
  - Contratos del dominio evaluaciones.
- `docs/api/progress.md`
  - Contratos del dominio progreso.
- `docs/api/certificates.md`
  - Contratos del dominio certificados.
- `docs/api/errors.md`
  - Formato de errores y validaciones.
- `docs/api/status-codes.md`
  - Convenciones de códigos HTTP.
- `docs/architecture/modules.md`
  - Nuevas apps, dominios o responsabilidades técnicas.
- `docs/architecture/backend-frontend-communication.md`
  - Cambios en intercambio de datos o autenticación entre capas.
- `docs/architecture/folder-structure.md`
  - Cambios estructurales en carpetas backend.
- `docs/progress/README.md`
  - Hitos backend ya completados, estado actual del proyecto o siguiente paso recomendado si el cambio afecta el avance global.
- `docs/decisions/0006-*.md` en adelante
  - Decisiones grandes y duraderas que merecen ADR nueva.

Si no existe el documento adecuado:

1. crea el archivo en la sección correcta de `docs/`;
2. enlázalo desde el `README.md` de esa sección;
3. actualiza `docs/README.md` si la nueva pieza cambia el mapa global;
4. actualiza `docs/progress/README.md` si el cambio modifica el estado acumulado del proyecto o cierra un hito importante.

## Uso eficiente de tokens en backend
- Inspecciona primero el app o módulo afectado antes de abrir todo el backend.
- No leas archivos largos completos si solo necesitas una sección puntual.
- Resume patrones repetidos y detalla solo el código impactado.
- Mantén respuestas compactas, pero no omitas riesgos de datos, seguridad o migraciones.

## Qué significa "terminado" en backend
Un cambio backend se considera bien hecho cuando:

1. el código es claro y mantenible;
2. la configuración sensible sigue fuera del código;
3. los cambios de modelo y migración están considerados;
4. el impacto en API está explicado;
5. la documentación afectada fue actualizada o identificada con precisión;
6. y existen pasos claros para verificar el resultado.
