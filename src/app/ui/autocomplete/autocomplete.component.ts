import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs';

import { AutocompleteService } from 'src/app/services/autocomplete.service';

@Component({
	selector: 'app-autocomplete',
	templateUrl: './autocomplete.component.html',
	styleUrls: ['./autocomplete.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteComponent implements OnInit {
	public form!: FormGroup;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public filteredOptions!: any;
	@Output() public submitEmit = new EventEmitter();

	constructor(private autocompleteService: AutocompleteService, private fb: FormBuilder) {}

	public get teamName(): FormControl<string> {
		return this.form.controls['teamName'] as FormControl;
	}
	public ngOnInit() {
		this.form = this.fb.group({
			teamName: ['', [autocompleteObjectValidator(), Validators.required]],
		});
		this.filteredOptions = this.teamName.valueChanges.pipe(
			startWith(''),
			debounceTime(400),
			distinctUntilChanged(),
			switchMap(val => {
				return this.filterValue(val || '');
			}),
		);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private filterValue(val: any) {
		return this.autocompleteService.getData().pipe(
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			map((response: any) => {
				if (response) {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					return response.filter((option: any) => {
						if (typeof val === 'string') {
							return option.username.toLowerCase().indexOf(val.toLowerCase()) === 0;
						} else {
							return option.username.toLowerCase().indexOf(val.username.toLowerCase()) === 0;
						}
					});
				}
			}),
		);
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public displayContactFn(team: any) {
		return team ? team.username : undefined;
	}

	public onSubmit() {
		this.submitEmit.emit(this.teamName.value);
	}
}

function autocompleteObjectValidator(): ValidatorFn {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (control: AbstractControl): { [key: string]: any } | null => {
		if (typeof control.value === 'string') {
			return { invalidAutocompleteObject: { value: control.value } };
		}
		return null;
	};
}
