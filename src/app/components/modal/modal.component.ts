import { Component, Input, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

import { UploadBack } from '../../services/upload-back.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() isSlctImgBck: boolean
  @Input() isSlctImgUser: boolean
  UserId: number = 22;
  
  ulrImg: any = '../../assets/profile-demo/backDefect.jpg';
  urlFile: any = '';
  public blobFile;
  constructor() { }

  ngOnInit() {
    
  };
  
  getImgLocal(event: EventTarget) {
    let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    let files: FileList = target.files;
    console.log("files: ", files);
    var reader = new FileReader();
    var comp = this;
    reader.onload = function () {
      comp.urlFile = reader.result;
    };
       
    if (files[0].type == "image/jpeg" || files[0].type == "image/png") {
      reader.readAsDataURL(files[0]);      
    }
  };

  goImgBack(event: EventTarget) {
    // let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    // let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    // let files: FileList = target.files;
    // var reader2 = new FileReader();
    // var comp = this;
    // reader2.onloadend = function () {
    //   var res: any = this.result;
    //   var blob = new Blob([new Uint8Array(res)], { type: files[0].type });
    //   comp.blobFile = blob;       
    //   UploadBack('url'+ comp.UserId , blob );     
    // };    
    // if (files[0].type == "image/jpeg" || files[0].type == "image/png") {      
    //   reader2.readAsArrayBuffer(files[0]);
    // }
    console.log(event);
  };

  SlctImg() {
    this.isSlctImgBck = !this.isSlctImgBck;    
  };

}
