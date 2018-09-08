import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CKEditorModule } from 'ng2-ckeditor';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';

import { PageHeaderModule } from '../shared';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { TexteditorComponent } from './components/texteditor/texteditor.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ExtraComponent } from './extra/extra.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
		FormsModule,
		NgbDropdownModule.forRoot(),
		NgbModule.forRoot(),
		FlatpickrModule.forRoot(),
		CalendarModule.forRoot({
			provide: DateAdapter,
			useFactory: adapterFactory
		}),
		PageHeaderModule,
		CKEditorModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, TexteditorComponent, CalendarComponent, ExtraComponent]
})
export class LayoutModule {}
