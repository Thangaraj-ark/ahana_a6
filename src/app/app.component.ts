import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	constructor(private titleService: Title) {}

	ngOnInit() {
		if (localStorage.getItem('ngStorage-system_tenant')) {
			this.titleService.setTitle('IRIS(' + localStorage.getItem('ngStorage-system_tenant') + ')');
		} else {
			this.titleService.setTitle('IRIS');
		}
	}
}
