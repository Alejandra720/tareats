 export class Cancion {
    private _autor: string;

    constructor(public titulo: string, public genero: string) {
        this._autor = "";
    }

    get autor(): string {
        return this._autor;
    }

    set autor(nuevoAutor: string) {
        this._autor = nuevoAutor;
    }

    mostrarDatos(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this._autor}`);
    }
}