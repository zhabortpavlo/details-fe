import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDetails } from './details.interface';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private baseUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  getData(): Observable<IDetails[]> {
    return this.http.get<IDetails[]>(`${this.baseUrl}/details`);
  }
}