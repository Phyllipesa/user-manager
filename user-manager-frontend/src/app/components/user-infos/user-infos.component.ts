import { Component, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { UpdateUserService } from '../../services/update-user.service';
import { CreateUserService } from '../../services/create-user.service';

@Component({
  selector: 'app-user-infos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-infos.component.html',
  styleUrl: './user-infos.component.scss'
})
export class UserInfosComponent {
  userInfosForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  private readonly _updateUserService = inject(UpdateUserService);
  private readonly _createUserService = inject(CreateUserService);
  
  updateUser() {
    this._updateUserService.updateUser(this.userInfosForm.value as any).subscribe({
      next: (response) => {
        this.userInfosForm.setErrors({ 'update-success': true })
      },
      error: (error) => {
        this.userInfosForm.setErrors({ 'update-error': true })
      },
    });
  }

  createUser() {
    this._createUserService.createUser(this.userInfosForm.value as any).subscribe({
      next: (response) => {
        this.userInfosForm.setErrors({ 'create-user-success': true })
      },
      error: (error: HttpErrorResponse) => {
        const ALREADY_EXISTING_USER = error.status === 409;

        if (ALREADY_EXISTING_USER) {
          this.userInfosForm.setErrors({ 'existing-user-error': true })
          return;
        }
        
        this.userInfosForm.setErrors({ 'created-user-error': true })
      },
    });
  }
}