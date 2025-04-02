describe('Login dengan fixtures data', () => {
    it('Should try to login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')

            // Mengambil data dari fixture file invalid.data.json
        cy.fixture("invalid").then(data=> {
            const username = data.username
            const password = data.password

            // Mengisi form login
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.contains('Sign in').click()

            // Assertion: Memastikan login gagal dan muncul pesan Login and/or password are wrong.
            cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.')
        })
    });
    
});