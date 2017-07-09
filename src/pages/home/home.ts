import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	addedContact: boolean;
	signup: boolean;
	
	constructor() {
		this.addedContact = false;
		this.signup = false;
	}
	
	submitSignUp() {
		this.signup = true;
	}
	
	submitAddContact() {
		this.addedContact = true;
	}
	
}
