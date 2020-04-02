import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

  avatar: any = ' ';
  aBComplete: boolean = false;
  aBEditMode: boolean = false;
  aBNotConn: boolean = false;
  aBConn: boolean = false;
  constructor() { }

  ngOnInit() {
    this.userType();
  }
  userType() {
    if (this.avatar == 'A') {
      this.aBComplete = true;
      // console.log(this.aBComplete);
    } else if (this.avatar == 'B') {
      this.aBEditMode = true;
      // console.log(this.aBEditMode);
    } else if (this.avatar == 'C') {
      this.aBNotConn = true;
      // console.log(this.aBNotConn);
    } else {
      this.aBConn = true;
      // console.log(this.aBConn);
    }
  }


}
