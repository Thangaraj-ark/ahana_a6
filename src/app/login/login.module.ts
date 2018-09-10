import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
    	CommonModule,
    	LoginRoutingModule,
    	ReactiveFormsModule,
    	FormsModule,
    	HttpClientModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}
