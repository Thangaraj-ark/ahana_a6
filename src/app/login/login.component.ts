import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, private http: HttpClient) {}

	baseUrl = environment.baseUrl;
	model: any = {};
	allTenantLists = [];

	ngOnInit() {
		const httpOptions = {
			headers: new HttpHeaders({
				'Access-Control-Allow-Origin':  '*',
				'x-domain-path': 'http://localhost:4200'
			})
		};
		this.model.tenant_id = '';
		this.http.get(this.baseUrl + 'IRISORG/web/v1/default/get-tenant-list', httpOptions).toPromise().then(res => { // Success
			console.log(res);
			if (res['org_sts']) {
				for (let key in res['tenantList']) {
					this.allTenantLists.push({
						id: key,
						role: res['tenantList'][key]
					})
				}
			}
		}, err => { // Error
			console.log(err);
		});
	}

	onSubmit() {
		// localStorage.setItem('isLoggedin', 'true');
		console.log(this.model)
		// this.router.navigate(['dashboard']);
		const httpOptions = {
			headers: new HttpHeaders({
				'Access-Control-Allow-Origin':  '*',
				'x-domain-path': 'http://localhost:4200'
			})
		};
		var self = this;
		this.http.post(this.baseUrl + 'IRISORG/web/v1/user/login', this.model, httpOptions).toPromise().then(res => { // Success
			console.log(res);
			// if(res) {
			// 	localStorage.setItem('curUserId', res[0].id);
			// 	self.router.navigate(['welcome']);
			// }
		}, err => { // Error
			console.log(err);
		});
	}

}
