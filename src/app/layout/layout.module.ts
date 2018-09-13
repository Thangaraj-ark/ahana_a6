import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { CKEditorModule } from 'ng2-ckeditor';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { DataTablesModule } from 'angular-datatables';
import { TreeviewModule } from 'ngx-treeview';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { TexteditorComponent } from './components/texteditor/texteditor.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { InnerHeaderComponent } from './components/inner-header/inner-header.component';

import { ConfigurationComponent } from './configuration/configuration.component';
import { RolesComponent } from './configuration/administrative-module/roles/roles.component';
import { CreateRoleComponent } from './configuration/administrative-module/roles/create-role/create-role.component';
import { UpdateRoleComponent } from './configuration/administrative-module/roles/update-role/update-role.component';
import { RoleRightsComponent } from './configuration/administrative-module/role-rights/role-rights.component';
import { SpecialitiesComponent } from './configuration/administrative-module/specialities/specialities.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
		FormsModule,
		NgbDropdownModule.forRoot(),
		NgbModule.forRoot(),
        NgbAlertModule.forRoot(),
		FlatpickrModule.forRoot(),
		TreeviewModule.forRoot(),
		CalendarModule.forRoot({
			provide: DateAdapter,
			useFactory: adapterFactory
		}),
		CKEditorModule,
		DataTablesModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, TexteditorComponent, CalendarComponent, RolesComponent, DataTableComponent, ConfigurationComponent, InnerHeaderComponent, CreateRoleComponent, UpdateRoleComponent, RoleRightsComponent, SpecialitiesComponent]
})
export class LayoutModule {}
