const Joya = require('../models/joyeria.model');

exports.get_crear = (request, response, next) => {
    response.render('Agregar', {
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
        editar: false,
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

    mi_Joya.save()
        .then(([rows, fieldData]) => {
            response.setHeader('Set-Cookie', 'ultima_joya=' + mi_Joya.clase + '; HttpOnly');
            response.redirect('/');
        }).catch((error) => {
            console.log(error);
        });
};

exports.get_root = (request, response, next) => {
    console.log(request.cookies);
    console.log(request.cookies.ultima_joya);
        Joya.fetchAll(request.params.joya_id).then(([rows, fieldData]) => {
            response.render('Clases', {
                csrfToken: request.csrfToken(),
                joyeria: rows,
                ultima_joya: request.cookies.ultima_joya || '',
                username: request.session.username || '',
                permisos: request.session.permisos || [],
            });
        })
        .catch((error) => {
            console.log(error)
        
});
};

exports.get_editar = (request, response, next) => {
    Tropa.fetchOne(request.params.id)
        .then(([joyas, fieldData]) => {
            response.render('add', {
                username: request.session.username || '',
                csrfToken: request.csrfToken(),
                permisos: request.session.permisos || [],
                editar: true,
                joya: joyas[0],
            });
        })
        .catch((error) => {
            console.log(error)
        });
};
exports.post_editar = (request, response, next) => {
    Tropa.update(request.body.id, request.body.nombre, request.body.precio, 
        request.body.tipo, request.body.imagen, request.body.descripcion)
        .then(([rows, fieldData]) => {
            response.redirect('/joyeria');
        })
        .catch((error) => {console.log(error)});
};
 
    // router.get(`/`, (request, response , next) => {
    //     response.render('clases', {
    //         joyeria: joyeria,
    //         username: request.session.username || '',
    //     })  

    // });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 