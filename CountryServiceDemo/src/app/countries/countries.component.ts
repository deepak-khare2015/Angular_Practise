import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styles: [
  ]
})
export class CountriesComponent implements OnInit {

  countries: Array<any>;  

  // or pagination
  totalRecords:number;
  page:number=1;  

  constructor(private _serv: CountriesService) {
    this.countries = new Array<any>();
  }

  ngOnInit(): void {
    this._serv.getCountries().subscribe((responce) => {
      this.countries = responce;

      //for pagination
     this.totalRecords= this.countries.length;
    },

      (errRes: HttpErrorResponse) => {

        if (errRes.error instanceof Error) {
          console.log('client side error');

        }
        else {
          console.log('server side error');

        }
      })
  }
}


