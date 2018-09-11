import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AhanaServiceService } from '../ahana-service.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
    providers:  [ AhanaServiceService ]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, private ahanaService: AhanaServiceService) {}

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
				localStorage.setItem('isLoggedin', 'true');
				this.router.navigate(['dashboard']);
			}
		})
		
	}

}
