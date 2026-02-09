describe('Verifique que la página de inicio sea visible correctamente', () => {
  it('Visita la página', () => {
    cy.visit('https://automationexercise.com/')
  })

  beforeEach( () => {

    cy.visit('https://automationexercise.com/')
 
  });

   it('Registro: ir a Signup/Login y llenar datos' , () => {

   //Hacer click en el menu la opcion de registrarse
   cy.get (('.shop-menu'))
   cy.contains('Signup / Login').click()


   //Ver visible el titulo New User Signup! 
    cy.get('.signup-form > h2')
    .should('be.visible')

   //Rellenar el campo nombre
    cy.get('[data-qa="signup-name"]')
    .should('be.visible')
    .type('Ojito')

   //Rellenar el campo email
   const email = `qases${Date.now()}@yopmail.com`
   cy.get('[data-qa="signup-email"]').type(email)

   //Click en el signup
    cy.get('[data-qa="signup-button"]').click()

    //Ver visible el titulo Enter Account Information
   
    cy.contains('Enter Account Information')
    .should('be.visible')

    //Sleccionar el genero
    cy.get(':nth-child(4) > .top').click()
    
    //Completar password
   cy.get('[data-qa="password"]')
   .should('be.visible')
   .type('1234')

   //completar fecha de nacimiento
    
   //dia
   cy.get('[data-qa="days"]')
   .select('15')

   //mes
   cy.get('[data-qa="months"]')
   .select('April')
   
   //año
   cy.get('[data-qa="years"]')
   .select('1998')
   
    // Seleccione la casilla de verificación '¡Suscríbase a nuestro boletín informativo!'
    cy.get(':nth-child(7) > label').click()

    // Seleccione la casilla de verificación '¡Reciba ofertas especiales de nuestros socios!'
    cy.get(':nth-child(8) > label').click()

    //Address Information
    cy.get('form > .title > b')
    .should('be.visible')

    //Complete los datos: Nombre
    cy.get('[data-qa="first_name"]')
    .should('be.visible')
    .type('Prueba')

    //Complete los datos: Apellido
    cy.get('[data-qa="last_name"]')
    .should('be.visible')
    .type('QA')

    //Complete los datos: company
    cy.get('[data-qa="company"]')
    .should('be.visible')
    .type('QASES.CA')

    //Complete los datos: address
    cy.get('[data-qa="address"]')
    .should('be.visible')
    .type('Probando ando')

    //Complete los datos: Nombre
    cy.get('[data-qa="address2"]')
    .should('be.visible')
    .type('Segunda')

   //Complete los datos: seleecionar el pais
   cy.get('[data-qa="country"]').select('Canada')

   //Complete los datos: PAIS
   cy.get('form > :nth-child(17)')
   .should('be.visible')
   .type('Canadax')

   //Complete los datos: city
   cy.get('[data-qa="city"]')
   .should('be.visible')
   .type('Can')

   //Complete los datos: zip code
   cy.get('[data-qa="zipcode"]')
   .should('be.visible')
   .type('1245')

   //Complete los datos: numero de telefono
   cy.get('[data-qa="mobile_number"]')
   .should('be.visible')
   .type('114567896')

   //Haga clic en el botón "Crear cuenta"
   cy.get('[data-qa="create-account"]').click()
   

    //Verifique que Account Created
    cy.contains('Account Created')
    .should('be.visible')
   
    // Haga clic en el botón "Continuar".
    cy.get('[data-qa="continue-button"]').click()


    //Vamos a cerrar sesion haciendo click en logout, para crear un nuevo specs con login
   cy.get (('.shop-menu'))
   cy.contains('Logout').click()
  

     
    });


})

// Se valida el happy path del registro de usuario,
// confirmando que el sistema permite crear una cuenta
// y retornar al estado inicial mediante logout.