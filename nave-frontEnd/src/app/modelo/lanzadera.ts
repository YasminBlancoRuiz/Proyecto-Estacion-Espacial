
export class Lanzadera {

    _id: string;
    potencia: string;
    toneladasEmpuje: string;
    toneladasPeso: string;
    altura: string;
    capacidadToneladas: string;
    nave: string;
   



    constructor(potencia: string, toneladasEmpuje: string, toneladasPeso: string, altura: string, 
                capacidadToneladas: string, _id: string, nave: string ){
        this.potencia = potencia;
        this.toneladasEmpuje = toneladasEmpuje;
        this.toneladasPeso = toneladasPeso;
        this.altura = altura;
        this.capacidadToneladas = capacidadToneladas;
        this._id = _id;
        this.nave = nave;
        console.log("nave")
        
    }

}
