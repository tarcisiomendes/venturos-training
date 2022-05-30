var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default{

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            nome: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11999999999',
            endereco: {
                cep: '76987004',
                rua: 'Rua Sergio Almir Carniel',
                numero: '200',
                complemento: 'Casa',
                bairro: 'Jardim Eldorado',
                cidadeUF: 'Vilhena/RO'
            },
            metodo_entrega: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data;
    }    
}