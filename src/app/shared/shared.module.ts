import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material/material.module';

@NgModule({
	declarations: [MenuComponent, FooterComponent, HeaderComponent],
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
	],
})
export class SharedModule {}
