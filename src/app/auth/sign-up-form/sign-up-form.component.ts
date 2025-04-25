import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'main[app-sign-up-form]',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up-form.component.html',
  host: {
    'class': 'bg-body-tertiary px-3 py-5'
  }
})
export class SignUpFormComponent {
  router: Router = inject(Router);
  authService: AuthService = inject(AuthService);
  signUpForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    this.signUpForm.disable();
    this.authService.signUp(this.signUpForm.value)
      .then(() => this.router.navigate(['/']))
      .catch(error => console.error(error))
      .finally(() => this.signUpForm.enable());
  }
}
