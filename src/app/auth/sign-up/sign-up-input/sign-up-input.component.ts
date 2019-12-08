import {Component, OnInit} from '@angular/core';
import {SignupModel} from '../../../model/signup-model';
import {ValidationUtilService} from '../../../util/validation-util.service';
import {Router} from '@angular/router';
import {SignUpService} from '../../sign-up.service';

@Component({
  selector: 'app-sign-up-input',
  templateUrl: './sign-up-input.component.html',
  styleUrls: ['./sign-up-input.component.scss']
})
export class SignUpInputComponent implements OnInit {

  model: SignupModel;
  submitted = false;
  showPassword = false;
  passwordStrength: number;

  colors = {
    20: 'password-strength__one',
    40: 'password-strength__two',
    60: 'password-strength__two',
    80: 'password-strength__three',
    100: 'password-strength__four'
  };


  constructor(private validationService: ValidationUtilService, private router: Router, private signUpService: SignUpService) {
  }

  ngOnInit() {
    this.model = new SignupModel();
  }

  onSignUp() {
   this.submitted = true;
   debugger;
   this.signUpService.signUp(this.model)
     .subscribe(result => {
      console.log(result);
     });
   console.log(this.model);
   // setTimeout(() => {
   //   this.submitted = false;
   //   this.router.navigate(['/dashboard']);
   // }, 5000);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  passwordIndicator(e) {
    this.passwordStrength = this.validationService.validatePassword(e.target.value);
    console.log(this.passwordStrength);
  }

}
