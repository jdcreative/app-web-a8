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
  isBio = false;
  isSkills = false;
  //industry
  industry:string='Businnes & Mngmt';
  industries:any[]=['Live Entertainment','Artist & Djs', 'Business & Mngmt'];
  industrySlcted:any;
  //focus
  focus:string='Event Producer';
  focucing:any[]=['Audio Enginnering','Instrument Tech', 'State Manager & Roadle'];
  focusSlcted:any;
  editMode:boolean= false;
  
  constructor() { }

  ngOnInit() {
  }

  
  editAbout(){
    this.editMode=!this.editMode
  }
  openModalbio(){
    if(this.editMode==true)
    {this.isBio=!this.isBio;}
  }
  seeMoreskills(){
    this.isSkills=!this.isSkills
  }
}
