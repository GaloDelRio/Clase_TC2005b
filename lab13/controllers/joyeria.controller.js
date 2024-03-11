const Tropa = require('../models/tropa.model');

exports.get_crear = (request, response, next) => {
    response.render('crear');
};

router.post(`/Add`, (request, response , next) => {
    console.log(request.body);
    const mi_Joya = new Joya(
        request.body.clase, request.body.nombre, request.body.material, 
        request.body.precio, request.body.tipo, request.body.imagen, request.body.descipcion
    );
    mi_joyeria.save();
    response.redirect('/');
});

    exports.get_root = (request, response, next) => {
    response.render('clases', {
        joyeria: Joyeria.fetchAll(),
    });
};

    router.get(`/`, (request, response , next) => {
        response.render('clases', {joyeria: joyeria})        
    });