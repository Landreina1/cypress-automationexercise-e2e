describe(' Verificar página de casos de prueba', () => {

  beforeEach( () => {

    cy.visit('https://automationexercise.com/')

  })
  
  it('Verificar página de casos de prueba', () => {

   //Hacer inicio de sesion con el usuario ya registrado

   cy.get (('.shop-menu'))
   cy.contains('Signup / Login').click()

   //Ingrese el email correcto

   cy.get('[data-qa="login-email"]')
   .should('be.visible')
   .type('pruebitaz@yopmail.com')

   //Ingrese la password correcta
   cy.get('[data-qa="login-password"]')
   .should('be.visible')
   .type('229621')
   
   //clic en el botón "login"
   cy.get('[data-qa="login-button"]').click()

   //clic en el botón "Test cases"

   cy.get (('.shop-menu'))
   cy.contains('Test Cases').click()
   
   //Verifique que el usuario haya accedido correctamente a la página Test Cases

   cy.contains('Test Cases')
    .should('be.visible')
  
   })
   
})

// En este spec se valida el acceso correcto a la página de Test Cases,
// confirmando que la navegación funciona y que el contenido esperado
// se muestra correctamente al usuario.
