import singup from '../support/pages/singup/SingupPage';
import singupFactory from '../factories/SingupFactory';



describe('Cadastro', () => {

    // before(() => {

    //     cy.log('Tudo aqui é executado uma unica vez ANTES de TODOS os casos de testes')
    // });

    // beforeEach(function()  {
    //     // cy.log('Tudo aqui é executado uma vez sempre ANTES de cada caso de teste')

    //     cy.fixture('delivery').then((d) =>{
    //         this.deliver = d;

    //     })
    // });

    // after(() => {
    //     cy.log('Tudo aqui é executado uma unica vez DEPOIS de TODOS os casos de testes')
    // });

    // afterEach(() => {
    //     cy.log('Tudo aqui é executado uma vez sempre DEPOIS de cada caso de teste')
        
    // });

    it('Cadastrar entregador', function() {

        var deliver = singupFactory.deliver();

        singup.go();
        singup.fillForm(deliver);
        singup.submit();
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        singup.modalAlertShouldBe(expectedMessage);
        
    });


    it('CPF incorreto', function()  {

        var deliver = singupFactory.deliver();

        deliver.cpf = '0000004141AA';

        singup.go();
        singup.fillForm(deliver);
        singup.submit();
        singup.alertErrorShouldBe('Oops! CPF inválido')
    });


    it('Email incorreto', function() {

        var deliver = singupFactory.deliver();

        deliver.email = 'outr.gmail.com';

        singup.go();
        singup.fillForm(deliver);
        singup.submit();
        singup.alertErrorShouldBe('Oops! Email com formato inválido.')
    });

    context('Required fields', function() {

        const messages = [
            {field:'name', output: 'É necessário informar o nome'},
            {field:'cpf', output: 'É necessário informar o CPF'},
            {field:'email', output: 'É necessário informar o email'},
            {field:'cep', output: 'É necessário informar o CEP'},
            {field:'address', output: 'É necessário informar o número do endereço'},
            {field:'deliver_method', output: 'Selecione o método de entrega'},
            {field:'cnh', output: 'Adicione uma foto da sua CNH'}
        ]

        before(function() {
            singup.go();
            singup.submit();            
        });

        messages.forEach(function(msg){
            it( `${msg.field} is required` , () => {
                singup.alertErrorShouldBe(msg.output)                
            });
        })
        
    });

    
});