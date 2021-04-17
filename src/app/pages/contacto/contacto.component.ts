import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataServices } from 'src/app/services/datacontact.services';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers: [DataServices]
})
export class ContactoComponent implements OnInit {
  contactoForm = new  FormGroup
  ({
    nombre:new FormControl(''),
    apellido:new FormControl(''),
    email:new FormControl(''),
    pais:new FormControl(''),
    mensaje:new FormControl(''),
      });
      
/*
private isEmail = /^[a-zA-Z]*$/;
*/

  constructor(private fb: FormBuilder, private dataSvc: DataServices) { }

  ngOnInit(): void {
    this.initForm();
  }

  async onSave(): Promise<void> {
    if (this.contactoForm.valid){
     // console.log(this.contactoForm.value);
     const formvalue = this.contactoForm.value;
    await this.dataSvc.onSaveContacto(formvalue);
    }
    else{
      console.log ('No válido');
    }
  }
isValidField(field : string) : string {
const validatedField = this.contactoForm.get(field);
return (! validatedField?.valid && validatedField?.touched)
? 'is-invalid': validatedField?.touched ? 'is-valid' : '' ;

}
  
notRequiredValues(field:string):string{
  return this.contactoForm.get(field)?.value ? 'is-valid' : '';
}

private initForm(): void {
this.contactoForm = this.fb.group({
  nombre: ['', [Validators.required]],
 apellido: [''],
  email: ['', [Validators.required, Validators.email, /*Validators.pattern(this.isEmail)*/]],
  pais: ['', Validators.required],
  mensaje: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(230)]],


})
}
}
function isValidField(field: any, String: StringConstructor) {
  throw new Error('Function not implemented.');
}

function field(field: any, String: StringConstructor) {
  throw new Error('Function not implemented.');
}

