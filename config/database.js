const mongoose = require('mongoose');

module.exports = function(uri) {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.on('connected', function() {
        console.log('mongoose! conectado em ' + uri);
    });
    mongoose.connection.on('disconnected', function() {
        console.log('mongoose! desconectado de ' + uri);
    });
    mongoose.connection.on('error', function(erro) {
        console.log('mongoose! error na conexão: ' + erro);
    });
    mongoose.set('debug', true);
}