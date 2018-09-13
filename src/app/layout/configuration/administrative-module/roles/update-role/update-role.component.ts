import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AhanaService } from '../../../../../services/ahana.service';

@Component({
	selector: 'app-update-role',
	templateUrl: './update-role.component.html',
	styleUrls: ['./update-role.component.scss']
})
export class UpdateRoleComponent implements OnInit {

	model: any = {};
	showAlert = false;
	alertType = '';
	alertMessage = '';

	constructor(public router: Router, private route: ActivatedRoute, private ahanaService: AhanaService) {}

	ngOnInit() {
		this.goInit();
	}

	goInit () {
		var roleId = this.route.params['value'].id;
		// console.log(roleId);
		var accessToken = localStorage.getItem('access_token');
		var self = this;
		this.ahanaService.getSelectedRole(roleId, accessToken).subscribe((roleDatas: any) => {
			// console.log(roleDatas);
			if (roleDatas.success) {
				self.model.name = roleDatas.return.description;
				self.model.status = roleDatas.return.status;
				self.model.deleted_at = roleDatas.return.deleted_at;
			}
		})
	}

	onSubmit () {
		var accessToken = localStorage.getItem('access_token');
		var self = this;
		var reqData = {};
		reqData['status'] = this.model.status.toString();
		reqData['deleted_at'] = this.model.deleted_at;
		reqData['role_id'] = parseInt(this.route.params['value'].id);
		reqData['description'] = this.model.name;
		reqData['tenant_id'] = parseInt(localStorage.getItem('ngStorage-system_tenant_id'));
		// console.log(reqData);
		this.ahanaService.updateRole(reqData, accessToken).subscribe((data: any) => {
			// console.log(data);
			if (data.success) {
				self.alertType = 'success';
				self.alertMessage = 'Role updated successful !';
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
