import { Routes } from '@angular/router';

import { SignUpFormComponent } from './auth/sign-up-form/sign-up-form.component';
import { SignInFormComponent } from './auth/sign-in-form/sign-in-form.component';

export const routes: Routes = [
  { path: 'sign-up', component: SignUpFormComponent },
  { path: 'sign-in', component: SignInFormComponent }
];
