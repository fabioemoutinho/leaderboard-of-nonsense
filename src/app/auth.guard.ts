import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';

import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> {
    return this.loginService.user$.pipe(
      map((user) => {
        if (!user) {
          return this.router.parseUrl('');
        }
        return true;
      })
    );
  }
}
