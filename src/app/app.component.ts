import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { ContactsPage } from "../pages/contacts/contacts";
import { VitalInformationsPage } from "../pages/vital-informations/vital-informations";

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	rootPage:any = TabsPage;
	homePage: TabsPage;
	contactsPage: TabsPage;
	vitalInformationsPage: TabsPage;
	
	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
		// this.contactsPage = ContactsPage;
		// this.vitalInformationsPage = VitalInformationsPage;
		
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			statusBar.styleDefault();
			splashScreen.hide();
		});
	}
	
	openPage(page){
		this.rootPage = page;
	}
}
