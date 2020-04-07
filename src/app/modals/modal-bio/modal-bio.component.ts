import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-bio',
  templateUrl: './modal-bio.component.html',
  styleUrls: ['./modal-bio.component.css']
})
export class ModalBioComponent implements OnInit {
  
  @Input() isBio:boolean;
  formBio:FormGroup;
  text:string='';
  constructor( public fb:FormBuilder) { this.buildForm() }

  ngOnInit() {
  }
  private buildForm(){
    this.formBio = this.fb.group({
      isbio:['', [Validators.required, Validators.minLength(20)]]
    })
    // this.formBio.valueChanges.subscribe(res => {

    // })
  }
  get bio(){return this.formBio.get('isbio')};
  newBio(event: Event){
    event.preventDefault();
    if(this.formBio.valid){
      const dataform = this.formBio.value;
      // console.log('form bio :', dataform);
    }
    this.closeModal(false);
  }
  
  closeModal(e){
    this.isBio=e;
    this.formBio.reset();
  }

}
