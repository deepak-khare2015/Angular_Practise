import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [SecondComponent]
})
export class AppModule { }
