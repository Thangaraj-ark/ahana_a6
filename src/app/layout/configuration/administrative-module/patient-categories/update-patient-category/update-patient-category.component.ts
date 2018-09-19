import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AhanaService } from '../../../../../services/ahana.service';

@Component({
	selector: 'app-update-patient-category',
	templateUrl: './update-patient-category.component.html',
	styleUrls: ['./update-patient-category.component.scss']
})
export class UpdatePatientCategoryComponent implements OnInit {

	model: any = {};
	showAlert = false;
	alertType = '';
	alertMessage = '';

	constructor(public router: Router, private route: ActivatedRoute, private ahanaService: AhanaService) {}

	ngOnInit() {
		this.goInit();
	}

	goInit () {
		var PatientCategoryId = this.route.params['value'].id;
		// console.log(PatientCategoryId);
		var accessToken = localStorage.getItem('access_token');
		var self = this;
		this.ahanaService.getSelectedPatientCategory(PatientCategoryId, accessToken).subscribe((catgDatas: any) => {
			console.log(catgDatas);
			if (catgDatas) {
				self.model = catgDatas;
			}
		})
	}

	onSubmit () {
		var accessToken = localStorage.getItem('access_token');
		var self = this;
		this.model['tenant_id'] = parseInt(localStorage.getItem('ngStorage-system_tenant_id'));
		this.ahanaService.updatePatientCategory(this.model, accessToken).subscribe((data: any) => {
			console.log(data);
			if (data) {
				self.alertType = 'success';
				self.alertMessage = 'Patient category updated successful !';
				self.showAlert = true;
				setTimeout(function() {
					self.showAlert = false;
					self.router.navigate(['configuration/patient-categories']);
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
