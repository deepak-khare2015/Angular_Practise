import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FirstComponent } from '../first/first.component';

@Component({
  selector: 'second',
  templateUrl: './second.component.html',
  styles: [
  ]
})
export class SecondComponent implements OnInit {

  @ViewChild(FirstComponent ,{ static: true })

//@ViewChildren(FirstComponent)

  private _obj:FirstComponent;

  clickMe() {
    this._obj.Name = "Naresh";
    this._obj.Location = "Pune";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
