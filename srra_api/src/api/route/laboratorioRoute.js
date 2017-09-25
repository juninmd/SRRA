module.exports = (app) => {
    const controller = require('../../core/laboratorio/laboratorioController');

    app.route('/laboratorio')
        .get(controller.selecionar)
        .post(controller.inserir)

    app.route('/laboratorio/:id')
        .get(controller.buscar)
        .put(controller.alterar)
        .delete(controller.deletar)
}