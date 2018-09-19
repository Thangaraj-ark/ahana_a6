import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
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

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [{
            path: '',
            redirectTo: 'configuration'
        }, {
            path: 'configuration',
            component: ConfigurationComponent,
        }, {
            path: 'configuration/roles',
            component: RolesComponent
        }, {
            path: 'configuration/create-role',
            component: CreateRoleComponent
        }, {
            path: 'configuration/update-role/:id',
            component: UpdateRoleComponent
        }, {
            path: 'configuration/role-rights',
            component: RoleRightsComponent
        }, {
            path: 'configuration/specialities',
            component: SpecialitiesComponent
        }, {
            path: 'configuration/create-speciality',
            component: CreateSpecialityComponent
        }, {
            path: 'configuration/update-speciality/:id',
            component: UpdateSpecialityComponent
        }, {
            path: 'configuration/patient-categories',
            component: PatientCategoriesComponent
        }, {
            path: 'configuration/create-patient-category',
            component: CreatePatientCategoryComponent
        }, {
            path: 'configuration/update-patient-category/:id',
            component: UpdatePatientCategoryComponent
        }, {
            path: 'configuration/charge-category',
            component: ChargeCategoryComponent
        }, {
            path: 'configuration/room-charge-item',
            component: RoomChargeItemComponent
        }, {
            path: 'configuration/registration',
            component: UserRegistrationComponent
        }, {
            path: 'configuration/user-roles',
            component: UserRolesComponent
        }, {
            path: 'configuration/user-branches',
            component: UserBranchesComponent
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
