import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";

import { Observable } from "rxjs";

import { AUTH_TOKEN_ENABLED } from "../tokens/auth-token";

export function authInterceptor(
    req: HttpRequest<unknown>,
    next: HttpHandlerFn): Observable<HttpEvent<unknown>> {

    let newReq = req;
    const APPLY_AUTH_TOKEN = req.context.get(AUTH_TOKEN_ENABLED);

    if (APPLY_AUTH_TOKEN) {
        newReq = req.clone({
            headers: req.headers.set('Authorization', localStorage.getItem('token')!),
        });
    }

    return next(newReq);
}
