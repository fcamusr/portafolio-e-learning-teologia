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

#### 1. Entrar a la ruta inicial

- La persona usuaria puede identificar la ruta de aprendizaje del curso inicial.
- La interfaz no obliga a elegir entre cursos cuando el MVP solo contempla uno.
- Si no existen datos reales suficientes, el estado usado debe quedar explicitado como temporal o pendiente.

#### 2. Ver unidades como camino

- La persona usuaria puede distinguir unidades disponibles, bloqueadas y completadas.
- La navegacion deja claro el siguiente paso del recorrido.
- La estructura mostrada debe reflejar la jerarquia documentada en producto y base de datos.

#### 3. Abrir unidad y consumir clase

- La persona usuaria puede abrir una unidad desbloqueada y ver sus clases en un modal.
- La persona usuaria puede seleccionar una clase y acceder a su contenido textual.
- El contenido visible debe corresponder a la clase solicitada.
- Si faltan datos o API, la limitacion debe quedar explicitada como pendiente.

#### 4. Registrar clase vista

- El sistema marca automaticamente una clase como vista cuando la persona entra a la pantalla de contenido.
- La accion debe asociarse a la entidad correcta del dominio.
- El resultado esperado debe quedar reflejado en API, persistencia o interfaz segun el alcance implementado.

#### 5. Bloquear y desbloquear quiz

- El quiz de una unidad permanece bloqueado mientras existan clases de texto sin ver.
- El quiz queda disponible cuando todas las clases de texto de la unidad fueron vistas.
- Si la persona intenta entrar antes de cumplir el requisito, la interfaz debe explicar que falta completar.

#### 6. Aprobar unidad y desbloquear siguiente

- El sistema valida el quiz usando un maximo permitido de respuestas erroneas.
- Si la persona no aprueba, puede repetir el cuestionario con preguntas nuevas.
- Si aprueba, la unidad queda completada y la siguiente unidad se desbloquea.

#### 7. Retomar aprendizaje

- La experiencia debe ofrecer una forma comprensible de volver al ultimo punto relevante o al siguiente paso recomendado.
- La forma de retomar no debe exigir que la persona reconstruya manualmente todo el recorrido.

#### 8. Login y registro

- La persona puede iniciar sesion o registrarse para conservar su progreso.
- El progreso debe asociarse al usuario correcto cuando exista autenticacion funcional.
- Si autenticacion todavia no esta implementada, la limitacion debe quedar explicitada.

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
- Pendiente por definir: cantidad exacta de respuestas erroneas permitidas en quiz.
- Pendiente por definir: criterios especificos para dashboards de avance.
- Pendiente por definir: criterios de certificados si entran mas adelante.
- Requiere validacion: si conviene separar mas adelante criterios por epic o por modulo funcional.

## Ultima actualizacion

2026-05-18
