const { Schema } = require('mongoose');

const Perfil = new Schema({
    cliente: {
        nome: {
            type: String,
            required: true
        },
        sobrenome: {
            type: String,
            required: true
        },
        sexo: {
            type: String,
            required: true,
            enum: ['Masculino', 'Feminino', 'Outros']
        },
        idade: {
            type: Number,
            required: true
        },
        cpf: {
            type: String,
            required: true
        },
        endereco: {
            type: String,
            required: true
        },
        numero: {
            type: Number,
            required: true
        },
        complemento: {
            type: String,
            required: true
        },
        bairro: {
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        },
        cep: {
            type: String,
            required: true
        },
        celular: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        data_nascimento: {
            type: Date,
            required: true
        },
    },
    curso: [
        {
            titulo: {
                type: String,    
                required: true,
            },
            valor: {
                type: Number,
                required: true
            }
        }   
    ],
    total: {    
        type: Number,
        required: true
    },
    parcelas: {
        type: Number,
        required: true
    },
    valor_parcela: {
        type: Number,
        required: true
    },
    pago: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        required: true,
        enum: ['Em Análise', 'Aprovado', 'Reprovado', 'Aguardando Pagamento', 'Pagamento Recusado', 'Cancelado', 'Pagamento Reembolsado', 'Bloqueado']
    },
    data_matricula: {
        type: String,
        required: true
    },
});

module.exports = Perfil;