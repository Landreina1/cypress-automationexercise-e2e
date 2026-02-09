describe(' Buscar producto', () => {

  beforeEach( () => {

    cy.visit('https://automationexercise.com/')

  })

  it('Buscar Producto', () => {

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
   cy.contains('Products').click()

   //Verifique que el usuario haya accedido correctamente a la página ALL PRODUCTS
    cy.contains('All Products')
   .should('be.visible')

   //Ingrese el nombre del producto en el campo de búsqueda y haga clic en el botón de búsqueda
   cy.get('[name="search"]')
   .should('be.visible')
   .type('Stylish Dress')

   cy.get('#submit_search').click()

   //Verifique que 'Searched Products' esté visible

   cy.contains('Searched Products')
   .should('be.visible')

   //Verifique que todos los productos relacionados con la búsqueda estén visibles
    
   cy.contains('Stylish Dress')
   .should('be.visible')


  })
})

// En este spec se valida el funcionamiento del buscador de productos,
// verificando que el sistema muestre resultados acordes al criterio de búsqueda
// y confirme visualmente la página de productos buscados.