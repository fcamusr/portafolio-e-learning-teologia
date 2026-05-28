# Diagramas de base de datos

Este documento resume visualmente el modelo de datos actual del proyecto usando solo las entidades que existen hoy en el codigo.

## ERD

Este diagrama entidad-relacion muestra las tablas principales del dominio actual: usuario, cursos, unidades, lecciones y progreso por leccion.

```mermaid
%%{init: {"themeVariables": {"fontSize": "19px", "fontFamily": "Arial"}}}%%
erDiagram
  USER ||--o{ LESSON_PROGRESS : registra
  COURSE ||--o{ UNIT : contiene
  UNIT ||--o{ LESSON : contiene
  LESSON ||--o{ LESSON_PROGRESS : recibe

  USER {
    bigint id PK
    string username
    string email
    boolean is_active
    boolean is_staff
  }

  COURSE {
    bigint id PK
    string title
    text description
    string level
    boolean is_published
    datetime created_at
    datetime updated_at
  }

  UNIT {
    bigint id PK
    bigint course_id FK
    string title
    text description
    int order
    boolean is_published
    datetime created_at
    datetime updated_at
  }

  LESSON {
    bigint id PK
    bigint unit_id FK
    string title
    text summary
    text text_content
    int order
    int estimated_minutes
    boolean is_published
    datetime created_at
    datetime updated_at
  }

  LESSON_PROGRESS {
    bigint id PK
    bigint user_id FK
    bigint lesson_id FK
    boolean is_completed
    datetime started_at
    datetime completed_at
    datetime updated_at
    string unique_user_lesson
  }
```

Lectura rapida: la estructura principal del aprendizaje es `COURSE -> UNIT -> LESSON`. El progreso no se guarda dentro de la leccion, sino en `LESSON_PROGRESS`, que conecta a `USER` con `LESSON` y evita duplicados por usuario y leccion.

## Class Diagram

Este diagrama muestra los modelos Django y sus relaciones tal como existen hoy en `users` y `learning`.

```mermaid
%%{init: {"themeVariables": {"fontSize": "18px", "fontFamily": "Arial"}}}%%
classDiagram
direction TB

class AbstractUser {
  <<DjangoAuth>>
  username String
  email String
  password String
  is_active Boolean
  is_staff Boolean
}

class User {
  <<apps_users>>
}

class Course {
  <<apps_learning>>
  title CharField
  description TextField
  level TextChoices
  is_published BooleanField
  created_at DateTimeField
  updated_at DateTimeField
}

class Unit {
  <<apps_learning>>
  course ForeignKey
  title CharField
  description TextField
  order PositiveIntegerField
  is_published BooleanField
  created_at DateTimeField
  updated_at DateTimeField
}

class Lesson {
  <<apps_learning>>
  unit ForeignKey
  title CharField
  summary TextField
  text_content TextField
  order PositiveIntegerField
  estimated_minutes PositiveIntegerField
  is_published BooleanField
  created_at DateTimeField
  updated_at DateTimeField
}

class LessonProgress {
  <<apps_learning>>
  user ForeignKey
  lesson ForeignKey
  is_completed BooleanField
  started_at DateTimeField
  completed_at DateTimeField
  updated_at DateTimeField
  unique_lesson_progress_per_user Constraint
}

User --|> AbstractUser
Course "1" --> "0..*" Unit : units
Unit "1" --> "0..*" Lesson : lessons
User "1" --> "0..*" LessonProgress : lesson_progresses
Lesson "1" --> "0..*" LessonProgress : progresses

classDef django fill:#f1f5f9,stroke:#475569,color:#0f172a,stroke-width:2px
classDef user fill:#fae8ff,stroke:#c026d3,color:#701a75,stroke-width:2px
classDef learning fill:#fee2e2,stroke:#dc2626,color:#7f1d1d,stroke-width:2px

class AbstractUser django
class User user
class Course learning
class Unit learning
class Lesson learning
class LessonProgress learning
```

Lectura rapida: `User` hereda de `AbstractUser`, mientras `Course`, `Unit`, `Lesson` y `LessonProgress` forman el nucleo del dominio `learning`. Las relaciones del diagrama coinciden con las `ForeignKey` reales del codigo.

## Flowchart de peso relativo

Esta vista opcional reemplaza un treemap clasico por una vista de bloques simple. No mide tamano fisico de tablas, sino peso conceptual dentro del dominio actual.

```mermaid
%%{init: {"themeVariables": {"fontSize": "19px", "fontFamily": "Arial"}}}%%
flowchart TD
  Domain["Peso relativo del dominio actual"]

  Domain --> Learning["learning<br/>Mayor peso funcional"]
  Domain --> Users["users<br/>Soporte de identidad"]

  Learning --> Course["Course<br/>entrada al contenido"]
  Learning --> Unit["Unit<br/>estructura intermedia"]
  Learning --> Lesson["Lesson<br/>pieza central del estudio"]
  Learning --> Progress["LessonProgress<br/>continuidad del aprendizaje"]

  Users --> UserModel["User<br/>base de autenticacion"]

  classDef root fill:#0f172a,stroke:#0f172a,color:#ffffff,font-size:21px,stroke-width:3px
  classDef learning fill:#fee2e2,stroke:#dc2626,color:#7f1d1d,font-size:19px,stroke-width:2px
  classDef users fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:19px,stroke-width:2px

  class Domain root
  class Learning,Course,Unit,Lesson,Progress learning
  class Users,UserModel users
```

Lectura rapida: `learning` concentra casi todo el peso funcional del modelo actual porque contiene el recorrido de estudio y el registro de progreso. `users` sigue siendo importante, pero hoy cumple un rol de soporte tecnico y de identidad.

## Limite actual

Estos diagramas muestran solo entidades implementadas hoy. No incluyen `Quiz`, `Certificate`, `Note` u otras piezas futuras porque todavia no existen como modelos reales en el backend.
