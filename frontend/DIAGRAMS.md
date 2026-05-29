# Diagramas del frontend

Este documento muestra como esta organizado el frontend Next.js y como consume el backend Django en el estado actual del proyecto.

El objetivo es explicar dos cosas concretas:

- como `src/app/page.js` llama a `src/lib/api.js`;
- como `src/lib/api.js` consume `GET /api/health/` y `GET /api/courses/` del backend.

## Sequence Diagram

Este diagrama muestra el flujo real actual de la pagina principal. `HomePage` se renderiza como Server Component y consulta tanto `getHealth()` como `getCourses()` antes de devolver el HTML.

```mermaid
%%{init: {"themeVariables": {"fontSize": "18px", "fontFamily": "Arial"}}}%%
sequenceDiagram
  autonumber
  participant Browser as Navegador
  participant Page as src/app/page.js<br/>HomePage
  participant Api as src/lib/api.js<br/>getHealth() + getCourses()
  participant Env as NEXT_PUBLIC_API_BASE_URL
  participant Django as Django API<br/>/api/health/ + /api/courses/

  Browser->>Page: Solicita la ruta principal /
  Page->>Api: await getHealth()
  Api->>Env: Lee URL base del backend
  Env-->>Api: http://127.0.0.1:8000
  Api->>Django: fetch(API_BASE_URL + /api/health/)<br/>cache: no-store
  Django-->>Api: JSON con status, service y message
  Page->>Api: await getCourses()
  Api->>Django: fetch(API_BASE_URL + /api/courses/)<br/>cache: no-store
  Django-->>Api: JSON con cursos publicados

  alt Respuesta correcta
    Api-->>Page: return response.json()
    Page-->>Browser: Renderiza estado del backend y cursos publicados
  else Error HTTP
    Api-->>Page: throw Error("No se pudo obtener el estado del backend")
  end
```

Lectura rapida: `page.js` no construye directamente la URL ni conoce el detalle de `fetch`. Esa responsabilidad queda concentrada en `src/lib/api.js`, que usa la variable de entorno publica para llamar al backend y devolver tanto verificacion tecnica como cursos publicados.

## Flowchart de bloques

Este diagrama muestra los bloques principales del frontend actual y su relacion con Django.

```mermaid
%%{init: {"themeVariables": {"fontSize": "20px", "fontFamily": "Arial"}}}%%
flowchart TD
  Frontend["frontend/<br/>Next.js + React"]

  Frontend --> AppRouter["src/app/<br/>App Router"]
  AppRouter --> Layout["layout.js<br/>Layout raiz y metadata"]
  AppRouter --> Page["page.js<br/>Pagina principal<br/>Server Component"]

  Frontend --> Lib["src/lib/<br/>Logica compartida"]
  Lib --> Api["api.js<br/>getHealth()<br/>getCourses()"]

  Frontend --> EnvExample[".env.example<br/>NEXT_PUBLIC_API_BASE_URL"]
  EnvLocal[".env.local<br/>Valor real local<br/>no versionado"] --> Api
  EnvExample -.-> EnvLocal

  Page -->|"importa getHealth y getCourses"| Api
  Api -->|"fetch con cache: no-store"| Health["Backend Django<br/>GET /api/health/"]
  Api -->|"fetch con cache: no-store"| Courses["Backend Django<br/>GET /api/courses/"]
  Health -->|"JSON: status, service, message"| Api
  Courses -->|"JSON: lista de cursos publicados"| Api
  Api -->|"datos del backend"| Page
  Page --> UI["HTML renderizado<br/>Estado del backend<br/>y cursos publicados"]

  classDef root fill:#0f172a,stroke:#0f172a,color:#ffffff,font-size:22px,stroke-width:3px
  classDef app fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:20px,stroke-width:2px
  classDef lib fill:#fef3c7,stroke:#b45309,color:#78350f,font-size:20px,stroke-width:2px
  classDef env fill:#f8fafc,stroke:#64748b,color:#0f172a,font-size:20px,stroke-width:2px
  classDef backend fill:#dcfce7,stroke:#15803d,color:#14532d,font-size:20px,stroke-width:3px
  classDef ui fill:#fce7f3,stroke:#be185d,color:#831843,font-size:20px,stroke-width:2px

  class Frontend root
  class AppRouter,Layout,Page app
  class Lib,Api lib
  class EnvExample,EnvLocal env
  class Health,Courses backend
  class UI ui
```

Lectura rapida: `src/app/` define la pantalla visible y `src/lib/api.js` concentra la comunicacion HTTP. El frontend no accede a PostgreSQL ni duplica logica de negocio; consume Django mediante la URL configurada en `NEXT_PUBLIC_API_BASE_URL`.

## Limite actual

Estos diagramas muestran el estado real del frontend. Ya existe una integracion inicial con cursos publicados, pero todavia no existen pantallas funcionales completas de ruta de aprendizaje, autenticacion ni progreso de usuario.
