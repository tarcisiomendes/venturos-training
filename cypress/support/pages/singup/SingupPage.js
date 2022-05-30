import { el } from './elements'

class SingupPage {

    go() {
        cy.visit('/');
        cy.get('a[href="/deliver"]').click();
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas');
    }

    fillForm(deliver) {
        cy.get(el.fullName).type(deliver.nome);
        cy.get(el.cpf).type(deliver.cpf);
        cy.get(el.email).type(deliver.email);
        cy.get(el.whatsapp).type(deliver.whatsapp);

        cy.get(el.cep).type(deliver.endereco.cep);
        cy.get(el.searchCEPButton).click();

        cy.get(el.addressNumber).type(deliver.endereco.numero);
        cy.get(el.addressDetails).type(deliver.endereco.complemento);

        cy.get(el.address).should('have.value', deliver.endereco.rua);
        cy.get(el.district).should('have.value', deliver.endereco.bairro);
        cy.get(el.city_uf).should('have.value', deliver.endereco.cidadeUF);

        cy.contains(el.deliver_method, deliver.metodo_entrega).click();

        cy.get(el.attachFile).attachFile(deliver.cnh);
    }

    submit() {

        cy.get(el.submitButton).click();


    }

    modalAlertShouldBe(expectedMessage) {

        cy.get(el.modalAlert).should('have.text', expectedMessage)
    }


    alertErrorShouldBe(expectedMessage){
        // cy.get(el.alertError).should('have.text', expectedMessage)
        cy.contains(el.alertError, expectedMessage).should('be.visible');
    }

}

export default new SingupPage();