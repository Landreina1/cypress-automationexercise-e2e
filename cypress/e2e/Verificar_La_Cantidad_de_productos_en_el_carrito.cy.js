describe(' Agregar productos al carrito', () => {

  it('Verificar que cargue la pagina de inicio', () => {
    cy.visit('https://automationexercise.com/')
   })

   beforeEach( () => {

    cy.visit('https://automationexercise.com/')

  })

  it('Agregar productos al carrito', () => {

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

   //Hacer click en Products
   
   cy.get (('.shop-menu'))
   cy.contains('Products').click()

   //Verifique que el usuario haya accedido correctamente a la página ALL PRODUCTS
    cy.contains('All Products')
    .should('be.visible')

   //hacer click en Add to cart del producto 
   cy.get('.product-image-wrapper')
   .eq(1)
   .within(() => {
    cy.contains('View Product').click()
   })

   //Verifique que los detalles del producto estén abiertos

   cy.contains('Men Tshirt')
   .should('be.visible')

   cy.contains('Category: Men > Tshirts')
   .should('be.visible')

   cy.contains('Rs. 400')
   .should('be.visible')
    
   cy.contains('In Stock')
   .should('be.visible')

   cy.contains('Condition: New')
   .should('be.visible')

    cy.contains('Brand: H&M')
   .should('be.visible')

   //Aumentar la cantidad a 4 
   cy.get('#quantity')
   .clear()  // .clear() borra el contenido que ya tiene el input antes de escribir.
   .type('4')
  
   //Haga clic en el botón "Añadir al carrito".
   cy.get(':nth-child(5) > .btn').click()

   //Hacer clic en el botón "Continuar comprando".
   cy.contains('Continue Shopping').click()

   //Hacer click en Carrito
   cy.get (('.shop-menu'))
   cy.contains('Cart').click()

   // Verificar que el producto "Stylish Dress" tenga cantidad 4 en el carrito
cy.contains('#cart_info_table tbody tr', 'Men Tshirt',)
  .within(() => {
    cy.get('.cart_quantity button')
      .should('have.text', '4')
  })



  })  
})

// En este spec se valida el flujo de agregar un producto al carrito,
// verificando el acceso a la página de detalle del producto,
// la modificación de la cantidad antes de agregarlo
// y confirmando que el carrito muestre la cantidad exacta seleccionada.
