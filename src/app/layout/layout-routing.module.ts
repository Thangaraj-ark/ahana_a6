import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { RolesComponent } from './configuration/administrative-module/roles/roles.component';
import { CreateRoleComponent } from './configuration/administrative-module/roles/create-role/create-role.component';
import { UpdateRoleComponent } from './configuration/administrative-module/roles/update-role/update-role.component';

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
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
