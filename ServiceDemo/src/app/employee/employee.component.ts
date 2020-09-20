import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styles: [
  ]
})
export class EmployeeComponent  {
Employees:any[]

  constructor(private _serv : EmployeeService  ) {
    //this.Employees = this._serv.getEmployee();
   }

  ngOnInit(): void {

    this.Employees = this._serv.getEmployee();
  }

}
 