"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const caucho_1 = __importDefault(require("./caucho"));
class Robot {
    _numeroSerie;
    _ptbBase;
    _traccion;
    constructor(numeroSerie, ptbBase) {
        this._numeroSerie = numeroSerie;
        this._ptbBase = ptbBase;
    }
    asignarTraccion(t) {
        this._traccion = t;
    }
    mostrarInfo() {
        if (!this._traccion) {
            console.log("No se ha asignado ningun tipo de traccion");
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
const traccionCaucho = new caucho_1.default;
robot.asignarTraccion(traccionCaucho);
robot.mostrarInfo();
//# sourceMappingURL=robot.js.map