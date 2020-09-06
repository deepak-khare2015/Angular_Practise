import {NgModule} from '@angular/core';
import {SecondComponent} from './second/second.component';
import {ThirdComponent} from './third/third.component';

@NgModule({

    //Components has to be register here
declarations:[

    SecondComponent,
    ThirdComponent
],

 //Importing Modules
imports:[],

 //Export is used to specify the components to export
exports:[

    SecondComponent,
    ThirdComponent
],

  //Providers: Used to register angular services
  providers:[]

})

export class HomeModule{

}