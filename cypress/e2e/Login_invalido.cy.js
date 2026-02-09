describe(' Login invalido', () => {

  it('Verificar que cargue la pagina de inicio', () => {
    cy.visit('https://automationexercise.com/')
   })

   beforeEach( () => {

    cy.visit('https://automationexercise.com/')

  })

  it('Login con credenciales invalidas', () => {

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

   //Ingrese la password incorrecta
    cy.get('[data-qa="login-password"]')
    .should('be.visible')
    .type('221144')
   
    //clic en el botón "login"
    cy.get('[data-qa="login-button"]').click()

    //  Verifique que el error "¡Su correo electrónico o contraseña son incorrectos!" sea visible.
   cy.contains('Your email or password is incorrect!')
    .should('be.visible')
  })

 

});

// Se valida el flujo de autenticación fallido,
// ingresando credenciales inválidas y comprobando que el sistema
// bloquea el acceso y notifica correctamente el error.