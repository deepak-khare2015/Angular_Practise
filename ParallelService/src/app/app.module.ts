import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';
import { CountriesService } from './countries.service';
import { CustomersService } from './customers.service';
import { HttpClientModule } from '@angular/common/http';
import { ParallelComponent } from './parallel/parallel.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    ParallelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CountriesService,CustomersService],
  bootstrap: [ParallelComponent]
})
export class AppModule { }
