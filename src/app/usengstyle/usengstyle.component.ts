import { Component } from '@angular/core';

@Component({
  selector: 'app-usengstyle',
  templateUrl: './usengstyle.component.html',
  styleUrls: ['./usengstyle.component.css']
})
export class UsengstyleComponent {
  ob={color:'red', backgroundColor:'aqua'};

  changeStatus(){
    this.ob.backgroundColor='purple';
  }
}
