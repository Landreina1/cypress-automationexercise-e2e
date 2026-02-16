describe(' Verificar suscripción', () => {

  beforeEach( () => {

    cy.visit('https://automationexercise.com/')

  })
   
  it('Verificar suscripción en la página de inicio', () => {

   //Hacer inicio de sesion con el usuario ya registrado
   cy.get('.shop-menu > .nav')
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

   //Desplácese hacia abajo hasta el pie de página.
   cy.get('footer').scrollIntoView()
   cy.contains('Subscription').should('be.visible')

   //Verificar el texto 'Subscription'
   cy.contains('Subscription')
   .should('be.visible')

   //Ingrese la dirección de correo electrónico en la entrada y haga clic en el botón de flecha.

   cy.get('#susbscribe_email')
   .should('be.visible')
   .type('pruebitaz@yopmail.com')
   cy.get('#subscribe').click()


   //Verifique que el mensaje de éxito "You have been successfully subscribed!" sea visible
   cy.contains('You have been successfully subscribed!')
   .should('be.visible')

  })
   
})

// En este spec se valida la funcionalidad de suscripción desde la página de inicio,
// verificando que el usuario pueda ingresar su correo electrónico en el footer
// y que el sistema muestre el mensaje de confirmación correspondiente.