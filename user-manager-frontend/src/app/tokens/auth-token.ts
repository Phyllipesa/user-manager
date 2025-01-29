import { HttpContextToken } from '@angular/common/http';

export const AUTH_TOKEN_ENABLED = new HttpContextToken<boolean>(() => true);
