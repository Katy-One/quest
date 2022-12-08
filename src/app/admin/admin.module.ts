import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './pages/games/games.component';
import { SingleGameComponent } from './pages/single-game/single-game.component';
import { ProgressGameComponent } from './pages/progress-game/progress-game.component';
import { ProgressGameSingleTeamComponent } from './pages/progress-game-single-team/progress-game-single-team.component';
import { AdminRoutingModule } from './admin.routing.module';
import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';
import { SingleTeamComponent } from './pages/single-team/single-team.component';
import { TeamsComponent } from './pages/teams/teams.component';

@NgModule({
	declarations: [
		GamesComponent,
		AdminComponent,
		SingleGameComponent,
		ProgressGameComponent,
		ProgressGameSingleTeamComponent,
		SingleTeamComponent,
		TeamsComponent,
	],
	imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
