
describe('Login dengan fixtures data', () => {
    beforeEach('Should try to login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')

            // Mengambil data dari fixture file user.json
        cy.fixture("valid").then(valid => {
            const username = valid.username
            const password = valid.password

            // Menggunakan Costume Commands
           cy.login(username, password)

        //    Seharusnya, karna sudah menggunakan costume commands
        //    cy.get('#user_login').type(username)
        //    cy.get('#user_password').type(password)
        //    cy.contains('Sign in').click()

            // Assertion: Memastikan login berhasil
            cy.url().should('not.include','login.html')
            cy.get('.nav-tabs').should('contain', 'Account Summary')
            cy.pause()
        })
    })
    
    it('Payment method using fixtures data and costume commands', () => {
        // Menggunakan fixtures data dan costume commands
        cy.Payment()
        
    });
})