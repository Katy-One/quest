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
import { EditTeamDialogComponent } from '../ui/dialogs/edit-team.dialog/edit-team.dialog.component';
import { EditTeamComponent } from '../ui/edit-team/edit-team.component';
import { CreateTeamComponent } from '../ui/create-team/create-team.component';
import { CreateTeamDialogComponent } from '../ui/dialogs/create-team.dialog/create-team.dialog.component';
import { MainAdminScreenComponent } from '../ui/shared/main-admin-screen/main-admin-screen.component';
import { CreateGameComponent } from '../ui/create-game/create-game.component';
import { CreateGameDialogComponent } from '../ui/dialogs/create-game.dialog/create-game.dialog.component';
import { EditGameDialogComponent } from '../ui/dialogs/edit-game.dialog/edit-game.dialog.component';
import { EditGameComponent } from '../ui/edit-game/edit-game.component';

@NgModule({
	declarations: [
		GamesComponent,
		AdminComponent,
		SingleGameComponent,
		ProgressGameComponent,
		ProgressGameSingleTeamComponent,
		SingleTeamComponent,
		TeamsComponent,
		EditTeamComponent,
		EditTeamDialogComponent,
		CreateTeamComponent,
		CreateTeamDialogComponent,
		MainAdminScreenComponent,
		CreateGameComponent,
		CreateGameDialogComponent,
		EditGameComponent,
		EditGameDialogComponent,
	],
	imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
