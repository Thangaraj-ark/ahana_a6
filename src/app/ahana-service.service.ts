import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../environments/environment';
import * as moment from 'moment';

@Injectable({
	providedIn: 'root'
})
export class AhanaServiceService {

	baseUrl = environment.baseUrl;
	constructor(private http: HttpClient) {}

	httpOptions = {
		headers: new HttpHeaders({
			'Access-Control-Allow-Origin':  '*',
			'x-domain-path': window['origin'],
			'config-route': window['location']['pathname']
		})
	};

	getTenantLists () {
		var reqTime = new Date();
		this.httpOptions.headers.set('request-time', moment().format('YYYY-MM-DD hh:mm:ss'))
		return this.http.get(this.baseUrl + 'IRISORG/web/v1/default/get-tenant-list', this.httpOptions);
	}

	loginAuthenticate (paramData) {
		var reqTime = new Date();
		this.httpOptions.headers.set('request-time', moment().format('YYYY-MM-DD hh:mm:ss'))
		return this.http.post(this.baseUrl + 'IRISORG/web/v1/user/login', paramData, this.httpOptions);
	}

	siteLogout () {
		var reqTime = new Date();
		this.httpOptions.headers.set('request-time', moment().format('YYYY-MM-DD hh:mm:ss'))
		return this.http.post(this.baseUrl + 'IRISORG/web/v1/user/logout', this.httpOptions);
	}
}
