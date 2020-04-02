import { Component, OnInit, Input } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-modal-gear',
  templateUrl: './modal-gear.component.html',
  styleUrls: ['./modal-gear.component.css']
})
export class ModalGearComponent implements OnInit {

  gear: any;
  err: string;
  @Input() isAddnewgear: boolean;
  constructor() { }

  ngOnInit() {
  }

  newGear(e) {
    if (this.gear === undefined || this.gear === '') {
      this.err = 'select a gear'
    } else {
      this.closeModal(false);
      console.log('gear :', this.gear);
    }
  };
  closeModal(e){this.isAddnewgear = e}

}
