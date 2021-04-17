import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { promise } from 'selenium-webdriver';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup
  ({
    geoemail: new FormControl(''),
    password: new FormControl(''),
  })
    

  constructor(private fb: FormBuilder, private authSvc: AuthService, private router:Router) { }


   ngOnInit(): void {}

 async onLogin(){
    const {geoemail, password} = this.loginForm.value;
  try {
    const user= await this.authSvc.login(geoemail, password);
    if (user){
      // Redirecciona a Compra
this.router.navigate(['/compra'])
    }
    }
    catch (error){console.log(error)}
  }
  
/*
  async OnLogin(geoemail:string, password:string): Promise<any> {
    // console.log('Form ->', this.loginForm.value);
    if (this.loginForm.valid) {
      const formvalue = this.loginForm.value;
      await this.authSvc.onLogin(geoemail, password);
    }
    else {
      console.log('Credenciales inválidas')
    }
  }*/
//revisar esto porque no es logincomponent
   /*private initForm():  void{
      this.loginForm = this.fb.group({
        geoemail: ['', [Validators.required, Validators.email]],
        passord: ['', Validators.required],

      })

    }*/
  }