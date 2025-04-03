describe("SauceDemo Login and Logout", () => {
    beforeEach(() => {
      cy.visit("https://www.saucedemo.com/")
    });
  
    it("Login Success", () => {
      cy.fixture("saucedemo").then((users) => {
        // Menggunakan data validUser dari fixture
        cy.get('[data-test="username"]').type(users.validUser.username)
        cy.get('[data-test="password"]').type(users.validUser.password)
        cy.get('[data-test="login-button"]').click()
        
        // Verifikasi bahwa login berhasil dan berada di halaman Inventory
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
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
  
    it("Login Failed with Invalid User", () => {
      cy.fixture("saucedemo").then((users) => {
        // Menggunakan data invalidUser dari fixture
        cy.get('[data-test="username"]').type(users.invalidUser.username)
        cy.get('[data-test="password"]').type(users.invalidUser.password)
        cy.get('[data-test="login-button"]').click()
  
        // Verifikasi bahwa error message muncul
        cy.get('[data-test="error"]').should("contain.text", "Epic sadface: Sorry, this user has been locked out.")
      })
    })
  })
  