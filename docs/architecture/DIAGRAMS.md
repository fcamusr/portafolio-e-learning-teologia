# Diagramas de arquitectura

Este documento resume visualmente la arquitectura actual del proyecto. Los diagramas muestran el estado real: monorepo con frontend Next.js, backend Django, PostgreSQL y documentacion viva.

Las vistas se enfocan en contexto, contenedores, componentes internos y comunicacion tecnica entre servicios.

## Flowchart de contexto del sistema

Vista de contexto: muestra quienes interactuan con el proyecto y que rol cumple la plataforma dentro del repositorio.

```mermaid
%%{init: {"themeVariables": {"fontSize": "20px", "fontFamily": "Arial"}}}%%
flowchart TD
  Usuario["Usuario estudiante<br/>Consulta contenidos y avance futuro"]
  Admin["Administrador<br/>Gestiona contenido desde Django Admin"]
  Plataforma["Plataforma e-learning<br/>Portafolio fullstack de teologia"]
  Versioning["Repositorio Git<br/>historial y evidencia profesional"]

  Usuario -->|"Usara la experiencia web"| Plataforma
  Admin -->|"Administra datos internos"| Plataforma
  Plataforma -->|"Codigo, documentacion y avance"| Versioning
  Versioning -->|"Permite revisar decisiones y progreso"| Plataforma

  classDef person fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:20px,stroke-width:2px
  classDef system fill:#0f172a,stroke:#0f172a,color:#ffffff,font-size:22px,stroke-width:3px
  classDef external fill:#fef3c7,stroke:#b45309,color:#78350f,font-size:20px,stroke-width:2px

  class Usuario,Admin person
  class Plataforma system
  class Versioning external
```

Lectura rapida: la plataforma es el sistema central. El repositorio no es parte de la ejecucion de la app, pero si es clave para preservar codigo, documentacion, decisiones y avance del portafolio.

## Flowchart de contenedores del proyecto

Vista de contenedores: muestra las piezas principales del monorepo y como se conectan.

```mermaid
%%{init: {"themeVariables": {"fontSize": "20px", "fontFamily": "Arial"}}}%%
flowchart TD
  subgraph Repo["Monorepo Portafolio/"]
    Frontend["frontend/<br/>Next.js App Router<br/>Cliente web"]
    Backend["backend/<br/>Django + DRF<br/>API principal"]
    Docs["docs/<br/>Documentacion viva<br/>setup, arquitectura, API, datos y progreso"]
  end

  DB[("PostgreSQL<br/>Base de datos principal")]

  Frontend -->|"HTTP / JSON<br/>NEXT_PUBLIC_API_BASE_URL"| Backend
  Backend -->|"Django ORM"| DB
  Docs -.->|"Explica setup y decisiones"| Frontend
  Docs -.->|"Explica arquitectura y API"| Backend
  Docs -.->|"Explica modelos y migraciones"| DB

  classDef container fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:20px,stroke-width:2px
  classDef docs fill:#fef3c7,stroke:#b45309,color:#78350f,font-size:20px,stroke-width:2px
  classDef data fill:#dcfce7,stroke:#15803d,color:#14532d,font-size:20px,stroke-width:3px

  class Frontend,Backend container
  class Docs docs
  class DB data
```

Lectura rapida: Next.js consume a Django por HTTP. Django es el unico que se conecta a PostgreSQL. `docs/` no ejecuta codigo, pero hace visible el razonamiento tecnico y el estado real del proyecto.

## Flowchart de componentes del backend

Vista de componentes del backend Django: muestra apps internas y piezas tecnicas que sostienen la API.

```mermaid
%%{init: {"themeVariables": {"fontSize": "19px", "fontFamily": "Arial"}}}%%
flowchart TD
  Backend["backend/<br/>Django API"]

  Backend --> Config["config/<br/>settings.py, urls.py,<br/>asgi.py, wsgi.py"]
  Backend --> Middleware["Middleware<br/>corsheaders, security,<br/>sessions, csrf, auth"]
  Backend --> DRF["Django REST Framework<br/>Base para respuestas JSON"]
  Backend --> Admin["Django Admin<br/>/admin/"]
  Backend --> Apps["apps/<br/>Apps locales"]

  Apps --> Core["core<br/>GET /api/health/"]
  Apps --> Users["users<br/>User personalizado"]
  Apps --> Learning["learning<br/>Course, Unit, Lesson,<br/>LessonProgress"]

  Config --> Env["backend/.env<br/>Variables reales"]
  Config --> DB[("PostgreSQL<br/>DATABASES default")]
  Users -->|"ORM"| DB
  Learning -->|"ORM"| DB
  Admin --> Users
  Admin --> Learning
  Core --> DRF

  classDef root fill:#0f172a,stroke:#0f172a,color:#ffffff,font-size:22px,stroke-width:3px
  classDef config fill:#fef3c7,stroke:#b45309,color:#78350f,font-size:19px,stroke-width:2px
  classDef app fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:19px,stroke-width:2px
  classDef domain fill:#fee2e2,stroke:#dc2626,color:#7f1d1d,font-size:19px,stroke-width:2px
  classDef data fill:#dcfce7,stroke:#15803d,color:#14532d,font-size:19px,stroke-width:3px

  class Backend root
  class Config,Middleware,DRF,Admin,Env config
  class Apps,Core,Users app
  class Learning domain
  class DB data
```

Lectura rapida: el backend sigue un monolito modular. `config/` concentra la configuracion global, `apps/` separa dominios internos y PostgreSQL queda detras del ORM. Hoy `core` expone el endpoint tecnico de salud y `learning` ya expone `GET /api/courses/` como primer endpoint de dominio.

## Flowchart de arquitectura tecnica

Vista tecnica de servicios conectados en desarrollo local.

```mermaid
%%{init: {"themeVariables": {"fontSize": "20px", "fontFamily": "Arial"}}}%%
flowchart LR
  Browser["Navegador<br/>http://localhost:3000"]
  Next["Next.js dev server<br/>frontend/"]
  ApiClient["src/lib/api.js<br/>fetch + no-store"]
  Django["Django dev server<br/>http://127.0.0.1:8000"]
  Health["GET /api/health/<br/>apps.core"]
  Courses["GET /api/courses/<br/>apps.learning"]
  Admin["/admin/<br/>Django Admin"]
  ORM["Django ORM"]
  DB[("PostgreSQL<br/>Local")]
  Env["Archivos de entorno<br/>backend/.env<br/>frontend/.env.local"]

  Browser --> Next
  Next --> ApiClient
  ApiClient -->|"HTTP / JSON"| Django
  Django --> Health
  Django --> Courses
  Django --> Admin
  Admin --> ORM
  Django --> ORM
  ORM --> DB
  Env -.-> Next
  Env -.-> Django

  classDef client fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:20px,stroke-width:2px
  classDef server fill:#fef3c7,stroke:#b45309,color:#78350f,font-size:20px,stroke-width:2px
  classDef data fill:#dcfce7,stroke:#15803d,color:#14532d,font-size:20px,stroke-width:3px
  classDef env fill:#f8fafc,stroke:#64748b,color:#0f172a,font-size:20px,stroke-width:2px

  class Browser,Next,ApiClient client
  class Django,Health,Courses,Admin,ORM server
  class DB data
  class Env env
```

Lectura rapida: en local corren dos servidores: Next.js y Django. El frontend llama a Django usando `NEXT_PUBLIC_API_BASE_URL`. Django usa PostgreSQL mediante el ORM y expone `/api/health/`, `GET /api/courses/` y `/admin/`.

## Flowchart de bloques principales

Vista simple para entender el proyecto sin entrar en detalle tecnico.

```mermaid
%%{init: {"themeVariables": {"fontSize": "22px", "fontFamily": "Arial"}}}%%
flowchart TD
  Proyecto["Portafolio e-learning<br/>Proyecto fullstack"]

  Proyecto --> Frontend["Frontend<br/>Next.js"]
  Proyecto --> Backend["Backend<br/>Django"]
  Proyecto --> Database["Base de datos<br/>PostgreSQL"]
  Proyecto --> Documentation["Documentacion<br/>docs/"]
  Proyecto --> Versioning["Versionamiento<br/>Git"]

  Frontend -->|"Consume API"| Backend
  Backend -->|"Guarda y lee datos"| Database
  Documentation -.->|"Explica como funciona"| Frontend
  Documentation -.->|"Explica decisiones"| Backend
  Versioning -.->|"Muestra historial del trabajo"| Proyecto

  classDef root fill:#0f172a,stroke:#0f172a,color:#ffffff,font-size:24px,stroke-width:3px
  classDef block fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:22px,stroke-width:2px
  classDef data fill:#dcfce7,stroke:#15803d,color:#14532d,font-size:22px,stroke-width:3px
  classDef docs fill:#fef3c7,stroke:#b45309,color:#78350f,font-size:22px,stroke-width:2px

  class Proyecto root
  class Frontend,Backend block
  class Database data
  class Documentation,Versioning docs
```

Lectura rapida: la aplicacion se entiende como cuatro bloques principales: frontend, backend, base de datos y documentacion. Git acompana el proyecto como evidencia del avance y control de versiones.

## Limite actual

Estos diagramas representan el estado arquitectonico vigente. Ya existe un primer endpoint de negocio y una integracion inicial del frontend con cursos reales, pero todavia no hay pantallas funcionales completas del producto; por eso se muestran como base tecnica conectada y no como plataforma e-learning terminada.
