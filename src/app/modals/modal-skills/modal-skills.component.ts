import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-skills',
  templateUrl: './modal-skills.component.html',
  styleUrls: ['./modal-skills.component.css']
})
export class ModalSkillsComponent implements OnInit {

  @Input() isSkills:boolean;
  constructor() { }

  ngOnInit() {
  }

  closeModal(e){
    this.isSkills = e;
  }

}
