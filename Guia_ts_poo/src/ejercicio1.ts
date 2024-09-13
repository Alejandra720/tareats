export class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: 'izquierda' | 'centro' | 'derecha';

    constructor() {
        this.titulo = "titulo";
        this.color = "color";
        this.fuente = "fuente";
        this.alineacion = "izquierda";  // valor por defecto
    }

    establecerPropiedades(titulo: string, color: string, fuente: string): void {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }

    establecerAlineacion(alineacion: 'izquierda' | 'centro' | 'derecha'): void {
        this.alineacion = alineacion;
    }
    
    imprimirPropiedades(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineación: ${this.alineacion}`);
    }
}


const cabecera = new CabeceraPagina();
cabecera.establecerPropiedades("Mi Página Web", "azul", "Arial");
cabecera.establecerAlineacion("centro");
cabecera.imprimirPropiedades();