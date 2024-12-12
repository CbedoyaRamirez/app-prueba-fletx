import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
  private apiUrl = 'http://127.0.0.1:3000/api/v1/users'; 

  constructor(private http: HttpClient) {}

  
  getRegistros(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
