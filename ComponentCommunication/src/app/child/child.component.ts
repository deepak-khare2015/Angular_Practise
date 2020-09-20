import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent  {

  @Input() Eno:number;
  @Input() Ename:string;
  @Input() Salary:number;  
  

  // For @Output
  @Output() sendEmpData:EventEmitter<any>=new EventEmitter();

  onClick():any{
    this.sendEmpData.emit(this.Eno+"....."+this.Ename+"....."+this.Salary);
}
}
