const Posts = require("../models/posts");
const usuario = require("../models/usuario");
const view = require("../views/posts");

module.exports.listarPosts = function(req, res) {
    let promise = Posts.find().exec();
    promise.then(function(posts) {
        res.status(200).json(view.render(posts));
    }).catch(function(error) {
        res.status(500).json({ mensagem: "ocorreu um erro" });
    });
}

module.exports.inserirPosts = function(req, res) {
    let posts = req.body;
    let promise = Posts.create(posts);
    promise.then(function(posts) {
        res.status(201).json(posts);
    }).catch(function(error) {
        res.status(500).json({ mensagem: "post não feito" })
    });
}
module.exports.buscarPostsbyId = function(req, res) {
    let id = req.params.id;
    let promise = Posts.findById(id).exec();
    promise.then(function(posts) {
        res.status(200).json(view.render(posts));
    }).catch(function(error) {
        res.status(400).json({ mensagem: "falha" })
    })
}
module.exports.removerPost = function(req, res) {
    let id = req.params.id;
    let promise = Posts.findByIdAndDelete(id);
    promise.then(function(posts) {
        res.status(200).json(view.render(posts));
    }).catch(function(error) {
        res.status.json(error);
    })

}