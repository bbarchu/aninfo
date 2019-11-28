Feature: Ver información de un cliente que llama a soporte
  Como empleado de soporte,
  deseo poder ver la información del cliente que está llamando,
  para brindar una atención más eficiente.

  Scenario: Viendo información de un cliente que llama a soporte
    Given que soy un empleado de soporte que quiere atender una llamada
    When un cliente llama a soporte y lo atiendo
    Then debería ver la información del cliente que realiza la "Llamada entrante".
