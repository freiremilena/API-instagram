const controller = require("../controllers/comentarios");

module.exports = function(app) {
    app.post("/comentarios", controller.inserirComentarios);
    app.get("/comentarios", controller.listarComentarios);
}