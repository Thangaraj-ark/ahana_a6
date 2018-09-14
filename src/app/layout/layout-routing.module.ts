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
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
