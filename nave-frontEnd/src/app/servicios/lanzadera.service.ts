import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lanzadera } from '../modelo/lanzadera';

@Injectable({
  providedIn: 'root'
})
export class LanzaderaService {

  lanzaderaURL = environment.apiResrURL + '/lanzadera';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Lanzadera[]> {
    return this.httpClient.get<Lanzadera[]>(this.lanzaderaURL);
  }
 
  //Se crea metodo de detalle para visualizar la informacion de las naves
  public detail(id: number): Observable<Lanzadera> {
    return this.httpClient.get<Lanzadera>(this.lanzaderaURL + `/${id}`);
  }

  //Se crea metodo para crear las naves
  public create(lanzadera : Lanzadera): Observable<any> {
    return this.httpClient.post<any>(this.lanzaderaURL, lanzadera);
  }

}
