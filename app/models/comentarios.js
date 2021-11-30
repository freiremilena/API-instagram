const mongoose = require("mongoose");

module.exports = function() {
    let schema = mongoose.Schema({
        usuario: {
            type: mongoose.Schema.ObjectId,
            ref: "Usuario",
        },
        texto: {
            type: "String",
            ref: "Comentario",
        },
        posts: {
            type: mongoose.Schema.ObjectId,
            ref: "Posts",
        }
    })
    return mongoose.model('Comentario', schema);
}();