import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationUtilService {

  constructor() {
  }

  validateName(name: string): any {
    if (name.length < 2) {
      return 'This field must be at least 2 characters'
    } else if (name.length > 40) {
      return 'This field cannot be more than 40 characters'
    } else if (!/^[a-z-'.]{2,40}$/.test(name)) {
      return `Only Alphabet and special characters like apostrophe and dash`
    } else {
      return '';
    }
  }

  validateEmail(email: string): any {
    if (/^[A-Za-z0-9._%-]{1,}@[a-zA-Z0-9]{2,}([.]{1}[a-zA-Z]{1,}|[.]{1}[a-zA-Z]{1,}[.]{1}[a-zA-Z]{1,})/.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  validatePassword(password: string) {

    let passCount = 0;

    if (password.length >= 8) {
      passCount += 20;
    }

    if (password.match(/[a-z]/)) {
      passCount += 20;
    }

    if (password.match(/[A-Z]/)) {
      passCount += 20;
    }

    if (password.match(/\d+/)) {
      passCount += 20;
    }

    if (password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {
      passCount += 20;
    }

    return passCount;

  }
}
