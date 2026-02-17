describe(' Agregar productos al carrito', () => {

  it('Verificar que cargue la pagina de inicio', () => {
    cy.visit('https://automationexercise.com/')
   })

   beforeEach( () => {

    cy.visit('https://automationexercise.com') //Asegúrate de estar en la página
   
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

   //hacer click en Add to cart de otro producto 
   cy.get('.product-image-wrapper')
   .eq(8)
   .within(() => {
    cy.contains('Add to cart').click()
   })

   //Hacer clic en el botón "Continuar comprando".
   cy.contains('Continue Shopping').click()

   //Hacer click en Carrito
   
   cy.get (('.shop-menu'))
   cy.contains('Cart').click()

   //Verifique que ambos productos estén agregados al carrito.
   cy.contains('Sleeves Printed Top - White')
   .should('be.visible')

   cy.contains('Summer White Top')
   .should('be.visible')

   //Verificar sus precios, cantidad y precio total del producto 1 y dos del carrito

   //Producto 1
    cy.get('#cart_info_table tbody tr')
   .eq(0)
   .find('.cart_price > p')
   .should('contain.text', 'Rs. 400')



   //Producto 2
   cy.get('#cart_info_table tbody tr')
   .eq(1)
   .find('.cart_price > p')
   .should('contain.text', 'Rs. 499')
   
  })
})

// En este spec se valida el flujo de agregar productos al carrito,
// iniciando sesión con un usuario registrado, seleccionando productos desde
// la página de Products y verificando que ambos productos se agreguen
// correctamente al carrito.