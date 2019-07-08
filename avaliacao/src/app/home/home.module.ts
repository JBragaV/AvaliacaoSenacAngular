import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CarrosselModule } from '../carrossel/carrossel.module';


@NgModule({
    declarations:[
        HomeComponent,
    ],
    imports:[
        CarrosselModule
    ],
    exports:[]
})

export class HomeModule {}