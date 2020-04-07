import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-skills',
  templateUrl: './modal-skills.component.html',
  styleUrls: ['./modal-skills.component.css']
})
export class ModalSkillsComponent implements OnInit {

  @Input() isSkills:boolean;
  skills:any[]=['Fron-end Angular','Javascript','Firebase','Back-End NodeJS','Elemento4','Elemento5',]
  constructor() { }

  ngOnInit() {
  }

  closeModal(e){
    this.isSkills = e;
  }

}
