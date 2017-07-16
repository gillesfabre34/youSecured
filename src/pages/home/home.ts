import { Component } from '@angular/core';
import { FirebaseListObservable } from "angularfire2/database";
import { FirebaseProvider } from "../../providers/firebase/firebase";
import { User } from "../../assets/collections/user";
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import { AngularFireAuth } from "angularfire2/auth";
import { Facebook } from "../../app/facebook";

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	addedContact: boolean;
	email: string;
	facebook: Facebook;
	password: string;
	phoneNumber: string;
	signup: boolean;
	user: User;
	usr: Observable<firebase.User>;
	
	users: FirebaseListObservable<User[]>;
	
	constructor(public fireBaseProvider: FirebaseProvider,
	            public afAuth: AngularFireAuth) {
		this.usr = afAuth.authState;
		this.addedContact = false;
		this.signup = false;
		this.users = this.fireBaseProvider.getUsers();
		// console.log("%cHomePage constructor type of this.users","color: red; font-weight:bold;",this.users);
	}
	
	ngOnInit() {
		this.facebook = new Facebook('1387457551345169');
		console.log("%cHomePage ngOnInit Facebook ","color: red; font-weight:bold;",this.facebook);
		// this.login();
	}
	
	login() {
		console.log("%cHomePage login ","color: red; font-weight:bold;","");
		this.facebook.login()
	}
	
/*	login() {
		this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	}
	*/
	logout() {
		this.afAuth.auth.signOut();
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
