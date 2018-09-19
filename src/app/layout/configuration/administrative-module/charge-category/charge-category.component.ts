import { Component, OnInit, Renderer, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { AhanaService } from '../../../../services/ahana.service';

@Component({
	selector: 'app-charge-category',
	templateUrl: './charge-category.component.html',
	styleUrls: ['./charge-category.component.scss']
})
export class ChargeCategoryComponent implements OnInit {

	showTable = false;
	dtOptions: any = {};
	allChargeCategories = [];

	constructor(public router: Router, private ahanaService: AhanaService, private renderer: Renderer) {}

	ngOnInit() {
		this.goInit();
	}

	goInit () {
		var accessToken = localStorage.getItem('access_token');
		var self = this;
		this.ahanaService.getAllChargeCategories(accessToken).subscribe((catgDatas: any) => {
			// console.log(catgDatas)
			if (catgDatas && catgDatas.list) {
				var tableDatas = [];
				self.allChargeCategories = catgDatas.list;
				// catgDatas = catgDatas.sort((a, b) => a.created_at - b.created_at));
				for (var i=0; i<catgDatas.list.length; i++) {
					tableDatas.push({
						chargeCatgId: catgDatas.list[i].charge_cat_id,
						chargeCategoryName: catgDatas.list[i].charge_cat_name,
						chargeCategoryDescription: catgDatas.list[i].charge_cat_description,
						chargeCategoryCode: catgDatas.list[i].charge_cat_code,
						status: catgDatas.list[i].status,
						action: ''
					});
					if (i == catgDatas.list.length - 1) {
						console.log(tableDatas)
						self.dtOptions = {
							// order: [[ 1, "asc" ]],
							data: tableDatas,
							columns: [{
								title: 'Charge Category Id',
								visible: false,
								data: 'chargeCatgId'
							}, {
								orderable: false,
								render: function (data: any, type: any, full: any) {
									// console.log(full)
									return '<img style="cursor:pointer;" chargeCatgId="opneChild_' + full.chargeCatgId + '" src="assets/images/details_open.png" />';
								}
							}, {
							// 	className: 'details-control',
							// 	orderable: false,
							// 	data: null,
							// 	defaultContent: ''
							// }, {
								title: 'Charge Category name',
								data: 'chargeCategoryName'
							}, {
								title: 'Charge Category Description',
								data: 'chargeCategoryDescription'
							}, {
								title: 'Charge Category Code',
								data: 'chargeCategoryCode'
							}, {
								title: 'Status',
								data: 'status',
								orderable: false,
								render: function (data: any, type: any, full: any) {
									// console.log(full)
									if (full.status != '0') {
										return '<div class="checkbox"><input type="checkbox" class="" chargeCatgId="checkbox_' + full.chargeCatgId + '" value="" checked name="status" /><span class="checkmark"></span></div>';
									} else {
										return '<div class="checkbox"><input type="checkbox" class="" chargeCatgId="checkbox_' + full.chargeCatgId + '" value="" name="status" /><span class="checkmark"></span></div>';
									}
								}
							}, {
								title: 'Action',
								data: 'action',
								orderable: false,
								render: function (data: any, type: any, full: any) {
									// console.log(full)
									return '<i chargeCatgId="' + full.chargeCatgId + '" class="fa fa-fw fa-edit"></i>';
								}
							}],
							responsive: true
							// rowCallback: (row: Node, data: any[] | Object, index: number) => {
							// 	console.log('rowCallback', row.childNodes, data, index)
							// 	// const self = this;
							// 	// // Unbind first in order to avoid any duplicate handler
							// 	// // (see https://github.com/l-lin/angular-datatables/issues/87)
							// 	$('td', row).unbind('click');
							// 	$('td', row).bind('click', () => {
							// 		console.log('rowCallback', row, data, index)
							// 	});
							// 	return row;
							// }
						}
						self.showTable = true;
					}
				}
			}
		})
	}

	ngAfterViewInit(): void {
		var self = this;
		this.renderer.listenGlobal('document', 'click', (event) => {
			if (event.target.hasAttribute("chargeCatgId")) {
				var chargeCatgId = event.target.getAttribute('chargeCatgId');
				if (chargeCatgId.search('checkbox_') != -1) {} else if (chargeCatgId.search('opneChild_') != -1) {
					// console.log(this.allChargeCategories, chargeCatgId)
					// var clickCatgIndex = this.allChargeCategories.map(function (e) { return e.chargeCatgId; }).indexOf(chargeCatgId)
					// if (clickCatgIndex != -1) {
					// 	var cueChildDatas = this.allChargeCategories[clickCatgIndex].subcategories;
					// 	if (cueChildDatas && cueChildDatas.length) {
					// 		var childTableData = '<div><div><h5>Sub Categories</h5></div><ul>'
					// 		for (var i=0; i<cueChildDatas.length; i++) {
					// 			childTableData += '<li>cueChildDatas';
					// 		}
					// 	}
					// }
					// event.target.appendChild
				} else {
					console.log('/configuration/update-charge-category/' + chargeCatgId)
					// this.router.navigate(['/configuration/update-charge-category/' + chargeCatgId]);
				}
			}
		});
	}

}
