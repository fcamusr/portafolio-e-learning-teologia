# AGENTS del frontend Next.js

## Contexto del frontend
Este frontend usa Next.js con App Router.
El proyecto esta configurado en JavaScript, no en TypeScript.
La prioridad es construir una interfaz clara, mantenible, profesional y bien alineada con el backend Django.

Si detectas problemas de encoding con acentos o caracteres especiales en documentacion, usa ASCII simple y evita acentos en los cambios nuevos.

## Estado actual que debes respetar
- Next.js `16.2.3`
- React `19.2.4`
- App Router en `frontend/src/app/`
- Sin Tailwind
- Base visual simple, ya conectada al backend en la pagina principal
- Integracion inicial real con backend Django via HTTP
- Logica compartida de acceso a datos en `frontend/src/lib/`

No migres a TypeScript, no agregues Tailwind ni introduzcas una libreria UI grande sin solicitud explicita o justificacion fuerte.

## Regla importante sobre Next.js
Esta version de Next.js puede diferir de conocimientos previos del modelo.

Si vas a tocar comportamiento sensible del framework, APIs recientes, convenciones del App Router, rendering, metadata, caching o rutas especiales, revisa primero la guia relevante en `frontend/node_modules/next/dist/docs/` antes de implementar.

## Reglas de arquitectura frontend
- Mantener el frontend desacoplado del backend.
- El frontend consume al backend; no debe duplicar logica de negocio que corresponde al servidor.
- Respetar App Router y la estructura ya existente del proyecto.
- Evitar complejidad innecesaria en componentes, hooks y carpetas.
- Reutilizar componentes cuando haya repeticion real, pero sin abstraer demasiado pronto.

## Organizacion recomendada
- Rutas, layouts y paginas en `frontend/src/app/`.
- Componentes reutilizables en una carpeta clara como `frontend/src/components/` cuando el proyecto lo necesite.
- Mantener separacion razonable entre:
  - paginas,
  - componentes,
  - estilos,
  - utilidades,
  - logica de llamadas a API.

Si cambias de forma importante la estructura, documenta el motivo.

## Variables de entorno frontend
- Valores reales en `frontend/.env.local`
- Plantilla versionable en `frontend/.env.example`
- Solo exponer al navegador variables con prefijo `NEXT_PUBLIC_`
- No hardcodear secretos ni URLs sensibles

Si agregas una variable nueva:

1. usala correctamente;
2. agregala a `frontend/.env.example`;
3. documentala en `docs/setup/environment-variables.md`;
4. y revisa si tambien debe aparecer en `frontend/README.md` o `docs/setup/frontend.md`.

## Reglas de implementacion frontend
- Prioriza HTML semantico y accesibilidad basica.
- Usa nombres claros para componentes, props y utilidades.
- Evita componentes gigantes.
- Maneja estados de carga, error y vacio cuando corresponda.
- Si una seccion se repite o ensucia la pagina, extraela a componente.
- No metas logica de negocio del backend en el frontend.
- Si el contrato API cambia o todavia no existe, deja claro que parte del frontend depende de ello.
- Manten CSS y estructura faciles de leer; no sobreabstraigas estilos antes de tiempo.

## Validacion esperada
Cuando hagas cambios visuales o de flujo:

1. explica que cambio;
2. indica que ruta o pantalla probar;
3. lista estados importantes a revisar;
4. menciona dependencias con backend o variables de entorno;
5. y, si corresponde, valida con:

```powershell
cd frontend
npm run lint
npm run build
```

## Documentacion del frontend
Si modificas frontend de forma relevante, actualiza la documentacion dentro de la misma tarea cuando el lugar correcto sea claro.

### Regla de encoding

Si detectas problemas de encoding con acentos o caracteres especiales, usa ASCII simple en los cambios nuevos.

### Regla obligatoria sobre diagramas

Si una implementacion del frontend obliga a actualizar documentacion, revisa tambien los `DIAGRAMS.md` relacionados antes de cerrar la tarea.

Reglas:

- revisa si el cambio altera rutas, consumo de API, estados visibles, estructura o flujo de pantalla;
- si el texto cambia por una implementacion real, valida que el diagrama correspondiente siga representando el estado actual;
- si el diagrama quedo desalineado, actualizalo en la misma tarea.

### Documentos que suelen tocarse
- `frontend/DIAGRAMS.md`
  - Cambios en el consumo real del backend, helpers de datos, paginas principales o alcance visual implementado.
- `frontend/README.md`
  - Setup, scripts, integracion con backend, estructura principal o alcance actual del frontend.
- `docs/setup/frontend.md`
  - Instalacion, ejecucion o build del frontend.
- `docs/setup/environment-variables.md`
  - Variables nuevas o cambios de configuracion publica.
- `docs/setup/run-project.md`
  - Si cambia como levantar frontend junto al backend.
- `docs/setup/troubleshooting.md`
  - Errores frecuentes de build, lint, variables o puertos.
- `docs/setup/DIAGRAMS.md`
  - Cambios en verificaciones locales o flujo recomendado para levantar frontend con backend.
- `docs/architecture/overview.md`
  - Cambio relevante en la vision tecnica del frontend dentro de la solucion.
- `docs/architecture/modules.md`
  - Nuevos modulos, areas o responsabilidades de UI.
- `docs/architecture/backend-frontend-communication.md`
  - Cambios en consumo de API, auth, manejo de errores o flujo de datos.
- `docs/architecture/folder-structure.md`
  - Cambios importantes en carpetas del frontend.
- `docs/architecture/DIAGRAMS.md`
  - Cambios visibles en integracion, estructura o comunicacion tecnica del frontend dentro del sistema.
- `docs/api/overview.md`
  - Cambios de contrato consumido por el frontend.
- `docs/api/health.md`
  - Cambios en el consumo del endpoint tecnico de salud desde el frontend.
- `docs/api/authentication.md`
  - Flujos de login, sesion o autorizacion reflejados en la UI.
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
- `docs/api/DIAGRAMS.md`
  - Cambios en secuencias de consumo, endpoints ya integrados o estado real de la comunicacion frontend-backend.
- `docs/progress/README.md`
  - Hitos frontend ya completados, estado actual del proyecto o siguiente paso recomendado si el cambio afecta el avance global.
- `docs/progress/DIAGRAMS.md`
  - Hitos frontend visibles en timeline, madurez o tablero de avance.
- `docs/decisions/0006-*.md` en adelante
  - Decisiones relevantes de largo plazo sobre rendering, librerias, estructura o estrategia UI.

Si el documento correcto no existe:

1. crealo dentro de `docs/` en la seccion mas especifica;
2. enlazalo desde el `README.md` de esa seccion;
3. actualiza `docs/README.md` si cambia el mapa global;
4. actualiza `docs/progress/README.md` si el cambio modifica el estado acumulado del proyecto o cierra un hito importante.

## Uso eficiente de tokens en frontend
- Revisa primero la ruta, componente o estilo afectado antes de abrir mas contexto.
- No leas arboles completos del frontend si la tarea esta localizada.
- Resume patrones visuales repetidos y detalla solo lo impactado.
- Se breve por defecto, pero no omitas dependencias con backend, rutas a probar o riesgos de UX.

## Que significa "terminado" en frontend
Un cambio frontend se considera bien hecho cuando:

1. la UI es clara y mantenible;
2. respeta App Router y la estructura existente;
3. no duplica logica del backend;
4. deja claro como probarlo;
5. la documentacion afectada fue actualizada o identificada con precision;
6. y cualquier dependencia con backend o entorno quedo explicita.
