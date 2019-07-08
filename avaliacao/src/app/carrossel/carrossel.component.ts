import { Component } from '@angular/core';
import { CarroselService } from './carrossel.service';
import { Photo } from './carrossel.model';

@Component({
    selector: "app-carrossel",
    templateUrl: "./carrossel.component.html"
})

export class CarrosselComponent {

    Photos:Photo[];

    constructor(private CarroselService: CarroselService){

        CarroselService.listasPhotos().subscribe(
            db => this.Photos = db
        )
    }
}