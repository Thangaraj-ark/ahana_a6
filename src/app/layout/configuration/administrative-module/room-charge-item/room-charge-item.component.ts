import { Component, OnInit, Renderer, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { AhanaService } from '../../../../services/ahana.service';

@Component({
	selector: 'app-room-charge-item',
	templateUrl: './room-charge-item.component.html',
	styleUrls: ['./room-charge-item.component.scss']
})
export class RoomChargeItemComponent implements OnInit {

	showTable = false;
	dtOptions: any = {};
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
		this.ahanaService.getAllRoomChargeItems(accessToken).subscribe((roomChargeItems: any) => {
			// console.log(roomChargeItems)
			if (roomChargeItems && roomChargeItems.length) {
				var tableDatas = [];
				// roomChargeItems = roomChargeItems.sort((a, b) => a.created_at - b.created_at));
				for (var i=0; i<roomChargeItems.length; i++) {
					tableDatas.push({
						chargeItemId: roomChargeItems[i].charge_item_id,
						chargeItemName: roomChargeItems[i].charge_item_name,
						chargeItemDescription: roomChargeItems[i].charge_item_description,
						chargeItemCode: roomChargeItems[i].charge_item_code,
						status: roomChargeItems[i].status,
						action: ''})
					if (i == roomChargeItems.length - 1) {
						this.dtOptions = {
							// order: [[ 1, "asc" ]],
							data: tableDatas,
							columns: [{
								title: 'Charge Item Id',
								visible: false,
								data: 'chargeItemId'
							}, {
								title: 'Charge Item Name',
								data: 'chargeItemName'
							}, {
								title: 'Charge Item Description',
								data: 'chargeItemDescription'
							}, {
								title: 'Charge Item Code',
								data: 'chargeItemCode'
							}, {
								title: 'Status',
								orderable: false,
								render: function (data: any, type: any, full: any) {
									// console.log(full)
									if (full.status != '0') {
										return '<div class="checkbox"><input type="checkbox" chargeItemId="checkbox_' + full.chargeItemId + '" id="checkbox_' + full.chargeItemId + '" class="" value="" checked name="status" /><span class="checkmark" chargeItemId="checkbox_' + full.chargeItemId + '"></span></div>';
									} else {
										return '<div class="checkbox"><input type="checkbox" chargeItemId="checkbox_' + full.chargeItemId + '" id="checkbox_' + full.chargeItemId + '" class="" value="" name="status" /><span class="checkmark" chargeItemId="checkbox_' + full.chargeItemId + '"></span></div>';
									}
								}
							}, {
								title: 'Action',
								orderable: false,
								render: function (data: any, type: any, full: any) {
									// console.log(full)
									return '<i chargeItemId="' + full.chargeItemId + '" class="fa fa-fw fa-edit"></i>';
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
			var clickElementStatus = event.target.hasAttribute("chargeItemId");
			if (clickElementStatus) {
				var chargeItemId = event.target.getAttribute('chargeItemId');
				if (chargeItemId.search('checkbox_') != -1) {
					var accessToken = localStorage.getItem('access_token');
					var self = this;
					chargeItemId = chargeItemId.split('_')[1];
					this.ahanaService.changeSpecialityStatus({id: chargeItemId, model: "CoRoomChargeItem"}, accessToken).subscribe((result: any) => {
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
						document.getElementById('checkbox_' + chargeItemId)['checked'] = false;
						setTimeout(function() {
							self.showAlert = false;
						}, 3000)
					})
				} else {
					// console.log('/configuration/update-room-charge-item/' + chargeItemId)
					this.router.navigate(['/configuration/update-room-charge-item/' + chargeItemId]);
				}
			}
		});
	}

}
