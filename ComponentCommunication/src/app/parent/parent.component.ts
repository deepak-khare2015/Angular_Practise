import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent implements OnInit {

  public Employees: Array<any> = [
    {Eno:101,Ename:"Srikant",Salary:45000},
    {Eno:102,Ename:'Raju',Salary:25632},
    {Eno:103,Ename:'Naresh',Salary:45874},
    {Eno:104,Ename:'Diyansh',Salary:45875},
    {Eno:105,Ename:'Cherry',Salary:52365}
  ];

  //public Emp:any;
  myFun(data){
    // this.Emp = data;
     console.log(data);
   }
  constructor() { }

  ngOnInit(): void {
  }

}
