export class Cuenta {
    private nombre: string;
    private cantidad: number;
    private tipoCuenta: string;
    private numeroCuenta: string;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    depositar(valor: number): void {
        if (valor < 5.00) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        } else {
            this.cantidad += valor;
            console.log(`Se ha depositado correctamente $${valor.toFixed(2)}`);
        }
    }

    retirar(valor: number): void {
        if (this.cantidad < 5.00) {
            console.log("No hay suficiente efectivo en la cuenta");
        } else if (valor < 5.00) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        } else if (valor > this.cantidad) {
            console.log("No hay suficiente saldo para realizar este retiro");
        } else {
            this.cantidad -= valor;
            console.log(`Ha retirado $${valor.toFixed(2)}. Su nuevo saldo es $${this.cantidad.toFixed(2)}`);
        }
    }

    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
        console.log(`Número de cuenta: ${this.numeroCuenta}`);
    }
}