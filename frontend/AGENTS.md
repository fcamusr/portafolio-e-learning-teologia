# AGENTS del frontend Next.js

## Contexto del frontend
Este frontend usa Next.js con App Router.
El proyecto está configurado en JavaScript, no en TypeScript.
La prioridad es construir una interfaz clara, mantenible, profesional y bien alineada con el backend Django.

## Estado actual que debes respetar
- Next.js `16.2.3`
- React `19.2.4`
- App Router en `frontend/src/app/`
- Sin Tailwind
- Base visual simple, ya conectada al backend en la página principal
- Integración inicial real con backend Django vía HTTP
- Lógica compartida de acceso a datos en `frontend/src/lib/`

No migres a TypeScript, no agregues Tailwind ni introduzcas una librería UI grande sin solicitud explícita o justificación fuerte.

## Regla importante sobre Next.js
Esta versión de Next.js puede diferir de conocimientos previos del modelo.

Si vas a tocar comportamiento sensible del framework, APIs recientes, convenciones del App Router, rendering, metadata, caching o rutas especiales, revisa primero la guía relevante en `frontend/node_modules/next/dist/docs/` antes de implementar.

## Reglas de arquitectura frontend
- Mantener el frontend desacoplado del backend.
- El frontend consume al backend; no debe duplicar lógica de negocio que corresponde al servidor.
- Respetar App Router y la estructura ya existente del proyecto.
- Evitar complejidad innecesaria en componentes, hooks y carpetas.
- Reutilizar componentes cuando haya repetición real, pero sin abstraer demasiado pronto.

## Organización recomendada
- Rutas, layouts y páginas en `frontend/src/app/`.
- Componentes reutilizables en una carpeta clara como `frontend/src/components/` cuando el proyecto lo necesite.
- Mantener separación razonable entre:
  - páginas,
  - componentes,
  - estilos,
  - utilidades,
  - lógica de llamadas a API.

Si cambias de forma importante la estructura, documenta el motivo.

## Variables de entorno frontend
- Valores reales en `frontend/.env.local`
- Plantilla versionable en `frontend/.env.example`
- Solo exponer al navegador variables con prefijo `NEXT_PUBLIC_`
- No hardcodear secretos ni URLs sensibles

Si agregas una variable nueva:

1. úsala correctamente;
2. agrégala a `frontend/.env.example`;
3. documéntala en `docs/setup/environment-variables.md`;
4. y revisa si también debe aparecer en `frontend/README.md` o `docs/setup/frontend.md`.

## Reglas de implementación frontend
- Prioriza HTML semántico y accesibilidad básica.
- Usa nombres claros para componentes, props y utilidades.
- Evita componentes gigantes.
- Maneja estados de carga, error y vacío cuando corresponda.
- Si una sección se repite o ensucia la página, extráela a componente.
- No metas lógica de negocio del backend en el frontend.
- Si el contrato API cambia o todavía no existe, deja claro qué parte del frontend depende de ello.
- Mantén CSS y estructura fáciles de leer; no sobreabstraigas estilos antes de tiempo.

## Validación esperada
Cuando hagas cambios visuales o de flujo:

1. explica qué cambió;
2. indica qué ruta o pantalla probar;
3. lista estados importantes a revisar;
4. menciona dependencias con backend o variables de entorno;
5. y, si corresponde, valida con:

```powershell
cd frontend
npm run lint
npm run build
```

## Documentación del frontend
Si modificas frontend de forma relevante, actualiza la documentación dentro de la misma tarea cuando el lugar correcto sea claro.

### Documentos que suelen tocarse
- `frontend/README.md`
  - Setup, scripts, integración con backend, estructura principal o alcance actual del frontend.
- `docs/setup/frontend.md`
  - Instalación, ejecución o build del frontend.
- `docs/setup/environment-variables.md`
  - Variables nuevas o cambios de configuración pública.
- `docs/setup/run-project.md`
  - Si cambia cómo levantar frontend junto al backend.
- `docs/setup/troubleshooting.md`
  - Errores frecuentes de build, lint, variables o puertos.
- `docs/architecture/overview.md`
  - Cambio relevante en la visión técnica del frontend dentro de la solución.
- `docs/architecture/modules.md`
  - Nuevos módulos, áreas o responsabilidades de UI.
- `docs/architecture/backend-frontend-communication.md`
  - Cambios en consumo de API, auth, manejo de errores o flujo de datos.
- `docs/architecture/folder-structure.md`
  - Cambios importantes en carpetas del frontend.
- `docs/api/overview.md`
  - Cambios de contrato consumido por el frontend.
- `docs/api/health.md`
  - Cambios en el consumo del endpoint técnico de salud desde el frontend.
- `docs/api/authentication.md`
  - Flujos de login, sesión o autorización reflejados en la UI.
- `docs/api/users.md`
  - Pantallas o integraciones ligadas al dominio usuarios.
- `docs/api/courses.md`
  - Pantallas o integraciones ligadas al dominio cursos.
- `docs/api/lessons.md`
  - Pantallas o integraciones ligadas al dominio lecciones.
- `docs/api/quizzes.md`
  - Pantallas o integraciones ligadas al dominio evaluaciones.
- `docs/api/progress.md`
  - Pantallas o integraciones ligadas al dominio progreso.
- `docs/api/certificates.md`
  - Pantallas o integraciones ligadas al dominio certificados.
- `docs/api/errors.md`
  - Manejo visible de errores y formato esperado.
- `docs/progress/README.md`
  - Hitos frontend ya completados, estado actual del proyecto o siguiente paso recomendado si el cambio afecta el avance global.
- `docs/decisions/0006-*.md` en adelante
  - Decisiones relevantes de largo plazo sobre rendering, librerías, estructura o estrategia UI.

Si el documento correcto no existe:

1. créalo dentro de `docs/` en la sección más específica;
2. enlázalo desde el `README.md` de esa sección;
3. actualiza `docs/README.md` si cambia el mapa global;
4. actualiza `docs/progress/README.md` si el cambio modifica el estado acumulado del proyecto o cierra un hito importante.

## Uso eficiente de tokens en frontend
- Revisa primero la ruta, componente o estilo afectado antes de abrir más contexto.
- No leas árboles completos del frontend si la tarea está localizada.
- Resume patrones visuales repetidos y detalla solo lo impactado.
- Sé breve por defecto, pero no omitas dependencias con backend, rutas a probar o riesgos de UX.

## Qué significa "terminado" en frontend
Un cambio frontend se considera bien hecho cuando:

1. la UI es clara y mantenible;
2. respeta App Router y la estructura existente;
3. no duplica lógica del backend;
4. deja claro cómo probarlo;
5. la documentación afectada fue actualizada o identificada con precisión;
6. y cualquier dependencia con backend o entorno quedó explícita.
