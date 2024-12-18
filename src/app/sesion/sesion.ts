import { AppService } from "../app.service";
import { fotosNewBorn } from "../environment";

export abstract class Sesion {
    constructor() {}
    
    protected abstract setFotos():void;
    
    protected copiarCBU() {
    const cbu = "00000031000345678901"; // Reemplaza con tu CBU
    navigator.clipboard.writeText(cbu);
    alert("CBU copiado al portapapeles: " + cbu);
    }
}
