import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { RolesComponent } from './roles/roles.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { CreateRoleComponent } from './create-role/create-role.component';

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
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
