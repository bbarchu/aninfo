Feature: Managing tasks
As a developer
I want create a task, asign hours, asign name, and manage its state
So I can have more control of the task

Scenario: Developer goes to managing tasks page and create a new project task 
Given I am a developer logged in the system and I have 0 assigned task
When I go to the project page and added 1 project task
Then I should see the project page meaning that it went ok with plus 1 ticket

