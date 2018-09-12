import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-configuration',
	templateUrl: './configuration.component.html',
	styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

	constructor() { }

	orgName = localStorage.getItem('ngStorage-system_tenant');
	menuOptions = [{
		title: 'Administrative Module',
		icon: 'fa fa-fw fa-dashboard',
		children: [{
			title: 'Roles',
			route: '/configuration/roles'
		}]
	}, {
		title: 'User Module',
		icon: 'fa fa-fw fa-users',
		route: '/configuration/roles'
	}];

	ngOnInit() {}

}
