import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, authState, browserSessionPersistence, User } from '@angular/fire/auth';
import { BehaviorSubject, from, mergeMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly user$ = new BehaviorSubject<User | null>(null);

  constructor(private auth: Auth) {
    from(this.auth.setPersistence(browserSessionPersistence)).pipe(
      mergeMap(() => authState(this.auth)),
      tap((user) => {
        if (user) {
          this.user$.next(user);
        }
      }),
    ).subscribe();
  }

  onLogin() {
    const googleProvider = new GoogleAuthProvider();
    return from(signInWithPopup(this.auth, googleProvider)).subscribe(user => this.user$.next(user.user));
  }
}
