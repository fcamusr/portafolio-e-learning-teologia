# Diagramas del backend

Este documento muestra, de forma visual, como esta organizado Django dentro del backend y como se conecta con PostgreSQL.

El objetivo no es documentar todo el producto, sino ayudar a entender rapidamente:

- donde vive la configuracion principal de Django;
- como se organizan las apps locales;
- que partes del backend llegan a la base de datos;
- que modelos reales existen hoy en PostgreSQL.

## Flowchart de organizacion de Django

Este diagrama muestra la estructura interna del backend Django. La lectura recomendada es de arriba hacia abajo: primero la entrada del proyecto, luego la configuracion global, despues las apps locales y finalmente la persistencia.

```mermaid
%%{init: {"themeVariables": {"fontSize": "20px", "fontFamily": "Arial"}}}%%
flowchart TD
  Backend["backend/<br/>Proyecto Django"]

  Backend --> Manage["manage.py<br/>Comandos administrativos"]
  Backend --> Config["config/<br/>Configuracion principal"]
  Backend --> Apps["apps/<br/>Apps locales del monolito modular"]

  Config --> Settings["settings.py<br/>INSTALLED_APPS<br/>MIDDLEWARE<br/>DATABASES<br/>AUTH_USER_MODEL"]
  Config --> Urls["urls.py<br/>admin/<br/>api/"]
  Config --> Server["asgi.py / wsgi.py<br/>Entrada del servidor"]

  Apps --> Core["core<br/>Endpoint tecnico<br/>GET /api/health/"]
  Apps --> Users["users<br/>Usuario personalizado<br/>User extends AbstractUser"]
  Apps --> Learning["learning<br/>Dominio del aprendizaje<br/>Course, Unit, Lesson, LessonProgress"]

  Users --> UsersAdmin["admin.py<br/>UserAdmin"]
  Users --> UsersModels["models.py<br/>User"]

  Learning --> LearningAdmin["admin.py<br/>CourseAdmin, UnitAdmin,<br/>LessonAdmin, LessonProgressAdmin"]
  Learning --> LearningModels["models.py<br/>Modelos del MVP"]
  Learning --> LearningMigrations["migrations/<br/>0001 a 0004"]

  Settings --> Env["backend/.env<br/>Variables reales no versionadas"]
  Settings --> EnvExample["backend/.env.example<br/>Plantilla versionable"]

  LearningModels --> ORM["Django ORM"]
  UsersModels --> ORM
  ORM --> DB[("PostgreSQL<br/>Base de datos principal")]

  classDef root fill:#0f172a,stroke:#0f172a,color:#ffffff,font-size:22px,stroke-width:3px
  classDef config fill:#fef3c7,stroke:#b45309,color:#78350f,font-size:20px,stroke-width:2px
  classDef app fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:20px,stroke-width:2px
  classDef domain fill:#fee2e2,stroke:#dc2626,color:#7f1d1d,font-size:20px,stroke-width:2px
  classDef data fill:#dcfce7,stroke:#15803d,color:#14532d,font-size:20px,stroke-width:3px
  classDef env fill:#f8fafc,stroke:#64748b,color:#0f172a,font-size:20px,stroke-width:2px

  class Backend root
  class Manage,Config,Settings,Urls,Server config
  class Apps,Core,Users,UsersAdmin,UsersModels app
  class Learning,LearningAdmin,LearningModels,LearningMigrations domain
  class ORM,DB data
  class Env,EnvExample env
```

Lectura rapida: `config/` define como arranca Django y que apps estan registradas. `apps/` concentra las apps locales. `users` y `learning` llegan a PostgreSQL mediante el ORM porque contienen modelos persistentes. `core` existe como app tecnica y hoy expone el endpoint de salud, pero no define modelos propios.

## Flowchart de conexion Django - PostgreSQL

Este diagrama muestra como Django obtiene la configuracion de base de datos y como los modelos terminan persistiendo informacion en PostgreSQL.

```mermaid
%%{init: {"themeVariables": {"fontSize": "20px", "fontFamily": "Arial"}}}%%
flowchart TD
  Env["backend/.env<br/>DB_NAME, DB_USER,<br/>DB_PASSWORD, DB_HOST, DB_PORT"]
  Dotenv["python-dotenv<br/>load_dotenv(BASE_DIR / .env)"]
  Settings["config/settings.py<br/>DATABASES default"]
  Engine["django.db.backends.postgresql<br/>Motor PostgreSQL"]
  ORM["Django ORM<br/>Traduce modelos a consultas SQL"]

  subgraph modelos["Modelos persistentes"]
    direction LR
    User["users.User"]
    Course["learning.Course"]
    Unit["learning.Unit"]
    Lesson["learning.Lesson"]
    Progress["learning.LessonProgress"]
  end

  Migrations["Migraciones Django<br/>users 0001<br/>learning 0001 a 0004"]
  DB[("PostgreSQL<br/>Esquema real de datos")]
  Admin["Django Admin<br/>Gestion interna usando ORM"]

  Env --> Dotenv
  Dotenv --> Settings
  Settings --> Engine
  Engine --> ORM
  User --> ORM
  Course --> ORM
  Unit --> ORM
  Lesson --> ORM
  Progress --> ORM
  Migrations --> DB
  ORM --> DB
  Admin --> ORM

  classDef env fill:#f8fafc,stroke:#64748b,color:#0f172a,font-size:20px,stroke-width:2px
  classDef config fill:#fef3c7,stroke:#b45309,color:#78350f,font-size:20px,stroke-width:2px
  classDef model fill:#e0f2fe,stroke:#0369a1,color:#0c4a6e,font-size:20px,stroke-width:2px
  classDef data fill:#dcfce7,stroke:#15803d,color:#14532d,font-size:20px,stroke-width:3px
  classDef admin fill:#ffedd5,stroke:#ea580c,color:#7c2d12,font-size:20px,stroke-width:2px

  class Env,Dotenv env
  class Settings,Engine,ORM,Migrations config
  class User,Course,Unit,Lesson,Progress model
  class DB data
  class Admin admin
```

Lectura rapida: Django no tiene credenciales hardcodeadas. `settings.py` carga variables desde `backend/.env`, configura `DATABASES` y usa el backend PostgreSQL de Django. Los modelos de `users` y `learning` se comunican con PostgreSQL a traves del ORM, y las migraciones versionadas definen el esquema.

## Class Diagram de modelos Django

Este diagrama muestra los modelos Django que hoy se transforman en tablas mediante migraciones y ORM. No incluye entidades futuras ni endpoints.

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

Lectura rapida: la estructura principal del aprendizaje es `Course -> Unit -> Lesson`. El avance del usuario no se guarda directamente en `Lesson`, sino en `LessonProgress`, que conecta un usuario con una leccion y evita duplicados por usuario y leccion mediante una restriccion unica.

## Limite de estos diagramas

Estos mapas muestran el backend real actual. No representan endpoints de negocio, serializers, permisos ni flujos completos de producto porque esas piezas todavia no estan implementadas.
