Feature: Generar un ticket de soporte
  Como empleado de soporte
  quiero poder generar tickets,
  para notificar incidentes o consultas de clientes.
 
  Scenario: Generando un ticket de soporte de forma incorrecta
    Given que soy un empleado de soporte que quiere generar un ticket pero no sabe como hacerlo
    When introduzco los datos de un nuevo ticket, olvido llenar un campo y procedo a crearlo
    Then debería ser informado del siguiente error "Faltan campos por rellenar!".
