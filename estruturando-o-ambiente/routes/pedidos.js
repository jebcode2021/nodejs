const express = require('express');

const { Pedido } = require('../models');

const router = express.Router();

router.get('/', (_, res) => {
    Pedido.find({}).then((pedidos) => {
        res.render('pedidos/index', {
            nomeDoUsuario: 'Jonathan Euzébio Boza',
            pedidos: pedidos,
        });
    });
});


module.exports = router;