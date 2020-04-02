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
  isUserTipe:any;
  iseditBanner:boolean=false
  ulrImg: any = '../../assets/profile-demo/BckDefect.jpg';
  imgUser: any = '../../assets/profile-demo/profile.jfif';
  
  
  constructor() { }

  ngOnInit() {    
      
  }
  
  SlctImg(){
    this.isSlctImgBck = !this.isSlctImgBck;        
  }  
  

}
