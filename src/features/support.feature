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

Scenario: Un empleado va a la mesa de ayuda y establece el tipo de un ticket a consulta
Given que soy un empleado logueado en el sistema y hay un ticket
When voy a la mesa de ayuda, establezco un ticket como tipo consulta
Then el ticket deberia ser tipo consulta

Scenario: Un empleado va a la mesa de ayuda y establece la severidad de un ticket
Given que soy un empleado logueado en el sistema y hay un ticket sin severidad establecida
When voy a la mesa de ayuda, establezco la severidad de un ticket
Then el ticket deberia tener el nivel de severidad establecido

Scenario: Un empleado va a la mesa de ayuda y establece el producto asociado a un ticket
Given que soy un empleado logueado en el sistema y hay un ticket sin producto asociado
When voy a la mesa de ayuda, establezco el producto asociado al ticket
Then el ticket deberia tener como producto asociado al establecido

Scenario: Un empleado va a la mesa de ayuda y establece la version del producto asociado a un ticket
Given que soy un empleado logueado en el sistema y hay un ticket sin version asociada
When voy a la mesa de ayuda, establezco la version del producto asociado al ticket
Then el ticket deberia tener como version asociado al establecido