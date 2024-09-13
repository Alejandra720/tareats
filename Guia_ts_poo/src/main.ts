import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { CabeceraPagina } from './ejercicio1.ts'
import { Calculadora } from './ejercicio2.ts'
import { Cancion } from './ejercicio3.ts'
import { Cuenta } from './ejercicio4.ts'; 
import { Empleado } from './ejercicio5.ts'


function cabezeraPagina() {
  const cabecera = new CabeceraPagina();
  
  cabecera.establecerPropiedades("Mi Página Web", "azul", "Arial");
  cabecera.establecerAlineacion("centro");
  
  console.log("Propiedades de la cabecera de la página:");
  cabecera.imprimirPropiedades();
}

cabezeraPagina();

const calculadora = new Calculadora();

console.log("Suma: ", calculadora.sumar(10, 5)); // Suma: 15
console.log("Resta: ", calculadora.restar(10, 5)); // Resta: 5
console.log("Multiplicación: ", calculadora.multiplicar(10, 5)); // Multiplicación: 50
console.log("División: ", calculadora.dividir(10, 5)); // División: 2
console.log("Potencia: ", calculadora.potencia(2, 3)); // Potencia: 8
console.log("Factorial: ", calculadora.factorial(5)); // Factorial: 120


// Crear instancias de Cancion
const cancion1 = new Cancion("Bohemian Rhapsody", "Rock");
cancion1.autor = "Queen";

const cancion2 = new Cancion("Despacito", "Reggaeton");
cancion2.autor = "Luis Fonsi";

// Mostrar datos de las canciones
console.log("Datos de la primera canción:");
cancion1.mostrarDatos();

console.log("Datos de la segunda canción:");
cancion2.mostrarDatos();

// Crear una instancia de Cuenta
const miCuenta = new Cuenta("Juan Pérez", 100, "Ahorro", "123456789");

// Mostrar los datos iniciales
console.log("Datos iniciales de la cuenta:");
miCuenta.mostrarDatos();

// Realizar algunas operaciones
console.log("\nRealizando operaciones:");
miCuenta.depositar(3);  // Intento de depósito menor a $5.00
miCuenta.depositar(50);  // Depósito exitoso
miCuenta.retirar(3);  // Intento de retiro menor a $5.00
miCuenta.retirar(30);  // Retiro exitoso
miCuenta.retirar(200);  // Intento de retiro mayor al saldo disponible

// Crear una instancia de Empleado
const empleado = new Empleado('Alejandro', 'Fuentes', 'Av. Principal 123', '123456789', 30, 2500);

// Llamar a los métodos
empleado.mostrarDatosPersonales();
empleado.esMayorDeEdad();
empleado.imprimirSueldo();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
