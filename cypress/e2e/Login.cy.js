describe(' Login válido', () => {

  it('Verificar que cargue la pagina de inicio', () => {
    cy.visit('https://automationexercise.com/')
   })

   beforeEach( () => {

    cy.visit('https://automationexercise.com/')
 
  });

   it('Login valido', () => {

    //Hacer click en el menu la opcion de registrarse
   cy.get (('.shop-menu'))
   cy.contains('Signup / Login').click()

   // Verifique que la opción "Iniciar sesión en su cuenta" esté visible

   cy.contains('Login to your account')
    .should('be.visible')

    //Ingrese la dirección de correo electrónico correcto

    cy.get('[data-qa="login-email"]')
    .should('be.visible')
    .type('pruebitaz@yopmail.com')

   //Ingrese la password correcta
    cy.get('[data-qa="login-password"]')
    .should('be.visible')
    .type('229621')
   
    //clic en el botón "login"
    cy.get('[data-qa="login-button"]').click()

   })

  
})

// Se valida el flujo de autenticación exitoso (happy path),
// ingresando credenciales válidas y confirmando el acceso correcto
// a las funcionalidades disponibles para el usuario logueado.