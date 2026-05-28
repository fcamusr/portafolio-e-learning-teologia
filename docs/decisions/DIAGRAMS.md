# Diagramas de decisiones

Este documento resume visualmente como las decisiones tecnicas actuales sostienen el producto y que criterios deberian guiar las proximas decisiones.

## Flowchart estrategico de evolucion

Esta vista separa que conviene construir, que conviene usar como herramienta madura y que conviene mantener simple.

```mermaid
%%{init: {"themeVariables": {"fontSize": "19px", "fontFamily": "Arial"}}}%%
flowchart LR
  Need["Necesidad central<br/>ruta de aprendizaje clara<br/>con progreso real"]

  Build["Construir<br/>experiencia de ruta,<br/>desbloqueo, quiz,<br/>progreso y dashboards simples"]
  Use["Usar herramientas maduras<br/>Django, Next.js,<br/>PostgreSQL, DRF"]
  KeepSimple["Mantener simple<br/>un curso inicial,<br/>admin estandar,<br/>documentacion viva"]
  Defer["Postergar<br/>certificados,<br/>recomendaciones,<br/>reportes avanzados"]

  Need --> Build
  Build --> Use
  Build --> KeepSimple
  KeepSimple --> Defer

  classDef need fill:#0f172a,stroke:#0f172a,color:#ffffff,font-size:21px,stroke-width:3px
  classDef build fill:#dcfce7,stroke:#15803d,color:#14532d,font-size:19px,stroke-width:2px
  classDef use fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:19px,stroke-width:2px
  classDef simple fill:#fef3c7,stroke:#b45309,color:#78350f,font-size:19px,stroke-width:2px
  classDef defer fill:#fee2e2,stroke:#dc2626,color:#7f1d1d,font-size:19px,stroke-width:2px

  class Need need
  class Build build
  class Use use
  class KeepSimple simple
  class Defer defer
```

Lectura rapida: las decisiones fundacionales ya eligieron herramientas maduras. Las proximas decisiones deberian concentrarse en el valor propio del producto: ruta, avance, quiz y desbloqueo.

## Flowchart de prioridades tecnicas

```mermaid
%%{init: {"themeVariables": {"fontSize": "19px", "fontFamily": "Arial"}}}%%
flowchart TD
  Priority["Prioridades por valor y dependencia"]

  Priority --> Now["Decidir pronto"]
  Priority --> Next["Construir despues"]
  Priority --> Later["Mantener para mas adelante"]

  Now --> Auth["Estrategia de autenticacion<br/>sesion, token o JWT"]
  Now --> QuizRules["Reglas de quiz<br/>errores permitidos y repeticion"]
  Now --> ProgressRules["Reglas de progreso<br/>clase vista y unidad completada"]

  Next --> API["Contratos API<br/>ruta, unidad, clase,<br/>progreso y quiz"]
  Next --> Models["Modelos futuros<br/>quiz, preguntas,<br/>intentos y unidad completada"]
  Next --> UI["Ruta visual<br/>modal de clases<br/>bloqueos y estados"]

  Later --> Certificates["Certificados"]
  Later --> Recommendations["Recomendaciones"]
  Later --> Reports["Reportes avanzados"]

  classDef root fill:#0f172a,stroke:#0f172a,color:#ffffff,font-size:22px,stroke-width:3px
  classDef now fill:#dcfce7,stroke:#15803d,color:#14532d,font-size:19px,stroke-width:2px
  classDef next fill:#fef3c7,stroke:#b45309,color:#78350f,font-size:19px,stroke-width:2px
  classDef later fill:#fee2e2,stroke:#dc2626,color:#7f1d1d,font-size:19px,stroke-width:2px

  class Priority root
  class Now,Auth,QuizRules,ProgressRules now
  class Next,API,Models,UI next
  class Later,Certificates,Recommendations,Reports later
```

Lectura rapida: autenticacion, quiz y progreso son decisiones que conviene cerrar antes de construir demasiado frontend, porque condicionan datos, API y experiencia.

## Flowchart de requisitos conectados a decisiones

```mermaid
%%{init: {"themeVariables": {"fontSize": "19px", "fontFamily": "Arial"}}}%%
flowchart TD
  Req["Requisitos del MVP"]

  Req --> R1["Ruta de aprendizaje<br/>de un curso inicial"]
  Req --> R2["Clase marcada como vista<br/>automaticamente"]
  Req --> R3["Quiz bloqueado<br/>hasta ver todas las clases"]
  Req --> R4["Unidad completada<br/>solo si aprueba quiz"]
  Req --> R5["Progreso asociado<br/>a usuario real"]

  R1 --> D1["Decision: mantener<br/>Course Unit Lesson"]
  R2 --> D2["Decision: usar<br/>LessonProgress como base"]
  R3 --> D3["Decision pendiente:<br/>modelo y regla de quiz"]
  R4 --> D4["Decision pendiente:<br/>unidad completada/desbloqueo"]
  R5 --> D5["Decision pendiente:<br/>estrategia de autenticacion"]

  D1 --> ADR["ADR existentes<br/>Django, Next.js,<br/>PostgreSQL, separacion,<br/>apps folder"]
  D2 --> ADR
  D3 --> FutureADR["ADR futura si cambia<br/>arquitectura o modelo"]
  D4 --> FutureADR
  D5 --> FutureADR

  classDef req fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:19px,stroke-width:2px
  classDef decision fill:#fef3c7,stroke:#b45309,color:#78350f,font-size:19px,stroke-width:2px
  classDef pending fill:#fee2e2,stroke:#dc2626,color:#7f1d1d,font-size:19px,stroke-width:2px
  classDef adr fill:#dcfce7,stroke:#15803d,color:#14532d,font-size:19px,stroke-width:2px

  class Req,R1,R2,R3,R4,R5 req
  class D1,D2 decision
  class D3,D4,D5 pending
  class ADR,FutureADR adr
```

Lectura rapida: algunas decisiones ya estan cubiertas por ADR existentes. Las proximas ADR deberian aparecer solo si autenticacion, quiz o desbloqueo implican una decision duradera de arquitectura o modelo.

## Flowchart de relacion producto-aprendizaje-evidencia

```mermaid
%%{init: {"themeVariables": {"fontSize": "19px", "fontFamily": "Arial"}}}%%
flowchart TD
  Center["Centro del proyecto<br/>producto real que demuestra aprendizaje"]

  Product["Producto<br/>ruta de aprendizaje usable"]
  Learning["Aprendizaje<br/>base tecnica y decisiones claras"]
  Evidence["Evidencia profesional<br/>codigo, documentacion,<br/>trazabilidad y calidad"]

  Product --> Center
  Learning --> Center
  Evidence --> Center

  Center --> MVP["MVP coherente<br/>curso inicial, unidades,<br/>clases, quiz y progreso"]

  classDef center fill:#0f172a,stroke:#0f172a,color:#ffffff,font-size:21px,stroke-width:3px
  classDef area fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:19px,stroke-width:2px
  classDef mvp fill:#dcfce7,stroke:#15803d,color:#14532d,font-size:19px,stroke-width:2px

  class Center center
  class Product,Learning,Evidence area
  class MVP mvp
```

Lectura rapida: el proyecto funciona mejor cuando producto, aprendizaje y evidencia profesional se refuerzan entre si. Las decisiones tecnicas deben sostener las tres cosas.
