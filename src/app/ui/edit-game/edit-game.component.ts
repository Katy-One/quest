import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GameEditData } from 'src/app/core/models/game.model';

@Component({
	selector: 'app-edit-game',
	templateUrl: './edit-game.component.html',
	styleUrls: ['./edit-game.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditGameComponent implements OnInit {
	public gameForm!: FormGroup;
	@Input() public dataEditDialog!: GameEditData;
	@Output() public submitEmit = new EventEmitter();

	constructor(private fb: FormBuilder) {}

	public get name(): FormControl<string> {
		return this.gameForm.controls['name'] as FormControl;
	}
	public get author(): FormControl<string> {
		return this.gameForm.controls['author'] as FormControl;
	}
	public get finalMessage(): FormControl<string> {
		return this.gameForm.controls['finalMessage'] as FormControl;
	}

	public ngOnInit(): void {
		this.gameForm = this.fb.group({
			name: [this.dataEditDialog.gameName, Validators.required],
			author: [this.dataEditDialog.author, Validators.required],
			finalMessage: [this.dataEditDialog.finalMessage],
		});
	}

	public onSubmit() {
		this.submitEmit.emit(this.gameForm.value);
	}
}
