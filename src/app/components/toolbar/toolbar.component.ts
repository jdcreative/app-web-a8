import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  
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

}
