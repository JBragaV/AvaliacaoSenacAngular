import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { HomeComponent } from './home/home.component';
import { WordComponent } from './word/word.component';


const router: Routes = [
    {path: '', component: HomeComponent},
    {path: 'forca', component: WordComponent},
    {path: '**', component: PaginaNaoEncontradaComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(router)],
    exports:[RouterModule]
})

export class AppRoutingModule {}