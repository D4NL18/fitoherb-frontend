import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  saveToken(token: string): void {
    if (this.isBrowser()) {
      const expiresInMs = 3600 * 1000;
      const expirationTime = Date.now() + expiresInMs;
      localStorage.setItem('token_expiration', expirationTime.toString());
      localStorage.setItem('access_token', token);
    }
  }

  deleteToken(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('token_expiration');
    }
  }

  getToken(): string | null {
    return this.isBrowser() ? localStorage.getItem('access_token') : null;
  }

  hasToken(): boolean {
    return !!this.getToken();
  }
}
