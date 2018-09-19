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
import { ColorPickerModule } from 'ngx-color-picker';

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
import { CreateSpecialityComponent } from './configuration/administrative-module/specialities/create-speciality/create-speciality.component';
import { UpdateSpecialityComponent } from './configuration/administrative-module/specialities/update-speciality/update-speciality.component';
import { PatientCategoriesComponent } from './configuration/administrative-module/patient-categories/patient-categories.component';
import { CreatePatientCategoryComponent } from './configuration/administrative-module/patient-categories/create-patient-category/create-patient-category.component';
import { UpdatePatientCategoryComponent } from './configuration/administrative-module/patient-categories/update-patient-category/update-patient-category.component';
import { ChargeCategoryComponent } from './configuration/administrative-module/charge-category/charge-category.component';
import { RoomChargeItemComponent } from './configuration/administrative-module/room-charge-item/room-charge-item.component';
import { UserRegistrationComponent } from './configuration/user-module/user-registration/user-registration.component';
import { UserRolesComponent } from './configuration/user-module/user-roles/user-roles.component';
import { UserBranchesComponent } from './configuration/user-module/user-branches/user-branches.component';

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
		DataTablesModule,
        ColorPickerModule
    ],
    declarations: [
    	LayoutComponent,
    	SidebarComponent,
    	HeaderComponent,
    	TexteditorComponent,
    	CalendarComponent,
    	DataTableComponent,
    	InnerHeaderComponent,

    	// Routhing Componens

    	ConfigurationComponent,
    	RolesComponent,
    	CreateRoleComponent,
    	UpdateRoleComponent,
    	RoleRightsComponent,
    	SpecialitiesComponent,
    	CreateSpecialityComponent,
    	UpdateSpecialityComponent,
    	PatientCategoriesComponent,
    	CreatePatientCategoryComponent,
    	UpdatePatientCategoryComponent,
        ChargeCategoryComponent,
        RoomChargeItemComponent,
    	UserRegistrationComponent,
    	UserRolesComponent,
    	UserBranchesComponent
    ]
})
export class LayoutModule {}
