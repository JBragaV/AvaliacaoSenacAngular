import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app.routing.module';

@NgModule({
    declarations: [
        NavComponent
    ],
    imports:[
        AppRoutingModule
    ],
    exports:[
        NavComponent
    ]
})
export class NavModule{ }