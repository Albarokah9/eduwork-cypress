describe('My first test', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io');
        cy.pause();
        cy.contains('type').click()

        // Harus berada di URL baru yang menyertakan './commands/actions'
        // Should be on a new URL wich includes './commands/actions'
        cy.url().should('include', '/commands/actions'); // Assertion

        // Dapatkan input, ketik didalamnya dan verifikasi bahwa nilainya telah diperbarui
        // Get an input, type into it an verify that the value has been update
        cy.get('.action-email').type('fake@gmail.com').should('have.value', 'fake@gmail.com');
    });
    
});