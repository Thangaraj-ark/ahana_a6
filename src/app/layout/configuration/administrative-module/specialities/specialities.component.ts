import { Component, OnInit, Renderer, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { AhanaService } from '../../../../services/ahana.service';

@Component({
	selector: 'app-specialities',
	templateUrl: './specialities.component.html',
	styleUrls: ['./specialities.component.scss']
})
export class SpecialitiesComponent implements OnInit {
	
	showTable = false;
	dtOptions: DataTables.Settings = {};
	showAlert = false;
	alertType = '';
	alertMessage = '';

	constructor(public router: Router, private ahanaService: AhanaService, private renderer: Renderer) {}

	ngOnInit() {
		this.goInit();
	}

	goInit () {
		var accessToken = localStorage.getItem('access_token');
		var self = this;
		this.ahanaService.getAllSpecialities(accessToken).subscribe((specialityDatas: any) => {
			// console.log(specialityDatas)
			if (specialityDatas && specialityDatas.length) {
				var tableDatas = [];
				// specialityDatas = specialityDatas.sort((a, b) => a.created_at - b.created_at));
				for (var i=0; i<specialityDatas.length; i++) {
					tableDatas.push({specialityId: specialityDatas[i].speciality_id, specialityName: specialityDatas[i].speciality_name, status: specialityDatas[i].status, action: ''})
					if (i == specialityDatas.length - 1) {
						this.dtOptions = {
							// order: [[ 1, "asc" ]],
							data: tableDatas,
							columns: [{
								title: 'Speciality Id',
								visible: false,
								data: 'specialityId'
							}, {
								title: 'Speciality Name',
								data: 'specialityName'
							}, {
								title: 'Status',
								orderable: false,
								render: function (data: any, type: any, full: any) {
									// console.log(full)
									if (full.status != '0') {
										return '<div class="checkbox"><input type="checkbox" class="" specialityId="checkbox_' + full.specialityId + '" value="" checked name="status" /><span class="checkmark"></span></div>';
									} else {
										return '<div class="checkbox"><input type="checkbox" class="" specialityId="checkbox_' + full.specialityId + '" value="" name="status" /><span class="checkmark"></span></div>';
									}
								}
							}, {
								title: 'Action',
								orderable: false,
								render: function (data: any, type: any, full: any) {
									// console.log(full)
									return '<i specialityId="' + full.specialityId + '" class="fa fa-fw fa-edit"></i>';
								}
							}]
						}
						self.showTable = true;
					}
				}
			}
		})
	}

	ngAfterViewInit(): void {
		this.renderer.listenGlobal('document', 'click', (event) => {
			var clickElementStatus = event.target.hasAttribute("specialityId");
			if (clickElementStatus) {
				var specialityId = event.target.getAttribute('specialityId');
				if (specialityId.search('checkbox_') != -1) {
					var accessToken = localStorage.getItem('access_token');
					var self = this;
					specialityId = specialityId.split('_')[1];
					this.ahanaService.changeSpecialityStatus({id: specialityId, model: "CoSpeciality"}, accessToken).subscribe((result: any) => {
						if (result.success == 'ok') {
							self.alertType = 'success';
							self.alertMessage = 'Status changed successful !';
							self.showAlert = true;
							setTimeout(function() {
								self.showAlert = false;
							}, 2000)
						}
					}, error => {
						self.alertType = 'danger';
						self.alertMessage = error.error.message;
						self.showAlert = true;
						document.getElementById('checkbox_' + specialityId)['checked'] = false;
						setTimeout(function() {
							self.showAlert = false;
						}, 3000)
					})
				} else {
					// console.log('/configuration/update-speciality/' + specialityId)
					this.router.navigate(['/configuration/update-speciality/' + specialityId]);
				}
			}
		});
	}

}
