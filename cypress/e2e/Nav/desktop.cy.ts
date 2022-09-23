describe('desktop navbar', () => {
  it('should have the full seabuggy logo', () => {
    cy.visit('http://localhost:3000/');
    cy.viewport('macbook-16');
    cy.get('[data-cy="dark-full-logo"]').should('have.attr', 'alt', 'Dark Seabuggy logo').should('be.be.visible');
  });
});
