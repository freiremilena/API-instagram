const Usuario = require("../models/usuario");
const view = require("../views/usuarios");

module.exports.listarUsuarios = function(req, res) {
    let promise = Usuario.find().exec();
    promise.then(function(usuarios) {
        res.status(200).json(view.renderMany(usuarios));
    }).catch(function(error) {
        res.status(500).json({ mensagem: "ocorreu um erro" });
    });
}
module.exports.buscarUsuariobyId = function(req, res) {
    let id = req.params.id;
    let promise = Usuario.findById(id).exec();
    promise.then(function(usuario) {
        res.status(200).json(view.render(usuario));
    }).catch(function(error) {
        res.status(400).json({ mensagem: "falha" })
    })
}
module.exports.inserirUsuario = function(req, res) {
    let usuario = req.body;
    let promise = Usuario.create(usuario);
    promise.then(function(usuario) {
        res.status(201).json(view.render(usuario));
    }).catch(function(error) {
        res.status(400).json({ mensagem: "requisição invalida" });
    })
}
module.exports.removerUsuario = function(req, res) {
    let id = req.params.id;
    let promise = Usuario.findByIdAndDelete(id);
    promise.then(function(usuario) {
        res.status(200).json(view.render(usuario));
    }).catch(function(error) {
        res.status.json(error);
    })

}