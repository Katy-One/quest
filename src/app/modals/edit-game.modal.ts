import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameEditData } from '../core/models/game.model';
import { EditGameDialogComponent } from '../ui/dialogs/edit-game.dialog/edit-game.dialog.component';

@Injectable({
	providedIn: 'root',
})
export class EditGameModal {
	constructor(public dialog: MatDialog) {}

	public openDialog(data: GameEditData) {
		console;
		return this.dialog
			.open(EditGameDialogComponent, {
				width: '350px',
				height: '365px',
				data: {
					gameName: data.gameName,
					author: data.author,
					finalMessage: data.finalMessage,
				},
			})
			.afterClosed();
	}
}
