import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  slectd:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  tagSect(e){
    this.slectd = e;
  }


}
