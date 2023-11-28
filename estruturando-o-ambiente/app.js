const express = require('express');
const path = require('path');

const routerPrincipal = require('./routes/principal');
const routerPedidos = require('./routes/pedidos');
const routerPerfils = require('./routes/perfils'); // rota perfil
const { connect } = require('./models');

const app = express();
const port = 3000;

// configuração ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routes
app.use('/perfils', routerPerfils); // define a rota /perfils
app.use('/pedidos', routerPedidos);
app.use('/', routerPrincipal);

app.listen(port, () => {
    connect();
    console.log(`Server listening on port ${port}`);
});

module.exports = function() {
    return app;
}