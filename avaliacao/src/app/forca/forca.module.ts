import { NgModule } from "@angular/core";
import { ForcaComponent } from './forca.component';
import { WordModule } from '../word/word.module';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations:[ForcaComponent],
    imports:[WordModule, CommonModule],
    exports:[ForcaComponent]
})

export class ForcaModule{}