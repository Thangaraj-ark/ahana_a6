import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, private http: HttpClient) {}

	ngOnInit() {
		this.model.tenant_id = '';
	}

	model: any = {};

	onSubmit() {
		localStorage.setItem('isLoggedin', 'true');
		console.log(this.model)
		this.router.navigate(['dashboard']);
		// var self = this;
		// this.http.post('http://localhost:3000/employee-login', this.loginForm.value).toPromise().then(res => { // Success
		// 	console.log(res);
		// 	if(res) {
		// 		localStorage.setItem('curUserId', res[0].id);
		// 		self.router.navigate(['welcome']);
		// 	}
		// }, err => { // Error
		// 	console.log(err);
		// });
	}

}
