import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeGuard } from './guards/authorize-guard';
import { UnAuthGuard } from './guards/unauth-guard';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { UserTeamComponent } from './user-team/user-team.component';
import { UserTeamGuard } from './guards/user-team-guard';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'admin/games',
	},
	{
		path: 'admin',
		pathMatch: 'full',
		redirectTo: 'admin/games',
	},
	{
		path: 'admin',
		component: AdminComponent,
		canActivate: [AuthorizeGuard, UserTeamGuard],
		children: [
			{
				path: '',
				loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
			},
		],
	},
	{ path: 'game/:gameName/:teamName/:taskName', component: UserTeamComponent, canActivate: [AuthorizeGuard] },
	{ path: 'login', component: LoginComponent, canActivate: [UnAuthGuard] },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
