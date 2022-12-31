import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nave } from '../modelo/nave';

@Injectable({
  providedIn: 'root'
})
export class NaveService {

  //se crea el atributo de filtro
  filtroNave!:'';
  
  naveURL = environment.apiResrURL + '/nave';

  

  constructor(private httpClient: HttpClient) { }

  

  //Se realiza el metodo para listar
  public list(): Observable<Nave[]> {
    return this.httpClient.get<Nave[]>(this.naveURL);
  }

  //Se crea metodo de detalle para visualizar la informacion de las naves
  public detail(id: number): Observable<Nave> {
    return this.httpClient.get<Nave>(this.naveURL + `/${id}`);
  }

  //Se crea metodo para crear las naves
  public create(nave : Nave): Observable<any> {
    return this.httpClient.post<any>(this.naveURL, nave);
  }


}
