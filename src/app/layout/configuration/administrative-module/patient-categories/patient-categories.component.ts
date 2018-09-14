import { Component, OnInit, Renderer, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { AhanaService } from '../../../../services/ahana.service';

@Component({
	selector: 'app-patient-categories',
	templateUrl: './patient-categories.component.html',
	styleUrls: ['./patient-categories.component.scss']
})
export class PatientCategoriesComponent implements OnInit {

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
		this.ahanaService.getAllPatientCategories(accessToken).subscribe((PatientCategoryDatas: any) => {
			// console.log(PatientCategoryDatas)
			if (PatientCategoryDatas && PatientCategoryDatas.length) {
				var tableDatas = [];
				// PatientCategoryDatas = PatientCategoryDatas.sort((a, b) => a.created_at - b.created_at));
				for (var i=0; i<PatientCategoryDatas.length; i++) {
					tableDatas.push({patientCategoryId: PatientCategoryDatas[i].patient_cat_id, patientCategoryName: PatientCategoryDatas[i].patient_cat_name, action: ''})
					if (i == PatientCategoryDatas.length - 1) {
						this.dtOptions = {
							// order: [[ 1, "asc" ]],
							data: tableDatas,
							columns: [{
								title: 'patient Category Id',
								visible: false,
								data: 'patientCategoryId'
							}, {
								title: 'Patient Category Name',
								data: 'patientCategoryName'
							}, {
								title: 'Action',
								orderable: false,
								render: function (data: any, type: any, full: any) {
									// console.log(full)
									return '<i patientCategoryId="' + full.patientCategoryId + '" class="fa fa-fw fa-edit"></i>';
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
			var clickElementStatus = event.target.hasAttribute("patientCategoryId");
			if (clickElementStatus) {
				var patientCategoryId = event.target.getAttribute('patientCategoryId');
				console.log('/configuration/update-patientCategory/' + patientCategoryId)
				// this.router.navigate(['/configuration/update-patientCategory/' + patientCategoryId]);
			}
		});
	}

}
