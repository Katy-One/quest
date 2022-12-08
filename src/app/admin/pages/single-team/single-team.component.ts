import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-single-team',
	templateUrl: './single-team.component.html',
	styleUrls: ['./single-team.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleTeamComponent {}
