import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-boxes',
  templateUrl: './profile-boxes.component.html',
  styleUrls: ['./profile-boxes.component.css']
})
export class ProfileBoxesComponent implements OnInit {

  unit:any;
  gear:any='Gretsch Brooklyn Micro Kit';
  Manufacturer:any;
  isEditEdu:boolean=false;
  isEditAffltn:boolean=false;
  isEditGear:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  searchGear(){
    this.isEditGear=!this.isEditGear;
  };
  searchAffiliation(){
    this.isEditAffltn=!this.isEditAffltn;
  };
  searchEducation(){
    this.isEditEdu=!this.isEditEdu;
  };

}
