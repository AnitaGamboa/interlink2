import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from "rxjs";
//import { LoginRoutingModule } from '../login/login-routing.module';


export interface Registro {
  geoemail: string;
  password: string;
  id: string;
  datos: string;
}

@Injectable()
export class AuthService {
  registro!: Observable <Registro>;
 
 private registroCollection: AngularFirestoreCollection<Registro>;
  constructor (private  afs: AngularFirestore, private afAuth:AngularFireAuth) {
  this.registroCollection = afs.collection<Registro>('registroweb');

  }
  

  async OnRegister(registerForm: Registro){
    return new Promise(async (resolve, rejects) => {
      try {
        const id = this.afs.createId();
        const datos = { ...registerForm };
        const result = this.registroCollection.doc(id).set(datos);
        resolve(result);
      }
    catch (error) {
      rejects(error.message);
    }
  });
  }

  async login(geoemail: string, password: string ): Promise <any>{
    try {
      const result =  await this.afAuth.signInWithEmailAndPassword(
           geoemail,
           password
           );
      return result;

    }
    catch (error) {
      console.error();
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut() ; 
    }
    catch (error) {
      console.error();
    }
  }
   

}