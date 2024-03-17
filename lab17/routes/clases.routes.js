const express = require('express');
const router = express.Router();
router.use(express.urlencoded({ extended: true }));



const joyaController = require('../controllers/joyeria.controller.js');

router.get('/add', joyaController.get_crear);
router.post('/add', joyaController.post_crear);
router.get('/:joya_id', tropasController.get_root);
router.get('/', joyaController.get_root);

module.exports = router;

//     const joyeria = [
//         {
//             nombre: "Anillo de Diamantes", 
//             material: "Oro blanco", 
//             precio: "$5000", 
//             tipo: "Anillo de compromiso", 
//             imagen: 'https://www.costco.com.mx/medias/sys_master/products/h32/hcf/79532090851358.webp',
//             descripcion: "Este hermoso anillo de diamantes está hecho de oro blanco y es perfecto para una ocasión especial como un compromiso."
//         },
//         {
//             nombre: "Collar de Perlas", 
//             material: "Plata", 
//             precio: "$800", 
//             tipo: "Collar", 
//             imagen: 'https://http2.mlstatic.com/D_NQ_NP_923570-MLM26506211797_122017-O.webp',
//             descripcion: "Un elegante collar de perlas que complementará tu estilo con su diseño único y acabado de plata."
//         }, 
//         {
//             nombre: "Pulsera de Zafiros", 
//             material: "Oro amarillo", 
//             precio: "$2500", 
//             tipo: "Pulsera", 
//             imagen: 'https://joyeriarealdecatorce.com/wp-content/uploads/2020/04/GRBRAM_001.1-600x450.png',
//             descripcion: "Luce elegante y sofisticada con esta pulsera de zafiros, montada en oro amarillo para un toque de lujo adicional."
//         },
//     ];


//     router.get(`/Add`, (request, response, next) => {
//         response.render('agregar')
//     });

//     router.post(`/Add`, (request, response , next) => {
//         console.log(request.body);
//         joyeria.push({
//             nombre: request.body.nombre, 
//             material: request.body.material,  
//             precio: request.body.precio, 
//             tipo: request.body.tipo,
//             descripcion: request.body.descripcion,
//             imagen: request.body.imagen,
//         });
//         response.redirect('/');
//         });    

//         router.get(`/`, (request, response , next) => {
//             response.render('clases', {joyeria: joyeria})        
//         });


// module.exports= router;