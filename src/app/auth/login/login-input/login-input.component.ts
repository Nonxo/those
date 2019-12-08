import { Component, OnInit } from '@angular/core';
import {UserSignIn} from '../../../model/user-sign-in';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.scss']
})
export class LoginInputComponent implements OnInit {

  model: UserSignIn;
  submitted = false;
  showPassword = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.model = new UserSignIn();
  }

  onLogin() {
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
      this.router.navigate(['/dashboard']);
    }, 5000);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

}
