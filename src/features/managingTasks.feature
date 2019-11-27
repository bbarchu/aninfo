Feature: Organizar tareas
Como developer
Quiero crear una tarea, asignar horas, asignar nombre, y manejar su estado
Para tener mas control de la tarea

Scenario: Un desarrollador va a la pag de adm de tareas y crea una nueva tarea de proyecto
Given que soy un desarrollador logueado en el sistema y el proyecto tiene 0 tareas
When voy a la pagina de proyecto y agrego 1 tarea
Then deberia ver la pagina del proyecto con 1 tarea

Scenario: Un desarrollador se asigna una tarea asimismo
Given que soy un desarrolador logueado en el sistema y tengo 0 tareas asignadas
When voy a la pagina de proyecto y me asigno 1 tarea ya creada
Then deberia tener asignada 1 tarea

Scenario: Un desarrollador inicia una tarea y la tarea es iniciada
Given que soy un desarrolador logueado en el sistema y tengo 1 tarea asignada no iniciada
When voy a la pagina de proyecto e inicio 1 tarea asignada a mi
Then la tarea deberia estar iniciada

Scenario: Un desarrollador pausa una tarea y la tarea es pausada
Given que soy un desarrolador logueado en el sistema y tengo 1 tarea asignada iniciada
When voy a la pagina de proyecto y pauso 1 tarea asignada a mi
Then la tarea deberia estar pausada

Scenario: Un desarrollador resume una tarea y la tarea es resumida
Given que soy un desarrolador logueado en el sistema y tengo 1 tarea asignada pausada
When voy a la pagina de proyecto y resumo 1 tarea asignada a mi
Then la tarea deberia estar resumida

Scenario: Un desarrollador finaliza una tarea y la tarea es finalizada
Given que soy un desarrolador logueado en el sistema y tengo 1 tarea asignada en desarrollo
When voy a la pagina de proyecto y finalizo 1 tarea asignada a mi
Then la tarea deberia estar finalizada

Scenario: Un desarrollador que tiene asignada una tarea estima las horas de trabajo
Given que soy un desarrollador logueado en el sistema y tengo una tarea asignada
When voy a la pagina de proyecto y la estimo con 5 horas
Then la tarea deberia tener asignada una estimacion de 5 horas

