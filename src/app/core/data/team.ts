import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
	providedIn: 'root',
})
export class Team {
	constructor(private http: HttpClient) {}

	public createTeam(userValue: User) {
		return this.http.post<void>(`${environment.apiUrl}/users/create`, userValue);
	}
}
