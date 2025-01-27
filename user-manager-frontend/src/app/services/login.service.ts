import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly _httpClient = inject(HttpClient);

  login(username: string, password: string): Observable<{ toke: string }> {
    return this._httpClient.post<{ toke: string }>('http://localhost:3000/login', { username, password });
  }
}
