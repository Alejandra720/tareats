// Clase abstracta Persona
 export abstract class Persona {
    // Atributos de la clase Persona
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    edad: number;

    // Constructor que inicializa los atributos
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    // Método que verifica si es mayor de edad
    esMayorDeEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} ${this.apellido} es menor de edad.`);
        }
    }

    // Método abstracto para mostrar todos los datos personales
    abstract mostrarDatosPersonales(): void;
}

// Clase Empleado que hereda de Persona
export class Empleado extends Persona {
    // Atributo propio de la clase Empleado
    sueldo: number;

    // Constructor que llama al constructor de Persona y añade el sueldo
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad); // Llama al constructor de la clase base (Persona)
        this.sueldo = sueldo; // Inicializa el atributo sueldo
    }

    // Método para cargar o cambiar el sueldo
    cargarSueldo(nuevoSueldo: number): void {
        this.sueldo = nuevoSueldo;
    }

    // Método para imprimir el sueldo
    imprimirSueldo(): void {
        console.log(`El sueldo de ${this.nombre} ${this.apellido} es ${this.sueldo}`);
    }

    // Implementación del método abstracto para mostrar los datos personales
    mostrarDatosPersonales(): void {
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
    }
}

// Definir un objeto de la clase Empleado
const empleado = new Empleado('Alejandro', 'Fuentes', 'Av. Principal 123', '123456789', 30, 2500);

// Imprimir los datos del empleado y su sueldo
empleado.mostrarDatosPersonales();
empleado.esMayorDeEdad();
empleado.imprimirSueldo();
