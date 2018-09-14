import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as moment from 'moment';

@Injectable({
	providedIn: 'root'
})
export class AhanaService {
	baseUrl = environment.baseUrl;
	constructor(private http: HttpClient) {}

	httpOptions = {
		headers: new HttpHeaders({
			'Access-Control-Allow-Origin': '*',
			'x-domain-path': window['origin']
		})
	};

	getTenantLists () {
		var reqTime = new Date();
		this.httpOptions.headers = this.httpOptions.headers.set('request-time', moment().format('YYYY-MM-DD hh:mm:ss'));
		this.httpOptions.headers = this.httpOptions.headers.set('config-route', window['location']['pathname'].replace(/\//g, '.'));
		return this.http.get(this.baseUrl + 'IRISORG/web/v1/default/get-tenant-list', this.httpOptions);
	}

	loginAuthenticate (paramData) {
		var reqTime = new Date();
		this.httpOptions.headers = this.httpOptions.headers.set('request-time', moment().format('YYYY-MM-DD hh:mm:ss'));
		this.httpOptions.headers = this.httpOptions.headers.set('config-route', window['location']['pathname'].replace(/\//g, '.'));
		return this.http.post(this.baseUrl + 'IRISORG/web/v1/user/login', paramData, this.httpOptions);
	}

	siteLogout () {
		var reqTime = new Date();
		this.httpOptions.headers = this.httpOptions.headers.set('request-time', moment().format('YYYY-MM-DD hh:mm:ss'));
		this.httpOptions.headers = this.httpOptions.headers.set('config-route', window['location']['pathname'].replace(/\//g, '.'));
		return this.http.post(this.baseUrl + 'IRISORG/web/v1/user/logout', this.httpOptions);
	}

	getAllRoles (accessToken) {
		var reqTime = new Date();
		this.httpOptions.headers = this.httpOptions.headers.set('request-time', moment().format('YYYY-MM-DD hh:mm:ss'));
		this.httpOptions.headers = this.httpOptions.headers.set('config-route', window['location']['pathname'].replace(/\//g, '.'));
		return this.http.get(this.baseUrl + 'IRISORG/web/v1/role?access-token=' + accessToken, this.httpOptions);
	}

	getSelectedRole (roleId, accessToken) {
		var reqTime = new Date();
		this.httpOptions.headers = this.httpOptions.headers.set('request-time', moment().format('YYYY-MM-DD hh:mm:ss'));
		this.httpOptions.headers = this.httpOptions.headers.set('config-route', window['location']['pathname'].replace(/\//g, '.'));
		return this.http.get(this.baseUrl + 'IRISORG/web/v1/role/getrole?id=' + roleId +'&access-token=' + accessToken, this.httpOptions);
	}

	createRoles (paramData, accessToken) {
		var reqTime = new Date();
		this.httpOptions.headers = this.httpOptions.headers.set('request-time', moment().format('YYYY-MM-DD hh:mm:ss'));
		this.httpOptions.headers = this.httpOptions.headers.set('config-route', window['location']['pathname'].replace(/\//g, '.'));
		return this.http.post(this.baseUrl + 'IRISORG/web/v1/roles/createrole?access-token=' + accessToken, paramData, this.httpOptions);
	}

	updateRole (paramData, accessToken) {
		var reqTime = new Date();
		this.httpOptions.headers = this.httpOptions.headers.set('request-time', moment().format('YYYY-MM-DD hh:mm:ss'));
		this.httpOptions.headers = this.httpOptions.headers.set('config-route', window['location']['pathname'].replace(/\//g, '.'));
		return this.http.post(this.baseUrl + 'IRISORG/web/v1/roles/updaterole?access-token=' + accessToken, paramData, this.httpOptions);
	}

	getRoleRights (accessToken) {
		var reqTime = new Date();
		this.httpOptions.headers = this.httpOptions.headers.set('request-time', moment().format('YYYY-MM-DD hh:mm:ss'));
		this.httpOptions.headers = this.httpOptions.headers.set('config-route', window['location']['pathname'].replace(/\//g, '.'));
		return this.http.get(this.baseUrl + 'IRISORG/web/v1/organization/getorg?access-token=' + accessToken, this.httpOptions);
	}

	getAllSpecialities (accessToken) {
		var reqTime = new Date();
		this.httpOptions.headers = this.httpOptions.headers.set('request-time', moment().format('YYYY-MM-DD hh:mm:ss'));
		this.httpOptions.headers = this.httpOptions.headers.set('config-route', window['location']['pathname'].replace(/\//g, '.'));
		return this.http.get(this.baseUrl + 'IRISORG/web/v1/speciality?access-token=' + accessToken, this.httpOptions);
	}

	changeSpecialityStatus (paramData, accessToken) {
		var reqTime = new Date();
		this.httpOptions.headers = this.httpOptions.headers.set('request-time', moment().format('YYYY-MM-DD hh:mm:ss'));
		this.httpOptions.headers = this.httpOptions.headers.set('config-route', window['location']['pathname'].replace(/\//g, '.'));
		return this.http.post(this.baseUrl + 'IRISORG/web/v1/country/change-status?access-token=' + accessToken, paramData, this.httpOptions);
	}

	getSelectedSpeciality (SpecialityId, accessToken) {
		var reqTime = new Date();
		this.httpOptions.headers = this.httpOptions.headers.set('request-time', moment().format('YYYY-MM-DD hh:mm:ss'));
		this.httpOptions.headers = this.httpOptions.headers.set('config-route', window['location']['pathname'].replace(/\//g, '.'));
		return this.http.get(this.baseUrl + 'IRISORG/web/v1/specialities/' + SpecialityId +'?access-token=' + accessToken, this.httpOptions);
	}

	createSpeciality (paramData, accessToken) {
		var reqTime = new Date();
		this.httpOptions.headers = this.httpOptions.headers.set('request-time', moment().format('YYYY-MM-DD hh:mm:ss'));
		this.httpOptions.headers = this.httpOptions.headers.set('config-route', window['location']['pathname'].replace(/\//g, '.'));
		return this.http.post(this.baseUrl + 'IRISORG/web/v1/specialities?access-token=' + accessToken, paramData, this.httpOptions);
	}

	updateSpeciality (paramData, accessToken) {
		var reqTime = new Date();
		this.httpOptions.headers = this.httpOptions.headers.set('request-time', moment().format('YYYY-MM-DD hh:mm:ss'));
		this.httpOptions.headers = this.httpOptions.headers.set('config-route', window['location']['pathname'].replace(/\//g, '.'));
		return this.http.put(this.baseUrl + 'IRISORG/web/v1/specialities/' + paramData.speciality_id + '?access-token=' + accessToken, paramData, this.httpOptions);
	}

	getAllPatientCategories (accessToken) {
		var reqTime = new Date();
		this.httpOptions.headers = this.httpOptions.headers.set('request-time', moment().format('YYYY-MM-DD hh:mm:ss'));
		this.httpOptions.headers = this.httpOptions.headers.set('config-route', window['location']['pathname'].replace(/\//g, '.'));
		return this.http.get(this.baseUrl + 'IRISORG/web/v1/patientcategory?access-token=' + accessToken, this.httpOptions);
	}
}
