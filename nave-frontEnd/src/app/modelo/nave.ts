export class Nave {

    _id: string;
    nombre: string;
    pais: string;
    tipoNave: string;

    constructor(_id: string, nombre: string, pais: string, tipoNave: string ){
        this._id = _id;
        this.nombre = nombre;
        this.pais = pais;
        this.tipoNave = tipoNave;
    }
}
