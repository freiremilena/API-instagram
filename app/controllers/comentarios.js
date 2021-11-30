const Posts = require("../models/posts");
const Comentarios = require("../models/comentarios");
const usuario = require("../models/usuario");
module.exports.listarComentarios = function() {

}
module.exports.listarComentarios = function(req, res) {
    let promise = Comentarios.find().populate("Posts").exec();
    promise.then(function(usuarios) {
        res.status(200).json(posts);
    }).catch(function(error) {
        res.status(500).json({ mensagem: "ocorreu um error" });
    });
}

module.exports.inserirComentarios = function(req, res) {
    let posts = req.body;
    let promise = Comentarios.create(req.body);
    promise.then(function(comentarios) {
        res.status(201).json(comentarios);
    }).catch(function(error) {
        res.status(500).json({ mensagem: "comentario feito" })
    });
}
module.exports.removerComentario = function(req, res) {
    let id = req.params.id;
    let promise = Comentarios.findByIdAndDelete(id);
    promise.then(function(usuario) {
        res.status(200).json(view.render(usuario));
    }).catch(function(error) {
        res.status.json(error);
    })

}