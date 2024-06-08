describe('Add Product Page', () => {
    beforeEach(() => {
        cy.intercept('GET', '/product/all', { fixture: 'products.json' }).as('getProducts');
        cy.visit('/addStockToProduct');
        cy.wait('@getProducts');
    });

    it('should display the add product page correctly', () => {
        cy.contains('Add stock to product:').should('be.visible');
    });

    it('should add stock to a product successfully', () => {
        cy.get('select#product-options').select('1');
        cy.get('input#product-quantity').type('5');
        cy.intercept('PUT', '/product/1', { statusCode: 200 }).as('updateProduct');
        cy.get('button[type="submit"]').click();
        cy.wait('@updateProduct');
        cy.contains('Stock added to Product A successfully!').should('be.visible');
    });


});
