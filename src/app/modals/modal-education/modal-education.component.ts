import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-education',
  templateUrl: './modal-education.component.html',
  styleUrls: ['./modal-education.component.css']
})
export class ModalEducationComponent implements OnInit {

  formEdu: FormGroup;
  sPattern:any=/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/;
  //styles
  orgstyle:boolean=false;
  webstyle:boolean=false;


  @Input() isAddnewedu:boolean;
  constructor(public fb:FormBuilder) {this.buildForm(); }

  ngOnInit() {
  }
  buildForm(){
    this.formEdu = this.fb.group({
      isOrg:['', [Validators.required, Validators.minLength(3)]],
      isWebsite:['', [Validators.required, Validators.minLength(5), Validators.pattern(this.sPattern)]]
    })
    this.formEdu.valueChanges.subscribe(res => {
      if(res.isOrg!=''){this.orgstyle=true}
      else{this.orgstyle=false}
      if(res.isWebsite!=''){this.webstyle=true}
      else{this.webstyle=false}
    })
  };

  newEdu(event: Event){
    event.preventDefault();
    if(this.formEdu.valid){
      const dataform = this.formEdu.value;
      // console.log('formulario edu: ', dataform);
    }
    this.closeModal(false);
  };

  get org(){return this.formEdu.get('isOrg')};
  get website(){return this.formEdu.get('isWebsite')};

  styleOrg(){
    let style={'top': this.orgstyle ? '-63px' :'', }
    return style;
  }
  styleWeb(){
    let style={'top': this.webstyle ? '-63px' :'', }
    return style;
  }

  closeModal(e){
    this.isAddnewedu=e;
    this.formEdu.reset();
  }

}
