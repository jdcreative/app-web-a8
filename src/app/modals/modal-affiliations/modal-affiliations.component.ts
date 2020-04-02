import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-affiliations',
  templateUrl: './modal-affiliations.component.html',
  styleUrls: ['./modal-affiliations.component.css']
})
export class ModalAffiliationsComponent implements OnInit {

  @Input() isAddnewaffltn:boolean;
  constructor() { }

  ngOnInit() {
  }
  closeModal(e){
    this.isAddnewaffltn=e;
  }

}
