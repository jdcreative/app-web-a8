import { Component, OnInit } from '@angular/core';
// import { UploadBack } from '../../services/upload-back.service'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {

  ischangePaint: boolean = false;
  isEventBck: number;
  isBck: string='';
  isSlctImgBck: boolean = false;
  isSlctImgUser: boolean = false;
  imgUser:string='../../../assets/profile-demo/profile.jfif';
  
  
  constructor() { }

  ngOnInit() {    
    this.Bck(undefined);    
  }
 

  changePaint(e) {
    // console.log(e);
    if(e == 1){ this.ischangePaint = !this.ischangePaint; }
      this.isSlctImgUser=!this.isSlctImgUser;
      // console.log(this.isSlctImgUser);
  }
  SlctImg(){
    this.isSlctImgBck = !this.isSlctImgBck;    
    // console.log('xx: ',this.isSlctImgBck);
  }
  

  Bck(event) {
    this.isEventBck = event;
    if (this.isEventBck == 4) {
      this.isBck = 'bckColor4'
    } else if (this.isEventBck == 1) {
      this.isBck = 'bckColor1'
    } else if (this.isEventBck == 2) {
      this.isBck = 'bckColor2'
    } else if (this.isEventBck == 3) {
      this.isBck = 'bckColor3'
    }else if(this.isEventBck == undefined){
      this.isBck = 'bckImage'
    }
  };
  bkcSet() { return this.isBck }; 

  changeImgUser(){
    
  }

}
