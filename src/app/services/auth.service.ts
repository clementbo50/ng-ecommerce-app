import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { AuthResponse } from '../models/AuthResponse';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  private token!: string;

  public authStatusChanged = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, password });
  }

  register(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, { email, password });
  }

  setToken(token: string, userId: number): void {
    this.token = token;
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId.toString());
    this.authStatusChanged.next(true);
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  getUserId(): number {
    return Number(localStorage.getItem('userId')) || 0;
  }

  isLoggedIn(): boolean {
   if(localStorage.getItem('token') === null){
     this.authStatusChanged.next(false);
   }
    return !!this.getToken();
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.authStatusChanged.next(false);
  }
}
