import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }

  // SERVICIO PARA MONTAR LA PETICIÓN A LA API
  private ejecutarQuery<T>( query: string ) {

    query = apiUrl + query;

    return this.http.get<T>( query, { headers } );
  }

  // SERVICIO PARA LLAMAR EL TOP HEADLINES
  getTopHeadlines() {
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=co`);
  }

  getTopHeadlinesCategory( categoria: string) {
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=co&category=${ categoria }`);
  }
}
