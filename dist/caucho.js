"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const traccion_1 = __importDefault(require("./traccion"));
class ruedaCaucho extends traccion_1.default {
    constructor() {
        super("Rueda de caucho", 1, 100);
    }
    caracteristicasAdicionales() {
        return "Se desgasta y debe reemplazarse";
    }
}
exports.default = ruedaCaucho;
//# sourceMappingURL=caucho.js.map