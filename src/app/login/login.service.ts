import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, UserCredential } from '@angular/fire/auth';
import { BehaviorSubject, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly user$ = new BehaviorSubject<UserCredential | null>(null);

  constructor(private auth: Auth) { }

  onLogin(){
    const googleProvider = new GoogleAuthProvider();
   from(signInWithPopup(this.auth,googleProvider))
   .subscribe((value) => {
    this.user$.next(value)
  });
  }
}
