import { NaveService } from './../servicios/nave.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Nave } from '../modelo/nave';
import { Lanzadera } from '../modelo/lanzadera';
import { LanzaderaService } from '../servicios/lanzadera.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  nave: Nave[] = [];
  lanzadera: Lanzadera [] = [];
  filtroNave!:'';
  

  constructor(
    private naveService: NaveService,
    private lanzaderaService: LanzaderaService,
    private toast: ToastrService
    
  ) { }

  ngOnInit(): void {
    this.getNave();
    this.getLanzadera();
  }

  getNave(): void{
    this.naveService.list().subscribe(
      data => {
        this.nave = data;
        console.log(this.nave);
      },
      err =>{
        this.toast.error(err.error.message, 'Error', {timeOut: 3000, positionClass: 'toast-top-center'});
      }
    )

  }
  //Trae informacion de la base de datos de lanzadera
  //Invoca el servicio que consume el api en el backend
  getLanzadera(): void{
    this.lanzaderaService.list().subscribe(
      data => {
        this.lanzadera = data;
        
        console.log(this.lanzadera);
      },
      err =>{
        this.toast.error(err.error.message, 'Error', {timeOut: 3000, positionClass: 'toast-top-center'});
      }
    )

  }



}
