import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GameEditData } from 'src/app/core/models/game.model';

@Component({
	selector: 'app-edit-game.dialog',
	templateUrl: './edit-game.dialog.component.html',
	styleUrls: ['./edit-game.dialog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditGameDialogComponent {
	constructor(public dialogRef: MatDialogRef<EditGameDialogComponent>, @Inject(MAT_DIALOG_DATA) public dataEditDialog: GameEditData) {}

	public onSubmit(value: GameEditData) {
		this.dialogRef.close(value);
	}
}
