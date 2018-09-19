import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AhanaService } from '../../../../../services/ahana.service';

@Component({
	selector: 'app-update-speciality',
	templateUrl: './update-speciality.component.html',
	styleUrls: ['./update-speciality.component.scss']
})
export class UpdateSpecialityComponent implements OnInit {

	model: any = {};
	showAlert = false;
	alertType = '';
	alertMessage = '';

	constructor(public router: Router, private route: ActivatedRoute, private ahanaService: AhanaService) {}

	ngOnInit() {
		this.goInit();
	}

	goInit () {
		var specialityId = this.route.params['value'].id;
		// console.log(specialityId);
		var accessToken = localStorage.getItem('access_token');
		var self = this;
		this.ahanaService.getSelectedSpeciality(specialityId, accessToken).subscribe((specialityDatas: any) => {
			// console.log(specialityDatas);
			if (specialityDatas) {
				self.model.name = specialityDatas.speciality_name;
				self.model.status = specialityDatas.status;
				self.model.deleted_at = specialityDatas.deleted_at;
				self.model.created_at = specialityDatas.created_at;
				self.model.created_by = specialityDatas.created_by;
				self.model.modified_at = specialityDatas.modified_at;
				self.model.modified_by = specialityDatas.modified_by;
			}
		})
	}
	onSubmit () {
		var accessToken = localStorage.getItem('access_token');
		var self = this;
		var reqData = {};
		reqData['status'] = this.model.status.toString();
		reqData['created_at'] = this.model.created_at;
		reqData['created_by'] = this.model.created_by;
		reqData['modified_at'] = this.model.modified_at;
		reqData['modified_by'] = this.model.modified_by;
		reqData['deleted_at'] = this.model.deleted_at;
		reqData['speciality_id'] = parseInt(this.route.params['value'].id);
		reqData['speciality_name'] = this.model.name;
		reqData['tenant_id'] = parseInt(localStorage.getItem('ngStorage-system_tenant_id'));
		// console.log(reqData);
		this.ahanaService.updateSpeciality(reqData, accessToken).subscribe((data: any) => {
			// console.log(data);
			if (data) {
				self.alertType = 'success';
				self.alertMessage = 'Speciality updated successful !';
				self.showAlert = true;
				setTimeout(function() {
					self.showAlert = false;
					self.router.navigate(['configuration/specialities']);
				}, 1000)
			} else {
				self.alertType = 'danger';
				self.alertMessage = data.message;
				self.showAlert = true;
				setTimeout(function() {
					self.showAlert = false;
				}, 3000)
			}
		}, error => {
			self.alertType = 'danger';
			self.alertMessage = Array.isArray(error.error) ? error.error[0].message : error.error.message;
			self.showAlert = true;
			setTimeout(function() {
				self.showAlert = false;
			}, 3000)
		});
	}

}
