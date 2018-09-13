import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { routerTransition } from '../router.animations';
import { AhanaService } from '../services/ahana.service';
import * as moment from 'moment';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	animations: [routerTransition()],
	providers:  [ AhanaService ]
})
export class LoginComponent implements OnInit {
	constructor(public router: Router, private ahanaService: AhanaService, private titleService: Title) {}

	model: any = {};
	allTenantLists = [];

	ngOnInit() {
		this.model.tenant_id = '';
		this.getTenants();
	}

	getTenants(): void {
		this.ahanaService.getTenantLists().subscribe((data: any) => {
			if (data['org_sts']) {
				var allTenantLists = []
				for (let key in data['tenantList']) {
					this.allTenantLists.push({
						id: key,
						role: data['tenantList'][key]
					})
				}
			}
		});
	}

	onSubmit() {
		// console.log(this.model)
		this.ahanaService.loginAuthenticate(this.model).subscribe((data: any) => {
			// console.log(data)
			if (data.success) {
				// var ngidleexpiry = { id: new Date().getTime(), time: moment().format() };
				localStorage.setItem('isLoggedin', 'true');
				// localStorage.setItem('ngIdle.expiry', JSON.stringify(ngidleexpiry));
				localStorage.setItem('ngStorage-stay', moment().add(1, 'days').format('YYYY-MM-DD HH:mm:ss'));
				localStorage.setItem('access_token', data.access_token);
				localStorage.setItem('ngStorage-system_tenant', data.credentials.org);
				localStorage.setItem('ngStorage-system_tenant_id', data.credentials.logged_tenant_id);
				localStorage.setItem('ngStorage-system_username', this.model.username);
				// localStorage.setItem('ngStorage-user : set all response', JSON.stringify(data));
				this.titleService.setTitle('IRIS(' + data.credentials.org + ')');
				this.router.navigate(['configuration']);
			}
		})
		
	}

}
