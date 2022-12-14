import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { LoginComponent } from './login.component';

@NgModule({
	declarations: [LoginComponent],
	imports: [CommonModule, SharedModule],
	exports: [CommonModule, SharedModule, LoginComponent],
})
export class LoginModule {}
