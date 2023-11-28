const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
    res.render('template', {
        nomeDoUsuario: 'Jonathan Euzébio Boza',
    });
}); 

module.exports = router;