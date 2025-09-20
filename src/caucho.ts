import Traccion from "./traccion"

export default class ruedaCaucho extends Traccion {

    constructor() {
        super("Rueda de caucho", 1, 100)
    }

    caracteristicasAdicionales(): string {
        return "Se desgasta y debe reemplazarse"
    }
}