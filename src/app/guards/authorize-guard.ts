import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {} from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
	providedIn: 'root',
})
export class AuthorizeGuard implements CanActivate {
	constructor(private loginService: LoginService, private router: Router) {}
	public canActivate(): boolean {
		if (!this.loginService.getJwtToken()) {
			void this.router.navigate(['/login']);
			return false;
		}
		return true;
	}
}
