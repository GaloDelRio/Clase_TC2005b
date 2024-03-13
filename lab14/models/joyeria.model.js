const joyeria = [
    {
        nombre: "Anillo de Diamantes", 
        material: "Oro blanco", 
        precio: "$5000", 
        tipo: "Anillo de compromiso", 
        imagen: 'https://www.costco.com.mx/medias/sys_master/products/h32/hcf/79532090851358.webp',
        descripcion: "Este hermoso anillo de diamantes está hecho de oro blanco y es perfecto para una ocasión especial como un compromiso."
    },
    {
        nombre: "Collar de Perlas", 
        material: "Plata", 
        precio: "$800", 
        tipo: "Collar", 
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_923570-MLM26506211797_122017-O.webp',
        descripcion: "Un elegante collar de perlas que complementará tu estilo con su diseño único y acabado de plata."
    }, 
    {
        nombre: "Pulsera de Zafiros", 
        material: "Oro amarillo", 
        precio: "$2500", 
        tipo: "Pulsera", 
        imagen: 'https://joyeriarealdecatorce.com/wp-content/uploads/2020/04/GRBRAM_001.1-600x450.png',
        descripcion: "Luce elegante y sofisticada con esta pulsera de zafiros, montada en oro amarillo para un toque de lujo adicional."
    },
];

module.exports = class Joyeria {
    // Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, material, precio, tipo, imagen, descripcion) {
        this.nombre = nombre;
        this.material = material;
        this.precio = precio;
        this.tipo = tipo;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }


  //Este método servirá para guardar de manera persistente el nuevo objeto. 
  save() {
    joyeria.push({
        nombre: this.nombre,
        material: this.material,
        precio: this.precio,
        tipo: this.tipo,
        imagen: this.imagen,
        descripcion: this.descripcion,
    }); //Es lo mismo que tropas.push(this);
}
//Este método servirá para devolver los objetos del almacenamiento persistente.
static fetchAll() {
    return joyeria;
}
}
