import { Component, OnInit } from '@angular/core';
import { WordService } from '../word/word.service';
import { word } from '../word/word.model';

@Component({
    selector:"app-forca",
    templateUrl:"forca.component.html"
})

export class ForcaComponent implements OnInit {
    valor:string
    wd:word[];
    soletrando:string[];
    pontuacao = 10;
    jogador = [];
    
    constructor(private word:WordService){}
    
    ngOnInit(): void {
        this.getDataUsingSubscribe()

    }
    async getDataUsingSubscribe() {
        await this.word.getWord(Math.floor(Math.random()*5+1)).toPromise().then(
            wordDB => {
                this.wd = wordDB;
        });
        this.soletrando=this.wd[0].palavra.split('') 
        console.log(this.soletrando)
        console.log(this.valor)
    }

    valida(evento, l){
        if(evento == ""){
          alert("Campo Vazio")
        }else if(evento == l){
          alert("Acertouuuuu");
          this.jogador.push(l);
          if(this.jogador.length == this.soletrando.length){
              alert(`Acertou!!! A palavra era ${this.wd[0].palavra} e sua pontuação final foi de ${this.pontuacao} pontos`)
              window.location.reload()
          }
          
        }else{
          this.pontuacao -=1
          alert("Errouuuuu. Sua pontuação "+this.pontuacao);
        }
    }
}