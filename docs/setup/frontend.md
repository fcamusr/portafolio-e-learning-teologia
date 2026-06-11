# Configuracion del frontend

El frontend vive en `frontend/` y se ejecuta como una aplicacion Next.js independiente del backend.

## 1. Instalar dependencias

Desde `frontend/`:

```powershell
npm install
```

## 2. Configurar variables de entorno

Usa `frontend/.env.example` como base y crea `frontend/.env.local`.

Variable documentada actualmente:

```text
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

## 3. Ejecutar el servidor de desarrollo

```powershell
npm run dev
```

Frontend local: [http://localhost:3000/](http://localhost:3000/)

## Estado actual del frontend

La aplicacion fue creada con:

- JavaScript
- App Router
- estructura `src/`
- ESLint

Ademas, ya existe una primera integracion real con el backend desde la pagina principal.

## Primera integracion con el backend

El frontend usa la variable de entorno `NEXT_PUBLIC_API_BASE_URL` para construir la URL base del backend Django.

Se creo el archivo `frontend/src/lib/api.js` con una funcion `getHealth()` que consulta el endpoint `GET /api/health/`.

Luego `frontend/src/lib/api.js` sumo tambien `getCourses()`, que consulta `GET /api/courses/`.

En los cambios locales actuales, ese mismo archivo tambien suma `getCourseDetail(courseId)`, que consulta `GET /api/courses/{id}/`.

`frontend/src/app/page.js` usa `getHealth()` y `getCourses()` para comprobar la primera conexion real entre frontend y backend y la primera integracion con un recurso real del dominio.

`frontend/src/app/courses/[courseId]/page.js` usa `getCourseDetail()` para renderizar una pagina dinamica de detalle de curso.

Como esta integracion se hace desde App Router, la pagina principal consume el backend desde un Server Component, renderiza en pantalla tanto el estado tecnico del backend como la lista de cursos publicados y enlaza cada curso con `Link` de Next.js hacia su detalle.

## Verificacion recomendada

Con backend y frontend ejecutandose:

- abre [http://localhost:3000/](http://localhost:3000/)
- verifica que aparezca el titulo del proyecto
- confirma que se muestren `status`, `service` y `message` recibidos desde `/api/health/`
- confirma que aparezca la seccion de cursos publicados consumida desde `/api/courses/`
- si existen cursos publicados en el backend, verifica que se listen en pantalla
- entra a un curso publicado y confirma que el detalle cargue unidades y lecciones o sus estados vacios

## Referencias relacionadas

- [../../frontend/README.md](../../frontend/README.md)
- [environment-variables.md](./environment-variables.md)
- [run-project.md](./run-project.md)
