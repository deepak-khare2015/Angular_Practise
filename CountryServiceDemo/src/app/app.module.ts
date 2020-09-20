import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountriesService } from './countries.service';
import { HttpClientModule } from '@angular/common/http'

//for pagination
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    //for pagination
    NgxPaginationModule
  ],
  providers: [CountriesService],
  bootstrap: [CountriesComponent]
})
export class AppModule { }
