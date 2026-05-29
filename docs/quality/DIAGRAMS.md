# Diagramas de calidad

Este documento resume visualmente riesgos, validaciones y criterios de calidad para preparar futuras implementaciones de la plataforma.

La idea no es reemplazar las checklists, sino ayudar a decidir que revisar, que priorizar y donde conviene fortalecer el proyecto antes de cerrar nuevas funcionalidades.

## Flowchart de causas

Problema ejemplo: `frontend no muestra cursos reales`.

Este mapa ayuda a diagnosticar causas probables cuando la UI no refleja datos reales del dominio.

```mermaid
%%{init: {"themeVariables": {"fontSize": "19px", "fontFamily": "Arial"}}}%%
flowchart LR
  Problem["Problema<br/>frontend no muestra cursos reales"]

  subgraph Backend["Backend"]
    B1["El endpoint de cursos<br/>falla o no responde"]
    B2["Serializer o vista<br/>de learning con error"]
    B3["Permisos o CORS<br/>mal configurados"]
  end

  subgraph API["Contrato API"]
    A1["Ruta no documentada<br/>o inconsistente"]
    A2["Respuesta JSON<br/>sin estructura estable"]
    A3["Errores HTTP<br/>sin convencion clara"]
  end

  subgraph Datos["Datos"]
    D1["PostgreSQL sin cursos<br/>cargados"]
    D2["Migraciones no aplicadas"]
    D3["Datos de prueba<br/>no definidos"]
  end

  subgraph Frontend["Frontend"]
    F1["page.js no renderiza<br/>la respuesta de cursos"]
    F2["api.js no llama bien<br/>a getCourses"]
    F3["No hay estados<br/>loading empty error"]
  end

  subgraph QA["Validacion"]
    Q1["No se probo<br/>flujo completo"]
    Q2["No hay evidencia<br/>de endpoint real"]
    Q3["Documentacion no refleja<br/>el bloqueo actual"]
  end

  Backend --> Problem
  API --> Problem
  Datos --> Problem
  Frontend --> Problem
  QA --> Problem

  classDef problem fill:#7f1d1d,stroke:#dc2626,color:#ffffff,font-size:21px,stroke-width:3px
  classDef area fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:19px,stroke-width:2px

  class Problem problem
  class B1,B2,B3,A1,A2,A3,D1,D2,D3,F1,F2,F3,Q1,Q2,Q3 area
```

Lectura rapida: si el frontend no muestra cursos reales, el problema puede venir de varias capas. Antes de tocar la UI conviene confirmar contrato API, datos reales, migraciones, consumo desde `api.js` y evidencia de validacion.

## Flowchart de matriz impacto/esfuerzo

Esta vista organiza mejoras de calidad segun impacto esperado y esfuerzo relativo.

```mermaid
%%{init: {"themeVariables": {"fontSize": "19px", "fontFamily": "Arial"}}}%%
flowchart TD
  Matrix["Priorizacion impacto / esfuerzo"]

  Matrix --> Q1["Alto impacto<br/>Bajo esfuerzo<br/><br/>Hacer pronto"]
  Matrix --> Q2["Alto impacto<br/>Alto esfuerzo<br/><br/>Planificar bien"]
  Matrix --> Q3["Bajo impacto<br/>Bajo esfuerzo<br/><br/>Hacer si desbloquea"]
  Matrix --> Q4["Bajo impacto<br/>Alto esfuerzo<br/><br/>Evitar por ahora"]

  Q1 --> A["Seed data minima<br/>para cursos"]
  Q1 --> B["Checklist de evidencia<br/>por tarea"]
  Q1 --> C["Estados loading empty error<br/>en frontend"]

  Q2 --> D["Endpoints reales<br/>de cursos y lecciones"]
  Q2 --> E["Pruebas backend<br/>de API y modelos"]
  Q2 --> F["Flujo completo<br/>curso unidad leccion progreso"]

  Q3 --> G["Ajustes menores<br/>de documentacion"]
  Q3 --> H["Convenciones simples<br/>para evidencia QA"]

  Q4 --> I["Automatizacion E2E completa<br/>antes del flujo MVP"]
  Q4 --> J["UI avanzada de progreso<br/>sin contrato API estable"]

  classDef root fill:#0f172a,stroke:#0f172a,color:#ffffff,font-size:22px,stroke-width:3px
  classDef quick fill:#dcfce7,stroke:#15803d,color:#14532d,font-size:19px,stroke-width:2px
  classDef plan fill:#fef3c7,stroke:#b45309,color:#78350f,font-size:19px,stroke-width:2px
  classDef small fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:19px,stroke-width:2px
  classDef avoid fill:#fee2e2,stroke:#dc2626,color:#7f1d1d,font-size:19px,stroke-width:2px

  class Matrix root
  class Q1,A,B,C quick
  class Q2,D,E,F plan
  class Q3,G,H small
  class Q4,I,J avoid
```

Lectura rapida: para el siguiente tramo conviene priorizar datos minimos, evidencia QA, estados visibles y endpoints reales. La automatizacion E2E completa puede esperar hasta que el flujo principal exista.

## Flowchart radial de madurez tecnica

Esta vista usa una forma radial. No es una medicion formal: sirve para ver rapidamente que areas estan mas maduras y cuales requieren trabajo futuro.

```mermaid
%%{init: {"themeVariables": {"fontSize": "19px", "fontFamily": "Arial"}}}%%
flowchart TD
  Center["Madurez tecnica<br/>estado aproximado"]

  Center --> Backend["Backend base<br/>4/5<br/>Django, DRF, CORS,<br/>health endpoint"]
  Center --> Data["Modelo de datos<br/>4/5<br/>User, Course, Unit,<br/>Lesson, LessonProgress"]
  Center --> Docs["Documentacion<br/>5/5<br/>setup, arquitectura,<br/>API, producto, calidad"]
  Center --> Frontend["Frontend funcional<br/>3/5<br/>Next.js conectado<br/>a health y courses"]
  Center --> Api["API de negocio<br/>2/5<br/>courses expuesto,<br/>progreso pendiente"]
  Center --> Tests["Pruebas automatizadas<br/>1/5<br/>pendiente estrategia<br/>segun flujo real"]

  classDef center fill:#0f172a,stroke:#0f172a,color:#ffffff,font-size:22px,stroke-width:3px
  classDef mature fill:#dcfce7,stroke:#15803d,color:#14532d,font-size:19px,stroke-width:2px
  classDef medium fill:#fef3c7,stroke:#b45309,color:#78350f,font-size:19px,stroke-width:2px
  classDef low fill:#fee2e2,stroke:#dc2626,color:#7f1d1d,font-size:19px,stroke-width:2px

  class Center center
  class Backend,Data,Docs mature
  class Frontend medium
  class Api,Tests low
```

Lectura rapida: el proyecto esta fuerte en documentacion, backend base y modelo de datos. El foco de calidad para futuras implementaciones deberia moverse hacia API de negocio, frontend con datos reales y pruebas automatizadas proporcionales al riesgo.

## Uso recomendado

Estos mapas se pueden revisar antes de iniciar una funcionalidad grande, especialmente si toca cursos, lecciones, progreso o integracion frontend-backend.

Tambien sirven para cerrar tareas: si aparece un fallo, el flowchart de causas ayuda a buscar origen; si hay varias mejoras posibles, la matriz ayuda a ordenar; si se planifica una etapa nueva, la vista radial ayuda a ver donde falta madurez.
