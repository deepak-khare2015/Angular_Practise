import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { CountriesService } from '../countries.service';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'parallel',
  templateUrl: './parallel.component.html',
  styles: [
  ]
})
export class ParallelComponent implements OnInit {

  countries:any;
  customers:any;

  constructor(private _serv1: CustomersService, private _serv2: CountriesService) { }

  ngOnInit(): void {

    Observable.forkJoin([
      this._serv1.getCustomers(),
      this._serv2.getCountries()
    ]).subscribe((posRes) => {
      this.customers= posRes[0];
      this.countries = posRes[1];

    }, (errRss) => {
      console.log('error occoured')
    })
  }

}
