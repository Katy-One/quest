import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap, takeUntil } from 'rxjs';
import { UiComponent } from 'src/app/abstract/ui-component';
import { GameData } from 'src/app/core/models/game.model';
import { AddTeamModal } from 'src/app/modals/add-team.modal';
import { SnackbarNotificationModal } from 'src/app/modals/snackbar-notification.modal';
import { GamesService } from 'src/app/services/game.service';
import { ModalStatus } from '../../enums/modal.enum';

@Component({
	selector: 'app-single-game',
	templateUrl: './single-game.component.html',
	styleUrls: ['./single-game.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleGameComponent extends UiComponent implements OnInit, OnDestroy {
	public game$!: Observable<GameData | null>;

	constructor(
		private activatedRoute: ActivatedRoute,
		private gamesService: GamesService,
		private addTeamModal: AddTeamModal,
		private snackbarNotificationModal: SnackbarNotificationModal,
	) {
		super();
	}

	public ngOnInit(): void {
		this.game$ = this.activatedRoute.params.pipe(
			switchMap(params => {
				if (params) {
					return this.gamesService.getGame(params['gameName']);
				}
				return of(null);
			}),
		);
	}

	public addTeam() {
		this.addTeamModal
			.openDialog()
			.pipe(
				switchMap((gameValue: string | null) => {
					if (gameValue) {
						return of(true);
						//return this.game.createGame(gameValue);
					} else {
						return of(false);
					}
				}),
				takeUntil(this.dispose$),
			)
			.subscribe(res => {
				if (res) {
					this.snackbarNotificationModal.open({ title: 'Thank you for your opinion!', panelClass: ModalStatus.Successful });
				}
			});
	}
}
