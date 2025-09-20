"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Traccion {
    _nombre;
    _penalizacionPTB;
    _distanciaMax;
    constructor(nombre, penalizacionPTB, distanciaMax) {
        this._nombre = nombre;
        this._penalizacionPTB = penalizacionPTB;
        this._distanciaMax = distanciaMax;
    }
    get nombre() {
        return this._nombre;
    }
    get penalizacion() {
        return this._penalizacionPTB;
    }
    get distancia() {
        return this._distanciaMax;
    }
}
exports.default = Traccion;
//# sourceMappingURL=traccion.js.map