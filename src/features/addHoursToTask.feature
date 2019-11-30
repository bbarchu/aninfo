Feature: Actualizar las horas consumidas en la realización de una tarea
  Como desarrollador,
  deseo poder actualizar las horas que llevo trabajando en una tarea,
  para que puedan llevar una gestión de las horas que trabajé.

  Scenario: Actualizando las horas consumidas en la realización de una tarea
    Given que soy un desarrollador que quiere actualizar las horas consumidas en una tarea
    When cuando accedo a la página de gestión de horas, modifico las horas consumidas de una tarea a 12 y accedo a otra página para regresar a la de gestión de horas
    Then debería ver que las horas consumidas por dicha tarea son 12.

