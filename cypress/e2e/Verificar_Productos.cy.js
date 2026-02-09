describe(' Verificar productos', () => {

  it('Verificar que cargue la pagina de inicio', () => {
    cy.visit('https://automationexercise.com/')
   })

   beforeEach( () => {

    cy.visit('https://automationexercise.com/')

  })

  it('Verificar todos los productos y la página de detalles del producto', () => {
   
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


   //Hacer click en Products
   
   cy.get (('.shop-menu'))
   cy.contains('Products').click()


   //Verifique que el usuario haya accedido correctamente a la página ALL PRODUCTS
    cy.contains('All Products')
    .should('be.visible')


   //Verifique que Category se meustre
   cy.contains('Category')
   .should('be.visible')


   //Verifique que Brands se muestre

   cy.contains('Brands')
   .should('be.visible')


   //Hacer clic en "View Products" del primer producto
   
   cy.get('.product-image-wrapper')
   .eq(3)
   .within(() => {
    cy.contains('View Product').click()
   })

   // Verifique que los detalles sean visibles: nombre del producto, categoría, precio, disponibilidad, condición, marca
    
   cy.contains('Stylish Dress')
   .should('be.visible')

   cy.contains('Category: Women > Dress')
   .should('be.visible')

   cy.contains('Rs. 1500')
   .should('be.visible')
    
   cy.contains('In Stock')
   .should('be.visible')

   cy.contains('Condition: New')
   .should('be.visible')

    cy.contains('Brand: Madame')
   .should('be.visible')

  })

});

// En este spec se valida la visualización de todos los productos,
// así como el acceso a la página de detalle de un producto,
// confirmando que la información se muestre correctamente.