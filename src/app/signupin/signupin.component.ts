import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { SignupinService } from './signupin.service';

@Component({
  selector: 'app-signupin',
  templateUrl: './signupin.component.html',
  styleUrls: ['./signupin.component.scss'],
})
export class SignupinComponent implements OnInit {
  logIn: boolean = true;
  register: boolean = false;
  form!: FormGroup;
  formLogin!: FormGroup;

  constructor(private auth: SignupinService) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });

    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });

    this.form.valueChanges.subscribe((value) => console.log(value));
    this.formLogin.valueChanges.subscribe((value) => console.log(value));
  }

  loginIsActive() {
    // console.log((this.register = !this.register));
    this.register = false;
    this.logIn = true;
  }

  registerIsActive() {
    // console.log((this.register = !this.register));
    this.register = true;
    this.logIn = false;
  }

  onSubmit() {
    this.auth.register(this.form.value).subscribe(
      () => {
        console.log('register! :)');
        console.log(this.form.value);
      },
      (error) => {
        console.warn(error);
      }
    );
  }

  login() {
    const user = {
      email: this.form.value.email,
      password: this.form.value.password,
    };
    this.auth.login(user).subscribe(
      () => {
        console.log('Login success! :)');
        console.log(this.form.value);
      },
      (error) => {
        console.warn(error);
      }
    );
  }
}
