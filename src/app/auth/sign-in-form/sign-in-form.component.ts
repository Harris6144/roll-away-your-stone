import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'main[app-sign-in-form]',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in-form.component.html',
  host: {
    'class': 'bg-body-tertiary px-3 py-5'
  }
})
export class SignInFormComponent {
  router: Router = inject(Router);
  authService: AuthService = inject(AuthService);
  signInForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    this.signInForm.disable();
    this.authService.signIn(this.signInForm.value)
      .then(() => this.router.navigate(['/']))
      .catch(error => console.error(error))
      .finally(() => this.signInForm.enable());
  }
}
