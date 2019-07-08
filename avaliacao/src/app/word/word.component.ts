import { Component, OnInit } from '@angular/core';
import { WordService } from './word.service';
import { word } from './word.model';


@Component({
  selector: 'app-word',
  templateUrl: './word.component.html'
})
export class WordComponent implements OnInit {
  ngOnInit() {  
  }
  palavras = ['jocimar', 'flamengo', 'rafael', 'joão', 'louco', 'ti', 'ola', 'paralelepipedo'];
  pontuação = 10;
  jogador = [];
  
  wd:word[];
  
  soletrando = [];
  numero = Math.floor(Math.random()*(3));
  
  constructor(private Word:WordService){
    console.log(this.numero)
    this.Word.getWord(this.numero).subscribe(
      bd => this.wd = bd,
      erroDB => console.log(erroDB))
    
    console.log(this.wd)
  /*for(let i = 0; i < palavra.length; i++){
      this.soletrando.push(palavra[i])
      console.log(this.soletrando)
     }*/
    }
    
  valida(evento, l){
    if(evento == ""){
      alert("Campo Vazio")
    }else if(evento == l){
      alert("Acertouuuuu");
      this.jogador.push(l);
      console.log(this.jogador)
    }else{
      this.pontuação -=1
      alert("Errouuuuu. Sua pontuação "+this.pontuação);
    }
  }
}
