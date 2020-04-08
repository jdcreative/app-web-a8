import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

import { UploadBack } from '../../services/upload-back.service';

@Component({
  selector: 'app-modalback',
  templateUrl: './modalback.component.html',
  styleUrls: ['./modalback.component.css']
})
export class ModalbackComponent implements OnInit {


  @Input() isSlctImgBck: boolean
  // @Input() isSlctImgUser: boolean
  UserId: number = 22;
  imgBucket:any;
  ulrImg: any = '../../assets/profile-demo/backDefect.jpg';
  urlFile: any = '';
croppedImage: any;
  public blobFile;
  constructor() { }

  ngOnInit() {    
  };
  ngOnChanges(){
  }
  getImgLocal(event: any):void {
    this.urlFile=event;
    // console.log(event);
  };
  imageCropped(event: ImageCroppedEvent){
    this.croppedImage = event.base64;
    // console.log(this.croppedImage);
    
  };

  addNewIamge(event:EventTarget){
    // let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    // let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    // let files: FileList = target.files;
    // var reader = new FileReader();
    // var comp = this;
    // reader.onload = function(){
    //   comp.imgBucket = reader.result;
    // };
    // var reader2 = new FileReader();
    // reader2.onloadend = function () {
    //   var res: any = this.result;
    //   var blob = new Blob([new Uint8Array(res)], { type: "image/png" });
    //   comp.blobFile = blob;
    //   UploadBack('profiles/' + comp.empresaId + "/" + comp.id, blob);
    // }; 
    // console.log('files: ', files);
    // if(files[0].type == "image/jpeg" || files[0].type == "image/png"){
    //     reader.readAsDataURL(files[0])
    //     reader2.readAsArrayBuffer(files[0]);
    // }
  }

  SlctImg() {
    this.isSlctImgBck = !this.isSlctImgBck;    
  };

}