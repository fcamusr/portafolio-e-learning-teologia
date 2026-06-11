# Diagramas de API

Este documento resume visualmente como fluye hoy la integracion entre frontend y backend, como se organiza conceptualmente una respuesta JSON y que requisitos deberian cumplir los endpoints principales cuando la API de negocio exista.

Los diagramas distinguen entre:

- flujos ya implementados: `GET /api/health/`, `GET /api/courses/` y `GET /api/courses/{id}/`;
- estructura conceptual de respuestas JSON;
- direccion de endpoints necesarios para el MVP y extensiones posteriores.

## Sequence Diagram

Este diagrama muestra un flujo real ya implementado desde Next.js hasta Django REST Framework y su salida hacia el frontend.

```mermaid
%%{init: {"themeVariables": {"fontSize": "18px", "fontFamily": "Arial"}}}%%
sequenceDiagram
  autonumber
  participant Page as Next.js page.js
  participant Api as src/lib/api.js
  participant Django as Django URL routing
  participant DRF as Django REST Framework
  participant App as apps.core.health_check
  participant DB as PostgreSQL

  Page->>Api: getHealth()
  Api->>Django: fetch(GET /api/health/)
  Django->>DRF: Entrar por /api/
  DRF->>App: Ejecutar health_check()
  App-->>DRF: Response({status, service, message})
  DRF-->>Api: JSON 200 OK
  Api-->>Page: response.json()

  Note over DB: En este endpoint tecnico actual no se consulta la base de datos
```

Lectura rapida: `page.js` delega la llamada HTTP a `api.js`, Django enruta la peticion hacia `apps.core`, y DRF devuelve un JSON simple. PostgreSQL aparece en el diagrama para dejar claro que no toda respuesta API necesita tocar la base de datos.

## Sequence Diagram alternativo

Esta vista alternativa usa una secuencia mas detallada y cercana a lectura UML tradicional.

```mermaid
%%{init: {"themeVariables": {"fontSize": "18px", "fontFamily": "Arial"}}}%%
sequenceDiagram
  participant Browser as Navegador
  participant Page as HomePage
  participant Api as getHealth()
  participant Router as Django router
  participant View as core.health_check
  participant Response as DRF Response

  Browser->>Page: Solicita /
  Page->>Api: await getHealth()
  Api->>Router: GET /api/health/
  Router->>View: Resolver ruta health/
  View->>Response: Crear objeto JSON
  Response-->>Api: 200 OK + payload
  Api-->>Page: Objeto JavaScript

  alt response.ok
    Page-->>Browser: Renderizar status, service y message
  else error HTTP
    Api-->>Page: throw Error
    Page-->>Browser: Falla del render o error de integracion
  end
```

Lectura rapida: la idea central es que el frontend no conoce el detalle interno de Django; solo consume contratos HTTP/JSON mediante helpers como `getHealth()`, `getCourses()` y `getCourseDetail()`.

## Flowchart de estructura JSON

Este diagrama muestra la estructura conceptual de respuestas JSON. No representa un esquema JSON formal, sino una vista clara de como pensar los paquetes de datos.

```mermaid
%%{init: {"themeVariables": {"fontSize": "19px", "fontFamily": "Arial"}}}%%
flowchart TD
  subgraph HealthResponse["Respuesta actual de /api/health/"]
    direction TB
    HealthRoot["JSON object"]
    HealthStatus["status: ok"]
    HealthService["service: backend"]
    HealthMessage["message: Django API funcionando correctamente"]
    HealthRoot --> HealthStatus
    HealthRoot --> HealthService
    HealthRoot --> HealthMessage
  end

  subgraph FutureResponse["Respuesta conceptual para endpoints de negocio"]
    direction TB
    FutureRoot["JSON object"]
    FutureMeta["meta<br/>paginacion, contexto o estado"]
    FutureData["data<br/>curso, unidad, leccion o progreso"]
    FutureErrors["errors<br/>validaciones o fallos"]
    FutureRoot --> FutureMeta
    FutureRoot --> FutureData
    FutureRoot -.-> FutureErrors
  end

  classDef current fill:#dcfce7,stroke:#15803d,color:#14532d,font-size:19px,stroke-width:2px
  classDef future fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:19px,stroke-width:2px
  classDef error fill:#fee2e2,stroke:#dc2626,color:#7f1d1d,font-size:19px,stroke-width:2px,stroke-dasharray: 6 4

  class HealthRoot,HealthStatus,HealthService,HealthMessage current
  class FutureRoot,FutureMeta,FutureData future
  class FutureErrors error
```

Lectura rapida: la respuesta real actual es minima y plana. Para la API de negocio, conviene pensar desde ya en una estructura consistente donde `data` lleve el recurso principal y `errors` cubra validaciones y fallos.

## Flowchart de requisitos de endpoints

Este diagrama muestra el flujo y dependencia de los endpoints principales que el proyecto necesitara para cubrir el MVP documentado.

```mermaid
%%{init: {"themeVariables": {"fontSize": "19px", "fontFamily": "Arial"}}}%%
flowchart TD
  Main["Objetivo API<br/>soportar el flujo principal de aprendizaje"]

  subgraph Current["Disponible hoy"]
    Health["GET /api/health/<br/>verificacion tecnica"]
    Courses["GET /api/courses/<br/>cursos publicados"]
    CourseDetail["GET /api/courses/:id/<br/>curso con units y lessons"]
  end

  subgraph MVP["Endpoints necesarios para el MVP"]
    Path["GET /api/learning-path/<br/>ruta del curso inicial"]
    UnitDetail["GET /api/units/:id/<br/>unidad, clases y estado"]
    Lessons["GET /api/lessons/:id/<br/>abrir clase de texto"]
    ProgressRead["GET /api/progress/<br/>ver avance"]
    ProgressWrite["POST /api/lessons/:id/view/<br/>marcar clase vista"]
    QuizRead["GET /api/units/:id/quiz/<br/>quiz desbloqueado"]
    QuizSubmit["POST /api/units/:id/quiz/submit/<br/>aprobar o repetir"]
  end

  subgraph Future["Endpoints posteriores"]
    Dashboard["GET /api/dashboard/<br/>avance resumido"]
    Certificates["GET /api/certificates/<br/>logros o certificados"]
  end

  Main --> Health
  Main --> Courses
  Main --> CourseDetail
  Main --> Path --> UnitDetail --> Lessons --> ProgressWrite --> QuizRead --> QuizSubmit
  Main --> ProgressRead
  QuizSubmit --> Dashboard --> Certificates

  classDef main fill:#0f172a,stroke:#0f172a,color:#ffffff,font-size:21px,stroke-width:3px
  classDef current fill:#dcfce7,stroke:#15803d,color:#14532d,font-size:19px,stroke-width:2px
  classDef mvp fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:19px,stroke-width:2px
  classDef future fill:#fef3c7,stroke:#b45309,color:#78350f,font-size:19px,stroke-width:2px,stroke-dasharray: 6 4

  class Main main
  class Health,Courses,CourseDetail current
  class Path,UnitDetail,Lessons,ProgressRead,ProgressWrite,QuizRead,QuizSubmit mvp
  class Dashboard,Certificates future
```

Lectura rapida: hoy existen `GET /api/health/`, `GET /api/courses/` y `GET /api/courses/:id/`. Para que el MVP funcione, la API todavia necesita ruta inicial de aprendizaje, detalle de unidad con estado de progreso, lectura de clase dedicada, marcado de clase vista, quiz de unidad y envio de respuestas. Dashboards y certificados quedan como extensiones posteriores.

## Limite actual

Estos diagramas muestran una mezcla intencional entre estado real y direccion futura:

- implementado hoy: `GET /api/health/`, `GET /api/courses/`, DRF, CORS y consumo desde Next.js;
- implementado hoy: `GET /api/courses/{id}/` con units y lessons anidados y consumo desde una ruta dinamica de Next.js;
- previsto para el MVP: endpoints de ruta inicial, unidad con progreso, lecciones, progreso y quiz;
- previsto despues: dashboards completos, certificados y funcionalidades avanzadas.
