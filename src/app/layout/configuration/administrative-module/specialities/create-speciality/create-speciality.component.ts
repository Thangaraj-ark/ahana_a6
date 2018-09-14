import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AhanaService } from '../../../../../services/ahana.service';

@Component({
	selector: 'app-create-speciality',
	templateUrl: './create-speciality.component.html',
	styleUrls: ['./create-speciality.component.scss']
})
export class CreateSpecialityComponent implements OnInit {

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
		reqData['speciality_name'] = this.model.name;
		// console.log(reqData);
		this.ahanaService.createSpeciality(reqData, accessToken).subscribe((data: any) => {
			// console.log(data);
			if (data) {
				self.alertType = 'success';
				self.alertMessage = 'Speciality saved successful !';
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
