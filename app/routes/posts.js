const controller = require("../controllers/posts");

module.exports = function(app) {
    app.get("/posts", controller.listarPosts);
    app.post("/posts", controller.inserirPosts);
    app.get("/posts/:id", controller.buscarPostsbyId);
    app.delete("/posts/:id", controller.removerPost);
}