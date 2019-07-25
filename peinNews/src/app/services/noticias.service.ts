import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient ) { }


  // SERVICIO PARA LLAMAR EL TOP HEADLINES
  getTopHeadlines() {
    // tslint:disable-next-line: max-line-length
    return this.http.get<RespuestaTopHeadlines>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=de1246f07c4346dc841d19b49d28a8fc');
  }
}
