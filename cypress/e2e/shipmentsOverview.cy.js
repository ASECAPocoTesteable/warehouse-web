describe('Shipments Overview Page', () => {
    it('should display the shipments overview page correctly', () => {
        cy.visit('/shipmentsOverview');
        cy.contains('Shipments overview:').should('be.visible');
    });

    it('should display shipments when available', () => {
        cy.intercept('GET', '/order/all', {fixture: 'orders.json'}).as('getOrders');
        cy.visit('/shipmentsOverview');
        cy.wait('@getOrders');
        cy.contains('Order ID: 1').should('be.visible');
        cy.contains('PENDING').should('be.visible');
        // cy.contains('Product A').should('be.visible');
    });

    it('should update order status to READY_FOR_PICKUP', () => {
        cy.intercept('GET', '/order/all', {fixture: 'orders.json'}).as('getOrders');
        cy.intercept('PUT', '/order/ready-for-pickup/1', {statusCode: 200}).as('updateOrderStatus');
        cy.visit('/shipmentsOverview');
        cy.wait('@getOrders');
        cy.get('button').contains('Ready').click();
        cy.wait('@updateOrderStatus');
        cy.contains('Order status updated successfully!').should('be.visible');
    });


});

