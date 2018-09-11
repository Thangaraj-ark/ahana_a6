import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AhanaServiceService } from '../../../ahana-service.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	pushRightClass: string = 'push-right';

	constructor(private translate: TranslateService, public router: Router, private ahanaService: AhanaServiceService) {

		this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
		this.translate.setDefaultLang('en');
		const browserLang = this.translate.getBrowserLang();
		this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

		this.router.events.subscribe(val => {
			if (
				val instanceof NavigationEnd &&
				window.innerWidth <= 992 &&
				this.isToggled()
			) {
				this.toggleSidebar();
			}
		});
	}

	ngOnInit() {}

	isToggled(): boolean {
		const dom: Element = document.querySelector('body');
		return dom.classList.contains(this.pushRightClass);
	}

	toggleSidebar() {
		const dom: any = document.querySelector('body');
		dom.classList.toggle(this.pushRightClass);
	}

	rltAndLtr() {
		const dom: any = document.querySelector('body');
		dom.classList.toggle('rtl');
	}

	onLoggedout() {
		this.ahanaService.siteLogout().subscribe((data: any) => {
			// console.log(data.success)
			if (data.success) {
				localStorage.removeItem('isLoggedin');
				localStorage.removeItem('ngStorage-stay');
				localStorage.removeItem('access_token');
				localStorage.removeItem('ngStorage-system_tenant');
				localStorage.removeItem('ngStorage-system_tenant_id');
				localStorage.removeItem('ngStorage-system_username');
				this.router.navigate(['login']);
			}
		})
	}

	changeLang(language: string) {
		this.translate.use(language);
	}
}
