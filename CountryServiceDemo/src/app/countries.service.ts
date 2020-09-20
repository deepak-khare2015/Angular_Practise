
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import  {Observable } from 'rxjs';

@Injectable({

    providedIn: 'root'
})       

export  class CountriesService  {

    //inject HttpClient class
    constructor(private http:HttpClient){

    }

    public getCountries():Observable<any>
    {

        return this.http.get('http://restcountries.eu/rest/v2/all');
    }
}