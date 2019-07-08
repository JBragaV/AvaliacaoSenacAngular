import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordComponent } from './word.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations:[
        WordComponent
    ],
    imports:[
        CommonModule,
        HttpClientModule
    ],
    exports:[
        WordComponent
    ]
})

export class WordModule {}