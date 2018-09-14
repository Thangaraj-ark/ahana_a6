import { Component, OnInit, Renderer, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { AhanaService } from '../../../../services/ahana.service';

@Component({
	selector: 'app-roles',
	templateUrl: './roles.component.html',
	styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements AfterViewInit, OnInit {
	showTable = false;
	dtOptions: DataTables.Settings = {};

	constructor(public router: Router, private ahanaService: AhanaService, private renderer: Renderer) {}

	ngOnInit() {
		this.goInit();
	}

	goInit () {
		var accessToken = localStorage.getItem('access_token');
		var self = this;
		this.ahanaService.getAllRoles(accessToken).subscribe((roleDatas: any) => {
			// console.log(roleDatas)
			if (roleDatas && roleDatas.length) {
				var tableDatas = [];
				// roleDatas = roleDatas.sort((a, b) => a.created_at - b.created_at));
				for (var i=0; i<roleDatas.length; i++) {
					tableDatas.push({roleId: roleDatas[i].role_id, description: roleDatas[i].description, action: ''})
					if (i == roleDatas.length - 1) {
						this.dtOptions = {
							// order: [[ 1, "asc" ]],
							data: tableDatas,
							columns: [{
								title: 'Role Id',
								visible: false,
								data: 'roleId'
							}, {
								title: 'Description',
								data: 'description'
							}, {
								title: 'Action',
								orderable: false,
								render: function (data: any, type: any, full: any) {
									// console.log(full)
									return '<i roleId="' + full.roleId + '" class="fa fa-fw fa-edit"></i>';
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
			if (event.target.hasAttribute("roleId")) {
				var roleId = event.target.getAttribute('roleId')
				// console.log('/configuration/update-role/' + roleId)
				this.router.navigate(['/configuration/update-role/' + roleId]);
			}
		});
	}

}
