const mongoose = require("mongoose");

module.exports = function() {
    let schema = mongoose.Schema({
        usuario: {
            type: mongoose.Schema.ObjectId,
            ref: "Usuario",
        },
        texto: {
            type: "String",
            required: true,
        },
        likes: {
            type: "Number",
            required: true,
        }
    })
    return mongoose.model("Posts", schema);
}();