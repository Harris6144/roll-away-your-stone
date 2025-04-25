import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
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
  authService: AuthService = inject(AuthService);
  user: User | null = null;

  constructor() {
    this.authService.getUser().pipe(takeUntilDestroyed()).subscribe(user => this.user = user);
  }
}
