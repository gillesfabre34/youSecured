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
	email: string;
	password: string;
	phoneNumber: string;
	signup: boolean;
	user: User;
	users: FirebaseListObservable<User[]>;
	
	constructor(public fireBaseProvider: FirebaseProvider) {
		this.addedContact = false;
		this.signup = false;
		this.users = this.fireBaseProvider.getUsers();
		console.log("%cHomePage constructor type of this.users","color: red; font-weight:bold;",this.users);
	}
	
	submitSignUp() {
		this.signup = true;
		this.user = new User();
		this.user.email = this.email;
		this.user.password = this.password;
		this.user.phoneNumber = this.phoneNumber;
		this.fireBaseProvider.addUser(this.user);
	}
	
	submitAddContact() {
		this.addedContact = true;
	}
	
}
