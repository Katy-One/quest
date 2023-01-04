import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap, of } from 'rxjs';
import { GameData } from 'src/app/core/models/game.model';
import { GamesService } from 'src/app/services/game.service';

@Component({
	selector: 'app-single-game',
	templateUrl: './single-game.component.html',
	styleUrls: ['./single-game.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleGameComponent implements OnInit {
	public game$!: Observable<GameData | null>;
	constructor(private activatedRoute: ActivatedRoute, private gamesService: GamesService) {}
	public ngOnInit(): void {
		this.game$ = this.activatedRoute.paramMap.pipe(
			switchMap((params: ParamMap) => {
				const gameParam = params.get('gameName');
				if (gameParam) {
					return this.gamesService.getGame(gameParam);
				}
				return of(null);
			}),
		);
	}
}
