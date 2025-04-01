/// <reference types="cypress" />

describe('my first test', () => {
    it('visit the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io');
        // cy.get('h1').should('contain', 'Kitchen Sink');
        cy.get('h1').contains('Kitchen Sink');
        cy.contains('get').click()
        cy.url().should('include', '/commands/querying')
        
    });

    
}); 