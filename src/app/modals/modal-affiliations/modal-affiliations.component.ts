import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-affiliations',
  templateUrl: './modal-affiliations.component.html',
  styleUrls: ['./modal-affiliations.component.css']
})
export class ModalAffiliationsComponent implements OnInit {

  @Input() isAddnewaffltn:boolean;
  formAffltn: FormGroup;
  sPattern: any =/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/;
  typeAffltn:any[]=['Organization/Company', 'School']

  //styles
  styleorg:boolean=false;
  styleweb:boolean=false;
  styletype:boolean=false;

  constructor(public fb: FormBuilder) { this.buildForm() }

  ngOnInit() {
  }
  public buildForm(){
    this.formAffltn = this.fb.group({
      isORG: ['', [Validators.required, Validators.minLength(3)]],
      isWebsite: ['', [Validators.required, Validators.pattern(this.sPattern), Validators.minLength(5)]],
      isType: ['', [Validators.required]]
    });
    this.formAffltn.valueChanges.subscribe(res =>{
      if(res.isORG!=''){this.styleorg=true}
      else{this.styleorg=false}
      if(res.isWebsite!=''){this.styleweb=true}
      else{this.styleweb=false}
      if(res.isType!=''){this.styletype=true}
      else{this.styletype=false}
    })
  };

  get org(){return this.formAffltn.get('isORG')};
  get website(){return this.formAffltn.get('isWebsite')};
  get type(){return this.formAffltn.get('isType')};

  newAffltn(event: Event){
    event.preventDefault();
    if(this.formAffltn.valid){
      const dataForm = this.formAffltn.value;
      // console.log('formulario :',dataForm);
    }
    this.closeModal(false);
  };
  orgStyle(){
    let style={'top': this.styleorg ? '-63px' :'', }
    return style;
  };
  webStyle(){
    let style={'top': this.styleweb ? '-63px' :'', }
    return style;
  };
  typeStyle(){
    let style={'top': this.styletype ? '-65px' :'', }
    return style;
  };
  closeModal(e){
    this.isAddnewaffltn=e;
    this.formAffltn.reset();
  }

}
