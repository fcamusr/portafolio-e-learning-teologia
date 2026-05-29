# Diagramas de producto

Este documento resume visualmente la vision funcional del producto y el recorrido principal que deberia soportar la plataforma e-learning.

Los diagramas distinguen entre:

- el MVP objetivo: ruta del curso inicial, unidades, lecciones, progreso por clase y quiz por unidad;
- capacidades futuras: certificados, recomendaciones, dashboards mas completos y funcionalidades avanzadas;
- el flujo de negocio que ayuda a orientar la construccion progresiva.

## Flowchart de recorrido del estudiante

Este recorrido muestra la experiencia esperada de un estudiante desde que entra a la plataforma hasta que avanza en su aprendizaje.

```mermaid
%%{init: {"themeVariables": {"fontSize": "19px", "fontFamily": "Arial"}}}%%
flowchart TD
  Start["Estudiante entra a la plataforma"]

  subgraph Discover["1. Entrar a la ruta"]
    Login["Inicia sesion o se registra"]
    Path["Ve la ruta del curso inicial"]
    UnitState["Identifica unidades disponibles y bloqueadas"]
  end

  subgraph Study["2. Estudiar una unidad"]
    UnitModal["Selecciona una unidad desbloqueada"]
    LessonList["Ve las clases en un modal"]
    Content["Abre una clase de texto"]
  end

  subgraph Progress["3. Avanzar"]
    AutoView["Sistema marca la clase como vista"]
    FreeNav["Navega libremente entre clases"]
    QuizUnlock["Quiz se desbloquea al ver todas las clases"]
  end

  subgraph QuizFlow["4. Aprobar y desbloquear"]
    Quiz["Realiza quiz de la unidad"]
    Retry["Si no aprueba, repite con preguntas nuevas"]
    Unlock["Si aprueba, completa unidad y desbloquea la siguiente"]
  end

  Start --> Login --> Path --> UnitState --> UnitModal --> LessonList --> Content --> AutoView --> FreeNav --> QuizUnlock --> Quiz --> Retry --> Unlock

  classDef start fill:#0f172a,stroke:#0f172a,color:#ffffff,font-size:21px,stroke-width:3px
  classDef current fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:19px,stroke-width:2px
  classDef progress fill:#dcfce7,stroke:#15803d,color:#14532d,font-size:19px,stroke-width:2px
  classDef future fill:#fef3c7,stroke:#b45309,color:#78350f,font-size:19px,stroke-width:2px,stroke-dasharray: 6 4

  class Start start
  class Login,Path,UnitState,UnitModal,LessonList,Content current
  class AutoView,FreeNav,QuizUnlock progress
  class Quiz,Retry,Unlock future
```

Lectura rapida: el valor principal del producto es que el estudiante no consuma contenido aislado, sino que avance en una ruta clara y pueda retomar sin perder contexto.

## Mindmap

Este mapa resume la vision del producto desde una mirada funcional.

```mermaid
mindmap
  root((Plataforma e-learning de teologia))
    Proposito
      Estudio progresivo
      Contenido ordenado
      Continuidad del aprendizaje
      Portafolio profesional
    Usuario principal
      Estudiante individual
      Persona que busca claridad
      Necesita retomar facilmente
    MVP
      Curso inicial unico
      Ruta de aprendizaje
      Unidades desbloqueables
      Clases de texto
      Progreso por clase vista
      Quiz por unidad
      Retomar estudio
    Experiencia
      Navegacion simple
      Jerarquia Course Unit Lesson
      Modal de clases por unidad
      Bloqueo de quiz hasta ver clases
      Desbloqueo de unidad por aprobacion
      Estado de avance visible
      Flujo sin friccion
    Base tecnica relacionada
      Backend Django
      Frontend Next.js
      PostgreSQL
      Modelos learning
    Futuro
      Certificados
      Recomendaciones
      Dashboards mas completos
      Mejoras administrativas
```

Lectura rapida: el producto no busca ser una biblioteca suelta, sino una experiencia guiada de aprendizaje con estructura, avance y continuidad.

## Flowchart de criterios del MVP

Este diagrama muestra la interseccion de los requisitos principales que hacen que una funcionalidad pertenezca al MVP.

```mermaid
%%{init: {"themeVariables": {"fontSize": "19px", "fontFamily": "Arial"}}}%%
flowchart TD
  Value["Valor para el estudiante<br/>ayuda a estudiar mejor"]
  Base["Base tecnica existente<br/>Course, Unit, Lesson,<br/>LessonProgress"]
  Flow["Flujo principal<br/>explorar, estudiar,<br/>avanzar y retomar"]

  MVP["Centro del MVP<br/>funcionalidad prioritaria"]

  Value --> MVP
  Base --> MVP
  Flow --> MVP

  MVP --> Courses["Curso inicial unico"]
  MVP --> Units["Unidades como camino"]
  MVP --> Lessons["Clases de texto"]
  MVP --> Progress["Progreso por clase vista"]
  MVP --> Quiz["Quiz bloqueado<br/>hasta ver todas las clases"]
  MVP --> Unlock["Desbloqueo de unidad<br/>solo si aprueba quiz"]
  MVP --> Resume["Retomar aprendizaje"]

  Future["Fuera del MVP inicial<br/>certificados, recomendaciones,<br/>dashboards avanzados"]

  Value -.-> Future
  Flow -.-> Future

  classDef criteria fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:19px,stroke-width:2px
  classDef center fill:#0f172a,stroke:#0f172a,color:#ffffff,font-size:21px,stroke-width:3px
  classDef mvp fill:#dcfce7,stroke:#15803d,color:#14532d,font-size:19px,stroke-width:2px
  classDef future fill:#fef3c7,stroke:#b45309,color:#78350f,font-size:19px,stroke-width:2px,stroke-dasharray: 6 4

  class Value,Base,Flow criteria
  class MVP center
  class Courses,Units,Lessons,Progress,Quiz,Unlock,Resume mvp
  class Future future
```

Lectura rapida: una funcionalidad entra bien en el MVP cuando ayuda directamente al estudiante, usa o fortalece la base ya modelada y mejora el flujo principal de aprendizaje. Por eso cursos, unidades, lecciones y progreso son prioridad sobre funciones mas avanzadas.

## Flowchart de requisitos funcionales

Este diagrama representa el flujo de negocio objetivo. Todas las piezas mostradas pertenecen al MVP funcional esperado, aunque quiz, intentos y desbloqueo de unidad todavia requieren modelo, API y reglas de negocio.

```mermaid
%%{init: {"themeVariables": {"fontSize": "19px", "fontFamily": "Arial"}}}%%
flowchart TD
  Main["MVP-FLOW<br/>El estudiante avanza por una ruta estructurada"]

  subgraph MVPReq["Requisitos principales del MVP"]
    R1["RF-01<br/>Ver ruta del curso inicial"]
    R2["RF-02<br/>Abrir unidad desbloqueada"]
    R3["RF-03<br/>Abrir clase desde modal"]
    R4["RF-04<br/>Marcar clase como vista"]
  end

  subgraph QuizReq["Requisitos de bloqueo y aprobacion"]
    R5["RF-05<br/>Desbloquear quiz al ver todas las clases"]
    R6["RF-06<br/>Aprobar quiz con maximo de errores"]
    R7["RF-07<br/>Desbloquear siguiente unidad"]
  end

  subgraph Support["Piezas que satisfacen requisitos"]
    Frontend["Frontend<br/>pantallas y navegacion"]
    Backend["Backend<br/>API y reglas"]
    Database["Base de datos<br/>modelos y progreso"]
  end

  Main --> R1 --> R2 --> R3 --> R4 --> R5 --> R6 --> R7

  Frontend -.-> R1
  Frontend -.-> R2
  Frontend -.-> R3
  Frontend -.-> R5

  Backend -.-> R4
  Backend -.-> R6
  Backend -.-> R7
  Database -.-> R4
  Database -.-> R6
  Database -.-> R7

  classDef main fill:#0f172a,stroke:#0f172a,color:#ffffff,font-size:21px,stroke-width:3px
  classDef req fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:19px,stroke-width:2px
  classDef future fill:#fef3c7,stroke:#b45309,color:#78350f,font-size:19px,stroke-width:2px,stroke-dasharray: 6 4
  classDef support fill:#dcfce7,stroke:#15803d,color:#14532d,font-size:19px,stroke-width:2px

  class Main main
  class R1,R2,R3,R4 req
  class R5,R6,R7 future
  class Frontend,Backend,Database support
```

Lectura rapida: el flujo de negocio empieza con una ruta unica de aprendizaje y termina con desbloqueo progresivo de unidades. Hoy el modelo `LessonProgress` sostiene parte del avance por clase vista; quiz, intentos y desbloqueo de unidad siguen como piezas necesarias del MVP que deben definirse antes de implementarlas.

## Limite actual

Estos diagramas explican la direccion funcional del producto. No significan que todos los flujos esten implementados. El estado real actual es:

- existen modelos para cursos, unidades, lecciones y progreso por leccion;
- ya existe `GET /api/courses/` como primera lectura de dominio;
- la pagina principal ya muestra cursos publicados, pero todavia no existe la interfaz funcional completa del flujo;
- quizzes, intentos y progreso de unidad son piezas pendientes del MVP objetivo y requieren definicion de modelo, API y reglas de negocio.
