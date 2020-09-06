import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
firstName:string = "Deepak";
lastName:string = "Khare";
age:number  = 36;
acceptTerms:boolean = true;
gender:string = "Male";
country:string = "India";
webLink: string = "http://www.nareshit.in";
imgUrl:string = 'assets/Aarav.jpg';

changeData(){

  this.firstName = "Naresh";
  this.lastName = "Technologies";
  this.age = 25;
  this.acceptTerms = false;
  this.gender = "Male";
  this.country = "UK";

}

}
