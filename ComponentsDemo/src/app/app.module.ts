import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FirstComponent} from './first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import {HomeModule} from './Home.module';

@NgModule({
  declarations: [
   FirstComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule  
  ],
  providers: [],
  bootstrap: [FirstComponent]
})
export class AppModule { }
