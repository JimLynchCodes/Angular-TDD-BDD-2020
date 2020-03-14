Feature: Speed Run Through The Wizard

    Scenario: User should be able to login
        As logged in user
        I want to be able to run through the form
        Because I want a label generated.

        Given I just opened the wizard
        When I speed-run through the form
        Then I should see the label with the entered data
        And the label should have the correctly calculated shipping price