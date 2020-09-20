import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'first',
  templateUrl: './first.component.html',
  styles: [
  ]
})
export class FirstComponent implements OnInit {

  Name:string;
  Location:string;
  constructor() { 
    this.Name ="Srikanth";
    this.Location="Hyderabad";
  }

  ngOnInit(): void {
  }

}
