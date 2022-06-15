import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marcador } from '../interfaces/marcador.interface';

@Injectable({
  providedIn: 'root'
})
export class OpenLayerService {

  private _url: string = "http://localhost:8080/api/"

  constructor( private http: HttpClient ) { }

  getSugerencias( termino: string ) {
    return this.http.get<Marcador[]>(`${this._url}name?name=${termino}`);
  }

  getMarcador( id: number ) {
    return this.http.get<Marcador>(`${this._url}marcador/${id}`);
  }
}
