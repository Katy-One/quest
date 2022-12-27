import { ChangeDetectionStrategy, Component } from '@angular/core';
import { switchMap } from 'rxjs';
import { Team } from 'src/app/core/data/team';
import { User } from 'src/app/core/models/user.model';
import { SnackbarNotificationModal } from 'src/app/modals/snackbar-notification.modal';
import { TeamsModal } from 'src/app/modals/teams.service';
import { ModalStatus } from '../../enums/modal.enum';

@Component({
	selector: 'app-teams',
	templateUrl: './teams.component.html',
	styleUrls: ['./teams.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent {
	constructor(private teamsModal: TeamsModal, private team: Team, private snackbarNotificationModal: SnackbarNotificationModal) {}
	public openDialog() {
		this.teamsModal
			.openDialog()
			.pipe(switchMap((teamValue: User) => this.team.createTeam(teamValue)))
			.subscribe(() => {
				this.snackbarNotificationModal.open({ title: 'Thank you for your opinion!', panelClass: ModalStatus.Successful });
			});
	}
}
