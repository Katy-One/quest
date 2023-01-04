import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GameData } from 'src/app/core/models/game.model';
import { TeamData } from 'src/app/core/models/team.model';

@Component({
	selector: 'app-main-admin-screen',
	templateUrl: './main-admin-screen.component.html',
	styleUrls: ['./main-admin-screen.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainAdminScreenComponent {
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	@Input() public listArr$: Observable<TeamData[] | GameData[] | any> = of([]);
	@Input() public title!: string;
	@Input() public url!: string;
	@Input() public btnText!: string;
	@Output() public openCreateDialog = new EventEmitter();
	@Output() public openEditDialog = new EventEmitter();
	@Output() public emitDelete = new EventEmitter();
}