export default abstract class Traccion {
    private _nombre: string;
    private _penalizacionPTB: number;
    private _distanciaMax: number; 

    constructor(nombre: string, penalizacionPTB: number, distanciaMax: number) {
        this._nombre = nombre;
        this._penalizacionPTB = penalizacionPTB;
        this._distanciaMax = distanciaMax; 
    }

    public get nombre() {
        return this._nombre;
    }

    public get penalizacion() {
        return this._penalizacionPTB;
    }

    public get distancia() {
        return this._distanciaMax;
    }

    abstract caracteristicasAdicionales(): string;
}