import Oruga from "./oruga"
import Traccion from "./traccion"
import caucho from "./caucho"

class Robot {
    private _numeroSerie: string;
    private _ptbBase: number;
    private _traccion?: Traccion;

    constructor(numeroSerie: string, ptbBase: number){
        this._numeroSerie = numeroSerie;
        this._ptbBase = ptbBase;
    }

    public asignarTraccion(t: Traccion) {
        this._traccion = t;
    }

    mostrarInfo() {
        if(!this._traccion) {
            console.log("No se ha asignado ningun tipo de traccion")
            return;
        }

        const ptbFinal = this._ptbBase - this._traccion.penalizacion;

        console.log(`Numero de serie: ${this._numeroSerie}`);
        console.log(`Potencia de traccion final: ${ptbFinal}`);
        console.log(`Tipo de traccion: ${this._traccion.nombre}`);
        console.log(`Distancia maxima: ${this._traccion.distancia} km`);
        console.log(`Caracteristicas adicionales: ${this._traccion.caracteristicasAdicionales()}`);
    }
}

const robot = new Robot("KT-2020-P", 10);
const traccionCaucho = new caucho;
robot.asignarTraccion(traccionCaucho);
robot.mostrarInfo();

