import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { catchError, Observable, throwError } from 'rxjs';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private loginService: LoginService, private userService: UserService, private router: Router) {}

	public intercept<T>(request: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
		//	this.loaderService.isLoading$.next(true);
		const token = this.loginService.getJwtToken();

		if (token) {
			request = this.addToken(request, token);
		}
		return next.handle(request).pipe(
			catchError((error: HttpErrorResponse) => {
				// if (error instanceof HttpErrorResponse) {
				// 	this.errorService.handleErrors(error.status);
				// }
				// if (error.status === 401) {
				// 	if (error.url?.includes('refresh')) {
				// 		this.authService.logout();
				// 		void this.router.navigate(['/' + AppRoutes.Login]);
				// 	}
				// 	return this.handle401Error(request, next);
				// } else {
				// 	return throwError(() => error);
				// }

				return throwError(() => error);
			}),
			// finalize(() => {
			// 	this.isRefreshing = false;
			// 	this.loaderService.isLoading$.next(false);
			// }),
		);
	}
	private addToken<T>(request: HttpRequest<T>, token: string) {
		const headers = request.headers.delete('Authorization');
		return request.clone({
			headers: headers.append('Authorization', `bearer ${token}`),
		});
	}
}
