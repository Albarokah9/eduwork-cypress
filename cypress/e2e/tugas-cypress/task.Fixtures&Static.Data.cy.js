describe("Should login succes with validUser", () => {
    beforeEach(() => {
      cy.visit("https://www.saucedemo.com/");
    })
  
    it("Should login successfully with validUser", () => {
      cy.fixture("saucedemo").then((users) => {
        cy.get('[data-test="username"]').type(users.validUser.username)
        cy.get('[data-test="password"]').type(users.validUser.password)
        cy.get('[data-test="login-button"]').click()
        
        // cy.url().should("contain", "/inventory.html"); menggunakan contain untuk melakukan pemeriksaan sebagian artinya URL cukup mengandung bagian /intentory.html
        cy.url().should("eq", "https://www.saucedemo.com/inventory.html"); 
        // eq(equal): untuk melakukan pemeriksaan sama persis, URL harus 100% sama persis dengan https://www.saucedemo.com/inventory.html
      })
    })

    it("Logout Success", () => {
      cy.fixture("saucedemo").then((users) => {
        // Login terlebih dahulu
        cy.get('[data-test="username"]').type(users.validUser.username)
        cy.get('[data-test="password"]').type(users.validUser.password)
        cy.get('[data-test="login-button"]').click()
  
        // Verifikasi login berhasil (di halaman inventory)
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
  
        // Klik tombol burger menu dan logout
        cy.get('.bm-burger-button').click()
        cy.get('#logout_sidebar_link').click()
  
        // Verifikasi kembali ke halaman login
        cy.url().should('eq', 'https://www.saucedemo.com/')
      })
    })
  
    it("Should fail to login with invalidUser", () => {
      cy.fixture("saucedemo").then((users) => {
        cy.get('[data-test="username"]').type(users.invalidUser.username)
        cy.get('[data-test="password"]').type(users.invalidUser.password)
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should("contain.text", "Epic sadface: Sorry, this user has been locked out.");
      })
    })
  })
  
// Atribut	Format Cypress	Contoh
// id=	    #idName	        cy.get('#user-name')
// class=	  .className	    cy.get('.btn-primary')
// type=	  [type="value"]	cy.get('[type="text"]')

// Atribut lain	[atribut="value"]	cy.get('[data-test="login-button"]')
// Gabungan	tagname#idName.className[type="value"]	cy.get('input#user-name[type="text"]')