import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-single-game',
	templateUrl: './single-game.component.html',
	styleUrls: ['./single-game.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleGameComponent {}
