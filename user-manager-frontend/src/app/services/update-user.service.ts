import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';

import { map } from 'rxjs';

import { IUserRequest } from '../interfaces/request/user-request.interface';
import { AUTH_TOKEN_ENABLED } from '../tokens/auth-token';
import { IUpdateUserResponse } from '../interfaces/response/update-user-response.interface';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {
  private readonly _httpClient = inject(HttpClient);

  updateUser(userInfos: IUserRequest) {
    return this._httpClient
      .put<IUpdateUserResponse>(
        'http://localhost:3000/update-user',
        userInfos,
        { 
          context: new HttpContext().set(AUTH_TOKEN_ENABLED, true)
        },
      )
      .pipe(
        map((updateUserResponse) => {
          localStorage.setItem('token', 'Bearer ' + updateUserResponse.token);
          return updateUserResponse;
        })
      );
  }
}
