import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    
    collapedSideBar: boolean;
    menuOptions = [];

    constructor() {}

    ngOnInit() {
    	var curMainMenu = window['location']['pathname'].split("/")[1]
        var curPath = window['location']['pathname'].split("/")[2]
        if (curMainMenu == 'configuration') {
            this.menuOptions = [{
                title: 'Administrative Module',
                icon: 'fa fa-fw fa-dashboard',
                children: [{
                    title: 'Roles',
                    route: '/configuration/roles'
                }, {
                    title: 'Role Rights',
                    route: '/configuration/role-rights'
                }, {
                    title: 'Specialities',
                    route: '/configuration/specialities'
                }, {
                    title: 'Patient Categories',
                    route: '/configuration/patient-categories'
                }]
            }, {
                title: 'User Module',
                icon: 'fa fa-fw fa-users',
                route: '/configuration/users'
            }];
        }
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
