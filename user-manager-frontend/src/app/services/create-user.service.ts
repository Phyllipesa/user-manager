import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';

import { IUserRequest } from '../interfaces/request/user-request.interface';
import { AUTH_TOKEN_ENABLED } from '../tokens/auth-token';
import { ICreateUserResponse } from '../interfaces/response/create-user-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {
  private readonly _httpClient = inject(HttpClient);

  createUser(newUser: IUserRequest) {
    return this._httpClient.post<ICreateUserResponse>(
      'http://localhost:3000/create-user',
      newUser,
      { 
        context: new HttpContext().set(AUTH_TOKEN_ENABLED, true) 
      },
    );
  }
}
