import { Component, OnInit } from '@angular/core';
import { AhanaService } from '../../ahana.service';

@Component({
	selector: 'app-create-role',
	templateUrl: './create-role.component.html',
	styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit {

	model: any = {};

	constructor(private ahanaService: AhanaService) {}

	ngOnInit() {
		this.model['status'] = 1;
	}

	onSubmit() {
		console.log(this.model)
	}

}
