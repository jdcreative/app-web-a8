import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-boxes',
  templateUrl: './profile-boxes.component.html',
  styleUrls: ['./profile-boxes.component.css']
})
export class ProfileBoxesComponent implements OnInit {

  units:any[]=['/ hour','/ day','/ song','/ project'];
  currency:any[]=['USD','COP','MEX','EUR','CAD','GBP'];
  gear:any='Gretsch Brooklyn Micro Kit';
  Manufacturer:any;
  //edit in target
  isEditServ:boolean=false;
  isEditEdu:boolean=false;
  isEditAffltn:boolean=false;
  isEditGear:boolean=false;
  //modals
  isAddnewgear:boolean=false;
  isAddnewaffltn:boolean=false;
  isAddnewedu:boolean=false;
  isAddservices:boolean=false; 
  constructor() { }

  ngOnInit() {
  }
  //edit in target
  searchService(){
    this.isEditServ=!this.isEditServ;
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
  //modals
  addNewService(){
    this.isAddservices=!this.isAddservices;
  }
  addNewGear(){
    this.isAddnewgear=!this.isAddnewgear;
  }
  addNewAffltn(){
    this.isAddnewaffltn=!this.isAddnewaffltn;
  }
  addNewedu(){
    this.isAddnewedu=!this.isAddnewedu;
  }
}
