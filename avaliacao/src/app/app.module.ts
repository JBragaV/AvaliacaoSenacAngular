import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//Importações pessoais
import { NavModule } from './navbar/nav.module';
import { CarrosselModule } from './carrossel/carrossel.module';
import { PhotoModule } from './photos/photo.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavModule,
    CarrosselModule,
    PhotoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
