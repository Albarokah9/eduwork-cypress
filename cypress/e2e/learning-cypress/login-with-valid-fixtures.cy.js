describe('Login dengan fixtures data', () => {
    it('Should try to login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')

            // Mengambil data dari fixture file user.json
        cy.fixture("valid").then(valid => {
            const username = valid.username
            const password = valid.password

            // Mengisi form login
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.contains('Sign in').click()

            // Assertion: Memastikan login berhasil
            cy.url().should('not.include','login.html')
            cy.get('.nav-tabs').should('contain', 'Account Summary')
        })
    });
    
});