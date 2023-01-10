import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, tap } from 'rxjs';
import { TeamsStore } from 'src/store/teams.store';

@Injectable({ providedIn: 'root' })
export class AutocompleteService {
	constructor(private http: HttpClient, private teamsStore: TeamsStore) {}

	public opts = new BehaviorSubject([]);

	public getData() {
		const teams = this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			tap((data: any) => {
				this.opts.next(data);
				return this.opts;
			}),
		);
		return combineLatest([teams, this.teamsStore.teams$]).pipe(
			map(([existTeams, addedTeams]) => {
				if (addedTeams?.length) {
					for (let i = 0; i < existTeams?.length; i++) {
						for (let j = 0; j < addedTeams?.length; j++) {
							if (existTeams[i].username == addedTeams[j].username) {
								existTeams.splice(i, 1);
							}
						}
					}
				}

				return existTeams;
			}),
		);
	}
}
