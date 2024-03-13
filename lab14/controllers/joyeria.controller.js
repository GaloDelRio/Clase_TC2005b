const Joya = require('../models/joyeria.model');

exports.get_crear = (request, response, next) => {
    response.render('Agregar', {
        username: request.session.username || '',
    });
};

exports.post_crear = (request, response , next) => {
    console.log(request.body);
    const mi_Joya = new Joya(
        request.body.nombre, 
        request.body.material, 
        request.body.precio,
        request.body.tipo, 
        request.body.imagen, 
        request.body.descripcion
    );
    mi_Joya.save();
    response.setHeader('Set-Cookie', 'ultima_joya=' + request.body.name + '; HttpOnly');
    response.redirect('/');
};

exports.get_root = (request, response, next) => {
    console.log(request.cookies);
    console.log(request.cookies.ultima_joya);
    response.render('clases', {
        joyeria: Joya.fetchAll(),
        ultima_joya: request.cookies.ultima_joya || '',
        username: request.session.username || '',
        
});
};
 
    // router.get(`/`, (request, response , next) => {
    //     response.render('clases', {
    //         joyeria: joyeria,
    //         username: request.session.username || '',
    //     })  

    // });