import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { setTimeout } from 'timers';

@Component({
  selector: 'app-modal-gear',
  templateUrl: './modal-gear.component.html',
  styleUrls: ['./modal-gear.component.css']
})
export class ModalGearComponent implements OnInit {

@Input() isAddnewgear: boolean;
  formGear: FormGroup;
  err: string;
  sPattern: any = /[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/;
  
  //styles
  gearstyle:boolean=false;
  urlstyle:boolean=false;
  manustyle:boolean=false;
  constructor(
    public fb: FormBuilder
  ) {this.buildForm();}

  ngOnInit() {
  }

  private buildForm(){
    this.formGear = this.fb.group({
      isGear: ['', [Validators.required, Validators.minLength(5)]],
      isUrl: ['', [Validators.required, Validators.pattern(this.sPattern), Validators.minLength(5)]],
      isManufacturer: ['', [Validators.required, Validators.minLength(2)]]
    });
    this.formGear.valueChanges.subscribe(res =>{
      if(res.isGear!=''){this.gearstyle=true}
      else{this.gearstyle=false}
      if(res.isUrl!=''){this.urlstyle=true}
      else{this.urlstyle=false}
      if(res.isManufacturer!=''){this.manustyle=true} 
      else{this.manustyle=false}    
      });
  }
  
  get gear() { return this.formGear.get('isGear')};
  get url() {return this.formGear.get('isUrl')};
  get manufacturer() {return this.formGear.get('isManufacturer')}

  newGear(event: Event) {
    event.preventDefault();
    if (this.formGear.valid) {
      const dataform = this.formGear.value;
      // console.log('formulario lleno: ', dataform);
    }
    this.closeModal(false);
  }
  styleGear(){
    let style={'top': this.gearstyle ? '-63px' :'', }
    return style;
  }
  styleUrl(){
    let style={'top': this.urlstyle ? '-63px' :'', }
    return style;
  }
  styleMan(){
    let style={'top': this.manustyle ? '-63px' :'', }
    return style;
  }
  

  closeModal(e) { 
    this.isAddnewgear = e ;
    this.formGear.reset();
  }

}
