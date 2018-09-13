import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AhanaService } from '../../../../../services/ahana.service';

@Component({
	selector: 'app-create-role',
	templateUrl: './create-role.component.html',
	styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit {

	model: any = {};
	showAlert = false;
	alertType = '';
	alertMessage = '';

	constructor(public router: Router, private ahanaService: AhanaService) {}

	ngOnInit() {
		this.model['status'] = 1;
	}

	onSubmit() {
		var accessToken = localStorage.getItem('access_token');
		var self = this;
		var reqData = {};
		reqData['status'] = this.model.status.toString();
		reqData['formrole'] = 'add';
		reqData['description'] = this.model.name;
		// console.log(reqData);
		this.ahanaService.createRoles(reqData, accessToken).subscribe((data: any) => {
			// console.log(data);
			if (data.success) {
				self.alertType = 'success';
				self.alertMessage = 'Role saved successful !';
				self.showAlert = true;
				setTimeout(function() {
					self.showAlert = false;
					self.router.navigate(['configuration/roles']);
				}, 1000)
			} else {
				self.alertType = 'danger';
				self.alertMessage = data.message;
				self.showAlert = true;
				setTimeout(function() {
					self.showAlert = false;
				}, 3000)
			}
		})
	}

}
