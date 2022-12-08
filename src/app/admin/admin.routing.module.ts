import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesComponent } from './pages/games/games.component';
import { ProgressGameSingleTeamComponent } from './pages/progress-game-single-team/progress-game-single-team.component';
import { ProgressGameComponent } from './pages/progress-game/progress-game.component';
import { SingleGameComponent } from './pages/single-game/single-game.component';
import { SingleTeamComponent } from './pages/single-team/single-team.component';
import { TeamsComponent } from './pages/teams/teams.component';

const routes: Routes = [
	{ path: 'games', component: GamesComponent },
	{ path: 'games/:name', component: SingleGameComponent },
	{ path: 'games/:name/progress', component: ProgressGameComponent },
	{ path: 'games/:name/progress/:team/:id', component: ProgressGameSingleTeamComponent },
	{ path: 'teams', component: TeamsComponent },
	{ path: 'teams/:teamsName', component: SingleTeamComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminRoutingModule {}
