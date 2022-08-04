import { Component, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { from } from 'rxjs';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    protected auth: Auth
  ){

  }

  onLogin(){
    const googleProvider = new GoogleAuthProvider()
   from(signInWithPopup(this.auth,googleProvider))
   .subscribe(console.log)
  }
}
