export class Tripulada {

    _id: string;
    toneladasPeso: string;
    distancia: string;
    capacidadPersonas: string;
    nave: string;
   
    
    constructor(toneladasPeso: string, distancia: string, capacidadPersonas: string, _id: string,  nave: string ){
        this.toneladasPeso = toneladasPeso;
        this.distancia = distancia;
        this.capacidadPersonas = capacidadPersonas;
        this._id = _id;
        this.nave = nave;
        
    }

}
