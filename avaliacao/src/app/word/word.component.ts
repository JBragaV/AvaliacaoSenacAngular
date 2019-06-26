import { Component } from '@angular/core';

let numero:number;
numero = Math.floor((Math.random()*(10-1))+1);
@Component({
  selector: 'app-word',
  templateUrl: './word.component.html'
})
export class WordComponent  {
    palavra = numero
    constructor(){
      console.log(numero)
    }
}
