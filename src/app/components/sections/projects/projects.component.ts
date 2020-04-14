import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  stateUser:boolean=false;
  items:any[]=[{
    'title':'Private Nelly concert in washington',
    'subtitle':'Lead event production',
    'tag':'Siloutte Group',
    'likes':17,
    'follow':'7'
  },{
    'title':'Event Production Website',
    'subtitle':'Design, management and development',
    'tag':'Coalition Culture',
    'likes':17,
    'follow':'7'
  },{
    'title':'Product video',
    'subtitle':'Creative production',
    'tag':'Stereotheque',
    'likes':17,
    'follow':'7'
  },{
    'title':'Concert GoColombia',
    'subtitle':'Lead event production',
    'tag':'Stereotheque',
    'likes':17,
    'follow':'7'
  },];
  constructor() { }

  ngOnInit() {
  }

}
