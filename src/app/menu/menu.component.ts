import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../geolink/service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [AuthService],
})

export class MenuComponent {
  //public isLogged = false;
 // public user: any;
 
  public user$: Observable < any>= this.authSvc.registro;

  constructor(private authSvc: AuthService, private afAuth:AngularFireAuth, private router: Router) { }


  isCollapsed = true;

  async OnLogout() {
    try {
      await this.authSvc.logout();
      this.router.navigate(['/home']);
    }
    catch (error){
      console.log(error);
    }
  }
}
