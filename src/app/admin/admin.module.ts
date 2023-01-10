import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AutocompleteComponent } from '../ui/autocomplete/autocomplete.component';
import { CreateGameComponent } from '../ui/create-game/create-game.component';
import { CreateTeamComponent } from '../ui/create-team/create-team.component';
import { AddTeamDialogComponent } from '../ui/dialogs/add-team.dialog/add-team.dialog.component';
import { CreateGameDialogComponent } from '../ui/dialogs/create-game.dialog/create-game.dialog.component';
import { CreateTeamDialogComponent } from '../ui/dialogs/create-team.dialog/create-team.dialog.component';
import { EditTeamDialogComponent } from '../ui/dialogs/edit-team.dialog/edit-team.dialog.component';
import { EditTeamComponent } from '../ui/edit-team/edit-team.component';
import { MainAdminScreenComponent } from '../ui/shared/main-admin-screen/main-admin-screen.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing.module';
import { GamesComponent } from './pages/games/games.component';
import { ProgressGameSingleTeamComponent } from './pages/progress-game-single-team/progress-game-single-team.component';
import { ProgressGameComponent } from './pages/progress-game/progress-game.component';
import { SingleGameComponent } from './pages/single-game/single-game.component';
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
		EditTeamComponent,
		EditTeamDialogComponent,
		CreateTeamComponent,
		CreateTeamDialogComponent,
		MainAdminScreenComponent,
		CreateGameComponent,
		CreateGameDialogComponent,
		AutocompleteComponent,
		AddTeamDialogComponent,
	],
	imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
