/// <reference types="cypress" />

describe('Working with inputs', () => {

    beforeEach('Visit the website', () => {    
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    });

    it('Should fill username', () => {  // input id menggunakan '#'
        // mengisi username dan memverifikasi
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username').should('have.value', 'username')
        // dari pada memanggil cy.get 2 kali, cukup panggil sekali dan chaining dengan clear() dan type() 
        // contoh:
        // cy.get('#user_login').clear().type('username').should('have.value', 'username')
    });
        

    it('Should fill password', () => {  // input name menggunakan 'input[name=""[]'
        // mengisi password dan memverifikasi
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password').should('have.value', 'password') 
        // dari pada memanggil cy.get 2 kali, cukup panggil sekali dan chaining dengan clear() dan type() 
        // contoh:
        // cy.get('input[name="user_password"]').clear().type('password').should('have.value', 'password') 
        
    });

    it('Should check "Keep me signed id', () => {
        cy.get('#user_remember_me').should('exist').check().should('be.checked')
    });
    
});