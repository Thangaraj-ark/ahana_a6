import { Component, OnInit, Renderer, AfterViewInit } from '@angular/core';
import { AhanaService } from '../../ahana.service';

@Component({
	selector: 'app-roles',
	templateUrl: './roles.component.html',
	styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements AfterViewInit, OnInit {
	showTable = false;
	dtOptions: DataTables.Settings = {};

	constructor(private ahanaService: AhanaService, private renderer: Renderer) {}

	ngOnInit() {
		this.goInit();
	}

	goInit () {
		var accessToken = localStorage.getItem('access_token');
		var self = this;
		this.ahanaService.getAllRoles(accessToken).subscribe((data: any) => {
			// console.log(data)
			if (data && data.length) {
				var tableDatas = [];
				for (var i=0; i<data.length; i++) {
					tableDatas.push({roleId: data[i].role_id, description: data[i].description, action: ''})
					if (i == data.length - 1) {
						this.dtOptions = {
							order: [[ 1, "asc" ]],
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
									return '<i id="' + full.roleId + '" class="fa fa-fw fa-edit"></i>';
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
			if (event.target.hasAttribute("id")) {
				console.log(event.target.getAttribute("id"))
				// this.router.navigate(["/person/" + event.target.getAttribute("view-person-id")]);
			}
		});
	}

}
