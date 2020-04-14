import { Component, OnInit, HostListener} from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  dropDownUser: boolean = false;
  dropDownNotify: boolean = false;
  dropDownMenu: boolean = false;
  @HostListener('document:click', ['$event']) clickout(e) {     
    if( e.x <=167 || e.y >=284){if(this.dropDownMenu==true){this.dropDownMenu=false}}
    if( e.x <=1083 || e.y >=198){if(this.dropDownUser==true){this.dropDownUser=false}}
    if( e.x >=1281 || e.y >=198){if(this.dropDownUser==true){this.dropDownUser=false}}
    if( e.x <=1022 || e.y >=145){if(this.dropDownNotify==true){this.dropDownNotify=false}}
    if( e.x >=1224 || e.y >=145){if(this.dropDownNotify==true){this.dropDownNotify=false}}
  }
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
  }
  home(){
    this.router.navigate(['profiles']);
  }
  settingUser(){
    this.router.navigate(['settings']);
  }
  logout(){
    // localStorage.removeItem("currentUser");
    alert('se a deslogueado.');
    // setTimeout(()=>{
    //   window.location.href = "../../Home/dist/";
    // },1000);
  }



  drpNotify(){
    this.dropDownNotify=!this.dropDownNotify;
    if(this.dropDownUser==true){this.dropDownUser=false;}
  }
  drpUser(){
    this.dropDownUser=!this.dropDownUser;
    if(this.dropDownNotify==true){this.dropDownNotify=false;}
  }
  drpMenu(){
    this.dropDownMenu=!this.dropDownMenu;    
  }
}
