import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
	public adminForm!: FormGroup;

	constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {}

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
		this.router.navigate(['/']);
		if (this.adminForm.dirty && this.adminForm.valid) {
			this.loginService.login(this.adminForm.value).subscribe();
		}
	}
}
