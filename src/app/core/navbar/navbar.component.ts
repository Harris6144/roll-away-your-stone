import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/user.model';

@Component({
  selector: 'nav[app-navbar]',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  host: {
    'class': 'navbar navbar-expand-lg bg-dark',
    'data-bs-theme': 'dark'
  }
})
export class NavbarComponent {
  router: Router = inject(Router);
  authService: AuthService = inject(AuthService);
  user: User | null = null;
  isSigningOut: WritableSignal<boolean> = signal(false);

  constructor() {
    this.authService.getUser().pipe(takeUntilDestroyed()).subscribe(user => this.user = user);
  }

  onSignOut() {
    this.isSigningOut.set(true);
    this.authService.signOut()
      .then(() => this.router.navigate(['/']))
      .catch(error => console.error(error))
      .finally(() => this.isSigningOut.set(false));
  }
}
