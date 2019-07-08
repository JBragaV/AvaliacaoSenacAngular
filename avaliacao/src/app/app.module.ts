import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//Acima importações do @angular
//importações do component angular
import { AppComponent } from './app.component';

//Importações pessoais
import { NavModule } from './navbar/nav.module';
import { PhotoModule } from './photos/photo.module';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeModule } from './home/home.module';
import { WordModule } from './word/word.module';


@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    NavModule,
    PhotoModule,
    AppRoutingModule,
    HomeModule,
    WordModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
