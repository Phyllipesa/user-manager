import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IUserRequest } from '../interfaces/request/user-request.interface';
import { ICreateUserResponse } from '../interfaces/response/create-user-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {
  private readonly _httpClient = inject(HttpClient);

  createUser(newUser: IUserRequest) {
    const headers = new HttpHeaders().set('authorization', localStorage.getItem('token')!);
    
    return this._httpClient.post<ICreateUserResponse>(
      'http://localhost:3000/create-user',
      newUser,
      { headers, }
    );
  }
}
