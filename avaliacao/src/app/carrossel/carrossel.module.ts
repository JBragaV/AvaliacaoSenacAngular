import { NgModule } from '@angular/core';
import { CarrosselComponent } from './carrossel.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photos/photo.module';

@NgModule({
    declarations: [
        CarrosselComponent
    ],
    imports:[
        CommonModule,
        PhotoModule
    ],
    exports: [
        CarrosselComponent
    ]
})

export class CarrosselModule {}