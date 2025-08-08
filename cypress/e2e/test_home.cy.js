// Assignment: Scenario: You’re testing a news website. 
//  - Write a Cypress test to: 
//     -1. Open the-internet.herokuapp.com, 
//     -2. Verify the page title. 
//  - Save as cypress/integration/test_home.js. 
//  - Run with npx cypress run. Push to GitHub.

URL = 'https://the-internet.herokuapp.com';

describe(' First test as a news website tester.', () => {
    it('Open website and verify title', () => {
        cy.visit(URL);
        cy.title().should('include', 'The Internet');
        // You can also use cy.title().should('eq', 'The Internet') if you
        // want to check for an exact match.
    } )

})