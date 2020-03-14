import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("I just opened the wizard", () => {

    // TODO - Call custom cypress command for logging in.

    cy.visit('http://localhost:4200/')
})

When("I speed-run through the form", () => {

    // TODO - Input some fixture data into the fieds in the form and keep hitting the NEXT button.

    cy.get('span').contains('Learn Angular').click()

})

Then('I should see the label with the entered data', () => {

    // TODO - make assertions about the entered data existing on the page.

})

Then('the label should have the correctly calculated shipping price', () => {

    // TODO - make assertions about proper price existing on the page.

})