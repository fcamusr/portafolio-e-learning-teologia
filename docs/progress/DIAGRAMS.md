# Diagramas de progreso

Este documento resume avance, planificacion y estado del proyecto. Su objetivo es ayudar a retomar rapidamente el trabajo y ver que falta para llegar al MVP.

## Timeline de avance

```mermaid
timeline
  title Historia del avance del proyecto
  2026-04-28 : Backend listo como base API
             : DRF, CORS y endpoint de salud
  2026-04-29 : Primera conexion real frontend-backend
             : Next.js consume GET /api/health/
  2026-05-05 : App learning creada
             : Base del dominio del MVP
  2026-05-06 : Modelos del nucleo implementados
             : Course, Unit, Lesson y LessonProgress
  2026-05-18 : Documentacion de producto, calidad y riesgos fortalecida
  2026-05-23 : Admin real de learning documentado
  2026-05-29 : Primera exposicion API de courses
             : Frontend consume GET /api/courses/
  2026-06-11 : Endpoint de detalle de curso implementado
             : GET /api/courses/:id/ con units y lessons
  2026-06-11 : Pagina dinamica de curso implementada
             : Next.js navega desde la home al detalle
  Siguiente etapa : Ruta de aprendizaje inicial
                  : Endpoints, autenticacion, progreso y quiz por unidad
```

Lectura rapida: el proyecto ya salio de la fase de setup inicial y entro en una etapa donde el siguiente valor viene de cerrar un flujo funcional real.

## Gantt de proximas tareas

```mermaid
gantt
  title Planificacion referencial hacia MVP
  dateFormat  YYYY-MM-DD
  axisFormat  %d-%m

  section Producto
  Cerrar reglas de ruta y desbloqueo       :a1, 2026-05-26, 3d
  Definir criterios de quiz                :a2, after a1, 3d

  section Backend/API
  Endpoint de ruta inicial                 :b1, after a1, 4d
  Endpoints de clase vista y progreso      :b2, after b1, 4d
  Contrato de quiz por unidad              :b3, after a2, 4d

  section Frontend
  Pantalla de ruta de aprendizaje          :c1, after b1, 5d
  Modal de clases por unidad               :c2, after c1, 3d
  Vista de clase de texto                  :c3, after c2, 3d

  section Calidad
  Seed data minima                         :d1, 2026-05-26, 3d
  Evidencia QA del flujo completo          :d2, after c3, 3d
```

Lectura rapida: el orden saludable es cerrar reglas, contratos y datos minimos antes de invertir demasiado en UI avanzada.

## Flowchart de tablero de tareas

```mermaid
%%{init: {"themeVariables": {"fontSize": "19px", "fontFamily": "Arial"}}}%%
flowchart LR
  subgraph Todo["Pendiente"]
    T1["Definir login/registro"]
    T2["Modelar quiz e intentos"]
    T3["Definir dashboards iniciales"]
    T4["Preparar seed data del curso"]
  end

  subgraph Doing["En progreso documental"]
    D1["Diagramas por carpeta"]
    D2["Reglas de ruta de aprendizaje"]
    D3["Riesgos y prioridades"]
  end

  subgraph Done["Hecho"]
    H1["Backend Django base"]
    H2["Frontend Next.js base"]
    H3["PostgreSQL conectado"]
    H4["Modelos Course Unit Lesson LessonProgress"]
    H5["GET /api/health/"]
    H6["GET /api/courses/<br/>consumido por frontend"]
    H7["GET /api/courses/:id/<br/>units y lessons anidados"]
    H8["/courses/[courseId]<br/>pagina dinamica en Next.js"]
  end

  Todo --> Doing --> Done

  classDef todo fill:#fef3c7,stroke:#b45309,color:#78350f,font-size:19px,stroke-width:2px
  classDef doing fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:19px,stroke-width:2px
  classDef done fill:#dcfce7,stroke:#15803d,color:#14532d,font-size:19px,stroke-width:2px

  class T1,T2,T3,T4 todo
  class D1,D2,D3 doing
  class H1,H2,H3,H4,H5,H6,H7,H8 done
```

Lectura rapida: la base tecnica ya esta lista, pero el flujo de producto todavia necesita contratos, UI, datos iniciales y reglas de avance.

## Pie Chart de avance referencial

```mermaid
pie title Distribucion referencial del avance
  "Base backend y datos" : 30
  "Frontend base" : 15
  "Documentacion y decisiones" : 30
  "API de negocio pendiente" : 10
  "Flujo funcional pendiente" : 15
```

Lectura rapida: el avance acumulado esta fuerte en base tecnica y documentacion. El mayor espacio pendiente esta en API de negocio y experiencia funcional.

## Flowchart de avance por area

```mermaid
%%{init: {"themeVariables": {"fontSize": "19px", "fontFamily": "Arial"}}}%%
flowchart TD
  Progress["Avance por area"]

  Progress --> Backend["Backend base<br/>alto"]
  Progress --> Data["Modelo de datos<br/>alto"]
  Progress --> Docs["Documentacion<br/>alto"]
  Progress --> Frontend["Frontend funcional<br/>medio-alto"]
  Progress --> API["API de negocio<br/>medio"]
  Progress --> QA["Pruebas automatizadas<br/>bajo"]

  classDef root fill:#0f172a,stroke:#0f172a,color:#ffffff,font-size:22px,stroke-width:3px
  classDef high fill:#dcfce7,stroke:#15803d,color:#14532d,font-size:19px,stroke-width:2px
  classDef mid fill:#fef3c7,stroke:#b45309,color:#78350f,font-size:19px,stroke-width:2px
  classDef low fill:#fee2e2,stroke:#dc2626,color:#7f1d1d,font-size:19px,stroke-width:2px

  class Progress root
  class Backend,Data,Docs high
  class Frontend mid
  class API,QA low
```

Lectura rapida: el esfuerzo siguiente deberia concentrarse en cerrar API de negocio, ruta visual y validacion.

## Flowchart radial de madurez actual vs meta MVP

```mermaid
%%{init: {"themeVariables": {"fontSize": "19px", "fontFamily": "Arial"}}}%%
flowchart TD
  Goal["Meta MVP<br/>ruta de aprendizaje funcional"]

  Goal --> Backend["Backend<br/>actual 4/5<br/>meta 5/5"]
  Goal --> Database["Datos<br/>actual 4/5<br/>meta 5/5"]
  Goal --> Product["Reglas de producto<br/>actual 3/5<br/>meta 5/5"]
  Goal --> Frontend["Frontend<br/>actual 3/5<br/>meta 5/5"]
  Goal --> API["API de negocio<br/>actual 2/5<br/>meta 5/5"]
  Goal --> QA["QA automatizado<br/>actual 1/5<br/>meta 3/5"]

  classDef goal fill:#0f172a,stroke:#0f172a,color:#ffffff,font-size:22px,stroke-width:3px
  classDef close fill:#dcfce7,stroke:#15803d,color:#14532d,font-size:19px,stroke-width:2px
  classDef gap fill:#fef3c7,stroke:#b45309,color:#78350f,font-size:19px,stroke-width:2px
  classDef far fill:#fee2e2,stroke:#dc2626,color:#7f1d1d,font-size:19px,stroke-width:2px

  class Goal goal
  class Backend,Database close
  class Product,Frontend gap
  class API,QA far
```

Lectura rapida: para llegar al MVP, el proyecto necesita convertir la base tecnica en flujo real: endpoints, ruta visual, progreso persistente, autenticacion y quiz por unidad.
