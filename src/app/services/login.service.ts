import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { accessTokenPropName } from '../consts/consts';
import { UserData } from '../pages/login/login.models';

@Injectable({
	providedIn: 'root',
})
export class LoginService {
	constructor(private http: HttpClient) {}

	public login(user: UserData) {
		return this.http.post<string>(`${environment.apiUrl}/users/login`, user).pipe(
			map((token: string) => {
				return this.storeJwtToken(token);
			}),
			catchError(() => {
				localStorage.setItem(accessTokenPropName, 'jwt');
				return '';
			}),
		);
	}

	public logout() {
		localStorage.removeItem(accessTokenPropName);
	}

	public getJwtToken() {
		return localStorage.getItem(accessTokenPropName);
	}

	private storeJwtToken(jwt: string) {
		localStorage.setItem(accessTokenPropName, jwt);
	}
}
