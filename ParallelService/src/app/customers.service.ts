import { Injectable } from '@angular/core';
import  {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor( private _http:HttpClient) { }

  getCustomers():Observable<any>{

    return this._http.get('https://www.w3schools.com/angular/customers.php');

  }
}
