//import statement
import {Component} from '@angular/core';


//Decorator
@Component({

    selector:'first',
    templateUrl:'./first.component.html',
    styleUrls:['./first.component.css']

})

//export the class
export class FirstComponent {
    name:string =  "Deepak Khare";

}