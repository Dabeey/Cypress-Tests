describe('My First Real Cypress Test', () => {
  it('Should visit example.com and find the text', () => {
    cy.visit('https://example.com');
    cy.contains('Example Domain');
  });
});
