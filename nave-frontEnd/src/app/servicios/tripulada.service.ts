import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Tripulada } from '../modelo/tripulada';

@Injectable({
  providedIn: 'root'
})
export class TripuladaService {

  tripuladaURL = environment.apiResrURL + '/tripulada';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Tripulada[]> {
    return this.httpClient.get<Tripulada[]>(this.tripuladaURL);
  }
 
  //Se crea metodo de detalle para visualizar la informacion de las naves tripuladas
  public detail(id: number): Observable<Tripulada> {
    return this.httpClient.get<Tripulada>(this.tripuladaURL + `/${id}`);
  }

  //Se crea metodo para crear las naves
  public create(tripulada : Tripulada): Observable<any> {
    return this.httpClient.post<any>(this.tripuladaURL, tripulada);
  }
}
