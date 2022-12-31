export class Notripulada {

    _id: string;
    toneladasEmpuje: string;
    velocidad: string;
    nave: string;
   
    
    constructor(toneladasEmpuje: string, velocidad: string, _id: string,  nave: string ){
        this.toneladasEmpuje = toneladasEmpuje;
        this.velocidad = velocidad;
        this._id = _id;
        this.nave = nave;    
    }
}
