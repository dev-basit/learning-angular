import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { UsernameValidators } from './username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl(
        '',
        [
          Validators.minLength(3),
          Validators.required,
          UsernameValidators.cannotContainSpace,
        ],
        UsernameValidators.shouldBeUnique
      ),
      password: new FormControl('', Validators.required),
    }),
  });

  get username(): any {
    // if full path ("account.username" instead of "username") is satisfied then you can use only "username" and get access to properties
    // otherwise you have to use "form.get('account.username')" in html page to get access to
    return this.form.get('account.username');
  }

  get password(): any {
    return this.form.get('account.password');
  }

  login() {
    this.form.setErrors({
      invalidLogin: true,
      thisSmells: false,
    });

    console.log('Logging In...');
  }
}
