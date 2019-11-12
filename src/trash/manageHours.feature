Feature: Add hours to project
As a project manager
I want that all resources involved in the project records hours
So i can have a tracking of the costs


Scenario: User goes to the tracking hours page and records the hours worked
Given I am a developer logged in the Porygon system
When I go to the tracking hours page and save 8 hs on one day
Then I should see the projects page meaning that it went ok

Scenario: User goes to the tracking hours page and records more than 8 hours in a day
Given I am a developer logged in the Porygon system
When I go to the tracking hours page and save 9 hs on one day
Then I should see an error sign telling that i can't load more than 8 hours

Scenario: User goes to the tracking hours page and records hours for a day in the future
Given I am a developer logged in the Porygon system
When I go to the tracking hours page and save 8 hs for a day in the future
Then I should see an error sign telling that i can't load hours for days in the future

Scenario: User goes to the tracking hours page and records the hours worked without assigning a task
Given I am a developer logged in the Porygon system
When I go to the tracking hours page and save 8 hs for a day and don't assign a task
Then I should see an error sign telling that i need to select a task

Scenario: User goes to the tracking hours page and records the hours worked assigning a task that is not his
Given I am a developer logged in the Porygon system
When I go to the tracking hours page and save 8 hs for a day and assign it to a task that is not mine
Then I should see an error sign telling that is not a valid task