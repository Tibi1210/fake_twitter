import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {}

  login(email: string,pwd: string){
    return this.auth.signInWithEmailAndPassword(email,pwd);
  }

  signUp(email: string,pwd: string){
    return this.auth.createUserWithEmailAndPassword(email,pwd);
  }

  logout(){
    this.auth.signOut();
  }

  isUserLoggedIn(){
    return this.auth.user;
  }
  
}
