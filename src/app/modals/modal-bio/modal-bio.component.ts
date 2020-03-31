import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-bio',
  templateUrl: './modal-bio.component.html',
  styleUrls: ['./modal-bio.component.css']
})
export class ModalBioComponent implements OnInit {

  @Input() isBio:boolean;
  text:string='';
  constructor() { }

  ngOnInit() {
  }
  ngOnChange(){
    this.text;
    console.log(this.text);
  }
  closeModal(){
    this.isBio=!this.isBio;
  }

}
