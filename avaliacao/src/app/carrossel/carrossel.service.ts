import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Photo } from './carrossel.model';


const httpOptions = {headers: new HttpHeaders({'Content-Type' : "application/json;charset=utf-8"})}
const url_api = "http://localhost:3000"
@Injectable({ providedIn: 'root'})
export class CarroselService {

    //injeção de dependência
    constructor(private http: HttpClient) {}
                //public ou private indica que quer tornar o http como propriedade da classe.
    //Get requeste
    listasPhotos(){
        return this.http.get<Photo[]>(`${url_api}/Photos`, httpOptions);
    }
}