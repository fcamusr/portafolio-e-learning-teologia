# AGENTS del backend Django

## Contexto del backend
Este backend usa Django como backend/API principal del proyecto.
La base de datos principal es PostgreSQL.
Tambien esta instalado Django REST Framework, pero no asumas que toda la API ya existe solo por tener la dependencia.

La prioridad es construir un backend claro, mantenible, seguro y progresivo.

## Estado actual que debes respetar
- Proyecto Django en `backend/config/`
- Apps locales dentro de `backend/apps/`
- Apps locales existentes: `backend/apps/users/` y `backend/apps/core/`
- Modelo de usuario personalizado ya definido
- Variables sensibles cargadas desde `backend/.env`
- Base de datos PostgreSQL configurada por entorno
- Base API inicial disponible con `GET /api/health/`

No reemplaces el modelo de usuario, no reinicies autenticacion desde cero y no muevas apps locales fuera de `backend/apps/` sin una razon muy fuerte y explicita.

## Reglas de arquitectura backend
- Mantener enfoque de monolito modular.
- Las apps locales deben vivir dentro de `backend/apps/`.
- Registrar apps locales usando su `AppConfig` cuando corresponda.
- Separar responsabilidades con criterio:
  - modelos para datos,
  - vistas o viewsets para orquestacion HTTP,
  - serializers o formularios para validacion y transformacion,
  - servicios o helpers solo cuando aporten claridad real.
- Evitar capas artificiales si el problema todavia no lo necesita.
- No mezclar logica de negocio compleja en lugares que vuelvan el mantenimiento confuso.

## Reglas de implementacion backend
- Prioriza codigo claro y explicito.
- Usa nombres descriptivos para modelos, campos, vistas, serializers, utilidades y pruebas.
- Manten las validaciones cerca del lugar correcto.
- Evita duplicar logica.
- Si introduces DRF, sigue convenciones consistentes entre serializers, permisos, respuestas y errores.
- Si el cambio toca autenticacion, permisos, sesiones, CSRF, CORS o seguridad, revisalo con especial cuidado.
- No debilites configuraciones de seguridad sin explicarlo claramente.

## Variables de entorno y configuracion
- La configuracion sensible debe salir de `backend/.env`.
- El archivo versionable de referencia es `backend/.env.example`.
- No hardcodear secretos, contrasenas ni configuraciones sensibles en `settings.py` ni en otros archivos.
- Si agregas una variable nueva:
  1. usala en el codigo,
  2. agregala a `backend/.env.example`,
  3. documentala en `docs/setup/environment-variables.md`,
  4. y revisa si tambien debe aparecer en `backend/README.md` o `docs/setup/backend.md`.

## Cambios en modelos y base de datos
Si modificas modelos:

- revisa nombres, tipos de campo y relaciones con cuidado;
- evalua impacto sobre datos existentes;
- genera migraciones coherentes;
- evita cambios destructivos innecesarios;
- explica el impacto en base de datos;
- verifica si hace falta actualizar documentacion y tests.

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

Si cambias un endpoint, payload, validacion, permiso, codigo de estado o comportamiento esperado:

1. explica el impacto;
2. actualiza `docs/api/` en el archivo correcto;
3. revisa si el frontend debe adaptarse;
4. deja claros errores, estados y supuestos.

## Documentacion del backend
Si modificas backend de forma relevante, actualiza la documentacion dentro de la misma tarea cuando el lugar correcto sea claro.

### Regla de encoding

Si detectas problemas de encoding con acentos o caracteres especiales, usa ASCII simple en los cambios nuevos.

### Regla obligatoria sobre diagramas

Si una implementacion del backend hace que cambie la documentacion, revisa tambien los `DIAGRAMS.md` relacionados antes de cerrar la tarea.

Reglas:

- verifica si el cambio afecta estructura, endpoints, flujo de datos, modelos o estado real del dominio;
- si afecta alguno de esos puntos, actualiza el `DIAGRAMS.md` correspondiente en la misma tarea;
- no des por hecho que un diagrama sigue vigente solo porque el texto principal ya fue corregido.

### Documentos que suelen tocarse
- `backend/DIAGRAMS.md`
  - Cambios en la estructura real del backend, modelos persistentes o estado general visible de Django.
- `backend/README.md`
  - Cambios en setup, dependencias, comandos, estructura backend o responsabilidades.
- `docs/setup/backend.md`
  - Cambios en instalacion, ejecucion o comandos del backend.
- `docs/setup/environment-variables.md`
  - Nuevas variables o cambios de configuracion.
- `docs/setup/database.md`
  - Cambios en conexion, migraciones o preparacion de PostgreSQL.
- `docs/setup/troubleshooting.md`
  - Errores recurrentes o verificaciones utiles descubiertas durante el trabajo.
- `docs/setup/DIAGRAMS.md`
  - Cambios en verificaciones locales o flujo recomendado para levantar backend con el resto del proyecto.
- `docs/database/overview.md`
  - Cambio relevante en el estado general del modelo de datos.
- `docs/database/models.md`
  - Nuevos modelos, campos o cambios importantes de esquema.
- `docs/database/relationships.md`
  - Nuevas relaciones o cambios entre entidades.
- `docs/database/migrations.md`
  - Estrategias o impactos de migracion que merecen explicarse.
- `docs/database/indexes.md`
  - Indices, constraints o decisiones de rendimiento.
- `docs/database/seed-data.md`
  - Datos iniciales, fixtures o seeds.
- `docs/database/DIAGRAMS.md`
  - Cambios en modelos, relaciones o lectura visual del estado persistido.
- `docs/api/overview.md`
  - Cambio general de alcance o estilo de la API.
- `docs/api/health.md`
  - Cambios en el endpoint tecnico de salud o en su uso como verificacion base.
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
  - Convenciones de codigos HTTP.
- `docs/api/DIAGRAMS.md`
  - Cambios en endpoints reales, secuencias de consumo o diferencia entre estado implementado y planificado.
- `docs/architecture/modules.md`
  - Nuevas apps, dominios o responsabilidades tecnicas.
- `docs/architecture/backend-frontend-communication.md`
  - Cambios en intercambio de datos o autenticacion entre capas.
- `docs/architecture/folder-structure.md`
  - Cambios estructurales en carpetas backend.
- `docs/architecture/DIAGRAMS.md`
  - Cambios en el mapa tecnico del backend dentro de la arquitectura general.
- `docs/progress/README.md`
  - Hitos backend ya completados, estado actual del proyecto o siguiente paso recomendado si el cambio afecta el avance global.
- `docs/progress/DIAGRAMS.md`
  - Hitos backend visibles en timeline, madurez o tablero de avance.
- `docs/decisions/0006-*.md` en adelante
  - Decisiones grandes y duraderas que merecen ADR nueva.

Si no existe el documento adecuado:

1. crea el archivo en la seccion correcta de `docs/`;
2. enlazalo desde el `README.md` de esa seccion;
3. actualiza `docs/README.md` si la nueva pieza cambia el mapa global;
4. actualiza `docs/progress/README.md` si el cambio modifica el estado acumulado del proyecto o cierra un hito importante.

## Uso eficiente de tokens en backend
- Inspecciona primero el app o modulo afectado antes de abrir todo el backend.
- No leas archivos largos completos si solo necesitas una seccion puntual.
- Resume patrones repetidos y detalla solo el codigo impactado.
- Manten respuestas compactas, pero no omitas riesgos de datos, seguridad o migraciones.

## Que significa "terminado" en backend
Un cambio backend se considera bien hecho cuando:

1. el codigo es claro y mantenible;
2. la configuracion sensible sigue fuera del codigo;
3. los cambios de modelo y migracion estan considerados;
4. el impacto en API esta explicado;
5. la documentacion afectada fue actualizada o identificada con precision;
6. y existen pasos claros para verificar el resultado.
