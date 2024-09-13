export class Calculadora {
    sumar(a: number, b: number): number {
        // Retorna la suma de dos números
        return a + b;
    }

    restar(a: number, b: number): number {
        // Retorna la resta de dos números
        return a - b;
    }

    multiplicar(a: number, b: number): number {
        // Retorna la multiplicación de dos números
        return a * b;
    }

    dividir(a: number, b: number): number | string {
        // Verifica si b es 0 para evitar división por cero
        if (b === 0) {
            return "Error: No se puede dividir por cero.";
        }
        return a / b;
    }

    potencia(a: number, b: number): number {
        // Retorna a elevado a la potencia de b
        return a ** b;
    }

    factorial(n: number): number | string {
        // Verifica si el número es negativo
        if (n < 0) {
            return "Error: No existe el factorial de números negativos.";
        }
        // Calcula el factorial de un número no negativo
        let factorial = 1;
        for (let i = 2; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }
}


const calculadora = new Calculadora();

console.log("Suma: ", calculadora.sumar(10, 5)); // Suma: 15
console.log("Resta: ", calculadora.restar(10, 5)); // Resta: 5
console.log("Multiplicación: ", calculadora.multiplicar(10, 5)); // Multiplicación: 50
console.log("División: ", calculadora.dividir(10, 5)); // División: 2
console.log("Potencia: ", calculadora.potencia(2, 3)); // Potencia: 8
console.log("Factorial: ", calculadora.factorial(5)); // Factorial: 120
 