import { Component } from '@angular/core';
import { Student } from '../model/Student';
@Component({
  selector: 'app-usefordirective',
  templateUrl: './usefordirective.component.html',
  styleUrls: ['./usefordirective.component.css']
})
export class UsefordirectiveComponent {
   
  stu=[
        new Student("ajay",777777,"CSE"),
        new Student("vijay",88888,"ME"),
        new Student("Sanjay",666666,"CSE"),
        new Student("Jay",999999,"CSE")
  ];

  city=["Pune","Delhi","Lucknow","Varanasi"];
}
