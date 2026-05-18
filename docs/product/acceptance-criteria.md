# Criterios de aceptacion

## Proposito

Definir condiciones verificables para considerar aceptado un incremento funcional sin mezclar esos criterios con checklists tecnicos de QA o con detalle de implementacion.

## Alcance

Este documento opera a nivel de producto. Los criterios aqui descritos responden a la pregunta "como sabremos que esto cumple el objetivo funcional esperado".

## Contenido principal

### Regla de uso

Cada nueva funcionalidad relevante deberia conectar:

1. un requerimiento en [requirements.md](./requirements.md)
2. un flujo en [user-flows.md](./user-flows.md)
3. uno o mas criterios de aceptacion verificables
4. evidencia minima de validacion en [../quality/README.md](../quality/README.md)

### Criterios base del MVP actual

#### 1. Explorar cursos

- La persona usuaria puede identificar al menos un listado o punto de entrada a cursos.
- La interfaz comunica de forma comprensible que curso se puede abrir.
- Si no existen datos reales suficientes, el estado usado debe quedar explicitado como temporal o pendiente.

#### 2. Ver estructura de un curso

- La persona usuaria puede distinguir unidades y lecciones dentro de un curso.
- La navegacion deja claro el siguiente paso del recorrido.
- La estructura mostrada debe reflejar la jerarquia documentada en producto y base de datos.

#### 3. Consumir una leccion

- La persona usuaria puede abrir una leccion concreta y acceder a su contenido principal.
- El contenido visible debe corresponder a la leccion solicitada.
- Si faltan datos o API, la limitacion debe quedar explicitada como pendiente.

#### 4. Registrar progreso

- El sistema puede registrar o actualizar avance por leccion.
- La accion debe asociarse a la entidad correcta del dominio.
- El resultado esperado debe quedar reflejado en API, persistencia o interfaz segun el alcance implementado.

#### 5. Retomar aprendizaje

- La experiencia debe ofrecer una forma comprensible de volver al ultimo punto relevante o al siguiente paso recomendado.
- La forma de retomar no debe exigir que la persona reconstruya manualmente todo el recorrido.

### Criterios transversales

- La funcionalidad debe respetar el alcance vigente del MVP documentado.
- Lo implementado y lo planificado deben quedar diferenciados en la documentacion.
- Si el cambio altera contrato API, datos o flujo, la documentacion correspondiente debe actualizarse.

## Relacion con otros documentos

- [requirements.md](./requirements.md) es la fuente principal de verdad sobre requerimientos.
- [mvp.md](./mvp.md) define el alcance minimo.
- [../quality/qa-strategy.md](../quality/qa-strategy.md) documenta como validar estos criterios.
- [../templates/acceptance-criteria-template.md](../templates/acceptance-criteria-template.md) ofrece un formato reutilizable para nuevos casos.

## Pendientes

- Pendiente por definir: criterios de aceptacion especificos para autenticacion.
- Pendiente por definir: criterios de aceptacion especificos para quizzes y certificados.
- Requiere validacion: si conviene separar mas adelante criterios por epic o por modulo funcional.

## Ultima actualizacion

2026-05-18
