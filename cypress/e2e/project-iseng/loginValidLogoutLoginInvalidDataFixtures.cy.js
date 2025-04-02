
describe('Login dengan valid fixtures data', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/login.html')

        // Mengambil data dari fixture file dua.json
        cy.fixture("dua").then((data) => {
            const username = data.validUser.username
            const password = data.validUser.password

            // Mengisi form login
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.contains('Sign in').click()

            // Assertion: Memastikan login berhasil
            cy.url().should('not.include', 'login.html')
            cy.get('.nav-tabs').should('contain', 'Account Summary')
        });
    });

    it('Melakukan Logout', () => {
        // Logout 
        cy.get('.icon-user').click()  // klik ikon user
        cy.contains('Logout').click()  // klik tombol logout

        // Assertion: Memastikan logout berhasil
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').should('be.visible')
        
    }); 
});
