"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const traccion_1 = __importDefault(require("./traccion"));
class Oruga extends traccion_1.default {
    constructor() {
        super("Rueda oruga", 3, 400);
    }
    caracteristicasAdicionales() {
        return "Sensor Meke-M0 incorporado";
    }
}
exports.default = Oruga;
//# sourceMappingURL=oruga.js.map