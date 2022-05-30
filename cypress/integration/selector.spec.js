describe('selector', () => {

    it('validando seletores css', () => {

        cy.viewport(1440, 900 );
        cy.visit('https://buger-eats-qa.vercel.app');

        cy.get('#page-home main h1').should('have.text','Seja um parceiro entregador pela Buger Eats');

        cy.get('a[href="/deliver"]').click();

        //by Tag
        cy.get('input');

        //by ID
        cy.get('#page-deliver');

        // by Class name
        cy.get('.field-group');

        //by Class value
        cy.get('[class="alert-warning"]');

        //by Attribute name
        cy.get('[placeholder]');

        //by Attribute Name and value
        cy.get('[placeholder="CPF somente números"]');

        //by tag name and attribute with name
        cy.get('input[placeholder="Nome completo"]');

        //two dyfferent attribute 
        cy.get('[placeholder="E-mail"][type="text"]');



        
    });
    
});