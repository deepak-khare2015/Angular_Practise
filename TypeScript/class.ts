class Student{

 sid:number;
 sname:string;

 constructor(id:number,name:string){

    this.sid=id;
    this.sname=name;
}
    Display()
    {

        console.log( "StudentId is :" + this.sid + 
        " And Student Name is" + this.sname);

    }
 

}

var obj = new Student(101,"Aarav");
obj.Display();


