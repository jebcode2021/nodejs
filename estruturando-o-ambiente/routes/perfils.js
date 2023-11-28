const express = require('express');

const { Perfil } = require('../models');

const router = express.Router();

router.get('/', (_, res) => {
    Perfil.find({}).then((perfils) => {
        res.render('perfils/index', {
            nomeDoUsuario: 'Jonathan Euzébio Boza',
            perfils: perfils,
        });
    });
});


module.exports = router;