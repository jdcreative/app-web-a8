import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-education',
  templateUrl: './modal-education.component.html',
  styleUrls: ['./modal-education.component.css']
})
export class ModalEducationComponent implements OnInit {

  @Input() isAddnewedu:boolean;
  constructor() { }

  ngOnInit() {
  }
  closeModal(e){
    this.isAddnewedu=e;
  }

}
