const db = require('../util/database');

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
    return db.execute(
        `INSERT INTO joya (nombre, material, precio, tipo, imagen, descripcion) 
        VALUES (?, ?, ?, ?, ?, ?)`, 
        [this.nombre, this.material, this.precio, this.tipo, this.imagen, this.descripcion]);
        
}
//Este método servirá para devolver los objetos del almacenamiento persistente.
static fetchAll() {
    return db.execute('Select * from joya')
}
static fetch(id) {
    if (id) {
        return this.fetchOne(id);
    } else {
        return this.fetchAll();
    }
}
static fetchOne(id) {
    return db.execute('Select * from joya WHERE id = ?', [id]);
}

static update(nombre, material, precio, tipo, imagen, descripcion) {
    return db.execute(`UPDATE joya SET 
        nombre = ?, material = ?, precio = ?, imagen = ?, descripcion = ?
        WHERE id = ?`, 
        [nombre, material, precio, tipo, imagen, descripcion]);
}

}
