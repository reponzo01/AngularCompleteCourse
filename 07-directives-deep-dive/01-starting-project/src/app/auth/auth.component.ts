import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { LogDirective } from '../log.directive';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  hostDirectives: [LogDirective]
})
export class AuthComponent {
  // EV Custom:
  fillAdminCreds() {
    this.email.set(this.authService.getAdminEmail());
    this.password.set(this.authService.getAdminPassword());
  }

  fillUserCreds() {
    this.email.set(this.authService.getUserEmail());
    this.password.set(this.authService.getUserPassword());
  }

  email = signal('');
  password = signal('');
  private authService = inject(AuthService);

  onSubmit() {
    this.authService.authenticate(this.email(), this.password());
  }


}
