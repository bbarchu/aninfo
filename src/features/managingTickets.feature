Feature: Generar un ticket de soporte
  Como empleado de soporte
  quiero poder generar tickets,
  para notificar incidentes o consultas de clientes.
 
  Scenario: Generando un ticket de soporte
    Given que soy un empleado de soporte
    When introduzco los datos de un nuevo ticket y procedo a crearlo
    Then debería ver que "Se creo el ticket exitosamente".
