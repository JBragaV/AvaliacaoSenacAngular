import { NgModule } from '@angular/core';
import { CarrosselComponent } from './carrossel.component';

@NgModule({
    declarations: [
        CarrosselComponent
    ],
    exports:[
        CarrosselComponent
    ]
})

export class CarrosselModule {}