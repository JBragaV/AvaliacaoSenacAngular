import { Component } from '@angular/core';
import { Photos } from './photos/photo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Avaliação Jocimar';
  
  photo:Photos[] = [
    {
      id:1,
      url:"https://www.horoscopovirtual.com.br/imagem/artigos/artigos/-453.jpg",
      titulo:"Mitologia indígena Brasileira",
      descricao:"Antes da chegada dos europeus que colonizaram o Brasil, as mais de mil tribos indígenas que viviam aqui já cultuavam uma série de divindades e mitos a respeito da criação da vida.",
      alt:"Indio"
    }
  ]
}
