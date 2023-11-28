const { Schema } = require('mongoose');

const Pedido = new Schema({
    cliente: {
        nome: {
            type: String,
            required: true
        },
        sobrenome: {
            type: String,
            required: true
        }
    },
    pizzas: [
        {
            sabor: {
                type: String,
                required: true
            },
            quantidade: {
                type: Number,
                required: true
            },
            tamanho: {
                type: String,
                required: true,
                enum: ['pequena', 'média', 'grande']
            }
        }
    ],
    metodoDoPagamento: {
        type: String,
        required: true,
        enum: ['PIX', 'Dinheiro', 'Cartão de Crédito', 'Cartão de Débito']
    },
    total: {    
        type: Number,
        required: true
    },
    pago: {
        type: Boolean,
        default: false
    },
});

module.exports = Pedido ;