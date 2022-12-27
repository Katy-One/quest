import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTeamDialogComponent } from '../ui/dialogs/create-team.dialog/create-team.dialog.component';

@Injectable({
	providedIn: 'root',
})
export class TeamsModal {
	constructor(public dialog: MatDialog) {}

	public openDialog() {
		return this.dialog.open(CreateTeamDialogComponent).afterClosed();
	}
}
