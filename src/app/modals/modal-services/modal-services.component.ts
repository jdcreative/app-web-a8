import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-services',
  templateUrl: './modal-services.component.html',
  styleUrls: ['./modal-services.component.css']
})
export class ModalServicesComponent implements OnInit {

  @Input() isAddservices: boolean;
  formServ: FormGroup;
  units:any[]=['/ hour','/ day','/ song','/ project'];
  currs:any[]=['USD','COP','MEX','EUR','CAD','GBP'];
  //styles
  isservStyle:boolean=false;
  isdescStyle:boolean=false;
  ispriceStyle:boolean=false;
  iscurrStyle:boolean=false;
  isunitStyle:boolean=false;
  constructor(public fb: FormBuilder) { this.buildForm() }

  ngOnInit() {
  }
  buildForm() {
    this.formServ = this.fb.group({
      isServiceName: ['', [Validators.required, Validators.minLength(3)]],
      isDescription: ['', [Validators.required, Validators.minLength(5)]],
      isPrice: ['', [Validators.required, Validators.minLength(1)]],
      isCurrency: ['', [Validators.required]],
      isUnit: ['', [Validators.required]]
    });
    this.formServ.valueChanges.subscribe(res => {
      if(res.isServiceName!=''){this.isservStyle=true}
      else{this.isservStyle=false};
      if(res.isDescription!=''){this.isdescStyle=true}
      else{this.isdescStyle=false};
      if(res.isPrice!=''){this.ispriceStyle=true}
      else{this.ispriceStyle=false};
      if(res.isCurrency!=''){this.iscurrStyle=true}
      else{this.iscurrStyle=false};
      if(res.isUnit!=''){this.isunitStyle=true}
      else{this.isunitStyle=false};
    });
  }
  get service(){return this.formServ.get('isServiceName')};
  get description(){return this.formServ.get('isDescription')};
  get price(){return this.formServ.get('isPrice')};
  get currency(){return this.formServ.get('isCurrency')};
  get unit(){return this.formServ.get('isUnit')};

  newServ(event: Event) {
    event.preventDefault();
    if (this.formServ.valid) {
      const dataform = this.formServ.value;
      // console.log('form serv :', dataform);
    };
    this.closeModal(false);
  }
  styleServ() {
    let style={'top': this.isservStyle ? '-63px' :'', }
    return style;
  }
  styleDesc(){
    let style={'top': this.isdescStyle ? '-63px' :'', }
    return style;
  }
  stylePrice(){
    let style={'top': this.ispriceStyle ? '-63px' :'', }
    return style;
  }
  styleCurrs(){
    let style={'top': this.iscurrStyle ? '-65px' :'', }
    return style;
  }
  styleUnit(){
    let style={'top': this.isunitStyle ? '-65px' :'', }
    return style;
  }
  closeModal(e) {
    this.isAddservices = e;
    this.formServ.reset();
  }

}
