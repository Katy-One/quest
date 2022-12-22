import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BurgerComponent } from './components/burger/burger.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoutBtnComponent } from './components/logout-btn/logout-btn.component';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from './material/material.module';

@NgModule({
	declarations: [MenuComponent, FooterComponent, HeaderComponent, BurgerComponent, LogoutBtnComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule, MaterialModule],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		MenuComponent,
		FooterComponent,
		HeaderComponent,
		MaterialModule,
		BurgerComponent,
	],
	//schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
