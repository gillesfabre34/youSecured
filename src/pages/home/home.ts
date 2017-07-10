import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from "angularfire2/database";
import { FirebaseProvider } from "../../providers/firebase/firebase";
import { User } from "../../assets/collections/user";

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	addedContact: boolean;
	signup: boolean;
	users: FirebaseListObservable<User[]>;
	
	constructor(public fireBaseProvider: FirebaseProvider) {
		this.addedContact = false;
		this.signup = false;
		this.users = this.fireBaseProvider.getUsers();
		console.log("%cHomePage constructor type of this.users","color: red; font-weight:bold;",this.users);
	}
	
	submitSignUp() {
		this.signup = true;
		this.fireBaseProvider.addUser("zzz");
	}
	
	submitAddContact() {
		this.addedContact = true;
	}
	
}
