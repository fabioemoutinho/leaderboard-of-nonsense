import { Component, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { LoginService } from './login.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule,RouterModule ],
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
