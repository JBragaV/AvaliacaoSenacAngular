import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html'
})
export class WordComponent {

  @Input() id;
  @Input() palavra;
}

