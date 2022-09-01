import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  authState,
  browserSessionPersistence,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly user$ = authState(this.auth);

  constructor(private auth: Auth) {
    this.auth.setPersistence(browserSessionPersistence);
  }

  onLogin(): void {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(this.auth, googleProvider);
  }
}
