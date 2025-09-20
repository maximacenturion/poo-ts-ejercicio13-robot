import Traccion from "./traccion"

export default class Oruga extends Traccion {

    constructor() {
        super("Rueda oruga", 3, 400)
    }

    caracteristicasAdicionales(): string {
        return "Sensor Meke-M0 incorporado";
    }
}