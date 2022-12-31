import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

//Se importan los modelos
import { Lanzadera } from '../modelo/lanzadera';
import { Nave } from '../modelo/nave';
import { Tripulada } from '../modelo/tripulada';

//Se importan los servicios
import { NaveService } from '../servicios/nave.service';
import { LanzaderaService } from '../servicios/lanzadera.service';
import { TripuladaService } from '../servicios/tripulada.service';
import { NotripuladaService } from '../servicios/notripulada.service';
import { Notripulada } from '../modelo/notripulada';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  //variables para crear nave 
  _id!: string;
  nombre!: string;
  pais!: string;
  tipoNave!: string;

  //variables para crear nave lanzadera 
  potencia!: string;
  toneladasEmpuje!: string;
  toneladasPeso!: string;
  altura!: string;
  capacidadToneladas!: string;

  //variables para crear nave Tripulada 
  distancia!: string;
  capacidadPersonas!: string;

  //variables para crear nave no Tripulada 
  velocidad!: string;


  //variables para mostrar los campos de texto segun la nave
  lanzaderaMostrar = false;
  tripuladaMostrar = false;
  noTripuladaMostrar = false;

  constructor(
    private naveService: NaveService,
    private toast: ToastrService,
    private router: Router,
    private lanzaderaService: LanzaderaService,
    private tripuladaService: TripuladaService,
    private noTripuladaService: NotripuladaService,
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    
    /*const nave = new Nave(this._id, this.nombre, this.pais, this.tipoNave);
    this.naveService.create(nave).subscribe(
      data => {
        this.toast.error(data.message, 'Ok', {timeOut: 3000, positionClass: 'toast-top-center'});
        this.router.navigate(['']);

      },
      err => {
        this.toast.error(err.error.message, 'Error', {timeOut: 3000, positionClass: 'toast-top-center'});
      }
    );
    */


   if (this.lanzaderaMostrar) {
      console.log("Se va a crear una lanzadera")
      this.tipoNave = "Lanzadera";
      const nave = new Nave(this._id, this.nombre, this.pais, this.tipoNave);      
      this.naveService.create(nave).subscribe(
        data => {
         // this.toast.success(data.message, 'Ok', {timeOut: 3000, positionClass: 'toast-top-center'});                     
          //Crear nave lanzadera 
          console.log("Fnave")
          console.log(data)
          const lanzadera = new Lanzadera(this.potencia, this.toneladasEmpuje, this.toneladasPeso, 
                                          this.altura, this.capacidadToneladas, data._id, data);
          console.log("lanzadera")
          console.log(lanzadera) 
          this.lanzaderaService.create(lanzadera).subscribe(
            dataLanzadera => {
              this.toast.success(dataLanzadera.message, 'Lanzadera creada correctamente', {timeOut: 3000, positionClass: 'toast-top-center'});
              this.router.navigate(['']);
              
            },
            err => {
              this.toast.error(err.error.message, 'Error', {timeOut: 3000, positionClass: 'toast-top-center'});

            }
          );
        },
        err => {
          this.toast.error(err.error.message, 'Error', {timeOut: 3000, positionClass: 'toast-top-center'});
        }
      );
    }
    else if(this.tripuladaMostrar){
      console.log("Se va a crear una nave tripulada")
      this.tipoNave = "Tripulada";
      const nave = new Nave(this._id, this.nombre, this.pais, this.tipoNave);      
      this.naveService.create(nave).subscribe(
        data => {
          //this.toast.success(data.message, 'Ok', {timeOut: 3000, positionClass: 'toast-top-center'});                
          //Crear nave tripulada
          const tripulada = new Tripulada(this.toneladasPeso, this.distancia, this.capacidadPersonas, 
                                          data._id, data);
          console.log("tripulada")
          console.log(tripulada)                                
          this.tripuladaService.create(tripulada).subscribe(
            dataTripulada => {
              this.toast.success(dataTripulada.message, 'Nave tripulada creada correctamente', {timeOut: 3000, positionClass: 'toast-top-center'});
              //this.router.navigate(['']);
              console.log(dataTripulada) 
          
            },
            err => {
              this.toast.error(err.error.message, 'Error', {timeOut: 3000, positionClass: 'toast-top-center'});
            }
          );
        },
        err => {
          this.toast.error(err.error.message, 'Error', {timeOut: 3000, positionClass: 'toast-top-center'});
        }
      );
    }
    else if(this.noTripuladaMostrar){
      console.log("Se va a crear una nave no tripulada")
      this.tipoNave = "No Tripulada";
      const nave = new Nave(this._id, this.nombre, this.pais, this.tipoNave);      
      this.naveService.create(nave).subscribe(
        data => {
          //this.toast.success(data.message, 'Ok', {timeOut: 3000, positionClass: 'toast-top-center'});
          console.log(data._id)           
          //Crear nave no tripulada
          const noTripulada = new Notripulada(this.toneladasEmpuje, this.velocidad, 
                                          data._id, data);
          console.log("noTripulada")
          console.log(noTripulada)                                
          this.noTripuladaService.create(noTripulada).subscribe(
            dataNoTripulada => {
              this.toast.success(dataNoTripulada.message, 'Nave no tripulada creada correctamente', {timeOut: 3000, positionClass: 'toast-top-center'});
              this.router.navigate(['']);
              console.log(dataNoTripulada) 
          
            },
            err => {
              this.toast.error(err.error.message, 'Error', {timeOut: 3000, positionClass: 'toast-top-center'});
            }
          );
        },
        err => {
          this.toast.error(err.error.message, 'Error', {timeOut: 3000, positionClass: 'toast-top-center'});
        }
      );
    }
    
  }

}
