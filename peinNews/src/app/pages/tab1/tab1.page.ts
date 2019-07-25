import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Article[] = [];

  constructor( private noticiasService: NoticiasService) {}

  ngOnInit() {

    // LLAMADA AL SERVICIO QUE TRAE EL TOP HEADLINE E IMPRESIÓN POR CONSOLA
    this.noticiasService.getTopHeadlines()
      .subscribe( resp => {
        console.log('noticias', resp);
        // tslint:disable-next-line: max-line-length
        this.noticias.push( ...resp.articles); // CON EL OPERADOR "..." PODEMOS GUARDAR EN EL ARRAY TODOS LOS OBJETOS DE MANERA INDEPENDIENTE 
      });
  }

}
