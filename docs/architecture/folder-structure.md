docs/architecture/folder-structure.md

Explica la estructura de carpetas.

Esto te sirve mucho porque tú quieres ordenar bien las apps dentro de apps/.

Ejemplo:

# Estructura de carpetas

## Backend

```txt
backend/
├── apps/
│   ├── users/
│   ├── courses/
│   ├── lessons/
│   ├── quizzes/
│   ├── progress/
│   └── certificates/
├── config/
├── manage.py
└── requirements.txt

Las aplicaciones locales se ubican dentro de apps/ para mantener una separación clara entre módulos del dominio.