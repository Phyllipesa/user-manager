import { HttpClient, HttpContext } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';

import { ILoginResponse } from '../interfaces/response/login-response-interface';
import { AUTH_TOKEN_ENABLED } from '../tokens/auth-token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly _httpClient = inject(HttpClient);

  login(username: string, password: string): Observable<ILoginResponse> {
    return this._httpClient
      .post<ILoginResponse>(
        'http://localhost:3000/login',
        { 
          username,
          password,
        },
        { 
          context: new HttpContext().set(AUTH_TOKEN_ENABLED, false)
        },
      )
      .pipe(
        map((tokenResponse) => {
          localStorage.setItem('token', 'Bearer ' + tokenResponse.token);
          return tokenResponse;
        })
      );
  }
}
