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
   .eq(5)
   .within(() => {
    cy.contains('Add to cart').click()
   })
   
   //Hacer clic en el botón "Continuar comprando".
   cy.contains('Continue Shopping').click()

   //Haga clic en el botón "Cart"
   cy.get (('.shop-menu'))
   cy.contains('Cart').click()

   //Verificar que se muestre la página del carrito
   cy.contains('Shopping Cart').should('be.visible')
   cy.get('#cart_info_table').should('be.visible')

   //Haga clic en el botón 'X' correspondiente al producto en particular
   cy.get('#product-6 > .cart_delete > .cart_quantity_delete > .fa').click()

   //Verificar que el producto se haya eliminado del carrito.
   cy.get('#cart_info_table tbody tr')
   .should('be.visible')
   .and('have.length', 1)


  })
 }) 

 // En este spec se valida el flujo de eliminación de un producto del carrito,
 // confirmando que un usuario logueado puede acceder al carrito,
 // eliminar un producto específico y que el carrito se actualice correctamente.