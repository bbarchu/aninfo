Feature: Support
As a employee or client
I want create ticket
So I can have support with that

Scenario: Employee goes to the help desk and add a new ticket
Given I am a employee logged in the system and i have 0 tickets
When I go to the help desk page and add 1 ticket
Then I should see the help desk page meaning that it went ok with 1 ticket