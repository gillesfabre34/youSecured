import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from "angularfire2/database";
import { FirebaseProvider } from "../../providers/firebase/firebase";

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	addedContact: boolean;
	signup: boolean;
	users: FirebaseListObservable<any[]>;
	
	constructor(public fireBaseProvider: FirebaseProvider) {
		this.addedContact = false;
		this.signup = false;
		this.users = this.fireBaseProvider.getUsers();
	}
	
	submitSignUp() {
		this.signup = true;
		this.fireBaseProvider.addUser("zzz");
	}
	
	submitAddContact() {
		this.addedContact = true;
	}
	
}
