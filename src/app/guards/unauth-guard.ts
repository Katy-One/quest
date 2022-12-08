import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class UnAuthGuard implements CanActivate {
	public canActivate(): boolean {
		return false;
	}
}
