import { Component, OnInit} from '@angular/core';
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
  }
  drpUser(){
    this.dropDownUser=!this.dropDownUser;
    // setTimeout(() => {
    //   this.dropDownUser=false;
    // }, 1000);
  }
  drpMenu(){
    this.dropDownMenu=!this.dropDownMenu;    
  }
}
