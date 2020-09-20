import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'series',
  templateUrl: './series.component.html',
  styles: [
  ]
})
export class SeriesComponent implements OnInit {

  countries: any;
  customers: any;

  constructor(private _serv1: CustomersService, private _serv2: CountriesService) { }

  ngOnInit(): void {
    this._serv1.getCustomers().subscribe((posRes) => {
      this.customers = posRes;

      this._serv2.getCountries().subscribe((posRes) => {
        this.countries = posRes
      },
        (errRes) => {
          console.log('Error occoured while processing the request');
        })

    }, (errRes) => {
      console.log('Error occoured while processing the request');


    })

  }

}
