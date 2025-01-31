import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { finalize, Observable, retry } from 'rxjs';
import { LoadingService } from '../services/loading.service';
import { inject } from '@angular/core';

// export function loadingInterceptor(
//   req: HttpRequest<unknown>,
//   next: HttpHandlerFn
// ): Observable<HttpEvent<unknown>> {
//   return next(req);
// }

export const loadingInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {

  const loadingService = inject(LoadingService);
  
  loadingService.showLoading();

  return next(req).pipe(
    retry(1), // Numero de tentativas de requisições
    finalize(() => {
      loadingService.hideLoading();
    })
  );
};
