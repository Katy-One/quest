import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTeamComponent } from 'src/app/ui/create-team/create-team.component';
import { CreateTeamDialogComponent } from 'src/app/ui/dialogs/create-team.dialog/create-team.dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	declarations: [CreateTeamComponent, CreateTeamDialogComponent],
	exports: [CreateTeamComponent, CreateTeamDialogComponent, SharedModule],
	imports: [CommonModule, SharedModule],
})
export class UserTeamModule {}
