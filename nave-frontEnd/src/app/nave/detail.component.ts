import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

//Lo importo
import { Nave } from '../modelo/nave';
import { NaveService } from '../servicios/nave.service';

import { Lanzadera } from '../modelo/lanzadera';
import { LanzaderaService } from '../servicios/lanzadera.service';

import { Tripulada } from '../modelo/tripulada';
import { TripuladaService } from '../servicios/tripulada.service';

import { Notripulada } from '../modelo/notripulada';
import { NotripuladaService } from '../servicios/notripulada.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  nave: Nave | undefined;
  lanzadera: Lanzadera | undefined;
  tripulada: Tripulada | undefined;
  noTripulada: Notripulada | undefined;

  creacionLanzadera = false;
  creacionTripulada = false;
  creacionNoTripulada = false;


  constructor(
    private naveService: NaveService,
    private toast: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private lanzaderaService: LanzaderaService,
    private tripuladaService: TripuladaService,
    private noTripuladaService: NotripuladaService,

  ) { }

  ngOnInit(): void {
    this.getNave();
    
  }

  //Para activar la ruta detalle/id
  getNave(): void{
    const id = this.activatedRoute.snapshot.params.id;
    this.naveService.detail(id).subscribe(
      data => {
        this.nave = data;
        console.log("quiero ver cual es el tipo de nave");
        console.log(data.tipoNave);
          if (data.tipoNave === "Lanzadera") {
            this.creacionLanzadera = true;
            this.getLanzadera();
          }else if(data.tipoNave === "Tripulada"){
            this.creacionTripulada = true;
            this.getTripulada();            
          }else if(data.tipoNave === "No Tripulada"){
            this.creacionNoTripulada = true;
            this.getNoTripulada(); 
          }
      },
      err => {
        this.toast.error(err.error.message, 'Error', {timeOut: 3000, positionClass: 'toast-top-center'});
        this.router.navigate(['']);
      }
    );
  }

  //Trae informacion de la base de datos de lanzadera
  //Invoca el servicio que consume el api en el backend
  getLanzadera(): void{
    const id = this.activatedRoute.snapshot.params.id;
    this.lanzaderaService.detail(id).subscribe(
      data => {
        this.lanzadera = data;
        console.log("data lanzadera")
        console.log(data)
      },
      err => {
        this.toast.error(err.error.message, 'Error', {timeOut: 3000, positionClass: 'toast-top-center'});
        //this.router.navigate(['']);
        
      }
    );
  }

  //Trae informacion de la base de datos de nave tripuladas
  //Invoca el servicio que consume el api en el backend

  getTripulada(): void{
    const id = this.activatedRoute.snapshot.params.id;
    this.tripuladaService.detail(id).subscribe(
      data => {
        this.tripulada = data;
        console.log("data tripulada")
        console.log(data)
      },
      err => {
        this.toast.error(err.error.message, 'Error', {timeOut: 3000, positionClass: 'toast-top-center'});
        this.router.navigate(['']);
      }
    );
  }

  //Trae informacion de la base de datos de nave no tripuladas
  //Invoca el servicio que consume el api en el backend
  
  getNoTripulada(): void{
    const id = this.activatedRoute.snapshot.params.id;
    this.noTripuladaService.detail(id).subscribe(
      data => {
        this.noTripulada = data;
        console.log("data no tripulada")
        console.log(data)
      },
      err => {
        this.toast.error(err.error.message, 'Error', {timeOut: 3000, positionClass: 'toast-top-center'});
        this.router.navigate(['']);
      }
    );
  }

}
