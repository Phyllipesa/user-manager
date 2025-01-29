import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs';

import { IUserRequest } from '../interfaces/request/user-request.interface';
import { IUpdateUserResponde } from '../interfaces/response/update-user-response.interface';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {
  private readonly _httpClient = inject(HttpClient);

  updateUser(userInfos: IUserRequest) {
    const headers = new HttpHeaders().set('authorization', localStorage.getItem('token')!);
    return this._httpClient.put<IUpdateUserResponde>('http://localhost:3000/update-user', userInfos, {
      headers,
    }).pipe(
      map((updateUserResponse) => {
        localStorage.setItem('token', 'Bearer ' + updateUserResponse.token);
        return updateUserResponse;
      })
    );
  }
}
