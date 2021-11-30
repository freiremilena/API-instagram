const { static } = require('express');
const express = require('express');
const routerUsuarios = require("../app/routes/usuarios");
const routerPosts = require("../app/routes/posts");
const routerComentarios = require("../app/routes/comentarios");
const bodyParse = require("body-parser");
module.exports = function() {
    let app = express();
    app.set("port", 8391);
    app.use(bodyParse.json());
    app.use(bodyParse.urlencoded({ extended: false }));

    app.use(express.static("./public"));
    routerUsuarios(app);
    routerPosts(app);
    routerComentarios(app);
    return app;
};