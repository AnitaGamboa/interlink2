import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, MinLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'registerForm',
 templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService],
})
export class RegisterComponent implements OnInit {
  createFormGroup(){
    return new FormGroup({
      geoemail: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]), 
    })
    
    
  }
  registerForm: FormGroup;
  constructor(private authSvc: AuthService, private fb: FormBuilder, private router: Router) {
    this.registerForm = this.createFormGroup();
   }

  ngOnInit(): void {
  }
  
  async OnRegister() {
    //console.log('Form ->', this.registerForm.value);
    
         if (this.registerForm.valid){
    const formvalue = this.registerForm.value;
    await this.authSvc.OnRegister(formvalue);
  }
else {
  console.log('Not valid');
}
  }
/*
  async OnRegister(): Promise <void> {
    //console.log('Form ->', this.registerForm.value);
    if (this.registerForm.valid){
    const formvalue = this.registerForm.value;
    await this.authSvc.OnRegister(formvalue);
  }
else {
  console.log('Not valid');
}
  }*/
  /*
  private initForm(): void {
    this.registerForm = this.fb.group({
      geoemail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],

    })
  }
  get geoemail(){ return this.registerForm.get('geoemail'); }
  get password(){ return this.registerForm.get('password'); }
  */
}
