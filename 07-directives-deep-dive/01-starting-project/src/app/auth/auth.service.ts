import { Injectable, signal } from '@angular/core';

import { Permission } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // EV Custom:
  private admin: Permission = 'admin';
  private user: Permission = 'user';
  private guest: Permission = 'guest';
  private adminEmail = 'admin@example.com';
  private adminPassword = 'admin';
  private userEmail = 'user@example.com';
  private userPassword = 'user';
  activePermission = signal<Permission>(this.guest);

  getAdminEmail(): string {
    return this.adminEmail;
  }

  getAdminPassword(): string {
    return this.adminPassword;
  }

  getUserEmail(): string {
    return this.userEmail;
  }

  getUserPassword(): string {
    return this.userPassword;
  }

  authenticate(email: string, password: string) {
    console.log(email, password);
    if (email === this.adminEmail && password === this.adminPassword) {
      this.activePermission.set(this.admin);
    } else if (email === this.userEmail && password === this.userPassword) {
      this.activePermission.set(this.user);
    } else {
      this.activePermission.set(this.guest);
    }
  }

  logout() {
    this.activePermission.set(this.guest);
  }
}
