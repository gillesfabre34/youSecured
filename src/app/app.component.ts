import { Component, ViewChild } from '@angular/core';
import { MenuController, Nav, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { ContactsPage } from "../pages/contacts/contacts";
import { VitalInformationsPage } from "../pages/vital-informations/vital-informations";
import { HomePage } from "../pages/home/home";

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	rootPage:any = HomePage;
	pages: Array<{title: string, component: any}>;
	homePage: TabsPage;
	@ViewChild('nav') nav: NavController;
	contactsPage: any;
	vitalInformationsPage: any;
	
	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menu: MenuController) {
		this.contactsPage = ContactsPage;
		this.vitalInformationsPage = VitalInformationsPage;
		
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			statusBar.styleDefault();
			splashScreen.hide();
		});
	}
	
/*	ngOnInit() {
		this.nav.push(HomePage);
		this.nav.push(ContactsPage);
		this.nav.push(VitalInformationsPage);
	}*/
	
	openPage(page){
		this.nav.push(page);
		this.rootPage = page;
	}
}
