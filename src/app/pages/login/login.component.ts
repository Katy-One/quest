import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AppRoutes } from 'src/app/app-routes.enum';
import { UserRoleEnum } from 'src/app/guards/user.enum';
import { UserService } from 'src/app/services/user.service';
import { LoginService } from '../../services/login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
	public adminForm!: FormGroup;
	public isDisabled = false;
	constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private userService: UserService) {}

	public get username(): FormControl<string> {
		return this.adminForm.controls['username'] as FormControl;
	}
	public get password(): FormControl<string> {
		return this.adminForm.controls['password'] as FormControl;
	}
	public ngOnInit(): void {
		if (this.loginService.getJwtToken()) {
			this.router.navigate(['/']);
			return;
		}

		this.adminForm = this.fb.group({
			username: ['', Validators.required],
			password: ['', Validators.required],
		});
	}

	public onSubmit() {
		this.isDisabled = true;
		if (this.adminForm.dirty && this.adminForm.valid) {
			this.loginService
				.login(this.adminForm.value)
				.pipe(
					switchMap(() => {
						return this.userService.loadUserToStore();
					}),
				)
				.subscribe({
					next: user => {
						if (user.role === UserRoleEnum.Admin) {
							this.router.navigate(['/']);
						}
						if (user.role === UserRoleEnum.TeamUser) {
							this.router.navigate([AppRoutes.Game]);
						}
					},
					error: () => {
						this.isDisabled = false;
					},
				});
		}
	}
}
