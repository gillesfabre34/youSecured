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
	@ViewChild(Nav) nav: Nav;
	rootPage:any = HomePage;
	pages: Array<{title: string, component: any}>;
	homePage: TabsPage;
	contactsPage: any;
	vitalInformationsPage: any;
	
	constructor(
		public platform: Platform,
		public menu: MenuController,
		public statusBar: StatusBar,
		public splashScreen: SplashScreen) {
		this.initializeApp();
		this.pages = [
			// {title: 'YouSecured', component: HomePage},
			{title: 'Contacts', component: ContactsPage},
			{title: 'Vital informations', component: VitalInformationsPage},
		];
	}
	
	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
	
/*	ngOnInit() {
		this.nav.push(HomePage);
		this.nav.push(ContactsPage);
		this.nav.push(VitalInformationsPage);
	}*/
	
	openPage(page){
		this.menu.close();
		this.nav.push(page.component);
		// this.nav.setRoot(page.component);
	}
}
