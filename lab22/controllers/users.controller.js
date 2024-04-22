const Usuario = require('../models/usuario.model');
const bcrypt = require('bcryptjs');

exports.get_login = (request, response, next) => {
    const error = request.session.error || '';
    request.session.error = '';
    response.render('login', {
        username: request.session.username || '',
        registro: false,
        csrfToken: request.csrfToken(),
        error : error ,
        permisos: request.session.permisos || [],
    });
};

exports.post_login = (request, response, next) => {
    Usuario.fetchOne(request.body.username)
        .then(([usuarios, fieldData]) => {
            if (usuarios.length == 1) {
                const usuario = usuarios[0];
                console.log("Estamos dentro 2: ",usuario);
                console.log("¿Coincide? ",bcrypt.compare(request.body.password, usuario.password))
                bcrypt.compare(request.body.password, usuario.password)
                    .then((doMatch) => {
                        if(doMatch) {
                            console.log("Si coincide :D")
                            Usuario.getPermisos(usuario.username)
                                .then(([permisos, fieldData]) => {
                                    console.log(permisos);
                                    request.session.permisos = permisos;
                                    request.session.username = usuario.nombre;
                                    request.session.isLoggedIn = true;
                                    request.csrfToken(),
                                    response.redirect('/');
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        } else {
                            request.session.error = "Usuario y/o contraseña incorrectos";
                            response.redirect('/users/login');
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                response.redirect('/users/login');
            }
        })
        .catch((error) => {console.log(error);});
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.get_signup = (request, response, next) => {
    const error = request.session.error || '';
    request.session.error = '';
    response.render('login', {
        username: request.session.username || '',
        registro: true,
        csrfToken: request.csrfToken(),
        error: error ,
        permisos: request.session.permisos || [],
    });
};

exports.post_signup = (request, response, next) => {
    console.log(request.body.username);
    console.log(request.body.password);
    console.log(request.body.nombre);

    const nuevo_usuario = new Usuario(
        request.body.username, request.body.nombre, request.body.password
    );
    console.log(nuevo_usuario);
    nuevo_usuario.save()
        .then(([rows,fieldData]) => {
            response.redirect('/users/login');
        })
        .catch((error) => {
            request.session.error = 'Nombre de usuario no disponible';
            response.redirect('/users/signup');
        });
};