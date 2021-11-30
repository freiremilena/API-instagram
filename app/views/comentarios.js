const { render } = require("./posts");

function render(comentarios) {
    return {
        id: comentarios._id,
        nome: comentarios.nome,
        likes: comentarios.likes,
    }
}
module.exports.render = render;

function renderMany(posts) {
    return posts.map(render);
}
module.exports.renderMany = renderMany;