import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";

import { Observable, throwError } from "rxjs";

import { AUTH_TOKEN_ENABLED } from "../tokens/auth-token";

export function authInterceptor(
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
    
    const APPLY_AUTH_TOKEN = req.context.get(AUTH_TOKEN_ENABLED);
    const TOKEN = APPLY_AUTH_TOKEN ? localStorage.getItem('token') : null;

    if (APPLY_AUTH_TOKEN && !TOKEN) {
        return throwError(() => new Error('Token not found.'));
    }

    const newReq = TOKEN ? req.clone({
        headers: req.headers.set('Authorization', TOKEN),
    }) : req;

    return next(newReq);
}
