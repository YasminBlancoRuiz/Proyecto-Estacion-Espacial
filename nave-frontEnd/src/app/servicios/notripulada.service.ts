import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Notripulada } from '../modelo/notripulada';

@Injectable({
  providedIn: 'root'
})
export class NotripuladaService {

  notripuladaURL = environment.apiResrURL + '/notripulada';

  constructor(private httpClient: HttpClient) { }

  //Se crea metodo de detalle para visualizar la informacion de las naves no tripuladas
  public list(): Observable<Notripulada[]> {
    return this.httpClient.get<Notripulada[]>(this.notripuladaURL);
  }
 
  //Se crea metodo de detalle para visualizar la informacion de las naves no tripuladas por id
  public detail(id: number): Observable<Notripulada> {
    return this.httpClient.get<Notripulada>(this.notripuladaURL + `/${id}`);
  }

  //Se crea metodo para crear las naves no tripuladas
  public create(noTripulada : Notripulada): Observable<any> {
    return this.httpClient.post<any>(this.notripuladaURL, noTripulada);
  }
}
