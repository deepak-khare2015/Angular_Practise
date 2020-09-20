import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployee():any[]{

    return [
      {Eno:101,Ename:"Srikanth",Salary:12345},
      {Eno:102,Ename:"Sai",Salary:46461},
      {Eno:103,Ename:"Raju",Salary:78456},
      {Eno:104,Ename:"John",Salary:14687},
      {Eno:105,Ename:"Smith",Salary:85746}

    ]
  }

}
