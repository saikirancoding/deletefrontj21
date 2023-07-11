import { Component } from '@angular/core';

@Component({
  selector: 'app-usengclassc',
  templateUrl: './usengclassc.component.html',
  styleUrls: ['./usengclassc.component.css']
})
export class UsengclasscComponent {
   // ob='first';
  // ob=['first','second'];
  ob={first:true,second:false};

  displayFirst(){
    this.ob.first=!this.ob.first;
  }

  displaySecond(){
    this.ob.second=!this.ob.second;
  }
}
