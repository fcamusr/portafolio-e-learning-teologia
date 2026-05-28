# Diagramas de riesgos

Este documento resume visualmente riesgos tecnicos y de avance del proyecto, pensando en la implementacion pendiente de la ruta de aprendizaje, autenticacion, progreso, quizzes y dashboards.

## Flowchart de causas de riesgos

Riesgo central: avance lento o fragil en el flujo principal de aprendizaje.

```mermaid
%%{init: {"themeVariables": {"fontSize": "19px", "fontFamily": "Arial"}}}%%
flowchart LR
  Problem["Riesgo central<br/>avance lento o fragil<br/>del MVP"]

  subgraph Producto["Producto"]
    P1["Reglas de quiz<br/>aun incompletas"]
    P2["Desbloqueo de unidades<br/>requiere precision"]
    P3["Dashboards pueden crecer<br/>sin prioridad clara"]
  end

  subgraph Backend["Backend/API"]
    B1["Faltan endpoints<br/>de ruta, unidad y progreso"]
    B2["Faltan modelos<br/>de quiz e intentos"]
    B3["Autenticacion pendiente<br/>impacta progreso"]
  end

  subgraph Frontend["Frontend"]
    F1["Pantalla actual<br/>solo valida health"]
    F2["Ruta visual y modal<br/>aun no existen"]
    F3["Estados bloqueado,<br/>visto y completado pendientes"]
  end

  subgraph Datos["Datos"]
    D1["Seed inicial del curso<br/>no definido"]
    D2["Migraciones futuras<br/>para quiz y unidad"]
    D3["Progreso agregado<br/>requiere regla estable"]
  end

  subgraph Calidad["Calidad"]
    Q1["Validacion manual<br/>todavia dominante"]
    Q2["Falta evidencia<br/>por flujo completo"]
    Q3["Pruebas automatizadas<br/>aun pendientes"]
  end

  Producto --> Problem
  Backend --> Problem
  Frontend --> Problem
  Datos --> Problem
  Calidad --> Problem

  classDef problem fill:#7f1d1d,stroke:#dc2626,color:#ffffff,font-size:21px,stroke-width:3px
  classDef cause fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:19px,stroke-width:2px
  class Problem problem
  class P1,P2,P3,B1,B2,B3,F1,F2,F3,D1,D2,D3,Q1,Q2,Q3 cause
```

Lectura rapida: el mayor riesgo no es una pieza aislada, sino la coordinacion entre reglas de producto, contratos API, persistencia, UI y validacion.

## Flowchart de matriz impacto/probabilidad

Esta matriz ordena riesgos segun impacto y probabilidad para decidir donde actuar primero.

```mermaid
%%{init: {"themeVariables": {"fontSize": "19px", "fontFamily": "Arial"}}}%%
flowchart TD
  Matrix["Riesgos por impacto / probabilidad"]

  Matrix --> HH["Alto impacto<br/>Alta probabilidad<br/>Actuar ahora"]
  Matrix --> HM["Alto impacto<br/>Probabilidad media<br/>Mitigar temprano"]
  Matrix --> MH["Impacto medio<br/>Alta probabilidad<br/>Monitorear de cerca"]
  Matrix --> MM["Impacto medio<br/>Probabilidad media<br/>Planificar"]

  HH --> R1["Sin endpoints de negocio<br/>no hay experiencia funcional"]
  HH --> R2["Autenticacion indefinida<br/>puede generar retrabajo"]

  HM --> R3["Reglas de quiz/desbloqueo<br/>mal definidas"]
  HM --> R4["Modelos futuros de quiz<br/>impactan base de datos"]

  MH --> R5["Seed del curso inicial<br/>no preparado"]
  MH --> R6["Validacion manual<br/>sin evidencia estable"]

  MM --> R7["Dashboards crecen<br/>sin alcance claro"]
  MM --> R8["UI avanzada antes<br/>del contrato API"]

  classDef root fill:#0f172a,stroke:#0f172a,color:#ffffff,font-size:22px,stroke-width:3px
  classDef urgent fill:#fee2e2,stroke:#dc2626,color:#7f1d1d,font-size:19px,stroke-width:2px
  classDef early fill:#fef3c7,stroke:#b45309,color:#78350f,font-size:19px,stroke-width:2px
  classDef watch fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:19px,stroke-width:2px

  class Matrix root
  class HH,R1,R2 urgent
  class HM,R3,R4 early
  class MH,R5,R6 watch
  class MM,R7,R8 watch
```

Lectura rapida: conviene actuar primero sobre endpoints, autenticacion y reglas de desbloqueo. Dashboards y UI avanzada deben esperar a que el contrato del flujo principal este mas estable.

## Flowchart estrategico de evolucion

Esta vista separa que construir, que usar como herramienta madura y que mantener simple para no sobrecargar el MVP.

```mermaid
%%{init: {"themeVariables": {"fontSize": "19px", "fontFamily": "Arial"}}}%%
flowchart LR
  User["Necesidad del usuario<br/>avanzar por una ruta clara"]

  Build["Construir como producto<br/>ruta, unidades, clases,<br/>quiz y desbloqueo"]
  Use["Usar herramientas maduras<br/>Django, Next.js,<br/>PostgreSQL, DRF"]
  Simple["Mantener simple<br/>dashboards basicos,<br/>admin estandar,<br/>un curso inicial"]
  Defer["Postergar<br/>certificados,<br/>recomendaciones,<br/>reportes avanzados"]

  User --> Build
  Build --> Use
  Build --> Simple
  Simple --> Defer

  classDef user fill:#0f172a,stroke:#0f172a,color:#ffffff,font-size:21px,stroke-width:3px
  classDef build fill:#dcfce7,stroke:#15803d,color:#14532d,font-size:19px,stroke-width:2px
  classDef use fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:19px,stroke-width:2px
  classDef simple fill:#fef3c7,stroke:#b45309,color:#78350f,font-size:19px,stroke-width:2px
  classDef defer fill:#fee2e2,stroke:#dc2626,color:#7f1d1d,font-size:19px,stroke-width:2px

  class User user
  class Build build
  class Use use
  class Simple simple
  class Defer defer
```

Lectura rapida: el valor diferenciador esta en la ruta de aprendizaje y sus reglas de avance. Conviene usar herramientas maduras para infraestructura y mantener simples las areas que todavia no son el nucleo del MVP.
