import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hide = true;
  checked = false;
  checkboxLabel = 'I understand and accept the Terms and Conditions';
  // password = '';
  // confirmPassword = '';
  registerForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
  });

  get email() {
    return this.registerForm.get('email');
  }
}
