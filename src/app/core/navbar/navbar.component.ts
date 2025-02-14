import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nav[app-navbar]',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  host: {
    'class': 'navbar navbar-expand-lg bg-dark',
    'data-bs-theme': 'dark'
  }
})
export class NavbarComponent {

}
