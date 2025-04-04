// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Cypress.Commands.add('login',(username, password) => {
//           cy.clearCookies()
//           cy.clearLocalStorage()

//           cy.get('#user_login').type(username)
//           cy.get('#user_password').type(password)
//           cy.contains('Sign in').click()
// })

Cypress.Commands.add('login',(username, password) => {
          cy.clearCookies()
          cy.clearLocalStorage()

          cy.get('#user_login').type(username)
          cy.get('#user_password').type(password)
          cy.contains('Sign in').click()
})
Cypress.Commands.add("Payment",()  => {
    // cy.clearCookies()
    // cy.clearLocalStorage()

    cy.fixture("paymentData").then((data) => {
        
    // cy.url().should('include', '/bank/account-summary.html');
      cy.get("#pay_bills_tab").click()
      cy.get("#sp_payee").select(data.payee)
      cy.get("#sp_account").select(data.account)
      cy.get("#sp_amount").type(data.amount)

    //   cy.get("#sp_date").type(data.date)

    // ini script untuk memastikan apa bisa di pilih manual
      let date = data.date.split("-")[2];
      date = date.replace("0", "")
      cy.get("#sp_date").click()
      cy.get("#ui-datepicker-div").contains(date).click()

    //   cy.get("#sp_description").focus()
      cy.get("#sp_description").type(data.description)
      cy.get("#pay_saved_payees").click();
      cy.get("#alert_content")
        .should("be.visible")
        .and("contain.text", "The payment was successfully submitted.")
  
    });   
  });