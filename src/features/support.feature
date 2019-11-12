Feature: Support
As a employee or client
I want create ticket
So I can have support with that

Scenario: Employee goes to the help desk and add a new ticket
Given 1 I am a employee logged in the system and i have 0 tickets
When 1 I go to the help desk page and add 1 ticket
Then I should see the help desk page meaning that it went ok with plus 1 ticket

Scenario: Employee goes to the help desk and asign to him 1 ticket but he has 3 tickets asigned
Given 2 I am a employee logged in the system and i have 3 tickets
When 2 I go to the help desk page and add 1 ticket
Then I should see the msg error and the tickets created are the same