import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactsPage } from "../contacts/contacts";
import { HomePage } from "../home/home";

/**
 * Generated class for the VitalInformationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
	selector: 'page-vital-informations',
	templateUrl: 'vital-informations.html',
})
export class VitalInformationsPage {
	
	tab1Root = HomePage;
	tab2Root = ContactsPage;
	tab3Root = VitalInformationsPage;
	
	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}
	
	ionViewDidLoad() {
		console.log('ionViewDidLoad VitalInformationsPage');
	}
	
}
