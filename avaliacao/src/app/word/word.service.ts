import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { word } from './word.model';


const httpOptions = {headers: new HttpHeaders({'Content-Type' : "application/json;charset=utf-8"})}
const url_api = "http://localhost:3000"
@Injectable({ providedIn: 'root'})


export class WordService{

    constructor(private http:HttpClient){}

    getWord(numero:number){
        return this.http.get<word[]>(`${url_api}/word/${numero}`, httpOptions)
    }    
}