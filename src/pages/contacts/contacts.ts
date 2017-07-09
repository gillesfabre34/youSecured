import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
	selector: 'page-contacts',
	templateUrl: 'contacts.html',
})
export class ContactsPage {
	
	contacts: any[];
	
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.contacts = [];
		this.contacts.push({email:"myemail"});
		console.log("%cconstructor","font-weight:bold;");
		
	}
	
	ngOnInit(){
		console.log("oooook");
	}
	
	submitAddContact() {
	}
}
