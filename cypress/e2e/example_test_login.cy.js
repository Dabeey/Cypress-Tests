describe('SauceDemo Login Test', () => {
    
  const baseUrl = 'https://www.saucedemo.com/';

    it('Should login successfully with valid credentials', () => {
        cy.visit(baseUrl);

        // Fill login forM using data-test
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');

        cy.get('[data-test="login-button"]').click(); //Click login button

        // Assert successful login by checking the URL
        cy.url().should('include', '/inventory.html');
        cy.get('.title').should('have.text', 'Products');
    });


    it('Should show error for invalid credentials', () => {
        cy.visit(baseUrl);

        cy.get('[data-test="username"]').type('wrong_user');
        cy.get('[data-test="password"]').type('wrong_pass');

        cy.get('[data-test="login-button"]').click();

        // Assert: Error message should appear
        cy.get('[data-test="error"]').should('be.visible')
        .and('contain.text', 'Username and password do not match');
    });
});