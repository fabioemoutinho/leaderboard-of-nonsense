import { Component, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  readonly user$ = this.loginService.user$;

  constructor(
    protected loginService: LoginService
  ){

  }

  onLogin(){
    this.loginService.onLogin();
  }
}
