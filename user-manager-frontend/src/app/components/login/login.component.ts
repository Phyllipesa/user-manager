import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  private readonly _router = inject(Router);
  private readonly _loginService = inject(LoginService);

  onLogin() {
    this._loginService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe({
        next: () => this._router.navigate(['user-infos']),
        error: (error: HttpErrorResponse) => { 
          const UNAUTRORIZED_RESPONSE_ERROR = 401;

          if (error.status === UNAUTRORIZED_RESPONSE_ERROR) {
            this.loginForm.setErrors({ 'invalidCredentials': true });
          }
          else {
            this.loginForm.setErrors({ 'generalCredentialsError': true });
          }
        },
      });
  }
}
