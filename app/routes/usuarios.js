const controller = require("../controllers/usuarios")

module.exports = function(app) {
    app.get("/usuarios", controller.listarUsuarios);
    //GET/ID//
    app.get("/usuarios/:id", controller.buscarUsuariobyId);
    app.post("/usuarios", controller.inserirUsuario);
    //apagar/remover usuario//
    app.delete("/usuarios/:id", controller.removerUsuario);
}