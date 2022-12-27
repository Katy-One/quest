import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
	constructor(private loginService: LoginService, private userService: UserService) {}

	public ngOnInit() {
		if (this.loginService.getJwtToken()) {
			this.userService.loadUserToStore().subscribe();
		}
	}
}
