import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';
import { RouterModule } from '@angular/router';
import { mergeMap, tap, of } from 'rxjs';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  readonly user$ = this.loginService.user$;

  constructor(
    protected loginService: LoginService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user$
      .pipe(
        mergeMap((firebaseUser) => {
          console.log('firebaseUser', firebaseUser);
          if (!firebaseUser) {
            return of();
          }
          return this.userService.getUser(firebaseUser.uid).pipe(
            tap((user) => {
              console.log('user', user);
              if (!user) {
                this.userService.addUser(firebaseUser.uid);
              }
            })
          );
        })
      )
      .subscribe();
  }

  onLogin() {
    this.loginService.onLogin();
  }
}
