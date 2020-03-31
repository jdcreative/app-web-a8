import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {

  text:string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, 
  nisi nostrum fugit inventore nemo quidemfacere porro ut explicabo architecto consequuntur 
  odio perspiciatis eum laboriosam asperiores eius ea atque ab?.chitecto consequuntur 
  odio perspiciatis eum laboriosam asperiore,chitecto consequuntur odio perspiciatis eum 
  laboriosam asperiore`;

  show = false;
  industry:string='Businnes & Mngmt';
  focus:string='Event Producer';
  editMode:boolean= false;
  
  constructor() { }

  ngOnInit() {
  }

  seeMoreskills(){}
}
