import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {} from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AuthorizeGuard implements CanActivate {
	public canActivate(): boolean {
		return true;
	}
}
