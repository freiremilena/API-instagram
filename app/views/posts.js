function render(posts) {
    return {
        id: posts._id,
        texto: posts.texto,
        likes: posts.likes,
    }
}
module.exports.render = render;

function renderMany(posts) {
    return posts.map(render);
}
module.exports.renderMany = renderMany;