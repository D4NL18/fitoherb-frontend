import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string): void {
    const expiresInMs = 3600 * 1000;
    const expirationTime = Date.now() + expiresInMs;
    localStorage.setItem('token_expiration', expirationTime.toString());
    return localStorage.setItem('access_token', token);
  }

  deleteToken(): void {
    return localStorage.removeItem('access_token');
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  hasToken(): boolean {
    return !!this.getToken();
  }
}
