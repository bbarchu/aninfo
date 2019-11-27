Feature: Support
Como un empleado o cliente
Quiero crear un ticket y poder asignarmelo
Para poder tener soporte en el problema

Scenario: Un empleado va hasta le mesa de ayuda y agrega un nuevo ticket
Given Soy un empleado logueado en el sistema y la mesa de ayuda tiene 0 tickets
When Voy hasta la mesa de ayuda y agrego 1 ticket
Then Deberia ver la mesa de ayuda con 1 ticket creado exitosamente

Scenario: Un empleado va a la mesa de ayuda y crea e inicia un ticket
Given Que soy un empleado logueado en el sistema
When Voy a la mesa de ayuda, creo 1 ticket y lo inicio
Then Deberia estar iniciado el ticket

Scenario: Un empleado va a la mesa de ayuda y finaliza un ticket ya iniciado
Given que soy un empleado logueado en el sistema y hay un ticket iniciado
When voy a la mesa de ayuda, finalizo un ticket ya iniciado
Then el ticket deberia estar finalizado

