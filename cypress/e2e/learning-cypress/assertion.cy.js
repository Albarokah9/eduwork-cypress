/// <reference types="cypress" />
describe('Browser actions', () => {
    beforeEach('harus memuat url yang benar', () => {
        cy.visit('https://example.com/',{timeout: 10000});    
    });

    it('Should load correct url', () => {
        cy.url().should('include', 'example.com'); 
    });

    it('Should check for correct element one the page', () => {
        cy.get('h1').should('be.visible');
        
    });

});