describe('My First Test', () => {
  it('klik link "focus"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('focus').click()

    // harus berada di URL yang meyertakan '/commands/actions'
    cy.url().should('include', '/commands/actions')
    // dapatkan input, ketik kedalamnya
    cy.get('.action-email').type('fake@gmail.com')
    // verifikasi bahwa valeu telah diperbarui
    cy.get('.action-email').should('have.value', 'fake@gmail.com')
    cy.get('.action-focus').type('passwordyangsalah')
    cy.get('.action-focus').should('have.value', 'passwordyangsalah')
    cy.get('.action-blur').type('albarokah')
    cy.get('.action-blur').should('have.value', 'albarokah')
    cy.get('.action-clear').type('test')
    cy.get('.action-clear').should('have.value', 'test')
    cy.get('#couponCode1').type('cupon')
    cy.get('#couponCode1').should('have.value', 'cupon')
    cy.get('button[type="submit"]').click() // datanya berdasarkan Type
    



  })
})