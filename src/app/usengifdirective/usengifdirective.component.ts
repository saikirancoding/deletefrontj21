import { Component } from '@angular/core';

@Component({
  selector: 'app-usengifdirective',
  templateUrl: './usengifdirective.component.html',
  styleUrls: ['./usengifdirective.component.css']
})
export class UsengifdirectiveComponent {
  
  count=4;
  active=false;
  changeStatus(){
    this.active=!this.active;
  }

  
}
