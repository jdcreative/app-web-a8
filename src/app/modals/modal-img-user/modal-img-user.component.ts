import { Component, OnInit, Input } from '@angular/core';
import { ImageCroppedEvent, base64ToFile } from 'ngx-image-cropper';
// import {  } from '';

@Component({
  selector: 'app-modal-img-user',
  templateUrl: './modal-img-user.component.html',
  styleUrls: ['./modal-img-user.component.css']
})
export class ModalImgUserComponent implements OnInit {

  @Input() isSlctImgUser:boolean;
  urlFile:any='';
  urlImgUser:any='../../assets/profile-demo/avatar.jpg';
  croppedImageUser: any;
  constructor() { }

  ngOnInit() {
  }

  getImgLocal(event: any):void{
    this.urlFile=event;
    // console.log(event);
  }
  imageCropped(event: ImageCroppedEvent){
    this.croppedImageUser=event.base64;
    // console.log(event, base64ToFile(event.base64));
    
  }
  slctImgUser(){
    this.isSlctImgUser=!this.isSlctImgUser;
  }

}
