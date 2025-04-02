import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../types/user.interface';
import { TokenService } from '../auth/token/token.service';
import {jwtDecode} from 'jwt-decode';	
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/users';

  private userSubject = new BehaviorSubject<User | null>(null);
  private tokenService = inject(TokenService);
  private http = inject(HttpClient);

  constructor() {
    if(this.tokenService.hasToken()) {
      this.decodeJWT()
    }
  }

  decodeJWT() {
    const token = this.tokenService.getToken() as string;
    const user = jwtDecode(token) as User;
    this.userSubject.next(user);
  }

  getThisUser() {
    return this.userSubject.asObservable();
  }

  saveToken(token: string): void {
    this.tokenService.saveToken(token);
    this.decodeJWT();
  }

  logout() {
    this.tokenService.deleteToken();
    this.userSubject.next(null);
  }

  isLoggedIn(): boolean {
    return this.tokenService.hasToken();
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`)
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/id=${id}`)
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

  editUser(user_id: string, user_name: string, email: string, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('user_id', user_id);
    formData.append('user_name', user_name);
    formData.append('email', email);
    formData.append('password', password);
    return this.http.put(`${this.apiUrl}/${user_id}`, formData);
  }
}
