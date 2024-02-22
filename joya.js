// Definimos nuestra clase Joya
class Joya {
    constructor() {
        this.joya = [];
    }

    // Método para agregar un nueva joya
    agregarJoya(nombre, material) {
        this.joya.push({nombre, material});
    }

    // Método para buscar una nueva joya por nombre
    buscarJoya(nombre) {
        const joyaEncontrado = this.joya.find(joya => joya.nombre === nombre);
        if (joyaEncontrado) {
            console.log("Joya encontrada:", joyaEncontrado);
            return joyaEncontrado;
        } else {
            console.log("Joya no encontrada");
            return null;
        }
    }

    // Método para mostrar todos las joyas disponibles
    mostrarJoya() {
        console.log("Joyas disponibles:");
        this.joya.forEach(joya => console.log(joya.nombre + " - " + joya.material));
        return this.joya;
    }
}

// Exportamos la clase para poder utilizarla en otros archivos si es necesario
