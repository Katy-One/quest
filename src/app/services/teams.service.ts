import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Team } from '../core/data/team';
import { EditTeamData, TeamData } from '../core/models/team.model';

@Injectable({ providedIn: 'root' })
export class TeamsService {
	constructor(private team: Team) {}

	public getTeams(): Observable<TeamData[]> {
		return this.team.getTeams().pipe(
			map(res => res),
			catchError(() => of([])),
		);
	}

	public deleteTeam(id: string): Observable<boolean> {
		return this.team.deleteTeam(id).pipe(
			map(res => res),
			catchError(() => of(false)),
		);
	}
	public editTeam(id: string, value: EditTeamData): Observable<boolean> {
		return this.team.editTeam(id, value).pipe(
			map(res => res),
			catchError(() => of(false)),
		);
	}
}
