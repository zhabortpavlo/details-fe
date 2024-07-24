import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUser(email: any, password: any) {
    throw new Error('Method not implemented.');
  }
  private apiUrl =  'http://localhost:3000/users/register'; 

  constructor(private http: HttpClient) {}

  register(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(this.apiUrl, body);
  }
}
