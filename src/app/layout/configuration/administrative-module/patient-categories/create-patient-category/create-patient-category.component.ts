import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AhanaService } from '../../../../../services/ahana.service';

@Component({
	selector: 'app-create-patient-category',
	templateUrl: './create-patient-category.component.html',
	styleUrls: ['./create-patient-category.component.scss']
})
export class CreatePatientCategoryComponent implements OnInit {

	model: any = {};
	showAlert = false;
	alertType = '';
	alertMessage = '';
	colorPreview = '#000';

	constructor(public router: Router, private ahanaService: AhanaService) {}

	ngOnInit() {
		this.model['patient_cat_color'] = "#000";
	}

	sildChange (e) {
		// console.log(e);
		this.model['patient_cat_color'] = e.color;
	}

	onSubmit() {
		var accessToken = localStorage.getItem('access_token');
		var self = this;
		this.model['status'] = '1';
		this.model['formrole'] = 'add';
		this.ahanaService.createPatientCategory(this.model, accessToken).subscribe((data: any) => {
			// console.log(data);
			if (data) {
				self.alertType = 'success';
				self.alertMessage = 'Patient category saved successful !';
				self.showAlert = true;
				setTimeout(function() {
					self.showAlert = false;
					self.router.navigate(['configuration/patient-categories']);
				}, 1000)
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
