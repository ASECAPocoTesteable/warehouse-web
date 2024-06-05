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

    it('should not add stock to a product with invalid quantity', () => {
        cy.get('select#product-options').select('1');
        cy.get('input#product-quantity').type('0');
        cy.get('button[type="submit"]').click();
        cy.contains('Invalid quantity').should('be.visible');
    });

    it('should not add stock to a product with invalid product', () => {
        cy.get('select#product-options').select('0');
        cy.get('input#product-quantity').type('5');
        cy.get('button[type="submit"]').click();
        cy.contains('Invalid product').should('be.visible');
    });

});
